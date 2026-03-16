import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, GitBranch, Calendar, Users, Briefcase, CheckSquare } from 'lucide-react';
import Badge from '../components/Badge';
import { DEAL_DETAILS } from '../data/dummy';
import AddMeetingModal from '../components/modals/AddMeetingModal';
import BranchModal from '../components/modals/BranchModal';
import TaskModal from '../components/modals/TaskModal';
import JobModal from '../components/modals/JobModal';

export default function DealDetail() {
  const { id } = useParams();
  const deal = DEAL_DETAILS[id];

  const [showMeeting, setShowMeeting] = useState(false);
  const [showBranch, setShowBranch] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showJob, setShowJob] = useState(false);

  if (!deal) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>商談が見つかりません</p>
        <Link to="/deals" className="text-blue-600 hover:underline mt-2 inline-block">商談一覧に戻る</Link>
      </div>
    );
  }

  const sortedMeetings = [...deal.meetings].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/deals" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          商談一覧
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowTask(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Task
          </button>
          <button
            onClick={() => setShowJob(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            + 求人登録
          </button>
          <button
            onClick={() => setShowMeeting(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            + 面談追記
          </button>
          <button
            onClick={() => setShowBranch(true)}
            className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg hover:bg-orange-600 transition-colors"
          >
            担当分岐 new
          </button>
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-[1.2fr_1.8fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* 商談基本情報 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="font-semibold text-gray-900 mb-4">商談基本情報</h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">商談名</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.name}</p>
              </div>
              <div>
                <span className="text-gray-500">企業名</span>
                <p className="mt-0.5">
                  <Link to={`/companies/${deal.companyId}`} className="font-medium text-blue-600 hover:underline">
                    {deal.company}
                  </Link>
                </p>
              </div>
              <div>
                <span className="text-gray-500">担当者</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.person}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">事業部</span>
                <Badge label={deal.division} />
              </div>
              <div>
                <span className="text-gray-500">商談経路</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.route}</p>
              </div>
              <div>
                <span className="text-gray-500">商談獲得者</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.acquirer}</p>
              </div>
              <div>
                <span className="text-gray-500">事業部名</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.departmentName}</p>
              </div>
              <div>
                <span className="text-gray-500">人物名</span>
                <p className="font-medium text-gray-900 mt-0.5">{deal.contactPerson}</p>
              </div>
            </div>
          </div>

          {/* 商談ツリー */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <GitBranch className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">商談ツリー</h2>
            </div>
            <div className="space-y-1 text-sm">
              {/* Parent */}
              {deal.tree.parent && (
                <Link
                  to={`/deals/${deal.tree.parent.id}`}
                  className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-blue-600 hover:underline transition-colors"
                >
                  {deal.tree.parent.name}
                </Link>
              )}

              {/* Current (highlighted with accent left border) */}
              <div className="border-l-4 border-blue-600 px-3 py-2 rounded-lg bg-blue-50 font-medium text-gray-900">
                {deal.tree.current.name}
              </div>

              {/* Children (indented) */}
              {deal.tree.children && deal.tree.children.map((child) => (
                <Link
                  key={child.id}
                  to={`/deals/${child.id}`}
                  className="block ml-6 px-3 py-2 rounded-lg hover:bg-gray-50 text-blue-600 hover:underline transition-colors"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* 面談履歴 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">面談履歴</h2>
            </div>
            {sortedMeetings.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">面談履歴がありません</p>
            ) : (
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200" />

                <div className="space-y-6">
                  {sortedMeetings.map((meeting) => (
                    <div key={meeting.id} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-blue-600 border-2 border-white shadow-sm" />

                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge label={meeting.date} />
                          <span className="text-sm font-medium text-gray-900">第{meeting.count}回</span>
                          <Badge label={meeting.status} />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          <span>先方: {meeting.attendeesClient.join(', ')}</span>
                          <span className="mx-1">|</span>
                          <span>自社: {meeting.attendeesOwn.join(', ')}</span>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{meeting.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 紐づくTask */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <CheckSquare className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">紐づくTask</h2>
            </div>
            {deal.tasks.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">タスクがありません</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 font-medium text-gray-500">内容</th>
                    <th className="text-left py-2 font-medium text-gray-500">カテゴリ</th>
                    <th className="text-left py-2 font-medium text-gray-500">期限</th>
                    <th className="text-left py-2 font-medium text-gray-500">担当者</th>
                    <th className="text-left py-2 font-medium text-gray-500">ステータス</th>
                  </tr>
                </thead>
                <tbody>
                  {deal.tasks.map((task) => (
                    <tr key={task.id} className="border-b border-gray-50">
                      <td className="py-2.5 text-gray-900">{task.content}</td>
                      <td className="py-2.5"><Badge label={task.category} /></td>
                      <td className="py-2.5 text-gray-600">{task.deadline}</td>
                      <td className="py-2.5 text-gray-600">{task.person}</td>
                      <td className="py-2.5"><Badge label={task.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* 求人情報 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">求人情報</h2>
            </div>
            {deal.jobs.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">求人情報がありません</p>
            ) : (
              <div className="space-y-3">
                {deal.jobs.map((job) => (
                  <div key={job.id} className="p-3 border border-gray-100 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{job.title}</span>
                      <span className="text-xs text-gray-500">{job.count}名</span>
                    </div>
                    <p className="text-xs text-gray-500">{job.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddMeetingModal isOpen={showMeeting} onClose={() => setShowMeeting(false)} dealName={deal.name} meetingCount={deal.meetings.length} />
      <BranchModal isOpen={showBranch} onClose={() => setShowBranch(false)} />
      <TaskModal isOpen={showTask} onClose={() => setShowTask(false)} />
      <JobModal isOpen={showJob} onClose={() => setShowJob(false)} />
    </div>
  );
}
