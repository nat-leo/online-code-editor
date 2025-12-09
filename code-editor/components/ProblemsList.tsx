import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Difficulty = "easy" | "medium" | "hard";

export type Problem = {
  slug: string;
  title: string;
  difficulty: Difficulty;
  hasSubmission: boolean;
};

interface ProblemsListProps {
  problems: Problem[];
}

const difficultyClasses: Record<Difficulty, string> = {
  easy: "bg-emerald-950 text-emerald-300 border border-emerald-700/70",
  medium: "bg-amber-950 text-amber-300 border border-amber-700/70",
  hard: "bg-rose-950 text-rose-300 border border-rose-700/70",
};

export function ProblemsList({ problems }: ProblemsListProps) {
  return (
    <section className="space-y-3">
      {/* Header */}
      <h2 className="text-lg font-semibold tracking-tight">Problems</h2>

      {/* List */}
      <div className="flex flex-col gap-2">
        {problems.map((problem) => (
          <Link
            key={problem.slug}
            href={`/problems/${problem.slug}`}
            className="block"
          >
            <Button
              variant="outline"
              className="w-full h-auto justify-between px-4 py-3 border-border bg-background hover:bg-muted"
            >
              {/* Left side: title + difficulty */}
              <div className="flex flex-col items-start gap-1">
                <span className="text-sm font-medium">
                  {problem.title}
                </span>

                <Badge
                  className={cn(
                    "text-[11px] font-medium px-2 py-0.5 rounded-full",
                    difficultyClasses[problem.difficulty]
                  )}
                >
                  {problem.difficulty.charAt(0).toUpperCase() +
                    problem.difficulty.slice(1)}
                </Badge>
              </div>

              {/* Right side: solved checkmark */}
              <div className="flex items-center gap-2">
                {problem.hasSubmission && (
                  <CheckCircle2
                    className="w-5 h-5 text-emerald-500"
                    aria-label="Solved"
                  />
                )}
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </section>
  );
}
