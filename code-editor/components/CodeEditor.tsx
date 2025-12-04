"use client";

import Editor from "@monaco-editor/react";

type Props = {
  language: string;
  code: string;
  onChange: (value: string) => void;
};

export default function CodeEditor({ language, code, onChange }: Props) {
  return (
    <Editor
      height="100%"
      language={language}
      theme="vs-dark"
      value={code}
      onChange={(value) => onChange(value ?? "")}
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}
