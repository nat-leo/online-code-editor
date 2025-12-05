// graph/buildGraph.ts
import type { RawNode } from "../data/rawNodes";

export type GraphNode = {
  id: string;
  label: string;
  parentId: string | null;
  progress: number; // 0–1 for color, fake for now
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
};

export type GraphLink = {
  source: string; // parent id
  target: string; // child id
};

export function buildGraph(raw: RawNode[]) {
  const nodes: GraphNode[] = raw.map((n) => ({
    id: n.id,
    label: n.name,
    parentId: n.parentId,
    progress: Math.random(), // placeholder; later use real progress
  }));

  const links: GraphLink[] = raw
    .filter((n) => n.parentId !== null)
    .map((n) => ({
      source: n.parentId as string,
      target: n.id,
    }));

  return { nodes, links };
}
