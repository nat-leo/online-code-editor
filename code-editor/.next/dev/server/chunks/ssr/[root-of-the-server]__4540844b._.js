module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyTheme",
    ()=>applyTheme,
    "defaultThemeId",
    ()=>defaultThemeId,
    "isThemeId",
    ()=>isThemeId,
    "themeList",
    ()=>themeList,
    "themes",
    ()=>themes
]);
"use strict";
const themeDefinitions = [
    {
        id: "midnight",
        name: "Midnight",
        description: "Deep indigo background with cool blue accents.",
        cssVars: {
            "--background": "#020617",
            "--foreground": "#f1f5f9",
            "--card": "#0f172a",
            "--card-foreground": "#f8fafc",
            "--popover": "#0f172a",
            "--popover-foreground": "#e2e8f0",
            "--primary": "#6366f1",
            "--primary-foreground": "#eef2ff",
            "--secondary": "#38bdf8",
            "--secondary-foreground": "#0f172a",
            "--muted": "#1e293b",
            "--muted-foreground": "#cbd5f5",
            "--accent": "#22d3ee",
            "--accent-foreground": "#0f172a",
            "--destructive": "#fb7185",
            "--border": "#1e293b",
            "--input": "#0f172a",
            "--ring": "#a5b4fc",
            "--sidebar": "#0b1224",
            "--sidebar-foreground": "#cbd5f5",
            "--sidebar-primary": "#7c3aed",
            "--sidebar-primary-foreground": "#f8fafc",
            "--sidebar-accent": "#38bdf8",
            "--sidebar-accent-foreground": "#0f172a",
            "--sidebar-border": "#23304a",
            "--sidebar-ring": "#818cf8",
            "--chart-1": "#7dd3fc",
            "--chart-2": "#c084fc",
            "--chart-3": "#f472b6",
            "--chart-4": "#34d399",
            "--chart-5": "#facc15"
        },
        progressColors: [
            "#f472b6",
            "#fbbf24",
            "#4ade80"
        ],
        graphLine: "#475569",
        graphHighlight: "#f8fafc",
        graphText: "#e2e8f0",
        editor: {
            base: "vs-dark",
            background: "#020617",
            foreground: "#f1f5f9",
            selection: "#22d3ee33",
            lineHighlight: "#1f293322",
            cursor: "#22d3ee",
            gutter: "#475569"
        }
    },
    {
        id: "sunrise",
        name: "Sunrise",
        description: "Warm peach tones on a soft ivory canvas.",
        cssVars: {
            "--background": "#fff8f4",
            "--foreground": "#111827",
            "--card": "#ffffff",
            "--card-foreground": "#0f172a",
            "--popover": "#fefaf6",
            "--popover-foreground": "#111827",
            "--primary": "#fb923c",
            "--primary-foreground": "#fff7ed",
            "--secondary": "#0ea5e9",
            "--secondary-foreground": "#0f172a",
            "--muted": "#f1f5f9",
            "--muted-foreground": "#475569",
            "--accent": "#a855f7",
            "--accent-foreground": "#f8fafc",
            "--destructive": "#dc2626",
            "--border": "#e2e8f0",
            "--input": "#f8fafc",
            "--ring": "#fb923c",
            "--sidebar": "#fff1e6",
            "--sidebar-foreground": "#1f2937",
            "--sidebar-primary": "#fb923c",
            "--sidebar-primary-foreground": "#0f172a",
            "--sidebar-accent": "#0ea5e9",
            "--sidebar-accent-foreground": "#0f172a",
            "--sidebar-border": "#e2e8f0",
            "--sidebar-ring": "#f97316",
            "--chart-1": "#f472b6",
            "--chart-2": "#fb923c",
            "--chart-3": "#a5b4fc",
            "--chart-4": "#34d399",
            "--chart-5": "#38bdf8"
        },
        progressColors: [
            "#fb7185",
            "#fbbf24",
            "#22c55e"
        ],
        graphLine: "#94a3b8",
        graphHighlight: "#0f172a",
        graphText: "#111827",
        editor: {
            base: "vs",
            background: "#fff8f4",
            foreground: "#111827",
            selection: "#fb923c33",
            lineHighlight: "#fefaf633",
            cursor: "#fb923c",
            gutter: "#94a3b8"
        }
    },
    {
        id: "forest",
        name: "Forest",
        description: "Earthy greens with luminous highlights.",
        cssVars: {
            "--background": "#0b1f16",
            "--foreground": "#d9f99d",
            "--card": "#122a1d",
            "--card-foreground": "#ecfccb",
            "--popover": "#102b1f",
            "--popover-foreground": "#e0f2fe",
            "--primary": "#4ade80",
            "--primary-foreground": "#0b1f16",
            "--secondary": "#22d3ee",
            "--secondary-foreground": "#0b1f16",
            "--muted": "#132418",
            "--muted-foreground": "#a7f3d0",
            "--accent": "#86efac",
            "--accent-foreground": "#0b1f16",
            "--destructive": "#f87171",
            "--border": "#18352a",
            "--input": "#142b1f",
            "--ring": "#4ade80",
            "--sidebar": "#07150e",
            "--sidebar-foreground": "#bbf7d0",
            "--sidebar-primary": "#22c55e",
            "--sidebar-primary-foreground": "#07150e",
            "--sidebar-accent": "#a3e635",
            "--sidebar-accent-foreground": "#07150e",
            "--sidebar-border": "#18352a",
            "--sidebar-ring": "#4ade80",
            "--chart-1": "#86efac",
            "--chart-2": "#34d399",
            "--chart-3": "#22d3ee",
            "--chart-4": "#a7f3d0",
            "--chart-5": "#bef264"
        },
        progressColors: [
            "#f472b6",
            "#fde68a",
            "#4ade80"
        ],
        graphLine: "#4c7c54",
        graphHighlight: "#d9f99d",
        graphText: "#e0f2fe",
        editor: {
            base: "vs-dark",
            background: "#0b1f16",
            foreground: "#d9f99d",
            selection: "#4ade8033",
            lineHighlight: "#142b1f33",
            cursor: "#4ade80",
            gutter: "#4c7c54"
        }
    }
];
const defaultThemeId = "midnight";
const themes = themeDefinitions.reduce((acc, theme)=>{
    acc[theme.id] = theme;
    return acc;
}, {});
const themeList = [
    ...themeDefinitions
];
function isThemeId(value) {
    return Boolean(value && Object.prototype.hasOwnProperty.call(themes, value));
}
function applyTheme(theme) {
    if (typeof document === "undefined") {
        return;
    }
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, value])=>{
        root.style.setProperty(key, value);
    });
}
}),
"[project]/hooks/use-theme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const THEME_STORAGE_KEY = "code-editor:theme";
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function ThemeProvider({ children }) {
    const [themeId, setThemeId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultThemeId"];
        }
        //TURBOPACK unreachable
        ;
        const storedTheme = undefined;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyTheme"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"][themeId]);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        themeId
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            themeId,
            theme: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themes"][themeId],
            setThemeId
        }), [
        themeId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/hooks/use-theme.tsx",
        lineNumber: 54,
        columnNumber: 10
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error("`useTheme` must be used inside a `ThemeProvider`.");
    }
    return context;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4540844b._.js.map