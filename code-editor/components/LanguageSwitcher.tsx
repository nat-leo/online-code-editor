"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { useState } from "react";
import { themeList, type ThemeId } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";

type Language = {
  name: string;
};

const supportedLanguages = [
  {name: "Python 3"}
] satisfies Language[]

export function LanguageSwitcher() {
  const theme = useTheme();
  const [ langId, setLangId ] = useState("Python 3");

  return (
    <label
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur",
      )}
    >
      <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
        Language
      </span>

      <Select value={langId} onValueChange={(v) => setLangId(v as ThemeId)}>
        <SelectTrigger className="h-auto bg-input/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {supportedLanguages.map((language) => (
            <SelectItem
              key={language.name}
              value={language.name}
              className="text-[11px] font-semibold uppercase tracking-wide"
            >
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </label>
  );
}
