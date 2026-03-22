// ============================================================
// Power Ageless 商談管理システム — GAS Backend
// Google Apps Script にコピーして使用
// ============================================================

// --- 設定 ---
function getSpreadsheet() {
  return SpreadsheetApp.getActiveSpreadsheet();
}

// --- シート名定数 ---
var SHEET = {
  COMPANIES: 'Companies',
  DEALS: 'Deals',
  TASKS: 'Tasks',
  JOBS: 'Jobs',
  CV_SENTS: 'CvSents',
  INTERVIEWS_ORAL: 'InterviewsOral',
};

// --- ユーティリティ ---
function sheetToJson(sheetName) {
  var sheet = getSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  var headers = data[0];
  var rows = [];
  for (var i = 1; i < data.length; i++) {
    var row = {};
    for (var j = 0; j < headers.length; j++) {
      var key = headers[j];
      var val = data[i][j];
      if (typeof val === 'string' && val.length > 0 && (val.charAt(0) === '[' || val.charAt(0) === '{')) {
        try { val = JSON.parse(val); } catch (e) { /* keep as string */ }
      }
      row[key] = val;
    }
    rows.push(row);
  }
  return rows;
}

function jsonToSheet(sheetName, rows) {
  var sheet = getSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    sheet = getSpreadsheet().insertSheet(sheetName);
  }
  if (rows.length === 0) return;
  var headers = Object.keys(rows[0]);
  var values = rows.map(function(row) {
    return headers.map(function(h) {
      var v = row[h];
      if (v !== null && typeof v === 'object') return JSON.stringify(v);
      return v !== undefined ? v : '';
    });
  });
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (values.length > 0) {
    sheet.getRange(2, 1, values.length, headers.length).setValues(values);
  }
}

// --- READ (doGet) ---
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || 'all';
  var result = {};

  try {
    if (action === 'all' || action === 'companies') {
      result.companies = sheetToJson(SHEET.COMPANIES);
    }
    if (action === 'all' || action === 'deals') {
      result.deals = sheetToJson(SHEET.DEALS);
    }
    if (action === 'all' || action === 'tasks') {
      result.tasks = sheetToJson(SHEET.TASKS);
    }
    if (action === 'all' || action === 'jobs') {
      result.jobs = sheetToJson(SHEET.JOBS);
    }
    if (action === 'all' || action === 'cvSents') {
      result.cvSents = sheetToJson(SHEET.CV_SENTS);
    }
    if (action === 'all' || action === 'interviewsOral') {
      result.interviewsOral = sheetToJson(SHEET.INTERVIEWS_ORAL);
    }
    result.success = true;
  } catch (err) {
    result.success = false;
    result.error = err.message;
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- WRITE (doPost) ---
function doPost(e) {
  var result = {};
  try {
    var body = JSON.parse(e.postData.contents);
    var action = body.action; // 'upsert' | 'delete'
    var sheet = body.sheet;   // sheet name key
    var data = body.data;     // row object or array

    var sheetName = SHEET[sheet];
    if (!sheetName) throw new Error('Unknown sheet: ' + sheet);

    if (action === 'upsert') {
      upsertRows(sheetName, Array.isArray(data) ? data : [data]);
    } else if (action === 'delete') {
      deleteRows(sheetName, Array.isArray(data) ? data : [data]);
    } else if (action === 'updateField') {
      // Update a single field: { id, field, value }
      updateField(sheetName, data.id, data.field, data.value);
    } else {
      throw new Error('Unknown action: ' + action);
    }

    result.success = true;
  } catch (err) {
    result.success = false;
    result.error = err.message;
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- UPSERT: id で既存行を更新、なければ追加 ---
// ※ row に既存ヘッダーにないキーがあれば、カラムを自動追加する
function upsertRows(sheetName, rows) {
  var sheet = getSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    jsonToSheet(sheetName, rows);
    return;
  }
  var data = sheet.getDataRange().getValues();
  var headers = data[0].slice(); // コピー

  // --- 新しいカラムを自動追加 ---
  var newCols = [];
  rows.forEach(function(row) {
    Object.keys(row).forEach(function(key) {
      if (headers.indexOf(key) === -1 && newCols.indexOf(key) === -1) {
        newCols.push(key);
      }
    });
  });
  if (newCols.length > 0) {
    // ヘッダー行に新カラムを追加
    var startCol = headers.length + 1;
    sheet.getRange(1, startCol, 1, newCols.length).setValues([newCols]);
    // 既存データ行にも空セルを埋める（getDataRangeが正しく動くように）
    if (data.length > 1) {
      var emptyFill = data.slice(1).map(function() { return newCols.map(function() { return ''; }); });
      sheet.getRange(2, startCol, emptyFill.length, newCols.length).setValues(emptyFill);
    }
    headers = headers.concat(newCols);
    // data も再取得（新カラム分を含む）
    data = sheet.getDataRange().getValues();
  }

  var idCol = headers.indexOf('id');
  if (idCol === -1) throw new Error('No id column in ' + sheetName);

  rows.forEach(function(row) {
    var targetId = row.id;
    var found = false;
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][idCol]) === String(targetId)) {
        // Update existing row
        var newRow = headers.map(function(h) {
          var v = row[h];
          if (v !== undefined) {
            if (v !== null && typeof v === 'object') return JSON.stringify(v);
            return v;
          }
          return data[i][headers.indexOf(h)];
        });
        sheet.getRange(i + 1, 1, 1, headers.length).setValues([newRow]);
        found = true;
        break;
      }
    }
    if (!found) {
      // Append new row
      var newRow = headers.map(function(h) {
        var v = row[h];
        if (v !== null && typeof v === 'object') return JSON.stringify(v);
        return v !== undefined ? v : '';
      });
      sheet.appendRow(newRow);
    }
  });
}

// --- DELETE: id で行を削除 ---
function deleteRows(sheetName, ids) {
  var sheet = getSpreadsheet().getSheetByName(sheetName);
  if (!sheet) return;
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var idCol = headers.indexOf('id');
  if (idCol === -1) return;

  var idsToDelete = ids.map(function(id) { return String(typeof id === 'object' ? id.id : id); });
  // Delete from bottom to top to preserve row indices
  for (var i = data.length - 1; i >= 1; i--) {
    if (idsToDelete.indexOf(String(data[i][idCol])) !== -1) {
      sheet.deleteRow(i + 1);
    }
  }
}

// --- UPDATE FIELD: 単一フィールド更新 ---
function updateField(sheetName, id, field, value) {
  var sheet = getSpreadsheet().getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet not found: ' + sheetName);
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var idCol = headers.indexOf('id');
  var fieldCol = headers.indexOf(field);
  if (idCol === -1) throw new Error('No id column');
  if (fieldCol === -1) throw new Error('No field: ' + field);

  for (var i = 1; i < data.length; i++) {
    if (String(data[i][idCol]) === String(id)) {
      var writeVal = (value !== null && typeof value === 'object') ? JSON.stringify(value) : value;
      sheet.getRange(i + 1, fieldCol + 1).setValue(writeVal);
      return;
    }
  }
  throw new Error('Row not found: id=' + id);
}

// --- 初期データ投入ユーティリティ ---
// スプシが空の時、このfunctionを手動実行してダミーデータを投入する
function seedFromDummyData() {
  var ui = SpreadsheetApp.getUi();
  var response = ui.alert('ダミーデータ投入', '全シートにダミーデータを投入しますか？既存データは上書きされます。', ui.ButtonSet.YES_NO);
  if (response !== ui.Button.YES) return;

  // Companies, Deals, Tasks, Jobs, CvSents, InterviewsOral のヘッダーだけ作成
  var sheets = [
    { name: SHEET.COMPANIES, headers: ['id','name','tier','category','itss','perm','dsl','lastDealDate','grossProfit','address','industry','corporateNumber','businessDescription','itssAttention','permAttention','frmc','permNote','cvNote','sentPickNote','maxAge','blindSent','blindSentMethod','realNameChannel','permAts','permAtsUrl','hiringTypes','hiringRoles','keywords','contractStatus','deptActivity','whitelist','deals','assignees'] },
    { name: SHEET.DEALS, headers: ['id','companyId','name','company','assignee','dept','lastMeeting','status','clientDept','clientPerson','ourPerson','businessDept','channel','acquiredBy','treeParent','treeCurrent','treeNext','treeBranches','treeChildren','meetings','tasks','jobs'] },
    { name: SHEET.TASKS, headers: ['id','type','name','company','category','due','assignee','method','status','dealId'] },
    { name: SHEET.JOBS, headers: ['id','dealId','companyId','title','dept','count','date','company','businessDept','dealName','status'] },
    { name: SHEET.CV_SENTS, headers: ['id','companyId','date','candidate','assignee','destination','unitPrice','jobId','dept'] },
    { name: SHEET.INTERVIEWS_ORAL, headers: ['id','companyId','type','date','candidate','assignee','destination','jobId','personId','dept'] },
  ];

  sheets.forEach(function(s) {
    var sheet = getSpreadsheet().getSheetByName(s.name);
    if (!sheet) sheet = getSpreadsheet().insertSheet(s.name);
    sheet.clearContents();
    sheet.getRange(1, 1, 1, s.headers.length).setValues([s.headers]);
  });

  ui.alert('シート作成完了', '6シートのヘッダーを作成しました。Reactアプリからデータを投入するか、手動でデータを入力してください。', ui.ButtonSet.OK);
}
