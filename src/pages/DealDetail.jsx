import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, GitBranch, Calendar, Users, Briefcase, CheckSquare, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import Badge from '../components/Badge';
import DealTree from '../components/DealTree';
import { DEALS, DEAL_DETAILS, TASKS } from '../data/dummy';
import AddMeetingModal from '../components/modals/AddMeetingModal';
import BranchModal from '../components/modals/BranchModal';
import TaskModal from '../components/modals/TaskModal';
import JobModal from '../components/modals/JobModal';

const STATUS_OPTIONS = [
  { value: 'pending', label: '未実施' },
  { value: 'in_progress', label: '実施中' },
  { value: 'done', label: '完了' },
];

const STATUS_COLORS = {
  pending: 'bg-gray-100 text-gray-700',
  in_progress: 'bg-blue-100 text-blue-700',
  done: 'bg-green-100 text-green-700',
};

const DEAL_DESCRIPTION = `【商談概要】
本商談はクライアント企業の事業課題・人材ニーズをヒアリングし、最適なIT人材ソリューションを提案するものです。初回面談にて先方の組織体制・プロジェクト状況を把握し、具体的な人材要件の定義を行います。

【提案内容】
・クライアントの技術スタック・開発体制に適合する人材のご紹介
・プロジェクトの規模・期間に応じた柔軟なチーム編成の提案
・技術顧問・PMOなど上流工程を含む包括的な支援体制の構築
・長期的なパートナーシップに基づく継続的な人材供給計画

【進行フロー】
1. 初回ヒアリング（課題・ニーズの把握）
2. 人材要件定義・求人票作成
3. 候補者選定・ご紹介
4. クライアント面談調整
5. 契約条件交渉・合意
6. 稼働開始・フォローアップ

【備考】
・契約形態: SES / 業務委託 / 人材紹介（ポジションにより異なる）
・想定期間: 3ヶ月〜長期
・フォローアップ: 月次定例MTGにて稼働状況を確認`;

export default function DealDetail() {
  const { id } = useParams();
  const detail = DEAL_DETAILS[id];
  const dealSummary = DEALS.find(d => d.id === Number(id));

  const [showMeeting, setShowMeeting] = useState(false);
  const [showBranch, setShowBranch] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showJob, setShowJob] = useState(false);
  const [expandedMeetings, setExpandedMeetings] = useState({});
  const [taskStatuses, setTaskStatuses] = useState(() => {
    if (!detail) return {};
    const map = {};
    detail.tasks.forEach((t, idx) => { map[idx] = t.status; });
    return map;
  });
  const [openDropdown, setOpenDropdown] = useState(null);

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

  const toggleMeeting = (idx) => {
    setExpandedMeetings(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleStatusChange = (taskIdx, newStatus) => {
    setTaskStatuses(prev => ({ ...prev, [taskIdx]: newStatus }));
    setOpenDropdown(null);
  };

  const getStatusLabel = (status) => {
    const opt = STATUS_OPTIONS.find(o => o.value === status);
    return opt ? opt.label : status;
  };

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

      {/* 商談ツリー (full width, fixed height with horizontal scroll) */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <GitBranch className="w-4 h-4 text-gray-500" />
          <h2 className="font-semibold text-gray-900">商談ツリー</h2>
        </div>
        <div className="overflow-x-auto max-h-[200px] overflow-y-auto">
          <DealTree currentDealId={id} />
        </div>
      </div>

      {/* Two column layout - fixed left column width */}
      <div className="grid grid-cols-[320px_1fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6 min-w-0">
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
        <div className="flex flex-col gap-6 min-w-0">
          {/* 商談内容 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">商談内容</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line max-h-[300px] overflow-y-auto">
              {DEAL_DESCRIPTION}
            </div>
          </div>

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
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gray-200" />
                <div className="space-y-4">
                  {sortedMeetings.map((meeting, idx) => {
                    const isExpanded = expandedMeetings[idx] !== false;
                    return (
                      <div key={idx} className="relative pl-8">
                        <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                        <button
                          onClick={() => toggleMeeting(idx)}
                          className="w-full text-left"
                        >
                          <div className="flex items-center gap-3 flex-wrap">
                            {isExpanded ? (
                              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                            )}
                            <Badge label={meeting.date} />
                            <span className="text-sm font-medium text-gray-900">第{meeting.round}回</span>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Users className="w-3 h-3" />
                              <span>{meeting.attendees}</span>
                            </div>
                          </div>
                        </button>
                        {isExpanded && (
                          <div className="mt-2 ml-6">
                            <p className="text-sm text-gray-700 leading-relaxed">{meeting.content}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 紐づくTask - inline status change */}
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
                    const currentStatus = taskStatuses[idx] || task.status;
                    return (
                      <tr key={idx} className="border-b border-gray-50">
                        <td className="py-2.5 text-gray-900">{task.name}</td>
                        <td className="py-2.5 text-gray-600">{task.due}</td>
                        <td className="py-2.5 text-gray-600">{task.assignee}</td>
                        <td className="py-2.5">
                          <div className="relative">
                            <button
                              onClick={() => setOpenDropdown(openDropdown === `task-${idx}` ? null : `task-${idx}`)}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${STATUS_COLORS[currentStatus] || 'bg-gray-100 text-gray-700'}`}
                            >
                              {getStatusLabel(currentStatus)}
                              <ChevronDown className="w-3 h-3" />
                            </button>
                            {openDropdown === `task-${idx}` && (
                              <>
                                <div className="fixed inset-0 z-10" onClick={() => setOpenDropdown(null)} />
                                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
                                  {STATUS_OPTIONS.map((opt) => (
                                    <button
                                      key={opt.value}
                                      onClick={() => handleStatusChange(idx, opt.value)}
                                      className={`w-full text-left px-3 py-2 text-xs hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                                        currentStatus === opt.value ? 'font-bold bg-gray-50' : ''
                                      }`}
                                    >
                                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${STATUS_COLORS[opt.value]?.split(' ')[0]}`} />
                                      {opt.label}
                                    </button>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </td>
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
                      <span className="text-sm font-medium text-blue-600">{job.title}</span>
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
