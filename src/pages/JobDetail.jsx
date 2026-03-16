import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Building2, Users, Calendar, Tag } from 'lucide-react';
import Badge from '../components/Badge';
import { JOBS, DEALS, DEAL_DETAILS } from '../data/dummy';

export default function JobDetail() {
  const { id } = useParams();
  const job = JOBS.find(j => j.id === Number(id));

  if (!job) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p>求人が見つかりません</p>
        <Link to="/deals" className="text-blue-600 hover:underline mt-2 inline-block">商談一覧に戻る</Link>
      </div>
    );
  }

  const deal = DEALS.find(d => d.id === job.dealId);
  const dealDetail = DEAL_DETAILS[job.dealId];

  // Find other jobs from the same deal
  const relatedJobs = JOBS.filter(j => j.dealId === job.dealId && j.id !== job.id);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to={deal ? `/deals/${deal.id}` : '/deals'} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {deal ? '商談詳細に戻る' : '商談一覧に戻る'}
        </Link>
      </div>

      <div className="grid grid-cols-[1fr_1fr] gap-6">
        {/* Left: Job info */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center gap-2 mb-5">
            <Briefcase className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-semibold text-gray-900">求人詳細</h2>
          </div>
          <div className="space-y-4 text-sm">
            <div>
              <span className="text-gray-500">求人タイトル</span>
              <p className="font-semibold text-gray-900 text-base mt-1">{job.title}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Users className="w-3.5 h-3.5" /> 募集人数</span>
              <p className="font-medium text-gray-900 mt-1">
                <span className="text-lg text-blue-600 font-bold">{job.count}</span>名
              </p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> 事業部</span>
              <div className="mt-1"><Badge label={job.dept} /></div>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> 求人取得日</span>
              <p className="font-medium text-gray-900 mt-1">{job.date}</p>
            </div>
            <div>
              <span className="text-gray-500 flex items-center gap-1"><Building2 className="w-3.5 h-3.5" /> 企業名</span>
              <p className="mt-1">
                {job.companyId ? (
                  <Link to={`/companies/${job.companyId}`} className="font-medium text-blue-600 hover:underline">
                    {job.company}
                  </Link>
                ) : (
                  <span className="font-medium text-gray-900">{job.company}</span>
                )}
              </p>
            </div>
            <div>
              <span className="text-gray-500">商談ステータス</span>
              <div className="mt-1"><Badge label={job.status} /></div>
            </div>
          </div>
        </div>

        {/* Right: Related deal and other jobs */}
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
                  <span className="text-gray-500">商談経路</span>
                  <p className="font-medium text-gray-900 mt-0.5">{dealDetail.basicInfo.channel}</p>
                </div>
              </div>
            </div>
          )}

          {relatedJobs.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">同じ商談の他の求人</h2>
              <div className="space-y-3">
                {relatedJobs.map((rj) => (
                  <Link
                    key={rj.id}
                    to={`/jobs/${rj.id}`}
                    className="block p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">{rj.title}</span>
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{rj.count}名</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Badge label={rj.dept} />
                      <span>{rj.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
