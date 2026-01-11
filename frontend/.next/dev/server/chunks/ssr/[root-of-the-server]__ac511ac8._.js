module.exports = [
"[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
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
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
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
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [touched, setTouched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
            const res = await fetch("http://localhost:5000/api/applications", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white px-10 py-8 rounded-2xl shadow-2xl text-center transform animate-scaleIn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-8 h-8 text-green-600",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 286,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                            lineNumber: 285,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                        lineNumber: 284,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: "Application Submitted Successfully"
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Our admissions team will contact you shortly."
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                lineNumber: 283,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
            lineNumber: 282,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-7fba9ef62db7413e" + " " + "fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-7fba9ef62db7413e" + " " + "bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7fba9ef62db7413e" + " " + "px-10 py-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "absolute inset-0 bg-black/5"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "relative flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-3xl font-bold text-white tracking-tight",
                                                children: "MBA Application Form"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-blue-100 mt-2 text-sm font-medium",
                                                children: "Please fill in your details carefully to proceed"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 310,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "jsx-7fba9ef62db7413e" + " " + "text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-2xl font-light",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-7fba9ef62db7413e" + " " + "px-10 py-10 space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Personal Information"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-3 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "firstName",
                                                        placeholder: "First Name *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.firstName,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "First Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 340,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.firstName && touched.firstName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.firstName
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 330,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "middleName",
                                                        placeholder: "Middle Name (Optional)",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.middleName,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.middleName && touched.middleName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Middle Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.middleName && touched.middleName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.middleName
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "lastName",
                                                        placeholder: "Last Name *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.lastName,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Last Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.lastName && touched.lastName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.lastName
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 359,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-5 mt-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "email",
                                                        type: "email",
                                                        placeholder: "Email Address *",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.email,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.email && touched.email ? 'border-red-500' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                        children: "Email Address"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.email && touched.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 376,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "w-32",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            name: "countryCode",
                                                            onChange: handleChange,
                                                            value: form.countryCode,
                                                            className: "jsx-7fba9ef62db7413e" + " " + "input h-full",
                                                            children: COUNTRY_CODES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: c.code,
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: [
                                                                        c.code,
                                                                        " ",
                                                                        c.country
                                                                    ]
                                                                }, c.code, true, {
                                                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 9
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 5
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 393,
                                                        columnNumber: 3
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "mobile",
                                                                type: "tel",
                                                                placeholder: "Mobile Number (10 digits) *",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.mobile,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input peer ${errors.mobile && touched.mobile ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 5
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "floating-label",
                                                                children: "Mobile Number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 5
                                                            }, this),
                                                            errors.mobile && touched.mobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.mobile
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 7
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 407,
                                                        columnNumber: 3
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 392,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 430,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Address Details"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 431,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 429,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid grid-cols-1 md:grid-cols-2 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "country",
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.country,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.country && touched.country ? 'border-red-500' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-7fba9ef62db7413e",
                                                                children: "Select Country *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 19
                                                            }, this),
                                                            Object.keys(COUNTRIES).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: c
                                                                }, c, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 445,
                                                                    columnNumber: 52
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.country && touched.country && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.country
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 435,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: "state",
                                                        disabled: !form.country,
                                                        onChange: handleChange,
                                                        onBlur: handleBlur,
                                                        value: form.state,
                                                        required: true,
                                                        className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.state && touched.state ? 'border-red-500' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                className: "jsx-7fba9ef62db7413e",
                                                                children: "Select State *"
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 462,
                                                                columnNumber: 19
                                                            }, this),
                                                            form.country && COUNTRIES[form.country].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    className: "jsx-7fba9ef62db7413e",
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                    lineNumber: 465,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 17
                                                    }, this),
                                                    errors.state && touched.state && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                        children: errors.state
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 469,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 452,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 434,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "pincode",
                                                placeholder: "PIN Code (6 digits) *",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.pincode,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.pincode && touched.pincode ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this),
                                            errors.pincode && touched.pincode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.pincode
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 485,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "fullAddress",
                                                placeholder: "Full Address *",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.fullAddress,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input min-h-[110px] resize-none ${errors.fullAddress && touched.fullAddress ? 'border-red-500' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 490,
                                                columnNumber: 15
                                            }, this),
                                            errors.fullAddress && touched.fullAddress && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.fullAddress
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 500,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 428,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "3"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Educational Qualification"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "grid md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "label-modern",
                                                        children: "Bachelor's Qualification *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                name: "bachelors",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.bachelors,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.bachelors && touched.bachelors ? 'border-red-500' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-7fba9ef62db7413e",
                                                                        children: "Select Bachelor's Degree"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                        lineNumber: 524,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    BACHELORS_COURSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "jsx-7fba9ef62db7413e",
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                            lineNumber: 525,
                                                                            columnNumber: 49
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.bachelors && touched.bachelors && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.bachelors
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 528,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 17
                                                    }, this),
                                                    form.bachelors === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "bachelorsOther",
                                                                placeholder: "Please specify your Bachelor's degree",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.bachelorsOther,
                                                                required: true,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input mt-3 ${errors.bachelorsOther && touched.bachelorsOther ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.bachelorsOther && touched.bachelorsOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.bachelorsOther
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 532,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 513,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "label-modern",
                                                        children: "Master's Qualification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 550,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                name: "masters",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.masters,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.masters && touched.masters ? 'border-red-500' : ''}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        className: "jsx-7fba9ef62db7413e",
                                                                        children: "Select Master's Degree (Optional)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                        lineNumber: 559,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    MASTERS_COURSES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            className: "jsx-7fba9ef62db7413e",
                                                                            children: c
                                                                        }, c, false, {
                                                                            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                            lineNumber: 560,
                                                                            columnNumber: 47
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 19
                                                            }, this),
                                                            errors.masters && touched.masters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.masters
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 551,
                                                        columnNumber: 17
                                                    }, this),
                                                    form.masters === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                name: "mastersOther",
                                                                placeholder: "Please specify your Master's degree",
                                                                onChange: handleChange,
                                                                onBlur: handleBlur,
                                                                value: form.mastersOther,
                                                                className: "jsx-7fba9ef62db7413e" + " " + `input mt-3 ${errors.mastersOther && touched.mastersOther ? 'border-red-500' : ''}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 568,
                                                                columnNumber: 21
                                                            }, this),
                                                            errors.mastersOther && touched.mastersOther && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                                children: errors.mastersOther
                                                            }, void 0, false, {
                                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                                lineNumber: 577,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 549,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 512,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "jsx-7fba9ef62db7413e" + " " + "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center text-base font-bold shadow-md",
                                                children: "4"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "text-xl font-bold text-gray-900",
                                                children: "Programme Selection"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "program",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                value: form.program,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + `input ${errors.program && touched.program ? 'border-red-500' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "Select MBA Programme *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Full-Time"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Executive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 602,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        className: "jsx-7fba9ef62db7413e",
                                                        children: "MBA Online"
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                        lineNumber: 603,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 592,
                                                columnNumber: 15
                                            }, this),
                                            errors.program && touched.program && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "error-message",
                                                children: errors.program
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 606,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 591,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 586,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-7fba9ef62db7413e" + " " + "bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "flex gap-3 text-sm text-gray-700 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                name: "agree",
                                                onChange: handleChange,
                                                onBlur: handleBlur,
                                                checked: form.agree,
                                                required: true,
                                                className: "jsx-7fba9ef62db7413e" + " " + "mt-0.5 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 614,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-7fba9ef62db7413e" + " " + "font-medium",
                                                children: "I agree to receive information regarding my application and understand that my data will be processed according to the privacy policy *"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 613,
                                        columnNumber: 13
                                    }, this),
                                    errors.agree && touched.agree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-7fba9ef62db7413e" + " " + "error-message ml-8",
                                        children: errors.agree
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                        lineNumber: 626,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 612,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                disabled: loading,
                                className: "jsx-7fba9ef62db7413e" + " " + "w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:cursor-not-allowed disabled:transform-none",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7fba9ef62db7413e" + " " + "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            viewBox: "0 0 24 24",
                                            className: "jsx-7fba9ef62db7413e" + " " + "animate-spin h-5 w-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4",
                                                    fill: "none",
                                                    className: "jsx-7fba9ef62db7413e" + " " + "opacity-25"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                                                    className: "jsx-7fba9ef62db7413e" + " " + "opacity-75"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                            lineNumber: 638,
                                            columnNumber: 17
                                        }, this),
                                        "Submitting Application..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this) : "Submit Application"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "7fba9ef62db7413e",
                children: ".input.jsx-7fba9ef62db7413e{background:#fff;border:2px solid #e5e7eb;border-radius:.75rem;width:100%;padding:.875rem 1rem;font-size:.95rem;transition:all .2s}.input.jsx-7fba9ef62db7413e:focus{border-color:#3b82f6;outline:none;box-shadow:0 0 0 3px #3b82f61a}.input.jsx-7fba9ef62db7413e:disabled{cursor:not-allowed;background:#f9fafb}.input.border-red-500.jsx-7fba9ef62db7413e{border-color:#ef4444}.input.border-red-500.jsx-7fba9ef62db7413e:focus{border-color:#ef4444;box-shadow:0 0 0 3px #ef44441a}.label-modern.jsx-7fba9ef62db7413e{color:#374151;margin-bottom:.5rem;font-size:.875rem;font-weight:600;display:block}.floating-label.jsx-7fba9ef62db7413e{color:#6b7280;pointer-events:none;background:#fff;padding:0 .375rem;font-size:.75rem;font-weight:600;position:absolute;top:-.625rem;left:1rem}.error-message.jsx-7fba9ef62db7413e{color:#ef4444;margin-top:.375rem;font-size:.75rem;font-weight:500}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}.animate-fadeIn.jsx-7fba9ef62db7413e{animation:.3s ease-out fadeIn}.animate-scaleIn.jsx-7fba9ef62db7413e{animation:.3s ease-out scaleIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx",
        lineNumber: 301,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/mba - Copy/frontend/components/home/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleX$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as CircleX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$components$2f$application$2f$ApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/frontend/components/application/ApplicationForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function HeroSection() {
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [openForm, setOpenForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const images = [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop&q=90",
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=90"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const interval = setInterval(()=>{
            setImageIndex((prev)=>(prev + 1) % images.length);
        }, 4000);
        return ()=>clearInterval(interval);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const generatedParticles = Array.from({
            length: 12
        }, (_, i)=>({
                id: i,
                left: Math.random() * 100 + "%",
                delay: Math.random() * 2
            }));
        setParticles(generatedParticles);
    }, []);
    const [style, setstyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('hidden');
    const handleclick = ()=>{
        if (style === "block") {
            document.body.style.overflow = "auto";
            setstyle("hidden");
        } else {
            document.body.style.overflow = "hidden";
            setstyle("block");
        }
    };
    // csss related......
    const formfielddiv = "h-13 flex flex-col  ";
    const formlabel = "font-bold text-blue-700 ";
    const formfield = "h-full w-full rounded-[4px] hover:border-blue-900/70 focus:border-blue-800/70 focus:shadow-[1px_1px_5px_rgba(30,64,175,0.3)] hover:shadow-[1px_1px_5px_rgba(30,64,175,0.3)] bg-accent/10 hover:border-[2px] focus:border-[2px] border-box py-1 my-1 px-3";
    const buttonanimation = "transition-all transition-100 active:scale-99 hover:scale-102 active:opacity-[0.9]";
    //enquiry form logic
    const [formdata, setformdata] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: ""
    });
    const handlechange = (e)=>{
        const { name, value } = e.target;
        console.log(name, value);
        const shallowcopy = {
            ...formdata
        };
        shallowcopy[name] = value;
        setformdata(shallowcopy);
    };
    const handlesubmission = async (e)=>{
        e.preventDefault();
        const { name, email, mobile, subject, message } = formdata;
        if (!name || !email || !message || !subject || !mobile) {
            console.log("Kindly fill up the credentials");
        }
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/enquiry/post", formdata, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            const { success, error, message } = response.data;
            if (success) {
                console.log("Enquiry posted successfully");
                handleclick();
                setformdata({
                    name: "",
                    email: "",
                    message: "",
                    mobile: "",
                    subject: ""
                });
            }
            if (error) {
                console.log("Error occured while posting data=", error);
            }
        } catch (err) {
            console.log("Error with enquiry form api...", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full h-screen overflow-hidden",
        children: [
            images.map((img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 transition-all duration-1500 ${idx === imageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"}`,
                    style: {
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }
                }, idx, false, {
                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10"
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-1 h-1 bg-white rounded-full animate-float-particles",
                        style: {
                            left: particle.left,
                            bottom: "-10px",
                            animationDelay: `${particle.delay}s`,
                            opacity: 0.6
                        }
                    }, particle.id, false, {
                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                        lineNumber: 148,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-screen h-screen top-0  fixed z-90 bg-black/50", style),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "homeenquiryform",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex flex-col justify-center items-end border-box py-5 px-8 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-100 w-[50vw] h-[90vh]  bg-zinc-50 transition-all duration-300 transform ease-out rounded-[10px] ", style === "block" ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleclick,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("w-auto ", buttonanimation),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleX$3e$__["CircleX"], {
                                size: 40,
                                className: "text-accent",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full flex flex-col justify-around",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[3rem] text-center font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent/50 to-blue-900 leading-tight",
                                            children: "MBA Course Enquiry"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[0.8rem] text-center font-bold",
                                            children: "Having enquiry regarding our MBA course?? Feel free to ask us through our portal"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handlesubmission,
                                    className: "grid grid-cols-2 grid-rows-6 gap-6  w-full h-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfielddiv),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formlabel),
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    onChange: handlechange,
                                                    value: formdata.name,
                                                    id: "name",
                                                    name: "name",
                                                    required: true,
                                                    placeholder: "Enter Name e.g. xxx xx",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfield)
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfielddiv),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formlabel),
                                                    children: "Email ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    onChange: handlechange,
                                                    value: formdata.email,
                                                    id: "email",
                                                    name: "email",
                                                    required: true,
                                                    placeholder: "Enter Email Id e.g. xxxx@gmail.com",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfield)
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfielddiv),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "mobile",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formlabel),
                                                    children: "Contact Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    onChange: handlechange,
                                                    value: formdata.mobile,
                                                    id: "mobile",
                                                    name: "mobile",
                                                    required: true,
                                                    placeholder: "Enter Mobile Number e.g. xxxxxxxxxx",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfield)
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfielddiv),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "subject",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formlabel),
                                                    children: "Subject"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    onChange: handlechange,
                                                    value: formdata.subject,
                                                    id: "subject",
                                                    name: "subject",
                                                    required: true,
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfield),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Subject Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Admission Query",
                                                            children: "Admission Query"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                            lineNumber: 193,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Program Details",
                                                            children: "Program Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                            lineNumber: 194,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Placement Information",
                                                            children: "Placement Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Others",
                                                            children: "Others"
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfielddiv, "col-span-2 row-span-3 h-full resize-none "),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "message",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formlabel),
                                                    children: "Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: formdata.message,
                                                    onChange: handlechange,
                                                    id: "message",
                                                    name: "message",
                                                    required: true,
                                                    placeholder: "State your Enquiry...",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(formfield)
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("col-span-2 text-white bg-gradient-to-b from-blue-800 to-blue-500 ", buttonanimation),
                                            children: "Submit your query"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-3 bottom-10 right-10 w-60 h-auto rounded-bl-[20px] rounded-tr-[20px] bg-white/40 backdrop-blur-md border border-white/60    shadow-lg  p-6 animate-float p-1 border-box flex flex-col justify-between  gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: " text-white drop-shadow-[3px_3px_4px_rgba(0,0,0,0.9)] text-center leading-tight",
                        children: "Want to know more About MBA program?"
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleclick,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("py-1 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.3)] rounded-l-full rounded-r-full border border-[2px] bg-black/50 hover:bg-black/45 text-primary-foreground ", buttonanimation),
                        children: "Enquire Here"
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-32 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float-delayed"
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float-slow"
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-scale-pop",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-primary-foreground/90 text-sm font-semibold tracking-wide",
                                    children: "Excellence in Education"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-4 h-4 text-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground",
                            children: [
                                "Shape Your Future with ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-secondary",
                                    children: "IEM MBA"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 238,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto",
                            children: "Advance your career with world-class MBA programs."
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenForm(true),
                                    className: "group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-bold hover:scale-110 transition-all",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center justify-center gap-2",
                                        children: [
                                            "Apply Now",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-5 h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/programs",
                                    className: "group px-8 py-4 bg-white/15 text-primary-foreground rounded-lg font-bold hover:bg-white/25 transition-all border-2 border-white/30 inline-flex items-center justify-center",
                                    children: "Explore Programs"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden lg:block absolute top-10 right-10 w-32    bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl    p-3 shadow-2xl overflow-hidden animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-7 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-400 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                lineNumber: 275,
                                columnNumber: 5
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-[11px] font-semibold text-white tracking-tight leading-snug break-words",
                                children: "News & Announcements"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                lineNumber: 277,
                                columnNumber: 5
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                        lineNumber: 274,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-64 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "news-loop absolute w-full animate-news-loop space-y-4 text-white/90 text-[10px] pr-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "🏆 IEM ranked top 10 in Eastern India."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 287,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "🌍 Leadership Summit in Jan 2025."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 288,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "💼 98.5% placement achieved."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 289,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-yellow-300",
                                    children: "✨ New specialization added."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 290,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "h-8"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 293,
                                    columnNumber: 3
                                }, this),
                                "  ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "🏆 IEM ranked top 10 in Eastern India."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 296,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "🌍 Leadership Summit in Jan 2025."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 297,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "border-b border-white/20 pb-1 hover:text-yellow-300",
                                    children: "💼 98.5% placement achieved."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 298,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "hover:text-yellow-300",
                                    children: "✨ New specialization added."
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                                    lineNumber: 299,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                            lineNumber: 284,
                            columnNumber: 4
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                        lineNumber: 283,
                        columnNumber: 3
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 268,
                columnNumber: 1
            }, this),
            openForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$frontend$2f$components$2f$application$2f$ApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setOpenForm(false)
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
                lineNumber: 308,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mba - Copy/frontend/components/home/hero-section.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/news-banner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsScrollBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
"use client";
;
;
function NewsScrollBanner() {
    const news = [
        {
            id: 1,
            text: "🎓 Congratulations to our 2024 batch - 100% placement record achieved!",
            isNew: true
        },
        {
            id: 2,
            text: "📢 New MBA Executive program starting January 2025 - Applications open now!",
            isNew: true
        },
        {
            id: 3,
            text: "🏆 IEM College ranked #1 in Management Education - NIRF 2024",
            isNew: false
        },
        {
            id: 4,
            text: "💼 Global exchange program with 15+ international universities",
            isNew: false
        },
        {
            id: 5,
            text: "🌟 Join our alumni network of 5000+ successful leaders",
            isNew: false
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                className: "w-5 h-5 text-yellow-300 animate-golden-blink drop-shadow-[0_0_6px_rgba(255,215,0,0.9)]"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-sm px-3 py-1 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-black animate-golden-pulse shadow-[0_0_8px_rgba(255,215,0,0.9)]",
                                children: "Latest Updates"
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-max animate-marquee whitespace-nowrap",
                            children: [
                                news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mx-8 flex-shrink-0",
                                        children: [
                                            item.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-secondary/20 rounded text-xs font-bold text-secondary animate-pulse",
                                                children: "NEW"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 39,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm opacity-90",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 43,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2 opacity-40",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 44,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                news.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mx-8 flex-shrink-0",
                                        children: [
                                            item.isNew && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 bg-secondary/20 rounded text-xs font-bold text-secondary animate-pulse",
                                                children: "NEW"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm opacity-90",
                                                children: item.text
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2 opacity-40",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, `dup-${item.id}`, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/news-banner.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/stats-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function StatCounter({ target, label }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                let current = 0;
                const increment = target / 50;
                const interval = setInterval(()=>{
                    current += increment;
                    if (current >= target) {
                        setCount(target);
                        clearInterval(interval);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, 30);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return ()=>observer.disconnect();
    }, [
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl lg:text-5xl font-bold text-accent mb-2",
                children: [
                    count,
                    "+"
                ]
            }, void 0, true, {
                fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-foreground/70 text-sm lg:text-base",
                children: label
            }, void 0, false, {
                fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function StatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 lg:py-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 animate-slide-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                            children: "By The Numbers"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 text-lg max-w-2xl mx-auto",
                            children: "IEM College's impact and excellence in management education"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCounter, {
                            target: 5000,
                            label: "Alumni Network"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCounter, {
                            target: 100,
                            label: "Placement Rate %"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCounter, {
                            target: 50,
                            label: "Global Partners"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCounter, {
                            target: 25,
                            label: "Years Excellence"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/stats-section.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/programs-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProgramsSection() {
    const programs = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            title: "MBA Full-Time",
            slug: "fulltime",
            description: "Immersive 2-year program designed for career accelerators",
            features: [
                "Live Project Work",
                "Industry Internships",
                "Global Exposure"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
            title: "MBA Executive",
            slug: "executive",
            description: "Part-time program for working professionals",
            features: [
                "Weekend Classes",
                "Flexible Schedule",
                "Peer Learning"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
            title: "MBA Online",
            slug: "online",
            description: "Learn from anywhere without compromising on quality",
            features: [
                "Live Classes",
                "Self-Paced",
                "Same Degree"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 lg:py-24 bg-muted/50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 animate-slide-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                            children: "Our Programs"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 text-lg max-w-2xl mx-auto",
                            children: "Choose the MBA program that fits your career aspirations"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: programs.map((program, idx)=>{
                        const Icon = program.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-accent/50 animate-slide-in-up",
                            style: {
                                animationDelay: `${idx * 100}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-14 bg-yellow-300/10 rounded-xl flex items-center justify-center    shadow-[0_0_12px_rgba(255,215,0,0.3)]   group-hover:shadow-[0_0_18px_rgba(255,215,0,0.6)]   transition-all duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-8 h-8 text-yellow-400 icon-gold-blink icon-float"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                            lineNumber: 59,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                        lineNumber: 55,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                    lineNumber: 54,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-foreground mb-2",
                                    children: program.title
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-foreground/60 text-sm mb-6",
                                    children: program.description
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 mb-6",
                                    children: program.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center gap-2 text-sm text-foreground/70",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-secondary rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 23
                                                }, this),
                                                feature
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                            lineNumber: 70,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/programs/${program.slug}`,
                                    className: "w-full inline-block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-full block px-4 py-2 border border-accent text-accent rounded-lg font-medium text-center hover:bg-accent hover:text-accent-foreground transition-colors",
                                        children: "Learn More"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                                    lineNumber: 78,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/programs-section.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/accreditation-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AccreditationSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
"use client";
;
;
function AccreditationSection() {
    const accreditations = [
        {
            name: "AACSB"
        },
        {
            name: "ACBSP"
        },
        {
            name: "AACTE"
        },
        {
            name: "NAAC"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 lg:py-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 animate-slide-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold text-foreground mb-4",
                            children: "Accreditations & Recognition"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 text-lg max-w-2xl mx-auto",
                            children: "Internationally recognized and accredited by leading educational bodies"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                    children: accreditations.map((acc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center p-6 border border-border rounded-xl    hover:border-accent/50 hover:shadow-xl transition-all duration-300    group cursor-pointer animate-slide-in-up",
                            style: {
                                animationDelay: `${idx * 120}ms`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 bg-yellow-300/10 rounded-full flex items-center justify-center    mb-4 group-hover:bg-yellow-300/20    shadow-[0_0_10px_rgba(255,215,0,0.25)]   group-hover:shadow-[0_0_18px_rgba(255,215,0,0.45)]   transition-all duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                        className: "w-10 h-10 text-yellow-400 icon-gold-blink icon-float"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-foreground text-center",
                                    children: acc.name
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/accreditation-section.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/testimonials-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
"use client";
;
;
;
function TestimonialsSection() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "MBA 2022 | Senior Manager at Tech Corp",
            text: "IEM College transformed my career trajectory. The curriculum, faculty expertise, and networking opportunities are unparalleled.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "MBA Executive 2023 | Director of Operations",
            text: "Balancing work and studies was seamless with their flexible program. The practical approach to learning made all the difference.",
            rating: 5
        },
        {
            name: "Amit Patel",
            role: "MBA 2021 | Entrepreneur",
            text: "The faculty mentorship and business incubation support helped me launch my startup. Grateful for their guidance every step of the way.",
            rating: 5
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 lg:py-24 bg-primary text-primary-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16 animate-slide-in-up",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold mb-4",
                            children: "Success Stories"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-primary-foreground/70 text-lg max-w-2xl mx-auto",
                            children: "Hear from our alumni about their transformative IEM experience"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-primary-foreground/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-primary-foreground/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-1 mb-4",
                                    children: Array(testimonials[current].rating).fill(0).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-5 h-5 fill-secondary text-secondary"
                                        }, i, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl mb-6 leading-relaxed",
                                    children: [
                                        '"',
                                        testimonials[current].text,
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold",
                                            children: testimonials[current].name
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary-foreground/70 text-sm",
                                            children: testimonials[current].role
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrent((prev)=>(prev - 1 + testimonials.length) % testimonials.length),
                                    className: "p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: testimonials.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrent(idx),
                                            className: `w-2 h-2 rounded-full transition-all ${idx === current ? "bg-secondary w-8" : "bg-primary-foreground/30"}`
                                        }, idx, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrent((prev)=>(prev + 1) % testimonials.length),
                                    className: "p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/testimonials-section.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/PlacementSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlacementSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadialBarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/chart/RadialBarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/polar/RadialBar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ===================== DATA ===================== */ /* Last 5 Placement Years */ const placementDataByYear = {
    "2024": {
        stats: [
            {
                name: "Placement %",
                value: 90,
                unit: "%",
                fill: "#2563eb"
            },
            {
                name: "Highest Package",
                value: 38,
                unit: " LPA",
                fill: "#facc15"
            },
            {
                name: "Average Package",
                value: 10,
                unit: " LPA",
                fill: "#059669"
            }
        ],
        sectors: [
            {
                name: "IT & Analytics",
                value: 40
            },
            {
                name: "Consulting",
                value: 28
            },
            {
                name: "Finance",
                value: 17
            },
            {
                name: "Operations",
                value: 15
            }
        ]
    },
    "2023": {
        stats: [
            {
                name: "Placement %",
                value: 87,
                unit: "%",
                fill: "#1e3a8a"
            },
            {
                name: "Highest Package",
                value: 36,
                unit: " LPA",
                fill: "#fb923c"
            },
            {
                name: "Average Package",
                value: 9,
                unit: " LPA",
                fill: "#0891b2"
            }
        ],
        sectors: [
            {
                name: "IT & Analytics",
                value: 35
            },
            {
                name: "Consulting",
                value: 25
            },
            {
                name: "Finance",
                value: 20
            },
            {
                name: "Operations",
                value: 20
            }
        ]
    },
    "2022": {
        stats: [
            {
                name: "Placement %",
                value: 85,
                unit: "%",
                fill: "#2563eb"
            },
            {
                name: "Highest Package",
                value: 32,
                unit: " LPA",
                fill: "#f59e0b"
            },
            {
                name: "Average Package",
                value: 8,
                unit: " LPA",
                fill: "#10b981"
            }
        ],
        sectors: [
            {
                name: "IT & Analytics",
                value: 30
            },
            {
                name: "Consulting",
                value: 20
            },
            {
                name: "Finance",
                value: 25
            },
            {
                name: "Operations",
                value: 25
            }
        ]
    },
    "2021": {
        stats: [
            {
                name: "Placement %",
                value: 80,
                unit: "%",
                fill: "#1e40af"
            },
            {
                name: "Highest Package",
                value: 30,
                unit: " LPA",
                fill: "#f97316"
            },
            {
                name: "Average Package",
                value: 7,
                unit: " LPA",
                fill: "#059669"
            }
        ],
        sectors: [
            {
                name: "IT & Analytics",
                value: 25
            },
            {
                name: "Consulting",
                value: 20
            },
            {
                name: "Finance",
                value: 30
            },
            {
                name: "Operations",
                value: 25
            }
        ]
    },
    "2020": {
        stats: [
            {
                name: "Placement %",
                value: 75,
                unit: "%",
                fill: "#1e3a8a"
            },
            {
                name: "Highest Package",
                value: 28,
                unit: " LPA",
                fill: "#f59e0b"
            },
            {
                name: "Average Package",
                value: 6,
                unit: " LPA",
                fill: "#059669"
            }
        ],
        sectors: [
            {
                name: "IT & Analytics",
                value: 20
            },
            {
                name: "Consulting",
                value: 15
            },
            {
                name: "Finance",
                value: 35
            },
            {
                name: "Operations",
                value: 30
            }
        ]
    }
};
const recruiters = [
    {
        name: "Deloitte",
        logo: "/recruiters/deloitte.png"
    },
    {
        name: "Accenture",
        logo: "/recruiters/accenture.png"
    },
    {
        name: "TCS",
        logo: "/recruiters/tcs.png"
    },
    {
        name: "Infosys",
        logo: "/recruiters/infosys.png"
    },
    {
        name: "Wipro",
        logo: "/recruiters/wipro.png"
    },
    {
        name: "EY",
        logo: "/recruiters/ey.png"
    }
];
function PlacementSection() {
    const years = Object.keys(placementDataByYear).sort((a, b)=>Number(b) - Number(a));
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(years[0]);
    // Use selected year if data exists; otherwise fall back to the most
    // recent year that has placement data available. This preserves the
    // five-year dropdown while ensuring the chart shows meaningful data.
    const rawData = placementDataByYear[selectedYear] ?? {
        stats: [],
        sectors: []
    };
    let stats = rawData.stats;
    let sectors = rawData.sectors;
    let displayYear = selectedYear;
    if ((stats?.length ?? 0) === 0) {
        const latestAvailable = years.find((y)=>(placementDataByYear[y]?.stats?.length ?? 0) > 0);
        if (latestAvailable) {
            const fallback = placementDataByYear[latestAvailable];
            stats = fallback.stats;
            sectors = fallback.sectors;
            displayYear = latestAvailable;
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-12 pb-24 bg-background",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold mb-4",
                            children: "Placements"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 max-w-3xl mx-auto",
                            children: "Five-year placement performance, salary trends, and sector-wise hiring distribution."
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedYear,
                                onChange: (e)=>setSelectedYear(e.target.value),
                                className: "w-60 border rounded-lg px-4 py-2 text-sm bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary",
                                children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: year,
                                        children: [
                                            "Placement Year ",
                                            year
                                        ]
                                    }, year, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this),
                stats.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-6",
                                    children: "Placement Snapshot"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[320px] w-full max-w-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RadialBarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadialBarChart"], {
                                            data: stats,
                                            innerRadius: "30%",
                                            outerRadius: "90%",
                                            startAngle: 90,
                                            endAngle: -270,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$RadialBar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadialBar"], {
                                                    dataKey: "value",
                                                    cornerRadius: 12,
                                                    background: true
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                    formatter: (value, _n, p)=>`${value}${p.payload.unit}`
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                            lineNumber: 185,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 space-y-2 text-sm",
                                    children: stats.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-3 h-3 rounded-full",
                                                    style: {
                                                        backgroundColor: item.fill
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        item.name,
                                                        ":",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold",
                                                            children: [
                                                                item.value,
                                                                item.unit
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                            lineNumber: 212,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.name, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                            lineNumber: 205,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-6",
                                    children: "Sector-wise Hiring"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: sectors.map((sector)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-sm mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: sector.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: [
                                                                sector.value,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-2 bg-muted rounded-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-primary rounded-full",
                                                        style: {
                                                            width: `${sector.value}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, sector.name, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 223,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this) : /* ================= NO DATA STATE ================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 text-foreground/60",
                    children: [
                        "Placement data for ",
                        selectedYear,
                        " will be updated soon."
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-24",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-center text-xl font-semibold mb-20",
                            children: "Our Hiring Partners"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-20 animate-marquee items-center",
                                children: [
                                    ...recruiters,
                                    ...recruiters
                                ].map((company, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-16 min-w-[120px] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: company.logo,
                                            alt: company.name,
                                            width: 120,
                                            height: 44,
                                            className: "h-11 w-auto object-contain transition duration-500"
                                        }, void 0, false, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                        lineNumber: 263,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/PlacementSection.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
}),
"[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentAcademicExcellenceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/cartesian/Bar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/component/ResponsiveContainer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mba - Copy/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ===================== DATA ===================== */ const academicExcellenceByYear = {
    "2024": [
        {
            specialization: "Finance & Strategy",
            highestCGPA: 9.6,
            hiringCompanies: [
                "Goldman Sachs",
                "JP Morgan",
                "Deloitte"
            ]
        },
        {
            specialization: "Technology & Innovation",
            highestCGPA: 9.8,
            hiringCompanies: [
                "Microsoft",
                "Amazon",
                "Accenture"
            ]
        },
        {
            specialization: "Marketing & Analytics",
            highestCGPA: 9.2,
            hiringCompanies: [
                "Unilever",
                "P&G",
                "Kantar"
            ]
        },
        {
            specialization: "Operations & Supply Chain",
            highestCGPA: 9.0,
            hiringCompanies: [
                "Amazon",
                "Flipkart",
                "Tata Motors"
            ]
        },
        {
            specialization: "Business Analytics",
            highestCGPA: 9.5,
            hiringCompanies: [
                "BCG Gamma",
                "Mu Sigma",
                "Deloitte"
            ]
        }
    ],
    "2023": [
        {
            specialization: "Finance & Strategy",
            highestCGPA: 9.4,
            hiringCompanies: [
                "EY",
                "KPMG",
                "Deloitte"
            ]
        },
        {
            specialization: "Technology & Innovation",
            highestCGPA: 9.7,
            hiringCompanies: [
                "Amazon",
                "Microsoft",
                "Infosys"
            ]
        },
        {
            specialization: "Marketing & Analytics",
            highestCGPA: 9.1,
            hiringCompanies: [
                "Nielsen",
                "Kantar",
                "Unilever"
            ]
        },
        {
            specialization: "Operations & Supply Chain",
            highestCGPA: 8.9,
            hiringCompanies: [
                "Flipkart",
                "Reliance",
                "Tata"
            ]
        },
        {
            specialization: "Business Analytics",
            highestCGPA: 9.3,
            hiringCompanies: [
                "ZS",
                "Mu Sigma",
                "Deloitte"
            ]
        }
    ],
    "2022": [],
    "2021": [],
    "2020": []
};
/* ===================== CUSTOM X-AXIS TICK ===================== */ const CustomXAxisTick = ({ x, y, payload })=>{
    const [line1, line2] = payload.value.split(" & ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        transform: `translate(${x},${y + 10})`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
            x: 0,
            y: 0,
            textAnchor: "middle",
            fill: "#475569",
            fontSize: 12,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                    x: "0",
                    dy: "0",
                    children: line1
                }, void 0, false, {
                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                line2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                    x: "0",
                    dy: "14",
                    children: [
                        "& ",
                        line2
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                    lineNumber: 102,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function StudentAcademicExcellenceSection() {
    const years = Object.keys(academicExcellenceByYear).sort((a, b)=>Number(b) - Number(a));
    const [selectedYear, setSelectedYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(years[0]);
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const data = academicExcellenceByYear[selectedYear];
    const averageCGPA = data.length > 0 ? (data.reduce((sum, d)=>sum + d.highestCGPA, 0) / data.length).toFixed(2) : "0.00";
    const visibleSpecializations = showAll ? data : data.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pt-24 pb-28 bg-muted/30",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl lg:text-4xl font-bold mb-4",
                            children: "Student Academic Excellence"
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/60 max-w-3xl mx-auto",
                            children: "Comparative analysis of academic performance across specializations, highlighting peak CGPA achievers and hiring outcomes."
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedYear,
                                onChange: (e)=>{
                                    setSelectedYear(e.target.value);
                                    setShowAll(false);
                                },
                                className: "w-60 border rounded-lg px-4 py-2 text-sm bg-background shadow-sm focus:outline-none focus:ring-2 focus:ring-primary",
                                children: years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: year,
                                        children: [
                                            "Academic Year ",
                                            year
                                        ]
                                    }, year, true, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-16 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-6 text-center",
                                    children: "Highest CGPA by Specialization"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[400px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                        width: "100%",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BarChart"], {
                                            data: data,
                                            margin: {
                                                bottom: 50
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                    strokeDasharray: "3 3"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                                                    dataKey: "specialization",
                                                    tick: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomXAxisTick, {}, void 0, false, {
                                                        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 29
                                                    }, void 0),
                                                    interval: 0
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 176,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                                                    domain: [
                                                        0,
                                                        10
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {}, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                                                    y: Number(averageCGPA),
                                                    isFront: true,
                                                    stroke: "#facc15",
                                                    strokeDasharray: "6 4",
                                                    strokeWidth: 3,
                                                    label: {
                                                        value: `Average CGPA: ${averageCGPA}`,
                                                        position: "top",
                                                        fill: "#ca8a04",
                                                        fontSize: 12,
                                                        fontWeight: 600
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bar"], {
                                                    dataKey: "highestCGPA",
                                                    fill: "#2563eb",
                                                    radius: [
                                                        6,
                                                        6,
                                                        0,
                                                        0
                                                    ],
                                                    barSize: 48
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-6",
                                    children: "Hiring Based on Highest CGPA"
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                    lineNumber: 213,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: visibleSpecializations.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-5 rounded-xl bg-background shadow-sm border",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-medium",
                                                            children: item.specialization
                                                        }, void 0, false, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                            lineNumber: 224,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold text-primary",
                                                            children: [
                                                                "CGPA: ",
                                                                item.highestCGPA
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-foreground/70",
                                                    children: "Companies hiring top CGPA performers:"
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-1 text-foreground/90",
                                                    children: item.hiringCompanies.join(", ")
                                                }, void 0, false, {
                                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.specialization, true, {
                                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                            lineNumber: 219,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                    lineNumber: 217,
                                    columnNumber: 15
                                }, this),
                                data.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowAll(!showAll),
                                        className: "text-primary font-medium hover:underline",
                                        children: showAll ? "Show Less" : "Read More"
                                    }, void 0, false, {
                                        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                        lineNumber: 245,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                    lineNumber: 164,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$mba__$2d$__Copy$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 text-foreground/60",
                    children: [
                        "Academic performance data for ",
                        selectedYear,
                        " will be updated soon."
                    ]
                }, void 0, true, {
                    fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
                    lineNumber: 257,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/mba - Copy/frontend/components/home/StudentexcellenceSection.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ac511ac8._.js.map