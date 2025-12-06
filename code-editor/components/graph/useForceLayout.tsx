// graph/useForceLayout.tsx
import { useEffect, useState } from "react";
import {
  forceSimulation,
  forceManyBody,
  forceLink,
  forceCenter,
  forceCollide,
} from "d3-force";
import type { GraphNode, GraphLink } from "./buildGraph";

export function useForceLayout(
  initialNodes: GraphNode[],
  initialLinks: GraphLink[],
  width: number,
  height: number
) {
  const [nodes, setNodes] = useState<GraphNode[]>(initialNodes);
  const [links] = useState<GraphLink[]>(initialLinks);
  const [, setTick] = useState(0); // just to re-render

  useEffect(() => {
    // Copy to avoid mutating props directly
    const simNodes = nodes.map((n) => ({ ...n })) as (GraphNode & {
      x?: number;
      y?: number;
      vx?: number;
      vy?: number;
    })[];

    const simLinks = links.map((l) => ({ ...l }));

    const simulation = forceSimulation(simNodes)
      .force(
        "link",
        forceLink<GraphNode, GraphLink>(simLinks)
          .id((d) => d.id)
          .distance(80)
      )
      .force("charge", forceManyBody().strength(-120))
      .force("center", forceCenter(width / 2, height / 2))
      .force("collide", forceCollide(28))
      .on("tick", () => {
        // Update React state on each tick
        setNodes([...simNodes]);
        setTick((t) => t + 1);
      });

    return () => {
      simulation.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  return { nodes, links };
}
