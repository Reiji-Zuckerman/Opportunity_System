import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, Users, FileText, CheckSquare, ChevronDown, ChevronRight } from 'lucide-react';
import Badge from '../components/Badge';
import { COMPANIES, COMPANY_DETAILS } from '../data/dummy';
import ActivityModal from '../components/modals/ActivityModal';
import TaskModal from '../components/modals/TaskModal';
import ContractStatusModal from '../components/modals/ContractStatusModal';

export default function CompanyDetail() {
  const { id } = useParams();
  const company = COMPANY_DETAILS[id];
  const companySummary = COMPANIES.find(c => c.id === Number(id));

  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [treeView, setTreeView] = useState(false);
  const [whiteListFilter, setWhiteListFilter] = useState('all');

  if (!company) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>企業が見つかりません</p>
        <Link to="/companies" className="text-blue-600 hover:underline mt-2 inline-block">企業一覧に戻る</Link>
      </div>
    );
  }

  const info = company.info;
  const companyName = companySummary?.name || '—';

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/companies" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          企業一覧
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowActivityModal(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Activity
          </button>
          <button
            onClick={() => setShowTaskModal(true)}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Task
          </button>
          <button
            onClick={() => setShowContractModal(true)}
            className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            契約ステータス更新
          </button>
        </div>
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-[1fr_1.8fr] gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          {/* 企業情報 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">企業情報</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-gray-500">企業名</span>
                <p className="font-medium text-gray-900 mt-0.5">{companyName}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Tier</span>
                <Badge label={info.tier} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">事業分類</span>
                <Badge label={info.category} />
              </div>
              <div>
                <span className="text-gray-500">累計粗利</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.grossProfit.toLocaleString()}円</p>
              </div>
              <div>
                <span className="text-gray-500">最終商談日</span>
                <p className="font-medium text-gray-900 mt-0.5">{info.lastDealDate}</p>
              </div>
            </div>
          </div>

          {/* 事業部別契約ステータス */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="font-semibold text-gray-900 mb-4">事業部別契約ステータス</h2>
            <div className="space-y-3">
              {Object.entries(company.contractStatus).map(([key, status]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{key.toUpperCase()}</span>
                  <Badge label={status} />
                </div>
              ))}
            </div>
          </div>

          {/* 各事業部90日アクション状況 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <h2 className="font-semibold text-gray-900 mb-4">各事業部90日アクション状況</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 font-medium text-gray-500">事業部</th>
                  <th className="text-left py-2 font-medium text-gray-500">商談数</th>
                  <th className="text-left py-2 font-medium text-gray-500">求人取得数</th>
                  <th className="text-left py-2 font-medium text-gray-500">最終接触日</th>
                </tr>
              </thead>
              <tbody>
                {company.deptActivity.map((action) => (
                  <tr key={action.dept} className="border-b border-gray-50">
                    <td className="py-2 font-medium text-gray-700">{action.dept}</td>
                    <td className="py-2 text-gray-600">{action.deals}</td>
                    <td className="py-2 text-gray-600">{action.jobs}</td>
                    <td className="py-2 text-gray-600">{action.lastContact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {/* 部署別ホワイトリスト */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">部署別ホワイトリスト</h2>
            </div>
            <div className="flex items-center gap-2 mb-4">
              {[
                { key: 'all', label: 'すべて' },
                { key: 'contacted', label: '接触済のみ' },
                { key: 'jobAcquired', label: '求人取得済のみ' },
                { key: 'untouched', label: '未接触のみ' },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setWhiteListFilter(f.key)}
                  className={`px-3 py-1 text-xs rounded-lg border transition-colors ${
                    whiteListFilter === f.key
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-2 font-medium text-gray-500">部署名</th>
                  <th className="text-center py-2 font-medium text-gray-500">接触済</th>
                  <th className="text-center py-2 font-medium text-gray-500">求人取得済</th>
                </tr>
              </thead>
              <tbody>
                {company.whitelist
                  .filter((item) => {
                    if (whiteListFilter === 'contacted') return item.contacted;
                    if (whiteListFilter === 'jobAcquired') return item.jobAcquired;
                    if (whiteListFilter === 'untouched') return !item.contacted;
                    return true;
                  })
                  .map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-50">
                    <td className="py-2 text-gray-700">{item.dept}</td>
                    <td className="py-2 text-center">
                      {item.contacted ? (
                        <span className="text-green-500">&#10003;</span>
                      ) : (
                        <span className="text-gray-300">&#10005;</span>
                      )}
                    </td>
                    <td className="py-2 text-center">
                      {item.jobAcquired ? (
                        <span className="text-green-500">&#10003;</span>
                      ) : (
                        <span className="text-gray-300">&#10005;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 商談一覧 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-gray-500" />
                <h2 className="font-semibold text-gray-900">商談一覧</h2>
              </div>
              <button
                onClick={() => setTreeView(!treeView)}
                className={`px-3 py-1 text-xs rounded-lg border transition-colors ${
                  treeView
                    ? 'bg-blue-50 border-blue-200 text-blue-700'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {treeView ? 'ツリー表示' : 'リスト表示'}
              </button>
            </div>
            <div className="space-y-2">
              {company.deals.map((deal) => (
                <div
                  key={deal.id}
                  className="flex items-center justify-between py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/deals/${deal.id}`}
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      {deal.name}
                    </Link>
                    <Badge label={deal.dept} />
                    <Badge label={deal.status} />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    {deal.remainingTasks > 0 && (
                      <span>残Task: {deal.remainingTasks}</span>
                    )}
                    <span>{deal.lastMeeting}</span>
                  </div>
                </div>
              ))}
              {company.deals.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">商談がありません</p>
              )}
            </div>
          </div>

          {/* 担当者 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">担当者</h2>
            </div>
            <div className="space-y-3">
              {company.assignees.map((person, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-medium shrink-0">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{person.name}</p>
                    <p className="text-xs text-gray-500">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showActivityModal && (
        <ActivityModal onClose={() => setShowActivityModal(false)} companyId={Number(id)} />
      )}
      {showTaskModal && (
        <TaskModal onClose={() => setShowTaskModal(false)} companyId={Number(id)} />
      )}
      {showContractModal && (
        <ContractStatusModal onClose={() => setShowContractModal(false)} companyId={Number(id)} />
      )}
    </div>
  );
}
