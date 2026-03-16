const BADGE_COLORS = {
  Enterprise: { bg: '#FEE2E2', text: '#991B1B' },
  Mid: { bg: '#FEF3C7', text: '#92400E' },
  SMB: { bg: '#D1FAE5', text: '#065F46' },
  ITSS: { bg: '#D1FAE5', text: '#065F46' },
  PERM: { bg: '#EDE9FE', text: '#5B21B6' },
  DSL: { bg: '#FEF3C7', text: '#92400E' },
  FS: { bg: '#FEF3C7', text: '#92400E' },
  IS: { bg: '#DBEAFE', text: '#1E40AF' },
  '実施済': { bg: '#DBEAFE', text: '#1E40AF' },
  '予定': { bg: '#F3F4F6', text: '#374151' },
  '完了': { bg: '#D1FAE5', text: '#065F46' },
  '期限切れ': { bg: '#FEE2E2', text: '#991B1B' },
  '未実施': { bg: '#F3F4F6', text: '#374151' },
  '実施中': { bg: '#DBEAFE', text: '#1E40AF' },
  '契約中': { bg: '#D1FAE5', text: '#065F46' },
  '商談中': { bg: '#FEF3C7', text: '#92400E' },
  '未接触': { bg: '#F3F4F6', text: '#374151' },
  '契約終了': { bg: '#FEE2E2', text: '#991B1B' },
};

export default function Badge({ label, className = '' }) {
  const colors = BADGE_COLORS[label] || { bg: '#F3F4F6', text: '#374151' };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {label}
    </span>
  );
}
