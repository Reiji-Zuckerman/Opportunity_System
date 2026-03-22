import { useState } from 'react';
import { Search, Plus, Filter, ChevronDown, Trash2 } from 'lucide-react';
import Badge from '../components/Badge';
import { useData } from '../contexts/DataContext';
import { ConfirmDialog } from '../components/Modal';
import TaskModal from '../components/modals/TaskModal';
import ActivityModal from '../components/modals/ActivityModal';

function getWeekRange() {
  const now = new Date();
  const day = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - (day === 0 ? 6 : day - 1));
  monday.setHours(0, 0, 0, 0);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);
  return { start: monday, end: sunday };
}

function getMonthRange() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  return { start, end };
}

const STATUS_OPTIONS = [
  { value: 'pending', label: '未実施' },
  { value: 'in_progress', label: '実施中' },
  { value: 'done', label: '完了' },
];

const STATUS_COLORS = {
  pending: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
  today: 'bg-amber-100 text-amber-700',
  overdue: 'bg-red-100 text-red-700',
};

export default function TaskList() {
  const { TASKS, MEMBERS, TASK_CATEGORIES, updateTaskStatus, deleteTask } = useData();
  const [search, setSearch] = useState('');
  const [memberFilter, setMemberFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [deadlineFilter, setDeadlineFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('すべて');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleStatusChange = (taskId, newStatus) => {
    updateTaskStatus(taskId, newStatus);
    setOpenDropdown(null);
  };

  const filtered = TASKS.filter((task) => {
    if (search && !task.company.toLowerCase().includes(search.toLowerCase())) return false;
    if (memberFilter && task.assignee !== memberFilter) return false;
    if (categoryFilter && task.category !== categoryFilter) return false;
    if (companyFilter && !task.company.toLowerCase().includes(companyFilter.toLowerCase())) return false;
    if (typeFilter !== 'すべて' && task.type !== typeFilter) return false;

    // Status filter with support for virtual statuses (today, overdue)
    if (statusFilter) {
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      const taskDate = new Date(task.due);
      taskDate.setHours(0, 0, 0, 0);

      if (statusFilter === 'today') {
        if (taskDate.getTime() !== now.getTime() || task.status === 'done') return false;
      } else if (statusFilter === 'overdue') {
        if (taskDate >= now || task.status === 'done') return false;
      } else if (task.status !== statusFilter) {
        return false;
      }
    }

    if (deadlineFilter) {
      const taskDate = new Date(task.due);
      if (deadlineFilter === '今週') {
        const { start, end } = getWeekRange();
        if (taskDate < start || taskDate > end) return false;
      } else if (deadlineFilter === '今月') {
        const { start, end } = getMonthRange();
        if (taskDate < start || taskDate > end) return false;
      }
    }

    return true;
  });

  const typeOptions = ['すべて', 'Task', 'Activity'];

  const getStatusLabel = (status) => {
    const opt = STATUS_OPTIONS.find(o => o.value === status);
    if (opt) return opt.label;
    if (status === 'today') return '本日';
    if (status === 'overdue') return '期限切れ';
    return status;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Task一覧</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowActivityModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-colors"
          >
            <Plus size={16} />
            Activity
          </button>
          <button
            onClick={() => setShowTaskModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg hover:opacity-90 transition-colors"
          >
            <Plus size={16} />
            Task
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="企業名で検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <Filter size={16} className="text-gray-400" />
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
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">種別</option>
          {TASK_CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">ステータス</option>
          <option value="pending">未実施</option>
          <option value="in_progress">実施中</option>
          <option value="done">完了</option>
          <option value="today">本日</option>
          <option value="overdue">期限切れ</option>
        </select>
        <select
          value={deadlineFilter}
          onChange={(e) => setDeadlineFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50"
        >
          <option value="">期日</option>
          <option value="今週">今週</option>
          <option value="今月">今月</option>
          <option value="">すべて</option>
        </select>
        <input
          type="text"
          placeholder="企業名"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/50 w-32"
        />
        <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
          {typeOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setTypeFilter(opt)}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                typeFilter === opt
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-5 py-3 font-medium text-gray-600">種類</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">内容</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">企業名</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">種別</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">期日</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">担当者</th>
              <th className="text-left px-5 py-3 font-medium text-gray-600">ステータス</th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((task) => {
              const currentStatus = task.status;
              return (
                <tr
                  key={task.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-5 py-3.5">
                    <Badge label={task.type} />
                  </td>
                  <td className="px-5 py-3.5 font-medium text-gray-900">{task.name}</td>
                  <td className="px-5 py-3.5 text-gray-600">{task.company}</td>
                  <td className="px-5 py-3.5">
                    <Badge label={task.category} />
                  </td>
                  <td className="px-5 py-3.5 text-gray-600">{task.due}</td>
                  <td className="px-5 py-3.5 text-gray-600">{task.assignee}</td>
                  <td className="px-5 py-3.5">
                    <div className="relative">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(openDropdown === task.id ? null : task.id);
                        }}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${STATUS_COLORS[currentStatus] || 'bg-gray-100 text-gray-700'}`}
                      >
                        {getStatusLabel(currentStatus)}
                        <ChevronDown className="w-3 h-3" />
                      </button>
                      {openDropdown === task.id && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                          <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
                            {STATUS_OPTIONS.map((opt) => (
                              <button
                                key={opt.value}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStatusChange(task.id, opt.value);
                                }}
                                className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                                  currentStatus === opt.value ? 'font-bold bg-gray-50' : ''
                                }`}
                              >
                                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${STATUS_COLORS[opt.value]?.split(' ')[0] || 'bg-gray-200'}`} />
                                {opt.label}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-3.5">
                    <button
                      onClick={(e) => { e.stopPropagation(); setDeleteTarget(task); }}
                      className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="削除"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="px-5 py-8 text-center text-gray-400">
                  該当するタスクがありません
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <TaskModal isOpen={showTaskModal} onClose={() => setShowTaskModal(false)} />
      <ActivityModal isOpen={showActivityModal} onClose={() => setShowActivityModal(false)} />
      <ConfirmDialog
        isOpen={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => deleteTask(deleteTarget.id)}
        message={`「${deleteTarget?.name}」を削除しますか？`}
      />
    </div>
  );
}
