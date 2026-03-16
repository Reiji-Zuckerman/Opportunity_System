import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, GitBranch, Calendar, Users, Briefcase, CheckSquare } from 'lucide-react';
import Badge from '../components/Badge';
import DealTree from '../components/DealTree';
import { DEALS, DEAL_DETAILS, TASKS } from '../data/dummy';
import AddMeetingModal from '../components/modals/AddMeetingModal';
import BranchModal from '../components/modals/BranchModal';
import TaskModal from '../components/modals/TaskModal';
import JobModal from '../components/modals/JobModal';

export default function DealDetail() {
  const { id } = useParams();
  const detail = DEAL_DETAILS[id];
  const dealSummary = DEALS.find(d => d.id === Number(id));

  const [showMeeting, setShowMeeting] = useState(false);
  const [showBranch, setShowBranch] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showJob, setShowJob] = useState(false);

  if (!detail) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>商談が見つかりません</p>
        <Link to="/deals" className="text-blue-600 hover:underline mt-2 inline-block">商談一覧に戻る</Link>
      </div>
    );
  }

  const info = detail.basicInfo;
  const dealName = dealSummary?.name || detail.tree.current;
  const sortedMeetings = [...detail.meetings].sort((a, b) => new Date(b.date) - new Date(a.date));

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
            + 商談追記
          </button>
          <button
            onClick={() => setShowBranch(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            担当分岐
          </button>
        </div>
      </div>

      {/* 商談ツリー (full width, recursive) */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-4 h-4 text-gray-500" />
          <h2 className="font-semibold text-gray-900">商談ツリー</h2>
        </div>
        <DealTree currentDealId={id} />
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
                <p className="font-medium text-gray-900 mt-0.5">{dealName}</p>
              </div>
              <div>
                <span className="text-gray-500">企業名</span>
                <p className="mt-0.5">
                  {dealSummary?.companyId ? (
                    <Link to={`/companies/${dealSummary.companyId}`} className="font-medium text-blue-600 hover:underline">
                      {info.company}
                    </Link>
                  ) : (
                    <span className="font-medium text-gray-900">{info.company}</span>
                  )}
                </p>
              </div>
              <div>
                <span className="text-gray-500">担当者（自社）</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.ourPerson}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">事業部</span>
                <Badge label={info.businessDept} />
              </div>
              <div>
                <span className="text-gray-500">商談経路</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.channel}</p>
              </div>
              <div>
                <span className="text-gray-500">商談獲得者</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.acquiredBy}</p>
              </div>
              <div>
                <span className="text-gray-500">先方部署</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.dept}</p>
              </div>
              <div>
                <span className="text-gray-500">先方担当者</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.clientPerson}</p>
              </div>
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
                  {sortedMeetings.map((meeting, idx) => (
                    <div key={idx} className="relative pl-8">
                      {/* Timeline dot */}
                      <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-blue-600 border-2 border-white shadow-sm" />

                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge label={meeting.date} />
                          <span className="text-sm font-medium text-gray-900">第{meeting.round}回</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Users className="w-3 h-3" />
                          <span>{meeting.attendees}</span>
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
            {detail.tasks.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">タスクがありません</p>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 font-medium text-gray-500">内容</th>
                    <th className="text-left py-2 font-medium text-gray-500">期限</th>
                    <th className="text-left py-2 font-medium text-gray-500">担当者</th>
                    <th className="text-left py-2 font-medium text-gray-500">ステータス</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.tasks.map((task, idx) => {
                    const globalTask = TASKS.find(t => t.name === task.name && t.assignee === task.assignee);
                    return (
                      <tr
                        key={idx}
                        onClick={() => globalTask && (window.location.hash = `/tasks/${globalTask.id}`)}
                        className={`border-b border-gray-50 ${globalTask ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                      >
                        <td className="py-2.5 text-gray-900">{task.name}</td>
                        <td className="py-2.5 text-gray-600">{task.due}</td>
                        <td className="py-2.5 text-gray-600">{task.assignee}</td>
                        <td className="py-2.5"><Badge label={task.status} /></td>
                      </tr>
                    );
                  })}
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
            {detail.jobs.length === 0 ? (
              <p className="text-sm text-gray-400 text-center py-4">求人情報がありません</p>
            ) : (
              <div className="space-y-3">
                {detail.jobs.map((job, idx) => (
                  <Link
                    key={idx}
                    to={job.id ? `/jobs/${job.id}` : '#'}
                    className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{job.title}</span>
                      <span className="text-xs text-gray-500">{job.count}名</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Badge label={job.dept} />
                      <span>{job.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <AddMeetingModal isOpen={showMeeting} onClose={() => setShowMeeting(false)} dealName={dealName} meetingCount={detail.meetings.length} />
      <BranchModal isOpen={showBranch} onClose={() => setShowBranch(false)} />
      <TaskModal isOpen={showTask} onClose={() => setShowTask(false)} />
      <JobModal isOpen={showJob} onClose={() => setShowJob(false)} />
    </div>
  );
}
