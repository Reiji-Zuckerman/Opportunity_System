import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Calendar, CheckSquare, TrendingUp, Briefcase, Clock } from 'lucide-react';
import Badge from '../components/Badge';
import { MY_PAGE_DATA } from '../data/dummy';
import ActivityModal from '../components/modals/ActivityModal';
import TaskModal from '../components/modals/TaskModal';

export default function MyPage() {
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const data = MY_PAGE_DATA;

  const scoreItems = [
    { label: '初回商談数', value: data.score.initialDeals, icon: TrendingUp },
    { label: 'アポ獲得数', value: data.score.appointmentCount, icon: Calendar },
    { label: 'Task完了数', value: data.score.taskDoneCount, icon: CheckSquare },
    { label: '求人取得数', value: data.score.jobAcquiredCount, icon: Briefcase },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          マイページ &mdash; {data.user.name}
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
        <span className="text-sm">{data.notification}</span>
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

        {/* Right: Calendar Events */}
        <div className="bg-white rounded-xl shadow-sm p-5">
          <h2 className="font-semibold text-gray-900 mb-4">今週の予定商談</h2>
          <div className="space-y-3">
            {data.calendarEvents.map((event, i) => (
              <div key={i} className="flex items-start gap-3 text-sm">
                <div className="flex items-center gap-1.5 text-gray-500 min-w-[100px]">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{event.date}({event.dayOfWeek}) {event.time}</span>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">{event.company}</div>
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
            {data.myTasks.map((task, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-50 ${
                  task.status === 'overdue' ? 'bg-red-50' : ''
                }`}
              >
                <td className="py-3 text-gray-900">{task.name}</td>
                <td className="py-3 text-gray-600">{task.company}</td>
                <td className="py-3 text-gray-600">{task.due}</td>
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
              <th className="pb-3 font-medium">ステータス</th>
              <th className="pb-3 font-medium">残Task数</th>
              <th className="pb-3 font-medium">最終面談日</th>
            </tr>
          </thead>
          <tbody>
            {data.myDeals.map((deal, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-50 ${
                  deal.remainingTasks > 0 ? 'bg-yellow-50' : ''
                }`}
              >
                <td className="py-3 text-gray-900 font-medium">{deal.name}</td>
                <td className="py-3">
                  <Badge label={deal.status} />
                </td>
                <td className="py-3">
                  {deal.remainingTasks > 0 ? (
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-xs">
                      {deal.remainingTasks}
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
      {activityModalOpen && <ActivityModal isOpen={true} onClose={() => setActivityModalOpen(false)} />}
      {taskModalOpen && <TaskModal isOpen={true} onClose={() => setTaskModalOpen(false)} />}
    </div>
  );
}
