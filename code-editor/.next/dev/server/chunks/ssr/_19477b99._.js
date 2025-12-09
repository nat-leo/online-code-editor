module.exports = [
"[project]/components/data/rawNodes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// data/rawNodes.ts
__turbopack_context__.s([
    "rawNodes",
    ()=>rawNodes
]);
const rawNodes = [
    {
        id: "root",
        name: "Interview Prep",
        parentId: null
    },
    {
        id: "arrays",
        name: "Arrays & Strings",
        parentId: "root"
    },
    {
        id: "graphs",
        name: "Graphs",
        parentId: "root"
    },
    {
        id: "dp",
        name: "Dynamic Programming",
        parentId: "root"
    },
    {
        id: "two-pointers",
        name: "Two Pointers",
        parentId: "arrays"
    },
    {
        id: "sliding-window",
        name: "Sliding Window",
        parentId: "arrays"
    },
    {
        id: "bfs",
        name: "BFS",
        parentId: "graphs"
    },
    {
        id: "dfs",
        name: "DFS",
        parentId: "graphs"
    },
    {
        id: "backtracking",
        name: "Backtracking",
        parentId: "dfs"
    }
];
}),
"[project]/components/graph/buildGraph.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graph/buildGraph.ts
__turbopack_context__.s([
    "buildGraph",
    ()=>buildGraph
]);
function buildGraph(raw) {
    const nodes = raw.map((n)=>({
            id: n.id,
            label: n.name,
            parentId: n.parentId,
            progress: Math.random()
        }));
    const links = raw.filter((n)=>n.parentId !== null).map((n)=>({
            source: n.parentId,
            target: n.id
        }));
    return {
        nodes,
        links
    };
}
}),
"[project]/components/graph/useForceLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// graph/useForceLayout.tsx
__turbopack_context__.s([
    "useForceLayout",
    ()=>useForceLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/simulation.js [app-ssr] (ecmascript) <export default as forceSimulation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/manyBody.js [app-ssr] (ecmascript) <export default as forceManyBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/link.js [app-ssr] (ecmascript) <export default as forceLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/center.js [app-ssr] (ecmascript) <export default as forceCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-force/src/collide.js [app-ssr] (ecmascript) <export default as forceCollide>");
;
;
function useForceLayout(initialNodes, initialLinks, width, height) {
    const [nodes, setNodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialNodes);
    const [links] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialLinks);
    const [, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // just to re-render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (width === 0 || height === 0) return;
        // Copy to avoid mutating props directly
        const simNodes = initialNodes.map((n)=>({
                ...n
            }));
        const simLinks = initialLinks.map((l)=>({
                ...l
            }));
        // Reset the state before the layout starts so the SVG matches the new sim nodes.
        setNodes(simNodes.map((n)=>({
                ...n
            })));
        const simulation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$simulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceSimulation$3e$__["forceSimulation"])(simNodes).force("link", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceLink$3e$__["forceLink"])(simLinks).id((d)=>d.id).distance(80)).force("charge", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$manyBody$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceManyBody$3e$__["forceManyBody"])().strength(-120)).force("center", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$center$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCenter$3e$__["forceCenter"])(width / 2, height / 2)).force("collide", (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$force$2f$src$2f$collide$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__forceCollide$3e$__["forceCollide"])(28)).on("tick", ()=>{
            // Update React state on each tick
            setNodes([
                ...simNodes
            ]);
            setTick((t)=>t + 1);
        });
        return ()=>{
            simulation.stop();
        };
    }, [
        initialNodes,
        initialLinks,
        width,
        height
    ]);
    return {
        nodes,
        links
    };
}
}),
"[project]/hooks/use-element-size.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/use-element-size.ts
__turbopack_context__.s([
    "useElementSize",
    ()=>useElementSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function useElementSize() {
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    const [node, setNode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((el)=>{
        setNode(el);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!node) return;
        // Guard for environments without ResizeObserver (SSR)
        if (typeof ResizeObserver === "undefined") {
            setSize({
                width: node.offsetWidth,
                height: node.offsetHeight
            });
            return;
        }
        const observer = new ResizeObserver((entries)=>{
            const entry = entries[0];
            if (!entry) return;
            const { width, height } = entry.contentRect;
            setSize({
                width,
                height
            });
        });
        observer.observe(node);
        // Initial measurement
        setSize({
            width: node.offsetWidth,
            height: node.offsetHeight
        });
        return ()=>observer.disconnect();
    }, [
        node
    ]);
    return {
        ref,
        ...size
    };
}
}),
"[project]/components/ForceGraph.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/ForceGraph.tsx
__turbopack_context__.s([
    "ForceGraph",
    ()=>ForceGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-theme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$rawNodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data/rawNodes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$buildGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/buildGraph.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$useForceLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/useForceLayout.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$element$2d$size$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-element-size.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function progressToColor(progress, colors) {
    if (progress < 0.33) return colors[0];
    if (progress < 0.66) return colors[1];
    return colors[2];
}
function ForceGraph() {
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { nodes: initialNodes, links: initialLinks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$buildGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGraph"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$rawNodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rawNodes"]), []);
    const { ref, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$element$2d$size$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useElementSize"])();
    const { nodes, links } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$useForceLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForceLayout"])(initialNodes, initialLinks, width, height);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "flex items-center justify-center rounded-3xl bg-card/60 p-4 shadow-2xl shadow-card/40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-full w-full",
            viewBox: `0 0 ${width} ${height}`,
            preserveAspectRatio: "xMidYMid meet",
            children: [
                links.map((l, i)=>{
                    const source = nodes.find((n)=>n.id === l.source);
                    const target = nodes.find((n)=>n.id === l.target);
                    if (!source || !target || source.x == null || target.x == null) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: source.x,
                        y1: source.y,
                        x2: target.x,
                        y2: target.y,
                        stroke: theme.graphLine,
                        strokeWidth: 1
                    }, i, false, {
                        fileName: "[project]/components/ForceGraph.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this);
                }),
                nodes.map((n)=>{
                    if (n.x == null || n.y == null) return null;
                    const isSelected = selectedId === n.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].g, {
                        initial: false,
                        animate: {
                            x: n.x,
                            y: n.y,
                            scale: isSelected ? 1.3 : 1,
                            filter: isSelected ? "drop-shadow(0px 0px 10px rgba(0,0,0,0.7))" : "none"
                        },
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        },
                        onClick: ()=>setSelectedId(n.id),
                        style: {
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                r: 16,
                                fill: progressToColor(n.progress, theme.progressColors),
                                stroke: isSelected ? theme.graphHighlight : theme.graphLine,
                                strokeWidth: isSelected ? 2 : 1
                            }, void 0, false, {
                                fileName: "[project]/components/ForceGraph.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                y: 30,
                                textAnchor: "middle",
                                fontSize: 10,
                                fill: theme.graphText,
                                children: n.label
                            }, void 0, false, {
                                fileName: "[project]/components/ForceGraph.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/components/ForceGraph.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/components/ForceGraph.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ForceGraph.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ProblemsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemsList",
    ()=>ProblemsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
const difficultyClasses = {
    easy: "bg-emerald-950 text-emerald-300 border border-emerald-700/70",
    medium: "bg-amber-950 text-amber-300 border border-amber-700/70",
    hard: "bg-rose-950 text-rose-300 border border-rose-700/70"
};
function ProblemsList({ problems }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-lg font-semibold tracking-tight",
                children: "Problems"
            }, void 0, false, {
                fileName: "[project]/components/ProblemsList.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: problems.map((problem)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/problems/${problem.slug}`,
                        className: "block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            className: "w-full h-auto justify-between px-4 py-3 border-border bg-background hover:bg-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: problem.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemsList.tsx",
                                            lineNumber: 46,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-[11px] font-medium px-2 py-0.5 rounded-full", difficultyClasses[problem.difficulty]),
                                            children: problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ProblemsList.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProblemsList.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: problem.hasSubmission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "w-5 h-5 text-emerald-500",
                                        "aria-label": "Solved"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ProblemsList.tsx",
                                        lineNumber: 64,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ProblemsList.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProblemsList.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this)
                    }, problem.slug, false, {
                        fileName: "[project]/components/ProblemsList.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProblemsList.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProblemsList.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ThemeSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSwitcher",
    ()=>ThemeSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-theme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/theme.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ThemeSwitcher({ className }) {
    const { themeId, setThemeId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$theme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-semibold uppercase tracking-wide text-muted-foreground",
                children: "Theme"
            }, void 0, false, {
                fileName: "[project]/components/ThemeSwitcher.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: themeId,
                onChange: (event)=>setThemeId(event.target.value),
                className: "rounded border border-border bg-input/80 px-2 py-1 text-[11px] font-semibold text-foreground outline-none transition focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/60",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeList"].map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: theme.id,
                        children: theme.name
                    }, theme.id, false, {
                        fileName: "[project]/components/ThemeSwitcher.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ThemeSwitcher.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ThemeSwitcher.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/data/Problems.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sampleProblems",
    ()=>sampleProblems
]);
const sampleProblems = [
    {
        id: 1,
        title: "Two Sum",
        slug: "two-sum",
        description_md: `
Given an integer array \`nums\` and an integer \`target\`, find **two distinct indices**
\`i\` and \`j\` such that \`nums[i] + nums[j] === target\`.

Return the pair of indices in any order. You may assume exactly one valid pair exists.
`.trim(),
        starter_code: `function twoSum(nums: number[], target: number): number[] {
  // TODO: implement
  return [];
}`,
        solution_md: `
Use a hash map to store \`value -> index\` while scanning from left to right.

For each \`nums[i]\`, compute \`need = target - nums[i]\`.  
If \`need\` is already in the map, you have found a valid pair.  
Otherwise, store \`nums[i]\` with its index in the map and continue.

Time: O(n), Space: O(n).
`.trim(),
        constraints_md: `
- \`2 <= nums.length <= 10^5\`
- \`-10^9 <= nums[i] <= 10^9\`
- There is exactly one solution.
`.trim(),
        difficulty: "easy",
        category_id: 1,
        tags: [
            "array",
            "hash-table",
            "one-pass"
        ],
        companies: [
            "Google",
            "Amazon",
            "Meta"
        ],
        accepted_count: 1500000,
        submitted_count: 2500000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 2,
        title: "Add Two Numbers",
        slug: "add-two-numbers",
        description_md: `
You are given two **non-empty** linked lists representing two non-negative integers.
The digits are stored in **reverse order**, and each node contains a single digit.

Add the two numbers and return the sum as a linked list in the same reversed format.
`.trim(),
        starter_code: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // TODO: implement
  return null;
}`,
        solution_md: `
Simulate elementary school addition using two pointers on the lists and a \`carry\`.

At each step:
- Sum the current digits and carry.
- Create a new node with \`sum % 10\`.
- Update \`carry = Math.floor(sum / 10)\`.

Continue while there are nodes or a non-zero carry.

Time: O(max(m, n)), Space: O(max(m, n)).
`.trim(),
        constraints_md: `
- Each linked list represents a non-negative integer.
- No leading zeros unless the number is 0.
`.trim(),
        difficulty: "medium",
        category_id: 2,
        tags: [
            "linked-list",
            "math"
        ],
        companies: [
            "Amazon",
            "Microsoft"
        ],
        accepted_count: 900000,
        submitted_count: 1800000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 3,
        title: "Longest Substring Without Repeating Characters",
        slug: "longest-substring-without-repeating-characters",
        description_md: `
Given a string \`s\`, find the length of the **longest substring** that contains
no repeated characters.
`.trim(),
        starter_code: `function lengthOfLongestSubstring(s: string): number {
  // TODO: implement
  return 0;
}`,
        solution_md: `
Use a sliding window with a map from character to its **most recent index**.

Expand the right pointer over the string:
- If the current character was seen inside the current window,
  move the left pointer just past its previous index.
- Track the maximum window length.

Time: O(n), Space: O(min(n, alphabet_size)).
`.trim(),
        constraints_md: `
- \`0 <= s.length <= 10^5\`
- \`s\` consists of standard ASCII characters.
`.trim(),
        difficulty: "medium",
        category_id: 3,
        tags: [
            "string",
            "sliding-window",
            "hash-table"
        ],
        companies: [
            "Google",
            "Bloomberg",
            "Uber"
        ],
        accepted_count: 1300000,
        submitted_count: 2800000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 4,
        title: "Median of Two Sorted Arrays",
        slug: "median-of-two-sorted-arrays",
        description_md: `
You are given two sorted arrays \`nums1\` and \`nums2\`.  
Return the **median** of the two arrays combined, in \`O(log(m + n))\` time.
`.trim(),
        starter_code: `function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // TODO: implement
  return 0;
}`,
        solution_md: `
Use binary search on the **smaller** array to find a partition such that:

- All elements on the left side of both arrays are \`<=\` all elements on the right side,
- The left and right sides differ in total size by at most 1.

From that partition, compute the median using the max of left parts and min of right parts.

Time: O(log(min(m, n))), Space: O(1).
`.trim(),
        constraints_md: `
- \`nums1\` and \`nums2\` are individually sorted in non-decreasing order.
- Combined length is at least 1.
`.trim(),
        difficulty: "hard",
        category_id: 1,
        tags: [
            "array",
            "binary-search",
            "divide-and-conquer"
        ],
        companies: [
            "Google",
            "Meta"
        ],
        accepted_count: 600000,
        submitted_count: 1600000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 5,
        title: "Merge Two Sorted Lists",
        slug: "merge-two-sorted-lists",
        description_md: `
Merge two sorted singly-linked lists into **one** sorted list and return its head.
The input lists should be reused; do not allocate extra nodes.
`.trim(),
        starter_code: `class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // TODO: implement
  return null;
}`,
        solution_md: `
Use a dummy head and a tail pointer.

Compare \`list1.val\` and \`list2.val\` and attach the smaller node to \`tail.next\`,
then advance that list's pointer. Move \`tail\` forward.

At the end, append the remaining list if any.

Time: O(m + n), Space: O(1) additional.
`.trim(),
        constraints_md: `
- Each list is sorted in non-decreasing order.
`.trim(),
        difficulty: "easy",
        category_id: 2,
        tags: [
            "linked-list",
            "two-pointers"
        ],
        companies: [
            "Amazon",
            "Microsoft"
        ],
        accepted_count: 1200000,
        submitted_count: 1900000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 6,
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        description_md: `
Given a string containing only the characters \`'()[]{}'\`, determine if the input string
is a **valid** bracket sequence.

A sequence is valid if every opening bracket has a matching closing bracket of the same type,
and the pairs are properly nested.
`.trim(),
        starter_code: `function isValid(s: string): boolean {
  // TODO: implement
  return false;
}`,
        solution_md: `
Use a stack:

- Push the expected closing bracket when you see an opening one.
- When you see a closing bracket, check if it matches the top of the stack.
- The string is valid if the stack is empty at the end and no mismatches occurred.

Time: O(n), Space: O(n).
`.trim(),
        constraints_md: `
- \`0 <= s.length <= 10^5\`
- \`s\` contains only '(', ')', '{', '}', '[' and ']'.
`.trim(),
        difficulty: "easy",
        category_id: 5,
        tags: [
            "stack",
            "string"
        ],
        companies: [
            "Amazon",
            "Facebook"
        ],
        accepted_count: 1600000,
        submitted_count: 2600000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 7,
        title: "Binary Tree Level Order Traversal",
        slug: "binary-tree-level-order-traversal",
        description_md: `
Given the root of a binary tree, return the **level order traversal** of its nodes' values
(as a list of levels from top to bottom).
`.trim(),
        starter_code: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  // TODO: implement
  return [];
}`,
        solution_md: `
Use a BFS with a queue.

For each level:
- Take the current queue size.
- Pop that many nodes, record their values, and enqueue their children.

Collect each level's values into a nested array.

Time: O(n), Space: O(n) for the queue and output.
`.trim(),
        constraints_md: `
- Number of nodes in the tree is in \`[0, 10^4]\`.
`.trim(),
        difficulty: "medium",
        category_id: 6,
        tags: [
            "tree",
            "bfs",
            "queue"
        ],
        companies: [
            "Amazon",
            "Bloomberg"
        ],
        accepted_count: 900000,
        submitted_count: 1400000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 8,
        title: "Lowest Common Ancestor of a Binary Search Tree",
        slug: "lowest-common-ancestor-of-a-binary-search-tree",
        description_md: `
Given the root of a **binary search tree** and two nodes \`p\` and \`q\`,
return their **lowest common ancestor** (LCA).

The LCA is the lowest node that has both \`p\` and \`q\` in its subtree
(allowing a node to be an ancestor of itself).
`.trim(),
        starter_code: `class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // TODO: implement
  return null;
}`,
        solution_md: `
Exploit the BST property:

- If both \`p.val\` and \`q.val\` are less than \`root.val\`, go left.
- If both are greater, go right.
- Otherwise, \`root\` is the split point and thus the LCA.

Time: O(h), where \`h\` is the tree height. Space: O(1).
`.trim(),
        constraints_md: `
- All node values are unique.
- \`p\` and \`q\` are guaranteed to exist in the tree.
`.trim(),
        difficulty: "easy",
        category_id: 6,
        tags: [
            "tree",
            "bst"
        ],
        companies: [
            "Google",
            "Amazon"
        ],
        accepted_count: 1100000,
        submitted_count: 1500000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 9,
        title: "Number of Islands",
        slug: "number-of-islands",
        description_md: `
You are given a 2D grid of characters \`'1'\` (land) and \`'0'\` (water).  
An island is a group of horizontally or vertically connected land cells.

Return the number of distinct islands in the grid.
`.trim(),
        starter_code: `function numIslands(grid: string[][]): number {
  // TODO: implement
  return 0;
}`,
        solution_md: `
Scan the grid. When you see a land cell that has not yet been visited,
start a DFS or BFS from that cell and mark the whole connected component as visited.

Increment a counter for each new component discovered.

Time: O(m * n), Space: O(m * n) in the worst case for the recursion/queue and visited.
`.trim(),
        constraints_md: `
- \`1 <= grid.length, grid[0].length <= 300\`
- \`grid[i][j] \in {'0', '1'}\`
`.trim(),
        difficulty: "medium",
        category_id: 8,
        tags: [
            "graph",
            "dfs",
            "bfs",
            "matrix"
        ],
        companies: [
            "Amazon",
            "Google"
        ],
        accepted_count: 1000000,
        submitted_count: 1900000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    },
    {
        id: 10,
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        description_md: `
You are climbing a staircase with \`n\` steps.  
Each move, you can climb either **1** or **2** steps.

Return the number of distinct ways to reach the top.
`.trim(),
        starter_code: `function climbStairs(n: number): number {
  // TODO: implement
  return 0;
}`,
        solution_md: `
This is a Fibonacci-style DP.

Let \`dp[i]\` be the number of ways to reach step \`i\`.

- \`dp[0] = 1\` (one way to stand at the base),
- \`dp[1] = 1\`,
- \`dp[i] = dp[i-1] + dp[i-2]\`.

You can reduce it to O(1) space by keeping only the previous two values.

Time: O(n), Space: O(1).
`.trim(),
        constraints_md: `
- \`1 <= n <= 45\`
`.trim(),
        difficulty: "easy",
        category_id: 10,
        tags: [
            "dynamic-programming",
            "fibonacci"
        ],
        companies: [
            "Amazon",
            "Microsoft"
        ],
        accepted_count: 1400000,
        submitted_count: 2300000,
        created_at: "2025-01-01T00:00:00.000Z",
        updated_at: "2025-01-01T00:00:00.000Z"
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForceGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ForceGraph.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProblemsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProblemsList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ThemeSwitcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$Problems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data/Problems.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Home() {
    const user = "Nat";
    const problems = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$Problems$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sampleProblems"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen w-full flex-col bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4 border-b border-border bg-card/40 px-4 py-3 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-lg font-semibold",
                                children: "Editor"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-semibold text-muted-foreground",
                                children: [
                                    "Back at it again, ",
                                    user
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ThemeSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeSwitcher"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "lg:flex lg:w-[28%] min-w-[260px] max-w-md border-r border-border bg-card/30 p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProblemsList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProblemsList"], {
                            problems: problems
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "flex-1 flex flex-col lg:flex-row min-h-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ForceGraph$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForceGraph"], {}, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_19477b99._.js.map