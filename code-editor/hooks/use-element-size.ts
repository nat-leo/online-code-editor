// hooks/use-element-size.ts
"use client";

import { useState, useCallback, useLayoutEffect } from "react";

type Size = {
  width: number;
  height: number;
};

export function useElementSize<T extends HTMLElement>() {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const [node, setNode] = useState<T | null>(null);

  const ref = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  useLayoutEffect(() => {
    if (!node) return;

    // Guard for environments without ResizeObserver (SSR)
    if (typeof ResizeObserver === "undefined") {
      setSize({
        width: node.offsetWidth,
        height: node.offsetHeight,
      });
      return;
    }

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(node);

    // Initial measurement
    setSize({
      width: node.offsetWidth,
      height: node.offsetHeight,
    });

    return () => observer.disconnect();
  }, [node]);

  return { ref, ...size };
}
