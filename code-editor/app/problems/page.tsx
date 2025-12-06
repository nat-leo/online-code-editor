// app/problems/page.tsx
import { ProblemsList } from "@/components/ProblemsList";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Problem } from "@/components/ProblemsList";

const problems = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "easy",
    hasSubmission: true,
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    hasSubmission: false,
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "medium",
    hasSubmission: true,
  },
  {
    id: "regular-expression-matching",
    title: "Regular Expression Matching",
    difficulty: "hard",
    hasSubmission: false,
  },
] satisfies Problem[];

export default function ProblemsPage() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">Problems</h1>
            <p className="text-sm text-muted-foreground">
              Browse and jump into problems. Difficulty and solve status at a glance.
            </p>
          </div>

          <ThemeSwitcher />
        </div>

        <ProblemsList problems={problems} />
      </div>
    </main>
  );
}
