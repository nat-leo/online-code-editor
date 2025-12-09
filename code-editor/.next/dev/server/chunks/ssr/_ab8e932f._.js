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
        // Copy to avoid mutating props directly
        const simNodes = nodes.map((n)=>({
                ...n
            }));
        const simLinks = links.map((l)=>({
                ...l
            }));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // run once
    return {
        nodes,
        links
    };
}
}),
"[project]/app/progression/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/ForceGraph.tsx
__turbopack_context__.s([
    "default",
    ()=>ForceGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$rawNodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/data/rawNodes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$buildGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/buildGraph.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$useForceLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/graph/useForceLayout.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const WIDTH = 800;
const HEIGHT = 600;
function progressToColor(progress) {
    if (progress < 0.33) return "#ef4444";
    if (progress < 0.66) return "#eab308";
    return "#22c55e";
}
function ForceGraph() {
    const { nodes: initialNodes, links: initialLinks } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$buildGraph$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildGraph"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$data$2f$rawNodes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rawNodes"]), []);
    const { nodes, links } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$graph$2f$useForceLayout$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForceLayout"])(initialNodes, initialLinks, WIDTH, HEIGHT);
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-slate-950",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: WIDTH,
            height: HEIGHT,
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
                        stroke: "#4b5563",
                        strokeWidth: 1
                    }, i, false, {
                        fileName: "[project]/app/progression/page.tsx",
                        lineNumber: 45,
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
                                fill: progressToColor(n.progress),
                                stroke: isSelected ? "#e5e7eb" : "#020617",
                                strokeWidth: isSelected ? 2 : 1
                            }, void 0, false, {
                                fileName: "[project]/app/progression/page.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                y: 30,
                                textAnchor: "middle",
                                fontSize: 10,
                                fill: "#e5e7eb",
                                children: n.label
                            }, void 0, false, {
                                fileName: "[project]/app/progression/page.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        ]
                    }, n.id, true, {
                        fileName: "[project]/app/progression/page.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/app/progression/page.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/progression/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ab8e932f._.js.map