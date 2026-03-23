import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

/**
 * 商談ツリー表示
 *
 * 仕様:
 *   新規商談 → ルートノード（左端）
 *   商談追記 (tree.next) → 横に「-」で繋がるチェーン
 *   担当分岐 (tree.branches) → 「└」で下に分岐（親ノードの真下）
 *
 * 例:
 *   金融事業部長商談 - 金融事業部課長商談 - 金融事業部担当商談
 *                      └ 人事部長商談       └ 製造業部担当商談
 */

function buildNameToIdMap(DEAL_DETAILS) {
  const map = {};
  Object.entries(DEAL_DETAILS).forEach(([id, detail]) => {
    if (detail?.tree?.current) map[detail.tree.current] = Number(id);
  });
  return map;
}

function findRoot(dealId, nameToId, DEAL_DETAILS) {
  let current = dealId;
  const visited = new Set();
  while (DEAL_DETAILS[current]?.tree?.parent) {
    if (visited.has(current)) break;
    visited.add(current);
    const parentId = nameToId[DEAL_DETAILS[current].tree.parent];
    if (!parentId || !DEAL_DETAILS[parentId]) break;
    current = parentId;
  }
  return current;
}

function buildNode(id, nameToId, DEAL_DETAILS, visited = new Set()) {
  if (visited.has(id)) return null;
  visited.add(id);
  const detail = DEAL_DETAILS[id];
  if (!detail) return null;
  const tree = detail.tree || {};
  const nextId = tree.next ? nameToId[tree.next] : null;
  const branchIds = (tree.branches || [])
    .map(n => nameToId[n])
    .filter(bid => bid !== undefined && DEAL_DETAILS[bid]);

  return {
    id: Number(id),
    name: tree.current || '',
    next: nextId ? buildNode(nextId, nameToId, DEAL_DETAILS, visited) : null,
    branches: branchIds.map(bid => buildNode(bid, nameToId, DEAL_DETAILS, visited)).filter(Boolean),
  };
}

/* ── DealNode: ノード単体の描画 ── */
function DealNode({ node, isCurrent }) {
  if (isCurrent) {
    return (
      <div className="px-3 py-1.5 rounded-lg border-2 border-blue-600 bg-blue-50 text-xs font-bold text-blue-900 whitespace-nowrap">
        {node.name}
      </div>
    );
  }
  return (
    <Link
      to={`/deals/${node.id}`}
      className="block px-3 py-1.5 rounded-lg border border-gray-300 bg-white text-xs whitespace-nowrap text-gray-800 hover:bg-blue-50 hover:border-blue-300 transition-colors"
    >
      {node.name}
    </Link>
  );
}

/**
 * NodeColumn: ノード本体 + その直下の分岐を1カラムとして描画
 * 分岐は親ノードの真下に表示される
 */
function NodeColumn({ node, currentId }) {
  return (
    <div className="flex flex-col">
      <DealNode node={node} isCurrent={node.id === currentId} />
      {node.branches.map(branch => (
        <div key={branch.id} className="flex items-start mt-1">
          <span className="text-gray-400 font-mono text-sm select-none mr-1 shrink-0 leading-6">└</span>
          <ChainRow node={branch} currentId={currentId} />
        </div>
      ))}
    </div>
  );
}

/**
 * ChainRow: 横チェーン（ノード → next → next → ...）を描画
 * 各ノードはNodeColumnでラップされ、分岐がその真下に表示される
 */
function ChainRow({ node, currentId }) {
  const chain = [];
  let cur = node;
  while (cur) {
    chain.push(cur);
    cur = cur.next;
  }

  return (
    <div className="flex items-start">
      {chain.map((n, idx) => (
        <div key={n.id} className="flex items-start shrink-0">
          {idx > 0 && (
            <span className="text-gray-300 select-none mx-1 leading-8 shrink-0">-</span>
          )}
          <NodeColumn node={n} currentId={currentId} />
        </div>
      ))}
    </div>
  );
}

export default function DealTree({ currentDealId }) {
  const { DEALS, DEAL_DETAILS } = useData();

  const roots = useMemo(() => {
    const nameToId = buildNameToIdMap(DEAL_DETAILS);
    const rootId = findRoot(Number(currentDealId), nameToId, DEAL_DETAILS);
    const currentDeal = DEALS.find(d => d.id === Number(currentDealId));
    const companyId = currentDeal?.companyId;

    const rootIds = new Set();
    if (companyId) {
      for (const deal of DEALS) {
        if (deal.companyId === companyId) {
          const detail = DEAL_DETAILS[deal.id];
          if (detail && !detail.tree?.parent) {
            rootIds.add(deal.id);
          }
        }
      }
    }
    rootIds.add(rootId);

    const trees = [];
    for (const rid of rootIds) {
      const tree = buildNode(rid, nameToId, DEAL_DETAILS);
      if (tree) trees.push(tree);
    }
    return trees;
  }, [currentDealId, DEALS, DEAL_DETAILS]);

  if (roots.length === 0) return null;

  const currentId = Number(currentDealId);

  return (
    <div className="overflow-x-auto -mx-1 scrollbar-hide">
      <div className="inline-block min-w-full space-y-1 p-1">
        {roots.map((root, idx) => (
          <div key={root.id}>
            {idx > 0 && <div className="h-2" />}
            <ChainRow node={root} currentId={currentId} />
          </div>
        ))}
      </div>
    </div>
  );
}
