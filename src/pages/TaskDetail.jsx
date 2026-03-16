import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckSquare, Building2, Calendar, User, Tag, Phone } from 'lucide-react';
import Badge from '../components/Badge';
import { TASKS, DEALS, DEAL_DETAILS } from '../data/dummy';

export default function TaskDetail() {
  const { id } = useParams();
  const task = TASKS.find(t => t.id === Number(id));

  if (!task) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>タスクが見つかりません</p>
        <Link to="/tasks" className="text-blue-600 hover:underline mt-2 inline-block">Task一覧に戻る</Link>
      </div>
    );
  }

  const deal = task.dealId ? DEALS.find(d => d.id === task.dealId) : null;
  const dealDetail = task.dealId ? DEAL_DETAILS[task.dealId] : null;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/tasks" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Task一覧
        </Link>
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-6">
        {/* Left: Task info */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <CheckSquare className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">タスク詳細</h2>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> 種類</span>
              <div className="mt-1"><Badge label={task.type} /></div>
            </div>
            <div>
              <span className="text-gray-500">内容</span>
              <p className="font-medium text-gray-900 mt-1">{task.name}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> 企業名</span>
              <p className="font-medium text-gray-900 mt-1">{task.company}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> 種別</span>
              <div className="mt-1"><Badge label={task.category} /></div>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> 期日</span>
              <p className="font-medium text-gray-900 mt-1">{task.due}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><User className="w-3.5 h-3.5" /> 担当者</span>
              <p className="font-medium text-gray-900 mt-1">{task.assignee}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> 手段</span>
              <p className="font-medium text-gray-900 mt-1">{task.method}</p>
            </div>
            <div>
              <span className="text-gray-500">ステータス</span>
              <div className="mt-1"><Badge label={task.status} /></div>
            </div>
          </div>
        </div>

        {/* Right: Related deal info */}
        <div className="flex flex-col gap-6">
          {deal && dealDetail && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">紐づく商談</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">商談名</span>
                  <p className="mt-0.5">
                    <Link to={`/deals/${deal.id}`} className="font-medium text-blue-600 hover:underline">
                      {deal.name}
                    </Link>
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">企業名</span>
                  <p className="mt-0.5">
                    <Link to={`/companies/${deal.companyId}`} className="font-medium text-blue-600 hover:underline">
                      {dealDetail.basicInfo.company}
                    </Link>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">事業部</span>
                  <Badge label={dealDetail.basicInfo.businessDept} />
                </div>
                <div>
                  <span className="text-gray-500">先方部署</span>
                  <p className="font-medium text-gray-900 mt-0.5">{dealDetail.basicInfo.dept}</p>
                </div>
                <div>
                  <span className="text-gray-500">先方担当者</span>
                  <p className="font-medium text-gray-900 mt-0.5">{dealDetail.basicInfo.clientPerson}</p>
                </div>
                <div>
                  <span className="text-gray-500">商談ステータス</span>
                  <div className="mt-0.5"><Badge label={dealDetail.basicInfo.status} /></div>
                </div>
              </div>
            </div>
          )}

          {dealDetail && dealDetail.meetings.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">最新面談</h2>
              {(() => {
                const latest = [...dealDetail.meetings].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
                return (
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge label={latest.date} />
                      <span className="font-medium text-gray-900">第{latest.round}回</span>
                    </div>
                    <p className="text-gray-500 text-xs">出席者: {latest.attendees}</p>
                    <p className="text-gray-700 leading-relaxed">{latest.content}</p>
                  </div>
                );
              })()}
            </div>
          )}

          {!deal && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">紐づく商談</h2>
              <p className="text-sm text-gray-400">紐づく商談がありません</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
