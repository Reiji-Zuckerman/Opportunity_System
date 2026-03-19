import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../contexts/DataContext';

/* ── ヘルパー: 名前→ID マップ ── */
function buildNameToIdMap(DEAL_DETAILS) {
  const map = {};
  Object.entries(DEAL_DETAILS).forEach(([id, detail]) => {
    if (detail?.tree?.current) {
      map[detail.tree.current] = Number(id);
    }
  });
  return map;
}

/* ── ヘルパー: 親チェーンを辿ってルートを探す ── */
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

/* ── ヘルパー: ツリーノード構築 ── */
function buildNode(id, nameToId, DEAL_DETAILS) {
  const detail = DEAL_DETAILS[id];
  if (!detail) return null;
  return {
    id: Number(id),
    name: detail.tree.current,
    meetingCount: Math.max(1, (detail.meetings || []).length),
    children: (detail.tree.children || [])
      .map(n => nameToId[n])
      .filter(cid => cid !== undefined && DEAL_DETAILS[cid])
      .map(cid => buildNode(cid, nameToId, DEAL_DETAILS))
      .filter(Boolean),
  };
}

/* ── レイアウト: ツリーを2Dグリッドに展開 ──
 *
 * スクリーンショット準拠:
 *   - 偶数列 = ノードセル（商談名 or ミーティング）
 *   - 奇数列 = コネクタ（ — or L）
 *   - ルート（depth 0）: ミーティング非表示、第1子が同じ行に続く
 *   - 非ルート: ミーティングを横展開、子商談は全て新しい行にLで分岐
 */
function layoutTree(rootNode) {
  const grid = [];

  function ensureRow(row) {
    while (grid.length <= row) grid.push({});
  }

  /**
   * @returns {number} 消費した行数
   */
  function layout(node, depth, startRow) {
    ensureRow(startRow);
    const nodeCol = depth * 2;

    // ノード配置
    grid[startRow][nodeCol] = { type: 'node', id: node.id, name: node.name };

    if (depth === 0) {
      /* ── ルートノード: ミーティング非表示、第1子を同じ行に配置 ── */
      if (node.children.length === 0) return 1;

      // 第1子 → 同じ行、 — で接続
      grid[startRow][1] = { type: 'connector' };
      let consumed = layout(node.children[0], 1, startRow);
      let nextRow = startRow + consumed;

      // 第2子以降 → 新しい行、L で分岐
      for (let i = 1; i < node.children.length; i++) {
        ensureRow(nextRow);
        grid[nextRow][1] = { type: 'branch' };
        consumed = layout(node.children[i], 1, nextRow);
        nextRow += consumed;
      }
      return nextRow - startRow;
    } else {
      /* ── 非ルートノード: ミーティングを横展開 ── */
      for (let m = 1; m < node.meetingCount; m++) {
        grid[startRow][nodeCol + m * 2 - 1] = { type: 'connector' };
        grid[startRow][nodeCol + m * 2] = {
          type: 'meeting',
          id: node.id,
          name: node.name,
          round: m + 1,
        };
      }

      if (node.children.length === 0) return 1;

      // 全ての子を新しい行に配置
      let nextRow = startRow + 1;
      for (let i = 0; i < node.children.length; i++) {
        ensureRow(nextRow);
        grid[nextRow][(depth + 1) * 2 - 1] = { type: 'branch' };
        const consumed = layout(node.children[i], depth + 1, nextRow);
        nextRow += consumed;
      }
      return nextRow - startRow;
    }
  }

  layout(rootNode, 0, 0);

  // 最大列数を算出
  let maxCol = 0;
  grid.forEach(row => {
    Object.keys(row).forEach(col => {
      maxCol = Math.max(maxCol, Number(col));
    });
  });

  return { grid, maxCol };
}

/* ── メインコンポーネント ── */
export default function DealTree({ currentDealId }) {
  const { DEAL_DETAILS } = useData();

  const { grid, maxCol } = useMemo(() => {
    const nameToId = buildNameToIdMap(DEAL_DETAILS);
    const rootId = findRoot(Number(currentDealId), nameToId, DEAL_DETAILS);
    const tree = buildNode(rootId, nameToId, DEAL_DETAILS);
    if (!tree) return { grid: [], maxCol: 0 };
    return layoutTree(tree);
  }, [currentDealId, DEAL_DETAILS]);

  if (grid.length === 0) return null;

  const currentId = Number(currentDealId);

  return (
    <div className="overflow-x-auto -mx-1">
      <table className="border-collapse">
        <tbody>
          {grid.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: maxCol + 1 }, (_, colIdx) => {
                const cell = row[colIdx];
                const isNodeCol = colIdx % 2 === 0;

                /* 空セル */
                if (!cell) {
                  return (
                    <td
                      key={colIdx}
                      className={isNodeCol ? '' : 'w-7'}
                    />
                  );
                }

                /* — コネクタ */
                if (cell.type === 'connector') {
                  return (
                    <td key={colIdx} className="w-7 text-center align-middle text-gray-300 select-none">
                      —
                    </td>
                  );
                }

                /* L 分岐 */
                if (cell.type === 'branch') {
                  return (
                    <td key={colIdx} className="w-7 text-center align-middle text-gray-400 select-none font-mono text-sm">
                      └
                    </td>
                  );
                }

                /* ノード / ミーティング */
                const isCurrent = cell.id === currentId;
                const label = cell.type === 'meeting'
                  ? `${cell.name}（${cell.round}回目）`
                  : cell.name;

                return (
                  <td key={colIdx} className="py-0.5 px-0.5">
                    {isCurrent && cell.type !== 'meeting' ? (
                      <div
                        className="px-3 py-1.5 rounded-lg border-2 border-blue-600 bg-blue-50 text-xs font-bold text-blue-900 whitespace-nowrap"
                        title={label}
                      >
                        {label}
                      </div>
                    ) : (
                      <Link
                        to={`/deals/${cell.id}`}
                        className={`block px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-colors
                          ${isCurrent
                            ? 'border-2 border-blue-600 bg-blue-50 text-blue-900 font-bold'
                            : 'border-gray-300 bg-white text-gray-800 hover:bg-blue-50 hover:border-blue-300'
                          }`}
                        title={label}
                      >
                        {label}
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
