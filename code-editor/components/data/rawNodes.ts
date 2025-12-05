// data/rawNodes.ts
export type RawNode = {
  id: string;
  name: string;
  parentId: string | null;
};

export const rawNodes: RawNode[] = [
  { id: "root", name: "Interview Prep", parentId: null },

  { id: "arrays", name: "Arrays & Strings", parentId: "root" },
  { id: "graphs", name: "Graphs", parentId: "root" },
  { id: "dp", name: "Dynamic Programming", parentId: "root" },

  { id: "two-pointers", name: "Two Pointers", parentId: "arrays" },
  { id: "sliding-window", name: "Sliding Window", parentId: "arrays" },

  { id: "bfs", name: "BFS", parentId: "graphs" },
  { id: "dfs", name: "DFS", parentId: "graphs" },

  { id: "backtracking", name: "Backtracking", parentId: "dfs" },
];
