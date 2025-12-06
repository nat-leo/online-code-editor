"use client";

import { useTheme } from "@/hooks/use-theme";
import { themeList, type ThemeId } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { themeId, setThemeId } = useTheme();

  return (
    <label
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur",
        className
      )}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        Theme
      </span>

      <select
        value={themeId}
        onChange={(event) => setThemeId(event.target.value as ThemeId)}
        className="rounded border border-border bg-input/80 px-2 py-1 text-[11px] font-semibold text-foreground outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60"
      >
        {themeList.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.name}
          </option>
        ))}
      </select>
    </label>
  );
}
