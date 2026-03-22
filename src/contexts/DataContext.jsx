import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchAll, upsertRow, deleteRow as apiDeleteRow, updateField as apiUpdateField } from '../data/api';
import * as dummy from '../data/dummy';

const DataContext = createContext(null);

// --- スプシの行データ → フロント用構造に変換 ---
function transformCompanies(rows) {
  const list = rows.map(r => ({
    id: Number(r.id),
    name: r.name,
    tier: r.tier,
    category: r.category,
    itss: r.itss,
    perm: r.perm,
    dsl: r.dsl,
    lastDealDate: r.lastDealDate,
  }));

  const details = {};
  const extended = {};
  rows.forEach(r => {
    const id = Number(r.id);
    details[id] = {
      info: { tier: r.tier, category: r.category, grossProfit: Number(r.grossProfit) || 0, lastDealDate: r.lastDealDate },
      contractStatus: typeof r.contractStatus === 'object' ? r.contractStatus : {},
      deptActivity: Array.isArray(r.deptActivity) ? r.deptActivity : [],
      whitelist: Array.isArray(r.whitelist) ? r.whitelist : [],
      deals: Array.isArray(r.deals) ? r.deals : [],
      assignees: Array.isArray(r.assignees) ? r.assignees : [],
    };
    extended[id] = {
      itssAttention: r.itssAttention || '',
      permAttention: r.permAttention || '',
      address: r.address || '',
      industry: Array.isArray(r.industry) ? r.industry : [],
      corporateNumber: r.corporateNumber || '',
      businessDescription: r.businessDescription || '',
      frmc: r.frmc || '',
      permNote: r.permNote || '',
      cvNote: r.cvNote || '',
      sentPickNote: r.sentPickNote || '',
      maxAge: r.maxAge || null,
      blindSent: r.blindSent || '',
      blindSentMethod: r.blindSentMethod || '',
      realNameChannel: r.realNameChannel || '',
      permAts: r.permAts || '',
      permAtsUrl: r.permAtsUrl || '',
      hiringTypes: Array.isArray(r.hiringTypes) ? r.hiringTypes : [],
      hiringRoles: Array.isArray(r.hiringRoles) ? r.hiringRoles : [],
      keywords: Array.isArray(r.keywords) ? r.keywords : [],
    };
  });

  return { list, details, extended };
}

function transformDeals(rows) {
  const list = rows.map(r => ({
    id: Number(r.id),
    companyId: Number(r.companyId),
    name: r.name,
    company: r.company,
    assignee: r.assignee,
    dept: r.dept,
    lastMeeting: r.lastMeeting,
    status: r.status,
  }));

  const details = {};
  rows.forEach(r => {
    details[Number(r.id)] = {
      basicInfo: {
        company: r.company,
        dept: r.clientDept || r.dept,
        clientPerson: r.clientPerson || '',
        ourPerson: r.ourPerson || r.assignee,
        businessDept: r.businessDept || r.dept,
        channel: r.channel || '',
        acquiredBy: r.acquiredBy || '',
        status: r.status,
      },
      tree: (() => {
        // Support both old format (children) and new format (next/branches)
        const children = Array.isArray(r.treeChildren) ? r.treeChildren :
                         (r.tree?.children ? r.tree.children : []);
        // If new format fields exist, use them directly
        if (r.tree?.next !== undefined || r.tree?.branches !== undefined) {
          return {
            parent: r.tree?.parent || r.treeParent || null,
            current: r.tree?.current || r.treeCurrent || r.name,
            next: r.tree?.next || null,
            branches: Array.isArray(r.tree?.branches) ? r.tree.branches : [],
          };
        }
        // Convert old format: all children become branches (not next)
        // Only 商談追記 creates next (horizontal chain), 担当分岐 creates branches
        return {
          parent: r.treeParent || null,
          current: r.treeCurrent || r.name,
          next: null,
          branches: children,
        };
      })(),
      meetings: Array.isArray(r.meetings) ? r.meetings : [],
      tasks: Array.isArray(r.tasks) ? r.tasks : [],
      jobs: Array.isArray(r.jobs) ? r.jobs : [],
    };
  });

  return { list, details };
}

function transformTasks(rows) {
  return rows.map(r => ({
    id: Number(r.id),
    type: r.type,
    name: r.name,
    company: r.company,
    category: r.category,
    due: r.due,
    assignee: r.assignee,
    method: r.method,
    status: r.status,
    dealId: r.dealId ? Number(r.dealId) : null,
  }));
}

function transformJobs(rows) {
  return rows.map(r => ({
    id: Number(r.id),
    dealId: Number(r.dealId),
    companyId: r.companyId ? Number(r.companyId) : null,
    title: r.title,
    dept: r.dept,
    count: Number(r.count) || 0,
    date: r.date,
    company: r.company,
    businessDept: r.businessDept,
    dealName: r.dealName,
    status: r.status,
  }));
}

function transformCvSents(rows) {
  return rows.map(r => ({
    id: Number(r.id),
    companyId: Number(r.companyId),
    date: r.date,
    candidate: r.candidate,
    assignee: r.assignee,
    destination: r.destination,
    unitPrice: r.unitPrice ? Number(r.unitPrice) : null,
    jobId: r.jobId,
    dept: r.dept,
  }));
}

function transformInterviewsOral(rows) {
  const interviews = [];
  const oralAgreements = [];
  rows.forEach(r => {
    const item = {
      id: Number(r.id),
      companyId: Number(r.companyId),
      date: r.date,
      candidate: r.candidate,
      assignee: r.assignee,
      destination: r.destination,
      jobId: r.jobId,
      personId: r.personId,
      dept: r.dept,
    };
    if (r.type === 'oral') {
      oralAgreements.push(item);
    } else {
      interviews.push(item);
    }
  });
  return { interviews, oralAgreements };
}

// --- Provider ---
export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [source, setSource] = useState('dummy'); // 'api' or 'dummy'

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const apiData = await fetchAll();
      if (apiData && apiData.success) {
        const companies = transformCompanies(apiData.companies || []);
        const deals = transformDeals(apiData.deals || []);
        const tasks = transformTasks(apiData.tasks || []);
        const jobs = transformJobs(apiData.jobs || []);
        const cvSents = transformCvSents(apiData.cvSents || []);
        const { interviews, oralAgreements } = transformInterviewsOral(apiData.interviewsOral || []);

        setData({
          USERS: dummy.USERS, // Users stay local for now
          COMPANIES: companies.list,
          COMPANY_DETAILS: companies.details,
          COMPANY_EXTENDED: companies.extended,
          DEALS: deals.list,
          DEAL_DETAILS: deals.details,
          TASKS: tasks,
          JOBS: jobs,
          CV_SENTS: cvSents,
          INTERVIEWS: interviews,
          ORAL_AGREEMENTS: oralAgreements,
        });
        setSource('api');
      } else {
        // Fallback to dummy
        useDummy();
      }
    } catch {
      useDummy();
    }
    setLoading(false);
  }, []);

  function useDummy() {
    setData({
      USERS: dummy.USERS,
      COMPANIES: dummy.COMPANIES,
      COMPANY_DETAILS: dummy.COMPANY_DETAILS,
      COMPANY_EXTENDED: dummy.COMPANY_EXTENDED,
      DEALS: dummy.DEALS,
      DEAL_DETAILS: dummy.DEAL_DETAILS,
      TASKS: dummy.TASKS,
      JOBS: dummy.JOBS,
      CV_SENTS: dummy.CV_SENTS,
      INTERVIEWS: dummy.INTERVIEWS,
      ORAL_AGREEMENTS: dummy.ORAL_AGREEMENTS,
    });
    setSource('dummy');
  }

  useEffect(() => { loadData(); }, [loadData]);

  // --- 書き込みAPI ---
  const updateTaskStatus = useCallback(async (taskId, newStatus) => {
    setData(prev => {
      // Find the task to get dealId
      const task = prev.TASKS.find(t => t.id === taskId);
      let newDealDetails = prev.DEAL_DETAILS;
      // Also update status in DEAL_DETAILS[dealId].tasks
      if (task?.dealId && newDealDetails[task.dealId]) {
        const detail = newDealDetails[task.dealId];
        newDealDetails = {
          ...newDealDetails,
          [task.dealId]: {
            ...detail,
            tasks: detail.tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t),
          },
        };
      }
      return {
        ...prev,
        TASKS: prev.TASKS.map(t => t.id === taskId ? { ...t, status: newStatus } : t),
        DEAL_DETAILS: newDealDetails,
      };
    });
    if (source === 'api') {
      try { await apiUpdateField('TASKS', taskId, 'status', newStatus); } catch { /* silent */ }
    }
  }, [source]);

  const upsertTask = useCallback(async (task) => {
    setData(prev => {
      const exists = prev.TASKS.find(t => t.id === task.id);
      let newDealDetails = prev.DEAL_DETAILS;
      // Also add task to DEAL_DETAILS[dealId].tasks so it shows in deal detail
      if (task.dealId && newDealDetails[task.dealId]) {
        const detail = newDealDetails[task.dealId];
        const detailTaskExists = detail.tasks.find(t => t.id === task.id);
        newDealDetails = {
          ...newDealDetails,
          [task.dealId]: {
            ...detail,
            tasks: detailTaskExists
              ? detail.tasks.map(t => t.id === task.id ? { ...t, ...task } : t)
              : [...detail.tasks, task],
          },
        };
      }
      return {
        ...prev,
        TASKS: exists
          ? prev.TASKS.map(t => t.id === task.id ? { ...t, ...task } : t)
          : [...prev.TASKS, task],
        DEAL_DETAILS: newDealDetails,
      };
    });
    if (source === 'api') {
      try { await upsertRow('TASKS', task); } catch { /* silent */ }
    }
  }, [source]);

  const upsertDeal = useCallback(async (deal, dealDetail) => {
    const id = deal.id || Date.now();
    const row = { ...deal, id };
    setData(prev => {
      const exists = prev.DEALS.find(d => d.id === id);
      const listItem = {
        id,
        companyId: row.companyId || null,
        name: row.name,
        company: row.company || '',
        assignee: row.assignee || '',
        dept: row.dept || '',
        lastMeeting: row.lastMeeting || new Date().toLocaleDateString('ja-JP'),
        status: row.status || '予定',
      };
      let newDetails = prev.DEAL_DETAILS;
      if (dealDetail) {
        const tree = dealDetail.tree || { parent: null, current: row.name, next: null, branches: [] };
        // Ensure new format
        if (!('next' in tree)) { tree.next = null; }
        if (!('branches' in tree)) { tree.branches = []; }
        newDetails = {
          ...newDetails,
          [id]: {
            basicInfo: dealDetail.basicInfo || { company: row.company, dept: '', clientPerson: '', ourPerson: row.assignee, businessDept: row.dept, channel: '', acquiredBy: '', status: row.status },
            tree,
            meetings: dealDetail.meetings || [],
            tasks: dealDetail.tasks || [],
            jobs: dealDetail.jobs || [],
          },
        };
        // Update parent deal's tree to link to this child
        if (tree.parent) {
          const parentId = Object.keys(newDetails).find(
            key => newDetails[key]?.tree?.current === tree.parent
          );
          if (parentId && newDetails[parentId]) {
            const parentDetail = newDetails[parentId];
            const linkType = dealDetail._linkType || 'branch'; // 'next' or 'branch'
            if (linkType === 'next') {
              // Set as continuation (horizontal chain)
              if (!parentDetail.tree.next) {
                newDetails = {
                  ...newDetails,
                  [parentId]: {
                    ...parentDetail,
                    tree: { ...parentDetail.tree, next: row.name },
                  },
                };
              }
            } else {
              // Add as branch
              const branches = parentDetail.tree.branches || [];
              if (!branches.includes(row.name)) {
                newDetails = {
                  ...newDetails,
                  [parentId]: {
                    ...parentDetail,
                    tree: { ...parentDetail.tree, branches: [...branches, row.name] },
                  },
                };
              }
            }
          }
        }
      }
      return {
        ...prev,
        DEALS: exists
          ? prev.DEALS.map(d => d.id === id ? { ...d, ...listItem } : d)
          : [...prev.DEALS, listItem],
        DEAL_DETAILS: newDetails,
      };
    });
    if (source === 'api') {
      try { await upsertRow('DEALS', row); } catch { /* silent */ }
    }
    return id;
  }, [source]);

  const upsertCompany = useCallback(async (company) => {
    const id = company.id || Date.now();
    const row = { ...company, id };
    setData(prev => {
      const exists = prev.COMPANIES.find(c => c.id === id);
      const listItem = { id, name: row.name, tier: row.tier, category: row.category, itss: row.itss || '未接触', perm: row.perm || '未接触', dsl: row.dsl || '未接触', lastDealDate: row.lastDealDate || '' };
      return {
        ...prev,
        COMPANIES: exists
          ? prev.COMPANIES.map(c => c.id === id ? { ...c, ...listItem } : c)
          : [...prev.COMPANIES, listItem],
        COMPANY_DETAILS: {
          ...prev.COMPANY_DETAILS,
          [id]: prev.COMPANY_DETAILS[id] || { info: { tier: row.tier, category: row.category, grossProfit: 0, lastDealDate: '' }, contractStatus: {}, deptActivity: [], whitelist: [], deals: [], assignees: [] },
        },
        COMPANY_EXTENDED: {
          ...prev.COMPANY_EXTENDED,
          [id]: prev.COMPANY_EXTENDED[id] || { itssAttention: '', permAttention: '', address: row.address || '', industry: [], corporateNumber: '', businessDescription: '', frmc: '', permNote: '', cvNote: '', sentPickNote: '', maxAge: null, blindSent: '', blindSentMethod: '', realNameChannel: '', permAts: '', permAtsUrl: '', hiringTypes: [], hiringRoles: [], keywords: [] },
        },
      };
    });
    if (source === 'api') {
      try { await upsertRow('COMPANIES', row); } catch { /* silent */ }
    }
    return id;
  }, [source]);

  const upsertJob = useCallback(async (job) => {
    const id = job.id || Date.now();
    const row = { ...job, id };
    setData(prev => {
      const exists = prev.JOBS.find(j => j.id === id);
      let newDealDetails = prev.DEAL_DETAILS;
      // Also add job to DEAL_DETAILS[dealId].jobs so it shows in deal detail
      if (row.dealId && newDealDetails[row.dealId]) {
        const detail = newDealDetails[row.dealId];
        const detailJobExists = detail.jobs.find(j => j.id === id);
        const jobForDetail = { id, title: row.title, count: row.count || 1, date: row.date, dept: row.dept || row.businessDept || '' };
        newDealDetails = {
          ...newDealDetails,
          [row.dealId]: {
            ...detail,
            jobs: detailJobExists
              ? detail.jobs.map(j => j.id === id ? { ...j, ...jobForDetail } : j)
              : [...detail.jobs, jobForDetail],
          },
        };
      }
      return {
        ...prev,
        JOBS: exists
          ? prev.JOBS.map(j => j.id === id ? { ...j, ...row } : j)
          : [...prev.JOBS, row],
        DEAL_DETAILS: newDealDetails,
      };
    });
    if (source === 'api') {
      try { await upsertRow('JOBS', row); } catch { /* silent */ }
    }
    return id;
  }, [source]);

  const addMeeting = useCallback(async (dealId, meeting) => {
    setData(prev => {
      const detail = prev.DEAL_DETAILS[dealId];
      if (!detail) return prev;
      return {
        ...prev,
        // Update lastMeeting in DEALS list
        DEALS: prev.DEALS.map(d => d.id === Number(dealId) ? { ...d, lastMeeting: meeting.date } : d),
        DEAL_DETAILS: {
          ...prev.DEAL_DETAILS,
          [dealId]: {
            ...detail,
            meetings: [...detail.meetings, meeting],
          },
        },
      };
    });
    if (source === 'api') {
      try { await upsertRow('MEETINGS', { dealId, ...meeting }); } catch { /* silent */ }
    }
  }, [source]);

  const deleteDeal = useCallback(async (dealId) => {
    setData(prev => {
      const { [dealId]: _, [String(dealId)]: __, ...restDetails } = prev.DEAL_DETAILS;
      return {
        ...prev,
        DEALS: prev.DEALS.filter(d => d.id !== dealId),
        DEAL_DETAILS: restDetails,
      };
    });
    if (source === 'api') {
      try { await apiDeleteRow('DEALS', dealId); } catch { /* silent */ }
    }
  }, [source]);

  const deleteCompany = useCallback(async (companyId) => {
    setData(prev => {
      const { [companyId]: _, [String(companyId)]: __, ...restDetails } = prev.COMPANY_DETAILS;
      const { [companyId]: _e, [String(companyId)]: __e, ...restExtended } = prev.COMPANY_EXTENDED;
      return {
        ...prev,
        COMPANIES: prev.COMPANIES.filter(c => c.id !== companyId),
        COMPANY_DETAILS: restDetails,
        COMPANY_EXTENDED: restExtended,
      };
    });
    if (source === 'api') {
      try { await apiDeleteRow('COMPANIES', companyId); } catch { /* silent */ }
    }
  }, [source]);

  const updateContractStatus = useCallback(async (companyId, newStatus) => {
    setData(prev => {
      const detail = prev.COMPANY_DETAILS[companyId];
      if (!detail) return prev;
      return {
        ...prev,
        COMPANY_DETAILS: {
          ...prev.COMPANY_DETAILS,
          [companyId]: {
            ...detail,
            contractStatus: { ...detail.contractStatus, ...newStatus },
          },
        },
      };
    });
    if (source === 'api') {
      try { await apiUpdateField('COMPANIES', companyId, 'contractStatus', newStatus); } catch { /* silent */ }
    }
  }, [source]);

  const deleteTask = useCallback(async (taskId) => {
    setData(prev => ({
      ...prev,
      TASKS: prev.TASKS.filter(t => t.id !== taskId),
    }));
    if (source === 'api') {
      try { await apiDeleteRow('TASKS', taskId); } catch { /* silent */ }
    }
  }, [source]);

  const deleteJob = useCallback(async (jobId) => {
    setData(prev => ({
      ...prev,
      JOBS: prev.JOBS.filter(j => j.id !== jobId),
    }));
    if (source === 'api') {
      try { await apiDeleteRow('JOBS', jobId); } catch { /* silent */ }
    }
  }, [source]);

  const value = {
    ...data,
    loading,
    error,
    source,
    reload: loadData,
    updateTaskStatus,
    upsertTask,
    upsertDeal,
    upsertCompany,
    upsertJob,
    addMeeting,
    deleteDeal,
    deleteCompany,
    deleteTask,
    deleteJob,
    updateContractStatus,
    // Constants (predefined, not dynamically derived)
    DIVISIONS: dummy.DIVISIONS,
    MEMBERS: dummy.MEMBERS,
    DEAL_ROUTES: dummy.DEAL_ROUTES,
    TASK_CATEGORIES: dummy.TASK_CATEGORIES,
    CONTACT_METHODS: dummy.CONTACT_METHODS,
    CONTRACT_STATUSES: dummy.CONTRACT_STATUSES,
  };

  if (loading || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-surface">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-gray-500">データを読み込み中...</p>
        </div>
      </div>
    );
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}
