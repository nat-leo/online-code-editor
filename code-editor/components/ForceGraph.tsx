// components/ForceGraph.tsx
"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useTheme } from "@/hooks/use-theme";
import { rawNodes } from "./data/rawNodes";
import { buildGraph } from "./graph/buildGraph";
import { useForceLayout } from "./graph/useForceLayout";
import { useElementSize } from "@/hooks/use-element-size";

function progressToColor(progress: number, colors: [string, string, string]): string {
  const clamp = Math.max(0, Math.min(1, progress));
  const hexToRgb = (hex: string) => {
    const clean = hex.replace("#", "");
    const value = parseInt(clean, 16);
    return [
      (value >> 16) & 0xff,
      (value >> 8) & 0xff,
      value & 0xff,
    ];
  };
  const rgbToHex = (r: number, g: number, b: number) =>
    `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;

  const isFirstSegment = clamp <= 0.5;
  const segmentProgress = isFirstSegment ? clamp / 0.5 : (clamp - 0.5) / 0.5;
  if (segmentProgress <= 0) return isFirstSegment ? colors[0] : colors[1];
  if (segmentProgress >= 1) return isFirstSegment ? colors[1] : colors[2];

  const [segmentStartHex, segmentEndHex] = isFirstSegment
    ? [colors[0], colors[1]]
    : [colors[1], colors[2]];
  const segmentStart = hexToRgb(segmentStartHex);
  const segmentEnd = hexToRgb(segmentEndHex);
  const interpolated = segmentStart.map((channel, index) =>
    Math.round(channel + (segmentEnd[index] - channel) * segmentProgress)
  ) as [number, number, number];

  return rgbToHex(...interpolated);
}

export function ForceGraph() {
  const { theme } = useTheme();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { nodes: initialNodes, links: initialLinks } = useMemo(
    () => buildGraph(rawNodes),
    []
  );

  const { ref, width, height } = useElementSize<HTMLDivElement>();

  const { nodes, links } = useForceLayout(initialNodes, initialLinks, width, height)

  return (
    <div ref={ref} className="flex items-center justify-center rounded-3xl bg-card/60 p-4 shadow-2xl shadow-card/40">
      <svg className="h-full w-full"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet">

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
