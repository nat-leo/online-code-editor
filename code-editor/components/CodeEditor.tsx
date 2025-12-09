"use client";

import { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

import { useTheme } from "@/hooks/use-theme";

type Props = {
  language: string;
  code: string;
  onChange: Function;
};

export default function CodeEditor({ language, code, onChange }: Props) {
  const monaco = useMonaco();
  const { themeId, theme } = useTheme();

  useEffect(() => {
    if (!monaco) {
      return;
    }

    const monacoThemeName = `editor-${themeId}`;
    const editorTheme = theme.editor;

    monaco.editor.defineTheme(monacoThemeName, {
      base: editorTheme.base,
      inherit: true,
      rules: [],
      colors: {
        "editor.background": editorTheme.background,
        "editor.foreground": editorTheme.foreground,
        "editorLineNumber.foreground": editorTheme.gutter,
        "editorLineNumber.activeForeground": editorTheme.cursor,
        "editorCursor.foreground": editorTheme.cursor,
        "editor.selectionBackground": editorTheme.selection,
        "editor.lineHighlightBackground": editorTheme.lineHighlight,
        "editorGutter.background": editorTheme.background,
        "scrollbarSlider.background": "#4b556333",
        "scrollbarSlider.hoverBackground": "#6b728033",
      },
    });

    monaco.editor.setTheme(monacoThemeName);
  }, [monaco, themeId, theme]);

  return (
    <Editor
      height="100%"
      language={language}
      theme={monaco ? `editor-${themeId}` : undefined}
      onChange={(e) => onChange(e)}
      value={code}
      options={{
        minimap: { enabled: true },
        fontSize: 14,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        fontFamily:
          'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace)',
      }}
    />
  );
}
