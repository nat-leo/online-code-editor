"use strict";

import type { Difficulty } from "@/lib/types";

export const difficultyClasses: Record<Difficulty, string> = {
  easy: "bg-emerald-950 text-emerald-300 border-emerald-700/70",
  medium: "bg-amber-950 text-amber-300 border-amber-700/70",
  hard: "bg-rose-950 text-rose-300 border-rose-700/70",
};
