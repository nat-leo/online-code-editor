"use client";

import { useEffect, useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const DEFAULT_CODE = `class Solution:
    def solution(self, nums):
        \"\"\"Example: return sum of a list of numbers\"\"\"
        # Write your code here
        return sum(nums)
`;

export default function Home() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState(DEFAULT_CODE);

  // JSON describing arguments to pass to Solution().solution(...)
  // Here: solution([1, 2, 3, 4, 5])
  const [input, setInput] = useState("5\n1 2 3 4 5\n");

  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("editor:code");
    if (saved) setCode(saved);
  }, []);

  const handleCodeChange = (value: string) => {
    setCode(value);
    localStorage.setItem("editor:code", value);
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
          language,  // "python"
          code,      // user’s class Solution code
          input,  // JSON that represents args/kwargs
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.detail || "Run failed");
      } else {
        setOutput(data.stdout || "");
        setError(data.stderr || "");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Network error");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <div className="flex items-center gap-4 border-b border-border bg-card/40 px-4 py-3">
        <h1 className="text-lg font-semibold">Editor</h1>

        <label className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="text-sm font-semibold">Language</span>

          <div className="relative">
            <select
              className="rounded border border-border bg-input/80 px-2 py-1 text-sm font-semibold text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="python">Python 3.13</option>
            </select>
          </div>
        </label>

        <div className="ml-auto flex items-center gap-3">
          <ThemeSwitcher />

          <button
            onClick={handleRun}
            disabled={isRunning}
            className="rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
          >
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 border-r border-border">
          <CodeEditor
            language={language}
            code={code}
            onChange={handleCodeChange}
          />
        </div>

        <div className="w-full md:w-1/3 flex flex-col">
          <div className="p-3 border-b border-border bg-card/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-foreground">
                Function Arguments
              </span>
            </div>
            <textarea
              className="w-full h-32 rounded border border-border bg-input/80 px-3 py-2 text-sm font-mono text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
            <div>
              <span className="text-sm font-semibold text-foreground">Stdout</span>
              <pre className="mt-2 w-full h-32 rounded border border-border bg-card/50 p-3 text-sm font-mono text-foreground overflow-auto">
                {output || (isRunning ? "Running..." : "")}
              </pre>
            </div>

            <div>
              <span className="text-sm font-semibold text-destructive">
                Stderr / Errors
              </span>
              <pre className="mt-2 w-full h-32 rounded border border-border bg-card/50 p-3 text-xs font-mono text-destructive/80 overflow-auto">
                {error}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
