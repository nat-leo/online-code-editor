"use client";

import { useState } from "react";
import type { Problem } from "@/lib/types";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ProblemSidebar } from "@/components/ProblemSidebar";
import CodeEditor from "@/components/CodeEditor";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

type Props = {
  problem: Problem;
  initialCode: string;
  initialLanguage: string;
};

export default function ProblemClient({
  problem,
  initialCode,
  initialLanguage,
}: Props) {
  const [language, setLanguage] = useState(initialLanguage);
  const [code, setCode] = useState(initialCode);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (value?: string) => {
    setCode(value ?? "");
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput("");
    setError("");

    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          code,
          input,
          problemSlug: problem.slug,
        }),
      });

      if (!res.ok) {
        throw new Error(`Run failed with status ${res.status}`);
      }

      const data = await res.json();
      setOutput(data.stdout ?? "");
      setError(data.stderr ?? "");
    } catch (err: any) {
      setError(err.message ?? "Unknown error while running code");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center gap-4 border-b border-border bg-card/40 px-4 py-3">
        <h1 className="text-lg font-semibold">Editor</h1>

        <div className="ml-auto flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeSwitcher />
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
          >
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </header>

      {/* Main layout:
          - Mobile: column (sidebar on top, then editor, then IO)
          - Desktop: row (sidebar left, right side is a column: editor top, IO bottom) */}
      <main className="flex flex-1 min-h-0 flex-col md:flex-row">
        {/* Problem sidebar */}
        <aside className="w-full border-b border-border bg-card/30 p-4 min-h-[160px] overflow-auto md:w-72 md:min-w-[260px] md:max-w-xs md:border-b-0 md:border-r md:flex-shrink-0">
          <ProblemSidebar problem={problem} />
        </aside>

        {/* Right side: Editor on top, IO panel at bottom */}
        <section className="flex flex-1 min-w-0 min-h-0 flex-col">
          {/* Editor area (grows to fill remaining height) */}
          <div className="flex-1 min-h-0 border-border">
            {/* Wrapper ensures Monaco gets a real height */}
            <div className="h-full min-h-[50vh] md:min-h-0">
              <CodeEditor
                language={language}
                code={code}
                onChange={handleCodeChange}
              />
            </div>
          </div>

          {/* IO panel: always at bottom */}
          <div className="border-t border-border bg-card/20 flex flex-col min-h-[240px] max-h-[45vh]">
            {/* Function args */}
            <div className="p-3 border-b border-border bg-card/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-foreground">
                  Function Arguments
                </span>
              </div>
              <textarea
                className="w-full h-24 rounded border border-border bg-input/80 px-3 py-2 text-sm font-mono text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            {/* Stdout / Stderr scroll region */}
            <div className="flex-1 min-h-0 p-3 flex flex-col gap-2 overflow-hidden">
              <div className="flex-1 min-h-0">
                <span className="text-sm font-semibold text-foreground">
                  Stdout
                </span>
                <pre className="mt-2 h-full min-h-[80px] rounded border border-border bg-card/50 p-3 text-sm font-mono text-foreground overflow-auto">
                  {output || (isRunning ? "Running..." : "")}
                </pre>
              </div>

              <div className="flex-1 min-h-0">
                <span className="text-sm font-semibold text-destructive">
                  Stderr / Errors
                </span>
                <pre className="mt-2 h-full min-h-[80px] rounded border border-border bg-card/50 p-3 text-xs font-mono text-destructive/80 overflow-auto">
                  {error}
                </pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
