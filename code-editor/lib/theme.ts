"use strict";

export type ThemeId = "midnight" | "sunrise" | "forest";

export type ThemeDefinition = {
  id: ThemeId;
  name: string;
  description: string;
  cssVars: Record<string, string>;
  progressColors: [string, string, string];
  graphLine: string;
  graphHighlight: string;
  graphText: string;
};

const themeDefinitions: ThemeDefinition[] = [
  {
    id: "midnight",
    name: "Midnight",
    description: "Deep indigo background with cool blue accents.",
    cssVars: {
      "--background": "#020617",
      "--foreground": "#f1f5f9",
      "--card": "#0f172a",
      "--card-foreground": "#f8fafc",
      "--popover": "#0f172a",
      "--popover-foreground": "#e2e8f0",
      "--primary": "#6366f1",
      "--primary-foreground": "#eef2ff",
      "--secondary": "#38bdf8",
      "--secondary-foreground": "#0f172a",
      "--muted": "#1e293b",
      "--muted-foreground": "#cbd5f5",
      "--accent": "#22d3ee",
      "--accent-foreground": "#0f172a",
      "--destructive": "#fb7185",
      "--border": "#1e293b",
      "--input": "#0f172a",
      "--ring": "#a5b4fc",
      "--sidebar": "#0b1224",
      "--sidebar-foreground": "#cbd5f5",
      "--sidebar-primary": "#7c3aed",
      "--sidebar-primary-foreground": "#f8fafc",
      "--sidebar-accent": "#38bdf8",
      "--sidebar-accent-foreground": "#0f172a",
      "--sidebar-border": "#23304a",
      "--sidebar-ring": "#818cf8",
      "--chart-1": "#7dd3fc",
      "--chart-2": "#c084fc",
      "--chart-3": "#f472b6",
      "--chart-4": "#34d399",
      "--chart-5": "#facc15",
    },
    progressColors: ["#f472b6", "#fbbf24", "#4ade80"],
    graphLine: "#475569",
    graphHighlight: "#f8fafc",
    graphText: "#e2e8f0",
  },
  {
    id: "sunrise",
    name: "Sunrise",
    description: "Warm peach tones on a soft ivory canvas.",
    cssVars: {
      "--background": "#fff8f4",
      "--foreground": "#111827",
      "--card": "#ffffff",
      "--card-foreground": "#0f172a",
      "--popover": "#fefaf6",
      "--popover-foreground": "#111827",
      "--primary": "#fb923c",
      "--primary-foreground": "#fff7ed",
      "--secondary": "#0ea5e9",
      "--secondary-foreground": "#0f172a",
      "--muted": "#f1f5f9",
      "--muted-foreground": "#475569",
      "--accent": "#a855f7",
      "--accent-foreground": "#f8fafc",
      "--destructive": "#dc2626",
      "--border": "#e2e8f0",
      "--input": "#f8fafc",
      "--ring": "#fb923c",
      "--sidebar": "#fff1e6",
      "--sidebar-foreground": "#1f2937",
      "--sidebar-primary": "#fb923c",
      "--sidebar-primary-foreground": "#0f172a",
      "--sidebar-accent": "#0ea5e9",
      "--sidebar-accent-foreground": "#0f172a",
      "--sidebar-border": "#e2e8f0",
      "--sidebar-ring": "#f97316",
      "--chart-1": "#f472b6",
      "--chart-2": "#fb923c",
      "--chart-3": "#a5b4fc",
      "--chart-4": "#34d399",
      "--chart-5": "#38bdf8",
    },
    progressColors: ["#fb7185", "#fbbf24", "#22c55e"],
    graphLine: "#94a3b8",
    graphHighlight: "#0f172a",
    graphText: "#111827",
  },
  {
    id: "forest",
    name: "Forest",
    description: "Earthy greens with luminous highlights.",
    cssVars: {
      "--background": "#0b1f16",
      "--foreground": "#d9f99d",
      "--card": "#122a1d",
      "--card-foreground": "#ecfccb",
      "--popover": "#102b1f",
      "--popover-foreground": "#e0f2fe",
      "--primary": "#4ade80",
      "--primary-foreground": "#0b1f16",
      "--secondary": "#22d3ee",
      "--secondary-foreground": "#0b1f16",
      "--muted": "#132418",
      "--muted-foreground": "#a7f3d0",
      "--accent": "#86efac",
      "--accent-foreground": "#0b1f16",
      "--destructive": "#f87171",
      "--border": "#18352a",
      "--input": "#142b1f",
      "--ring": "#4ade80",
      "--sidebar": "#07150e",
      "--sidebar-foreground": "#bbf7d0",
      "--sidebar-primary": "#22c55e",
      "--sidebar-primary-foreground": "#07150e",
      "--sidebar-accent": "#a3e635",
      "--sidebar-accent-foreground": "#07150e",
      "--sidebar-border": "#18352a",
      "--sidebar-ring": "#4ade80",
      "--chart-1": "#86efac",
      "--chart-2": "#34d399",
      "--chart-3": "#22d3ee",
      "--chart-4": "#a7f3d0",
      "--chart-5": "#bef264",
    },
    progressColors: ["#f472b6", "#fde68a", "#4ade80"],
    graphLine: "#4c7c54",
    graphHighlight: "#d9f99d",
    graphText: "#e0f2fe",
  },
];

export const defaultThemeId: ThemeId = "midnight";

export const themes: Record<ThemeId, ThemeDefinition> = themeDefinitions.reduce(
  (acc, theme) => {
    acc[theme.id] = theme;
    return acc;
  },
  {} as Record<ThemeId, ThemeDefinition>
);

export const themeList = [...themeDefinitions];

export function isThemeId(value: string | null): value is ThemeId {
  return Boolean(value && Object.prototype.hasOwnProperty.call(themes, value));
}

export function applyTheme(theme: ThemeDefinition) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  Object.entries(theme.cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
