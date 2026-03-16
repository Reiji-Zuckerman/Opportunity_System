import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { DEAL_DETAILS } from '../data/dummy';

function buildNameToIdMap() {
  const map = {};
  Object.entries(DEAL_DETAILS).forEach(([id, detail]) => {
    map[detail.tree.current] = Number(id);
  });
  return map;
}

function findRoot(dealId, nameToId) {
  let current = dealId;
  const visited = new Set();
  while (DEAL_DETAILS[current]?.tree.parent) {
    if (visited.has(current)) break;
    visited.add(current);
    const parentId = nameToId[DEAL_DETAILS[current].tree.parent];
    if (!parentId || !DEAL_DETAILS[parentId]) break;
    current = parentId;
  }
  return current;
}

function buildNode(id, nameToId) {
  const detail = DEAL_DETAILS[id];
  if (!detail) return null;
  return {
    id,
    name: detail.tree.current,
    children: (detail.tree.children || [])
      .map(n => nameToId[n])
      .filter(cid => cid && DEAL_DETAILS[cid])
      .map(cid => buildNode(cid, nameToId))
      .filter(Boolean),
  };
}

function flattenToGrid(node) {
  const rows = [];

  function place(node, depth, rowIdx) {
    while (rows.length <= rowIdx) rows.push({});
    rows[rowIdx][depth * 2] = { type: 'node', id: node.id, name: node.name };

    if (node.children.length > 0) {
      rows[rowIdx][depth * 2 + 1] = { type: 'arrow' };
      place(node.children[0], depth + 1, rowIdx);

      for (let i = 1; i < node.children.length; i++) {
        const newRow = rows.length;
        while (rows.length <= newRow) rows.push({});
        rows[newRow][depth * 2 + 1] = { type: 'branch' };
        place(node.children[i], depth + 1, newRow);
      }
    }
  }

  place(node, 0, 0);
  return rows;
}

export default function DealTree({ currentDealId }) {
  const grid = useMemo(() => {
    const nameToId = buildNameToIdMap();
    const rootId = findRoot(Number(currentDealId), nameToId);
    const tree = buildNode(rootId, nameToId);
    if (!tree) return [];
    return flattenToGrid(tree);
  }, [currentDealId]);

  if (grid.length === 0) return null;

  const maxCol = Math.max(...grid.map(row => Math.max(...Object.keys(row).map(Number), 0)));
  const currentId = Number(currentDealId);

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse">
        <tbody>
          {grid.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: maxCol + 1 }, (_, colIdx) => {
                const cell = row[colIdx];

                if (!cell) {
                  return (
                    <td
                      key={colIdx}
                      className={colIdx % 2 === 0 ? 'min-w-0' : 'w-6'}
                    />
                  );
                }

                if (cell.type === 'arrow') {
                  return (
                    <td key={colIdx} className="text-gray-300 text-center align-middle w-6 select-none">
                      —
                    </td>
                  );
                }

                if (cell.type === 'branch') {
                  return (
                    <td key={colIdx} className="text-gray-300 text-center align-middle w-6 select-none">
                      └
                    </td>
                  );
                }

                const isCurrent = cell.id === currentId;
                return (
                  <td key={colIdx} className="py-1">
                    {isCurrent ? (
                      <div className="px-3 py-1.5 rounded-lg border-2 border-blue-600 bg-blue-50 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {cell.name}
                      </div>
                    ) : (
                      <Link
                        to={`/deals/${cell.id}`}
                        className="block px-3 py-1.5 rounded-lg border border-gray-200 bg-gray-50 text-sm text-blue-600 hover:bg-gray-100 hover:underline whitespace-nowrap transition-colors"
                      >
                        {cell.name}
                      </Link>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
