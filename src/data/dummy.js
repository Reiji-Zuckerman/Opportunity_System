// ============================================================
// 商談管理システム モックアップ ダミーデータ v3
// src/data/dummy.js として配置してください
// ============================================================

export const USERS = [
  { id: 1, name: '鈴木 一郎', dept: 'ITSS' },
  { id: 2, name: '田中 花子', dept: 'PERM' },
  { id: 3, name: '佐藤 次郎', dept: 'ITSS' },
  { id: 4, name: '山本 三郎', dept: 'DSL' },
  { id: 5, name: '伊藤 美咲', dept: 'FS' },
]

export const COMPANIES = [
  { id: 1, name: 'NTTデータ',   tier: 'Enterprise', category: 'SIer',    itss: '契約中', perm: '契約中', dsl: '商談中', lastDealDate: '2025/3/10' },
  { id: 2, name: '富士通',       tier: 'Enterprise', category: 'SIer',    itss: '商談中', perm: '契約中', dsl: '未接触', lastDealDate: '2025/3/12' },
  { id: 3, name: 'ノースサンド', tier: 'Mid',        category: 'コンサル', itss: '契約中', perm: '契約中', dsl: '未接触', lastDealDate: '2024/12/10' },
  { id: 4, name: 'Sansan',       tier: 'Mid',        category: 'Web系',   itss: '商談中', perm: '未接触', dsl: '未接触', lastDealDate: '2025/3/1' },
  { id: 5, name: 'トヨタ自動車', tier: 'Enterprise', category: '一般事業', itss: '契約中', perm: '未接触', dsl: '商談中', lastDealDate: '2025/2/28' },
]

export const COMPANY_DETAILS = {
  1: {
    info: { tier: 'Enterprise', category: 'SIer', grossProfit: 38400000, lastDealDate: '2025/3/10' },
    contractStatus: { itss: '契約中', perm: '契約中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 14, jobs: 10, lastContact: '2025/3/10' },
      { dept: 'PERM', deals: 4,  jobs: 3,  lastContact: '2025/3/5'  },
      { dept: 'DSL',  deals: 3,  jobs: 1,  lastContact: '2025/3/8'  },
    ],
    whitelist: [
      { dept: '製造事業部',           contacted: true,  jobAcquired: true  },
      { dept: 'DX推進室',             contacted: true,  jobAcquired: true  },
      { dept: '金融ソリューション部', contacted: true,  jobAcquired: true  },
      { dept: '人事部',               contacted: true,  jobAcquired: true  },
      { dept: 'IT推進部',             contacted: true,  jobAcquired: true  },
      { dept: 'クラウド推進本部',     contacted: true,  jobAcquired: false },
      { dept: '研究開発部',           contacted: false, jobAcquired: false },
      { dept: 'グローバル事業部',     contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 1,  name: '初回商談（社長・人事部長）',                  dept: 'FS',   lastMeeting: '2024/10/5',  remainingTasks: 0, status: '完了'   },
      { id: 2,  name: '製造事業部 レガシーマイグレーションPJ',       dept: 'ITSS', lastMeeting: '2025/3/10',  remainingTasks: 2, status: '実施済' },
      { id: 3,  name: '製造事業部 フェーズ2 クラウド移行',           dept: 'ITSS', lastMeeting: '2025/2/28',  remainingTasks: 3, status: '実施済' },
      { id: 4,  name: '製造事業部 IoTプラットフォーム構築',          dept: 'ITSS', lastMeeting: '2025/1/20',  remainingTasks: 1, status: '実施済' },
      { id: 5,  name: 'IoT基盤 セキュリティ強化PJ',                 dept: 'ITSS', lastMeeting: '2025/3/5',   remainingTasks: 2, status: '実施済' },
      { id: 32, name: 'IoT基盤 監視・運用自動化PJ',                 dept: 'ITSS', lastMeeting: '2025/3/8',   remainingTasks: 1, status: '実施済' },
      { id: 6,  name: 'DX推進室 スマートファクトリーPJ',             dept: 'FS',   lastMeeting: '2025/3/8',   remainingTasks: 1, status: '実施済' },
      { id: 7,  name: 'DX推進室 AI品質検査PJ',                      dept: 'DSL',  lastMeeting: '2025/2/15',  remainingTasks: 2, status: '実施済' },
      { id: 33, name: 'DX推進室 デジタルツイン基盤',                 dept: 'DSL',  lastMeeting: '2025/3/3',   remainingTasks: 2, status: '実施済' },
      { id: 8,  name: '金融ソリューション部 基幹刷新',               dept: 'ITSS', lastMeeting: '2025/1/30',  remainingTasks: 0, status: '完了'   },
      { id: 34, name: '金融ソリューション部 APIゲートウェイ構築',    dept: 'ITSS', lastMeeting: '2025/2/20',  remainingTasks: 1, status: '実施済' },
      { id: 9,  name: '人事部 採用DX支援',                           dept: 'PERM', lastMeeting: '2025/3/5',   remainingTasks: 1, status: '実施済' },
      { id: 35, name: 'クラウド推進本部 マルチクラウド戦略支援',     dept: 'ITSS', lastMeeting: '2025/2/25',  remainingTasks: 2, status: '実施済' },
      { id: 36, name: 'IT推進部 DevOps推進PJ',                      dept: 'ITSS', lastMeeting: '2025/2/10',  remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '伊藤 美咲', role: 'FS担当'   },
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '佐藤 次郎', role: 'ITSS副担当'},
    ],
  },

  2: {
    info: { tier: 'Enterprise', category: 'SIer', grossProfit: 12600000, lastDealDate: '2025/3/12' },
    contractStatus: { itss: '商談中', perm: '契約中', dsl: '未接触' },
    deptActivity: [
      { dept: 'ITSS', deals: 5, jobs: 3, lastContact: '2025/3/12' },
      { dept: 'PERM', deals: 5, jobs: 3, lastContact: '2025/3/5'  },
      { dept: 'DSL',  deals: 0, jobs: 0, lastContact: '—'         },
    ],
    whitelist: [
      { dept: 'HR部門',           contacted: true,  jobAcquired: true  },
      { dept: 'ITインフラ部',     contacted: true,  jobAcquired: true  },
      { dept: 'デジタル推進部',   contacted: true,  jobAcquired: true  },
      { dept: 'サービス事業部',   contacted: true,  jobAcquired: false },
      { dept: '研究開発部',       contacted: false, jobAcquired: false },
      { dept: 'グローバル営業部', contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 10, name: 'HR部門 採用強化PJ',              dept: 'PERM', lastMeeting: '2025/3/12', remainingTasks: 1, status: '予定'   },
      { id: 11, name: 'HR部門 エグゼクティブ採用',      dept: 'PERM', lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 15, name: 'HR部門 新卒採用強化',             dept: 'PERM', lastMeeting: '2025/1/15', remainingTasks: 0, status: '完了'   },
      { id: 37, name: 'HR部門 グローバル人材採用',       dept: 'PERM', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 12, name: 'ITインフラ部 基盤刷新支援',       dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 3, status: '実施済' },
      { id: 13, name: 'ITインフラ部 クラウドリフト',     dept: 'ITSS', lastMeeting: '2025/3/5',  remainingTasks: 0, status: '完了'   },
      { id: 14, name: 'デジタル推進部 DX人材支援',       dept: 'ITSS', lastMeeting: '2025/3/12', remainingTasks: 2, status: '実施済' },
      { id: 38, name: 'デジタル推進部 AI/MLエンジニア支援', dept: 'ITSS', lastMeeting: '2025/3/1', remainingTasks: 2, status: '実施済' },
      { id: 39, name: 'サービス事業部 SREエンジニア支援', dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '田中 花子', role: 'PERM担当' },
      { name: '佐藤 次郎', role: 'ITSS担当' },
    ],
  },

  3: {
    info: { tier: 'Mid', category: 'コンサル', grossProfit: 7800000, lastDealDate: '2025/1/15' },
    contractStatus: { itss: '契約中', perm: '契約中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 4, jobs: 3, lastContact: '2025/1/15' },
      { dept: 'PERM', deals: 4, jobs: 3, lastContact: '2024/11/28' },
      { dept: 'DSL',  deals: 1, jobs: 0, lastContact: '2025/1/10' },
    ],
    whitelist: [
      { dept: 'ERP推進部',   contacted: true,  jobAcquired: true  },
      { dept: 'PMO部門',     contacted: true,  jobAcquired: true  },
      { dept: 'SAP専門チーム', contacted: true, jobAcquired: true },
      { dept: 'BPR推進部',   contacted: true,  jobAcquired: false },
      { dept: '戦略企画部',  contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 16, name: 'ERP推進部 SAP人材支援',          dept: 'ITSS', lastMeeting: '2024/12/10', remainingTasks: 0, status: '完了' },
      { id: 17, name: 'ERP推進部 SAP追加支援',           dept: 'ITSS', lastMeeting: '2024/11/20', remainingTasks: 0, status: '完了' },
      { id: 40, name: 'ERP推進部 SAP BTP対応支援',       dept: 'ITSS', lastMeeting: '2025/1/15',  remainingTasks: 0, status: '完了' },
      { id: 18, name: 'PMO部門 PJ管理人材',              dept: 'PERM', lastMeeting: '2024/11/28', remainingTasks: 0, status: '完了' },
      { id: 19, name: 'PMO部門 シニアPM採用',            dept: 'PERM', lastMeeting: '2024/10/15', remainingTasks: 0, status: '完了' },
      { id: 41, name: 'PMO部門 アジャイルコーチ採用',    dept: 'PERM', lastMeeting: '2025/1/10',  remainingTasks: 0, status: '完了' },
      { id: 20, name: 'SAP専門チーム ABAP開発者追加',    dept: 'ITSS', lastMeeting: '2024/12/5',  remainingTasks: 0, status: '完了' },
      { id: 42, name: 'BPR推進部 業務改革コンサル支援',  dept: 'DSL',  lastMeeting: '2025/1/10',  remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
    ],
  },

  4: {
    info: { tier: 'Mid', category: 'Web系', grossProfit: 3600000, lastDealDate: '2025/3/1' },
    contractStatus: { itss: '商談中', perm: '未接触', dsl: '未接触' },
    deptActivity: [
      { dept: 'ITSS', deals: 6, jobs: 3, lastContact: '2025/3/1' },
      { dept: 'PERM', deals: 0, jobs: 0, lastContact: '—'        },
      { dept: 'DSL',  deals: 0, jobs: 0, lastContact: '—'        },
    ],
    whitelist: [
      { dept: 'エンジニアリング本部', contacted: true,  jobAcquired: true  },
      { dept: 'プロダクト部門',       contacted: true,  jobAcquired: true  },
      { dept: 'データ基盤部',         contacted: true,  jobAcquired: false },
      { dept: 'セキュリティ部門',     contacted: false, jobAcquired: false },
      { dept: '営業本部',             contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 21, name: 'エンジニアリング本部 開発人材支援',         dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 22, name: 'エンジニアリング本部 Goエンジニア追加',     dept: 'ITSS', lastMeeting: '2025/2/5',  remainingTasks: 3, status: '実施済' },
      { id: 43, name: 'エンジニアリング本部 フロントエンド強化',   dept: 'ITSS', lastMeeting: '2025/3/1',  remainingTasks: 2, status: '実施済' },
      { id: 23, name: 'プロダクト部門 PdM人材支援',                dept: 'ITSS', lastMeeting: '2025/1/20', remainingTasks: 1, status: '実施済' },
      { id: 44, name: 'プロダクト部門 デザインエンジニア採用',     dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 2, status: '実施済' },
      { id: 45, name: 'データ基盤部 データエンジニア支援',         dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '佐藤 次郎', role: 'ITSS担当' },
    ],
  },

  5: {
    info: { tier: 'Enterprise', category: '一般事業', grossProfit: 22400000, lastDealDate: '2025/2/28' },
    contractStatus: { itss: '契約中', perm: '未接触', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 10, jobs: 7, lastContact: '2025/2/28' },
      { dept: 'PERM', deals: 0,  jobs: 0, lastContact: '—'         },
      { dept: 'DSL',  deals: 4,  jobs: 2, lastContact: '2025/2/15' },
    ],
    whitelist: [
      { dept: 'デジタル推進本部',     contacted: true,  jobAcquired: true  },
      { dept: '生産技術部',           contacted: true,  jobAcquired: true  },
      { dept: '情報システム部',       contacted: true,  jobAcquired: true  },
      { dept: 'コネクティッド部門',   contacted: true,  jobAcquired: true  },
      { dept: 'AI研究所',             contacted: true,  jobAcquired: false },
      { dept: 'HR・人事部',           contacted: false, jobAcquired: false },
      { dept: '調達・購買部',         contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 24, name: 'デジタル推進本部 基幹刷新',                   dept: 'DSL',  lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 25, name: 'デジタル推進本部 SAP移行フェーズ2',            dept: 'DSL',  lastMeeting: '2025/2/10', remainingTasks: 1, status: '実施済' },
      { id: 26, name: 'デジタル推進本部 データ基盤構築',              dept: 'DSL',  lastMeeting: '2025/1/25', remainingTasks: 0, status: '完了'   },
      { id: 46, name: 'デジタル推進本部 グローバルERP展開',           dept: 'DSL',  lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 27, name: '生産技術部 組込みエンジニア支援',              dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 1, status: '実施済' },
      { id: 28, name: '生産技術部 RustエンジニアPJ',                 dept: 'ITSS', lastMeeting: '2025/1/30', remainingTasks: 2, status: '実施済' },
      { id: 47, name: '生産技術部 FPGAエンジニア支援',               dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 29, name: '情報システム部 レガシー移行支援',              dept: 'ITSS', lastMeeting: '2025/1/30', remainingTasks: 0, status: '完了'   },
      { id: 30, name: '情報システム部 JAVA/Kotlin刷新',               dept: 'ITSS', lastMeeting: '2024/12/20', remainingTasks: 0, status: '完了'  },
      { id: 48, name: '情報システム部 マイクロサービス移行',          dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 31, name: 'コネクティッド部門 車載ソフトウェア支援',      dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 49, name: 'コネクティッド部門 OTA更新基盤PJ',            dept: 'ITSS', lastMeeting: '2025/3/1',  remainingTasks: 1, status: '実施済' },
      { id: 50, name: 'AI研究所 自動運転AI人材支援',                 dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '鈴木 一郎', role: 'ITSS担当' },
    ],
  },
}

export const DEALS = [
  // NTTデータ
  { id: 1,  name: '初回商談（社長・人事部長）',                  companyId: 1, company: 'NTTデータ',   assignee: '伊藤 美咲', dept: 'FS',   lastMeeting: '2024/10/5',   status: '完了'   },
  { id: 2,  name: '製造事業部 レガシーマイグレーションPJ',       companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/10',   status: '実施済' },
  { id: 3,  name: '製造事業部 フェーズ2 クラウド移行',           companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/28',   status: '実施済' },
  { id: 4,  name: '製造事業部 IoTプラットフォーム構築',          companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/1/20',   status: '実施済' },
  { id: 5,  name: 'IoT基盤 セキュリティ強化PJ',                 companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',    status: '実施済' },
  { id: 32, name: 'IoT基盤 監視・運用自動化PJ',                 companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/8',    status: '実施済' },
  { id: 6,  name: 'DX推進室 スマートファクトリーPJ',             companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'FS',   lastMeeting: '2025/3/8',    status: '実施済' },
  { id: 7,  name: 'DX推進室 AI品質検査PJ',                      companyId: 1, company: 'NTTデータ',   assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/15',   status: '実施済' },
  { id: 33, name: 'DX推進室 デジタルツイン基盤',                 companyId: 1, company: 'NTTデータ',   assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/3/3',    status: '実施済' },
  { id: 8,  name: '金融ソリューション部 基幹刷新',               companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30',   status: '完了'   },
  { id: 34, name: '金融ソリューション部 APIゲートウェイ構築',    companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20',   status: '実施済' },
  { id: 9,  name: '人事部 採用DX支援',                           companyId: 1, company: 'NTTデータ',   assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/5',    status: '実施済' },
  { id: 35, name: 'クラウド推進本部 マルチクラウド戦略支援',     companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/25',   status: '実施済' },
  { id: 36, name: 'IT推進部 DevOps推進PJ',                      companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/10',   status: '実施済' },
  // 富士通
  { id: 10, name: 'HR部門 採用強化PJ',                           companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/12', status: '予定'   },
  { id: 11, name: 'HR部門 エグゼクティブ採用',                   companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 15, name: 'HR部門 新卒採用強化',                         companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/1/15', status: '完了'   },
  { id: 37, name: 'HR部門 グローバル人材採用',                   companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 12, name: 'ITインフラ部 基盤刷新支援',                   companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 13, name: 'ITインフラ部 クラウドリフト',                 companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '完了'   },
  { id: 14, name: 'デジタル推進部 DX人材支援',                   companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/12', status: '実施済' },
  { id: 38, name: 'デジタル推進部 AI/MLエンジニア支援',          companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 39, name: 'サービス事業部 SREエンジニア支援',            companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  // ノースサンド
  { id: 16, name: 'ERP推進部 SAP人材支援',                       companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/10', status: '完了' },
  { id: 17, name: 'ERP推進部 SAP追加支援',                       companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/11/20', status: '完了' },
  { id: 40, name: 'ERP推進部 SAP BTP対応支援',                   companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/15',  status: '完了' },
  { id: 18, name: 'PMO部門 PJ管理人材',                          companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2024/11/28', status: '完了' },
  { id: 19, name: 'PMO部門 シニアPM採用',                        companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2024/10/15', status: '完了' },
  { id: 41, name: 'PMO部門 アジャイルコーチ採用',                companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/1/10',  status: '完了' },
  { id: 20, name: 'SAP専門チーム ABAP開発者追加',                companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/5',  status: '完了' },
  { id: 42, name: 'BPR推進部 業務改革コンサル支援',              companyId: 3, company: 'ノースサンド', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/1/10',  status: '実施済' },
  // Sansan
  { id: 21, name: 'エンジニアリング本部 開発人材支援',           companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 22, name: 'エンジニアリング本部 Goエンジニア追加',       companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/5',  status: '実施済' },
  { id: 43, name: 'エンジニアリング本部 フロントエンド強化',     companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 23, name: 'プロダクト部門 PdM人材支援',                  companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/1/20', status: '実施済' },
  { id: 44, name: 'プロダクト部門 デザインエンジニア採用',       companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
  { id: 45, name: 'データ基盤部 データエンジニア支援',           companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  // トヨタ自動車
  { id: 24, name: 'デジタル推進本部 基幹刷新',                   companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/28', status: '実施済' },
  { id: 25, name: 'デジタル推進本部 SAP移行フェーズ2',            companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/10', status: '実施済' },
  { id: 26, name: 'デジタル推進本部 データ基盤構築',              companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/1/25', status: '完了'   },
  { id: 46, name: 'デジタル推進本部 グローバルERP展開',           companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/20', status: '実施済' },
  { id: 27, name: '生産技術部 組込みエンジニア支援',              companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 28, name: '生産技術部 RustエンジニアPJ',                 companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30', status: '実施済' },
  { id: 47, name: '生産技術部 FPGAエンジニア支援',               companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 29, name: '情報システム部 レガシー移行支援',              companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30', status: '完了'   },
  { id: 30, name: '情報システム部 JAVA/Kotlin刷新',               companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/20', status: '完了'  },
  { id: 48, name: '情報システム部 マイクロサービス移行',          companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 31, name: 'コネクティッド部門 車載ソフトウェア支援',      companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 49, name: 'コネクティッド部門 OTA更新基盤PJ',            companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 50, name: 'AI研究所 自動運転AI人材支援',                 companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
]

export const DEAL_DETAILS = {
  1: {
    basicInfo: { company: 'NTTデータ', dept: '（全社）', clientPerson: '佐々木 代表取締役社長、山田 人事部長', ourPerson: '伊藤 美咲', businessDept: 'FS', channel: 'toBマーケ', acquiredBy: '伊藤 美咲', status: '完了' },
    tree: { parent: null, current: '初回商談（社長・人事部長）', children: ['製造事業部 レガシーマイグレーションPJ', 'DX推進室 スマートファクトリーPJ', '金融ソリューション部 基幹刷新', '人事部 採用DX支援', 'クラウド推進本部 マルチクラウド戦略支援'] },
    meetings: [
      { round: 2, date: '2024/10/5',  attendees: '佐々木社長、山田部長、伊藤', content: '経営課題の深掘り。製造・金融・HR各領域でのDX推進ニーズを確認。各部門責任者への紹介を取り付ける。' },
      { round: 1, date: '2024/9/15',  attendees: '佐々木社長、伊藤',           content: 'toBマーケ経由の初訪問。2030年問題に向けたレガシー刷新と人材確保が最優先課題。' },
    ],
    tasks: [], jobs: [],
  },

  2: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部', clientPerson: '山田 康介 部長', ourPerson: '鈴木 一郎、田中 花子', businessDept: 'ITSS', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: '製造事業部 レガシーマイグレーションPJ', children: ['製造事業部 フェーズ2 クラウド移行', '製造事業部 IoTプラットフォーム構築'] },
    meetings: [
      { round: 4, date: '2025/3/10',  attendees: '山田部長、佐藤課長、鈴木、田中', content: 'PoC結果報告。移行成功率98%確認。フェーズ2への移行を正式承認。COBOLエンジニア3名の継続稼働が決定。' },
      { round: 3, date: '2025/2/10',  attendees: '山田部長、鈴木',               content: 'PoC中間報告。COBOLからJavaへの変換精度を確認。業務ロジックの複雑な部分の扱いを議論。' },
      { round: 2, date: '2025/1/15',  attendees: '山田部長、鈴木',               content: '移行コスト・スケジュールの概算提示。PoCへの合意を得る。' },
      { round: 1, date: '2024/11/20', attendees: '山田部長',                     content: '初回訪問。40年以上稼働のCOBOL基幹システム刷新が急務。' },
    ],
    tasks: [
      { status: 'overdue', name: 'COBOLエンジニア追加候補者ピック', due: '2025/3/10', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'フェーズ2提案資料作成',           due: '2025/3/20', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'COBOLエンジニア（継続）', count: 3, date: '2025/3/10', dept: 'ITSS' },
      { title: 'Javaアーキテクト',        count: 1, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  3: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部', clientPerson: '山田 康介 部長、佐藤 技術課長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '製造事業部 レガシーマイグレーションPJ', current: '製造事業部 フェーズ2 クラウド移行', children: [] },
    meetings: [
      { round: 3, date: '2025/2/28', attendees: '山田部長、佐藤課長、鈴木', content: 'AWSアーキテクチャ設計書レビュー。マイクロサービス化の優先順位確定。4月からの本格移行に合意。' },
      { round: 2, date: '2025/2/5',  attendees: '山田部長、鈴木',           content: 'クラウド移行ロードマップ提示。コンテナ化対応が必須と判明。' },
      { round: 1, date: '2025/1/20', attendees: '佐藤課長、鈴木',           content: 'フェーズ1完了を受けた追加商談。クラウドネイティブ化のニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'AWSエンジニア候補者提出（5名）', due: '2025/3/15', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'コンテナ専門家スカウト',          due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '契約書ドラフト送付',               due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'AWSアーキテクト',          count: 2, date: '2025/2/28', dept: 'ITSS' },
      { title: 'Kubernetes/Dockerエンジニア', count: 3, date: '2025/2/28', dept: 'ITSS' },
    ],
  },

  4: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 IoT推進チーム', clientPerson: '山田 康介 部長、木村 IoTリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 レガシーマイグレーションPJ', current: '製造事業部 IoTプラットフォーム構築', children: ['IoT基盤 セキュリティ強化PJ', 'IoT基盤 監視・運用自動化PJ'] },
    meetings: [
      { round: 3, date: '2025/1/20', attendees: '木村リーダー、佐藤', content: 'IoTプラットフォーム要件確定。Python/RustエンジニアとAWS IoT専門家の組み合わせが必要。3名体制で4月稼働。' },
      { round: 2, date: '2024/12/20', attendees: '木村リーダー、佐藤', content: '技術スタック確認。AWSベースのIoTプラットフォームにRustで高速処理を実装する方針確定。' },
      { round: 1, date: '2024/12/5',  attendees: '山田部長、木村リーダー、佐藤', content: '山田部長の紹介で初対面。スマート工場向けIoT基盤構築PJの人材ニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'IoT/Rustエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'IoT/Pythonエンジニア', count: 2, date: '2025/1/20', dept: 'ITSS' },
      { title: 'AWS IoT専門家',        count: 1, date: '2025/1/20', dept: 'ITSS' },
    ],
  },

  5: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 セキュリティチーム', clientPerson: '木村 IoTリーダー、高木 セキュリティ担当', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 IoTプラットフォーム構築', current: 'IoT基盤 セキュリティ強化PJ', children: [] },
    meetings: [
      { round: 2, date: '2025/3/5',  attendees: '高木担当、佐藤', content: 'ゼロトラスト対応のセキュリティエンジニアが必要。CISSP保有者が望ましい。' },
      { round: 1, date: '2025/2/15', attendees: '木村リーダー、高木担当、佐藤', content: 'IoTプラットフォーム稼働後のセキュリティ強化ニーズ。専門家の追加支援を依頼される。' },
    ],
    tasks: [
      { status: 'pending', name: 'CISSPセキュリティエンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '提案書作成',                           due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'セキュリティエンジニア（CISSP）', count: 2, date: '2025/3/5', dept: 'ITSS' },
    ],
  },

  32: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 運用チーム', clientPerson: '木村 IoTリーダー、岡本 運用担当', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 IoTプラットフォーム構築', current: 'IoT基盤 監視・運用自動化PJ', children: [] },
    meetings: [
      { round: 2, date: '2025/3/8',  attendees: '岡本担当、佐藤', content: 'Prometheus/Grafanaによる監視基盤構築の要件確認。SREエンジニア2名での対応を提案。' },
      { round: 1, date: '2025/2/25', attendees: '木村リーダー、岡本、佐藤', content: 'セキュリティ強化PJから派生。IoT基盤の監視・運用自動化ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'SRE/監視基盤エンジニア候補提出', due: '2025/3/25', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'SRE/Prometheus専門家', count: 2, date: '2025/3/8', dept: 'ITSS' },
    ],
  },

  6: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室', clientPerson: '石田 隆 室長', ourPerson: '鈴木 一郎', businessDept: 'FS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: 'DX推進室 スマートファクトリーPJ', children: ['DX推進室 AI品質検査PJ', 'DX推進室 デジタルツイン基盤'] },
    meetings: [
      { round: 3, date: '2025/3/8',  attendees: '石田室長、鈴木', content: 'IoT/Pythonエンジニア2名の参画内定。4月より要件定義フェーズ開始。AI品質検査の追加ニーズも相談受ける。' },
      { round: 2, date: '2025/2/12', attendees: '石田室長、鈴木', content: 'スマートファクトリー向け人材要件の詳細確認。Python/TensorFlowの経験者が必須。' },
      { round: 1, date: '2025/1/25', attendees: '石田室長',       content: '山田部長の紹介で初訪問。生産ライン自動化PJでIoT・AI人材が不足。' },
    ],
    tasks: [
      { status: 'pending', name: 'IoTエンジニア候補者最終調整', due: '2025/3/20', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'IoT/Pythonエンジニア',    count: 2, date: '2025/3/8',  dept: 'ITSS' },
      { title: 'TensorFlow MLエンジニア', count: 1, date: '2025/2/12', dept: 'ITSS' },
    ],
  },

  7: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室 AI推進チーム', clientPerson: '石田 隆 室長、西村 AIリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'DX推進室 スマートファクトリーPJ', current: 'DX推進室 AI品質検査PJ', children: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '西村リーダー、山本', content: 'AI品質検査システムの要件確認。画像認識とリアルタイム処理の専門家が必要。コンサル上流支援も求められる。' },
      { round: 1, date: '2025/1/30', attendees: '石田室長、西村リーダー、山本', content: 'スマートファクトリーPJから派生。AI活用による品質検査自動化のコンサルニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'AI品質検査コンサル候補者提出', due: '2025/3/15', assignee: '山本 三郎' },
      { status: 'pending', name: '提案資料（AI品質検査）作成',   due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'AIコンサルタント（画像認識）', count: 1, date: '2025/2/15', dept: 'DSL' },
      { title: 'MLエンジニア（リアルタイム）', count: 2, date: '2025/2/15', dept: 'DSL' },
    ],
  },

  33: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室 デジタルイノベーションチーム', clientPerson: '石田 室長、中西 DXリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'DX推進室 スマートファクトリーPJ', current: 'DX推進室 デジタルツイン基盤', children: [] },
    meetings: [
      { round: 2, date: '2025/3/3',  attendees: '中西リーダー、山本', content: 'デジタルツイン構築のためのシミュレーションエンジニアとUnityエンジニアが必要。工場の3Dモデル化が目標。' },
      { round: 1, date: '2025/2/18', attendees: '石田室長、中西リーダー、山本', content: 'AI品質検査PJから派生した追加商談。製造ラインのデジタルツイン化構想をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'デジタルツイン/Unityエンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
      { status: 'pending', name: 'シミュレーション専門家アプローチ',       due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'Unityエンジニア（デジタルツイン）', count: 2, date: '2025/3/3', dept: 'DSL' },
      { title: 'シミュレーションエンジニア',         count: 1, date: '2025/3/3', dept: 'DSL' },
    ],
  },

  8: {
    basicInfo: { company: 'NTTデータ', dept: '金融ソリューション部', clientPerson: '中川 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: '初回商談（社長・人事部長）', current: '金融ソリューション部 基幹刷新', children: ['金融ソリューション部 APIゲートウェイ構築'] },
    meetings: [
      { round: 4, date: '2025/1/30',  attendees: '中川部長、鈴木', content: '成約。COBOLエンジニア2名・Javaエンジニア3名の参画確定。2月より稼働開始。' },
      { round: 3, date: '2025/1/10',  attendees: '中川部長、鈴木', content: 'スキルシートレビュー完了。3名を先方に推薦。最終面接を調整中。' },
      { round: 2, date: '2024/12/10', attendees: '中川部長、鈴木', content: '要件詳細確認。金融系COBOLの経験が必須。FISCガイドライン対応の知識も求められる。' },
      { round: 1, date: '2024/11/25', attendees: '中川部長',       content: '山田部長紹介で初訪問。勘定系システムの段階的刷新PJで5名規模の体制が必要。' },
    ],
    tasks: [],
    jobs: [
      { title: '金融系COBOLエンジニア', count: 2, date: '2025/1/30', dept: 'ITSS' },
      { title: 'Javaエンジニア（金融）', count: 3, date: '2025/1/30', dept: 'ITSS' },
    ],
  },

  34: {
    basicInfo: { company: 'NTTデータ', dept: '金融ソリューション部 API推進チーム', clientPerson: '中川 部長、村田 APIリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '金融ソリューション部 基幹刷新', current: '金融ソリューション部 APIゲートウェイ構築', children: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '村田リーダー、佐藤', content: 'APIゲートウェイの設計要件確認。Kong/AWS API GatewayのいずれかでOpen Banking対応が必要。' },
      { round: 1, date: '2025/2/5',  attendees: '中川部長、村田リーダー、佐藤', content: '基幹刷新PJ完了に伴う追加案件。Open Banking対応のAPIゲートウェイ構築の人材ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'APIゲートウェイ専門家候補者提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'APIゲートウェイエンジニア（Kong）', count: 2, date: '2025/2/20', dept: 'ITSS' },
    ],
  },

  9: {
    basicInfo: { company: 'NTTデータ', dept: '人事部', clientPerson: '山田 人事部長、林 採用担当', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: '人事部 採用DX支援', children: [] },
    meetings: [
      { round: 3, date: '2025/3/5',  attendees: '林採用担当、田中', content: 'クラウドエンジニア・AIエンジニアを正社員で5名採用したいとのこと。スカウト媒体の活用も提案。' },
      { round: 2, date: '2025/2/18', attendees: '山田部長、林担当、田中', content: 'PERM採用DX支援の方向性確認。エンジニア採用に特化したサービスの提案を受け入れてもらえた。' },
      { round: 1, date: '2025/2/5',  attendees: '山田部長、田中', content: 'ITエンジニアの採用難が深刻化。紹介採用も検討中。' },
    ],
    tasks: [
      { status: 'pending', name: 'クラウドエンジニア正社員候補スカウト', due: '2025/3/18', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'クラウドエンジニア（正社員）', count: 3, date: '2025/3/5', dept: 'PERM' },
      { title: 'AIエンジニア（正社員）',       count: 2, date: '2025/3/5', dept: 'PERM' },
    ],
  },

  35: {
    basicInfo: { company: 'NTTデータ', dept: 'クラウド推進本部', clientPerson: '前田 本部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: 'クラウド推進本部 マルチクラウド戦略支援', children: [] },
    meetings: [
      { round: 2, date: '2025/2/25', attendees: '前田本部長、鈴木', content: 'AWS/Azure/GCPを横断するマルチクラウドアーキテクト2名の参画が必要。FinOps経験者も求めている。' },
      { round: 1, date: '2025/2/10', attendees: '前田本部長',       content: '山田部長の紹介で初訪問。マルチクラウド戦略推進のための専門人材が不足。' },
    ],
    tasks: [
      { status: 'pending', name: 'マルチクラウドアーキテクト候補提出', due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'マルチクラウドアーキテクト', count: 2, date: '2025/2/25', dept: 'ITSS' },
      { title: 'FinOpsエンジニア',           count: 1, date: '2025/2/25', dept: 'ITSS' },
    ],
  },

  36: {
    basicInfo: { company: 'NTTデータ', dept: 'IT推進部', clientPerson: '橋本 IT推進部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'IT推進部 DevOps推進PJ', children: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '橋本部長、佐藤', content: 'DevOps推進のためのSRE・DevOpsエンジニア2名の参画が必要。CI/CDパイプライン構築経験者が必須。' },
      { round: 1, date: '2025/1/28', attendees: '橋本部長',       content: '前田本部長の紹介で訪問。開発と運用の分断が課題でDevOps文化の浸透を推進したい。' },
    ],
    tasks: [
      { status: 'pending', name: 'DevOps/SREエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'DevOpsエンジニア（CI/CD）', count: 2, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  10: {
    basicInfo: { company: '富士通', dept: 'HR部門', clientPerson: '中村 由美 部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '予定' },
    tree: { parent: null, current: 'HR部門 採用強化PJ', children: ['HR部門 エグゼクティブ採用', 'HR部門 新卒採用強化', 'HR部門 グローバル人材採用'] },
    meetings: [
      { round: 1, date: '2025/3/12', attendees: '中村部長、田中', content: '初回商談予定。エンジニア採用強化施策について議論予定。クラウド・AI人材の採用が急務。' },
    ],
    tasks: [
      { status: 'today', name: '商談前資料準備・会社概要送付', due: '2025/3/12', assignee: '田中 花子' },
    ],
    jobs: [],
  },

  11: {
    basicInfo: { company: '富士通', dept: 'HR部門 エグゼクティブ採用チーム', clientPerson: '中村 由美 部長、橋本 HRビジネスパートナー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 エグゼクティブ採用', children: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '橋本HRBp、田中', content: 'CTO・CDO候補の要件確認。外資IT経験者が望ましく英語力必須。年収1,500万以上の案件。' },
      { round: 1, date: '2025/2/5',  attendees: '中村部長、橋本、田中', content: '経営幹部クラスのIT人材不足。CTO・CDO候補を紹介経由で進めたいとの相談。' },
    ],
    tasks: [
      { status: 'pending', name: 'CTO候補者リスト作成（5名）', due: '2025/3/15', assignee: '田中 花子' },
      { status: 'pending', name: 'CDO候補者スカウト開始',      due: '2025/3/20', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'CTO候補（正社員）', count: 1, date: '2025/2/20', dept: 'PERM' },
      { title: 'CDO候補（正社員）', count: 1, date: '2025/2/20', dept: 'PERM' },
    ],
  },

  15: {
    basicInfo: { company: '富士通', dept: 'HR部門 新卒採用チーム', clientPerson: '中村 由美 部長、田所 新卒採用リーダー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 新卒採用強化', children: [] },
    meetings: [
      { round: 2, date: '2025/1/15', attendees: '田所リーダー、田中', content: '成約。理系大学院生エンジニア職を中心に20名の採用支援確定。2月より候補者紹介開始。' },
      { round: 1, date: '2024/12/20', attendees: '中村部長、田所、田中', content: '新卒採用強化について相談。AI・クラウド専攻の学生採用が課題。' },
    ],
    tasks: [],
    jobs: [
      { title: '理系院卒エンジニア（新卒）', count: 20, date: '2025/1/15', dept: 'PERM' },
    ],
  },

  37: {
    basicInfo: { company: '富士通', dept: 'HR部門 グローバル採用チーム', clientPerson: '中村 部長、谷口 グローバルHR', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 グローバル人材採用', children: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '谷口グローバルHR、田中', content: 'グローバル拠点向けのITエンジニア採用。日英バイリンガルのクラウドエンジニアが5名必要。' },
      { round: 1, date: '2025/2/12', attendees: '中村部長、谷口、田中', content: 'グローバル事業拡大に伴う海外拠点でのエンジニア採用ニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'バイリンガルエンジニア候補者ピック', due: '2025/3/20', assignee: '田中 花子' },
      { status: 'pending', name: 'グローバル採用提案書作成',           due: '2025/3/18', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'バイリンガルクラウドエンジニア', count: 5, date: '2025/2/28', dept: 'PERM' },
    ],
  },

  12: {
    basicInfo: { company: '富士通', dept: 'ITインフラ部', clientPerson: '高橋 豊 部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: null, current: 'ITインフラ部 基盤刷新支援', children: ['ITインフラ部 クラウドリフト', 'デジタル推進部 DX人材支援'] },
    meetings: [
      { round: 3, date: '2025/2/25', attendees: '高橋部長、佐藤', content: 'Kubernetes専門家3名の参画内定。4月より6ヶ月間のプロジェクト参画開始。' },
      { round: 2, date: '2025/2/5',  attendees: '高橋部長、佐藤', content: 'Docker/Kubernetesの実務3年以上が必須。AWSの経験も求められる。' },
      { round: 1, date: '2025/1/20', attendees: '高橋部長',       content: 'Kubernetesベースのコンテナ基盤への刷新PJで人材不足。3名規模の支援が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'Kubernetes候補スキルシート確認', due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '契約書取交し準備',               due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'Kubernetesエンジニア', count: 3, date: '2025/2/25', dept: 'ITSS' },
    ],
  },

  13: {
    basicInfo: { company: '富士通', dept: 'ITインフラ部', clientPerson: '松本 健一 課長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '完了' },
    tree: { parent: 'ITインフラ部 基盤刷新支援', current: 'ITインフラ部 クラウドリフト', children: [] },
    meetings: [
      { round: 3, date: '2025/3/5',  attendees: '松本課長、佐藤', content: '成約。AWSインフラエンジニア2名の参画確定。4月稼働開始。契約書取交し完了。' },
      { round: 2, date: '2025/2/10', attendees: '松本課長、佐藤', content: 'AWSとTerraformの経験者が必須。Infrastructure as Code対応が求められる。' },
      { round: 1, date: '2025/1/20', attendees: '松本課長',       content: 'オンプレミスからAWS移行PJの人材ニーズをヒアリング。' },
    ],
    tasks: [],
    jobs: [
      { title: 'AWSインフラエンジニア（Terraform）', count: 2, date: '2025/3/5', dept: 'ITSS' },
    ],
  },

  14: {
    basicInfo: { company: '富士通', dept: 'デジタル推進部', clientPerson: '大西 デジタル推進部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'ITインフラ部 基盤刷新支援', current: 'デジタル推進部 DX人材支援', children: ['デジタル推進部 AI/MLエンジニア支援'] },
    meetings: [
      { round: 2, date: '2025/3/12', attendees: '大西部長、佐藤', content: 'マイクロサービス設計経験者とデータエンジニアが必要。DXプロジェクトの中核人材。' },
      { round: 1, date: '2025/2/20', attendees: '大西部長',       content: '高橋部長の紹介で訪問。DX推進PJの中核人材が不足。複数名の追加支援を求められた。' },
    ],
    tasks: [
      { status: 'pending', name: 'DXアーキテクト候補者提出',    due: '2025/3/20', assignee: '佐藤 次郎' },
      { status: 'pending', name: 'データエンジニア候補者ピック', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'DXアーキテクト',  count: 1, date: '2025/3/12', dept: 'ITSS' },
      { title: 'データエンジニア', count: 2, date: '2025/3/12', dept: 'ITSS' },
    ],
  },

  38: {
    basicInfo: { company: '富士通', dept: 'デジタル推進部 AIチーム', clientPerson: '大西 部長、小川 AIリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'デジタル推進部 DX人材支援', current: 'デジタル推進部 AI/MLエンジニア支援', children: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '小川リーダー、佐藤', content: 'LLM/RAGシステムの構築経験者が必要。PyTorchとLangChainの実務経験者を優先。' },
      { round: 1, date: '2025/2/15', attendees: '大西部長、小川、佐藤', content: 'DX支援から派生した追加商談。生成AI活用のR&D強化のため、ML専門家の補強が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'LLM/RAGエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'MLエンジニア（LLM/RAG）', count: 2, date: '2025/3/1', dept: 'ITSS' },
    ],
  },

  39: {
    basicInfo: { company: '富士通', dept: 'サービス事業部', clientPerson: '岩田 サービス事業部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'サービス事業部 SREエンジニア支援', children: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '岩田部長、佐藤', content: 'SREエンジニア2名の参画が必要。可用性99.99%のサービス運用経験者を求めている。' },
      { round: 1, date: '2025/2/1',  attendees: '岩田部長',       content: '高橋部長の紹介で訪問。クラウドサービスの信頼性向上のためSRE専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SREエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'SREエンジニア（高可用性）', count: 2, date: '2025/2/15', dept: 'ITSS' },
    ],
  },

  16: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部', clientPerson: '小林 拓也 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: null, current: 'ERP推進部 SAP人材支援', children: ['ERP推進部 SAP追加支援', 'ERP推進部 SAP BTP対応支援', 'PMO部門 PJ管理人材', 'SAP専門チーム ABAP開発者追加'] },
    meetings: [
      { round: 2, date: '2024/12/10', attendees: '小林部長、鈴木', content: '成約。SAP ABAPエンジニア1名の参画確定。1月より稼働。追加の人材ニーズについても話し合い。' },
      { round: 1, date: '2024/11/15', attendees: '小林部長',       content: 'NTTデータからの紹介で初訪問。SAP ABAPの開発者不足。複数PJで同時に人材が必要な状況。' },
    ],
    tasks: [], jobs: [{ title: 'SAP ABAPエンジニア', count: 1, date: '2024/12/10', dept: 'ITSS' }],
  },

  17: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部', clientPerson: '小林 部長、村山 SAP主任', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'ERP推進部 SAP追加支援', children: [] },
    meetings: [
      { round: 2, date: '2024/11/20', attendees: '村山主任、鈴木', content: '成約。SAP FI/COコンサルタント2名の追加参画確定。12月より稼働。' },
      { round: 1, date: '2024/11/5',  attendees: '小林部長、村山主任、鈴木', content: 'FI/CO領域の追加ニーズが浮上。2名体制での支援を依頼。' },
    ],
    tasks: [], jobs: [{ title: 'SAP FI/COコンサルタント', count: 2, date: '2024/11/20', dept: 'ITSS' }],
  },

  40: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部 クラウドチーム', clientPerson: '小林 部長、田村 BTPリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'ERP推進部 SAP BTP対応支援', children: [] },
    meetings: [
      { round: 2, date: '2025/1/15', attendees: '田村リーダー、鈴木', content: '成約。SAP BTP専門家1名の参画確定。SAP S/4HANAとBTPの統合プロジェクトに参画。' },
      { round: 1, date: '2025/1/5',  attendees: '小林部長、田村リーダー、鈴木', content: 'SAP追加支援から派生。クラウドプラットフォームであるBTPへの移行専門家が必要。' },
    ],
    tasks: [], jobs: [{ title: 'SAP BTP専門家', count: 1, date: '2025/1/15', dept: 'ITSS' }],
  },

  18: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門', clientPerson: '加藤 真理 マネージャー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'PMO部門 PJ管理人材', children: ['PMO部門 シニアPM採用', 'PMO部門 アジャイルコーチ採用'] },
    meetings: [
      { round: 2, date: '2024/11/28', attendees: '加藤マネージャー、田中', content: '成約。PMP保有のPMO人材1名の紹介確定。12月入社予定。' },
      { round: 1, date: '2024/11/5',  attendees: '加藤マネージャー',       content: '小林部長紹介でPMO部門を訪問。PMP保有者の中途採用ニーズ。' },
    ],
    tasks: [], jobs: [{ title: 'PMO・PM（PMP保有）', count: 1, date: '2024/11/28', dept: 'PERM' }],
  },

  19: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門', clientPerson: '加藤 マネージャー、高田 PMOシニア', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'PMO部門 PJ管理人材', current: 'PMO部門 シニアPM採用', children: [] },
    meetings: [
      { round: 2, date: '2024/10/15', attendees: '高田シニア、田中', content: '成約。PgMP保有のシニアPM1名採用。事業拡大に伴う大型PJ対応のため即戦力が必要。' },
      { round: 1, date: '2024/10/1',  attendees: '加藤マネージャー、高田、田中', content: 'PMO初回採用成功後の追加依頼。シニアクラスのPMが必要。' },
    ],
    tasks: [], jobs: [{ title: 'シニアPM（PgMP保有）', count: 1, date: '2024/10/15', dept: 'PERM' }],
  },

  41: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門 アジャイル推進チーム', clientPerson: '加藤 マネージャー、安井 アジャイルリーダー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'PMO部門 PJ管理人材', current: 'PMO部門 アジャイルコーチ採用', children: [] },
    meetings: [
      { round: 2, date: '2025/1/10', attendees: '安井リーダー、田中', content: '成約。CSP/CSM保有のアジャイルコーチ1名の採用確定。Scrum導入の旗振り役として即戦力が必要。' },
      { round: 1, date: '2024/12/20', attendees: '加藤マネージャー、安井、田中', content: '組織全体のアジャイル移行推進のため、専門コーチの採用が急務とのこと。' },
    ],
    tasks: [], jobs: [{ title: 'アジャイルコーチ（CSP保有）', count: 1, date: '2025/1/10', dept: 'PERM' }],
  },

  20: {
    basicInfo: { company: 'ノースサンド', dept: 'SAP専門チーム', clientPerson: '村山 SAP主任、三浦 ABAP専門家', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'SAP専門チーム ABAP開発者追加', children: [] },
    meetings: [
      { round: 2, date: '2024/12/5',  attendees: '三浦専門家、鈴木', content: '成約。ABAP開発者をさらに1名追加。計2名体制でSAP拡張開発PJを進める。' },
      { round: 1, date: '2024/11/20', attendees: '村山主任、三浦、鈴木', content: 'SAP追加支援の流れで、ABAP専門チームにも人材ニーズを確認。' },
    ],
    tasks: [], jobs: [{ title: 'SAP ABAP追加開発者', count: 1, date: '2024/12/5', dept: 'ITSS' }],
  },

  42: {
    basicInfo: { company: 'ノースサンド', dept: 'BPR推進部', clientPerson: '松田 BPR部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: '紹介', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'BPR推進部 業務改革コンサル支援', children: [] },
    meetings: [
      { round: 2, date: '2025/1/10', attendees: '松田部長、山本', content: 'BPR推進のためのITコンサルタント1名の参画が必要。業務フロー設計とシステム導入支援の両方ができる人材を求めている。' },
      { round: 1, date: '2024/12/25', attendees: '松田部長',      content: '小林部長の紹介で訪問。業務改革推進のためのコンサル人材が不足していることを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'BPRコンサルタント候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'BPRコンサルタント', count: 1, date: '2025/1/10', dept: 'DSL' }],
  },

  21: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部', clientPerson: '中島 健太 VP of Engineering', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: null, current: 'エンジニアリング本部 開発人材支援', children: ['エンジニアリング本部 Goエンジニア追加', 'エンジニアリング本部 フロントエンド強化', 'プロダクト部門 PdM人材支援'] },
    meetings: [
      { round: 3, date: '2025/2/20', attendees: '中島VP、佐藤', content: 'バックエンドエンジニアの要件詳細確認。Go言語とgRPCの経験者が必須。マイクロサービス設計の経験者を優先。' },
      { round: 2, date: '2025/2/5',  attendees: '中島VP、佐藤', content: 'プロダクト開発加速のため、複数領域での人材補強が必要と判明。Go/React/PdMの3領域。' },
      { round: 1, date: '2025/1/22', attendees: '中島VP',       content: '展示会でのご縁から初訪問。Go/Kubernetesエンジニアの増員が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'Go/gRPCエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
      { status: 'pending', name: '3回目商談アポ取得',             due: '2025/3/15', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'Goバックエンドエンジニア（gRPC）', count: 2, date: '2025/2/20', dept: 'ITSS' }],
  },

  22: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部 インフラチーム', clientPerson: '中島 VP、森田 インフラリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'エンジニアリング本部 Goエンジニア追加', children: [] },
    meetings: [
      { round: 2, date: '2025/2/5',  attendees: '森田リーダー、佐藤', content: 'Kubernetes/Go専門のSREエンジニアが必要。可用性99.99%のシステム運用経験者を求めている。' },
      { round: 1, date: '2025/1/20', attendees: '中島VP、森田リーダー、佐藤', content: 'インフラチームのGoエンジニア不足が深刻。SRE領域での追加支援ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'SRE/Goエンジニア候補者ピック', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'SRE/Goエンジニア', count: 2, date: '2025/2/5', dept: 'ITSS' }],
  },

  43: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部 フロントエンドチーム', clientPerson: '中島 VP、藤本 フロントリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'エンジニアリング本部 フロントエンド強化', children: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '藤本リーダー、佐藤', content: 'React/TypeScript専門のフロントエンドエンジニア2名が必要。パフォーマンス最適化の経験者を優先。' },
      { round: 1, date: '2025/2/15', attendees: '中島VP、藤本リーダー、佐藤', content: 'フロントエンドの品質向上のため専門エンジニアの補強が必要。TypeScript移行も急いでいる。' },
    ],
    tasks: [
      { status: 'pending', name: 'React/TypeScriptエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'Reactフロントエンドエンジニア（TypeScript）', count: 2, date: '2025/3/1', dept: 'ITSS' }],
  },

  23: {
    basicInfo: { company: 'Sansan', dept: 'プロダクト部門', clientPerson: '大坪 プロダクト責任者', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'プロダクト部門 PdM人材支援', children: ['プロダクト部門 デザインエンジニア採用'] },
    meetings: [
      { round: 2, date: '2025/1/20', attendees: '大坪責任者、佐藤', content: 'PdMの要件確認。B2BSaaSプロダクトのロードマップ策定経験者が必要。英語力もあると望ましい。' },
      { round: 1, date: '2025/1/8',  attendees: '大坪責任者',       content: '中島VPの紹介でプロダクト部門を訪問。PdM不足で新機能開発が遅延している状況。' },
    ],
    tasks: [
      { status: 'pending', name: 'PdM候補者リスト作成（3名）', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'プロダクトマネージャー（B2BSaaS）', count: 2, date: '2025/1/20', dept: 'ITSS' }],
  },

  44: {
    basicInfo: { company: 'Sansan', dept: 'プロダクト部門 デザインチーム', clientPerson: '大坪 責任者、内田 デザインリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'プロダクト部門 PdM人材支援', current: 'プロダクト部門 デザインエンジニア採用', children: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '内田リーダー、佐藤', content: 'デザインエンジニアの要件確認。FigmaとReactの両方が使えるエンジニアが必要。デザインシステム構築の経験者を優先。' },
      { round: 1, date: '2025/1/28', attendees: '大坪責任者、内田リーダー、佐藤', content: 'PdM採用商談から派生。デザインとエンジニアリングを橋渡しできる人材の採用ニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'デザインエンジニア候補者ピック', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'デザインエンジニア（Figma/React）', count: 2, date: '2025/2/10', dept: 'ITSS' }],
  },

  45: {
    basicInfo: { company: 'Sansan', dept: 'データ基盤部', clientPerson: '松井 データ基盤部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'データ基盤部 データエンジニア支援', children: [] },
    meetings: [
      { round: 2, date: '2025/2/25', attendees: '松井部長、佐藤', content: 'BigQuery/dbtを使ったデータパイプライン構築の専門家が必要。データカタログの整備も課題。' },
      { round: 1, date: '2025/2/10', attendees: '松井部長',       content: '中島VPの紹介でデータ基盤部を訪問。データエンジニアリングの専門化が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'BigQuery/dbtエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'データエンジニア（BigQuery/dbt）', count: 2, date: '2025/2/25', dept: 'ITSS' }],
  },

  24: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部', clientPerson: '渡辺 誠 本部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'デジタル推進本部 基幹刷新', children: ['デジタル推進本部 SAP移行フェーズ2', 'デジタル推進本部 データ基盤構築', 'デジタル推進本部 グローバルERP展開', '生産技術部 組込みエンジニア支援', '情報システム部 レガシー移行支援'] },
    meetings: [
      { round: 4, date: '2025/2/28', attendees: '渡辺本部長、山本', content: 'ITコンサルタント2名のアサイン内定。3月より要件定義フェーズ開始。フェーズ2のSAP移行についても追加相談あり。' },
      { round: 3, date: '2025/2/10', attendees: '渡辺本部長、山本', content: 'SAP S/4HANA移行プロジェクトの体制案を提示。フェーズ分けでの進行を提案。' },
      { round: 2, date: '2025/1/20', attendees: '渡辺本部長、山本', content: '経営課題のヒアリング。2025年内のSAP移行完了が目標。製造・IT・HR各領域での課題確認。' },
      { round: 1, date: '2025/1/8',  attendees: '渡辺本部長',       content: 'toBマーケ経由のアポ。グローバル競争力強化のためのデジタル基盤刷新が最優先テーマ。' },
    ],
    tasks: [
      { status: 'pending', name: 'ITコンサル最終候補者確認', due: '2025/3/15', assignee: '山本 三郎' },
      { status: 'pending', name: '契約書ドラフト確認・送付', due: '2025/3/18', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'SAP移行ITコンサルタント', count: 2, date: '2025/2/28', dept: 'DSL' }],
  },

  25: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 SAP推進チーム', clientPerson: '渡辺 本部長、川田 SAPリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 SAP移行フェーズ2', children: [] },
    meetings: [
      { round: 3, date: '2025/2/10', attendees: '川田リーダー、山本', content: 'フェーズ2の追加人材要件確認。SAP S/4HANAのMM/SD領域専門家が必要。6名体制での推進に合意。' },
      { round: 2, date: '2025/1/25', attendees: '渡辺本部長、川田、山本', content: 'フェーズ1の進捗確認とフェーズ2計画を議論。グローバル展開を見据えた体制構築が必要。' },
      { round: 1, date: '2025/1/10', attendees: '川田リーダー、山本', content: 'フェーズ1完了に伴う次フェーズ商談。MM/SD領域での追加サポートが必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SAP MM/SD専門家候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'SAP MM領域コンサルタント', count: 3, date: '2025/2/10', dept: 'DSL' },
      { title: 'SAP SD領域コンサルタント', count: 3, date: '2025/2/10', dept: 'DSL' },
    ],
  },

  26: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 データ戦略チーム', clientPerson: '渡辺 本部長、中田 データ戦略リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '完了' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 データ基盤構築', children: [] },
    meetings: [
      { round: 3, date: '2025/1/25', attendees: '中田リーダー、山本', content: '成約。データアーキテクト1名・データエンジニア3名の参画確定。2月より稼働開始。' },
      { round: 2, date: '2025/1/10', attendees: '中田リーダー、山本', content: 'データレイク構築の要件確認。Snowflake/BigQueryとPython/Sparkエンジニアが必要。' },
      { round: 1, date: '2024/12/20', attendees: '渡辺本部長、中田、山本', content: 'データ活用基盤構築PJのコンサル・エンジニア人材ニーズをヒアリング。' },
    ],
    tasks: [],
    jobs: [
      { title: 'データアーキテクト',           count: 1, date: '2025/1/25', dept: 'DSL' },
      { title: 'データエンジニア（Snowflake）', count: 3, date: '2025/1/25', dept: 'DSL' },
    ],
  },

  46: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 グローバルIT推進チーム', clientPerson: '渡辺 本部長、鈴田 グローバルITリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 グローバルERP展開', children: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '鈴田リーダー、山本', content: 'グローバル20拠点へのSAP展開プロジェクト。多言語対応のSAPコンサルタントが5名必要。英語力必須。' },
      { round: 1, date: '2025/2/5',  attendees: '渡辺本部長、鈴田、山本', content: '基幹刷新から派生した追加案件。グローバル拠点へのERP展開計画を確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'グローバルSAPコンサル候補提出', due: '2025/3/20', assignee: '山本 三郎' },
      { status: 'pending', name: '英語力確認・面談設定',           due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'グローバルSAPコンサルタント（英語必須）', count: 5, date: '2025/2/20', dept: 'DSL' }],
  },

  27: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部', clientPerson: '福田 修 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: '生産技術部 組込みエンジニア支援', children: ['生産技術部 RustエンジニアPJ', '生産技術部 FPGAエンジニア支援'] },
    meetings: [
      { round: 3, date: '2025/2/20', attendees: '福田部長、鈴木', content: 'C/C++組込みエンジニア3名の参画確定。4月より自動車ECU開発PJに参画。' },
      { round: 2, date: '2025/2/5',  attendees: '福田部長、鈴木', content: 'AUTOSAR対応の組込みC/C++経験者が必須。CAN/Ethernetの通信プロトコル知識も必要。' },
      { round: 1, date: '2025/1/25', attendees: '福田部長',       content: '渡辺本部長の紹介で初訪問。生産ライン制御システムの開発エンジニアが慢性的に不足。' },
    ],
    tasks: [
      { status: 'pending', name: '組込みC/C++エンジニア候補最終確認', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'C/C++組込みエンジニア（AUTOSAR）', count: 3, date: '2025/2/20', dept: 'ITSS' }],
  },

  28: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部 次世代システムチーム', clientPerson: '福田 部長、安藤 技術主任', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '生産技術部 組込みエンジニア支援', current: '生産技術部 RustエンジニアPJ', children: [] },
    meetings: [
      { round: 2, date: '2025/1/30', attendees: '安藤主任、鈴木', content: '次世代ECUをRustで開発するプロジェクト。組込みRust経験者は希少で、C++からの移行経験者でも可。' },
      { round: 1, date: '2025/1/15', attendees: '福田部長、安藤、鈴木', content: '組込みPJ派生の追加商談。次世代システムではRustの採用を検討。専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '組込みRustエンジニア調査・候補ピック', due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: '組込みRustエンジニア', count: 2, date: '2025/1/30', dept: 'ITSS' }],
  },

  47: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部 エレクトロニクスチーム', clientPerson: '福田 部長、木下 FPGA専門家', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '生産技術部 組込みエンジニア支援', current: '生産技術部 FPGAエンジニア支援', children: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '木下専門家、鈴木', content: 'Xilinx/IntelのFPGA開発経験者が必要。VHDL/Verilogの実務5年以上が必須。高速信号処理の知識も求められる。' },
      { round: 1, date: '2025/2/1',  attendees: '福田部長、木下、鈴木', content: '組込みPJ派生の追加商談。画像処理の高速化のためFPGAエンジニアの補強が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'FPGAエンジニア候補者ピック（希少人材）', due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'FPGAエンジニア（Xilinx/VHDL）', count: 2, date: '2025/2/15', dept: 'ITSS' }],
  },

  29: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部', clientPerson: '大野 浩二 課長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: '情報システム部 レガシー移行支援', children: ['情報システム部 JAVA/Kotlin刷新', '情報システム部 マイクロサービス移行'] },
    meetings: [
      { round: 3, date: '2025/1/30', attendees: '大野課長、鈴木', content: '成約。JavaエンジニアとPythonエンジニアの計3名の参画確定。2月より稼働開始。' },
      { round: 2, date: '2024/12/20', attendees: '大野課長、鈴木', content: 'レガシーJavaシステムの移行要件確認。Spring Bootへのリアーキテクチャ経験者が必要。' },
      { round: 1, date: '2024/12/5',  attendees: '大野課長',       content: '渡辺本部長の紹介で訪問。20年以上稼働のレガシーJavaシステムの刷新PJで人材不足。' },
    ],
    tasks: [],
    jobs: [
      { title: 'Javaエンジニア（Spring Boot）', count: 2, date: '2025/1/30', dept: 'ITSS' },
      { title: 'Pythonエンジニア',               count: 1, date: '2025/1/30', dept: 'ITSS' },
    ],
  },

  30: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部 モダナイズチーム', clientPerson: '大野 課長、篠原 Kotlinリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: '情報システム部 レガシー移行支援', current: '情報システム部 JAVA/Kotlin刷新', children: [] },
    meetings: [
      { round: 3, date: '2024/12/20', attendees: '篠原リーダー、鈴木', content: '成約。KotlinエンジニアとAndroidエンジニアの計2名の参画確定。1月より稼働。' },
      { round: 2, date: '2024/12/5',  attendees: '大野課長、篠原、鈴木', content: 'KotlinへのマイグレーションPJの詳細確認。コルーチン・Flowの実務経験者が必須。' },
      { round: 1, date: '2024/11/20', attendees: '篠原リーダー、鈴木', content: 'レガシーJavaをKotlinに段階移行する追加PJの相談。Kotlinの専門家が社内にいない。' },
    ],
    tasks: [],
    jobs: [{ title: 'Kotlinエンジニア（コルーチン）', count: 2, date: '2024/12/20', dept: 'ITSS' }],
  },

  48: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部 クラウドアーキチーム', clientPerson: '大野 課長、原田 アーキテクトリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '情報システム部 レガシー移行支援', current: '情報システム部 マイクロサービス移行', children: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '原田リーダー、鈴木', content: 'モノリシックシステムのマイクロサービス化。Kubernetes/Istioを使ったサービスメッシュ構築経験者が必要。' },
      { round: 1, date: '2025/2/10', attendees: '大野課長、原田、鈴木', content: 'レガシー移行PJから派生した追加案件。マイクロサービスアーキテクチャへの移行計画をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'マイクロサービスアーキテクト候補提出', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'Istioエンジニア候補者ピック',          due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'マイクロサービスアーキテクト', count: 1, date: '2025/2/28', dept: 'ITSS' },
      { title: 'Kubernetes/Istioエンジニア',   count: 2, date: '2025/2/28', dept: 'ITSS' },
    ],
  },

  31: {
    basicInfo: { company: 'トヨタ自動車', dept: 'コネクティッド部門', clientPerson: '石川 コネクティッド部門長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'コネクティッド部門 車載ソフトウェア支援', children: ['コネクティッド部門 OTA更新基盤PJ'] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '石川部門長、鈴木', content: '車載ソフトウェアの要件詳細確認。C++17以上の組込み経験とLinuxドライバ開発が必須。OTA更新対応も必要。' },
      { round: 1, date: '2025/2/1',  attendees: '石川部門長',       content: '福田部長の紹介でコネクティッドカー部門を訪問。車載Linux/C++の専門家が急募。' },
    ],
    tasks: [
      { status: 'pending', name: '車載Linux/C++エンジニア候補ピック', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: '3回目商談アポ取得',                 due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: '車載Linux/C++エンジニア', count: 3, date: '2025/2/15', dept: 'ITSS' }],
  },

  49: {
    basicInfo: { company: 'トヨタ自動車', dept: 'コネクティッド部門 OTAチーム', clientPerson: '石川 部門長、松岡 OTAリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'コネクティッド部門 車載ソフトウェア支援', current: 'コネクティッド部門 OTA更新基盤PJ', children: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '松岡リーダー、鈴木', content: 'Over-the-Air更新システムの構築。AWS IoTとC++を組み合わせたOTA基盤の専門家が必要。セキュリティ要件も厳しい。' },
      { round: 1, date: '2025/2/20', attendees: '石川部門長、松岡、鈴木', content: '車載ソフトウェア支援PJから派生。OTAアップデート基盤の構築専門家のニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'OTA基盤エンジニア候補提出', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'OTA/組込みLinuxエンジニア', count: 2, date: '2025/3/1', dept: 'ITSS' }],
  },

  50: {
    basicInfo: { company: 'トヨタ自動車', dept: 'AI研究所', clientPerson: '田辺 AI研究所長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'AI研究所 自動運転AI人材支援', children: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '田辺所長、鈴木', content: '自動運転AIの研究開発エンジニアが必要。PyTorch/TensorFlowの深層学習経験者と点群データ処理の専門家。' },
      { round: 1, date: '2025/1/25', attendees: '田辺所長',       content: '福田部長の紹介でAI研究所を訪問。自動運転レベル4達成に向けてAI研究者の補強が急務。' },
    ],
    tasks: [
      { status: 'pending', name: '自動運転AIエンジニア候補提出', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: '点群処理専門家スカウト',       due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: '深層学習エンジニア（自動運転）', count: 2, date: '2025/2/10', dept: 'ITSS' },
      { title: '点群データ処理専門家',           count: 1, date: '2025/2/10', dept: 'ITSS' },
    ],
  },
}

export const TASKS = [
  { id: 1,  type: 'Task',     name: 'COBOLエンジニア追加候補者ピック',       company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/10', assignee: '鈴木 一郎', method: 'メール',  status: 'overdue', dealId: 2  },
  { id: 2,  type: 'Task',     name: 'HR部門 商談前資料準備・送付',           company: '富士通',        category: '資料作成',       due: '2025/3/12', assignee: '田中 花子', method: 'メール',  status: 'today',   dealId: 10 },
  { id: 3,  type: 'Activity', name: 'Goエンジニア候補フォロー電話',          company: 'Sansan',        category: 'アポ依頼',       due: '2025/3/10', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 21 },
  { id: 4,  type: 'Task',     name: 'ITコンサル最終候補者確認',              company: 'トヨタ自動車',  category: '候補者ピック',   due: '2025/3/15', assignee: '山本 三郎', method: 'その他',  status: 'pending', dealId: 24 },
  { id: 5,  type: 'Activity', name: 'SAP移行フェーズ2提案資料送付',          company: 'トヨタ自動車',  category: '資料作成',       due: '2025/3/11', assignee: '山本 三郎', method: 'メール',  status: 'done',    dealId: 25 },
  { id: 6,  type: 'Task',     name: 'NTTデータ 契約書取交し確認',            company: 'NTTデータ',    category: '契約書取交し',   due: '2025/3/20', assignee: '田中 花子', method: 'その他',  status: 'pending', dealId: 2  },
  { id: 7,  type: 'Task',     name: 'IoTエンジニア候補者最終調整',           company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 6  },
  { id: 8,  type: 'Activity', name: 'Sansan展示会フォローアップ電話',        company: 'Sansan',        category: 'アポ依頼',       due: '2025/3/9',  assignee: '伊藤 美咲', method: '電話',    status: 'done',    dealId: null },
  { id: 9,  type: 'Task',     name: 'Kubernetes候補スキルシート確認',        company: '富士通',        category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 12 },
  { id: 10, type: 'Task',     name: 'AWSエンジニア候補提出（5名）',          company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/15', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 3  },
  { id: 11, type: 'Activity', name: 'CTO候補スカウトメール送付',             company: '富士通',        category: '求人取得依頼',   due: '2025/3/8',  assignee: '田中 花子', method: 'メール',  status: 'done',    dealId: 11 },
  { id: 12, type: 'Task',     name: '富士通 DXアーキテクト候補提出',         company: '富士通',        category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 14 },
  { id: 13, type: 'Task',     name: 'フェーズ2提案資料作成（NTTデータ）',   company: 'NTTデータ',    category: '資料作成',       due: '2025/3/20', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 2  },
  { id: 14, type: 'Activity', name: 'セキュリティエンジニア要件ヒアリング', company: 'NTTデータ',    category: '求人取得依頼',   due: '2025/3/5',  assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 5  },
  { id: 15, type: 'Task',     name: 'トヨタ 車載C++エンジニアピック',        company: 'トヨタ自動車',  category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 31 },
  { id: 16, type: 'Task',     name: 'LLM/RAGエンジニア候補提出（富士通）',  company: '富士通',        category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 38 },
  { id: 17, type: 'Activity', name: 'グローバルSAPコンサル要件確認電話',    company: 'トヨタ自動車',  category: '求人取得依頼',   due: '2025/3/12', assignee: '山本 三郎', method: '電話',    status: 'done',    dealId: 46 },
  { id: 18, type: 'Task',     name: 'Sansan フロントエンドエンジニア候補提出', company: 'Sansan',     category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 43 },
  { id: 19, type: 'Task',     name: 'ノースサンド BPRコンサル候補提出',     company: 'ノースサンド',  category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 42 },
  { id: 20, type: 'Activity', name: 'FPGAエンジニア市場調査レポート作成',   company: 'トヨタ自動車',  category: '資料作成',       due: '2025/3/10', assignee: '鈴木 一郎', method: 'メール',  status: 'done',    dealId: 47 },
]

// フィルター用定数（DEALSとTASKSから自動生成）
export const DIVISIONS = [...new Set(DEALS.map(d => d.dept))];
export const MEMBERS = [...new Set(DEALS.map(d => d.assignee))];
export const DEAL_ROUTES = [...new Set(DEALS.filter(d => d.route).map(d => d.route))];
export const TASK_CATEGORIES = [...new Set(TASKS.map(t => t.category))];
export const CONTACT_METHODS = [...new Set(TASKS.map(t => t.method))];
export const CONTRACT_STATUSES = ['未接触', '商談中', '契約中', '完了'];

export const MY_PAGE_DATA = {
  user: { name: '鈴木 一郎', dept: 'ITSS' },
  score: {
    initialDeals: 12,
    appointmentCount: 18,
    taskDoneCount: 42,
    jobAcquiredCount: 9,
  },
  calendarEvents: [
    { date: '3/13', dayOfWeek: '木', company: 'NTTデータ 製造事業部',          time: '14:00', dealId: 2  },
    { date: '3/14', dayOfWeek: '金', company: 'トヨタ自動車 デジタル推進本部',  time: '10:00', dealId: 24 },
    { date: '3/15', dayOfWeek: '土', company: 'NTTデータ クラウド推進本部',     time: '13:00', dealId: 35 },
    { date: '3/17', dayOfWeek: '月', company: 'トヨタ自動車 コネクティッド部門', time: '15:00', dealId: 31 },
  ],
  myTasks: [
    { status: 'overdue', name: 'COBOLエンジニア追加候補者ピック',         company: 'NTTデータ 製造事業部',          due: '3/10', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'AWSエンジニア候補提出（5名）',             company: 'NTTデータ フェーズ2',           due: '3/15', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'IoTエンジニア候補最終調整',                company: 'NTTデータ DX推進室',            due: '3/20', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '組込みC/C++エンジニア候補最終確認',        company: 'トヨタ自動車 生産技術部',        due: '3/22', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '車載Linux/C++エンジニア候補ピック',        company: 'トヨタ自動車 コネクティッド',    due: '3/20', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'マルチクラウドアーキテクト候補提出',       company: 'NTTデータ クラウド推進本部',     due: '3/15', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '自動運転AIエンジニア候補提出',             company: 'トヨタ自動車 AI研究所',          due: '3/20', method: 'メール', dept: 'ITSS' },
  ],
  myDeals: [
    { name: 'NTTデータ 製造事業部 レガシーマイグレーション', remainingTasks: 2, lastMeeting: '3/10', status: '実施済' },
    { name: 'NTTデータ 製造事業部 フェーズ2 クラウド移行',  remainingTasks: 3, lastMeeting: '2/28', status: '実施済' },
    { name: 'NTTデータ DX推進室 スマートファクトリー',       remainingTasks: 1, lastMeeting: '3/8',  status: '実施済' },
    { name: 'NTTデータ クラウド推進本部 マルチクラウド戦略', remainingTasks: 1, lastMeeting: '2/25', status: '実施済' },
    { name: 'トヨタ自動車 生産技術部 組込みエンジニア支援',  remainingTasks: 1, lastMeeting: '2/20', status: '実施済' },
    { name: 'トヨタ自動車 コネクティッド部門',               remainingTasks: 2, lastMeeting: '2/15', status: '実施済' },
    { name: 'トヨタ自動車 AI研究所 自動運転AI',              remainingTasks: 2, lastMeeting: '2/10', status: '実施済' },
    { name: 'NTTデータ 金融ソリューション部 基幹刷新',       remainingTasks: 0, lastMeeting: '1/30', status: '完了'   },
  ],
  notification: 'NTTデータ との契約書取交しが完了しています。契約ステータスを更新してください。',
}
