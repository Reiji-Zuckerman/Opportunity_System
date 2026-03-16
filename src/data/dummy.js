export const DEALS = [
  { id: 1, name: 'NTTデータ DX推進案件', company: 'NTTデータ', person: '鈴木 一郎', division: 'ITSS', lastMeeting: '2026-03-10', status: '実施済', route: 'IS' },
  { id: 2, name: '富士通 クラウド移行支援', company: '富士通', person: '田中 太郎', division: 'PERM', lastMeeting: '2026-03-08', status: '実施済', route: '営業顧問' },
  { id: 3, name: 'ソニー AI開発体制構築', company: 'ソニー', person: '鈴木 一郎', division: 'IS', lastMeeting: '2026-03-12', status: '予定', route: 'toBマーケ' },
  { id: 4, name: 'トヨタ 基幹システム刷新', company: 'トヨタ自動車', person: '佐藤 花子', division: 'FS', lastMeeting: '2026-02-28', status: '実施済', route: '展示会' },
  { id: 5, name: 'NTTデータ セキュリティ強化', company: 'NTTデータ', person: '山田 次郎', division: 'DSL', lastMeeting: '2026-03-05', status: '実施済', route: '紹介' },
  { id: 6, name: '富士通 ERP導入支援', company: '富士通', person: '鈴木 一郎', division: 'ITSS', lastMeeting: '2026-03-01', status: '予定', route: 'IS' },
  { id: 7, name: 'ソニー データ分析基盤', company: 'ソニー', person: '田中 太郎', division: 'PERM', lastMeeting: '2026-02-20', status: '実施済', route: '営業顧問' },
  { id: 8, name: 'パナソニック IoT導入', company: 'パナソニック', person: '佐藤 花子', division: 'IS', lastMeeting: '2026-03-14', status: '予定', route: 'toBマーケ' },
  { id: 9, name: 'トヨタ AI品質管理', company: 'トヨタ自動車', person: '山田 次郎', division: 'FS', lastMeeting: '2026-01-15', status: '実施済', route: '展示会' },
  { id: 10, name: 'NTTデータ 人材育成支援', company: 'NTTデータ', person: '鈴木 一郎', division: 'ITSS', lastMeeting: '2026-03-13', status: '実施済', route: 'IS' },
  { id: 11, name: 'パナソニック DX戦略策定', company: 'パナソニック', person: '田中 太郎', division: 'DSL', lastMeeting: '2026-03-11', status: '予定', route: '紹介' },
];

export const DEAL_DETAILS = {
  1: {
    id: 1, name: 'NTTデータ DX推進案件', company: 'NTTデータ', companyId: 1, person: '鈴木 一郎',
    division: 'ITSS', status: '実施済', route: 'IS', acquirer: '田中 太郎',
    departmentName: 'デジタルソリューション事業部', contactPerson: '高橋 健一',
    tree: {
      parent: null,
      current: { id: 1, name: 'NTTデータ DX推進案件' },
      children: [
        { id: 10, name: 'NTTデータ 人材育成支援' },
      ],
    },
    meetings: [
      { id: 1, date: '2026-03-10', time: '14:00', status: '実施済', count: 3, attendeesClient: ['高橋 健一', '伊藤 美咲'], attendeesOwn: ['鈴木 一郎', '田中 太郎'], content: 'DX推進ロードマップの最終確認。Phase2の人材要件について合意。4月からのエンジニア3名のアサインについて調整開始。' },
      { id: 2, date: '2026-02-25', time: '10:00', status: '実施済', count: 2, attendeesClient: ['高橋 健一'], attendeesOwn: ['鈴木 一郎'], content: '技術要件のヒアリング。クラウド移行に伴うセキュリティ要件を確認。次回までに提案資料を準備する。' },
      { id: 3, date: '2026-02-10', time: '15:00', status: '実施済', count: 1, attendeesClient: ['高橋 健一', '佐々木 大輔'], attendeesOwn: ['鈴木 一郎', '佐藤 花子'], content: '初回面談。DX推進に関する課題のヒアリングを実施。現在のシステム構成と課題を確認。' },
    ],
    tasks: [
      { id: 1, type: 'Task', content: '提案資料の作成', category: '資料作成', deadline: '2026-03-20', person: '鈴木 一郎', status: '未実施' },
      { id: 2, type: 'Task', content: 'エンジニア候補のリストアップ', category: '候補者ピック', deadline: '2026-03-18', person: '田中 太郎', status: '実施中' },
    ],
    jobs: [
      { id: 1, title: 'クラウドエンジニア', count: 2, detail: 'AWS経験3年以上、Terraform経験者優遇' },
      { id: 2, title: 'プロジェクトマネージャー', count: 1, detail: 'DX案件のPM経験、PMP資格保持者優遇' },
    ],
  },
  2: {
    id: 2, name: '富士通 クラウド移行支援', company: '富士通', companyId: 2, person: '田中 太郎',
    division: 'PERM', status: '実施済', route: '営業顧問', acquirer: '鈴木 一郎',
    departmentName: 'インフラソリューション部', contactPerson: '中村 洋介',
    tree: { parent: null, current: { id: 2, name: '富士通 クラウド移行支援' }, children: [] },
    meetings: [
      { id: 1, date: '2026-03-08', time: '11:00', status: '実施済', count: 2, attendeesClient: ['中村 洋介'], attendeesOwn: ['田中 太郎'], content: 'クラウド移行計画の詳細確認。Azure環境の構築スケジュールについて合意。' },
      { id: 2, date: '2026-02-15', time: '13:00', status: '実施済', count: 1, attendeesClient: ['中村 洋介', '小林 真'], attendeesOwn: ['田中 太郎', '鈴木 一郎'], content: '初回面談。オンプレミスからクラウドへの移行ニーズのヒアリング。' },
    ],
    tasks: [
      { id: 3, type: 'Task', content: '移行計画書のドラフト作成', category: '資料作成', deadline: '2026-03-15', person: '田中 太郎', status: '完了' },
    ],
    jobs: [
      { id: 3, title: 'Azure エンジニア', count: 3, detail: 'Azure認定資格保持者、移行プロジェクト経験者' },
    ],
  },
  3: {
    id: 3, name: 'ソニー AI開発体制構築', company: 'ソニー', companyId: 3, person: '鈴木 一郎',
    division: 'IS', status: '予定', route: 'toBマーケ', acquirer: '佐藤 花子',
    departmentName: 'AI研究開発部', contactPerson: '渡辺 智子',
    tree: { parent: null, current: { id: 3, name: 'ソニー AI開発体制構築' }, children: [{ id: 7, name: 'ソニー データ分析基盤' }] },
    meetings: [
      { id: 1, date: '2026-03-12', time: '16:00', status: '予定', count: 1, attendeesClient: ['渡辺 智子'], attendeesOwn: ['鈴木 一郎'], content: '初回面談予定。AI開発チームの体制構築について相談。' },
    ],
    tasks: [],
    jobs: [],
  },
  4: {
    id: 4, name: 'トヨタ 基幹システム刷新', company: 'トヨタ自動車', companyId: 4, person: '佐藤 花子',
    division: 'FS', status: '実施済', route: '展示会', acquirer: '山田 次郎',
    departmentName: '情報システム部', contactPerson: '加藤 雄一',
    tree: { parent: null, current: { id: 4, name: 'トヨタ 基幹システム刷新' }, children: [{ id: 9, name: 'トヨタ AI品質管理' }] },
    meetings: [
      { id: 1, date: '2026-02-28', time: '10:00', status: '実施済', count: 2, attendeesClient: ['加藤 雄一'], attendeesOwn: ['佐藤 花子'], content: '基幹システム刷新の要件定義フェーズについて確認。' },
      { id: 2, date: '2026-02-01', time: '14:00', status: '実施済', count: 1, attendeesClient: ['加藤 雄一', '松本 裕子'], attendeesOwn: ['佐藤 花子', '山田 次郎'], content: '展示会でのコンタクトからの初回面談。' },
    ],
    tasks: [
      { id: 4, type: 'Task', content: '見積書の作成', category: '資料作成', deadline: '2026-03-10', person: '佐藤 花子', status: '未実施' },
    ],
    jobs: [
      { id: 4, title: 'SAPコンサルタント', count: 2, detail: 'SAP S/4HANA導入経験、製造業経験者優遇' },
    ],
  },
  5: {
    id: 5, name: 'NTTデータ セキュリティ強化', company: 'NTTデータ', companyId: 1, person: '山田 次郎',
    division: 'DSL', status: '実施済', route: '紹介', acquirer: '鈴木 一郎',
    departmentName: 'セキュリティ推進部', contactPerson: '森 太一',
    tree: { parent: null, current: { id: 5, name: 'NTTデータ セキュリティ強化' }, children: [] },
    meetings: [
      { id: 1, date: '2026-03-05', time: '13:00', status: '実施済', count: 1, attendeesClient: ['森 太一'], attendeesOwn: ['山田 次郎'], content: 'セキュリティ体制の現状ヒアリング。SOC運用の人材ニーズを確認。' },
    ],
    tasks: [
      { id: 5, type: 'Task', content: 'セキュリティ人材の候補者リスト作成', category: '候補者ピック', deadline: '2026-03-12', person: '山田 次郎', status: '期限切れ' },
    ],
    jobs: [
      { id: 5, title: 'セキュリティエンジニア', count: 2, detail: 'CISSP/CISM資格保持者、SOC運用経験3年以上' },
    ],
  },
};

export const TASKS = [
  { id: 1, type: 'Task', content: '提案資料の作成', company: 'NTTデータ', category: '資料作成', deadline: '2026-03-20', person: '鈴木 一郎', status: '未実施', dealId: 1 },
  { id: 2, type: 'Task', content: 'エンジニア候補のリストアップ', company: 'NTTデータ', category: '候補者ピック', deadline: '2026-03-18', person: '田中 太郎', status: '実施中', dealId: 1 },
  { id: 3, type: 'Task', content: '移行計画書のドラフト作成', company: '富士通', category: '資料作成', deadline: '2026-03-15', person: '田中 太郎', status: '完了', dealId: 2 },
  { id: 4, type: 'Task', content: '見積書の作成', company: 'トヨタ自動車', category: '資料作成', deadline: '2026-03-10', person: '佐藤 花子', status: '期限切れ', dealId: 4 },
  { id: 5, type: 'Task', content: 'セキュリティ人材の候補者リスト作成', company: 'NTTデータ', category: '候補者ピック', deadline: '2026-03-12', person: '山田 次郎', status: '期限切れ', dealId: 5 },
  { id: 6, type: 'Activity', content: 'NTTデータ 高橋様にフォローアップ電話', company: 'NTTデータ', category: 'アポ依頼', deadline: '2026-03-16', person: '鈴木 一郎', status: '完了', dealId: 1 },
  { id: 7, type: 'Task', content: '契約書の取り交わし', company: 'NTTデータ', category: '契約書取交し', deadline: '2026-03-25', person: '鈴木 一郎', status: '未実施', dealId: 1 },
  { id: 8, type: 'Activity', content: '富士通 中村様への求人情報送付', company: '富士通', category: '求人取得依頼', deadline: '2026-03-14', person: '田中 太郎', status: '完了', dealId: 2 },
  { id: 9, type: 'Task', content: 'ソニー向け提案書準備', company: 'ソニー', category: '資料作成', deadline: '2026-03-22', person: '鈴木 一郎', status: '未実施', dealId: 3 },
  { id: 10, type: 'Task', content: 'パナソニック IoT案件のアポイント取得', company: 'パナソニック', category: 'アポ依頼', deadline: '2026-03-19', person: '佐藤 花子', status: '未実施', dealId: 8 },
];

export const COMPANIES = [
  { id: 1, name: 'NTTデータ', tier: 'Enterprise', classification: 'IS', itss: '契約中', perm: '商談中', dsl: '商談中', lastDeal: '2026-03-13' },
  { id: 2, name: '富士通', tier: 'Enterprise', classification: 'FS', itss: '商談中', perm: '契約中', dsl: '未接触', lastDeal: '2026-03-08' },
  { id: 3, name: 'ソニー', tier: 'Mid', classification: 'IS', itss: '未接触', perm: '商談中', dsl: '未接触', lastDeal: '2026-03-12' },
  { id: 4, name: 'トヨタ自動車', tier: 'Enterprise', classification: 'FS', itss: '未接触', perm: '未接触', dsl: '未接触', lastDeal: '2026-01-15' },
  { id: 5, name: 'パナソニック', tier: 'Mid', classification: 'IS', itss: '未接触', perm: '未接触', dsl: '商談中', lastDeal: '2026-03-14' },
];

export const COMPANY_DETAILS = {
  1: {
    id: 1, name: 'NTTデータ', tier: 'Enterprise', classification: 'IS',
    totalProfit: '¥12,500,000', lastDeal: '2026-03-13',
    contracts: {
      itss: { status: '契約中', since: '2025-04-01' },
      perm: { status: '商談中', since: null },
      dsl: { status: '商談中', since: null },
    },
    divisionActions: {
      itss: { deals: 5, jobs: 3, lastContact: '2026-03-13' },
      perm: { deals: 1, jobs: 0, lastContact: '2026-02-15' },
      dsl: { deals: 1, jobs: 1, lastContact: '2026-03-05' },
    },
    whiteList: [
      { dept: 'デジタルソリューション事業部', contacted: true, jobAcquired: true },
      { dept: 'セキュリティ推進部', contacted: true, jobAcquired: true },
      { dept: '金融システム事業部', contacted: false, jobAcquired: false },
      { dept: 'コンサルティング事業部', contacted: true, jobAcquired: false },
    ],
    deals: [
      { id: 1, name: 'NTTデータ DX推進案件', division: 'ITSS', status: '実施済', date: '2026-03-10', children: [{ id: 10, name: 'NTTデータ 人材育成支援', division: 'ITSS', status: '実施済', date: '2026-03-13' }] },
      { id: 5, name: 'NTTデータ セキュリティ強化', division: 'DSL', status: '実施済', date: '2026-03-05', children: [] },
    ],
    contacts: [
      { name: '高橋 健一', dept: 'デジタルソリューション事業部', role: '部長', avatar: '高' },
      { name: '伊藤 美咲', dept: 'デジタルソリューション事業部', role: '課長', avatar: '伊' },
      { name: '森 太一', dept: 'セキュリティ推進部', role: 'マネージャー', avatar: '森' },
      { name: '佐々木 大輔', dept: 'コンサルティング事業部', role: '主任', avatar: '佐' },
    ],
  },
  2: {
    id: 2, name: '富士通', tier: 'Enterprise', classification: 'FS',
    totalProfit: '¥8,200,000', lastDeal: '2026-03-08',
    contracts: {
      itss: { status: '商談中', since: null },
      perm: { status: '契約中', since: '2025-06-01' },
      dsl: { status: '未接触', since: null },
    },
    divisionActions: {
      itss: { deals: 1, jobs: 0, lastContact: '2026-03-01' },
      perm: { deals: 1, jobs: 1, lastContact: '2026-03-08' },
      dsl: { deals: 0, jobs: 0, lastContact: '-' },
    },
    whiteList: [
      { dept: 'インフラソリューション部', contacted: true, jobAcquired: true },
      { dept: 'SI事業部', contacted: false, jobAcquired: false },
    ],
    deals: [
      { id: 2, name: '富士通 クラウド移行支援', division: 'PERM', status: '実施済', date: '2026-03-08', children: [] },
      { id: 6, name: '富士通 ERP導入支援', division: 'ITSS', status: '予定', date: '2026-03-01', children: [] },
    ],
    contacts: [
      { name: '中村 洋介', dept: 'インフラソリューション部', role: '課長', avatar: '中' },
      { name: '小林 真', dept: 'インフラソリューション部', role: '主任', avatar: '小' },
    ],
  },
  3: {
    id: 3, name: 'ソニー', tier: 'Mid', classification: 'IS',
    totalProfit: '¥3,100,000', lastDeal: '2026-03-12',
    contracts: {
      itss: { status: '未接触', since: null },
      perm: { status: '商談中', since: null },
      dsl: { status: '未接触', since: null },
    },
    divisionActions: {
      itss: { deals: 0, jobs: 0, lastContact: '-' },
      perm: { deals: 1, jobs: 0, lastContact: '2026-02-20' },
      dsl: { deals: 0, jobs: 0, lastContact: '-' },
    },
    whiteList: [
      { dept: 'AI研究開発部', contacted: true, jobAcquired: false },
    ],
    deals: [
      { id: 3, name: 'ソニー AI開発体制構築', division: 'IS', status: '予定', date: '2026-03-12', children: [{ id: 7, name: 'ソニー データ分析基盤', division: 'PERM', status: '実施済', date: '2026-02-20' }] },
    ],
    contacts: [
      { name: '渡辺 智子', dept: 'AI研究開発部', role: 'ディレクター', avatar: '渡' },
    ],
  },
  4: {
    id: 4, name: 'トヨタ自動車', tier: 'Enterprise', classification: 'FS',
    totalProfit: '¥5,800,000', lastDeal: '2026-01-15',
    contracts: {
      itss: { status: '未接触', since: null },
      perm: { status: '未接触', since: null },
      dsl: { status: '未接触', since: null },
    },
    divisionActions: {
      itss: { deals: 0, jobs: 0, lastContact: '-' },
      perm: { deals: 0, jobs: 0, lastContact: '-' },
      dsl: { deals: 0, jobs: 0, lastContact: '-' },
    },
    whiteList: [
      { dept: '情報システム部', contacted: true, jobAcquired: true },
    ],
    deals: [
      { id: 4, name: 'トヨタ 基幹システム刷新', division: 'FS', status: '実施済', date: '2026-02-28', children: [{ id: 9, name: 'トヨタ AI品質管理', division: 'FS', status: '実施済', date: '2026-01-15' }] },
    ],
    contacts: [
      { name: '加藤 雄一', dept: '情報システム部', role: '部長', avatar: '加' },
      { name: '松本 裕子', dept: '情報システム部', role: '課長', avatar: '松' },
    ],
  },
  5: {
    id: 5, name: 'パナソニック', tier: 'Mid', classification: 'IS',
    totalProfit: '¥2,400,000', lastDeal: '2026-03-14',
    contracts: {
      itss: { status: '未接触', since: null },
      perm: { status: '未接触', since: null },
      dsl: { status: '商談中', since: null },
    },
    divisionActions: {
      itss: { deals: 0, jobs: 0, lastContact: '-' },
      perm: { deals: 0, jobs: 0, lastContact: '-' },
      dsl: { deals: 1, jobs: 0, lastContact: '2026-03-11' },
    },
    whiteList: [
      { dept: 'IoTソリューション部', contacted: true, jobAcquired: false },
    ],
    deals: [
      { id: 8, name: 'パナソニック IoT導入', division: 'IS', status: '予定', date: '2026-03-14', children: [{ id: 11, name: 'パナソニック DX戦略策定', division: 'DSL', status: '予定', date: '2026-03-11' }] },
    ],
    contacts: [
      { name: '斎藤 浩司', dept: 'IoTソリューション部', role: 'マネージャー', avatar: '斎' },
    ],
  },
};

export const MY_PAGE_DATA = {
  user: { name: '鈴木 一郎', division: 'ITSS' },
  notification: {
    message: 'NTTデータ との契約書取交しが完了しています。契約ステータスを更新してください。',
    companyId: 1,
  },
  scores: {
    deals: { label: '商談数 初回', value: 8 },
    appointments: { label: 'アポ設定数', value: 12 },
    tasks: { label: 'Task消化数', value: 34 },
    jobs: { label: '求人取得数', value: 3 },
  },
  weekSchedule: {
    month: 3,
    year: 2026,
    weekStart: '2026-03-16',
    events: [
      { date: '2026-03-16', time: '10:00', title: 'NTTデータ 定例面談', company: 'NTTデータ' },
      { date: '2026-03-17', time: '14:00', title: '富士通 クラウド移行進捗', company: '富士通' },
      { date: '2026-03-18', time: '11:00', title: 'ソニー AI開発体制構築 初回', company: 'ソニー' },
      { date: '2026-03-20', time: '15:00', title: 'パナソニック IoT導入 2回目', company: 'パナソニック' },
    ],
  },
  myTasks: [
    { id: 5, content: 'セキュリティ人材の候補者リスト作成', company: 'NTTデータ', deadline: '2026-03-12', status: '期限切れ', dealId: 5 },
    { id: 1, content: '提案資料の作成', company: 'NTTデータ', deadline: '2026-03-20', status: '未実施', dealId: 1 },
    { id: 7, content: '契約書の取り交わし', company: 'NTTデータ', deadline: '2026-03-25', status: '未実施', dealId: 1 },
    { id: 9, content: 'ソニー向け提案書準備', company: 'ソニー', deadline: '2026-03-22', status: '未実施', dealId: 3 },
    { id: 6, content: 'NTTデータ 高橋様にフォローアップ電話', company: 'NTTデータ', deadline: '2026-03-16', status: '完了', dealId: 1 },
  ],
  myDeals: [
    { id: 1, name: 'NTTデータ DX推進案件', company: 'NTTデータ', status: '実施済', incompleteTasks: 2, lastMeeting: '2026-03-10' },
    { id: 3, name: 'ソニー AI開発体制構築', company: 'ソニー', status: '予定', incompleteTasks: 1, lastMeeting: '2026-03-12' },
    { id: 6, name: '富士通 ERP導入支援', company: '富士通', status: '予定', incompleteTasks: 0, lastMeeting: '2026-03-01' },
    { id: 10, name: 'NTTデータ 人材育成支援', company: 'NTTデータ', status: '実施済', incompleteTasks: 0, lastMeeting: '2026-03-13' },
  ],
};

export const MEMBERS = ['鈴木 一郎', '田中 太郎', '佐藤 花子', '山田 次郎'];
export const DIVISIONS = ['IS', 'FS', 'ITSS', 'PERM', 'DSL'];
export const DEAL_ROUTES = ['IS', '営業顧問', 'toBマーケ', '展示会', '紹介'];
export const TASK_CATEGORIES = ['アポ依頼', '求人取得依頼', '候補者ピック', '資料作成', '契約書取交し', 'その他'];
export const CONTACT_METHODS = ['メール', '電話', 'その他'];
export const CONTRACT_STATUSES = ['未接触', '商談中', '契約中', '契約終了'];
