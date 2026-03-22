import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchAll, upsertRow, deleteRow as apiDeleteRow, updateField as apiUpdateField } from '../data/api';
import * as dummy from '../data/dummy';

const DataContext = createContext(null);

// --- localStorage 永続化 ---
const LS_KEY = 'opportunity_system_data';

function saveToLocalStorage(data) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch { /* quota exceeded etc. */ }
}

function loadFromLocalStorage() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch { /* corrupt data */ }
  return null;
}

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
        // Support nested tree object (dummy data) and flat columns (GAS API)
        // Priority: nested tree object > flat treeXxx columns > defaults

        // 1. If nested tree object has next/branches, use it directly (dummy data format)
        if (r.tree?.next !== undefined || r.tree?.branches !== undefined) {
          return {
            parent: r.tree?.parent || r.treeParent || null,
            current: r.tree?.current || r.treeCurrent || r.name,
            next: r.tree?.next || null,
            branches: Array.isArray(r.tree?.branches) ? r.tree.branches : [],
          };
        }

        // 2. Read from flat columns (GAS API format)
        // treeBranches may be a JSON string from GAS or already parsed array
        let branches = [];
        if (r.treeBranches) {
          if (Array.isArray(r.treeBranches)) {
            branches = r.treeBranches;
          } else if (typeof r.treeBranches === 'string') {
            try { branches = JSON.parse(r.treeBranches); } catch { branches = []; }
          }
        }
        // Fallback: old treeChildren column
        if (branches.length === 0) {
          const children = Array.isArray(r.treeChildren) ? r.treeChildren :
                           (typeof r.treeChildren === 'string' && r.treeChildren ?
                             (() => { try { return JSON.parse(r.treeChildren); } catch { return []; } })() : []);
          branches = children;
        }

        return {
          parent: r.treeParent || null,
          current: r.treeCurrent || r.name,
          next: r.treeNext || null,
          branches,
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

  // Wrap setData to auto-save to localStorage
  const setDataAndPersist = useCallback((updater) => {
    setData(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      if (next && next !== prev) {
        saveToLocalStorage(next);
      }
      return next;
    });
  }, []);

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

        const apiState = {
          USERS: dummy.USERS,
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
        };
        setData(apiState);
        saveToLocalStorage(apiState);
        setSource('api');
      } else {
        // Fallback: localStorage → dummy
        useLocalOrDummy();
      }
    } catch {
      useLocalOrDummy();
    }
    setLoading(false);
  }, []);

  function useLocalOrDummy() {
    const cached = loadFromLocalStorage();
    if (cached && cached.DEALS && cached.DEAL_DETAILS) {
      setData(cached);
      setSource('local');
    } else {
      const dummyData = {
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
      };
      setData(dummyData);
      saveToLocalStorage(dummyData);
      setSource('dummy');
    }
  }

  useEffect(() => { loadData(); }, [loadData]);

  // --- 書き込みAPI ---
  const updateTaskStatus = useCallback(async (taskId, newStatus) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const upsertTask = useCallback(async (task) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const upsertDeal = useCallback(async (deal, dealDetail) => {
    const id = deal.id || Date.now();
    const row = { ...deal, id };
    let parentIdToSync = null; // Track parent that needs API sync
    setDataAndPersist(prev => {
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

        // Flatten tree fields into row for API persistence
        row.treeParent = tree.parent || '';
        row.treeCurrent = tree.current || row.name;
        row.treeNext = tree.next || '';
        row.treeBranches = JSON.stringify(tree.branches || []);

        // Also flatten basicInfo fields for API
        const bi = dealDetail.basicInfo || {};
        row.clientDept = bi.dept || '';
        row.clientPerson = bi.clientPerson || '';
        row.ourPerson = bi.ourPerson || row.assignee;
        row.businessDept = bi.businessDept || row.dept;
        row.channel = bi.channel || '';
        row.acquiredBy = bi.acquiredBy || '';
        row.meetings = JSON.stringify(dealDetail.meetings || []);
        row.tasks = JSON.stringify(dealDetail.tasks || []);
        row.jobs = JSON.stringify(dealDetail.jobs || []);

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
          const pId = Object.keys(newDetails).find(
            key => newDetails[key]?.tree?.current === tree.parent
          );
          if (pId && newDetails[pId]) {
            const parentDetail = newDetails[pId];
            const linkType = dealDetail._linkType || 'branch'; // 'next' or 'branch'
            if (linkType === 'next') {
              // Set as continuation (horizontal chain)
              if (!parentDetail.tree.next) {
                newDetails = {
                  ...newDetails,
                  [pId]: {
                    ...parentDetail,
                    tree: { ...parentDetail.tree, next: row.name },
                  },
                };
                parentIdToSync = Number(pId);
              }
            } else {
              // Add as branch
              const branches = parentDetail.tree.branches || [];
              if (!branches.includes(row.name)) {
                newDetails = {
                  ...newDetails,
                  [pId]: {
                    ...parentDetail,
                    tree: { ...parentDetail.tree, branches: [...branches, row.name] },
                  },
                };
                parentIdToSync = Number(pId);
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
      // Sync parent's updated tree to API
      if (parentIdToSync != null) {
        try {
          setData(prev => {
            const parentDetail = prev.DEAL_DETAILS[parentIdToSync];
            if (parentDetail?.tree) {
              const parentDeal = prev.DEALS.find(d => d.id === parentIdToSync);
              if (parentDeal) {
                const parentRow = {
                  ...parentDeal,
                  treeParent: parentDetail.tree.parent || '',
                  treeCurrent: parentDetail.tree.current || parentDeal.name,
                  treeNext: parentDetail.tree.next || '',
                  treeBranches: JSON.stringify(parentDetail.tree.branches || []),
                };
                upsertRow('DEALS', parentRow).catch(() => {});
              }
            }
            return prev; // No state change, just reading
          });
        } catch { /* silent */ }
      }
    }
    return id;
  }, [source, setDataAndPersist]);

  const upsertCompany = useCallback(async (company) => {
    const id = company.id || Date.now();
    const row = { ...company, id };
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const upsertJob = useCallback(async (job) => {
    const id = job.id || Date.now();
    const row = { ...job, id };
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const addMeeting = useCallback(async (dealId, meeting) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const deleteDeal = useCallback(async (dealId) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const deleteCompany = useCallback(async (companyId) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const updateContractStatus = useCallback(async (companyId, newStatus) => {
    setDataAndPersist(prev => {
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
  }, [source, setDataAndPersist]);

  const deleteTask = useCallback(async (taskId) => {
    setDataAndPersist(prev => ({
      ...prev,
      TASKS: prev.TASKS.filter(t => t.id !== taskId),
    }));
    if (source === 'api') {
      try { await apiDeleteRow('TASKS', taskId); } catch { /* silent */ }
    }
  }, [source, setDataAndPersist]);

  const deleteJob = useCallback(async (jobId) => {
    setDataAndPersist(prev => ({
      ...prev,
      JOBS: prev.JOBS.filter(j => j.id !== jobId),
    }));
    if (source === 'api') {
      try { await apiDeleteRow('JOBS', jobId); } catch { /* silent */ }
    }
  }, [source, setDataAndPersist]);

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
