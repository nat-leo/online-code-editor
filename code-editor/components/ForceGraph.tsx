// components/ForceGraph.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { rawNodes } from "./data/rawNodes";
import { buildGraph } from "./graph/buildGraph";
import { useForceLayout } from "./graph/useForceLayout";

const WIDTH = 800;
const HEIGHT = 600;

function progressToColor(progress: number): string {
  // super simple red → yellow → green
  if (progress < 0.33) return "#ef4444"; // red-500
  if (progress < 0.66) return "#eab308"; // yellow-500
  return "#22c55e"; // green-500
}

export function ForceGraph() {
  const { nodes: initialNodes, links: initialLinks } = useMemo(
    () => buildGraph(rawNodes),
    []
  );

  const { nodes, links } = useForceLayout(initialNodes, initialLinks, WIDTH, HEIGHT);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center bg-slate-900">
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
              stroke="#4b5563"
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
                fill={progressToColor(n.progress)}
                stroke={isSelected ? "#e5e7eb" : "#111827"}
                strokeWidth={isSelected ? 2 : 1}
              />
              <text
                y={30}
                textAnchor="middle"
                fontSize={10}
                fill="#e5e7eb"
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

