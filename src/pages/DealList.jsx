import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Filter } from 'lucide-react';
import Badge from '../components/Badge';
import { DEALS, DIVISIONS, MEMBERS, DEAL_ROUTES } from '../data/dummy';
import NewDealModal from '../components/modals/NewDealModal';

export default function DealList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [divisionFilter, setDivisionFilter] = useState('');
  const [memberFilter, setMemberFilter] = useState('');
  const [routeFilter, setRouteFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showNewDeal, setShowNewDeal] = useState(false);

  const filtered = DEALS.filter((deal) => {
    const matchesSearch =
      !search ||
      deal.company.toLowerCase().includes(search.toLowerCase()) ||
      deal.name.toLowerCase().includes(search.toLowerCase());
    const matchesDivision = !divisionFilter || deal.dept === divisionFilter;
    const matchesMember = !memberFilter || deal.assignee === memberFilter;
    const matchesRoute = !routeFilter || deal.route === routeFilter;
    const matchesStatus = !statusFilter || deal.status === statusFilter;
    return matchesSearch && matchesDivision && matchesMember && matchesRoute && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">商談一覧</h1>
        <button
          onClick={() => setShowNewDeal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-colors"
        >
          <Plus size={16} />
          新規商談
        </button>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="企業名・商談名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <Filter size={16} className="text-gray-400" />
        <select
          value={divisionFilter}
          onChange={(e) => setDivisionFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">事業部</option>
          {DIVISIONS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          value={memberFilter}
          onChange={(e) => setMemberFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">担当者</option>
          {MEMBERS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select
          value={routeFilter}
          onChange={(e) => setRouteFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">商談経路</option>
          {DEAL_ROUTES.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">ステータス</option>
          <option value="実施済">実施済</option>
          <option value="予定">予定</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-5 py-3 font-medium text-gray-600">商談名</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">企業名</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">担当者</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">事業部</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">最終面談日</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">ステータス</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((deal) => (
              <tr
                key={deal.id}
                onClick={() => navigate(`/deals/${deal.id}`)}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-5 py-3.5 font-medium text-gray-900">{deal.name}</td>
                <td className="px-5 py-3.5 text-gray-600">{deal.company}</td>
                <td className="px-5 py-3.5 text-gray-600">{deal.assignee}</td>
                <td className="px-5 py-3.5"><Badge label={deal.dept} /></td>
                <td className="px-5 py-3.5 text-gray-600">{deal.lastMeeting}</td>
                <td className="px-5 py-3.5"><Badge label={deal.status} /></td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-gray-400">
                  該当する商談がありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <NewDealModal isOpen={showNewDeal} onClose={() => setShowNewDeal(false)} />
    </div>
  );
}
