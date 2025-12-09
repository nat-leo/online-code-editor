"use client";

import Editor from "@monaco-editor/react";

type Props = {
  language: string;
  code: string;
};

export default function CodeEditor({ language, code }: Props) {
  return (
    <Editor
      height="100%"
      language={language}
      theme="vs-dark"
      value={code}
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        scrollBeyondLastLine: false,
        automaticLayout: true,
      }}
    />
  );
}
