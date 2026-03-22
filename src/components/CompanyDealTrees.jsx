import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

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

/* ChainRow: horizontal chain + recursive branches (same logic as DealTree) */
function ChainRow({ node, indent = 0, isBranch = false }) {
  const chain = [];
  let cur = node;
  while (cur) {
    chain.push(cur);
    cur = cur.next;
  }

  return (
    <>
      <div className="flex items-center min-h-[32px]">
        {indent > 0 && (
          <div style={{ minWidth: indent * 40 }} className="shrink-0" />
        )}
        {isBranch && (
          <span className="text-gray-400 font-mono text-sm select-none mr-1 shrink-0">└</span>
        )}
        {chain.map((n, idx) => (
          <div key={n.id} className="flex items-center shrink-0">
            {idx > 0 && (
              <span className="text-gray-300 select-none mx-1 shrink-0">—</span>
            )}
            <Link
              to={`/deals/${n.id}`}
              className="block px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-blue-600 hover:bg-gray-100 hover:underline whitespace-nowrap transition-colors"
            >
              {n.name}
            </Link>
          </div>
        ))}
      </div>

      {chain.map((n, chainIdx) => {
        if (!n.branches || n.branches.length === 0) return null;
        const branchIndent = indent + chainIdx;
        return n.branches.map((branch) => (
          <ChainRow
            key={branch.id}
            node={branch}
            indent={branchIndent}
            isBranch={true}
          />
        ));
      })}
    </>
  );
}

export default function CompanyDealTrees({ companyId }) {
  const { DEALS, DEAL_DETAILS } = useData();

  const trees = useMemo(() => {
    const nameToId = buildNameToIdMap(DEAL_DETAILS);
    const companyDeals = DEALS.filter(d => d.companyId === Number(companyId));
    const rootIds = new Set();
    companyDeals.forEach(d => {
      if (DEAL_DETAILS[d.id]) {
        rootIds.add(findRoot(d.id, nameToId, DEAL_DETAILS));
      }
    });
    return [...rootIds]
      .map(rootId => buildNode(rootId, nameToId, DEAL_DETAILS))
      .filter(Boolean);
  }, [companyId, DEALS, DEAL_DETAILS]);

  if (trees.length === 0) return <p className="text-sm text-gray-400 text-center py-4">商談ツリーがありません</p>;

  return (
    <div className="space-y-2">
      {trees.map((root) => (
        <div key={root.id} className="overflow-x-auto">
          <ChainRow node={root} />
        </div>
      ))}
    </div>
  );
}
