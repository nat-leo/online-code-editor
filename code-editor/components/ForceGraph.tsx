// components/ForceGraph.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/hooks/use-theme";
import { rawNodes } from "./data/rawNodes";
import { buildGraph } from "./graph/buildGraph";
import { useForceLayout } from "./graph/useForceLayout";

const WIDTH = 800;
const HEIGHT = 600;

function progressToColor(progress: number, colors: [string, string, string]): string {
  if (progress < 0.33) return colors[0];
  if (progress < 0.66) return colors[1];
  return colors[2];
}

export function ForceGraph() {
  const { theme } = useTheme();

  const { nodes: initialNodes, links: initialLinks } = useMemo(
    () => buildGraph(rawNodes),
    []
  );

  const { nodes, links } = useForceLayout(initialNodes, initialLinks, WIDTH, HEIGHT);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center rounded-3xl bg-card/60 p-4 shadow-2xl shadow-card/40">
      <svg width={WIDTH} height={HEIGHT}>
        {/* edges */}
        {links.map((l, i) => {
          const source = nodes.find((n) => n.id === l.source)!;
          const target = nodes.find((n) => n.id === l.target)!;
          if (!source || !target || source.x == null || target.x == null) return null;

          return (
            <line
              key={i}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={theme.graphLine}
              strokeWidth={1}
            />
          );
        })}

        {/* nodes */}
        {nodes.map((n) => {
          if (n.x == null || n.y == null) return null;
          const isSelected = selectedId === n.id;

          return (
            <motion.g
              key={n.id}
              initial={false}
              animate={{
                x: n.x,
                y: n.y,
                scale: isSelected ? 1.3 : 1,
                filter: isSelected
                  ? "drop-shadow(0px 0px 10px rgba(0,0,0,0.7))"
                  : "none",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              onClick={() => setSelectedId(n.id)}
              style={{ cursor: "pointer" }}
            >
              <circle
                r={16}
                fill={progressToColor(n.progress, theme.progressColors)}
                stroke={isSelected ? theme.graphHighlight : theme.graphLine}
                strokeWidth={isSelected ? 2 : 1}
              />
              <text
                y={30}
                textAnchor="middle"
                fontSize={10}
                fill={theme.graphText}
              >
                {n.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
