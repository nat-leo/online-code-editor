"use client";

import { useEffect, useState } from "react";
import CodeEditor from "@/components/CodeEditor";

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
    } catch (e: any) {
      setError(e.message || "Network error");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center gap-4 p-3 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Editor</h1>

        <label className="flex items-center gap-2 text-sm text-gray-200">
          <span className="text-sm font-semibold">
            Language
          </span>

          <div className="relative">
            <select
              className="text-sm font-semibold rounded px-2 py-1"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="python">Python 3.13</option>
            </select>
          </div>
        </label>

        <button
          onClick={handleRun}
          disabled={isRunning}
          className="ml-auto px-4 py-1.5 rounded bg-emerald-500 text-sm font-medium disabled:opacity-60"
        >
          {isRunning ? "Running..." : "Run"}
        </button>
      </div>


      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 border-r border-gray-800">
          <CodeEditor
            language={language}
            code={code}
            onChange={handleCodeChange}
          />
        </div>

        {/* IO panel */}
        <div className="w-full md:w-1/3 flex flex-col">
          {/* Args JSON */}
          <div className="p-3 border-b border-gray-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">
                Function Arguments
              </span>
            </div>
            <textarea
              className="w-full h-32 text-sm font-mono bg-gray-950 border border-gray-700 rounded p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {/* Output + Error */}
          <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
            <div>
              <span className="text-sm font-semibold">Stdout</span>
              <pre className="mt-1 w-full h-32 text-sm font-mono bg-gray-950 border border-gray-700 rounded p-2 overflow-auto">
                {output || (isRunning ? "Running..." : "")}
              </pre>
            </div>

            <div>
              <span className="text-sm font-semibold text-red-400">
                Stderr / Errors
              </span>
              <pre className="mt-1 w-full h-32 text-xs font-mono bg-gray-950 border border-gray-700 rounded p-2 overflow-auto text-red-300">
                {error}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
