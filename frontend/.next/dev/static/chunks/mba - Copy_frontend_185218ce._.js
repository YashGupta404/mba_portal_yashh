(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/mba - Copy/frontend/components/ui/videoanimation.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function videoanimation({ videos }) {
    _s();
    const [ind, setInd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fade, setFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "videoanimation.useEffect": ()=>{
            const interval2 = setInterval({
                "videoanimation.useEffect.interval2": ()=>{
                    setFade(false); // fade out
                    setInd({
                        "videoanimation.useEffect.interval2": (prev)=>(prev + 1) % videos.length
                    }["videoanimation.useEffect.interval2"]);
                }
            }["videoanimation.useEffect.interval2"], 6000); // video duration
            return ({
                "videoanimation.useEffect": ()=>{
                    clearInterval(interval2);
                }
            })["videoanimation.useEffect"];
        }
    }["videoanimation.useEffect"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-0 left-0 w-full -z-10 h-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            src: videos[ind],
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: `
          absolute inset-0 w-full h-full object-cover object-top
          transition-opacity 
        `
        }, ind, false, {
            fileName: "[project]/mba - Copy/frontend/components/ui/videoanimation.jsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/ui/videoanimation.jsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(videoanimation, "txWld0jDoyghFTxw0gRlUk7FIB8=");
const __TURBOPACK__default__export__ = videoanimation;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/mba - Copy/frontend/app/faculty/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FacultyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$components$2f$ui$2f$videoanimation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/frontend/components/ui/videoanimation.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// NEW: useFaculty context import
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$app$2f$context$2f$FacultyContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/frontend/app/context/FacultyContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FacultyPage() {
    _s();
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedId, setExpandedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedFaculty, setSelectedFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [faculty, setFaculty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // NEW: context setter
    const { setSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$app$2f$context$2f$FacultyContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaculty"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FacultyPage.useEffect": ()=>{
            async function fetchFaculty() {
                try {
                    setLoading(true);
                    const res = await fetch("http://localhost:5000/api/faculty");
                    const data = await res.json();
                    setFaculty(data);
                } catch (error) {
                    console.error("Failed to load faculty:", error);
                } finally{
                    setLoading(false);
                }
            }
            fetchFaculty();
        }
    }["FacultyPage.useEffect"], []);
    // Function to generate slug from name
    const generateSlug = (name)=>{
        return name.toLowerCase().replace(/^dr\.\s*|^prof\.\s*/g, "").replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-4xl lg:text-5xl font-bold mb-6",
                                    children: "Our Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg opacity-90",
                                    children: "Loading faculty information..."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-96",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    }
    const videos = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-24 bg-black/70 relative text-primary-foreground",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$components$2f$ui$2f$videoanimation$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        videos: videos
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 99,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl animate-slide-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6",
                                    children: "Our Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "drop-shadow-[2px_2px_5px_white] text-lg opacity-90",
                                    children: "Meet the world-class educators and mentors who bring industry expertise and academic rigor to every classroom. Our faculty combines decades of experience with innovative teaching methodologies."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-24 bg-background relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse",
                                style: {
                                    animationDelay: "2s"
                                }
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: faculty.map((member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group relative animate-slide-in-up h-full cursor-pointer",
                                    style: {
                                        animationDelay: `${idx * 100}ms`
                                    },
                                    onMouseEnter: ()=>setHoveredId(member._id),
                                    onMouseLeave: ()=>setHoveredId(null),
                                    onClick: ()=>setExpandedId(expandedId === member._id ? null : member._id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${hoveredId === member._id ? "animate-pulse" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative h-full transition-all duration-500 transform ${expandedId === member._id ? "scale-105" : "scale-100"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative bg-card/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative overflow-hidden bg-gradient-to-b from-muted via-muted/70 to-muted/50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative w-full pt-8 pb-6 px-4 flex justify-center h-72 overflow-hidden",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `absolute inset-4 transition-all duration-500 ease-out ${hoveredId === member._id ? "-translate-x-20 opacity-100" : "translate-x-0 opacity-100"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `relative transition-all duration-500 h-full flex items-center justify-center ${hoveredId === member._id ? "scale-110" : "scale-100"}`,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 160,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        src: member.image || "/placeholder.svg",
                                                                                        alt: member.name,
                                                                                        className: `w-full h-full object-cover transition-all duration-700 ${hoveredId === member._id ? "scale-120 brightness-125" : "scale-100 brightness-100"}`
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                        lineNumber: 164,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 163,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "absolute -bottom-2 right-0 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg",
                                                                                    children: "⭐ Featured"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 174,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: `absolute inset-4 right-auto left-32 transition-all duration-500 ease-out ${hoveredId === member._id ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full flex flex-col justify-between p-4 bg-gradient-to-b from-primary/10 to-accent/5 rounded-2xl border border-accent/20 backdrop-blur-sm overflow-y-auto",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "space-y-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                                                    className: "w-4 h-4 text-accent shrink-0"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 191,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-bold text-accent",
                                                                                                            children: member.publications || 0
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                            lineNumber: 192,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        " Publications"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 192,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 190,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                                                    className: "w-4 h-4 text-accent shrink-0"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 196,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        "Mentors ",
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-bold text-accent",
                                                                                                            children: member.students || 0
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                            lineNumber: 197,
                                                                                                            columnNumber: 47
                                                                                                        }, this),
                                                                                                        " Students"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 197,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 195,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2 text-xs",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                                                                    className: "w-4 h-4 text-accent shrink-0"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 201,
                                                                                                    columnNumber: 33
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-bold text-accent",
                                                                                                            children: member.researchAreas?.length || 0
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                            lineNumber: 202,
                                                                                                            columnNumber: 39
                                                                                                        }, this),
                                                                                                        " Research Areas"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 202,
                                                                                                    columnNumber: 33
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 200,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 189,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-xs font-bold text-accent mb-2",
                                                                                            children: "Research Focus:"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 208,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex flex-wrap gap-1",
                                                                                            children: [
                                                                                                member.researchAreas?.slice(0, 2).map((area, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                        className: "text-xs bg-accent/20 text-accent px-2 py-1 rounded",
                                                                                                        children: area
                                                                                                    }, i, false, {
                                                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                        lineNumber: 211,
                                                                                                        columnNumber: 35
                                                                                                    }, this)),
                                                                                                member.researchAreas && member.researchAreas.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-xs bg-accent/10 text-accent/70 px-2 py-1 rounded",
                                                                                                    children: [
                                                                                                        "+",
                                                                                                        member.researchAreas.length - 2,
                                                                                                        " more"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                                    lineNumber: 214,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 209,
                                                                                            columnNumber: 31
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 207,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: (e)=>{
                                                                                        e.stopPropagation();
                                                                                        setSelectedFaculty(member._id);
                                                                                    },
                                                                                    className: "w-full px-3 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2",
                                                                                    children: [
                                                                                        "Quick View ",
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                            className: "w-3 h-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                            lineNumber: 229,
                                                                                            columnNumber: 42
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 222,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                            lineNumber: 186,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-1 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 ${hoveredId === member._id ? "opacity-100 scale-x-100" : "opacity-50 scale-x-75"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 flex flex-col grow",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mb-2 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: `text-2xl font-bold transition-all duration-500 ${hoveredId === member._id ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary" : "text-foreground"}`,
                                                                    children: member.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-center mb-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-block px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${hoveredId === member._id ? "bg-accent/30 text-accent border border-accent/50" : "bg-accent/10 text-accent border border-accent/20"}`,
                                                                    children: member.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                    lineNumber: 260,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-foreground/70 text-sm text-center mb-4 italic leading-relaxed",
                                                                children: member.specialization
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 270,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `relative p-4 rounded-2xl border transition-all duration-500 overflow-hidden group/badge ${hoveredId === member._id ? "bg-accent/25 border-accent/60 shadow-lg shadow-accent/30" : "bg-accent/8 border-accent/20"}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 animate-shimmer"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "relative flex items-start gap-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: `transition-transform duration-500 flex-shrink-0 ${hoveredId === member._id ? "animate-bounce scale-110" : "scale-100"}`,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                                                    className: "w-5 h-5 text-accent"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                    lineNumber: 288,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 285,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-foreground/80 font-medium leading-relaxed",
                                                                                children: member.achievements || "No achievements listed"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 290,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 284,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 275,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2 pt-6 mt-auto",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: `mailto:${member.email}`,
                                                                        className: `flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 ${hoveredId === member._id ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105" : "bg-accent/10 text-accent hover:bg-accent/20"}`,
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 309,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Email"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 310,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 300,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            // Save full faculty object into global context
                                                                            setSelected(member);
                                                                            // Navigate to the fixed details page
                                                                            router.push("/faculty/facultyinfo");
                                                                        },
                                                                        className: `flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 ${hoveredId === member._id ? "bg-gradient-to-r from-accent to-primary text-white shadow-lg scale-105" : "bg-accent/10 text-accent hover:bg-accent/20"}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                className: "w-4 h-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 328,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "Details"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                                lineNumber: 329,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 314,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 297,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                        lineNumber: 337,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, member._id, true, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            selectedFaculty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in",
                onClick: ()=>setSelectedFaculty(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card rounded-3xl border border-border/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-pop",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-64 bg-gradient-to-b from-muted to-muted/50 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: faculty.find((f)=>f._id === selectedFaculty)?.image || "/placeholder.svg",
                                    alt: "Faculty",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 369,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedFaculty(null),
                                    className: "absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8",
                            children: (()=>{
                                const member = faculty.find((f)=>f._id === selectedFaculty);
                                if (!member) return null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl font-bold",
                                                    children: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-accent font-semibold mb-3",
                                                    children: member.title
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-foreground/70",
                                                    children: member.bio || "No bio available"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 390,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-4 mb-8 p-6 bg-accent/5 rounded-2xl border border-accent/20",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-accent",
                                                            children: member.publications || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 399,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "Publications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-accent",
                                                            children: member.students || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "Students Mentored"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-3xl font-bold text-accent",
                                                            children: member.qualifications?.length || 0
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs",
                                                            children: "Qualifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 397,
                                            columnNumber: 21
                                        }, this),
                                        member.researchAreas && member.researchAreas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
                                                            className: "w-5 h-5 text-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 416,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Research Areas"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-2 gap-3",
                                                    children: member.researchAreas.map((area, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-accent",
                                                                children: area
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 422,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 421,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 414,
                                            columnNumber: 23
                                        }, this),
                                        member.currentProjects && member.currentProjects.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                            className: "w-5 h-5 text-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 433,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Current Projects"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: member.currentProjects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: project.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 440,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-xs px-3 py-1 rounded-full font-bold ${project.status === "Ongoing" ? "bg-green-500/20 text-green-600" : project.status === "In Review" ? "bg-yellow-500/20 text-yellow-600" : "bg-blue-500/20 text-blue-600"}`,
                                                                        children: project.status
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                lineNumber: 439,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 438,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 431,
                                            columnNumber: 23
                                        }, this),
                                        member.qualifications && member.qualifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold mb-4 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "w-5 h-5 text-accent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 463,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Qualifications"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: member.qualifications.map((qual, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 p-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-2 h-2 bg-accent rounded-full"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                    lineNumber: 469,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: qual
                                                                }, void 0, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                                    lineNumber: 470,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 29
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 461,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4 pt-8 border-t border-border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${member.email}`,
                                                    className: "flex-1 px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-center hover:opacity-90 transition-opacity",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-5 h-5 inline-block mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Send Email"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 23
                                                }, this),
                                                member.linkedin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: member.linkedin,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex-1 px-4 py-3 border-2 border-accent text-accent rounded-lg font-bold text-center hover:bg-accent/10 transition-colors",
                                                    onClick: (e)=>e.stopPropagation(),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                                            className: "w-5 h-5 inline-block mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                            lineNumber: 496,
                                                            columnNumber: 27
                                                        }, this),
                                                        "LinkedIn"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                    lineNumber: 489,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 478,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setSelectedFaculty(null);
                                                    const slug = member.slug || generateSlug(member.name);
                                                    router.push(`/faculty/${slug}`);
                                                },
                                                className: "w-full px-4 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors",
                                                children: "View Full Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 503,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true);
                            })()
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                lineNumber: 349,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 lg:py-24 bg-muted/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-16 animate-slide-in-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl lg:text-4xl font-bold mb-4",
                                    children: "Faculty Excellence"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-foreground/60 max-w-2xl mx-auto",
                                    children: "Our faculty is committed to continuous learning and research excellence"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 528,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 526,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 bg-card rounded-xl border hover:border-accent/50 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                            className: "w-8 h-8 text-accent mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: "Research & Publication"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground/60",
                                            children: "Active contributors to peer-reviewed journals and conferences"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 bg-card rounded-xl border hover:border-accent/50 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "w-8 h-8 text-accent mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: "Industry Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 545,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground/60",
                                            children: "Faculty bring decades of hands-on industry leadership"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 543,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-8 bg-card rounded-xl border hover:border-accent/50 transition-all",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            className: "w-8 h-8 text-accent mb-4"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 552,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg mb-2",
                                            children: "Mentorship & Guidance"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-foreground/60",
                                            children: "Personalized mentorship to help students grow professionally"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
                lineNumber: 524,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mba - Copy/frontend/app/faculty/page.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(FacultyPage, "8WZ2VLFppxNJ81qZT6+LmsZXm68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$app$2f$context$2f$FacultyContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFaculty"]
    ];
});
_c = FacultyPage;
var _c;
__turbopack_context__.k.register(_c, "FacultyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=mba%20-%20Copy_frontend_185218ce._.js.map