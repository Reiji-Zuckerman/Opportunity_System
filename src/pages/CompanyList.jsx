import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import Badge from '../components/Badge';
import { useData } from '../contexts/DataContext';

const CONTRACT_STATUS_OPTIONS = ['未接触', '商談中', '契約中', '契約終了'];

function isExpired(dateStr) {
  if (!dateStr) return false;
  const today = new Date();
  const last = new Date(dateStr);
  const diffMs = today - last;
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  return diffDays > 90;
}

export default function CompanyList() {
  const navigate = useNavigate();
  const { COMPANIES } = useData();
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('');
  const [classificationFilter, setClassificationFilter] = useState('');
  const [itssFilter, setItssFilter] = useState('');
  const [permFilter, setPermFilter] = useState('');
  const [dslFilter, setDslFilter] = useState('');
  const [sortByLastDeal, setSortByLastDeal] = useState('');
  const [showExpiredOnly, setShowExpiredOnly] = useState(false);

  const filtered = COMPANIES
    .filter((c) => {
      if (search && !c.name.includes(search)) return false;
      if (tierFilter && c.tier !== tierFilter) return false;
      if (classificationFilter && c.category !== classificationFilter) return false;
      if (itssFilter && c.itss !== itssFilter) return false;
      if (permFilter && c.perm !== permFilter) return false;
      if (dslFilter && c.dsl !== dslFilter) return false;
      if (showExpiredOnly && !isExpired(c.lastDealDate)) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortByLastDeal === 'asc') return new Date(a.lastDeal) - new Date(b.lastDeal);
      if (sortByLastDeal === 'desc') return new Date(b.lastDeal) - new Date(a.lastDeal);
      return 0;
    });

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">企業一覧</h1>

      {/* Search bar */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="企業名で検索..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filter row */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Filter className="w-4 h-4 text-gray-500" />

        <select
          value={tierFilter}
          onChange={(e) => setTierFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">Tier</option>
          <option value="Enterprise">Enterprise</option>
          <option value="Mid">Mid</option>
          <option value="SMB">SMB</option>
        </select>

        <select
          value={classificationFilter}
          onChange={(e) => setClassificationFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">事業分類</option>
          <option value="SIer">SIer</option>
          <option value="SES派遣">SES派遣</option>
          <option value="コンサル">コンサル</option>
          <option value="Web系">Web系</option>
          <option value="一般事業">一般事業</option>
        </select>

        <select
          value={itssFilter}
          onChange={(e) => setItssFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">ITSS契約</option>
          {CONTRACT_STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={permFilter}
          onChange={(e) => setPermFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">PERM契約</option>
          {CONTRACT_STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={dslFilter}
          onChange={(e) => setDslFilter(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">DSL契約</option>
          {CONTRACT_STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        <select
          value={sortByLastDeal}
          onChange={(e) => setSortByLastDeal(e.target.value)}
          className="px-3 py-1.5 border border-gray-200 rounded-lg text-sm bg-white"
        >
          <option value="">最終商談日</option>
          <option value="desc">新しい順</option>
          <option value="asc">古い順</option>
        </select>

        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <div
            className={`relative w-10 h-5 rounded-full transition-colors ${showExpiredOnly ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setShowExpiredOnly(!showExpiredOnly)}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${showExpiredOnly ? 'translate-x-5' : ''}`}
            />
          </div>
          90日未接触
        </label>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-5 py-3 font-medium text-gray-500">企業名</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">Tier</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">事業分類</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">ITSS</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">PERM</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">DSL</th>
              <th className="text-left px-5 py-3 font-medium text-gray-500">最終商談日</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((company) => {
              const expired = isExpired(company.lastDealDate);
              return (
                <tr
                  key={company.id}
                  onClick={() => navigate(`/companies/${company.id}`)}
                  className="border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  <td className="px-5 py-3 font-medium text-gray-900">{company.name}</td>
                  <td className="px-5 py-3"><Badge label={company.tier} /></td>
                  <td className="px-5 py-3"><Badge label={company.category} /></td>
                  <td className="px-5 py-3"><Badge label={company.itss} /></td>
                  <td className="px-5 py-3"><Badge label={company.perm} /></td>
                  <td className="px-5 py-3"><Badge label={company.dsl} /></td>
                  <td className="px-5 py-3">
                    {expired ? (
                      <Badge label="期限切れ" />
                    ) : (
                      <span className="text-gray-700">{company.lastDealDate}</span>
                    )}
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-gray-400">
                  該当する企業が見つかりません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
