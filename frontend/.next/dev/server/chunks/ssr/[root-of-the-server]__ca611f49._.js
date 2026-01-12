module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/api-config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Configuration
// In production (Vercel), uses NEXT_PUBLIC_API_URL environment variable
// In development, falls back to localhost:5000
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_ENDPOINTS = {
    faculty: `${API_BASE_URL}/api/faculty`,
    programs: `${API_BASE_URL}/api/programs`,
    courses: `${API_BASE_URL}/api/courses`,
    applications: `${API_BASE_URL}/api/applications`,
    enquiry: `${API_BASE_URL}/api/enquiry/post`,
    studentLife: `${API_BASE_URL}/api/student-life`,
    facilities: `${API_BASE_URL}/api/facilities`
};
}),
"[project]/components/application/ApplicationForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api-config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ---------------- DATA ---------------- */ const COUNTRIES = {
    India: [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Delhi",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Tamil Nadu",
        "Telangana",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ],
    USA: [
        "California",
        "Texas",
        "New York",
        "Florida",
        "Illinois"
    ],
    Canada: [
        "Ontario",
        "Quebec",
        "British Columbia",
        "Alberta"
    ]
};
const COUNTRY_CODES = [
    {
        code: "+91",
        country: "India"
    },
    {
        code: "+1",
        country: "USA/Canada"
    },
    {
        code: "+44",
        country: "UK"
    },
    {
        code: "+86",
        country: "China"
    },
    {
        code: "+81",
        country: "Japan"
    },
    {
        code: "+61",
        country: "Australia"
    },
    {
        code: "+49",
        country: "Germany"
    },
    {
        code: "+33",
        country: "France"
    },
    {
        code: "+39",
        country: "Italy"
    },
    {
        code: "+34",
        country: "Spain"
    }
];
const BACHELORS_COURSES = [
    "B.A",
    "B.Sc",
    "B.Com",
    "B.Tech / B.E",
    "BBA",
    "BCA",
    "B.Arch",
    "B.Pharm",
    "LLB",
    "MBBS",
    "Other"
];
const MASTERS_COURSES = [
    "M.A",
    "M.Sc",
    "M.Com",
    "M.Tech / M.E",
    "MBA",
    "MCA",
    "M.Arch",
    "M.Pharm",
    "LLM",
    "MD / MS",
    "Other"
];
const OTHER_QUALIFICATIONS = [
    "Diploma",
    "CA / CS / CMA",
    "PhD",
    "Other"
];
function ApplicationForm({ onClose }) {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        mobile: "",
        country: "",
        state: "",
        pincode: "",
        fullAddress: "",
        bachelors: "",
        bachelorsOther: "",
        masters: "",
        mastersOther: "",
        otherType: "",
        otherDetail: "",
        program: "",
        agree: false
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const validateField = (name, value)=>{
        let error = "";
        switch(name){
            case "firstName":
            case "lastName":
                if (value.length > 0 && value.length < 2) {
                    error = "Must be at least 2 characters";
                } else if (value.length > 50) {
                    error = "Must not exceed 50 characters";
                } else if (value && !/^[a-zA-Z\s]+$/.test(value)) {
                    error = "Only letters and spaces allowed";
                }
                break;
            case "middleName":
                if (value.length > 50) {
                    error = "Must not exceed 50 characters";
                } else if (value && !/^[a-zA-Z\s]+$/.test(value)) {
                    error = "Only letters and spaces allowed";
                }
                break;
            case "email":
                if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Please enter a valid email address";
                }
                break;
            case "mobile":
                if (value.length > 0 && value.length < 10) {
                    error = "Mobile number must be exactly 10 digits";
                } else if (value.length === 10 && !/^[0-9]{10}$/.test(value)) {
                    error = "Only numeric digits allowed";
                }
                break;
            case "pincode":
                if (value.length > 0 && value.length < 6) {
                    error = "PIN code must be exactly 6 digits";
                } else if (value.length === 6 && !/^[0-9]{6}$/.test(value)) {
                    error = "Only numeric digits allowed";
                }
                break;
            case "fullAddress":
                if (value.length > 0 && value.length < 10) {
                    error = "Address must be at least 10 characters";
                } else if (value.length > 500) {
                    error = "Address must not exceed 500 characters";
                }
                break;
            case "bachelorsOther":
            case "mastersOther":
                if (value.length > 0 && value.length < 2) {
                    error = "Must be at least 2 characters";
                } else if (value.length > 100) {
                    error = "Must not exceed 100 characters";
                }
                break;
        }
        return error;
    };
    const handleChange = (e)=>{
        const { name, value, type, checked } = e.target;
        // Phone number validation - only allow digits and max 10
        if (name === "mobile") {
            const numericValue = value.replace(/\D/g, "").slice(0, 10);
            setForm((prev)=>({
                    ...prev,
                    [name]: numericValue
                }));
            if (touched[name]) {
                setErrors((prev)=>({
                        ...prev,
                        [name]: validateField(name, numericValue)
                    }));
            }
            return;
        }
        // Pincode validation - only allow digits and max 6
        if (name === "pincode") {
            const numericValue = value.replace(/\D/g, "").slice(0, 6);
            setForm((prev)=>({
                    ...prev,
                    [name]: numericValue
                }));
            if (touched[name]) {
                setErrors((prev)=>({
                        ...prev,
                        [name]: validateField(name, numericValue)
                    }));
            }
            return;
        }
        // Name fields - only allow letters and spaces
        if (name === "firstName" || name === "middleName" || name === "lastName") {
            const textValue = value.replace(/[^a-zA-Z\s]/g, "");
            setForm((prev)=>({
                    ...prev,
                    [name]: textValue
                }));
            if (touched[name]) {
                setErrors((prev)=>({
                        ...prev,
                        [name]: validateField(name, textValue)
                    }));
            }
            return;
        }
        const newValue = type === "checkbox" ? checked : value;
        setForm((prev)=>({
                ...prev,
                [name]: newValue,
                ...name === "country" ? {
                    state: ""
                } : {}
            }));
        if (touched[name] && typeof newValue === "string") {
            setErrors((prev)=>({
                    ...prev,
                    [name]: validateField(name, newValue)
                }));
        }
    };
    const handleBlur = (e)=>{
        const { name, value } = e.target;
        setTouched((prev)=>({
                ...prev,
                [name]: true
            }));
        setErrors((prev)=>({
                ...prev,
                [name]: validateField(name, value)
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Mark all fields as touched
        const allTouched = {};
        Object.keys(form).forEach((key)=>{
            allTouched[key] = true;
        });
        setTouched(allTouched);
        // Validate all fields
        const newErrors = {};
        Object.entries(form).forEach(([key, value])=>{
            if (typeof value === "string") {
                const error = validateField(key, value);
                if (error) newErrors[key] = error;
            }
        });
        // Check required fields
        if (!form.firstName) newErrors.firstName = "First name is required";
        if (!form.lastName) newErrors.lastName = "Last name is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.mobile) newErrors.mobile = "Mobile number is required";
        if (form.mobile.length !== 10) newErrors.mobile = "Mobile number must be exactly 10 digits";
        if (!form.country) newErrors.country = "Country is required";
        if (!form.state) newErrors.state = "State is required";
        if (!form.pincode) newErrors.pincode = "PIN code is required";
        if (form.pincode.length !== 6) newErrors.pincode = "PIN code must be exactly 6 digits";
        if (!form.fullAddress) newErrors.fullAddress = "Full address is required";
        if (!form.bachelors) newErrors.bachelors = "Bachelor's qualification is required";
        if (form.bachelors === "Other" && !form.bachelorsOther) {
            newErrors.bachelorsOther = "Please specify your Bachelor's degree";
        }
        if (form.masters === "Other" && !form.mastersOther) {
            newErrors.mastersOther = "Please specify your Master's degree";
        }
        if (!form.program) newErrors.program = "Programme selection is required";
        if (!form.agree) newErrors.agree = "You must agree to continue";
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }
        setLoading(true);
        const payload = {
            name: {
                firstName: form.firstName,
                middleName: form.middleName || null,
                lastName: form.lastName
            },
            email: form.email,
            mobile: form.mobile,
            address: {
                country: form.country,
                state: form.state,
                pincode: form.pincode,
                fullAddress: form.fullAddress
            },
            education: {
                bachelors: form.bachelors === "Other" ? form.bachelorsOther : form.bachelors,
                masters: form.masters === "Other" ? form.mastersOther : form.masters || null,
                other: form.otherType ? {
                    type: form.otherType,
                    detail: form.otherDetail
                } : null
            },
            mbaProgram: form.program
        };
        try {
            const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2d$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/api/applications`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await res.json();
            if (data.success) {
                setSuccess(true);
                setTimeout(onClose, 2000);
            } else {
                alert("Submission failed");
            }
        } catch  {
            alert("Backend not reachable");
        } finally{
            setLoading(false);
        }
    };
    if (success) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-10 py-8 rounded-2xl shadow-2xl text-center transform animate-scaleIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-green-600",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 287,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/application/ApplicationForm.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/application/ApplicationForm.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Application Submitted Successfully"
                    }, void 0, false, {
                        fileName: "[project]/components/application/ApplicationForm.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Our admissions team will contact you shortly."
                    }, void 0, false, {
                        fileName: "[project]/components/application/ApplicationForm.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/ApplicationForm.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/application/ApplicationForm.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7fba9ef62db7413e" + " " + "fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7fba9ef62db7413e" + " " + "bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7fba9ef62db7413e" + " " + "px-10 py-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "absolute inset-0 bg-black/5"
                            }, void 0, false, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "relative flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-3xl font-bold text-white tracking-tight",
                                                children: "MBA Application Form"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-blue-100 mt-2 text-sm font-medium",
                                                children: "Please fill in your details carefully to proceed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "jsx-7fba9ef62db7413e" + " " + "text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-2xl font-light",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/application/ApplicationForm.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7fba9ef62db7413e" + " " + "px-10 py-10 space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Personal Information"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-3 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "firstName",
                                                        placeholder: "First Name *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.firstName,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "First Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.firstName && touched.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.firstName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "middleName",
                                                        placeholder: "Middle Name (Optional)",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.middleName,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.middleName && touched.middleName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Middle Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 355,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.middleName && touched.middleName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.middleName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "lastName",
                                                        placeholder: "Last Name *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.lastName,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Last Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.lastName && touched.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.lastName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 360,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-5 mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "email",
                                                        type: "email",
                                                        placeholder: "Email Address *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.email,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.email && touched.email ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 388,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.email && touched.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 390,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 377,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "countryCode",
                                                            onChange: handleChange,
                                                            value: form.countryCode,
                                                            className: "jsx-7fba9ef62db7413e" + " " + "input h-full",
                                                            children: COUNTRY_CODES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c.code,
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: [
                                                                        c.code,
                                                                        " ",
                                                                        c.country
                                                                    ]
                                                                }, c.code, true, {
                                                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/application/ApplicationForm.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "mobile",
                                                                type: "tel",
                                                                placeholder: "Mobile Number (10 digits) *",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.mobile,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.mobile && touched.mobile ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                                children: "Mobile Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 419,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.mobile && touched.mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.mobile
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 408,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 393,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 325,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Address Details"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "country",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.country,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.country && touched.country ? 'border-red-500' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-7fba9ef62db7413e",
                                                                children: "Select Country *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 19
                                                            }, this),
                                                            Object.keys(COUNTRIES).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 446,
                                                                    columnNumber: 52
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.country && touched.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.country
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 449,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 436,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "state",
                                                        disabled: !form.country,
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.state,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.state && touched.state ? 'border-red-500' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-7fba9ef62db7413e",
                                                                children: "Select State *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 463,
                                                                columnNumber: 19
                                                            }, this),
                                                            form.country && COUNTRIES[form.country].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 466,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.state && touched.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.state
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 453,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 435,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "pincode",
                                                placeholder: "PIN Code (6 digits) *",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.pincode,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.pincode && touched.pincode ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, this),
                                            errors.pincode && touched.pincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.pincode
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 486,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "fullAddress",
                                                placeholder: "Full Address *",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.fullAddress,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input min-h-[110px] resize-none ${errors.fullAddress && touched.fullAddress ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 491,
                                                columnNumber: 15
                                            }, this),
                                            errors.fullAddress && touched.fullAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.fullAddress
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 501,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 429,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Educational Qualification"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "label-modern",
                                                        children: "Bachelor's Qualification *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                name: "bachelors",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.bachelors,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.bachelors && touched.bachelors ? 'border-red-500' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-7fba9ef62db7413e",
                                                                        children: "Select Bachelor's Degree"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                        lineNumber: 525,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    BACHELORS_COURSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "jsx-7fba9ef62db7413e",
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                            lineNumber: 526,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.bachelors && touched.bachelors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.bachelors
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 529,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 17
                                                    }, this),
                                                    form.bachelors === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "bachelorsOther",
                                                                placeholder: "Please specify your Bachelor's degree",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.bachelorsOther,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input mt-3 ${errors.bachelorsOther && touched.bachelorsOther ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 534,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.bachelorsOther && touched.bachelorsOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.bachelorsOther
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 544,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 514,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "label-modern",
                                                        children: "Master's Qualification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                name: "masters",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.masters,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.masters && touched.masters ? 'border-red-500' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-7fba9ef62db7413e",
                                                                        children: "Select Master's Degree (Optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    MASTERS_COURSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "jsx-7fba9ef62db7413e",
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                            lineNumber: 561,
                                                                            columnNumber: 47
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.masters && touched.masters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.masters
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 17
                                                    }, this),
                                                    form.masters === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "mastersOther",
                                                                placeholder: "Please specify your Master's degree",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.mastersOther,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input mt-3 ${errors.mastersOther && touched.mastersOther ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.mastersOther && touched.mastersOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.mastersOther
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Programme Selection"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 590,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "program",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.program,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.program && touched.program ? 'border-red-500' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "Select MBA Programme *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Full-Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Executive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            errors.program && touched.program && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.program
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 607,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 587,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex gap-3 text-sm text-gray-700 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "agree",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                checked: form.agree,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + "mt-0.5 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 615,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "font-medium",
                                                children: "I agree to receive information regarding my application and understand that my data will be processed according to the privacy policy *"
                                            }, void 0, false, {
                                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                                lineNumber: 624,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this),
                                    errors.agree && touched.agree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message ml-8",
                                        children: errors.agree
                                    }, void 0, false, {
                                        fileName: "[project]/components/application/ApplicationForm.tsx",
                                        lineNumber: 627,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: loading,
                                className: "jsx-7fba9ef62db7413e" + " " + "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:cursor-not-allowed disabled:transform-none",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7fba9ef62db7413e" + " " + "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "jsx-7fba9ef62db7413e" + " " + "animate-spin h-5 w-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                    fill: "none",
                                                    className: "jsx-7fba9ef62db7413e" + " " + "opacity-25"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                    className: "jsx-7fba9ef62db7413e" + " " + "opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                                    lineNumber: 641,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/application/ApplicationForm.tsx",
                                            lineNumber: 639,
                                            columnNumber: 17
                                        }, this),
                                        "Submitting Application..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/application/ApplicationForm.tsx",
                                    lineNumber: 638,
                                    columnNumber: 15
                                }, this) : "Submit Application"
                            }, void 0, false, {
                                fileName: "[project]/components/application/ApplicationForm.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/application/ApplicationForm.tsx",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/application/ApplicationForm.tsx",
                lineNumber: 303,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7fba9ef62db7413e",
                children: ".input.jsx-7fba9ef62db7413e{background:#fff;border:2px solid #e5e7eb;border-radius:.75rem;width:100%;padding:.875rem 1rem;font-size:.95rem;transition:all .2s}.input.jsx-7fba9ef62db7413e:focus{border-color:#3b82f6;outline:none;box-shadow:0 0 0 3px #3b82f61a}.input.jsx-7fba9ef62db7413e:disabled{cursor:not-allowed;background:#f9fafb}.input.border-red-500.jsx-7fba9ef62db7413e{border-color:#ef4444}.input.border-red-500.jsx-7fba9ef62db7413e:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.label-modern.jsx-7fba9ef62db7413e{color:#374151;margin-bottom:.5rem;font-size:.875rem;font-weight:600;display:block}.floating-label.jsx-7fba9ef62db7413e{color:#6b7280;pointer-events:none;background:#fff;padding:0 .375rem;font-size:.75rem;font-weight:600;position:absolute;top:-.625rem;left:1rem}.error-message.jsx-7fba9ef62db7413e{color:#ef4444;margin-top:.375rem;font-size:.75rem;font-weight:500}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.animate-fadeIn.jsx-7fba9ef62db7413e{animation:.3s ease-out fadeIn}.animate-scaleIn.jsx-7fba9ef62db7413e{animation:.3s ease-out scaleIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/application/ApplicationForm.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$ApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/application/ApplicationForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Navbar() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openForm, setOpenForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const navItems = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "About",
            href: "/about"
        },
        {
            label: "Faculty",
            href: "/faculty"
        },
        {
            label: "Programs",
            href: "/programs"
        },
        {
            label: "Admissions",
            href: "/admissions"
        },
        {
            label: "Placements",
            href: "/placements"
        },
        {
            label: "Student Life",
            href: "/student-life"
        },
        {
            label: "Contact",
            href: "/contact"
        }
    ];
    const programSubmenu = [
        {
            label: "MBA Full-Time",
            href: "/programs/mba-fulltime"
        },
        {
            label: "MBA Executive",
            href: "/programs/mba-executive"
        },
        {
            label: "MBA Online",
            href: "/programs/mba-online"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 bg-background border-b border-border",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center h-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center space-x-3 group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "Institute of Engineering and Management",
                                        width: 60,
                                        height: 60,
                                        className: "object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-sm sm:text-base text-primary hidden sm:inline-block leading-tight",
                                        children: "IEM - Management"
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center space-x-1",
                                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 transition-colors flex items-center gap-1",
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/navbar.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    }, item.label, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenForm(true),
                                className: "hidden md:block px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsOpen(!isOpen),
                                className: "md:hidden p-2 rounded-lg hover:bg-muted transition-colors",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 23
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 51
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden pb-4 space-y-2 animate-slide-in-up",
                        children: [
                            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        onClick: ()=>setIsOpen(false),
                                        className: "block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-accent/10 hover:text-primary transition-colors",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/navbar.tsx",
                                        lineNumber: 87,
                                        columnNumber: 17
                                    }, this)
                                }, item.label, false, {
                                    fileName: "[project]/components/navbar.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setOpenForm(true);
                                    setIsOpen(false);
                                },
                                className: "mx-3 mt-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-md text-sm font-medium hover:bg-accent/90 transition-colors",
                                children: "Apply Now"
                            }, void 0, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            openForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$application$2f$ApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setOpenForm(false)
            }, void 0, false, {
                fileName: "[project]/components/navbar.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/navbar.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/context/FacultyContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacultyProvider",
    ()=>FacultyProvider,
    "useFaculty",
    ()=>useFaculty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// app/context/FacultyContext.tsx
"use client";
;
;
const FacultyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const FacultyProvider = ({ children })=>{
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FacultyContext.Provider, {
        value: {
            selected,
            setSelected
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/FacultyContext.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const useFaculty = ()=>{
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FacultyContext);
    if (!ctx) throw new Error("useFaculty must be used inside a FacultyProvider");
    return ctx;
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ca611f49._.js.map