// ============================================================
// GAS API Client
// VITE_GAS_URL が未設定ならダミーデータにフォールバック
// ============================================================

const GAS_URL = import.meta.env.VITE_GAS_URL || '';

// --- READ ---
export async function fetchAll() {
  if (!GAS_URL) return null; // fallback to dummy
  const res = await fetch(`${GAS_URL}?action=all`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function fetchSheet(action) {
  if (!GAS_URL) return null;
  const res = await fetch(`${GAS_URL}?action=${action}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// --- WRITE ---
async function postToGas(body) {
  if (!GAS_URL) throw new Error('GAS_URL not configured');
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }, // GAS requires text/plain for CORS
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export function upsertRow(sheet, data) {
  return postToGas({ action: 'upsert', sheet, data });
}

export function deleteRow(sheet, id) {
  return postToGas({ action: 'delete', sheet, data: { id } });
}

export function updateField(sheet, id, field, value) {
  return postToGas({ action: 'updateField', sheet, data: { id, field, value } });
}
