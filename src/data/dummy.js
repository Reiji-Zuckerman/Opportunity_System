// ============================================================
// 商談管理システム モックアップ ダミーデータ v3
// src/data/dummy.js として配置してください
// ============================================================

export const USERS = [
  { id: 1, name: '鈴木 一郎', dept: 'ITSS' },
  { id: 2, name: '田中 花子', dept: 'PERM' },
  { id: 3, name: '佐藤 次郎', dept: 'ITSS' },
  { id: 4, name: '山本 三郎', dept: 'DSL' },
  { id: 5, name: '伊藤 美咲', dept: 'FS' },
]

export const COMPANIES = [
  { id: 1, name: 'NTTデータ',   tier: 'Enterprise', category: 'SIer',    itss: '契約中', perm: '契約中', dsl: '商談中', lastDealDate: '2025/3/10' },
  { id: 2, name: '富士通',       tier: 'Enterprise', category: 'SIer',    itss: '商談中', perm: '契約中', dsl: '未接触', lastDealDate: '2025/3/12' },
  { id: 3, name: 'ノースサンド', tier: 'Mid',        category: 'コンサル', itss: '契約中', perm: '契約中', dsl: '未接触', lastDealDate: '2024/12/10' },
  { id: 4, name: 'Sansan',       tier: 'Mid',        category: 'Web系',   itss: '商談中', perm: '未接触', dsl: '未接触', lastDealDate: '2025/3/1' },
  { id: 5, name: 'トヨタ自動車', tier: 'Enterprise', category: '一般事業', itss: '契約中', perm: '未接触', dsl: '商談中', lastDealDate: '2025/2/28' },
  { id: 6, name: '日立製作所',     tier: 'Enterprise', category: 'SIer',    itss: '契約中', perm: '商談中', dsl: '契約中', lastDealDate: '2025/3/8'  },
  { id: 7, name: 'リクルート',     tier: 'Enterprise', category: 'Web系',   itss: '商談中', perm: '契約中', dsl: '未接触', lastDealDate: '2025/3/5'  },
  { id: 8, name: '楽天グループ',   tier: 'Enterprise', category: 'Web系',   itss: '契約中', perm: '商談中', dsl: '商談中', lastDealDate: '2025/3/10' },
  { id: 9, name: 'KDDI',           tier: 'Enterprise', category: 'SES派遣',    itss: '契約中', perm: '未接触', dsl: '契約中', lastDealDate: '2025/3/3'  },
  { id: 10, name: 'ソニーグループ', tier: 'Enterprise', category: 'SES派遣', itss: '商談中', perm: '契約中', dsl: '商談中', lastDealDate: '2025/3/12' },
]

export const COMPANY_DETAILS = {
  1: {
    info: { tier: 'Enterprise', category: 'SIer', grossProfit: 38400000, lastDealDate: '2025/3/10' },
    contractStatus: { itss: '契約中', perm: '契約中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 14, jobs: 10, lastContact: '2025/3/10' },
      { dept: 'PERM', deals: 4,  jobs: 3,  lastContact: '2025/3/5'  },
      { dept: 'DSL',  deals: 3,  jobs: 1,  lastContact: '2025/3/8'  },
    ],
    whitelist: [
      { dept: '製造事業部',           contacted: true,  jobAcquired: true,  contacts: [{ name: '山田 康介', role: '部長' }, { name: '佐藤 課長', role: '課長' }] },
      { dept: 'DX推進室',             contacted: true,  jobAcquired: true,  contacts: [{ name: '吉田 室長', role: '室長' }, { name: '中島 健太', role: '主任' }] },
      { dept: '金融ソリューション部', contacted: true,  jobAcquired: true,  contacts: [{ name: '高橋 部長', role: '部長' }, { name: '松井 達也', role: '課長' }] },
      { dept: '人事部',               contacted: true,  jobAcquired: true,  contacts: [{ name: '渡辺 部長', role: '部長' }, { name: '小川 美香', role: '課長' }, { name: '藤井 恵', role: '主任' }] },
      { dept: 'IT推進部',             contacted: true,  jobAcquired: true,  contacts: [{ name: '石井 隆', role: '部長' }, { name: '木村 正人', role: '課長' }] },
      { dept: 'クラウド推進本部',     contacted: true,  jobAcquired: false, contacts: [{ name: '長谷川 誠', role: '本部長' }, { name: '岡田 拓也', role: '課長' }] },
      { dept: '研究開発部',           contacted: false, jobAcquired: false, contacts: [{ name: '森田 浩二', role: '部長' }] },
      { dept: 'グローバル事業部',     contacted: false, jobAcquired: false, contacts: [{ name: '西村 大輔', role: '部長' }] },
    ],
    deals: [
      { id: 1,  name: '初回商談（社長・人事部長）',                  dept: 'FS',   lastMeeting: '2024/10/5',  remainingTasks: 0, status: '完了'   },
      { id: 2,  name: '製造事業部 レガシーマイグレーションPJ',       dept: 'ITSS', lastMeeting: '2025/3/10',  remainingTasks: 2, status: '実施済' },
      { id: 3,  name: '製造事業部 フェーズ2 クラウド移行',           dept: 'ITSS', lastMeeting: '2025/2/28',  remainingTasks: 3, status: '実施済' },
      { id: 4,  name: '製造事業部 IoTプラットフォーム構築',          dept: 'ITSS', lastMeeting: '2025/1/20',  remainingTasks: 1, status: '実施済' },
      { id: 5,  name: 'IoT基盤 セキュリティ強化PJ',                 dept: 'ITSS', lastMeeting: '2025/3/5',   remainingTasks: 2, status: '実施済' },
      { id: 32, name: 'IoT基盤 監視・運用自動化PJ',                 dept: 'ITSS', lastMeeting: '2025/3/8',   remainingTasks: 1, status: '実施済' },
      { id: 6,  name: 'DX推進室 スマートファクトリーPJ',             dept: 'FS',   lastMeeting: '2025/3/8',   remainingTasks: 1, status: '実施済' },
      { id: 7,  name: 'DX推進室 AI品質検査PJ',                      dept: 'DSL',  lastMeeting: '2025/2/15',  remainingTasks: 2, status: '実施済' },
      { id: 33, name: 'DX推進室 デジタルツイン基盤',                 dept: 'DSL',  lastMeeting: '2025/3/3',   remainingTasks: 2, status: '実施済' },
      { id: 8,  name: '金融ソリューション部 基幹刷新',               dept: 'ITSS', lastMeeting: '2025/1/30',  remainingTasks: 0, status: '完了'   },
      { id: 34, name: '金融ソリューション部 APIゲートウェイ構築',    dept: 'ITSS', lastMeeting: '2025/2/20',  remainingTasks: 1, status: '実施済' },
      { id: 9,  name: '人事部 採用DX支援',                           dept: 'PERM', lastMeeting: '2025/3/5',   remainingTasks: 1, status: '実施済' },
      { id: 35, name: 'クラウド推進本部 マルチクラウド戦略支援',     dept: 'ITSS', lastMeeting: '2025/2/25',  remainingTasks: 2, status: '実施済' },
      { id: 36, name: 'IT推進部 DevOps推進PJ',                      dept: 'ITSS', lastMeeting: '2025/2/10',  remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '伊藤 美咲', role: 'FS担当'   },
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '佐藤 次郎', role: 'ITSS副担当'},
    ],
  },

  2: {
    info: { tier: 'Enterprise', category: 'SIer', grossProfit: 12600000, lastDealDate: '2025/3/12' },
    contractStatus: { itss: '商談中', perm: '契約中', dsl: '未接触' },
    deptActivity: [
      { dept: 'ITSS', deals: 5, jobs: 3, lastContact: '2025/3/12' },
      { dept: 'PERM', deals: 5, jobs: 3, lastContact: '2025/3/5'  },
      { dept: 'DSL',  deals: 0, jobs: 0, lastContact: '—'         },
    ],
    whitelist: [
      { dept: 'HR部門',           contacted: true,  jobAcquired: true,  contacts: [{ name: '伊藤 麻衣', role: '部長' }, { name: '中田 裕介', role: '課長' }, { name: '野村 真理', role: '主任' }] },
      { dept: 'ITインフラ部',     contacted: true,  jobAcquired: true,  contacts: [{ name: '大塚 信也', role: '部長' }, { name: '河野 健一', role: '課長' }] },
      { dept: 'デジタル推進部',   contacted: true,  jobAcquired: true,  contacts: [{ name: '安藤 光', role: '部長' }, { name: '前田 翔太', role: '主任' }] },
      { dept: 'サービス事業部',   contacted: true,  jobAcquired: false, contacts: [{ name: '杉本 浩', role: '部長' }, { name: '内田 智子', role: '課長' }] },
      { dept: '研究開発部',       contacted: false, jobAcquired: false, contacts: [{ name: '吉川 学', role: '部長' }] },
      { dept: 'グローバル営業部', contacted: false, jobAcquired: false, contacts: [{ name: '坂本 英樹', role: '部長' }] },
    ],
    deals: [
      { id: 10, name: 'HR部門 採用強化PJ',              dept: 'PERM', lastMeeting: '2025/3/12', remainingTasks: 1, status: '予定'   },
      { id: 11, name: 'HR部門 エグゼクティブ採用',      dept: 'PERM', lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 15, name: 'HR部門 新卒採用強化',             dept: 'PERM', lastMeeting: '2025/1/15', remainingTasks: 0, status: '完了'   },
      { id: 37, name: 'HR部門 グローバル人材採用',       dept: 'PERM', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 12, name: 'ITインフラ部 基盤刷新支援',       dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 3, status: '実施済' },
      { id: 13, name: 'ITインフラ部 クラウドリフト',     dept: 'ITSS', lastMeeting: '2025/3/5',  remainingTasks: 0, status: '完了'   },
      { id: 14, name: 'デジタル推進部 DX人材支援',       dept: 'ITSS', lastMeeting: '2025/3/12', remainingTasks: 2, status: '実施済' },
      { id: 38, name: 'デジタル推進部 AI/MLエンジニア支援', dept: 'ITSS', lastMeeting: '2025/3/1', remainingTasks: 2, status: '実施済' },
      { id: 39, name: 'サービス事業部 SREエンジニア支援', dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '田中 花子', role: 'PERM担当' },
      { name: '佐藤 次郎', role: 'ITSS担当' },
    ],
  },

  3: {
    info: { tier: 'Mid', category: 'コンサル', grossProfit: 7800000, lastDealDate: '2025/1/15' },
    contractStatus: { itss: '契約中', perm: '契約中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 4, jobs: 3, lastContact: '2025/1/15' },
      { dept: 'PERM', deals: 4, jobs: 3, lastContact: '2024/11/28' },
      { dept: 'DSL',  deals: 1, jobs: 0, lastContact: '2025/1/10' },
    ],
    whitelist: [
      { dept: 'ERP推進部',   contacted: true,  jobAcquired: true,  contacts: [{ name: '竹内 洋平', role: '部長' }, { name: '福田 雅之', role: '課長' }, { name: '宮本 理恵', role: '主任' }] },
      { dept: 'PMO部門',     contacted: true,  jobAcquired: true,  contacts: [{ name: '阿部 浩司', role: '部門長' }, { name: '上田 真一', role: 'PMOリーダー' }] },
      { dept: 'SAP専門チーム', contacted: true, jobAcquired: true,  contacts: [{ name: '斎藤 拓海', role: 'チームリーダー' }, { name: '片山 誠', role: 'シニアコンサルタント' }] },
      { dept: 'BPR推進部',   contacted: true,  jobAcquired: false, contacts: [{ name: '今井 大介', role: '部長' }, { name: '横山 直樹', role: '課長' }] },
      { dept: '戦略企画部',  contacted: false, jobAcquired: false, contacts: [{ name: '久保 哲也', role: '部長' }] },
    ],
    deals: [
      { id: 16, name: 'ERP推進部 SAP人材支援',          dept: 'ITSS', lastMeeting: '2024/12/10', remainingTasks: 0, status: '完了' },
      { id: 17, name: 'ERP推進部 SAP追加支援',           dept: 'ITSS', lastMeeting: '2024/11/20', remainingTasks: 0, status: '完了' },
      { id: 40, name: 'ERP推進部 SAP BTP対応支援',       dept: 'ITSS', lastMeeting: '2025/1/15',  remainingTasks: 0, status: '完了' },
      { id: 18, name: 'PMO部門 PJ管理人材',              dept: 'PERM', lastMeeting: '2024/11/28', remainingTasks: 0, status: '完了' },
      { id: 19, name: 'PMO部門 シニアPM採用',            dept: 'PERM', lastMeeting: '2024/10/15', remainingTasks: 0, status: '完了' },
      { id: 41, name: 'PMO部門 アジャイルコーチ採用',    dept: 'PERM', lastMeeting: '2025/1/10',  remainingTasks: 0, status: '完了' },
      { id: 20, name: 'SAP専門チーム ABAP開発者追加',    dept: 'ITSS', lastMeeting: '2024/12/5',  remainingTasks: 0, status: '完了' },
      { id: 42, name: 'BPR推進部 業務改革コンサル支援',  dept: 'DSL',  lastMeeting: '2025/1/10',  remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
    ],
  },

  4: {
    info: { tier: 'Mid', category: 'Web系', grossProfit: 3600000, lastDealDate: '2025/3/1' },
    contractStatus: { itss: '商談中', perm: '未接触', dsl: '未接触' },
    deptActivity: [
      { dept: 'ITSS', deals: 6, jobs: 3, lastContact: '2025/3/1' },
      { dept: 'PERM', deals: 0, jobs: 0, lastContact: '—'        },
      { dept: 'DSL',  deals: 0, jobs: 0, lastContact: '—'        },
    ],
    whitelist: [
      { dept: 'エンジニアリング本部', contacted: true,  jobAcquired: true,  contacts: [{ name: '寺田 裕也', role: '本部長' }, { name: '中西 健', role: 'VPoE' }, { name: '松田 涼', role: 'テックリード' }] },
      { dept: 'プロダクト部門',       contacted: true,  jobAcquired: true,  contacts: [{ name: '永井 智也', role: '部門長' }, { name: '原 由美子', role: 'PdMリーダー' }] },
      { dept: 'データ基盤部',         contacted: true,  jobAcquired: false, contacts: [{ name: '小野 達也', role: '部長' }, { name: '平野 純', role: 'データエンジニアリーダー' }] },
      { dept: 'セキュリティ部門',     contacted: false, jobAcquired: false, contacts: [{ name: '菅原 正樹', role: '部門長' }] },
      { dept: '営業本部',             contacted: false, jobAcquired: false, contacts: [{ name: '宮崎 康平', role: '本部長' }] },
    ],
    deals: [
      { id: 21, name: 'エンジニアリング本部 開発人材支援',         dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 22, name: 'エンジニアリング本部 Goエンジニア追加',     dept: 'ITSS', lastMeeting: '2025/2/5',  remainingTasks: 3, status: '実施済' },
      { id: 43, name: 'エンジニアリング本部 フロントエンド強化',   dept: 'ITSS', lastMeeting: '2025/3/1',  remainingTasks: 2, status: '実施済' },
      { id: 23, name: 'プロダクト部門 PdM人材支援',                dept: 'ITSS', lastMeeting: '2025/1/20', remainingTasks: 1, status: '実施済' },
      { id: 44, name: 'プロダクト部門 デザインエンジニア採用',     dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 2, status: '実施済' },
      { id: 45, name: 'データ基盤部 データエンジニア支援',         dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '佐藤 次郎', role: 'ITSS担当' },
    ],
  },

  5: {
    info: { tier: 'Enterprise', category: '一般事業', grossProfit: 22400000, lastDealDate: '2025/2/28' },
    contractStatus: { itss: '契約中', perm: '未接触', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 10, jobs: 7, lastContact: '2025/2/28' },
      { dept: 'PERM', deals: 0,  jobs: 0, lastContact: '—'         },
      { dept: 'DSL',  deals: 4,  jobs: 2, lastContact: '2025/2/15' },
    ],
    whitelist: [
      { dept: 'デジタル推進本部',     contacted: true,  jobAcquired: true,  contacts: [{ name: '北村 和也', role: '本部長' }, { name: '浜田 祐介', role: '部長' }, { name: '相川 真', role: '課長' }] },
      { dept: '生産技術部',           contacted: true,  jobAcquired: true,  contacts: [{ name: '堀 正明', role: '部長' }, { name: '新井 健太郎', role: '課長' }] },
      { dept: '情報システム部',       contacted: true,  jobAcquired: true,  contacts: [{ name: '川口 慎一', role: '部長' }, { name: '関根 裕之', role: '課長' }] },
      { dept: 'コネクティッド部門',   contacted: true,  jobAcquired: true,  contacts: [{ name: '秋山 拓也', role: '部門長' }, { name: '富田 英明', role: 'テックリード' }, { name: '須藤 恵', role: '課長' }] },
      { dept: 'AI研究所',             contacted: true,  jobAcquired: false, contacts: [{ name: '矢野 博之', role: '所長' }, { name: '深田 和樹', role: '主任研究員' }] },
      { dept: 'HR・人事部',           contacted: false, jobAcquired: false, contacts: [{ name: '丸山 美穂', role: '部長' }] },
      { dept: '調達・購買部',         contacted: false, jobAcquired: false, contacts: [{ name: '岩田 雄二', role: '部長' }] },
    ],
    deals: [
      { id: 24, name: 'デジタル推進本部 基幹刷新',                   dept: 'DSL',  lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 25, name: 'デジタル推進本部 SAP移行フェーズ2',            dept: 'DSL',  lastMeeting: '2025/2/10', remainingTasks: 1, status: '実施済' },
      { id: 26, name: 'デジタル推進本部 データ基盤構築',              dept: 'DSL',  lastMeeting: '2025/1/25', remainingTasks: 0, status: '完了'   },
      { id: 46, name: 'デジタル推進本部 グローバルERP展開',           dept: 'DSL',  lastMeeting: '2025/2/20', remainingTasks: 2, status: '実施済' },
      { id: 27, name: '生産技術部 組込みエンジニア支援',              dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 1, status: '実施済' },
      { id: 28, name: '生産技術部 RustエンジニアPJ',                 dept: 'ITSS', lastMeeting: '2025/1/30', remainingTasks: 2, status: '実施済' },
      { id: 47, name: '生産技術部 FPGAエンジニア支援',               dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 29, name: '情報システム部 レガシー移行支援',              dept: 'ITSS', lastMeeting: '2025/1/30', remainingTasks: 0, status: '完了'   },
      { id: 30, name: '情報システム部 JAVA/Kotlin刷新',               dept: 'ITSS', lastMeeting: '2024/12/20', remainingTasks: 0, status: '完了'  },
      { id: 48, name: '情報システム部 マイクロサービス移行',          dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 31, name: 'コネクティッド部門 車載ソフトウェア支援',      dept: 'ITSS', lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 49, name: 'コネクティッド部門 OTA更新基盤PJ',            dept: 'ITSS', lastMeeting: '2025/3/1',  remainingTasks: 1, status: '実施済' },
      { id: 50, name: 'AI研究所 自動運転AI人材支援',                 dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '鈴木 一郎', role: 'ITSS担当' },
    ],
  },

  6: {
    info: { tier: 'Enterprise', category: 'SIer', grossProfit: 29800000, lastDealDate: '2025/3/8' },
    contractStatus: { itss: '契約中', perm: '商談中', dsl: '契約中' },
    deptActivity: [
      { dept: 'ITSS', deals: 8, jobs: 6, lastContact: '2025/3/8' },
      { dept: 'PERM', deals: 3, jobs: 2, lastContact: '2025/3/1' },
      { dept: 'DSL',  deals: 4, jobs: 3, lastContact: '2025/2/28' },
    ],
    whitelist: [
      { dept: 'システム統括本部',     contacted: true,  jobAcquired: true,  contacts: [{ name: '中村 CTO', role: 'CTO' }, { name: '山崎 俊介', role: '部長' }, { name: '近藤 智也', role: '課長' }] },
      { dept: 'Lumada事業部',         contacted: true,  jobAcquired: true,  contacts: [{ name: '佐々木 剛', role: '事業部長' }, { name: '高柳 慶太', role: '課長' }] },
      { dept: 'デジタルエンジニアリング部', contacted: true, jobAcquired: true, contacts: [{ name: '田中 雅人', role: 'DevOps推進リーダー' }, { name: '星野 健', role: '部長' }] },
      { dept: '人財統括本部',         contacted: true,  jobAcquired: true,  contacts: [{ name: '小林 人事部長', role: '本部長' }, { name: '大島 亜希子', role: '課長' }, { name: '川上 聡', role: '主任' }] },
      { dept: 'クラウドサービス部',   contacted: true,  jobAcquired: false, contacts: [{ name: '遠藤 拓', role: 'クラウドリーダー' }, { name: '栗田 直樹', role: '課長' }] },
      { dept: 'AI&データサイエンス部', contacted: false, jobAcquired: false, contacts: [{ name: '武田 賢一', role: '部長' }] },
      { dept: 'グローバルソリューション部', contacted: false, jobAcquired: false, contacts: [{ name: '古賀 英次', role: '部長' }] },
    ],
    deals: [
      { id: 51, name: 'システム統括本部 基幹系モダナイゼーションPJ',  dept: 'ITSS', lastMeeting: '2025/3/8',  remainingTasks: 2, status: '実施済' },
      { id: 52, name: 'システム統括本部 クラウドネイティブ移行',       dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
      { id: 53, name: 'Lumada事業部 IoTプラットフォーム開発',          dept: 'ITSS', lastMeeting: '2025/3/5',  remainingTasks: 2, status: '実施済' },
      { id: 54, name: 'Lumada事業部 AI分析基盤構築',                   dept: 'DSL',  lastMeeting: '2025/2/28', remainingTasks: 1, status: '実施済' },
      { id: 55, name: 'デジタルエンジニアリング部 DevOps導入支援',     dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 0, status: '完了'   },
      { id: 56, name: 'デジタルエンジニアリング部 SRE体制構築',        dept: 'ITSS', lastMeeting: '2025/3/1',  remainingTasks: 2, status: '実施済' },
      { id: 57, name: '人財統括本部 DX人材採用支援',                   dept: 'PERM', lastMeeting: '2025/3/1',  remainingTasks: 1, status: '実施済' },
      { id: 58, name: '人財統括本部 エグゼクティブサーチ',             dept: 'PERM', lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 59, name: 'クラウドサービス部 マネージドサービス人材支援', dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 1, status: '実施済' },
      { id: 60, name: 'Lumada事業部 データマネジメント戦略策定',       dept: 'DSL',  lastMeeting: '2025/2/18', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '佐藤 次郎', role: 'ITSS副担当'},
    ],
  },

  7: {
    info: { tier: 'Enterprise', category: 'Web系', grossProfit: 18200000, lastDealDate: '2025/3/5' },
    contractStatus: { itss: '商談中', perm: '契約中', dsl: '未接触' },
    deptActivity: [
      { dept: 'ITSS', deals: 5, jobs: 4, lastContact: '2025/3/5'  },
      { dept: 'PERM', deals: 5, jobs: 4, lastContact: '2025/2/28' },
      { dept: 'DSL',  deals: 0, jobs: 0, lastContact: '—'         },
    ],
    whitelist: [
      { dept: 'プロダクト開発本部',   contacted: true,  jobAcquired: true,  contacts: [{ name: '渡辺 VPoE', role: 'VPoE' }, { name: '島田 光', role: '部長' }, { name: '工藤 翼', role: 'テックリード' }] },
      { dept: 'SaaS事業推進部',       contacted: true,  jobAcquired: true,  contacts: [{ name: '山口 SRE部長', role: '部長' }, { name: '柴田 和也', role: '課長' }] },
      { dept: '人事企画部',           contacted: true,  jobAcquired: true,  contacts: [{ name: '加藤 CHRO', role: 'CHRO' }, { name: '土井 美紀', role: '課長' }] },
      { dept: 'データサイエンス部',   contacted: true,  jobAcquired: false, contacts: [{ name: '奥村 太一', role: '部長' }, { name: '増田 理沙', role: 'データサイエンティスト' }] },
      { dept: 'インフラ運用部',       contacted: false, jobAcquired: false, contacts: [{ name: '黒田 修', role: '部長' }] },
    ],
    deals: [
      { id: 61, name: 'プロダクト開発本部 バックエンド刷新PJ',    dept: 'ITSS', lastMeeting: '2025/3/5',  remainingTasks: 2, status: '実施済' },
      { id: 62, name: 'プロダクト開発本部 フロントエンド強化',     dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 1, status: '実施済' },
      { id: 63, name: 'SaaS事業推進部 SRE人材支援',               dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 0, status: '完了'   },
      { id: 64, name: '人事企画部 エンジニア採用強化PJ',           dept: 'PERM', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 65, name: '人事企画部 ハイクラスエンジニア採用',       dept: 'PERM', lastMeeting: '2025/2/15', remainingTasks: 1, status: '実施済' },
      { id: 66, name: 'データサイエンス部 ML基盤エンジニア支援',   dept: 'ITSS', lastMeeting: '2025/2/10', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '佐藤 次郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
    ],
  },

  8: {
    info: { tier: 'Enterprise', category: 'Web系', grossProfit: 24600000, lastDealDate: '2025/3/10' },
    contractStatus: { itss: '契約中', perm: '商談中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 6, jobs: 5, lastContact: '2025/3/10' },
      { dept: 'PERM', deals: 2, jobs: 1, lastContact: '2025/2/20' },
      { dept: 'DSL',  deals: 2, jobs: 2, lastContact: '2025/3/1'  },
    ],
    whitelist: [
      { dept: 'コマース開発本部',     contacted: true,  jobAcquired: true,  contacts: [{ name: '井上 CTO', role: 'CTO' }, { name: '森 部長', role: '部長' }, { name: '石川 瞬', role: 'テックリード' }] },
      { dept: 'フィンテック事業部',   contacted: true,  jobAcquired: true,  contacts: [{ name: '橋本 部長', role: '部長' }, { name: '服部 亮', role: '課長' }] },
      { dept: 'モバイル事業部',       contacted: true,  jobAcquired: true,  contacts: [{ name: '尾崎 隼人', role: '部長' }, { name: '菊地 陽介', role: 'テックリード' }] },
      { dept: 'AI推進室',             contacted: true,  jobAcquired: false, contacts: [{ name: '大西 室長', role: '室長' }, { name: '野口 翔', role: '主任研究員' }] },
      { dept: 'グローバル開発部',     contacted: false, jobAcquired: false, contacts: [{ name: '権田 英二', role: '部長' }] },
      { dept: '人事本部',             contacted: true,  jobAcquired: true,  contacts: [{ name: '吉田 CHRO', role: 'CHRO' }, { name: '青木 恵子', role: '課長' }, { name: '白石 亮太', role: '主任' }] },
    ],
    deals: [
      { id: 67, name: 'コマース開発本部 マイクロサービス化PJ',     dept: 'ITSS', lastMeeting: '2025/3/10', remainingTasks: 2, status: '実施済' },
      { id: 68, name: 'コマース開発本部 パフォーマンス改善PJ',     dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
      { id: 69, name: 'フィンテック事業部 決済基盤刷新',           dept: 'ITSS', lastMeeting: '2025/3/5',  remainingTasks: 2, status: '実施済' },
      { id: 70, name: 'フィンテック事業部 ブロックチェーン検証PJ', dept: 'DSL',  lastMeeting: '2025/3/1',  remainingTasks: 1, status: '実施済' },
      { id: 71, name: 'モバイル事業部 Flutter開発人材支援',         dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 0, status: '完了'   },
      { id: 72, name: 'AI推進室 レコメンドエンジン開発',           dept: 'DSL',  lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 73, name: '人事本部 テックリード採用支援',             dept: 'PERM', lastMeeting: '2025/2/20', remainingTasks: 1, status: '実施済' },
      { id: 74, name: 'コマース開発本部 データパイプライン構築',   dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '佐藤 次郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
    ],
  },

  9: {
    info: { tier: 'Enterprise', category: 'SES派遣', grossProfit: 31200000, lastDealDate: '2025/3/3' },
    contractStatus: { itss: '契約中', perm: '未接触', dsl: '契約中' },
    deptActivity: [
      { dept: 'ITSS', deals: 7, jobs: 5, lastContact: '2025/3/3'  },
      { dept: 'PERM', deals: 0, jobs: 0, lastContact: '—'         },
      { dept: 'DSL',  deals: 5, jobs: 4, lastContact: '2025/2/28' },
    ],
    whitelist: [
      { dept: 'ネットワーク技術本部',       contacted: true,  jobAcquired: true,  contacts: [{ name: '松本 本部長', role: '本部長' }, { name: '望月 孝', role: '部長' }, { name: '清水 雄太', role: '課長' }] },
      { dept: '5G/6G推進室',                contacted: true,  jobAcquired: true,  contacts: [{ name: '藤田 室長', role: '室長' }, { name: '市川 亮介', role: '主任研究員' }] },
      { dept: 'DX推進本部',                 contacted: true,  jobAcquired: true,  contacts: [{ name: '高田 本部長', role: '本部長' }, { name: '梅田 健司', role: '部長' }] },
      { dept: 'プラットフォーム開発部',     contacted: true,  jobAcquired: false, contacts: [{ name: '平田 部長', role: '部長' }, { name: '笠原 拓也', role: '課長' }] },
      { dept: 'セキュリティ統括部',         contacted: true,  jobAcquired: false, contacts: [{ name: '三浦 CISO', role: 'CISO' }, { name: '金子 真司', role: '部長' }] },
      { dept: 'グローバル事業企画部',       contacted: false, jobAcquired: false, contacts: [{ name: '沢田 英明', role: '部長' }] },
    ],
    deals: [
      { id: 75, name: 'ネットワーク技術本部 5G基盤開発PJ',         dept: 'ITSS', lastMeeting: '2025/3/3',  remainingTasks: 2, status: '実施済' },
      { id: 76, name: 'ネットワーク技術本部 ネットワーク自動化',   dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 1, status: '実施済' },
      { id: 77, name: '5G/6G推進室 エッジコンピューティング開発',  dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 78, name: '5G/6G推進室 次世代通信プロトコル研究',      dept: 'DSL',  lastMeeting: '2025/2/15', remainingTasks: 1, status: '実施済' },
      { id: 79, name: 'DX推進本部 顧客基盤システム刷新',           dept: 'DSL',  lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 80, name: 'DX推進本部 データ分析基盤構築',             dept: 'DSL',  lastMeeting: '2025/2/10', remainingTasks: 0, status: '完了'   },
      { id: 81, name: 'プラットフォーム開発部 APIプラットフォーム構築', dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
      { id: 82, name: 'セキュリティ統括部 SOC構築支援',            dept: 'ITSS', lastMeeting: '2025/2/18', remainingTasks: 2, status: '実施済' },
    ],
    assignees: [
      { name: '鈴木 一郎', role: 'ITSS担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '佐藤 次郎', role: 'ITSS副担当'},
    ],
  },

  10: {
    info: { tier: 'Enterprise', category: 'SES派遣', grossProfit: 26400000, lastDealDate: '2025/3/12' },
    contractStatus: { itss: '商談中', perm: '契約中', dsl: '商談中' },
    deptActivity: [
      { dept: 'ITSS', deals: 5, jobs: 4, lastContact: '2025/3/12' },
      { dept: 'PERM', deals: 4, jobs: 3, lastContact: '2025/3/5'  },
      { dept: 'DSL',  deals: 4, jobs: 3, lastContact: '2025/3/1'  },
    ],
    whitelist: [
      { dept: 'R&D本部',               contacted: true,  jobAcquired: true,  contacts: [{ name: '村上 本部長', role: '本部長' }, { name: '荒木 俊哉', role: '部長' }, { name: '松岡 理', role: '主任研究員' }] },
      { dept: 'ゲーム&ネットワークサービス部', contacted: true, jobAcquired: true, contacts: [{ name: '田村 部長', role: '部長' }, { name: '神田 翔平', role: 'テックリード' }] },
      { dept: '半導体事業部',           contacted: true,  jobAcquired: true,  contacts: [{ name: '原田 部長', role: '部長' }, { name: '長島 誠一', role: '課長' }] },
      { dept: '人事部',                 contacted: true,  jobAcquired: true,  contacts: [{ name: '清水 人事部長', role: '部長' }, { name: '土屋 美咲', role: '課長' }, { name: '早川 翼', role: '主任' }] },
      { dept: 'AIロボティクス研究所',   contacted: true,  jobAcquired: false, contacts: [{ name: '山下 所長', role: '所長' }, { name: '千葉 裕太', role: '主任研究員' }] },
      { dept: 'エンタテインメント本部', contacted: false, jobAcquired: false, contacts: [{ name: '谷口 剛志', role: '本部長' }] },
    ],
    deals: [
      { id: 83, name: 'R&D本部 画像処理エンジン開発PJ',              dept: 'ITSS', lastMeeting: '2025/3/12', remainingTasks: 2, status: '実施済' },
      { id: 84, name: 'R&D本部 量子コンピューティング研究支援',      dept: 'DSL',  lastMeeting: '2025/3/1',  remainingTasks: 1, status: '実施済' },
      { id: 85, name: 'ゲーム&ネットワークサービス部 バックエンド強化PJ', dept: 'ITSS', lastMeeting: '2025/3/5', remainingTasks: 2, status: '実施済' },
      { id: 86, name: 'ゲーム&ネットワークサービス部 リアルタイム通信基盤', dept: 'ITSS', lastMeeting: '2025/2/25', remainingTasks: 1, status: '実施済' },
      { id: 87, name: '半導体事業部 EDA設計エンジニア支援',           dept: 'ITSS', lastMeeting: '2025/2/20', remainingTasks: 0, status: '完了'   },
      { id: 88, name: '半導体事業部 検証自動化PJ',                    dept: 'DSL',  lastMeeting: '2025/2/15', remainingTasks: 2, status: '実施済' },
      { id: 89, name: '人事部 エンジニア中途採用強化',                dept: 'PERM', lastMeeting: '2025/3/5',  remainingTasks: 1, status: '実施済' },
      { id: 90, name: '人事部 AI研究者ヘッドハンティング',            dept: 'PERM', lastMeeting: '2025/2/25', remainingTasks: 2, status: '実施済' },
      { id: 91, name: 'AIロボティクス研究所 自律制御エンジニア支援',  dept: 'ITSS', lastMeeting: '2025/2/28', remainingTasks: 2, status: '実施済' },
      { id: 92, name: 'R&D本部 コンピュータビジョン研究強化',        dept: 'DSL',  lastMeeting: '2025/2/18', remainingTasks: 1, status: '実施済' },
    ],
    assignees: [
      { name: '佐藤 次郎', role: 'ITSS担当' },
      { name: '田中 花子', role: 'PERM担当' },
      { name: '山本 三郎', role: 'DSL担当'  },
      { name: '鈴木 一郎', role: 'ITSS副担当'},
    ],
  },
}

export const DEALS = [
  // NTTデータ
  { id: 1,  name: '初回商談（社長・人事部長）',                  companyId: 1, company: 'NTTデータ',   assignee: '伊藤 美咲', dept: 'FS',   lastMeeting: '2024/10/5',   status: '完了'   },
  { id: 2,  name: '製造事業部 レガシーマイグレーションPJ',       companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/10',   status: '実施済' },
  { id: 3,  name: '製造事業部 フェーズ2 クラウド移行',           companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/28',   status: '実施済' },
  { id: 4,  name: '製造事業部 IoTプラットフォーム構築',          companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/1/20',   status: '実施済' },
  { id: 5,  name: 'IoT基盤 セキュリティ強化PJ',                 companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',    status: '実施済' },
  { id: 32, name: 'IoT基盤 監視・運用自動化PJ',                 companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/8',    status: '実施済' },
  { id: 6,  name: 'DX推進室 スマートファクトリーPJ',             companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'FS',   lastMeeting: '2025/3/8',    status: '実施済' },
  { id: 7,  name: 'DX推進室 AI品質検査PJ',                      companyId: 1, company: 'NTTデータ',   assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/15',   status: '実施済' },
  { id: 33, name: 'DX推進室 デジタルツイン基盤',                 companyId: 1, company: 'NTTデータ',   assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/3/3',    status: '実施済' },
  { id: 8,  name: '金融ソリューション部 基幹刷新',               companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30',   status: '完了'   },
  { id: 34, name: '金融ソリューション部 APIゲートウェイ構築',    companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20',   status: '実施済' },
  { id: 9,  name: '人事部 採用DX支援',                           companyId: 1, company: 'NTTデータ',   assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/5',    status: '実施済' },
  { id: 35, name: 'クラウド推進本部 マルチクラウド戦略支援',     companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/25',   status: '実施済' },
  { id: 36, name: 'IT推進部 DevOps推進PJ',                      companyId: 1, company: 'NTTデータ',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/10',   status: '実施済' },
  // 富士通
  { id: 10, name: 'HR部門 採用強化PJ',                           companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/12', status: '予定'   },
  { id: 11, name: 'HR部門 エグゼクティブ採用',                   companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 15, name: 'HR部門 新卒採用強化',                         companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/1/15', status: '完了'   },
  { id: 37, name: 'HR部門 グローバル人材採用',                   companyId: 2, company: '富士通', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 12, name: 'ITインフラ部 基盤刷新支援',                   companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 13, name: 'ITインフラ部 クラウドリフト',                 companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '完了'   },
  { id: 14, name: 'デジタル推進部 DX人材支援',                   companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/12', status: '実施済' },
  { id: 38, name: 'デジタル推進部 AI/MLエンジニア支援',          companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 39, name: 'サービス事業部 SREエンジニア支援',            companyId: 2, company: '富士通', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  // ノースサンド
  { id: 16, name: 'ERP推進部 SAP人材支援',                       companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/10', status: '完了' },
  { id: 17, name: 'ERP推進部 SAP追加支援',                       companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/11/20', status: '完了' },
  { id: 40, name: 'ERP推進部 SAP BTP対応支援',                   companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/15',  status: '完了' },
  { id: 18, name: 'PMO部門 PJ管理人材',                          companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2024/11/28', status: '完了' },
  { id: 19, name: 'PMO部門 シニアPM採用',                        companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2024/10/15', status: '完了' },
  { id: 41, name: 'PMO部門 アジャイルコーチ採用',                companyId: 3, company: 'ノースサンド', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/1/10',  status: '完了' },
  { id: 20, name: 'SAP専門チーム ABAP開発者追加',                companyId: 3, company: 'ノースサンド', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/5',  status: '完了' },
  { id: 42, name: 'BPR推進部 業務改革コンサル支援',              companyId: 3, company: 'ノースサンド', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/1/10',  status: '実施済' },
  // Sansan
  { id: 21, name: 'エンジニアリング本部 開発人材支援',           companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 22, name: 'エンジニアリング本部 Goエンジニア追加',       companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/5',  status: '実施済' },
  { id: 43, name: 'エンジニアリング本部 フロントエンド強化',     companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 23, name: 'プロダクト部門 PdM人材支援',                  companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/1/20', status: '実施済' },
  { id: 44, name: 'プロダクト部門 デザインエンジニア採用',       companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
  { id: 45, name: 'データ基盤部 データエンジニア支援',           companyId: 4, company: 'Sansan', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  // トヨタ自動車
  { id: 24, name: 'デジタル推進本部 基幹刷新',                   companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/28', status: '実施済' },
  { id: 25, name: 'デジタル推進本部 SAP移行フェーズ2',            companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/10', status: '実施済' },
  { id: 26, name: 'デジタル推進本部 データ基盤構築',              companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/1/25', status: '完了'   },
  { id: 46, name: 'デジタル推進本部 グローバルERP展開',           companyId: 5, company: 'トヨタ自動車', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/20', status: '実施済' },
  { id: 27, name: '生産技術部 組込みエンジニア支援',              companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 28, name: '生産技術部 RustエンジニアPJ',                 companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30', status: '実施済' },
  { id: 47, name: '生産技術部 FPGAエンジニア支援',               companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 29, name: '情報システム部 レガシー移行支援',              companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/1/30', status: '完了'   },
  { id: 30, name: '情報システム部 JAVA/Kotlin刷新',               companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2024/12/20', status: '完了'  },
  { id: 48, name: '情報システム部 マイクロサービス移行',          companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 31, name: 'コネクティッド部門 車載ソフトウェア支援',      companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 49, name: 'コネクティッド部門 OTA更新基盤PJ',            companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 50, name: 'AI研究所 自動運転AI人材支援',                 companyId: 5, company: 'トヨタ自動車', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
  // 日立製作所
  { id: 51, name: 'システム統括本部 基幹系モダナイゼーションPJ',    companyId: 6, company: '日立製作所', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/8',  status: '実施済' },
  { id: 52, name: 'システム統括本部 クラウドネイティブ移行',         companyId: 6, company: '日立製作所', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 53, name: 'Lumada事業部 IoTプラットフォーム開発',            companyId: 6, company: '日立製作所', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 54, name: 'Lumada事業部 AI分析基盤構築',                     companyId: 6, company: '日立製作所', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/28', status: '実施済' },
  { id: 55, name: 'デジタルエンジニアリング部 DevOps導入支援',       companyId: 6, company: '日立製作所', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '完了'   },
  { id: 56, name: 'デジタルエンジニアリング部 SRE体制構築',          companyId: 6, company: '日立製作所', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 57, name: '人財統括本部 DX人材採用支援',                     companyId: 6, company: '日立製作所', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 58, name: '人財統括本部 エグゼクティブサーチ',               companyId: 6, company: '日立製作所', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 59, name: 'クラウドサービス部 マネージドサービス人材支援',   companyId: 6, company: '日立製作所', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
  { id: 60, name: 'Lumada事業部 データマネジメント戦略策定',         companyId: 6, company: '日立製作所', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/18', status: '実施済' },
  // リクルート
  { id: 61, name: 'プロダクト開発本部 バックエンド刷新PJ',           companyId: 7, company: 'リクルート', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 62, name: 'プロダクト開発本部 フロントエンド強化',            companyId: 7, company: 'リクルート', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 63, name: 'SaaS事業推進部 SRE人材支援',                      companyId: 7, company: 'リクルート', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '完了'   },
  { id: 64, name: '人事企画部 エンジニア採用強化PJ',                  companyId: 7, company: 'リクルート', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 65, name: '人事企画部 ハイクラスエンジニア採用',              companyId: 7, company: 'リクルート', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/15', status: '実施済' },
  { id: 66, name: 'データサイエンス部 ML基盤エンジニア支援',          companyId: 7, company: 'リクルート', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/10', status: '実施済' },
  // 楽天グループ
  { id: 67, name: 'コマース開発本部 マイクロサービス化PJ',            companyId: 8, company: '楽天グループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/10', status: '実施済' },
  { id: 68, name: 'コマース開発本部 パフォーマンス改善PJ',            companyId: 8, company: '楽天グループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 69, name: 'フィンテック事業部 決済基盤刷新',                  companyId: 8, company: '楽天グループ', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 70, name: 'フィンテック事業部 ブロックチェーン検証PJ',        companyId: 8, company: '楽天グループ', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 71, name: 'モバイル事業部 Flutter開発人材支援',                companyId: 8, company: '楽天グループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '完了'   },
  { id: 72, name: 'AI推進室 レコメンドエンジン開発',                  companyId: 8, company: '楽天グループ', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/15', status: '実施済' },
  { id: 73, name: '人事本部 テックリード採用支援',                    companyId: 8, company: '楽天グループ', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 74, name: 'コマース開発本部 データパイプライン構築',          companyId: 8, company: '楽天グループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '実施済' },
  // KDDI
  { id: 75, name: 'ネットワーク技術本部 5G基盤開発PJ',                companyId: 9, company: 'KDDI', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/3',  status: '実施済' },
  { id: 76, name: 'ネットワーク技術本部 ネットワーク自動化',          companyId: 9, company: 'KDDI', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '実施済' },
  { id: 77, name: '5G/6G推進室 エッジコンピューティング開発',         companyId: 9, company: 'KDDI', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 78, name: '5G/6G推進室 次世代通信プロトコル研究',             companyId: 9, company: 'KDDI', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/15', status: '実施済' },
  { id: 79, name: 'DX推進本部 顧客基盤システム刷新',                  companyId: 9, company: 'KDDI', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/28', status: '実施済' },
  { id: 80, name: 'DX推進本部 データ分析基盤構築',                    companyId: 9, company: 'KDDI', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/10', status: '完了'   },
  { id: 81, name: 'プラットフォーム開発部 APIプラットフォーム構築',   companyId: 9, company: 'KDDI', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 82, name: 'セキュリティ統括部 SOC構築支援',                   companyId: 9, company: 'KDDI', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/18', status: '実施済' },
  // ソニーグループ
  { id: 83, name: 'R&D本部 画像処理エンジン開発PJ',                   companyId: 10, company: 'ソニーグループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/12', status: '実施済' },
  { id: 84, name: 'R&D本部 量子コンピューティング研究支援',           companyId: 10, company: 'ソニーグループ', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 85, name: 'ゲーム&ネットワークサービス部 バックエンド強化PJ', companyId: 10, company: 'ソニーグループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 86, name: 'ゲーム&ネットワークサービス部 リアルタイム通信基盤', companyId: 10, company: 'ソニーグループ', assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 87, name: '半導体事業部 EDA設計エンジニア支援',                companyId: 10, company: 'ソニーグループ', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/20', status: '完了'   },
  { id: 88, name: '半導体事業部 検証自動化PJ',                         companyId: 10, company: 'ソニーグループ', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/15', status: '実施済' },
  { id: 89, name: '人事部 エンジニア中途採用強化',                     companyId: 10, company: 'ソニーグループ', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 90, name: '人事部 AI研究者ヘッドハンティング',                 companyId: 10, company: 'ソニーグループ', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/2/25', status: '実施済' },
  { id: 91, name: 'AIロボティクス研究所 自律制御エンジニア支援',       companyId: 10, company: 'ソニーグループ', assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/2/28', status: '実施済' },
  { id: 92, name: 'R&D本部 コンピュータビジョン研究強化',             companyId: 10, company: 'ソニーグループ', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/18', status: '実施済' },
  // 追加分（既存企業）
  { id: 93, name: '製造事業部 AI外観検査PJ',                  companyId: 1, company: 'NTTデータ',   assignee: '鈴木 一郎', dept: 'ITSS', lastMeeting: '2025/3/8',  status: '実施済' },
  { id: 94, name: 'デジタル推進部 データメッシュ導入PJ',      companyId: 2, company: '富士通',       assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/10', status: '予定'   },
  { id: 95, name: '戦略企画部 IT戦略コンサル支援',            companyId: 3, company: 'ノースサンド', assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/2/28', status: '実施済' },
  { id: 96, name: 'セキュリティ部門 脆弱性診断エンジニア支援', companyId: 4, company: 'Sansan',       assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 97, name: 'HR・人事部 タレントマネジメント導入PJ',    companyId: 5, company: 'トヨタ自動車', assignee: '田中 花子', dept: 'PERM', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 98, name: 'AI&データサイエンス部 MLOps基盤構築',      companyId: 6, company: '日立製作所',   assignee: '山本 三郎', dept: 'DSL',  lastMeeting: '2025/3/5',  status: '実施済' },
  { id: 99, name: 'インフラ運用部 クラウド移行支援PJ',        companyId: 7, company: 'リクルート',   assignee: '佐藤 次郎', dept: 'ITSS', lastMeeting: '2025/3/1',  status: '実施済' },
  { id: 100, name: 'グローバル開発部 オフショア開発体制構築',  companyId: 8, company: '楽天グループ', assignee: '伊藤 美咲', dept: 'FS',   lastMeeting: '2025/3/8',  status: '実施済' },
]

export const DEAL_DETAILS = {
  1: {
    basicInfo: { company: 'NTTデータ', dept: '（全社）', clientPerson: '佐々木 代表取締役社長、山田 人事部長', ourPerson: '伊藤 美咲', businessDept: 'FS', channel: 'toBマーケ', acquiredBy: '伊藤 美咲', status: '完了' },
    tree: { parent: null, current: '初回商談（社長・人事部長）', next: null, branches: ['製造事業部 レガシーマイグレーションPJ', 'DX推進室 スマートファクトリーPJ', '金融ソリューション部 基幹刷新', '人事部 採用DX支援', 'クラウド推進本部 マルチクラウド戦略支援'] },
    meetings: [
      { round: 2, date: '2024/10/5',  attendees: '佐々木社長、山田部長、伊藤', content: '経営課題の深掘り。製造・金融・HR各領域でのDX推進ニーズを確認。各部門責任者への紹介を取り付ける。' },
      { round: 1, date: '2024/9/15',  attendees: '佐々木社長、伊藤',           content: 'toBマーケ経由の初訪問。2030年問題に向けたレガシー刷新と人材確保が最優先課題。' },
    ],
    tasks: [
      { status: 'done', name: '初回商談 議事録作成', due: '2024/10/10', assignee: '伊藤 美咲' },
    ],
    jobs: [
      { title: '各部門 DXエンジニア（初回商談経由）', count: 5, date: '2024/10/5', dept: 'FS' },
    ],
  },

  2: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部', clientPerson: '山田 康介 部長', ourPerson: '鈴木 一郎、田中 花子', businessDept: 'ITSS', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: '製造事業部 レガシーマイグレーションPJ', next: null, branches: ['製造事業部 フェーズ2 クラウド移行', '製造事業部 IoTプラットフォーム構築'] },
    meetings: [
      { round: 4, date: '2025/3/10',  attendees: '山田部長、佐藤課長、鈴木、田中', content: 'PoC結果報告。移行成功率98%確認。フェーズ2への移行を正式承認。COBOLエンジニア3名の継続稼働が決定。' },
      { round: 3, date: '2025/2/10',  attendees: '山田部長、鈴木',               content: 'PoC中間報告。COBOLからJavaへの変換精度を確認。業務ロジックの複雑な部分の扱いを議論。' },
      { round: 2, date: '2025/1/15',  attendees: '山田部長、鈴木',               content: '移行コスト・スケジュールの概算提示。PoCへの合意を得る。' },
      { round: 1, date: '2024/11/20', attendees: '山田部長',                     content: '初回訪問。40年以上稼働のCOBOL基幹システム刷新が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'COBOLエンジニア追加候補者ピック', due: '2025/3/10', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'フェーズ2提案資料作成',           due: '2025/3/20', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'COBOLエンジニア（継続）', count: 3, date: '2025/3/10', dept: 'ITSS' },
      { title: 'Javaアーキテクト',        count: 1, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  3: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部', clientPerson: '山田 康介 部長、佐藤 技術課長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '製造事業部 レガシーマイグレーションPJ', current: '製造事業部 フェーズ2 クラウド移行', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2025/2/28', attendees: '山田部長、佐藤課長、鈴木', content: 'AWSアーキテクチャ設計書レビュー。マイクロサービス化の優先順位確定。4月からの本格移行に合意。' },
      { round: 2, date: '2025/2/5',  attendees: '山田部長、鈴木',           content: 'クラウド移行ロードマップ提示。コンテナ化対応が必須と判明。' },
      { round: 1, date: '2025/1/20', attendees: '佐藤課長、鈴木',           content: 'フェーズ1完了を受けた追加商談。クラウドネイティブ化のニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'AWSエンジニア候補者提出（5名）', due: '2025/3/15', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'コンテナ専門家スカウト',          due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '契約書ドラフト送付',               due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'AWSアーキテクト',          count: 2, date: '2025/2/28', dept: 'ITSS' },
      { title: 'Kubernetes/Dockerエンジニア', count: 3, date: '2025/2/28', dept: 'ITSS' },
    ],
  },

  4: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 IoT推進チーム', clientPerson: '山田 康介 部長、木村 IoTリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 レガシーマイグレーションPJ', current: '製造事業部 IoTプラットフォーム構築', next: null, branches: ['IoT基盤 セキュリティ強化PJ', 'IoT基盤 監視・運用自動化PJ'] },
    meetings: [
      { round: 3, date: '2025/1/20', attendees: '木村リーダー、佐藤', content: 'IoTプラットフォーム要件確定。Python/RustエンジニアとAWS IoT専門家の組み合わせが必要。3名体制で4月稼働。' },
      { round: 2, date: '2024/12/20', attendees: '木村リーダー、佐藤', content: '技術スタック確認。AWSベースのIoTプラットフォームにRustで高速処理を実装する方針確定。' },
      { round: 1, date: '2024/12/5',  attendees: '山田部長、木村リーダー、佐藤', content: '山田部長の紹介で初対面。スマート工場向けIoT基盤構築PJの人材ニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'IoT/Rustエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'IoT/Pythonエンジニア', count: 2, date: '2025/1/20', dept: 'ITSS' },
      { title: 'AWS IoT専門家',        count: 1, date: '2025/1/20', dept: 'ITSS' },
    ],
  },

  5: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 セキュリティチーム', clientPerson: '木村 IoTリーダー、高木 セキュリティ担当', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 IoTプラットフォーム構築', current: 'IoT基盤 セキュリティ強化PJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/5',  attendees: '高木担当、佐藤', content: 'ゼロトラスト対応のセキュリティエンジニアが必要。CISSP保有者が望ましい。' },
      { round: 1, date: '2025/2/15', attendees: '木村リーダー、高木担当、佐藤', content: 'IoTプラットフォーム稼働後のセキュリティ強化ニーズ。専門家の追加支援を依頼される。' },
    ],
    tasks: [
      { status: 'pending', name: 'CISSPセキュリティエンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '提案書作成',                           due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'セキュリティエンジニア（CISSP）', count: 2, date: '2025/3/5', dept: 'ITSS' },
    ],
  },

  32: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 運用チーム', clientPerson: '木村 IoTリーダー、岡本 運用担当', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '製造事業部 IoTプラットフォーム構築', current: 'IoT基盤 監視・運用自動化PJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/8',  attendees: '岡本担当、佐藤', content: 'Prometheus/Grafanaによる監視基盤構築の要件確認。SREエンジニア2名での対応を提案。' },
      { round: 1, date: '2025/2/25', attendees: '木村リーダー、岡本、佐藤', content: 'セキュリティ強化PJから派生。IoT基盤の監視・運用自動化ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'SRE/監視基盤エンジニア候補提出', due: '2025/3/25', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'SRE/Prometheus専門家', count: 2, date: '2025/3/8', dept: 'ITSS' },
    ],
  },

  6: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室', clientPerson: '石田 隆 室長', ourPerson: '鈴木 一郎', businessDept: 'FS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: 'DX推進室 スマートファクトリーPJ', next: null, branches: ['DX推進室 AI品質検査PJ', 'DX推進室 デジタルツイン基盤'] },
    meetings: [
      { round: 3, date: '2025/3/8',  attendees: '石田室長、鈴木', content: 'IoT/Pythonエンジニア2名の参画内定。4月より要件定義フェーズ開始。AI品質検査の追加ニーズも相談受ける。' },
      { round: 2, date: '2025/2/12', attendees: '石田室長、鈴木', content: 'スマートファクトリー向け人材要件の詳細確認。Python/TensorFlowの経験者が必須。' },
      { round: 1, date: '2025/1/25', attendees: '石田室長',       content: '山田部長の紹介で初訪問。生産ライン自動化PJでIoT・AI人材が不足。' },
    ],
    tasks: [
      { status: 'pending', name: 'IoTエンジニア候補者最終調整', due: '2025/3/20', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'IoT/Pythonエンジニア',    count: 2, date: '2025/3/8',  dept: 'ITSS' },
      { title: 'TensorFlow MLエンジニア', count: 1, date: '2025/2/12', dept: 'ITSS' },
    ],
  },

  7: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室 AI推進チーム', clientPerson: '石田 隆 室長、西村 AIリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'DX推進室 スマートファクトリーPJ', current: 'DX推進室 AI品質検査PJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '西村リーダー、山本', content: 'AI品質検査システムの要件確認。画像認識とリアルタイム処理の専門家が必要。コンサル上流支援も求められる。' },
      { round: 1, date: '2025/1/30', attendees: '石田室長、西村リーダー、山本', content: 'スマートファクトリーPJから派生。AI活用による品質検査自動化のコンサルニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'AI品質検査コンサル候補者提出', due: '2025/3/15', assignee: '山本 三郎' },
      { status: 'pending', name: '提案資料（AI品質検査）作成',   due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'AIコンサルタント（画像認識）', count: 1, date: '2025/2/15', dept: 'DSL' },
      { title: 'MLエンジニア（リアルタイム）', count: 2, date: '2025/2/15', dept: 'DSL' },
    ],
  },

  33: {
    basicInfo: { company: 'NTTデータ', dept: 'DX推進室 デジタルイノベーションチーム', clientPerson: '石田 室長、中西 DXリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'DX推進室 スマートファクトリーPJ', current: 'DX推進室 デジタルツイン基盤', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/3',  attendees: '中西リーダー、山本', content: 'デジタルツイン構築のためのシミュレーションエンジニアとUnityエンジニアが必要。工場の3Dモデル化が目標。' },
      { round: 1, date: '2025/2/18', attendees: '石田室長、中西リーダー、山本', content: 'AI品質検査PJから派生した追加商談。製造ラインのデジタルツイン化構想をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'デジタルツイン/Unityエンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
      { status: 'pending', name: 'シミュレーション専門家アプローチ',       due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'Unityエンジニア（デジタルツイン）', count: 2, date: '2025/3/3', dept: 'DSL' },
      { title: 'シミュレーションエンジニア',         count: 1, date: '2025/3/3', dept: 'DSL' },
    ],
  },

  8: {
    basicInfo: { company: 'NTTデータ', dept: '金融ソリューション部', clientPerson: '中川 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: '初回商談（社長・人事部長）', current: '金融ソリューション部 基幹刷新', next: null, branches: ['金融ソリューション部 APIゲートウェイ構築'] },
    meetings: [
      { round: 4, date: '2025/1/30',  attendees: '中川部長、鈴木', content: '成約。COBOLエンジニア2名・Javaエンジニア3名の参画確定。2月より稼働開始。' },
      { round: 3, date: '2025/1/10',  attendees: '中川部長、鈴木', content: 'スキルシートレビュー完了。3名を先方に推薦。最終面接を調整中。' },
      { round: 2, date: '2024/12/10', attendees: '中川部長、鈴木', content: '要件詳細確認。金融系COBOLの経験が必須。FISCガイドライン対応の知識も求められる。' },
      { round: 1, date: '2024/11/25', attendees: '中川部長',       content: '山田部長紹介で初訪問。勘定系システムの段階的刷新PJで5名規模の体制が必要。' },
    ],
    tasks: [
      { status: 'done', name: '基幹刷新 最終レポート提出', due: '2025/2/5', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: '金融系COBOLエンジニア', count: 2, date: '2025/1/30', dept: 'ITSS' },
      { title: 'Javaエンジニア（金融）', count: 3, date: '2025/1/30', dept: 'ITSS' },
    ],
  },

  34: {
    basicInfo: { company: 'NTTデータ', dept: '金融ソリューション部 API推進チーム', clientPerson: '中川 部長、村田 APIリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: '金融ソリューション部 基幹刷新', current: '金融ソリューション部 APIゲートウェイ構築', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '村田リーダー、佐藤', content: 'APIゲートウェイの設計要件確認。Kong/AWS API GatewayのいずれかでOpen Banking対応が必要。' },
      { round: 1, date: '2025/2/5',  attendees: '中川部長、村田リーダー、佐藤', content: '基幹刷新PJ完了に伴う追加案件。Open Banking対応のAPIゲートウェイ構築の人材ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'APIゲートウェイ専門家候補者提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'APIゲートウェイエンジニア（Kong）', count: 2, date: '2025/2/20', dept: 'ITSS' },
    ],
  },

  9: {
    basicInfo: { company: 'NTTデータ', dept: '人事部', clientPerson: '山田 人事部長、林 採用担当', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: '人事部 採用DX支援', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2025/3/5',  attendees: '林採用担当、田中', content: 'クラウドエンジニア・AIエンジニアを正社員で5名採用したいとのこと。スカウト媒体の活用も提案。' },
      { round: 2, date: '2025/2/18', attendees: '山田部長、林担当、田中', content: 'PERM採用DX支援の方向性確認。エンジニア採用に特化したサービスの提案を受け入れてもらえた。' },
      { round: 1, date: '2025/2/5',  attendees: '山田部長、田中', content: 'ITエンジニアの採用難が深刻化。紹介採用も検討中。' },
    ],
    tasks: [
      { status: 'pending', name: 'クラウドエンジニア正社員候補スカウト', due: '2025/3/18', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'クラウドエンジニア（正社員）', count: 3, date: '2025/3/5', dept: 'PERM' },
      { title: 'AIエンジニア（正社員）',       count: 2, date: '2025/3/5', dept: 'PERM' },
    ],
  },

  35: {
    basicInfo: { company: 'NTTデータ', dept: 'クラウド推進本部', clientPerson: '前田 本部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '初回商談（社長・人事部長）', current: 'クラウド推進本部 マルチクラウド戦略支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/25', attendees: '前田本部長、鈴木', content: 'AWS/Azure/GCPを横断するマルチクラウドアーキテクト2名の参画が必要。FinOps経験者も求めている。' },
      { round: 1, date: '2025/2/10', attendees: '前田本部長',       content: '山田部長の紹介で初訪問。マルチクラウド戦略推進のための専門人材が不足。' },
    ],
    tasks: [
      { status: 'pending', name: 'マルチクラウドアーキテクト候補提出', due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'マルチクラウドアーキテクト', count: 2, date: '2025/2/25', dept: 'ITSS' },
      { title: 'FinOpsエンジニア',           count: 1, date: '2025/2/25', dept: 'ITSS' },
    ],
  },

  36: {
    basicInfo: { company: 'NTTデータ', dept: 'IT推進部', clientPerson: '橋本 IT推進部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'IT推進部 DevOps推進PJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '橋本部長、佐藤', content: 'DevOps推進のためのSRE・DevOpsエンジニア2名の参画が必要。CI/CDパイプライン構築経験者が必須。' },
      { round: 1, date: '2025/1/28', attendees: '橋本部長',       content: '前田本部長の紹介で訪問。開発と運用の分断が課題でDevOps文化の浸透を推進したい。' },
    ],
    tasks: [
      { status: 'pending', name: 'DevOps/SREエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'DevOpsエンジニア（CI/CD）', count: 2, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  10: {
    basicInfo: { company: '富士通', dept: 'HR部門', clientPerson: '中村 由美 部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '予定' },
    tree: { parent: null, current: 'HR部門 採用強化PJ', next: null, branches: ['HR部門 エグゼクティブ採用', 'HR部門 新卒採用強化', 'HR部門 グローバル人材採用'] },
    meetings: [
      { round: 1, date: '2025/3/12', attendees: '中村部長、田中', content: '初回商談予定。エンジニア採用強化施策について議論予定。クラウド・AI人材の採用が急務。' },
    ],
    tasks: [
      { status: 'in_progress', name: '商談前資料準備・会社概要送付', due: '2025/3/12', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'HR採用マネージャー', count: 1, date: '2025/3/12', dept: 'PERM' },
      { title: '新卒採用コーディネーター', count: 2, date: '2025/3/12', dept: 'PERM' },
    ],
  },

  11: {
    basicInfo: { company: '富士通', dept: 'HR部門 エグゼクティブ採用チーム', clientPerson: '中村 由美 部長、橋本 HRビジネスパートナー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 エグゼクティブ採用', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '橋本HRBp、田中', content: 'CTO・CDO候補の要件確認。外資IT経験者が望ましく英語力必須。年収1,500万以上の案件。' },
      { round: 1, date: '2025/2/5',  attendees: '中村部長、橋本、田中', content: '経営幹部クラスのIT人材不足。CTO・CDO候補を紹介経由で進めたいとの相談。' },
    ],
    tasks: [
      { status: 'pending', name: 'CTO候補者リスト作成（5名）', due: '2025/3/15', assignee: '田中 花子' },
      { status: 'pending', name: 'CDO候補者スカウト開始',      due: '2025/3/20', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'CTO候補（正社員）', count: 1, date: '2025/2/20', dept: 'PERM' },
      { title: 'CDO候補（正社員）', count: 1, date: '2025/2/20', dept: 'PERM' },
    ],
  },

  15: {
    basicInfo: { company: '富士通', dept: 'HR部門 新卒採用チーム', clientPerson: '中村 由美 部長、田所 新卒採用リーダー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 新卒採用強化', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/1/15', attendees: '田所リーダー、田中', content: '成約。理系大学院生エンジニア職を中心に20名の採用支援確定。2月より候補者紹介開始。' },
      { round: 1, date: '2024/12/20', attendees: '中村部長、田所、田中', content: '新卒採用強化について相談。AI・クラウド専攻の学生採用が課題。' },
    ],
    tasks: [
      { status: 'done', name: '新卒採用強化 成果レポート提出', due: '2025/1/20', assignee: '田中 花子' },
    ],
    jobs: [
      { title: '理系院卒エンジニア（新卒）', count: 20, date: '2025/1/15', dept: 'PERM' },
    ],
  },

  37: {
    basicInfo: { company: '富士通', dept: 'HR部門 グローバル採用チーム', clientPerson: '中村 部長、谷口 グローバルHR', ourPerson: '田中 花子', businessDept: 'PERM', channel: '営業顧問', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: 'HR部門 採用強化PJ', current: 'HR部門 グローバル人材採用', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '谷口グローバルHR、田中', content: 'グローバル拠点向けのITエンジニア採用。日英バイリンガルのクラウドエンジニアが5名必要。' },
      { round: 1, date: '2025/2/12', attendees: '中村部長、谷口、田中', content: 'グローバル事業拡大に伴う海外拠点でのエンジニア採用ニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'バイリンガルエンジニア候補者ピック', due: '2025/3/20', assignee: '田中 花子' },
      { status: 'pending', name: 'グローバル採用提案書作成',           due: '2025/3/18', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'バイリンガルクラウドエンジニア', count: 5, date: '2025/2/28', dept: 'PERM' },
    ],
  },

  12: {
    basicInfo: { company: '富士通', dept: 'ITインフラ部', clientPerson: '高橋 豊 部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: null, current: 'ITインフラ部 基盤刷新支援', next: null, branches: ['ITインフラ部 クラウドリフト', 'デジタル推進部 DX人材支援'] },
    meetings: [
      { round: 3, date: '2025/2/25', attendees: '高橋部長、佐藤', content: 'Kubernetes専門家3名の参画内定。4月より6ヶ月間のプロジェクト参画開始。' },
      { round: 2, date: '2025/2/5',  attendees: '高橋部長、佐藤', content: 'Docker/Kubernetesの実務3年以上が必須。AWSの経験も求められる。' },
      { round: 1, date: '2025/1/20', attendees: '高橋部長',       content: 'Kubernetesベースのコンテナ基盤への刷新PJで人材不足。3名規模の支援が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'Kubernetes候補スキルシート確認', due: '2025/3/18', assignee: '佐藤 次郎' },
      { status: 'pending', name: '契約書取交し準備',               due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'Kubernetesエンジニア', count: 3, date: '2025/2/25', dept: 'ITSS' },
    ],
  },

  13: {
    basicInfo: { company: '富士通', dept: 'ITインフラ部', clientPerson: '松本 健一 課長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '伊藤 美咲', status: '完了' },
    tree: { parent: 'ITインフラ部 基盤刷新支援', current: 'ITインフラ部 クラウドリフト', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2025/3/5',  attendees: '松本課長、佐藤', content: '成約。AWSインフラエンジニア2名の参画確定。4月稼働開始。契約書取交し完了。' },
      { round: 2, date: '2025/2/10', attendees: '松本課長、佐藤', content: 'AWSとTerraformの経験者が必須。Infrastructure as Code対応が求められる。' },
      { round: 1, date: '2025/1/20', attendees: '松本課長',       content: 'オンプレミスからAWS移行PJの人材ニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'done', name: 'クラウドリフト完了報告書作成', due: '2025/3/10', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'AWSインフラエンジニア（Terraform）', count: 2, date: '2025/3/5', dept: 'ITSS' },
    ],
  },

  14: {
    basicInfo: { company: '富士通', dept: 'デジタル推進部', clientPerson: '大西 デジタル推進部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'ITインフラ部 基盤刷新支援', current: 'デジタル推進部 DX人材支援', next: null, branches: ['デジタル推進部 AI/MLエンジニア支援'] },
    meetings: [
      { round: 2, date: '2025/3/12', attendees: '大西部長、佐藤', content: 'マイクロサービス設計経験者とデータエンジニアが必要。DXプロジェクトの中核人材。' },
      { round: 1, date: '2025/2/20', attendees: '大西部長',       content: '高橋部長の紹介で訪問。DX推進PJの中核人材が不足。複数名の追加支援を求められた。' },
    ],
    tasks: [
      { status: 'pending', name: 'DXアーキテクト候補者提出',    due: '2025/3/20', assignee: '佐藤 次郎' },
      { status: 'pending', name: 'データエンジニア候補者ピック', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'DXアーキテクト',  count: 1, date: '2025/3/12', dept: 'ITSS' },
      { title: 'データエンジニア', count: 2, date: '2025/3/12', dept: 'ITSS' },
    ],
  },

  38: {
    basicInfo: { company: '富士通', dept: 'デジタル推進部 AIチーム', clientPerson: '大西 部長、小川 AIリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'デジタル推進部 DX人材支援', current: 'デジタル推進部 AI/MLエンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '小川リーダー、佐藤', content: 'LLM/RAGシステムの構築経験者が必要。PyTorchとLangChainの実務経験者を優先。' },
      { round: 1, date: '2025/2/15', attendees: '大西部長、小川、佐藤', content: 'DX支援から派生した追加商談。生成AI活用のR&D強化のため、ML専門家の補強が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'LLM/RAGエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'MLエンジニア（LLM/RAG）', count: 2, date: '2025/3/1', dept: 'ITSS' },
    ],
  },

  39: {
    basicInfo: { company: '富士通', dept: 'サービス事業部', clientPerson: '岩田 サービス事業部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'サービス事業部 SREエンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '岩田部長、佐藤', content: 'SREエンジニア2名の参画が必要。可用性99.99%のサービス運用経験者を求めている。' },
      { round: 1, date: '2025/2/1',  attendees: '岩田部長',       content: '高橋部長の紹介で訪問。クラウドサービスの信頼性向上のためSRE専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SREエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'SREエンジニア（高可用性）', count: 2, date: '2025/2/15', dept: 'ITSS' },
    ],
  },

  16: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部', clientPerson: '小林 拓也 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: null, current: 'ERP推進部 SAP人材支援', next: null, branches: ['ERP推進部 SAP追加支援', 'ERP推進部 SAP BTP対応支援', 'PMO部門 PJ管理人材', 'SAP専門チーム ABAP開発者追加'] },
    meetings: [
      { round: 2, date: '2024/12/10', attendees: '小林部長、鈴木', content: '成約。SAP ABAPエンジニア1名の参画確定。1月より稼働。追加の人材ニーズについても話し合い。' },
      { round: 1, date: '2024/11/15', attendees: '小林部長',       content: 'NTTデータからの紹介で初訪問。SAP ABAPの開発者不足。複数PJで同時に人材が必要な状況。' },
    ],
    tasks: [
      { status: 'done', name: 'SAP人材 稼働完了報告', due: '2024/12/15', assignee: '山本 三郎' },
    ], jobs: [{ title: 'SAP ABAPエンジニア', count: 1, date: '2024/12/10', dept: 'ITSS' }],
  },

  17: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部', clientPerson: '小林 部長、村山 SAP主任', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'ERP推進部 SAP追加支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2024/11/20', attendees: '村山主任、鈴木', content: '成約。SAP FI/COコンサルタント2名の追加参画確定。12月より稼働。' },
      { round: 1, date: '2024/11/5',  attendees: '小林部長、村山主任、鈴木', content: 'FI/CO領域の追加ニーズが浮上。2名体制での支援を依頼。' },
    ],
    tasks: [
      { status: 'done', name: 'SAP追加支援 検収確認', due: '2025/1/10', assignee: '山本 三郎' },
    ], jobs: [{ title: 'SAP FI/COコンサルタント', count: 2, date: '2024/11/20', dept: 'ITSS' }],
  },

  40: {
    basicInfo: { company: 'ノースサンド', dept: 'ERP推進部 クラウドチーム', clientPerson: '小林 部長、田村 BTPリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'ERP推進部 SAP BTP対応支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/1/15', attendees: '田村リーダー、鈴木', content: '成約。SAP BTP専門家1名の参画確定。SAP S/4HANAとBTPの統合プロジェクトに参画。' },
      { round: 1, date: '2025/1/5',  attendees: '小林部長、田村リーダー、鈴木', content: 'SAP追加支援から派生。クラウドプラットフォームであるBTPへの移行専門家が必要。' },
    ],
    tasks: [
      { status: 'done', name: 'SAP BTP対応 完了報告', due: '2025/2/15', assignee: '山本 三郎' },
    ], jobs: [{ title: 'SAP BTP専門家', count: 1, date: '2025/1/15', dept: 'ITSS' }],
  },

  18: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門', clientPerson: '加藤 真理 マネージャー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'PMO部門 PJ管理人材', next: null, branches: ['PMO部門 シニアPM採用', 'PMO部門 アジャイルコーチ採用'] },
    meetings: [
      { round: 2, date: '2024/11/28', attendees: '加藤マネージャー、田中', content: '成約。PMP保有のPMO人材1名の紹介確定。12月入社予定。' },
      { round: 1, date: '2024/11/5',  attendees: '加藤マネージャー',       content: '小林部長紹介でPMO部門を訪問。PMP保有者の中途採用ニーズ。' },
    ],
    tasks: [
      { status: 'done', name: 'PJ管理人材 配属完了確認', due: '2025/1/25', assignee: '田中 花子' },
    ], jobs: [{ title: 'PMO・PM（PMP保有）', count: 1, date: '2024/11/28', dept: 'PERM' }],
  },

  19: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門', clientPerson: '加藤 マネージャー、高田 PMOシニア', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'PMO部門 PJ管理人材', current: 'PMO部門 シニアPM採用', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2024/10/15', attendees: '高田シニア、田中', content: '成約。PgMP保有のシニアPM1名採用。事業拡大に伴う大型PJ対応のため即戦力が必要。' },
      { round: 1, date: '2024/10/1',  attendees: '加藤マネージャー、高田、田中', content: 'PMO初回採用成功後の追加依頼。シニアクラスのPMが必要。' },
    ],
    tasks: [
      { status: 'done', name: 'シニアPM 採用成功レポート', due: '2024/12/20', assignee: '田中 花子' },
    ], jobs: [{ title: 'シニアPM（PgMP保有）', count: 1, date: '2024/10/15', dept: 'PERM' }],
  },

  41: {
    basicInfo: { company: 'ノースサンド', dept: 'PMO部門 アジャイル推進チーム', clientPerson: '加藤 マネージャー、安井 アジャイルリーダー', ourPerson: '田中 花子', businessDept: 'PERM', channel: '紹介', acquiredBy: '田中 花子', status: '完了' },
    tree: { parent: 'PMO部門 PJ管理人材', current: 'PMO部門 アジャイルコーチ採用', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/1/10', attendees: '安井リーダー、田中', content: '成約。CSP/CSM保有のアジャイルコーチ1名の採用確定。Scrum導入の旗振り役として即戦力が必要。' },
      { round: 1, date: '2024/12/20', attendees: '加藤マネージャー、安井、田中', content: '組織全体のアジャイル移行推進のため、専門コーチの採用が急務とのこと。' },
    ],
    tasks: [
      { status: 'done', name: 'アジャイルコーチ 採用成功報告', due: '2024/12/25', assignee: '田中 花子' },
    ], jobs: [{ title: 'アジャイルコーチ（CSP保有）', count: 1, date: '2025/1/10', dept: 'PERM' }],
  },

  20: {
    basicInfo: { company: 'ノースサンド', dept: 'SAP専門チーム', clientPerson: '村山 SAP主任、三浦 ABAP専門家', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: '紹介', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'ERP推進部 SAP人材支援', current: 'SAP専門チーム ABAP開発者追加', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2024/12/5',  attendees: '三浦専門家、鈴木', content: '成約。ABAP開発者をさらに1名追加。計2名体制でSAP拡張開発PJを進める。' },
      { round: 1, date: '2024/11/20', attendees: '村山主任、三浦、鈴木', content: 'SAP追加支援の流れで、ABAP専門チームにも人材ニーズを確認。' },
    ],
    tasks: [
      { status: 'done', name: 'ABAP開発者 追加稼働確認', due: '2024/12/25', assignee: '山本 三郎' },
    ], jobs: [{ title: 'SAP ABAP追加開発者', count: 1, date: '2024/12/5', dept: 'ITSS' }],
  },

  42: {
    basicInfo: { company: 'ノースサンド', dept: 'BPR推進部', clientPerson: '松田 BPR部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: '紹介', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'BPR推進部 業務改革コンサル支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/1/10', attendees: '松田部長、山本', content: 'BPR推進のためのITコンサルタント1名の参画が必要。業務フロー設計とシステム導入支援の両方ができる人材を求めている。' },
      { round: 1, date: '2024/12/25', attendees: '松田部長',      content: '小林部長の紹介で訪問。業務改革推進のためのコンサル人材が不足していることを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'BPRコンサルタント候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'BPRコンサルタント', count: 1, date: '2025/1/10', dept: 'DSL' }],
  },

  21: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部', clientPerson: '中島 健太 VP of Engineering', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: null, current: 'エンジニアリング本部 開発人材支援', next: null, branches: ['エンジニアリング本部 Goエンジニア追加', 'エンジニアリング本部 フロントエンド強化', 'プロダクト部門 PdM人材支援'] },
    meetings: [
      { round: 3, date: '2025/2/20', attendees: '中島VP、佐藤', content: 'バックエンドエンジニアの要件詳細確認。Go言語とgRPCの経験者が必須。マイクロサービス設計の経験者を優先。' },
      { round: 2, date: '2025/2/5',  attendees: '中島VP、佐藤', content: 'プロダクト開発加速のため、複数領域での人材補強が必要と判明。Go/React/PdMの3領域。' },
      { round: 1, date: '2025/1/22', attendees: '中島VP',       content: '展示会でのご縁から初訪問。Go/Kubernetesエンジニアの増員が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'Go/gRPCエンジニア候補者ピック', due: '2025/3/20', assignee: '佐藤 次郎' },
      { status: 'pending', name: '3回目商談アポ取得',             due: '2025/3/15', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'Goバックエンドエンジニア（gRPC）', count: 2, date: '2025/2/20', dept: 'ITSS' }],
  },

  22: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部 インフラチーム', clientPerson: '中島 VP、森田 インフラリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'エンジニアリング本部 Goエンジニア追加', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/5',  attendees: '森田リーダー、佐藤', content: 'Kubernetes/Go専門のSREエンジニアが必要。可用性99.99%のシステム運用経験者を求めている。' },
      { round: 1, date: '2025/1/20', attendees: '中島VP、森田リーダー、佐藤', content: 'インフラチームのGoエンジニア不足が深刻。SRE領域での追加支援ニーズを確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'SRE/Goエンジニア候補者ピック', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'SRE/Goエンジニア', count: 2, date: '2025/2/5', dept: 'ITSS' }],
  },

  43: {
    basicInfo: { company: 'Sansan', dept: 'エンジニアリング本部 フロントエンドチーム', clientPerson: '中島 VP、藤本 フロントリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'エンジニアリング本部 フロントエンド強化', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '藤本リーダー、佐藤', content: 'React/TypeScript専門のフロントエンドエンジニア2名が必要。パフォーマンス最適化の経験者を優先。' },
      { round: 1, date: '2025/2/15', attendees: '中島VP、藤本リーダー、佐藤', content: 'フロントエンドの品質向上のため専門エンジニアの補強が必要。TypeScript移行も急いでいる。' },
    ],
    tasks: [
      { status: 'pending', name: 'React/TypeScriptエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'Reactフロントエンドエンジニア（TypeScript）', count: 2, date: '2025/3/1', dept: 'ITSS' }],
  },

  23: {
    basicInfo: { company: 'Sansan', dept: 'プロダクト部門', clientPerson: '大坪 プロダクト責任者', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'エンジニアリング本部 開発人材支援', current: 'プロダクト部門 PdM人材支援', next: null, branches: ['プロダクト部門 デザインエンジニア採用'] },
    meetings: [
      { round: 2, date: '2025/1/20', attendees: '大坪責任者、佐藤', content: 'PdMの要件確認。B2BSaaSプロダクトのロードマップ策定経験者が必要。英語力もあると望ましい。' },
      { round: 1, date: '2025/1/8',  attendees: '大坪責任者',       content: '中島VPの紹介でプロダクト部門を訪問。PdM不足で新機能開発が遅延している状況。' },
    ],
    tasks: [
      { status: 'pending', name: 'PdM候補者リスト作成（3名）', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'プロダクトマネージャー（B2BSaaS）', count: 2, date: '2025/1/20', dept: 'ITSS' }],
  },

  44: {
    basicInfo: { company: 'Sansan', dept: 'プロダクト部門 デザインチーム', clientPerson: '大坪 責任者、内田 デザインリーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'プロダクト部門 PdM人材支援', current: 'プロダクト部門 デザインエンジニア採用', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '内田リーダー、佐藤', content: 'デザインエンジニアの要件確認。FigmaとReactの両方が使えるエンジニアが必要。デザインシステム構築の経験者を優先。' },
      { round: 1, date: '2025/1/28', attendees: '大坪責任者、内田リーダー、佐藤', content: 'PdM採用商談から派生。デザインとエンジニアリングを橋渡しできる人材の採用ニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'デザインエンジニア候補者ピック', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'デザインエンジニア（Figma/React）', count: 2, date: '2025/2/10', dept: 'ITSS' }],
  },

  45: {
    basicInfo: { company: 'Sansan', dept: 'データ基盤部', clientPerson: '松井 データ基盤部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: '展示会', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'データ基盤部 データエンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/25', attendees: '松井部長、佐藤', content: 'BigQuery/dbtを使ったデータパイプライン構築の専門家が必要。データカタログの整備も課題。' },
      { round: 1, date: '2025/2/10', attendees: '松井部長',       content: '中島VPの紹介でデータ基盤部を訪問。データエンジニアリングの専門化が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'BigQuery/dbtエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [{ title: 'データエンジニア（BigQuery/dbt）', count: 2, date: '2025/2/25', dept: 'ITSS' }],
  },

  24: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部', clientPerson: '渡辺 誠 本部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'デジタル推進本部 基幹刷新', next: null, branches: ['デジタル推進本部 SAP移行フェーズ2', 'デジタル推進本部 データ基盤構築', 'デジタル推進本部 グローバルERP展開', '生産技術部 組込みエンジニア支援', '情報システム部 レガシー移行支援'] },
    meetings: [
      { round: 4, date: '2025/2/28', attendees: '渡辺本部長、山本', content: 'ITコンサルタント2名のアサイン内定。3月より要件定義フェーズ開始。フェーズ2のSAP移行についても追加相談あり。' },
      { round: 3, date: '2025/2/10', attendees: '渡辺本部長、山本', content: 'SAP S/4HANA移行プロジェクトの体制案を提示。フェーズ分けでの進行を提案。' },
      { round: 2, date: '2025/1/20', attendees: '渡辺本部長、山本', content: '経営課題のヒアリング。2025年内のSAP移行完了が目標。製造・IT・HR各領域での課題確認。' },
      { round: 1, date: '2025/1/8',  attendees: '渡辺本部長',       content: 'toBマーケ経由のアポ。グローバル競争力強化のためのデジタル基盤刷新が最優先テーマ。' },
    ],
    tasks: [
      { status: 'pending', name: 'ITコンサル最終候補者確認', due: '2025/3/15', assignee: '山本 三郎' },
      { status: 'pending', name: '契約書ドラフト確認・送付', due: '2025/3/18', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'SAP移行ITコンサルタント', count: 2, date: '2025/2/28', dept: 'DSL' }],
  },

  25: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 SAP推進チーム', clientPerson: '渡辺 本部長、川田 SAPリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 SAP移行フェーズ2', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2025/2/10', attendees: '川田リーダー、山本', content: 'フェーズ2の追加人材要件確認。SAP S/4HANAのMM/SD領域専門家が必要。6名体制での推進に合意。' },
      { round: 2, date: '2025/1/25', attendees: '渡辺本部長、川田、山本', content: 'フェーズ1の進捗確認とフェーズ2計画を議論。グローバル展開を見据えた体制構築が必要。' },
      { round: 1, date: '2025/1/10', attendees: '川田リーダー、山本', content: 'フェーズ1完了に伴う次フェーズ商談。MM/SD領域での追加サポートが必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SAP MM/SD専門家候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'SAP MM領域コンサルタント', count: 3, date: '2025/2/10', dept: 'DSL' },
      { title: 'SAP SD領域コンサルタント', count: 3, date: '2025/2/10', dept: 'DSL' },
    ],
  },

  26: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 データ戦略チーム', clientPerson: '渡辺 本部長、中田 データ戦略リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '完了' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 データ基盤構築', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2025/1/25', attendees: '中田リーダー、山本', content: '成約。データアーキテクト1名・データエンジニア3名の参画確定。2月より稼働開始。' },
      { round: 2, date: '2025/1/10', attendees: '中田リーダー、山本', content: 'データレイク構築の要件確認。Snowflake/BigQueryとPython/Sparkエンジニアが必要。' },
      { round: 1, date: '2024/12/20', attendees: '渡辺本部長、中田、山本', content: 'データ活用基盤構築PJのコンサル・エンジニア人材ニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'done', name: 'データ基盤構築 完了報告書', due: '2025/2/1', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'データアーキテクト',           count: 1, date: '2025/1/25', dept: 'DSL' },
      { title: 'データエンジニア（Snowflake）', count: 3, date: '2025/1/25', dept: 'DSL' },
    ],
  },

  46: {
    basicInfo: { company: 'トヨタ自動車', dept: 'デジタル推進本部 グローバルIT推進チーム', clientPerson: '渡辺 本部長、鈴田 グローバルITリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'デジタル推進本部 グローバルERP展開', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '鈴田リーダー、山本', content: 'グローバル20拠点へのSAP展開プロジェクト。多言語対応のSAPコンサルタントが5名必要。英語力必須。' },
      { round: 1, date: '2025/2/5',  attendees: '渡辺本部長、鈴田、山本', content: '基幹刷新から派生した追加案件。グローバル拠点へのERP展開計画を確認。' },
    ],
    tasks: [
      { status: 'pending', name: 'グローバルSAPコンサル候補提出', due: '2025/3/20', assignee: '山本 三郎' },
      { status: 'pending', name: '英語力確認・面談設定',           due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [{ title: 'グローバルSAPコンサルタント（英語必須）', count: 5, date: '2025/2/20', dept: 'DSL' }],
  },

  27: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部', clientPerson: '福田 修 部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: '生産技術部 組込みエンジニア支援', next: null, branches: ['生産技術部 RustエンジニアPJ', '生産技術部 FPGAエンジニア支援'] },
    meetings: [
      { round: 3, date: '2025/2/20', attendees: '福田部長、鈴木', content: 'C/C++組込みエンジニア3名の参画確定。4月より自動車ECU開発PJに参画。' },
      { round: 2, date: '2025/2/5',  attendees: '福田部長、鈴木', content: 'AUTOSAR対応の組込みC/C++経験者が必須。CAN/Ethernetの通信プロトコル知識も必要。' },
      { round: 1, date: '2025/1/25', attendees: '福田部長',       content: '渡辺本部長の紹介で初訪問。生産ライン制御システムの開発エンジニアが慢性的に不足。' },
    ],
    tasks: [
      { status: 'pending', name: '組込みC/C++エンジニア候補最終確認', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'C/C++組込みエンジニア（AUTOSAR）', count: 3, date: '2025/2/20', dept: 'ITSS' }],
  },

  28: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部 次世代システムチーム', clientPerson: '福田 部長、安藤 技術主任', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '生産技術部 組込みエンジニア支援', current: '生産技術部 RustエンジニアPJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/1/30', attendees: '安藤主任、鈴木', content: '次世代ECUをRustで開発するプロジェクト。組込みRust経験者は希少で、C++からの移行経験者でも可。' },
      { round: 1, date: '2025/1/15', attendees: '福田部長、安藤、鈴木', content: '組込みPJ派生の追加商談。次世代システムではRustの採用を検討。専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '組込みRustエンジニア調査・候補ピック', due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: '組込みRustエンジニア', count: 2, date: '2025/1/30', dept: 'ITSS' }],
  },

  47: {
    basicInfo: { company: 'トヨタ自動車', dept: '生産技術部 エレクトロニクスチーム', clientPerson: '福田 部長、木下 FPGA専門家', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '生産技術部 組込みエンジニア支援', current: '生産技術部 FPGAエンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '木下専門家、鈴木', content: 'Xilinx/IntelのFPGA開発経験者が必要。VHDL/Verilogの実務5年以上が必須。高速信号処理の知識も求められる。' },
      { round: 1, date: '2025/2/1',  attendees: '福田部長、木下、鈴木', content: '組込みPJ派生の追加商談。画像処理の高速化のためFPGAエンジニアの補強が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'FPGAエンジニア候補者ピック（希少人材）', due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'FPGAエンジニア（Xilinx/VHDL）', count: 2, date: '2025/2/15', dept: 'ITSS' }],
  },

  29: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部', clientPerson: '大野 浩二 課長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: '情報システム部 レガシー移行支援', next: null, branches: ['情報システム部 JAVA/Kotlin刷新', '情報システム部 マイクロサービス移行'] },
    meetings: [
      { round: 3, date: '2025/1/30', attendees: '大野課長、鈴木', content: '成約。JavaエンジニアとPythonエンジニアの計3名の参画確定。2月より稼働開始。' },
      { round: 2, date: '2024/12/20', attendees: '大野課長、鈴木', content: 'レガシーJavaシステムの移行要件確認。Spring Bootへのリアーキテクチャ経験者が必要。' },
      { round: 1, date: '2024/12/5',  attendees: '大野課長',       content: '渡辺本部長の紹介で訪問。20年以上稼働のレガシーJavaシステムの刷新PJで人材不足。' },
    ],
    tasks: [
      { status: 'done', name: 'レガシー移行 マイルストーン報告', due: '2025/2/5', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'Javaエンジニア（Spring Boot）', count: 2, date: '2025/1/30', dept: 'ITSS' },
      { title: 'Pythonエンジニア',               count: 1, date: '2025/1/30', dept: 'ITSS' },
    ],
  },

  30: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部 モダナイズチーム', clientPerson: '大野 課長、篠原 Kotlinリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: '情報システム部 レガシー移行支援', current: '情報システム部 JAVA/Kotlin刷新', next: null, branches: [] },
    meetings: [
      { round: 3, date: '2024/12/20', attendees: '篠原リーダー、鈴木', content: '成約。KotlinエンジニアとAndroidエンジニアの計2名の参画確定。1月より稼働。' },
      { round: 2, date: '2024/12/5',  attendees: '大野課長、篠原、鈴木', content: 'KotlinへのマイグレーションPJの詳細確認。コルーチン・Flowの実務経験者が必須。' },
      { round: 1, date: '2024/11/20', attendees: '篠原リーダー、鈴木', content: 'レガシーJavaをKotlinに段階移行する追加PJの相談。Kotlinの専門家が社内にいない。' },
    ],
    tasks: [
      { status: 'done', name: 'Java/Kotlin刷新 検収完了確認', due: '2025/1/5', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'Kotlinエンジニア（コルーチン）', count: 2, date: '2024/12/20', dept: 'ITSS' }],
  },

  48: {
    basicInfo: { company: 'トヨタ自動車', dept: '情報システム部 クラウドアーキチーム', clientPerson: '大野 課長、原田 アーキテクトリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: '情報システム部 レガシー移行支援', current: '情報システム部 マイクロサービス移行', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '原田リーダー、鈴木', content: 'モノリシックシステムのマイクロサービス化。Kubernetes/Istioを使ったサービスメッシュ構築経験者が必要。' },
      { round: 1, date: '2025/2/10', attendees: '大野課長、原田、鈴木', content: 'レガシー移行PJから派生した追加案件。マイクロサービスアーキテクチャへの移行計画をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'マイクロサービスアーキテクト候補提出', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: 'Istioエンジニア候補者ピック',          due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'マイクロサービスアーキテクト', count: 1, date: '2025/2/28', dept: 'ITSS' },
      { title: 'Kubernetes/Istioエンジニア',   count: 2, date: '2025/2/28', dept: 'ITSS' },
    ],
  },

  31: {
    basicInfo: { company: 'トヨタ自動車', dept: 'コネクティッド部門', clientPerson: '石川 コネクティッド部門長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'デジタル推進本部 基幹刷新', current: 'コネクティッド部門 車載ソフトウェア支援', next: null, branches: ['コネクティッド部門 OTA更新基盤PJ'] },
    meetings: [
      { round: 2, date: '2025/2/15', attendees: '石川部門長、鈴木', content: '車載ソフトウェアの要件詳細確認。C++17以上の組込み経験とLinuxドライバ開発が必須。OTA更新対応も必要。' },
      { round: 1, date: '2025/2/1',  attendees: '石川部門長',       content: '福田部長の紹介でコネクティッドカー部門を訪問。車載Linux/C++の専門家が急募。' },
    ],
    tasks: [
      { status: 'pending', name: '車載Linux/C++エンジニア候補ピック', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: '3回目商談アポ取得',                 due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: '車載Linux/C++エンジニア', count: 3, date: '2025/2/15', dept: 'ITSS' }],
  },

  49: {
    basicInfo: { company: 'トヨタ自動車', dept: 'コネクティッド部門 OTAチーム', clientPerson: '石川 部門長、松岡 OTAリーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'コネクティッド部門 車載ソフトウェア支援', current: 'コネクティッド部門 OTA更新基盤PJ', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/3/1',  attendees: '松岡リーダー、鈴木', content: 'Over-the-Air更新システムの構築。AWS IoTとC++を組み合わせたOTA基盤の専門家が必要。セキュリティ要件も厳しい。' },
      { round: 1, date: '2025/2/20', attendees: '石川部門長、松岡、鈴木', content: '車載ソフトウェア支援PJから派生。OTAアップデート基盤の構築専門家のニーズが浮上。' },
    ],
    tasks: [
      { status: 'pending', name: 'OTA基盤エンジニア候補提出', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [{ title: 'OTA/組込みLinuxエンジニア', count: 2, date: '2025/3/1', dept: 'ITSS' }],
  },

  50: {
    basicInfo: { company: 'トヨタ自動車', dept: 'AI研究所', clientPerson: '田辺 AI研究所長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'AI研究所 自動運転AI人材支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '田辺所長、鈴木', content: '自動運転AIの研究開発エンジニアが必要。PyTorch/TensorFlowの深層学習経験者と点群データ処理の専門家。' },
      { round: 1, date: '2025/1/25', attendees: '田辺所長',       content: '福田部長の紹介でAI研究所を訪問。自動運転レベル4達成に向けてAI研究者の補強が急務。' },
    ],
    tasks: [
      { status: 'pending', name: '自動運転AIエンジニア候補提出', due: '2025/3/20', assignee: '鈴木 一郎' },
      { status: 'pending', name: '点群処理専門家スカウト',       due: '2025/3/25', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: '深層学習エンジニア（自動運転）', count: 2, date: '2025/2/10', dept: 'ITSS' },
      { title: '点群データ処理専門家',           count: 1, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  // ===== 日立製作所 =====
  51: {
    basicInfo: { company: '日立製作所', dept: 'システム統括本部', clientPerson: '中村 CTO', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'システム統括本部 基幹系モダナイゼーションPJ', next: null, branches: ['システム統括本部 クラウドネイティブ移行', 'Lumada事業部 IoTプラットフォーム開発'] },
    meetings: [
      { round: 3, date: '2025/3/8', attendees: '中村CTO、鈴木', content: 'モダナイゼーション進捗確認。Java17への移行完了報告。クラウド移行とIoT基盤の追加ニーズを確認。' },
      { round: 2, date: '2025/2/10', attendees: '中村CTO、鈴木', content: 'レガシーJavaシステムの移行計画策定。段階的アプローチで合意。' },
      { round: 1, date: '2025/1/15', attendees: '中村CTO', content: '初回訪問。基幹系のモダナイゼーション課題をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'Javaアーキテクト候補3名提出', due: '2025/3/20', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'Javaアーキテクト（17対応）', count: 2, date: '2025/3/8', dept: 'ITSS' },
      { title: 'レガシー移行エンジニア', count: 3, date: '2025/2/10', dept: 'ITSS' },
    ],
  },
  52: {
    basicInfo: { company: '日立製作所', dept: 'システム統括本部', clientPerson: '中村 CTO、高橋 インフラ部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'システム統括本部 基幹系モダナイゼーションPJ', current: 'システム統括本部 クラウドネイティブ移行', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/25', attendees: '高橋部長、鈴木', content: 'AWS/Azure選定完了。Kubernetes基盤の設計レビュー。' },
      { round: 1, date: '2025/1/30', attendees: '中村CTO、高橋部長、鈴木', content: 'モダナイゼーションの延長でクラウド移行を検討。' },
    ],
    tasks: [
      { status: 'pending', name: 'Kubernetesエンジニア候補提出', due: '2025/3/18', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'Kubernetesエンジニア', count: 2, date: '2025/2/25', dept: 'ITSS' },
      { title: 'クラウドアーキテクト', count: 1, date: '2025/2/25', dept: 'ITSS' },
    ],
  },
  53: {
    basicInfo: { company: '日立製作所', dept: 'Lumada事業部', clientPerson: '佐々木 Lumada事業部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'システム統括本部 基幹系モダナイゼーションPJ', current: 'Lumada事業部 IoTプラットフォーム開発', next: null, branches: ['Lumada事業部 AI分析基盤構築', 'Lumada事業部 データマネジメント戦略策定'] },
    meetings: [
      { round: 2, date: '2025/3/5', attendees: '佐々木部長、佐藤', content: 'IoTプラットフォーム設計レビュー。エッジ処理の高速化がキーテーマ。' },
      { round: 1, date: '2025/2/5', attendees: '佐々木部長、佐藤', content: '中村CTOの紹介でLumada事業部を訪問。IoT基盤強化のニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: 'IoTエンジニア候補2名提出', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'IoTプラットフォームエンジニア', count: 2, date: '2025/3/5', dept: 'ITSS' },
      { title: 'エッジコンピューティング専門家', count: 1, date: '2025/3/5', dept: 'ITSS' },
    ],
  },
  54: {
    basicInfo: { company: '日立製作所', dept: 'Lumada事業部 AI推進チーム', clientPerson: '佐々木部長、松田 AI推進リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'Lumada事業部 IoTプラットフォーム開発', current: 'Lumada事業部 AI分析基盤構築', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '松田リーダー、山本', content: 'AI分析基盤のアーキテクチャ確定。MLOpsパイプライン構築が次のステップ。' },
      { round: 1, date: '2025/2/10', attendees: '佐々木部長、松田リーダー、山本', content: 'IoT基盤と連携したAI分析ニーズをヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'MLエンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'MLエンジニア', count: 2, date: '2025/2/28', dept: 'DSL' },
      { title: 'データエンジニア', count: 1, date: '2025/2/28', dept: 'DSL' },
    ],
  },
  55: {
    basicInfo: { company: '日立製作所', dept: 'デジタルエンジニアリング部', clientPerson: '田中 DevOps推進リーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '佐藤 次郎', status: '完了' },
    tree: { parent: null, current: 'デジタルエンジニアリング部 DevOps導入支援', next: null, branches: ['デジタルエンジニアリング部 SRE体制構築'] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '田中リーダー、佐藤', content: 'DevOps導入完了。CI/CDパイプライン構築成功。SRE体制の必要性が浮上。' },
      { round: 1, date: '2025/1/20', attendees: '田中リーダー、佐藤', content: 'toBマーケ経由。DevOps導入のエンジニア支援依頼。' },
    ],
    tasks: [
      { status: 'done', name: 'DevOps導入 成果報告書提出', due: '2025/2/25', assignee: '佐藤 次郎' },
    ], jobs: [
      { title: 'DevOpsエンジニア', count: 2, date: '2025/1/20', dept: 'ITSS' },
    ],
  },
  56: {
    basicInfo: { company: '日立製作所', dept: 'デジタルエンジニアリング部', clientPerson: '田中 DevOps推進リーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'デジタルエンジニアリング部 DevOps導入支援', current: 'デジタルエンジニアリング部 SRE体制構築', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/1', attendees: '田中リーダー、佐藤', content: 'DevOps導入の延長でSRE体制構築を開始。オブザーバビリティ専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SREエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'SREエンジニア', count: 2, date: '2025/3/1', dept: 'ITSS' },
      { title: 'オブザーバビリティ専門家', count: 1, date: '2025/3/1', dept: 'ITSS' },
    ],
  },
  57: {
    basicInfo: { company: '日立製作所', dept: '人財統括本部', clientPerson: '小林 人事部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'toBマーケ', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: null, current: '人財統括本部 DX人材採用支援', next: null, branches: ['人財統括本部 エグゼクティブサーチ'] },
    meetings: [
      { round: 2, date: '2025/3/1', attendees: '小林部長、田中', content: 'DX人材の採用要件確定。即戦力のテックリード2名が最優先。' },
      { round: 1, date: '2025/2/5', attendees: '小林部長、田中', content: '初回訪問。DX推進に向けた人材不足の課題をヒアリング。' },
    ],
    tasks: [
      { status: 'pending', name: 'テックリード候補スカウト', due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'テックリード（DX推進）', count: 2, date: '2025/3/1', dept: 'PERM' },
    ],
  },
  58: {
    basicInfo: { company: '日立製作所', dept: '人財統括本部', clientPerson: '小林 人事部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '人財統括本部 DX人材採用支援', current: '人財統括本部 エグゼクティブサーチ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/15', attendees: '小林部長、田中', content: 'CTO補佐ポジションの採用依頼。グローバル経験者を希望。' },
    ],
    tasks: [
      { status: 'pending', name: 'CTO補佐候補リストアップ', due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'CTO補佐（グローバル経験者）', count: 1, date: '2025/2/15', dept: 'PERM' },
    ],
  },
  59: {
    basicInfo: { company: '日立製作所', dept: 'クラウドサービス部', clientPerson: '遠藤 クラウド事業リーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'クラウドサービス部 マネージドサービス人材支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/10', attendees: '遠藤リーダー、鈴木', content: 'マネージドサービスチームの増員ニーズ。AWS認定保有者を希望。' },
    ],
    tasks: [
      { status: 'pending', name: 'AWS認定エンジニア候補提出', due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'AWSマネージドサービスエンジニア', count: 2, date: '2025/2/10', dept: 'ITSS' },
    ],
  },
  60: {
    basicInfo: { company: '日立製作所', dept: 'Lumada事業部 データ戦略チーム', clientPerson: '佐々木部長、岡田 データ戦略リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'Lumada事業部 IoTプラットフォーム開発', current: 'Lumada事業部 データマネジメント戦略策定', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/18', attendees: '岡田リーダー、山本', content: 'IoTデータのマネジメント戦略策定支援。データカタログ構築が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'データエンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'データカタログエンジニア', count: 1, date: '2025/2/18', dept: 'DSL' },
      { title: 'データガバナンス専門家', count: 1, date: '2025/2/18', dept: 'DSL' },
    ],
  },

  // ===== リクルート =====
  61: {
    basicInfo: { company: 'リクルート', dept: 'プロダクト開発本部', clientPerson: '渡辺 VPoE', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'プロダクト開発本部 バックエンド刷新PJ', next: null, branches: ['プロダクト開発本部 フロントエンド強化', 'データサイエンス部 ML基盤エンジニア支援'] },
    meetings: [
      { round: 2, date: '2025/3/5', attendees: '渡辺VPoE、佐藤', content: 'バックエンド刷新の進捗確認。Go言語への移行順調。フロントとML基盤も追加依頼。' },
      { round: 1, date: '2025/2/5', attendees: '渡辺VPoE、佐藤', content: '初回訪問。Rubyレガシーからの脱却が課題。Goエンジニアのニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: 'Goエンジニア追加候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'Goバックエンドエンジニア', count: 3, date: '2025/3/5', dept: 'ITSS' },
      { title: 'テックリード（Go）', count: 1, date: '2025/3/5', dept: 'ITSS' },
    ],
  },
  62: {
    basicInfo: { company: 'リクルート', dept: 'プロダクト開発本部 フロントチーム', clientPerson: '渡辺VPoE、木下 フロントリード', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'プロダクト開発本部 バックエンド刷新PJ', current: 'プロダクト開発本部 フロントエンド強化', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/20', attendees: '木下リード、佐藤', content: 'React/Next.jsベースのフロントエンド刷新。TypeScript必須。' },
    ],
    tasks: [
      { status: 'pending', name: 'React/TypeScriptエンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'React/TypeScriptエンジニア', count: 2, date: '2025/2/20', dept: 'ITSS' },
      { title: 'フロントエンドアーキテクト', count: 1, date: '2025/2/20', dept: 'ITSS' },
    ],
  },
  63: {
    basicInfo: { company: 'リクルート', dept: 'SaaS事業推進部', clientPerson: '山口 SRE部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '完了' },
    tree: { parent: null, current: 'SaaS事業推進部 SRE人材支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '山口部長、佐藤', content: 'SREエンジニア2名の稼働開始報告。満足度高く完了。' },
      { round: 1, date: '2025/1/20', attendees: '山口部長、佐藤', content: 'SaaS事業のSRE体制強化ニーズ。' },
    ],
    tasks: [
      { status: 'done', name: 'SRE人材 稼働開始確認', due: '2025/3/5', assignee: '佐藤 次郎' },
    ], jobs: [
      { title: 'SREエンジニア', count: 2, date: '2025/1/20', dept: 'ITSS' },
    ],
  },
  64: {
    basicInfo: { company: 'リクルート', dept: '人事企画部', clientPerson: '加藤 CHRO', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'toBマーケ', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: null, current: '人事企画部 エンジニア採用強化PJ', next: null, branches: ['人事企画部 ハイクラスエンジニア採用'] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '加藤CHRO、田中', content: 'エンジニア採用の進捗確認。ハイクラス層の採用強化も依頼。' },
      { round: 1, date: '2025/2/1', attendees: '加藤CHRO、田中', content: '初回訪問。エンジニア採用力強化の包括的支援依頼。' },
    ],
    tasks: [
      { status: 'pending', name: 'シニアエンジニア候補スカウト', due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'シニアバックエンドエンジニア', count: 3, date: '2025/2/28', dept: 'PERM' },
    ],
  },
  65: {
    basicInfo: { company: 'リクルート', dept: '人事企画部', clientPerson: '加藤CHRO', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '人事企画部 エンジニア採用強化PJ', current: '人事企画部 ハイクラスエンジニア採用', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/15', attendees: '加藤CHRO、田中', content: 'VPoE/CTOクラスのヘッドハンティング依頼。' },
    ],
    tasks: [
      { status: 'pending', name: 'VPoE候補リストアップ', due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'VPoE/CTO候補', count: 1, date: '2025/2/15', dept: 'PERM' },
    ],
  },
  66: {
    basicInfo: { company: 'リクルート', dept: 'データサイエンス部', clientPerson: '渡辺VPoE、斎藤 DS部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'プロダクト開発本部 バックエンド刷新PJ', current: 'データサイエンス部 ML基盤エンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/10', attendees: '斎藤DS部長、佐藤', content: 'ML基盤のインフラ刷新ニーズ。Kubeflow/MLflow環境構築。' },
    ],
    tasks: [
      { status: 'pending', name: 'MLOpsエンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'MLOpsエンジニア', count: 2, date: '2025/2/10', dept: 'ITSS' },
    ],
  },

  // ===== 楽天グループ =====
  67: {
    basicInfo: { company: '楽天グループ', dept: 'コマース開発本部', clientPerson: '井上 コマースCTO', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'コマース開発本部 マイクロサービス化PJ', next: null, branches: ['コマース開発本部 パフォーマンス改善PJ', 'コマース開発本部 データパイプライン構築'] },
    meetings: [
      { round: 3, date: '2025/3/10', attendees: '井上CTO、佐藤', content: 'マイクロサービス化の第1フェーズ完了報告。パフォーマンス改善とデータ基盤の追加支援を依頼。' },
      { round: 2, date: '2025/2/15', attendees: '井上CTO、佐藤', content: 'マイクロサービス設計レビュー。ドメイン分割方針を確定。' },
      { round: 1, date: '2025/1/20', attendees: '井上CTO、佐藤', content: '初回訪問。モノリスからの脱却が最重要課題。' },
    ],
    tasks: [
      { status: 'pending', name: 'マイクロサービスアーキテクト追加候補', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'マイクロサービスアーキテクト', count: 1, date: '2025/3/10', dept: 'ITSS' },
      { title: 'Javaバックエンドエンジニア', count: 3, date: '2025/1/20', dept: 'ITSS' },
    ],
  },
  68: {
    basicInfo: { company: '楽天グループ', dept: 'コマース開発本部 パフォーマンスチーム', clientPerson: '井上CTO、川崎 パフォーマンスリード', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'コマース開発本部 マイクロサービス化PJ', current: 'コマース開発本部 パフォーマンス改善PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/25', attendees: '川崎リード、佐藤', content: '大規模セール時のパフォーマンス問題対応。負荷試験専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '負荷試験エンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'パフォーマンスエンジニア', count: 2, date: '2025/2/25', dept: 'ITSS' },
    ],
  },
  69: {
    basicInfo: { company: '楽天グループ', dept: 'フィンテック事業部', clientPerson: '森 フィンテック事業部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'フィンテック事業部 決済基盤刷新', next: null, branches: ['フィンテック事業部 ブロックチェーン検証PJ'] },
    meetings: [
      { round: 2, date: '2025/3/5', attendees: '森部長、鈴木', content: '決済基盤刷新の技術選定完了。Go言語＋gRPCで再構築。' },
      { round: 1, date: '2025/2/10', attendees: '森部長、鈴木', content: '初回訪問。決済基盤のスケーラビリティ課題。' },
    ],
    tasks: [
      { status: 'pending', name: 'Go/gRPCエンジニア候補提出', due: '2025/3/20', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'Go/gRPCエンジニア', count: 2, date: '2025/3/5', dept: 'ITSS' },
      { title: '決済システムアーキテクト', count: 1, date: '2025/3/5', dept: 'ITSS' },
    ],
  },
  70: {
    basicInfo: { company: '楽天グループ', dept: 'フィンテック事業部 ブロックチェーンチーム', clientPerson: '森部長、西田 BCリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'フィンテック事業部 決済基盤刷新', current: 'フィンテック事業部 ブロックチェーン検証PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/1', attendees: '西田リーダー、山本', content: 'ブロックチェーン技術のPoC支援依頼。Solidity/Rust経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'ブロックチェーンエンジニア候補提出', due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'ブロックチェーンエンジニア（Solidity）', count: 1, date: '2025/3/1', dept: 'DSL' },
      { title: 'スマートコントラクト監査人', count: 1, date: '2025/3/1', dept: 'DSL' },
    ],
  },
  71: {
    basicInfo: { company: '楽天グループ', dept: 'モバイル事業部', clientPerson: '橋本 モバイル開発部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '完了' },
    tree: { parent: null, current: 'モバイル事業部 Flutter開発人材支援', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '橋本部長、佐藤', content: 'Flutter開発チーム立ち上げ完了。3名の稼働を確認。' },
      { round: 1, date: '2025/1/15', attendees: '橋本部長、佐藤', content: 'Flutter/Dartエンジニアの支援依頼。' },
    ],
    tasks: [
      { status: 'done', name: 'Flutter開発チーム 立ち上げ完了報告', due: '2025/2/25', assignee: '佐藤 次郎' },
    ], jobs: [
      { title: 'Flutterエンジニア', count: 3, date: '2025/1/15', dept: 'ITSS' },
    ],
  },
  72: {
    basicInfo: { company: '楽天グループ', dept: 'AI推進室', clientPerson: '大西 AI推進室長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'AI推進室 レコメンドエンジン開発', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/15', attendees: '大西室長、山本', content: 'レコメンドエンジンの精度向上PJ。深層学習専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '深層学習エンジニア候補提出', due: '2025/3/18', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: '深層学習エンジニア（推薦システム）', count: 2, date: '2025/2/15', dept: 'DSL' },
    ],
  },
  73: {
    basicInfo: { company: '楽天グループ', dept: '人事本部', clientPerson: '吉田 CHRO', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'toBマーケ', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: null, current: '人事本部 テックリード採用支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/20', attendees: '吉田CHRO、田中', content: 'テックリード層の中途採用強化。グローバル人材を希望。' },
    ],
    tasks: [
      { status: 'pending', name: 'テックリード候補リストアップ', due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'テックリード（グローバル）', count: 2, date: '2025/2/20', dept: 'PERM' },
    ],
  },
  74: {
    basicInfo: { company: '楽天グループ', dept: 'コマース開発本部 データチーム', clientPerson: '井上CTO、安藤 データリード', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'コマース開発本部 マイクロサービス化PJ', current: 'コマース開発本部 データパイプライン構築', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/28', attendees: '安藤リード、佐藤', content: 'データパイプラインの刷新ニーズ。Apache Kafka/Flinkの知見が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'データパイプラインエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'データパイプラインエンジニア（Kafka）', count: 2, date: '2025/2/28', dept: 'ITSS' },
    ],
  },

  // ===== KDDI =====
  75: {
    basicInfo: { company: 'KDDI', dept: 'ネットワーク技術本部', clientPerson: '松本 ネットワーク本部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'ネットワーク技術本部 5G基盤開発PJ', next: null, branches: ['ネットワーク技術本部 ネットワーク自動化', '5G/6G推進室 エッジコンピューティング開発'] },
    meetings: [
      { round: 2, date: '2025/3/3', attendees: '松本本部長、鈴木', content: '5G基盤開発の進捗確認。自動化とエッジの追加ニーズが発生。' },
      { round: 1, date: '2025/2/1', attendees: '松本本部長、鈴木', content: '初回訪問。5G基盤の開発体制強化ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: '5Gエンジニア候補追加提出', due: '2025/3/20', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: '5G基盤エンジニア', count: 3, date: '2025/2/1', dept: 'ITSS' },
      { title: 'ネットワークアーキテクト', count: 1, date: '2025/3/3', dept: 'ITSS' },
    ],
  },
  76: {
    basicInfo: { company: 'KDDI', dept: 'ネットワーク技術本部 自動化チーム', clientPerson: '松本本部長、石川 自動化リーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: 'ネットワーク技術本部 5G基盤開発PJ', current: 'ネットワーク技術本部 ネットワーク自動化', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/20', attendees: '石川リーダー、鈴木', content: 'ネットワーク自動化のAnsible/Terraform導入支援。' },
    ],
    tasks: [
      { status: 'pending', name: 'ネットワーク自動化エンジニア候補提出', due: '2025/3/15', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'ネットワーク自動化エンジニア', count: 2, date: '2025/2/20', dept: 'ITSS' },
    ],
  },
  77: {
    basicInfo: { company: 'KDDI', dept: '5G/6G推進室', clientPerson: '松本本部長、藤田 5G推進室長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'ネットワーク技術本部 5G基盤開発PJ', current: '5G/6G推進室 エッジコンピューティング開発', next: null, branches: ['5G/6G推進室 次世代通信プロトコル研究'] },
    meetings: [
      { round: 1, date: '2025/2/28', attendees: '藤田室長、佐藤', content: 'エッジコンピューティング開発のエンジニア支援依頼。低レイテンシ処理の知見が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'エッジコンピューティングエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'エッジコンピューティングエンジニア', count: 2, date: '2025/2/28', dept: 'ITSS' },
    ],
  },
  78: {
    basicInfo: { company: 'KDDI', dept: '5G/6G推進室 研究チーム', clientPerson: '藤田室長、中島 研究リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: '5G/6G推進室 エッジコンピューティング開発', current: '5G/6G推進室 次世代通信プロトコル研究', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/15', attendees: '中島リーダー、山本', content: '次世代通信プロトコルの研究支援。QUIC/HTTP3の専門家が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '通信プロトコル研究者候補提出', due: '2025/3/22', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: '通信プロトコル研究者', count: 1, date: '2025/2/15', dept: 'DSL' },
    ],
  },
  79: {
    basicInfo: { company: 'KDDI', dept: 'DX推進本部', clientPerson: '高田 DX推進本部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'toBマーケ', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'DX推進本部 顧客基盤システム刷新', next: null, branches: ['DX推進本部 データ分析基盤構築'] },
    meetings: [
      { round: 2, date: '2025/2/28', attendees: '高田本部長、山本', content: '顧客基盤システム刷新の設計完了。データ分析基盤の追加支援を依頼。' },
      { round: 1, date: '2025/2/1', attendees: '高田本部長、山本', content: '初回訪問。顧客データ基盤の刷新ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: 'データ基盤アーキテクト候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'データ基盤アーキテクト', count: 1, date: '2025/2/28', dept: 'DSL' },
      { title: 'バックエンドエンジニア', count: 2, date: '2025/2/1', dept: 'DSL' },
    ],
  },
  80: {
    basicInfo: { company: 'KDDI', dept: 'DX推進本部 データ分析チーム', clientPerson: '高田本部長、川口 データ分析リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '完了' },
    tree: { parent: 'DX推進本部 顧客基盤システム刷新', current: 'DX推進本部 データ分析基盤構築', next: null, branches: [] },
    meetings: [
      { round: 2, date: '2025/2/10', attendees: '川口リーダー、山本', content: 'データ分析基盤構築完了。Snowflake環境の運用開始。' },
      { round: 1, date: '2025/1/15', attendees: '川口リーダー、山本', content: 'データ分析基盤の設計支援依頼。' },
    ],
    tasks: [
      { status: 'done', name: 'データ分析基盤 Snowflake運用開始報告', due: '2025/2/15', assignee: '山本 三郎' },
    ], jobs: [
      { title: 'データアナリスト', count: 2, date: '2025/1/15', dept: 'DSL' },
    ],
  },
  81: {
    basicInfo: { company: 'KDDI', dept: 'プラットフォーム開発部', clientPerson: '平田 プラットフォーム部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'プラットフォーム開発部 APIプラットフォーム構築', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/25', attendees: '平田部長、佐藤', content: 'APIプラットフォーム構築支援。GraphQL/REST APIの設計経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'APIエンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'APIプラットフォームエンジニア', count: 2, date: '2025/2/25', dept: 'ITSS' },
    ],
  },
  82: {
    basicInfo: { company: 'KDDI', dept: 'セキュリティ統括部', clientPerson: '三浦 CISO', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'セキュリティ統括部 SOC構築支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/18', attendees: '三浦CISO、鈴木', content: 'SOC（セキュリティオペレーションセンター）構築支援。SIEM運用経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'SOCアナリスト候補提出', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'SOCアナリスト', count: 2, date: '2025/2/18', dept: 'ITSS' },
      { title: 'SIEM運用エンジニア', count: 1, date: '2025/2/18', dept: 'ITSS' },
    ],
  },

  // ===== ソニーグループ =====
  83: {
    basicInfo: { company: 'ソニーグループ', dept: 'R&D本部', clientPerson: '村上 R&D本部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'toBマーケ', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'R&D本部 画像処理エンジン開発PJ', next: null, branches: ['R&D本部 量子コンピューティング研究支援', 'R&D本部 コンピュータビジョン研究強化'] },
    meetings: [
      { round: 2, date: '2025/3/12', attendees: '村上本部長、佐藤', content: '画像処理エンジン開発順調。量子コンピューティングとCV研究の追加支援を依頼。' },
      { round: 1, date: '2025/2/10', attendees: '村上本部長、佐藤', content: '初回訪問。次世代画像処理エンジンの開発体制強化ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: '画像処理エンジニア追加候補提出', due: '2025/3/25', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: '画像処理エンジニア（C++/CUDA）', count: 3, date: '2025/2/10', dept: 'ITSS' },
    ],
  },
  84: {
    basicInfo: { company: 'ソニーグループ', dept: 'R&D本部 量子チーム', clientPerson: '村上本部長、小野 量子研究リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'R&D本部 画像処理エンジン開発PJ', current: 'R&D本部 量子コンピューティング研究支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/1', attendees: '小野リーダー、山本', content: '量子コンピューティング研究の人材支援依頼。量子アルゴリズムの研究者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '量子コンピューティング研究者候補提出', due: '2025/3/25', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: '量子コンピューティング研究者', count: 1, date: '2025/3/1', dept: 'DSL' },
    ],
  },
  85: {
    basicInfo: { company: 'ソニーグループ', dept: 'ゲーム&ネットワークサービス部', clientPerson: '田村 ゲーム開発部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'ゲーム&ネットワークサービス部 バックエンド強化PJ', next: null, branches: ['ゲーム&ネットワークサービス部 リアルタイム通信基盤'] },
    meetings: [
      { round: 2, date: '2025/3/5', attendees: '田村部長、佐藤', content: 'バックエンド強化の進捗確認。リアルタイム通信基盤の追加支援を依頼。' },
      { round: 1, date: '2025/2/10', attendees: '田村部長、佐藤', content: '大規模オンラインゲームのバックエンド強化ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: 'ゲームバックエンドエンジニア候補提出', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'ゲームバックエンドエンジニア（Go/Rust）', count: 2, date: '2025/2/10', dept: 'ITSS' },
    ],
  },
  86: {
    basicInfo: { company: 'ソニーグループ', dept: 'ゲーム&ネットワークサービス部 通信チーム', clientPerson: '田村部長、佐野 通信リーダー', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: 'ゲーム&ネットワークサービス部 バックエンド強化PJ', current: 'ゲーム&ネットワークサービス部 リアルタイム通信基盤', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/25', attendees: '佐野リーダー、佐藤', content: 'WebSocket/WebRTCベースのリアルタイム通信基盤構築。低レイテンシ実装の経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'リアルタイム通信エンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'リアルタイム通信エンジニア', count: 2, date: '2025/2/25', dept: 'ITSS' },
    ],
  },
  87: {
    basicInfo: { company: 'ソニーグループ', dept: '半導体事業部', clientPerson: '原田 半導体事業部長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '完了' },
    tree: { parent: null, current: '半導体事業部 EDA設計エンジニア支援', next: null, branches: ['半導体事業部 検証自動化PJ'] },
    meetings: [
      { round: 2, date: '2025/2/20', attendees: '原田部長、鈴木', content: 'EDA設計エンジニア2名の稼働確認。検証自動化の追加支援を依頼。' },
      { round: 1, date: '2025/1/20', attendees: '原田部長、鈴木', content: 'EDA設計ツールの運用エンジニア支援依頼。' },
    ],
    tasks: [
      { status: 'done', name: 'EDA設計エンジニア 稼働確認完了', due: '2025/2/25', assignee: '鈴木 一郎' },
    ], jobs: [
      { title: 'EDA設計エンジニア', count: 2, date: '2025/1/20', dept: 'ITSS' },
    ],
  },
  88: {
    basicInfo: { company: 'ソニーグループ', dept: '半導体事業部 検証チーム', clientPerson: '原田部長、内藤 検証リーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: '半導体事業部 EDA設計エンジニア支援', current: '半導体事業部 検証自動化PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/15', attendees: '内藤リーダー、山本', content: '半導体検証の自動化ツール開発支援。SystemVerilog/UVM経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '検証自動化エンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: '検証自動化エンジニア（SystemVerilog）', count: 2, date: '2025/2/15', dept: 'DSL' },
    ],
  },
  89: {
    basicInfo: { company: 'ソニーグループ', dept: '人事部', clientPerson: '清水 人事部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'toBマーケ', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: null, current: '人事部 エンジニア中途採用強化', next: null, branches: ['人事部 AI研究者ヘッドハンティング'] },
    meetings: [
      { round: 2, date: '2025/3/5', attendees: '清水部長、田中', content: 'エンジニア採用の進捗確認。AI研究者のヘッドハンティングを追加依頼。' },
      { round: 1, date: '2025/2/5', attendees: '清水部長、田中', content: '初回訪問。エンジニア中途採用の包括的支援依頼。' },
    ],
    tasks: [
      { status: 'pending', name: 'シニアエンジニア候補スカウト', due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'シニアエンジニア（ソフトウェア）', count: 3, date: '2025/2/5', dept: 'PERM' },
    ],
  },
  90: {
    basicInfo: { company: 'ソニーグループ', dept: '人事部', clientPerson: '清水人事部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: '人事部 エンジニア中途採用強化', current: '人事部 AI研究者ヘッドハンティング', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/25', attendees: '清水部長、田中', content: 'AI研究者（PhD）のヘッドハンティング依頼。自然言語処理またはCV専門。' },
    ],
    tasks: [
      { status: 'pending', name: 'AI研究者候補リストアップ', due: '2025/3/25', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'AI研究者（PhD、NLP/CV）', count: 2, date: '2025/2/25', dept: 'PERM' },
    ],
  },
  91: {
    basicInfo: { company: 'ソニーグループ', dept: 'AIロボティクス研究所', clientPerson: '山下 AIロボティクス所長', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: 'AIロボティクス研究所 自律制御エンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/28', attendees: '山下所長、鈴木', content: '自律制御システムのエンジニア支援依頼。ROS2/C++の経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'ROS2エンジニア候補提出', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: '自律制御エンジニア（ROS2/C++）', count: 2, date: '2025/2/28', dept: 'ITSS' },
    ],
  },
  92: {
    basicInfo: { company: 'ソニーグループ', dept: 'R&D本部 CVチーム', clientPerson: '村上本部長、工藤 CVリーダー', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: 'R&D本部 画像処理エンジン開発PJ', current: 'R&D本部 コンピュータビジョン研究強化', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/18', attendees: '工藤リーダー、山本', content: 'CV研究チームの強化支援。3Dビジョンの研究者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: '3Dビジョン研究者候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: '3Dビジョン研究者', count: 1, date: '2025/2/18', dept: 'DSL' },
      { title: 'コンピュータビジョンエンジニア', count: 2, date: '2025/2/18', dept: 'DSL' },
    ],
  },

  // ===== 既存企業追加分 =====
  93: {
    basicInfo: { company: 'NTTデータ', dept: '製造事業部 AI推進チーム', clientPerson: '山田部長、木村 AI推進リーダー', ourPerson: '鈴木 一郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '鈴木 一郎', status: '実施済' },
    tree: { parent: null, current: '製造事業部 AI外観検査PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/8', attendees: '木村リーダー、鈴木', content: 'AI外観検査システムのエンジニア支援依頼。PyTorch/OpenCV経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'AI外観検査エンジニア候補提出', due: '2025/3/22', assignee: '鈴木 一郎' },
    ],
    jobs: [
      { title: 'AI外観検査エンジニア（PyTorch）', count: 2, date: '2025/3/8', dept: 'ITSS' },
    ],
  },
  94: {
    basicInfo: { company: '富士通', dept: 'デジタル推進部 データチーム', clientPerson: 'デジタル推進部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '予定' },
    tree: { parent: null, current: 'デジタル推進部 データメッシュ導入PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/10', attendees: 'デジタル推進部長、佐藤', content: 'データメッシュアーキテクチャの導入検討。次回詳細ヒアリング予定。' },
    ],
    tasks: [
      { status: 'pending', name: 'データメッシュ提案資料作成', due: '2025/3/20', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'データメッシュアーキテクト', count: 1, date: '2025/3/10', dept: 'ITSS' },
    ],
  },
  95: {
    basicInfo: { company: 'ノースサンド', dept: '戦略企画部', clientPerson: '戦略企画部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: '戦略企画部 IT戦略コンサル支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/2/28', attendees: '戦略企画部長、山本', content: 'IT戦略策定のコンサルタント支援依頼。' },
    ],
    tasks: [
      { status: 'pending', name: 'ITコンサルタント候補提出', due: '2025/3/18', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'IT戦略コンサルタント', count: 2, date: '2025/2/28', dept: 'DSL' },
    ],
  },
  96: {
    basicInfo: { company: 'Sansan', dept: 'セキュリティ部門', clientPerson: 'セキュリティ部門長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'セキュリティ部門 脆弱性診断エンジニア支援', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/5', attendees: 'セキュリティ部門長、佐藤', content: '脆弱性診断チームの体制強化ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: '脆弱性診断エンジニア候補提出', due: '2025/3/22', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: '脆弱性診断エンジニア', count: 2, date: '2025/3/5', dept: 'ITSS' },
    ],
  },
  97: {
    basicInfo: { company: 'トヨタ自動車', dept: 'HR・人事部', clientPerson: 'HR・人事部長', ourPerson: '田中 花子', businessDept: 'PERM', channel: 'IS', acquiredBy: '田中 花子', status: '実施済' },
    tree: { parent: null, current: 'HR・人事部 タレントマネジメント導入PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/1', attendees: 'HR・人事部長、田中', content: 'タレントマネジメントシステム導入支援の人材ニーズ。' },
    ],
    tasks: [
      { status: 'pending', name: 'HRテック専門家候補提出', due: '2025/3/22', assignee: '田中 花子' },
    ],
    jobs: [
      { title: 'HRテック導入コンサルタント', count: 1, date: '2025/3/1', dept: 'PERM' },
    ],
  },
  98: {
    basicInfo: { company: '日立製作所', dept: 'AI&データサイエンス部', clientPerson: 'AI&DS部長', ourPerson: '山本 三郎', businessDept: 'DSL', channel: 'IS', acquiredBy: '山本 三郎', status: '実施済' },
    tree: { parent: null, current: 'AI&データサイエンス部 MLOps基盤構築', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/5', attendees: 'AI&DS部長、山本', content: 'MLOps基盤の構築支援依頼。Kubeflow/Vertex AIの経験者が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'MLOpsエンジニア候補提出', due: '2025/3/20', assignee: '山本 三郎' },
    ],
    jobs: [
      { title: 'MLOpsエンジニア（Kubeflow）', count: 2, date: '2025/3/5', dept: 'DSL' },
    ],
  },
  99: {
    basicInfo: { company: 'リクルート', dept: 'インフラ運用部', clientPerson: 'インフラ運用部長', ourPerson: '佐藤 次郎', businessDept: 'ITSS', channel: 'IS', acquiredBy: '佐藤 次郎', status: '実施済' },
    tree: { parent: null, current: 'インフラ運用部 クラウド移行支援PJ', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/1', attendees: 'インフラ運用部長、佐藤', content: 'オンプレミスからクラウドへの移行支援。AWS/GCP両対応が必要。' },
    ],
    tasks: [
      { status: 'pending', name: 'クラウド移行エンジニア候補提出', due: '2025/3/18', assignee: '佐藤 次郎' },
    ],
    jobs: [
      { title: 'クラウド移行エンジニア', count: 2, date: '2025/3/1', dept: 'ITSS' },
    ],
  },
  100: {
    basicInfo: { company: '楽天グループ', dept: 'グローバル開発部', clientPerson: 'グローバル開発部長', ourPerson: '伊藤 美咲', businessDept: 'FS', channel: 'toBマーケ', acquiredBy: '伊藤 美咲', status: '実施済' },
    tree: { parent: null, current: 'グローバル開発部 オフショア開発体制構築', next: null, branches: [] },
    meetings: [
      { round: 1, date: '2025/3/8', attendees: 'グローバル開発部長、伊藤', content: 'オフショア開発体制の構築支援。ブリッジSEの確保が急務。' },
    ],
    tasks: [
      { status: 'pending', name: 'ブリッジSE候補提出', due: '2025/3/22', assignee: '伊藤 美咲' },
    ],
    jobs: [
      { title: 'ブリッジSE（英語/日本語）', count: 2, date: '2025/3/8', dept: 'FS' },
      { title: 'オフショアPM', count: 1, date: '2025/3/8', dept: 'FS' },
    ],
  },
}

export const TASKS = [
  { id: 1,  type: 'Task',     name: 'COBOLエンジニア追加候補者ピック',       company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/10', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 2  },
  { id: 2,  type: 'Task',     name: 'HR部門 商談前資料準備・送付',           company: '富士通',        category: '資料作成',       due: '2025/3/12', assignee: '田中 花子', method: 'メール',  status: 'in_progress',   dealId: 10 },
  { id: 3,  type: 'Activity', name: 'Goエンジニア候補フォロー電話',          company: 'Sansan',        category: 'アポ依頼',       due: '2025/3/10', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 21 },
  { id: 4,  type: 'Task',     name: 'ITコンサル最終候補者確認',              company: 'トヨタ自動車',  category: '候補者ピック',   due: '2025/3/15', assignee: '山本 三郎', method: 'その他',  status: 'pending', dealId: 24 },
  { id: 5,  type: 'Activity', name: 'SAP移行フェーズ2提案資料送付',          company: 'トヨタ自動車',  category: '資料作成',       due: '2025/3/11', assignee: '山本 三郎', method: 'メール',  status: 'done',    dealId: 25 },
  { id: 6,  type: 'Task',     name: 'NTTデータ 契約書取交し確認',            company: 'NTTデータ',    category: '契約書取交し',   due: '2025/3/20', assignee: '田中 花子', method: 'その他',  status: 'pending', dealId: 2  },
  { id: 7,  type: 'Task',     name: 'IoTエンジニア候補者最終調整',           company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 6  },
  { id: 8,  type: 'Activity', name: 'Sansan展示会フォローアップ電話',        company: 'Sansan',        category: 'アポ依頼',       due: '2025/3/9',  assignee: '伊藤 美咲', method: '電話',    status: 'done',    dealId: null },
  { id: 9,  type: 'Task',     name: 'Kubernetes候補スキルシート確認',        company: '富士通',        category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 12 },
  { id: 10, type: 'Task',     name: 'AWSエンジニア候補提出（5名）',          company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/15', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 3  },
  { id: 11, type: 'Activity', name: 'CTO候補スカウトメール送付',             company: '富士通',        category: '求人取得依頼',   due: '2025/3/8',  assignee: '田中 花子', method: 'メール',  status: 'done',    dealId: 11 },
  { id: 12, type: 'Task',     name: '富士通 DXアーキテクト候補提出',         company: '富士通',        category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 14 },
  { id: 13, type: 'Task',     name: 'フェーズ2提案資料作成（NTTデータ）',   company: 'NTTデータ',    category: '資料作成',       due: '2025/3/20', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 2  },
  { id: 14, type: 'Activity', name: 'セキュリティエンジニア要件ヒアリング', company: 'NTTデータ',    category: '求人取得依頼',   due: '2025/3/5',  assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 5  },
  { id: 15, type: 'Task',     name: 'トヨタ 車載C++エンジニアピック',        company: 'トヨタ自動車',  category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 31 },
  { id: 16, type: 'Task',     name: 'LLM/RAGエンジニア候補提出（富士通）',  company: '富士通',        category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 38 },
  { id: 17, type: 'Activity', name: 'グローバルSAPコンサル要件確認電話',    company: 'トヨタ自動車',  category: '求人取得依頼',   due: '2025/3/12', assignee: '山本 三郎', method: '電話',    status: 'done',    dealId: 46 },
  { id: 18, type: 'Task',     name: 'Sansan フロントエンドエンジニア候補提出', company: 'Sansan',     category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 43 },
  { id: 19, type: 'Task',     name: 'ノースサンド BPRコンサル候補提出',     company: 'ノースサンド',  category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 42 },
  { id: 20, type: 'Activity', name: 'FPGAエンジニア市場調査レポート作成',   company: 'トヨタ自動車',  category: '資料作成',       due: '2025/3/10', assignee: '鈴木 一郎', method: 'メール',  status: 'done',    dealId: 47 },
  // 日立製作所
  { id: 21, type: 'Task',     name: 'Javaアーキテクト候補3名提出',             company: '日立製作所',    category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 51 },
  { id: 22, type: 'Task',     name: 'Kubernetesエンジニア候補提出',            company: '日立製作所',    category: '候補者ピック',   due: '2025/3/18', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 52 },
  { id: 23, type: 'Task',     name: 'IoTエンジニア候補2名提出',                company: '日立製作所',    category: '候補者ピック',   due: '2025/3/22', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 53 },
  { id: 24, type: 'Task',     name: 'MLエンジニア候補提出（日立）',            company: '日立製作所',    category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 54 },
  { id: 25, type: 'Task',     name: 'SREエンジニア候補提出（日立）',           company: '日立製作所',    category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 56 },
  { id: 26, type: 'Task',     name: 'テックリード候補スカウト（日立）',        company: '日立製作所',    category: '候補者ピック',   due: '2025/3/22', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 57 },
  { id: 27, type: 'Task',     name: 'CTO補佐候補リストアップ',                company: '日立製作所',    category: '候補者ピック',   due: '2025/3/25', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 58 },
  { id: 28, type: 'Task',     name: 'AWS認定エンジニア候補提出',              company: '日立製作所',    category: '候補者ピック',   due: '2025/3/15', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 59 },
  { id: 29, type: 'Task',     name: 'データエンジニア候補提出（日立Lumada）',  company: '日立製作所',    category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 60 },
  { id: 30, type: 'Activity', name: '日立製作所 DevOps導入完了報告確認',       company: '日立製作所',    category: '資料作成',       due: '2025/3/5',  assignee: '佐藤 次郎', method: 'メール',  status: 'done',    dealId: 55 },
  { id: 31, type: 'Task',     name: 'MLOpsエンジニア候補提出（日立AI&DS）',    company: '日立製作所',    category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 98 },
  // リクルート
  { id: 32, type: 'Task',     name: 'Goエンジニア追加候補提出（リクルート）',  company: 'リクルート',    category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 61 },
  { id: 33, type: 'Task',     name: 'React/TS エンジニア候補提出',            company: 'リクルート',    category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 62 },
  { id: 34, type: 'Task',     name: 'シニアエンジニア候補スカウト（リクルート）', company: 'リクルート', category: '候補者ピック',   due: '2025/3/22', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 64 },
  { id: 35, type: 'Task',     name: 'VPoE候補リストアップ',                   company: 'リクルート',    category: '候補者ピック',   due: '2025/3/25', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 65 },
  { id: 36, type: 'Task',     name: 'MLOpsエンジニア候補提出（リクルート）',   company: 'リクルート',    category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 66 },
  { id: 37, type: 'Activity', name: 'リクルートSRE人材稼働確認',              company: 'リクルート',    category: 'アポ依頼',       due: '2025/3/5',  assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 63 },
  { id: 38, type: 'Task',     name: 'クラウド移行エンジニア候補提出',         company: 'リクルート',    category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 99 },
  // 楽天グループ
  { id: 39, type: 'Task',     name: 'MSアーキテクト追加候補（楽天）',         company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/22', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 67 },
  { id: 40, type: 'Task',     name: '負荷試験エンジニア候補提出',             company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 68 },
  { id: 41, type: 'Task',     name: 'Go/gRPCエンジニア候補提出（楽天）',      company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 69 },
  { id: 42, type: 'Task',     name: 'BCエンジニア候補提出',                   company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/22', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 70 },
  { id: 43, type: 'Task',     name: '深層学習エンジニア候補提出（楽天AI）',   company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/18', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 72 },
  { id: 44, type: 'Task',     name: 'テックリード候補リストアップ（楽天）',   company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/25', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 73 },
  { id: 45, type: 'Task',     name: 'データパイプラインエンジニア候補提出',   company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 74 },
  { id: 46, type: 'Activity', name: '楽天Flutter開発チーム稼働確認',          company: '楽天グループ',  category: 'アポ依頼',       due: '2025/3/1',  assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 71 },
  { id: 47, type: 'Task',     name: 'ブリッジSE候補提出（楽天）',             company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/22', assignee: '伊藤 美咲', method: 'メール',  status: 'pending', dealId: 100 },
  // KDDI
  { id: 48, type: 'Task',     name: '5Gエンジニア候補追加提出',               company: 'KDDI',          category: '候補者ピック',   due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 75 },
  { id: 49, type: 'Task',     name: 'NW自動化エンジニア候補提出',             company: 'KDDI',          category: '候補者ピック',   due: '2025/3/15', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 76 },
  { id: 50, type: 'Task',     name: 'エッジコンピューティングEng候補提出',    company: 'KDDI',          category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 77 },
  { id: 51, type: 'Task',     name: '通信プロトコル研究者候補提出',           company: 'KDDI',          category: '候補者ピック',   due: '2025/3/22', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 78 },
  { id: 52, type: 'Task',     name: 'データ基盤アーキテクト候補提出',         company: 'KDDI',          category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 79 },
  { id: 53, type: 'Task',     name: 'APIエンジニア候補提出（KDDI）',          company: 'KDDI',          category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 81 },
  { id: 54, type: 'Task',     name: 'SOCアナリスト候補提出',                  company: 'KDDI',          category: '候補者ピック',   due: '2025/3/22', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 82 },
  { id: 55, type: 'Activity', name: 'KDDI データ分析基盤納品完了確認',        company: 'KDDI',          category: '資料作成',       due: '2025/2/15', assignee: '山本 三郎', method: 'メール',  status: 'done',    dealId: 80 },
  // ソニーグループ
  { id: 56, type: 'Task',     name: '画像処理エンジニア追加候補提出',         company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/25', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 83 },
  { id: 57, type: 'Task',     name: '量子コンピューティング研究者候補提出',   company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/25', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 84 },
  { id: 58, type: 'Task',     name: 'ゲームバックエンドEng候補提出',          company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 85 },
  { id: 59, type: 'Task',     name: 'リアルタイム通信Eng候補提出',            company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 86 },
  { id: 60, type: 'Task',     name: '検証自動化エンジニア候補提出',           company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 88 },
  { id: 61, type: 'Task',     name: 'シニアEng候補スカウト（ソニー）',        company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/22', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 89 },
  { id: 62, type: 'Task',     name: 'AI研究者候補リストアップ（ソニー）',     company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/25', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 90 },
  { id: 63, type: 'Task',     name: 'ROS2エンジニア候補提出',                 company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/22', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 91 },
  { id: 64, type: 'Task',     name: '3Dビジョン研究者候補提出',               company: 'ソニーグループ', category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 92 },
  { id: 65, type: 'Activity', name: 'ソニー EDA設計Eng稼働確認',              company: 'ソニーグループ', category: 'アポ依頼',       due: '2025/2/25', assignee: '鈴木 一郎', method: '電話',    status: 'done',    dealId: 87 },
  // 既存企業追加分
  { id: 66, type: 'Task',     name: 'AI外観検査エンジニア候補提出',           company: 'NTTデータ',    category: '候補者ピック',   due: '2025/3/22', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 93 },
  { id: 67, type: 'Task',     name: 'データメッシュ提案資料作成',             company: '富士通',        category: '資料作成',       due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 94 },
  { id: 68, type: 'Task',     name: 'ITコンサルタント候補提出',               company: 'ノースサンド',  category: '候補者ピック',   due: '2025/3/18', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 95 },
  { id: 69, type: 'Task',     name: '脆弱性診断エンジニア候補提出',           company: 'Sansan',        category: '候補者ピック',   due: '2025/3/22', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 96 },
  { id: 70, type: 'Task',     name: 'HRテック専門家候補提出',                 company: 'トヨタ自動車',  category: '候補者ピック',   due: '2025/3/22', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 97 },
  // 追加の多様なTask/Activity
  { id: 71, type: 'Activity', name: '日立 Lumada事業部 次回面談調整',         company: '日立製作所',    category: 'アポ依頼',       due: '2025/3/12', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 53 },
  { id: 72, type: 'Activity', name: '楽天 フィンテック部門 要件確認電話',     company: '楽天グループ',  category: '求人取得依頼',   due: '2025/3/8',  assignee: '鈴木 一郎', method: '電話',    status: 'done',    dealId: 69 },
  { id: 73, type: 'Task',     name: 'KDDI ネットワーク本部 提案書作成',       company: 'KDDI',          category: '資料作成',       due: '2025/3/15', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 75 },
  { id: 74, type: 'Activity', name: 'ソニー R&D本部 面談フォローアップ',      company: 'ソニーグループ', category: 'アポ依頼',       due: '2025/3/15', assignee: '佐藤 次郎', method: '電話',    status: 'pending', dealId: 83 },
  { id: 75, type: 'Task',     name: 'NTTデータ AI外観検査 スキルシート準備',  company: 'NTTデータ',    category: '資料作成',       due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 93 },
  { id: 76, type: 'Activity', name: '楽天 人事本部 契約条件確認',             company: '楽天グループ',  category: '契約書取交し',   due: '2025/3/10', assignee: '田中 花子', method: 'メール',  status: 'done',    dealId: 73 },
  { id: 77, type: 'Task',     name: '日立 クラウドサービス部 追加求人取得',   company: '日立製作所',    category: '求人取得依頼',   due: '2025/3/18', assignee: '鈴木 一郎', method: '電話',    status: 'pending', dealId: 59 },
  { id: 78, type: 'Activity', name: 'KDDI DX推進本部 進捗報告送付',          company: 'KDDI',          category: '資料作成',       due: '2025/3/5',  assignee: '山本 三郎', method: 'メール',  status: 'done',    dealId: 79 },
  { id: 79, type: 'Task',     name: 'リクルート DS部 面談前資料準備',         company: 'リクルート',    category: '資料作成',       due: '2025/3/15', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 66 },
  { id: 80, type: 'Activity', name: 'ソニー 半導体事業部 追加ニーズ確認',     company: 'ソニーグループ', category: '求人取得依頼',   due: '2025/3/8',  assignee: '山本 三郎', method: '電話',    status: 'done',    dealId: 88 },
  { id: 81, type: 'Task',     name: '日立 人財統括本部 契約書ドラフト作成',   company: '日立製作所',    category: '契約書取交し',   due: '2025/3/25', assignee: '田中 花子', method: 'その他',  status: 'pending', dealId: 57 },
  { id: 82, type: 'Activity', name: '楽天 コマース開発 月次レビュー調整',     company: '楽天グループ',  category: 'アポ依頼',       due: '2025/3/12', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 67 },
  { id: 83, type: 'Task',     name: 'KDDI セキュリティ統括部 提案書送付',     company: 'KDDI',          category: '資料作成',       due: '2025/3/18', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 82 },
  { id: 84, type: 'Activity', name: 'ソニー AIロボティクス 求人要件確認',     company: 'ソニーグループ', category: '求人取得依頼',   due: '2025/3/5',  assignee: '鈴木 一郎', method: '電話',    status: 'done',    dealId: 91 },
  { id: 85, type: 'Task',     name: 'NTTデータ クラウド推進 契約更新準備',    company: 'NTTデータ',    category: '契約書取交し',   due: '2025/3/25', assignee: '鈴木 一郎', method: 'その他',  status: 'pending', dealId: 35 },
  { id: 86, type: 'Activity', name: '富士通 HR部門 面談設定',                 company: '富士通',        category: 'アポ依頼',       due: '2025/3/14', assignee: '田中 花子', method: '電話',    status: 'pending', dealId: 10 },
  { id: 87, type: 'Task',     name: 'ノースサンド PMO部門 候補者追加提出',    company: 'ノースサンド',  category: '候補者ピック',   due: '2025/3/20', assignee: '田中 花子', method: 'メール',  status: 'pending', dealId: 41 },
  { id: 88, type: 'Activity', name: 'Sansan エンジニアリング本部 進捗確認',   company: 'Sansan',        category: 'アポ依頼',       due: '2025/3/10', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 21 },
  { id: 89, type: 'Task',     name: 'トヨタ 情報システム部 マイクロサービス提案', company: 'トヨタ自動車', category: '資料作成',      due: '2025/3/18', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 48 },
  { id: 90, type: 'Task',     name: '日立 Lumada AI分析基盤 提案資料更新',    company: '日立製作所',    category: '資料作成',       due: '2025/3/22', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 54 },
  { id: 91, type: 'Activity', name: 'リクルート 人事企画部 求人条件最終確認', company: 'リクルート',    category: '求人取得依頼',   due: '2025/3/12', assignee: '田中 花子', method: '電話',    status: 'done',    dealId: 64 },
  { id: 92, type: 'Task',     name: '楽天 AI推進室 レコメンドEng選定',        company: '楽天グループ',  category: '候補者ピック',   due: '2025/3/20', assignee: '山本 三郎', method: 'メール',  status: 'pending', dealId: 72 },
  { id: 93, type: 'Activity', name: 'KDDI 5G推進室 エッジ要件再確認',         company: 'KDDI',          category: '求人取得依頼',   due: '2025/3/10', assignee: '佐藤 次郎', method: '電話',    status: 'done',    dealId: 77 },
  { id: 94, type: 'Task',     name: 'ソニー ゲーム部門 追加求人取得',         company: 'ソニーグループ', category: '求人取得依頼',   due: '2025/3/20', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 85 },
  { id: 95, type: 'Task',     name: 'NTTデータ 金融部 API GW提案書更新',     company: 'NTTデータ',    category: '資料作成',       due: '2025/3/18', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 34 },
  { id: 96, type: 'Activity', name: '富士通 デジタル推進部 DX人材要件確認',   company: '富士通',        category: '求人取得依頼',   due: '2025/3/15', assignee: '佐藤 次郎', method: '電話',    status: 'pending', dealId: 14 },
  { id: 97, type: 'Task',     name: 'Sansan データ基盤部 候補者フォロー',     company: 'Sansan',        category: '候補者ピック',   due: '2025/3/22', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 45 },
  { id: 98, type: 'Activity', name: 'トヨタ コネクティッド部門 契約条件確認', company: 'トヨタ自動車',  category: '契約書取交し',   due: '2025/3/12', assignee: '鈴木 一郎', method: 'メール',  status: 'done',    dealId: 49 },
  { id: 99, type: 'Task',     name: '日立 システム統括 Java移行進捗報告',     company: '日立製作所',    category: '資料作成',       due: '2025/3/20', assignee: '鈴木 一郎', method: 'メール',  status: 'pending', dealId: 51 },
  { id: 100, type: 'Task',    name: 'KDDI プラットフォーム部 API設計レビュー', company: 'KDDI',         category: '資料作成',       due: '2025/3/22', assignee: '佐藤 次郎', method: 'メール',  status: 'pending', dealId: 81 },
]

// フィルター用定数
export const DIVISIONS = ['ITSS', 'PERM', 'DSL', 'FS'];
export const MEMBERS = USERS.map(u => u.name);
export const DEAL_ROUTES = ['IS', '営業顧問', 'toBマーケ', '展示会', '紹介'];
export const TASK_CATEGORIES = ['候補者ピック', '資料作成', 'アポ依頼', '契約書取交し', '求人取得依頼', 'フォローアップ', '面談設定', '契約更新'];
export const CONTACT_METHODS = ['電話', 'メール', 'Teams', '対面', 'その他'];
export const CONTRACT_STATUSES = ['未接触', '商談中', '契約中', '完了'];

export const MY_PAGE_DATA = {
  user: { name: '鈴木 一郎', dept: 'ITSS' },
  score: {
    initialDeals: 12,
    appointmentCount: 18,
    taskDoneCount: 42,
    jobAcquiredCount: 9,
  },
  calendarEvents: [
    { date: '3/13', dayOfWeek: '木', company: 'NTTデータ 製造事業部',          time: '14:00', dealId: 2  },
    { date: '3/14', dayOfWeek: '金', company: 'トヨタ自動車 デジタル推進本部',  time: '10:00', dealId: 24 },
    { date: '3/15', dayOfWeek: '土', company: 'NTTデータ クラウド推進本部',     time: '13:00', dealId: 35 },
    { date: '3/17', dayOfWeek: '月', company: 'トヨタ自動車 コネクティッド部門', time: '15:00', dealId: 31 },
  ],
  myTasks: [
    { status: 'pending', name: 'COBOLエンジニア追加候補者ピック',         company: 'NTTデータ 製造事業部',          due: '3/10', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'AWSエンジニア候補提出（5名）',             company: 'NTTデータ フェーズ2',           due: '3/15', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'IoTエンジニア候補最終調整',                company: 'NTTデータ DX推進室',            due: '3/20', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '組込みC/C++エンジニア候補最終確認',        company: 'トヨタ自動車 生産技術部',        due: '3/22', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '車載Linux/C++エンジニア候補ピック',        company: 'トヨタ自動車 コネクティッド',    due: '3/20', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: 'マルチクラウドアーキテクト候補提出',       company: 'NTTデータ クラウド推進本部',     due: '3/15', method: 'メール', dept: 'ITSS' },
    { status: 'pending', name: '自動運転AIエンジニア候補提出',             company: 'トヨタ自動車 AI研究所',          due: '3/20', method: 'メール', dept: 'ITSS' },
  ],
  myDeals: [
    { name: 'NTTデータ 製造事業部 レガシーマイグレーション', remainingTasks: 2, lastMeeting: '3/10', status: '実施済' },
    { name: 'NTTデータ 製造事業部 フェーズ2 クラウド移行',  remainingTasks: 3, lastMeeting: '2/28', status: '実施済' },
    { name: 'NTTデータ DX推進室 スマートファクトリー',       remainingTasks: 1, lastMeeting: '3/8',  status: '実施済' },
    { name: 'NTTデータ クラウド推進本部 マルチクラウド戦略', remainingTasks: 1, lastMeeting: '2/25', status: '実施済' },
    { name: 'トヨタ自動車 生産技術部 組込みエンジニア支援',  remainingTasks: 1, lastMeeting: '2/20', status: '実施済' },
    { name: 'トヨタ自動車 コネクティッド部門',               remainingTasks: 2, lastMeeting: '2/15', status: '実施済' },
    { name: 'トヨタ自動車 AI研究所 自動運転AI',              remainingTasks: 2, lastMeeting: '2/10', status: '実施済' },
    { name: 'NTTデータ 金融ソリューション部 基幹刷新',       remainingTasks: 0, lastMeeting: '1/30', status: '完了'   },
  ],
  notification: 'NTTデータ との契約書取交しが完了しています。契約ステータスを更新してください。',
}


// Extended company data (new CRM fields)
export const COMPANY_EXTENDED = {
  1: {
    itssAttention: 'A',
    permAttention: 'A',
    address: '東京都江東区豊洲3-3-3',
    industry: [
      'IT・通信',
      '金融'
    ],
    businessDescription: 'システムインテグレーション、コンサルティング、ITインフラ構築を主軸とした総合ITサービス企業。官公庁・金融・製造業向けの大規模システム開発に強み。',
    corporateNumber: '2010001008652',
    frmc: 'NTTデータ向けは中堅以上のシニアエンジニアを中心にご提案。金融・製造領域の業務知識があると通りやすい。単価は65-85万/月。',
    permNote: 'CA向け：大手志向の候補者に好まれる傾向。転職回数3回以内が望ましい。年収レンジ500-900万。',
    cvNote: 'アシスタント用：CV送信前に必ず担当RAに確認。写真付き履歴書必須。',
    sentPickNote: '金融知識・PM経験を重視。英語力あれば尚可。',
    maxAge: 45,
    blindSent: '可',
    blindSentMethod: 'メール',
    realNameChannel: '直接紹介',
    permAts: 'HRMOS',
    permAtsUrl: 'https://hrmos.co/nttdata',
    hiringTypes: [
      '正社員',
      '契約社員',
      'SES'
    ],
    hiringRoles: [
      'エンジニア',
      'PM',
      'コンサルタント'
    ],
    keywords: [
      'Java',
      'AWS',
      'PM',
      '金融',
      '製造'
    ]
  },
  2: {
    itssAttention: 'B',
    permAttention: 'A',
    address: '東京都港区東新橋1-5-2',
    industry: [
      'IT・通信',
      '製造'
    ],
    businessDescription: 'ICTソリューション・プロダクト・サービスをグローバルに提供する総合ITベンダー。',
    corporateNumber: '4010401052486',
    frmc: '富士通向けはインフラ系エンジニアのニーズが高い。Linux/クラウド経験者優先。',
    permNote: '新卒採用が多いためPERM中途は少ないが、専門職採用は積極的。',
    cvNote: '職務経歴書フォーマット指定あり。担当RAに確認のこと。',
    sentPickNote: 'インフラ・クラウド領域優先。',
    maxAge: 40,
    blindSent: '不可',
    blindSentMethod: '—',
    realNameChannel: 'エージェント経由',
    permAts: 'タレントパレット',
    permAtsUrl: 'https://tp.fujitsu.com',
    hiringTypes: [
      '正社員',
      'SES'
    ],
    hiringRoles: [
      'インフラエンジニア',
      'SE',
      'PM'
    ],
    keywords: [
      'Linux',
      'Azure',
      'SAP'
    ]
  },
  3: {
    itssAttention: 'A',
    permAttention: 'B',
    address: '東京都中央区銀座4-12-15',
    industry: [
      'コンサルティング'
    ],
    businessDescription: 'IT・デジタル領域のコンサルティングファーム。DX支援、ERP導入、PMO支援に強み。',
    corporateNumber: '6010001182345',
    frmc: 'SAP/ERP経験者を最優先。PMO経験者も高ニーズ。',
    permNote: 'コンサル経験者が望ましい。論理思考力重視。',
    cvNote: '英語レジュメ不要。日本語のみでOK。',
    sentPickNote: 'SAP認定資格保持者を優先。',
    maxAge: 38,
    blindSent: '可',
    blindSentMethod: 'メール',
    realNameChannel: '直接紹介',
    permAts: '自社システム',
    permAtsUrl: '',
    hiringTypes: [
      '正社員',
      '業務委託'
    ],
    hiringRoles: [
      'コンサルタント',
      'PMO',
      'SAP'
    ],
    keywords: [
      'SAP',
      'ERP',
      'PMO',
      'アジャイル'
    ]
  },
  4: {
    itssAttention: 'B',
    permAttention: 'C',
    address: '東京都渋谷区桜丘町1-1',
    industry: [
      'IT・通信',
      'SaaS'
    ],
    businessDescription: 'クラウド名刺管理サービスを中心としたBtoBプラットフォーム企業。',
    corporateNumber: '9011101062740',
    frmc: 'フロントエンド・モバイル系エンジニアのニーズ。React/TypeScript経験者。',
    permNote: 'スタートアップ志向の候補者向け。柔軟な働き方アピール。',
    cvNote: 'ポートフォリオ添付推奨。',
    sentPickNote: 'SaaS開発経験者優先。',
    maxAge: 35,
    blindSent: '可',
    blindSentMethod: 'ATS経由',
    realNameChannel: 'エージェント経由',
    permAts: 'Greenhouse',
    permAtsUrl: 'https://greenhouse.io/sansan',
    hiringTypes: [
      '正社員'
    ],
    hiringRoles: [
      'エンジニア',
      'デザイナー',
      'PdM'
    ],
    keywords: [
      'React',
      'TypeScript',
      'SaaS',
      'モバイル'
    ]
  },
  5: {
    itssAttention: 'A',
    permAttention: 'B',
    address: '愛知県豊田市トヨタ町1',
    industry: [
      '自動車',
      '製造'
    ],
    businessDescription: '世界最大級の自動車メーカー。近年はモビリティ・自動運転・EV領域のDX投資を加速。',
    corporateNumber: '3180301018771',
    frmc: '組込み系・車載ソフトウェアエンジニアが最優先。C/C++必須。',
    permNote: 'メーカー志向の候補者向け。安定志向が多い。',
    cvNote: '顔写真必須。学歴・職歴を時系列で記載。',
    sentPickNote: '車載・組込み経験を重視。AUTOSAR知識あれば尚可。',
    maxAge: 45,
    blindSent: '不可',
    blindSentMethod: '—',
    realNameChannel: '直接紹介',
    permAts: 'SAP SuccessFactors',
    permAtsUrl: 'https://sf.toyota.co.jp',
    hiringTypes: [
      '正社員',
      'SES'
    ],
    hiringRoles: [
      '組込みエンジニア',
      'AI研究者',
      'PM'
    ],
    keywords: [
      'C++',
      '組込み',
      '自動運転',
      'AI'
    ]
  },
  6: {
    itssAttention: 'A',
    permAttention: 'A',
    address: '東京都千代田区丸の内1-6-6',
    industry: [
      'IT・通信',
      '製造',
      'インフラ'
    ],
    businessDescription: '総合電機メーカー。IT・エネルギー・社会インフラ・ヘルスケア等、幅広い事業を展開。',
    corporateNumber: '4010001008788',
    frmc: 'Lumada関連・IoT・AI案件が増加中。Pythonエンジニアのニーズ高い。',
    permNote: '大手安定志向の候補者に最適。福利厚生充実をアピール。',
    cvNote: '書類選考が厳しめ。経歴の一貫性を重視。',
    sentPickNote: 'IoT・データ分析経験者優先。',
    maxAge: 42,
    blindSent: '可',
    blindSentMethod: 'メール',
    realNameChannel: '直接紹介',
    permAts: 'HRMOS',
    permAtsUrl: 'https://hrmos.co/hitachi',
    hiringTypes: [
      '正社員',
      'SES',
      '契約社員'
    ],
    hiringRoles: [
      'エンジニア',
      'データサイエンティスト',
      'PM'
    ],
    keywords: [
      'Python',
      'IoT',
      'AI',
      'Lumada'
    ]
  },
  7: {
    itssAttention: 'B',
    permAttention: 'A',
    address: '東京都千代田区丸の内1-9-2',
    industry: [
      'IT・通信',
      '人材',
      'メディア'
    ],
    businessDescription: 'HRテック・SaaS・メディアを中心とした総合情報サービス企業。',
    corporateNumber: '4010001008480',
    frmc: 'SRE・バックエンド・データエンジニアのニーズ。Go/Kotlin経験者。',
    permNote: '成長志向の候補者にマッチ。裁量の大きさをアピール。',
    cvNote: 'GitHub/ポートフォリオ添付推奨。',
    sentPickNote: 'SaaS開発・SRE経験者優先。',
    maxAge: 38,
    blindSent: '可',
    blindSentMethod: 'ATS経由',
    realNameChannel: 'エージェント経由',
    permAts: 'Lever',
    permAtsUrl: 'https://lever.co/recruit',
    hiringTypes: [
      '正社員'
    ],
    hiringRoles: [
      'エンジニア',
      'SRE',
      'PdM'
    ],
    keywords: [
      'Go',
      'Kotlin',
      'SRE',
      'SaaS'
    ]
  },
  8: {
    itssAttention: 'A',
    permAttention: 'B',
    address: '東京都世田谷区玉川1-14-1',
    industry: [
      'IT・通信',
      'EC',
      '金融'
    ],
    businessDescription: 'EC・フィンテック・モバイル事業を展開する総合インターネット企業。',
    corporateNumber: '9010001115545',
    frmc: 'モバイル（Flutter/Swift）・フィンテック系のニーズ。大規模トラフィック経験者。',
    permNote: '英語力重視（社内公用語）。TOEIC 800点以上推奨。',
    cvNote: '英語レジュメ推奨。日本語のみでも可だが英語版併記がベター。',
    sentPickNote: 'モバイル・決済系の経験者優先。',
    maxAge: 40,
    blindSent: '可',
    blindSentMethod: 'メール',
    realNameChannel: '直接紹介',
    permAts: 'Workday',
    permAtsUrl: 'https://workday.com/rakuten',
    hiringTypes: [
      '正社員',
      'SES'
    ],
    hiringRoles: [
      'モバイルエンジニア',
      'フィンテック',
      'SRE'
    ],
    keywords: [
      'Flutter',
      'Swift',
      '決済',
      '英語'
    ]
  },
  9: {
    itssAttention: 'A',
    permAttention: 'C',
    address: '東京都千代田区飯田橋3-10-10',
    industry: [
      '通信',
      'IT・通信'
    ],
    businessDescription: '大手通信キャリア。5G・IoT・DX支援事業を積極展開。',
    corporateNumber: '5010001016651',
    frmc: 'ネットワーク・5G・クラウド系エンジニアが中心。Cisco/AWS経験者。',
    permNote: '通信業界経験者が有利。未経験からの転職は難しい。',
    cvNote: '技術資格（CCNA等）があれば明記。',
    sentPickNote: 'ネットワーク・セキュリティ資格保持者優先。',
    maxAge: 42,
    blindSent: '不可',
    blindSentMethod: '—',
    realNameChannel: '直接紹介',
    permAts: 'SAP SuccessFactors',
    permAtsUrl: 'https://sf.kddi.com',
    hiringTypes: [
      '正社員',
      'SES'
    ],
    hiringRoles: [
      'ネットワークエンジニア',
      'クラウド',
      'セキュリティ'
    ],
    keywords: [
      '5G',
      'ネットワーク',
      'AWS',
      'セキュリティ'
    ]
  },
  10: {
    itssAttention: 'B',
    permAttention: 'A',
    address: '東京都港区港南1-7-1',
    industry: [
      '製造',
      'エンタメ',
      '金融'
    ],
    businessDescription: 'エレクトロニクス・エンタテインメント・金融等、多角的事業を展開するグローバル企業。',
    corporateNumber: '7010001002634',
    frmc: '半導体・EDA設計エンジニア。AI/ML関連も増加中。',
    permNote: '技術力重視。論文や研究実績があれば優先。',
    cvNote: '英語レジュメ推奨。技術スキルを詳細に記載。',
    sentPickNote: '半導体・AI研究経験者優先。',
    maxAge: 45,
    blindSent: '可',
    blindSentMethod: 'ATS経由',
    realNameChannel: 'エージェント経由',
    permAts: 'Workday',
    permAtsUrl: 'https://workday.com/sony',
    hiringTypes: [
      '正社員',
      '契約社員'
    ],
    hiringRoles: [
      '半導体設計',
      'AIエンジニア',
      'PM'
    ],
    keywords: [
      '半導体',
      'EDA',
      'AI',
      'Python'
    ]
  }
};

// CV SENT dummy data
export const CV_SENTS = [
  { id: 1, companyId: 1, dept: 'ITSS', date: '2025/3/8', candidate: '中村 太郎', assignee: '鈴木 一郎', destination: 'NTTデータ 製造事業部', unitPrice: 750000, jobId: 2 },
  { id: 2, companyId: 1, dept: 'ITSS', date: '2025/3/5', candidate: '木村 健太', assignee: '佐藤 次郎', destination: 'NTTデータ DX推進室', unitPrice: 800000, jobId: 4 },
  { id: 3, companyId: 1, dept: 'PERM', date: '2025/3/3', candidate: '山口 美紀', assignee: '田中 花子', destination: 'NTTデータ 人事部', unitPrice: 6500000, jobId: 9 },
  { id: 4, companyId: 1, dept: 'ITSS', date: '2025/2/28', candidate: '斎藤 勇気', assignee: '鈴木 一郎', destination: 'NTTデータ 金融ソリューション部', unitPrice: 700000, jobId: 8 },
  { id: 5, companyId: 1, dept: 'PERM', date: '2025/2/25', candidate: '吉田 沙織', assignee: '田中 花子', destination: 'NTTデータ 人事部', unitPrice: 7200000, jobId: 9 },
  { id: 6, companyId: 2, dept: 'ITSS', date: '2025/3/10', candidate: '高橋 誠一', assignee: '佐藤 次郎', destination: '富士通 ITインフラ部', unitPrice: 680000, jobId: 13 },
  { id: 7, companyId: 2, dept: 'PERM', date: '2025/3/8', candidate: '田村 恵子', assignee: '田中 花子', destination: '富士通 HR部門', unitPrice: 5800000, jobId: 15 },
  { id: 8, companyId: 3, dept: 'ITSS', date: '2025/2/20', candidate: '小林 浩二', assignee: '鈴木 一郎', destination: 'ノースサンド ERP推進部', unitPrice: 850000, jobId: 16 },
  { id: 9, companyId: 4, dept: 'ITSS', date: '2025/3/1', candidate: '伊藤 大輔', assignee: '佐藤 次郎', destination: 'Sansan プロダクト開発部', unitPrice: 720000, jobId: 21 },
  { id: 10, companyId: 5, dept: 'ITSS', date: '2025/2/25', candidate: '渡辺 啓太', assignee: '鈴木 一郎', destination: 'トヨタ 生産技術部', unitPrice: 780000, jobId: 26 },
  { id: 11, companyId: 6, dept: 'ITSS', date: '2025/3/5', candidate: '加藤 裕也', assignee: '佐藤 次郎', destination: '日立 Lumada事業部', unitPrice: 750000, jobId: 51 },
  { id: 12, companyId: 6, dept: 'PERM', date: '2025/3/3', candidate: '佐々木 愛', assignee: '田中 花子', destination: '日立 デジタルエンジニアリング部', unitPrice: 6800000, jobId: 55 },
  { id: 13, companyId: 7, dept: 'ITSS', date: '2025/3/2', candidate: '松本 和也', assignee: '鈴木 一郎', destination: 'リクルート SaaS事業推進部', unitPrice: 800000, jobId: 61 },
  { id: 14, companyId: 7, dept: 'PERM', date: '2025/2/28', candidate: '橋本 千春', assignee: '田中 花子', destination: 'リクルート HR Tech部', unitPrice: 7500000, jobId: 63 },
  { id: 15, companyId: 8, dept: 'ITSS', date: '2025/3/8', candidate: '石田 翔太', assignee: '佐藤 次郎', destination: '楽天 モバイル事業部', unitPrice: 730000, jobId: 71 },
  { id: 16, companyId: 9, dept: 'ITSS', date: '2025/3/1', candidate: '藤田 健', assignee: '鈴木 一郎', destination: 'KDDI DX推進本部', unitPrice: 760000, jobId: 80 },
  { id: 17, companyId: 10, dept: 'ITSS', date: '2025/3/10', candidate: '前田 拓也', assignee: '佐藤 次郎', destination: 'ソニー 半導体事業部', unitPrice: 820000, jobId: 87 },
  { id: 18, companyId: 10, dept: 'PERM', date: '2025/3/8', candidate: '村上 理恵', assignee: '田中 花子', destination: 'ソニー AI研究所', unitPrice: 8500000, jobId: 90 },
];

// Interview dummy data
export const INTERVIEWS = [
  { id: 1, companyId: 1, dept: 'ITSS', date: '2025/3/12', candidate: '中村 太郎', assignee: '鈴木 一郎', destination: 'NTTデータ 製造事業部', jobId: 2, personId: 'P001' },
  { id: 2, companyId: 1, dept: 'PERM', date: '2025/3/10', candidate: '山口 美紀', assignee: '田中 花子', destination: 'NTTデータ 人事部', jobId: 9, personId: 'P003' },
  { id: 3, companyId: 1, dept: 'ITSS', date: '2025/3/8', candidate: '斎藤 勇気', assignee: '鈴木 一郎', destination: 'NTTデータ 金融ソリューション部', jobId: 8, personId: 'P004' },
  { id: 4, companyId: 2, dept: 'ITSS', date: '2025/3/15', candidate: '高橋 誠一', assignee: '佐藤 次郎', destination: '富士通 ITインフラ部', jobId: 13, personId: 'P006' },
  { id: 5, companyId: 2, dept: 'PERM', date: '2025/3/12', candidate: '田村 恵子', assignee: '田中 花子', destination: '富士通 HR部門', jobId: 15, personId: 'P007' },
  { id: 6, companyId: 5, dept: 'ITSS', date: '2025/3/5', candidate: '渡辺 啓太', assignee: '鈴木 一郎', destination: 'トヨタ 生産技術部', jobId: 26, personId: 'P010' },
  { id: 7, companyId: 6, dept: 'ITSS', date: '2025/3/10', candidate: '加藤 裕也', assignee: '佐藤 次郎', destination: '日立 Lumada事業部', jobId: 51, personId: 'P011' },
  { id: 8, companyId: 7, dept: 'PERM', date: '2025/3/5', candidate: '橋本 千春', assignee: '田中 花子', destination: 'リクルート HR Tech部', jobId: 63, personId: 'P014' },
  { id: 9, companyId: 8, dept: 'ITSS', date: '2025/3/12', candidate: '石田 翔太', assignee: '佐藤 次郎', destination: '楽天 モバイル事業部', jobId: 71, personId: 'P015' },
  { id: 10, companyId: 10, dept: 'PERM', date: '2025/3/15', candidate: '村上 理恵', assignee: '田中 花子', destination: 'ソニー AI研究所', jobId: 90, personId: 'P018' },
];

// Oral agreement dummy data
export const ORAL_AGREEMENTS = [
  { id: 1, companyId: 1, dept: 'ITSS', date: '2025/3/15', candidate: '中村 太郎', assignee: '鈴木 一郎', destination: 'NTTデータ 製造事業部', jobId: 2, personId: 'P001' },
  { id: 2, companyId: 1, dept: 'PERM', date: '2025/3/13', candidate: '山口 美紀', assignee: '田中 花子', destination: 'NTTデータ 人事部', jobId: 9, personId: 'P003' },
  { id: 3, companyId: 2, dept: 'PERM', date: '2025/3/16', candidate: '田村 恵子', assignee: '田中 花子', destination: '富士通 HR部門', jobId: 15, personId: 'P007' },
  { id: 4, companyId: 5, dept: 'ITSS', date: '2025/3/10', candidate: '渡辺 啓太', assignee: '鈴木 一郎', destination: 'トヨタ 生産技術部', jobId: 26, personId: 'P010' },
  { id: 5, companyId: 6, dept: 'ITSS', date: '2025/3/14', candidate: '加藤 裕也', assignee: '佐藤 次郎', destination: '日立 Lumada事業部', jobId: 51, personId: 'P011' },
  { id: 6, companyId: 10, dept: 'PERM', date: '2025/3/18', candidate: '村上 理恵', assignee: '田中 花子', destination: 'ソニー AI研究所', jobId: 90, personId: 'P018' },
];

// Auto-generated JOBS array with unique IDs
export const JOBS = (() => {
  const jobs = [];
  let jobId = 1;
  Object.entries(DEAL_DETAILS).forEach(([dealId, detail]) => {
    const deal = DEALS.find(d => d.id === Number(dealId));
    if (detail.jobs) {
      detail.jobs.forEach((job) => {
        jobs.push({
          id: jobId,
          ...job,
          dealId: Number(dealId),
          dealName: deal?.name || detail.tree.current,
          company: detail.basicInfo.company,
          companyId: deal?.companyId || null,
          businessDept: detail.basicInfo.businessDept,
          status: detail.basicInfo.status,
        });
        job.id = jobId;
        jobId++;
      });
    }
  });
  return jobs;
})();
