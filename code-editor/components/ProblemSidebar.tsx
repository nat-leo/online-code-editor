import type { Problem } from "@/lib/types";

import { difficultyClasses } from "@/lib/difficulty";

export function ProblemSidebar({ problem }: { problem: Problem }) {
  const diffStyle = difficultyClasses[problem.difficulty];

  return (
    <aside className="flex h-full w-full max-w-md flex-col border-r border-border bg-card/40">
      {/* Header */}
      <div className="border-b border-border px-4 py-3">
        <h1 className="text-lg font-semibold leading-tight">
          {problem.title}
        </h1>

        <div className="mt-2 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span
            className={`rounded-full border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide ${diffStyle}`}
          >
            {problem.difficulty}
          </span>
        </div>
      </div>

      {/* Problem statement */}
      <div className="flex-1 overflow-y-auto px-4 py-3 text-sm leading-relaxed">
        {/* Option A: render raw markdown as plain text for now */}
        <p className="whitespace-pre-wrap text-muted-foreground">
          {problem.description_md}
        </p>

        {/* 
        Option B (later): use react-markdown 
        <ReactMarkdown className="prose prose-invert max-w-none">
          {problem.description_md}
        </ReactMarkdown>
        */}
      </div>
    </aside>
  );
}
