import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Briefcase, Building2, Users, Calendar, Tag, FileText, Pencil } from 'lucide-react';
import Badge from '../components/Badge';
import { useData } from '../contexts/DataContext';
import EditJobModal from '../components/modals/EditJobModal';

const JOB_DESCRIPTION = `【業務内容】
クライアント企業のプロジェクトにおいて、要件定義・基本設計・詳細設計・実装・テスト・運用保守まで一連の工程をご担当いただきます。チームメンバーと協力しながら、品質の高いシステム開発を推進していただくポジションです。

【必須スキル】
・該当技術領域での実務経験3年以上
・チームでの開発経験
・基本的なコミュニケーション能力
・自発的に課題を発見し解決する姿勢

【歓迎スキル】
・上流工程（要件定義・基本設計）の経験
・リーダー/サブリーダー経験
・アジャイル開発の経験
・関連する資格保有

【働き方】
・勤務形態: 常駐型（クライアント先）/ リモート併用可
・契約期間: 長期（3ヶ月更新）
・稼働: 月160〜180時間目安

【その他】
・面談回数: 1〜2回
・就業開始: 即日〜1ヶ月以内
・服装: ビジネスカジュアル`;

export default function JobDetail() {
  const { id } = useParams();
  const { JOBS, DEALS, DEAL_DETAILS } = useData();
  const [showEditJob, setShowEditJob] = useState(false);
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
  const relatedJobs = JOBS.filter(j => j.dealId === job.dealId && j.id !== job.id);

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to={deal ? `/deals/${deal.id}` : '/deals'} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          {deal ? '商談詳細に戻る' : '商談一覧に戻る'}
        </Link>
        <button onClick={() => setShowEditJob(true)} className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <Pencil className="w-4 h-4 inline mr-1" />編集
        </button>
      </div>

      {/* Upper: Job detail */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-2 mb-5">
          <Briefcase className="w-5 h-5 text-gray-500" />
          <h2 className="text-lg font-semibold text-gray-900">求人詳細</h2>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-8">
          {/* Left: basic info */}
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

          {/* Right: job description */}
          <div>
            <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>求人内容</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line max-h-[400px] overflow-y-auto">
              {JOB_DESCRIPTION}
            </div>
          </div>
        </div>

        {/* Related jobs from same deal */}
        {relatedJobs.length > 0 && (
          <div className="mt-6 pt-5 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">同じ商談の他の求人</h3>
            <div className="flex flex-wrap gap-2">
              {relatedJobs.map((rj) => (
                <Link
                  key={rj.id}
                  to={`/jobs/${rj.id}`}
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  <span className="font-medium text-gray-900">{rj.title}</span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full">{rj.count}名</span>
                  <Badge label={rj.dept} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lower: Related deal */}
      {deal && dealDetail && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">紐づく商談</h2>
          <div className="grid grid-cols-3 gap-6 text-sm">
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
      {showEditJob && <EditJobModal isOpen={true} onClose={() => setShowEditJob(false)} job={job} />}
    </div>
  );
}
