import { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Users, FileText, CheckSquare, Briefcase, GitBranch, ChevronDown, Send, UserCheck, Handshake, Trash2, Pencil } from 'lucide-react';
import Badge from '../components/Badge';
import CompanyDealTrees from '../components/CompanyDealTrees';
import { useData } from '../contexts/DataContext';
import ActivityModal from '../components/modals/ActivityModal';
import TaskModal from '../components/modals/TaskModal';
import ContractStatusModal from '../components/modals/ContractStatusModal';
import NewDealModal from '../components/modals/NewDealModal';
import { ConfirmDialog } from '../components/Modal';
import EditCompanyModal from '../components/modals/EditCompanyModal';

const TABS = [
  { key: 'all', label: '全体' },
  { key: 'itss', label: 'ITSS' },
  { key: 'perm', label: 'PERM' },
  { key: 'sfa', label: 'SFA' },
];

const ATTENTION_COLORS = { A: 'bg-red-100 text-red-700', B: 'bg-yellow-100 text-yellow-700', C: 'bg-gray-100 text-gray-600' };

export default function CompanyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { COMPANIES, COMPANY_DETAILS, COMPANY_EXTENDED, DEAL_DETAILS, DEALS, JOBS, CV_SENTS, INTERVIEWS, ORAL_AGREEMENTS, deleteCompany, upsertCompany } = useData();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditCompany, setShowEditCompany] = useState(false);
  const company = COMPANY_DETAILS[id];
  const companySummary = COMPANIES.find(c => c.id === Number(id));
  const ext = COMPANY_EXTENDED[id] || {};

  const [activeTab, setActiveTab] = useState('all');
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [showContractModal, setShowContractModal] = useState(false);
  const [showNewDealModal, setShowNewDealModal] = useState(false);
  const [treeView, setTreeView] = useState(true);
  const [jobDisplayCount, setJobDisplayCount] = useState(10);
  const [whiteListFilter, setWhiteListFilter] = useState('all');
  const [selectedDept, setSelectedDept] = useState(null);

  const companyJobs = useMemo(() => {
    const companyDeals = DEALS.filter(d => d.companyId === Number(id));
    const jobs = [];
    companyDeals.forEach(deal => {
      const detail = DEAL_DETAILS[deal.id];
      if (detail?.jobs) {
        detail.jobs.forEach(job => {
          jobs.push({ ...job, dealId: deal.id, dealName: deal.name });
        });
      }
    });
    return jobs;
  }, [id]);

  const companyCvSents = useMemo(() => CV_SENTS.filter(c => c.companyId === Number(id)), [id]);
  const companyInterviews = useMemo(() => INTERVIEWS.filter(i => i.companyId === Number(id)), [id]);
  const companyOralAgreements = useMemo(() => ORAL_AGREEMENTS.filter(o => o.companyId === Number(id)), [id]);

  // 最終商談者: derive 4 most recent unique ourPerson from deals
  const lastDealPersons = useMemo(() => {
    const companyDeals = DEALS.filter(d => d.companyId === Number(id));
    const dealsByDate = companyDeals
      .map(deal => {
        const detail = DEAL_DETAILS[deal.id];
        if (!detail) return null;
        const lastMeetingDate = detail.meetings?.length > 0
          ? detail.meetings.reduce((latest, m) => new Date(m.date) > new Date(latest.date) ? m : latest).date
          : deal.lastMeeting || '1970/1/1';
        return { ourPerson: detail.basicInfo.ourPerson, date: lastMeetingDate, dept: detail.basicInfo.businessDept };
      })
      .filter(Boolean)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    const seen = new Set();
    const result = [];
    for (const entry of dealsByDate) {
      const names = entry.ourPerson.split('、');
      for (const name of names) {
        const trimmed = name.trim();
        if (!seen.has(trimmed)) {
          seen.add(trimmed);
          result.push({ name: trimmed, dept: entry.dept, date: entry.date });
        }
      }
      if (result.length >= 4) break;
    }
    return result.slice(0, 4);
  }, [id]);

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
  const showInTab = (tabKey) => activeTab === 'all' || activeTab === tabKey;
  const showCommon = true; // ◯ columns always show

  const filteredWhitelist = company.whitelist.filter((item) => {
    if (whiteListFilter === 'contacted') return item.contacted;
    if (whiteListFilter === 'jobAcquired') return item.jobAcquired;
    if (whiteListFilter === 'untouched') return !item.contacted;
    return true;
  });

  const selectedDeptData = selectedDept !== null ? company.whitelist[selectedDept] : null;

  const filterJobsByDept = (dept) => companyJobs.filter(j => j.dept === dept);
  const filterCvByDept = (dept) => companyCvSents.filter(c => c.dept === dept);
  const filterInterviewByDept = (dept) => companyInterviews.filter(i => i.dept === dept);
  const filterOralByDept = (dept) => companyOralAgreements.filter(o => o.dept === dept);

  // Table renderer for CV SENT / Interview / Oral Agreement
  const renderActivityTable = (items, type) => {
    if (items.length === 0) return <p className="text-sm text-gray-400 text-center py-3">データがありません</p>;
    return (
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 font-medium text-gray-500">日付</th>
            <th className="text-left py-2 font-medium text-gray-500">候補者</th>
            <th className="text-left py-2 font-medium text-gray-500">担当</th>
            <th className="text-left py-2 font-medium text-gray-500">送付先</th>
            {type === 'cv' && <th className="text-left py-2 font-medium text-gray-500">単価</th>}
            <th className="text-left py-2 font-medium text-gray-500">求人ID</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-gray-50">
              <td className="py-2 text-gray-600">{item.date}</td>
              <td className="py-2 text-gray-900 font-medium">{item.candidate}</td>
              <td className="py-2 text-gray-600">{item.assignee}</td>
              <td className="py-2 text-gray-600">{item.destination}</td>
              {type === 'cv' && <td className="py-2 text-gray-600">{item.unitPrice?.toLocaleString()}</td>}
              <td className="py-2 text-blue-600">{item.jobId || item.personId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // Job table renderer (ITSS/PERM style with ID, title, assignee, status, important, date)
  const renderJobTable = (jobs) => {
    if (jobs.length === 0) return <p className="text-sm text-gray-400 text-center py-3">求人がありません</p>;
    return (
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-2 font-medium text-gray-500">ID</th>
            <th className="text-left py-2 font-medium text-gray-500">タイトル</th>
            <th className="text-left py-2 font-medium text-gray-500">担当</th>
            <th className="text-left py-2 font-medium text-gray-500">ステータス</th>
            <th className="text-left py-2 font-medium text-gray-500">重要</th>
            <th className="text-left py-2 font-medium text-gray-500">作成日</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, idx) => (
            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
              <td className="py-2 text-gray-500">{job.id || idx + 1}</td>
              <td className="py-2">
                <Link to={job.id ? `/jobs/${job.id}` : '#'} className="text-blue-600 hover:underline font-medium">
                  {job.title}
                </Link>
              </td>
              <td className="py-2 text-gray-600">{job.dealName?.split(' ')[0] || '—'}</td>
              <td className="py-2"><Badge label={job.count > 0 ? '募集中' : '終了'} /></td>
              <td className="py-2 text-center">{job.count >= 3 ? '★' : '—'}</td>
              <td className="py-2 text-gray-600">{job.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link to="/companies" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          企業一覧
        </Link>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowEditCompany(true)} className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"><Pencil className="w-4 h-4 inline mr-1" />編集</button>
          <button onClick={() => setShowNewDealModal(true)} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">+ 商談</button>
          <button onClick={() => setShowActivityModal(true)} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">+ Activity</button>
          <button onClick={() => setShowTaskModal(true)} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors">+ Task</button>
          <button onClick={() => setShowContractModal(true)} className="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">契約ステータス更新</button>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="px-4 py-2 bg-white border border-red-300 text-red-600 text-sm rounded-lg hover:bg-red-50 transition-colors"
          >
            <Trash2 className="w-4 h-4 inline mr-1" />
            削除
          </button>
        </div>
      </div>

      {/* Company header card with attention badges */}
      <div className="bg-white rounded-xl shadow-sm p-5 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">{companyName}</h1>
            <Badge label={info.tier} />
            <Badge label={info.category} />
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500">ITSS注力度</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${ATTENTION_COLORS[ext.itssAttention] || 'bg-gray-100 text-gray-600'}`}>
                {ext.itssAttention || '—'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-gray-500">PERM注力度</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${ATTENTION_COLORS[ext.permAttention] || 'bg-gray-100 text-gray-600'}`}>
                {ext.permAttention || '—'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex items-center gap-1 mb-6 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ===== COMMON SECTIONS (◯ = always visible) ===== */}
      {showCommon && (
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* 基本情報 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900 text-sm">基本情報</h2>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between"><span className="text-gray-500">種別</span><Badge label={info.category} /></div>
              <div className="flex items-center justify-between"><span className="text-gray-500">Tier</span><Badge label={info.tier} /></div>
              <div><span className="text-gray-500">本社所在地</span><p className="font-medium text-gray-900 text-xs mt-0.5">{ext.address || '—'}</p></div>
              <div>
                <span className="text-gray-500">業界</span>
                <div className="flex flex-wrap gap-1 mt-0.5">{(ext.industry || []).map((tag, i) => <Badge key={i} label={tag} />)}</div>
              </div>
              <div className="flex items-center justify-between"><span className="text-gray-500">法人番号</span><span className="font-medium text-gray-900 text-xs">{ext.corporateNumber || '—'}</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-500">累計粗利</span><span className="font-medium text-gray-900">{info.grossProfit.toLocaleString()}円</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-500">最終商談日</span><span className="font-medium text-gray-900">{info.lastDealDate}</span></div>
            </div>
          </div>

          {/* 事業内容 + 担当者 */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 flex-1">
              <h2 className="font-semibold text-gray-900 text-sm mb-2">事業内容</h2>
              <p className="text-xs text-gray-700 leading-relaxed line-clamp-5">{ext.businessDescription || '—'}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-gray-500" />
                <h2 className="font-semibold text-gray-900 text-sm">最終商談者</h2>
              </div>
              <div className="space-y-1.5">
                {lastDealPersons.length > 0 ? lastDealPersons.map((person, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium shrink-0">{person.name.charAt(0)}</div>
                    <span className="text-xs text-gray-900">{person.name}</span>
                    <span className="text-xs text-gray-400">{person.dept} / {person.date}</span>
                  </div>
                )) : (
                  <p className="text-xs text-gray-400">商談履歴がありません</p>
                )}
              </div>
            </div>
          </div>

          {/* 採用タグ */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-semibold text-gray-900 text-sm mb-3">採用タグ</h2>
            <div className="space-y-2.5 text-sm">
              <div>
                <span className="text-gray-500 text-xs">採用形態</span>
                <div className="flex flex-wrap gap-1 mt-0.5">{(ext.hiringTypes || []).map((t, i) => <Badge key={i} label={t} />)}</div>
              </div>
              <div>
                <span className="text-gray-500 text-xs">採用職種</span>
                <div className="flex flex-wrap gap-1 mt-0.5">{(ext.hiringRoles || []).map((r, i) => <Badge key={i} label={r} />)}</div>
              </div>
              <div>
                <span className="text-gray-500 text-xs">キーワード</span>
                <div className="flex flex-wrap gap-1 mt-0.5">{(ext.keywords || []).map((k, i) => <Badge key={i} label={k} />)}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 契約ステータス + 90日アクション (全体/SFAタブのみ) */}
      {(activeTab === 'all' || activeTab === 'sfa') && (
        <div className="grid grid-cols-[1fr_2fr] gap-4 mb-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-semibold text-gray-900 text-sm mb-3">事業部別契約ステータス</h2>
            <div className="space-y-2">
              {Object.entries(company.contractStatus).map(([key, status]) => (
                <div key={key} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{key.toUpperCase()}</span>
                  <Badge label={status} />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="font-semibold text-gray-900 text-sm mb-3">各事業部90日アクション状況</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-1.5 font-medium text-gray-500">事業部</th>
                  <th className="text-left py-1.5 font-medium text-gray-500">商談数</th>
                  <th className="text-left py-1.5 font-medium text-gray-500">求人取得数</th>
                  <th className="text-left py-1.5 font-medium text-gray-500">最終接触日</th>
                </tr>
              </thead>
              <tbody>
                {company.deptActivity.map((action) => (
                  <tr key={action.dept} className="border-b border-gray-50">
                    <td className="py-1.5 font-medium text-gray-700">{action.dept}</td>
                    <td className="py-1.5 text-gray-600">{action.deals}</td>
                    <td className="py-1.5 text-gray-600">{action.jobs}</td>
                    <td className="py-1.5 text-gray-600">{action.lastContact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ===== 部署別ホワイトリスト (全体/SFAタブ) ===== */}
      {(activeTab === 'all' || activeTab === 'sfa') && (
        <div className="space-y-6 mb-6">
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
                    whiteListFilter === f.key ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 font-medium text-gray-500">部署名</th>
                      <th className="text-center py-2 font-medium text-gray-500">接触済</th>
                      <th className="text-center py-2 font-medium text-gray-500">求人取得済</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWhitelist.map((item, idx) => {
                      const realIdx = company.whitelist.indexOf(item);
                      const isSelected = selectedDept === realIdx;
                      return (
                        <tr key={idx} onClick={() => setSelectedDept(isSelected ? null : realIdx)} className={`border-b border-gray-50 cursor-pointer transition-colors ${isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'}`}>
                          <td className="py-2 text-gray-700 flex items-center gap-1">
                            <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                            {item.dept}
                          </td>
                          <td className="py-2 text-center">{item.contacted ? <span className="text-green-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                          <td className="py-2 text-center">{item.jobAcquired ? <span className="text-green-500">&#10003;</span> : <span className="text-gray-300">&#10005;</span>}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {selectedDeptData && (
                <div className="w-64 shrink-0 bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{selectedDeptData.dept}</h3>
                  <p className="text-xs text-gray-500 mb-3">{selectedDeptData.contacted ? '接触済' : '未接触'}{selectedDeptData.jobAcquired ? ' / 求人取得済' : ''}</p>
                  <div className="text-xs font-medium text-gray-500 mb-2">企業担当者</div>
                  {selectedDeptData.contacts?.length > 0 ? (
                    <div className="space-y-2">
                      {selectedDeptData.contacts.map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-medium shrink-0">{c.name.charAt(0)}</div>
                          <div><p className="text-sm font-medium text-gray-900">{c.name}</p><p className="text-xs text-gray-500">{c.role}</p></div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-gray-400">担当者情報なし</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ===== 商談ツリー (全体/SFAタブ) ===== */}
      {(activeTab === 'all' || activeTab === 'sfa') && (
        <div className="space-y-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-gray-500" />
                <h2 className="font-semibold text-gray-900">商談ツリー</h2>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setTreeView(true)} className={`px-3 py-1 text-xs rounded-lg border transition-colors ${treeView ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>ツリー表示</button>
                <button onClick={() => setTreeView(false)} className={`px-3 py-1 text-xs rounded-lg border transition-colors ${!treeView ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`}>リスト表示</button>
              </div>
            </div>
            {treeView ? (
              <div className="overflow-x-auto max-h-[250px] overflow-y-auto">
                <CompanyDealTrees companyId={id} />
              </div>
            ) : (
              <div className="space-y-3">
                {DEALS.filter(d => d.companyId === Number(id)).map((deal) => {
                  const detail = DEAL_DETAILS[deal.id];
                  const ourPerson = detail?.basicInfo?.ourPerson || deal.assignee || '';
                  const businessDept = detail?.basicInfo?.businessDept || deal.dept || '';
                  const latestMeetings = (detail?.meetings || []).slice(-3);
                  return (
                    <div key={deal.id} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <Link to={`/deals/${deal.id}`} className="text-sm font-medium text-blue-600 hover:underline">{deal.name}</Link>
                          <Badge label={deal.status} />
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          {deal.remainingTasks > 0 && <span>残Task: {deal.remainingTasks}</span>}
                          <span>{deal.lastMeeting}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                        {businessDept && <span className="bg-gray-100 px-2 py-0.5 rounded">{businessDept}</span>}
                        {ourPerson && <span>{ourPerson}</span>}
                      </div>
                      {latestMeetings.length > 0 && (
                        <div className="space-y-1">
                          {latestMeetings.map((m, i) => (
                            <p key={i} className="text-xs text-gray-600 line-clamp-1">
                              <span className="text-gray-400 mr-1">{m.date || ''}</span>
                              {m.content || ''}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
                {DEALS.filter(d => d.companyId === Number(id)).length === 0 && <p className="text-sm text-gray-400 text-center py-4">商談がありません</p>}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== Sent参考情報 ===== */}
      {showInTab('perm') && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Sent参考情報（PERM）</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">PERM メモ</span>
              <div className="bg-gray-50 rounded-lg p-3 mt-1 text-gray-700 leading-relaxed">{ext.permNote || '—'}</div>
            </div>
            <div>
              <span className="text-gray-500">Sent Pick時留意事項（CA向け）</span>
              <div className="bg-gray-50 rounded-lg p-3 mt-1 text-gray-700 leading-relaxed">{ext.sentPickNote || '—'}</div>
            </div>
            <div>
              <span className="text-gray-500">CV送信時注意事項（アシスタント用）</span>
              <div className="bg-gray-50 rounded-lg p-3 mt-1 text-gray-700 leading-relaxed">{ext.cvNote || '—'}</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">提案上限年齢</span>
                <span className="font-medium text-gray-900">{ext.maxAge ? `${ext.maxAge}歳` : '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">ブラインドSENT可否</span>
                <Badge label={ext.blindSent || '—'} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">ブラインドSENT方法</span>
                <span className="font-medium text-gray-900">{ext.blindSentMethod || '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">実名SENTチャネル</span>
                <span className="font-medium text-gray-900">{ext.realNameChannel || '—'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">PERM ATS</span>
                <span className="font-medium text-gray-900">{ext.permAts || '—'}</span>
              </div>
              {ext.permAtsUrl && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">ATS URL</span>
                  <span className="font-medium text-blue-600 text-xs truncate max-w-[200px]">{ext.permAtsUrl}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {showInTab('itss') && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Sent参考情報（ITSS）</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-500">FRMC</span>
              <div className="bg-gray-50 rounded-lg p-3 mt-1 text-gray-700 leading-relaxed">{ext.frmc || '—'}</div>
            </div>
          </div>
        </div>
      )}

      {/* ===== 求人一覧 (ITSS → PERM) ===== */}
      {(showInTab('itss') || showInTab('perm')) && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="flex items-center gap-2 mb-4 border-b border-blue-200 pb-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <h2 className="font-semibold text-blue-600 text-base">求人一覧</h2>
          </div>
          {showInTab('itss') && (
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 text-sm mb-2">ITSS</h3>
              {renderJobTable(filterJobsByDept('ITSS'))}
            </div>
          )}
          {showInTab('perm') && (
            <div>
              <h3 className="font-semibold text-blue-600 text-sm mb-2">PERM</h3>
              {renderJobTable(filterJobsByDept('PERM'))}
            </div>
          )}
        </div>
      )}

      {/* ===== CV SENT一覧 (ITSS → PERM) ===== */}
      {(showInTab('itss') || showInTab('perm')) && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="flex items-center gap-2 mb-4 border-b border-blue-200 pb-2">
            <Send className="w-4 h-4 text-blue-600" />
            <h2 className="font-semibold text-blue-600 text-base">CV SENT一覧</h2>
          </div>
          {showInTab('itss') && (
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 text-sm mb-2">ITSS</h3>
              {renderActivityTable(filterCvByDept('ITSS'), 'cv')}
            </div>
          )}
          {showInTab('perm') && (
            <div>
              <h3 className="font-semibold text-blue-600 text-sm mb-2">PERM</h3>
              {renderActivityTable(filterCvByDept('PERM'), 'cv')}
            </div>
          )}
        </div>
      )}

      {/* ===== 面接一覧 (ITSS → PERM) ===== */}
      {(showInTab('itss') || showInTab('perm')) && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="flex items-center gap-2 mb-4 border-b border-blue-200 pb-2">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <h2 className="font-semibold text-blue-600 text-base">面接一覧</h2>
          </div>
          {showInTab('itss') && (
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 text-sm mb-2">ITSS</h3>
              {renderActivityTable(filterInterviewByDept('ITSS'), 'interview')}
            </div>
          )}
          {showInTab('perm') && (
            <div>
              <h3 className="font-semibold text-blue-600 text-sm mb-2">PERM</h3>
              {renderActivityTable(filterInterviewByDept('PERM'), 'interview')}
            </div>
          )}
        </div>
      )}

      {/* ===== 口頭合意一覧 (ITSS → PERM) ===== */}
      {(showInTab('itss') || showInTab('perm')) && (
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          <div className="flex items-center gap-2 mb-4 border-b border-blue-200 pb-2">
            <Handshake className="w-4 h-4 text-blue-600" />
            <h2 className="font-semibold text-blue-600 text-base">口頭合意一覧</h2>
          </div>
          {showInTab('itss') && (
            <div className="mb-4">
              <h3 className="font-semibold text-blue-600 text-sm mb-2">ITSS</h3>
              {renderActivityTable(filterOralByDept('ITSS'), 'oral')}
            </div>
          )}
          {showInTab('perm') && (
            <div>
              <h3 className="font-semibold text-blue-600 text-sm mb-2">PERM</h3>
              {renderActivityTable(filterOralByDept('PERM'), 'oral')}
            </div>
          )}
        </div>
      )}

      {/* ===== SFA TAB SECTIONS ===== */}
      {showInTab('sfa') && (
        <div className="space-y-6 mb-6">
          {/* SFA 求人情報 */}
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <h2 className="font-semibold text-gray-900">求人情報</h2>
              <span className="text-xs text-gray-400 ml-1">({companyJobs.length}件)</span>
            </div>
            {companyJobs.length > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-3">
                  {companyJobs.slice(0, jobDisplayCount).map((job, idx) => (
                    <Link key={idx} to={job.id ? `/jobs/${job.id}` : `/deals/${job.dealId}`} className="block border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900">{job.title}</p>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full shrink-0 ml-2">{job.count}名</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Badge label={job.dept} />
                        <span>{job.date}</span>
                      </div>
                      <span className="text-xs text-blue-500 mt-1 inline-block">{job.dealName}</span>
                    </Link>
                  ))}
                </div>
                {companyJobs.length > jobDisplayCount && (
                  <button onClick={() => setJobDisplayCount(prev => prev + 10)} className="w-full mt-4 py-2.5 text-sm text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    さらに読み込む（残り{companyJobs.length - jobDisplayCount}件）
                  </button>
                )}
              </>
            ) : (
              <p className="text-sm text-gray-400 text-center py-4">求人情報がありません</p>
            )}
          </div>
        </div>
      )}

      {/* Modals */}
      {showActivityModal && <ActivityModal isOpen={true} onClose={() => setShowActivityModal(false)} companyId={Number(id)} />}
      {showTaskModal && <TaskModal isOpen={true} onClose={() => setShowTaskModal(false)} companyId={Number(id)} />}
      {showContractModal && <ContractStatusModal onClose={() => setShowContractModal(false)} companyName={companyName} companyId={Number(id)} currentStatus={company.contractStatus} />}
      {showNewDealModal && <NewDealModal isOpen={true} onClose={() => setShowNewDealModal(false)} presetCompanyId={Number(id)} />}
      {showEditCompany && <EditCompanyModal isOpen={true} onClose={() => setShowEditCompany(false)} company={companySummary} companyDetail={company} onSubmit={(data) => { upsertCompany({ id: Number(id), ...data }); setShowEditCompany(false); }} />}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={() => { deleteCompany(Number(id)); navigate('/companies'); }}
        message={`企業「${companyName}」を削除しますか？`}
      />
    </div>
  );
}
