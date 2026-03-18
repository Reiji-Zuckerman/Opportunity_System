import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import Badge from '../components/Badge';
import { useData } from '../contexts/DataContext';

export default function JobList() {
  const navigate = useNavigate();
  const { JOBS } = useData();
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('');

  const departments = [...new Set(JOBS.map(j => j.businessDept).filter(Boolean))];

  const filtered = JOBS.filter((job) => {
    const matchesSearch =
      !search ||
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company?.toLowerCase().includes(search.toLowerCase());
    const matchesDept = !deptFilter || job.businessDept === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">求人一覧</h1>

      {/* Search bar */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="求人タイトル・企業名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <Filter size={16} className="text-gray-400" />
        <select
          value={deptFilter}
          onChange={(e) => setDeptFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">事業部</option>
          {departments.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-5 py-3 font-medium text-gray-600">求人タイトル</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">企業名</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">事業部</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">募集人数</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">作成日</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((job) => (
              <tr
                key={job.id}
                onClick={() => navigate(`/jobs/${job.id}`)}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <td className="px-5 py-3.5 font-medium text-gray-900">{job.title}</td>
                <td className="px-5 py-3.5 text-gray-600">{job.company}</td>
                <td className="px-5 py-3.5"><Badge label={job.businessDept} /></td>
                <td className="px-5 py-3.5 text-gray-600">{job.count}名</td>
                <td className="px-5 py-3.5 text-gray-600">{job.date}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-gray-400">
                  該当する求人がありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
