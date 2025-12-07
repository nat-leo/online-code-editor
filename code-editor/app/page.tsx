"use client";
import { ForceGraph } from "@/components/ForceGraph";
import { Problem, ProblemsList } from "@/components/ProblemsList";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

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

export default function Home() {
  const user = "Nat";

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <div className="flex items-center justify-between gap-4 border-b border-border bg-card/40 px-4 py-3 backdrop-blur">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold">Editor</h1>
          <span className="text-sm font-semibold text-muted-foreground">
            Back at it again, {user}
          </span>
        </div>

        <ThemeSwitcher />
      </div>

      <div className="flex flex-1 min-h-0">
        <section className="lg:flex lg:w-[28%] min-w-[260px] max-w-md border-r border-border bg-card/30 p-4">
          <ForceGraph />
        </section>

        <section className="flex-1 flex flex-col lg:flex-row min-h-0">
          <ProblemsList problems={problems} />
        </section>
      </div>
    </div>
  );
}
