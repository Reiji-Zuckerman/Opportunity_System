import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calendar, CheckSquare, TrendingUp, Briefcase, Clock } from 'lucide-react';
import Badge from '../components/Badge';
import { MY_PAGE_DATA } from '../data/dummy';
import ActivityModal from '../components/modals/ActivityModal';
import TaskModal from '../components/modals/TaskModal';

const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getWeekDates(weekStart) {
  const start = new Date(weekStart);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}

export default function MyPage() {
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const { user, notification, scores, weekSchedule, myTasks, myDeals } = MY_PAGE_DATA;
  const weekDates = getWeekDates(weekSchedule.weekStart);
  const todayStr = '2026-03-16';

  const scoreItems = [
    { ...scores.deals, icon: TrendingUp },
    { ...scores.appointments, icon: Calendar },
    { ...scores.tasks, icon: CheckSquare },
    { ...scores.jobs, icon: Briefcase },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          マイページ &mdash; {user.name}
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setActivityModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Activity
          </button>
          <button
            onClick={() => setTaskModalOpen(true)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Task
          </button>
        </div>
      </div>

      {/* Notification Banner */}
      <div className="bg-orange-50 border border-orange-200 text-orange-800 rounded-xl p-4 flex items-center gap-3">
        <AlertTriangle className="h-5 w-5 flex-shrink-0" />
        <span className="text-sm">{notification.message}</span>
      </div>

      {/* Upper Section: 2 columns */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left: Score Card */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold text-gray-900 mb-4">今月の行動スコア</h2>
          <div className="grid grid-cols-2 gap-4">
            {scoreItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">{item.value}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Weekly Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold text-gray-900 mb-4">今週の予定商談</h2>

          {/* Mini Calendar Header */}
          <div className="text-sm text-gray-600 mb-3 flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{weekSchedule.year}年{weekSchedule.month}月 第3週</span>
          </div>

          {/* Day Labels */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {weekDates.map((date, i) => {
              const dateStr = date.toISOString().split('T')[0];
              const isToday = dateStr === todayStr;
              return (
                <div
                  key={i}
                  className={`text-center text-xs py-1.5 rounded-lg ${
                    isToday
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-gray-500'
                  }`}
                >
                  <div>{DAY_LABELS[i]}</div>
                  <div className="font-medium">{date.getDate()}</div>
                </div>
              );
            })}
          </div>

          {/* Events List */}
          <div className="space-y-3">
            {weekSchedule.events.map((event, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-gray-500 min-w-[90px]">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{formatDate(event.date)} {event.time}</span>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">{event.title}</div>
                  <div className="text-gray-500 text-xs">{event.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lower Section: Tasks */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="font-semibold text-gray-900 mb-4">自分のTask</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">内容</th>
              <th className="pb-3 font-medium">企業名</th>
              <th className="pb-3 font-medium">期日</th>
              <th className="pb-3 font-medium">ステータス</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr
                key={task.id}
                className={`border-b border-gray-50 ${
                  task.status === '期限切れ' ? 'bg-red-50' : ''
                }`}
              >
                <td className="py-3 text-gray-900">{task.content}</td>
                <td className="py-3 text-gray-600">{task.company}</td>
                <td className="py-3 text-gray-600">{task.deadline}</td>
                <td className="py-3">
                  <Badge label={task.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Lower Section: Deal Summary */}
      <div className="bg-white rounded-xl shadow-sm p-5">
        <h2 className="font-semibold text-gray-900 mb-4">担当商談サマリー</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-100">
              <th className="pb-3 font-medium">商談名</th>
              <th className="pb-3 font-medium">企業名</th>
              <th className="pb-3 font-medium">ステータス</th>
              <th className="pb-3 font-medium">未完了Task数</th>
              <th className="pb-3 font-medium">最終面談日</th>
            </tr>
          </thead>
          <tbody>
            {myDeals.map((deal) => (
              <tr
                key={deal.id}
                className={`border-b border-gray-50 ${
                  deal.incompleteTasks > 0 ? 'bg-yellow-50' : ''
                }`}
              >
                <td className="py-3">
                  <Link
                    to={`/deals/${deal.id}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                  >
                    {deal.name}
                  </Link>
                </td>
                <td className="py-3 text-gray-600">{deal.company}</td>
                <td className="py-3">
                  <Badge label={deal.status} />
                </td>
                <td className="py-3">
                  {deal.incompleteTasks > 0 ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-xs">
                      {deal.incompleteTasks}
                    </span>
                  ) : (
                    <span className="text-gray-400">0</span>
                  )}
                </td>
                <td className="py-3 text-gray-600">{deal.lastMeeting}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      <ActivityModal
        isOpen={activityModalOpen}
        onClose={() => setActivityModalOpen(false)}
      />
      <TaskModal
        isOpen={taskModalOpen}
        onClose={() => setTaskModalOpen(false)}
      />
    </div>
  );
}
