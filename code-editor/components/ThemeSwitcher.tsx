"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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

      <Select value={themeId} onValueChange={(v) => setThemeId(v as ThemeId)}>
        <SelectTrigger className="h-auto bg-input/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {themeList.map((theme) => (
            <SelectItem
              key={theme.id}
              value={theme.id}
              className="text-[11px] font-semibold uppercase tracking-wide"
            >
              {theme.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
