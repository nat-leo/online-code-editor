"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  applyTheme,
  defaultThemeId,
  isThemeId,
  themes,
  type ThemeDefinition,
  type ThemeId,
} from "@/lib/theme";

const THEME_STORAGE_KEY = "code-editor:theme";

type ThemeContextValue = {
  theme: ThemeDefinition;
  themeId: ThemeId;
  setThemeId: (id: ThemeId) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    if (typeof window === "undefined") {
      return defaultThemeId;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (storedTheme && isThemeId(storedTheme)) {
      return storedTheme;
    }

    return defaultThemeId;
  });

  useEffect(() => {
    applyTheme(themes[themeId]);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
    }
  }, [themeId]);

  const value = useMemo(
    () => ({
      themeId,
      theme: themes[themeId],
      setThemeId,
    }),
    [themeId]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("`useTheme` must be used inside a `ThemeProvider`.");
  }

  return context;
}
