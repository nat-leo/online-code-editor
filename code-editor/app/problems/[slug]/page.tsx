// app/problems/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Problem } from "@/lib/types";
import { sampleProblems } from "@/components/data/Problems";

import { ProblemSidebar } from "@/components/ProblemSidebar";
import CodeEditor from "@/components/CodeEditor";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProblemPage({ params }: PageProps) {
  // Unwrap the params Promise
  const { slug } = await params;

  // Find matching problem
  const problem: Problem | undefined = sampleProblems.find(
    (p) => p.slug === slug
  );

  if (!problem) {
    notFound();
  }

  // Ensure starter code is always a string
  const initialCode = problem.starter_code ?? "// No starter code provided";

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* HEADER */}
      <div className="flex items-center justify-between gap-4 border-b border-border bg-card/40 px-4 py-3 backdrop-blur">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold">Editor</h1>
          <span className="text-sm font-semibold text-muted-foreground">
            Back at it again, Nat
          </span>
        </div>
        <ThemeSwitcher />
      </div>

      {/* BODY */}
      <div className="flex flex-1 min-h-0">
        {/* SIDEBAR */}
        <section className="lg:flex lg:w-[28%] min-w-[260px] max-w-md border-r border-border bg-card/30 p-4">
          <ProblemSidebar problem={problem} />
        </section>

        {/* EDITOR */}
        <section className="flex-1 flex flex-col lg:flex-row min-h-0">
          <CodeEditor language={"Python 3.13"} code={initialCode} />
        </section>
      </div>
    </div>
  );
}
