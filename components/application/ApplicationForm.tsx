"use client"

import { useState } from "react"

/* ---------------- DATA ---------------- */

const COUNTRIES = {
  India: [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Delhi",
    "Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
    "Madhya Pradesh","Maharashtra","Odisha","Punjab","Rajasthan","Tamil Nadu",
    "Telangana","Uttar Pradesh","Uttarakhand","West Bengal",
  ],
  USA: ["California","Texas","New York","Florida","Illinois"],
  Canada: ["Ontario","Quebec","British Columbia","Alberta"],
}

const COUNTRY_CODES = [
  { code: "+91", country: "India" },
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
]

const BACHELORS_COURSES = [
  "B.A","B.Sc","B.Com","B.Tech / B.E","BBA","BCA","B.Arch","B.Pharm","LLB","MBBS","Other",
]

const MASTERS_COURSES = [
  "M.A","M.Sc","M.Com","M.Tech / M.E","MBA","MCA","M.Arch","M.Pharm","LLM","MD / MS","Other",
]

const OTHER_QUALIFICATIONS = ["Diploma","CA / CS / CMA","PhD","Other"]

/* ---------------- COMPONENT ---------------- */

export default function ApplicationForm({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    countryCode: "+91",  // ADD THIS LINE
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
    agree: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validateField = (name: string, value: string) => {
    let error = ""

    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length > 0 && value.length < 2) {
          error = "Must be at least 2 characters"
        } else if (value.length > 50) {
          error = "Must not exceed 50 characters"
        } else if (value && !/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only letters and spaces allowed"
        }
        break

      case "middleName":
        if (value.length > 50) {
          error = "Must not exceed 50 characters"
        } else if (value && !/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only letters and spaces allowed"
        }
        break

      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address"
        }
        break

      case "mobile":
        if (value.length > 0 && value.length < 10) {
          error = "Mobile number must be exactly 10 digits"
        } else if (value.length === 10 && !/^[0-9]{10}$/.test(value)) {
          error = "Only numeric digits allowed"
        }
        break

      case "pincode":
        if (value.length > 0 && value.length < 6) {
          error = "PIN code must be exactly 6 digits"
        } else if (value.length === 6 && !/^[0-9]{6}$/.test(value)) {
          error = "Only numeric digits allowed"
        }
        break

      case "fullAddress":
        if (value.length > 0 && value.length < 10) {
          error = "Address must be at least 10 characters"
        } else if (value.length > 500) {
          error = "Address must not exceed 500 characters"
        }
        break

      case "bachelorsOther":
      case "mastersOther":
        if (value.length > 0 && value.length < 2) {
          error = "Must be at least 2 characters"
        } else if (value.length > 100) {
          error = "Must not exceed 100 characters"
        }
        break
    }

    return error
  }

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    
    // Phone number validation - only allow digits and max 10
    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10)
      setForm(prev => ({ ...prev, [name]: numericValue }))
      if (touched[name]) {
        setErrors(prev => ({ ...prev, [name]: validateField(name, numericValue) }))
      }
      return
    }
    
    // Pincode validation - only allow digits and max 6
    if (name === "pincode") {
      const numericValue = value.replace(/\D/g, "").slice(0, 6)
      setForm(prev => ({ ...prev, [name]: numericValue }))
      if (touched[name]) {
        setErrors(prev => ({ ...prev, [name]: validateField(name, numericValue) }))
      }
      return
    }
    
    // Name fields - only allow letters and spaces
    if (name === "firstName" || name === "middleName" || name === "lastName") {
      const textValue = value.replace(/[^a-zA-Z\s]/g, "")
      setForm(prev => ({ ...prev, [name]: textValue }))
      if (touched[name]) {
        setErrors(prev => ({ ...prev, [name]: validateField(name, textValue) }))
      }
      return
    }
    
    const newValue = type === "checkbox" ? checked : value
    setForm(prev => ({
      ...prev,
      [name]: newValue,
      ...(name === "country" ? { state: "" } : {}),
    }))
    
    if (touched[name] && typeof newValue === "string") {
      setErrors(prev => ({ ...prev, [name]: validateField(name, newValue) }))
    }
  }

  const handleBlur = (e: any) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validateField(name, value) }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {}
    Object.keys(form).forEach(key => {
      allTouched[key] = true
    })
    setTouched(allTouched)
    
    // Validate all fields
    const newErrors: Record<string, string> = {}
    Object.entries(form).forEach(([key, value]) => {
      if (typeof value === "string") {
        const error = validateField(key, value)
        if (error) newErrors[key] = error
      }
    })
    
    // Check required fields
    if (!form.firstName) newErrors.firstName = "First name is required"
    if (!form.lastName) newErrors.lastName = "Last name is required"
    if (!form.email) newErrors.email = "Email is required"
    if (!form.mobile) newErrors.mobile = "Mobile number is required"
    if (form.mobile.length !== 10) newErrors.mobile = "Mobile number must be exactly 10 digits"
    if (!form.country) newErrors.country = "Country is required"
    if (!form.state) newErrors.state = "State is required"
    if (!form.pincode) newErrors.pincode = "PIN code is required"
    if (form.pincode.length !== 6) newErrors.pincode = "PIN code must be exactly 6 digits"
    if (!form.fullAddress) newErrors.fullAddress = "Full address is required"
    if (!form.bachelors) newErrors.bachelors = "Bachelor's qualification is required"
    if (form.bachelors === "Other" && !form.bachelorsOther) {
      newErrors.bachelorsOther = "Please specify your Bachelor's degree"
    }
    if (form.masters === "Other" && !form.mastersOther) {
      newErrors.mastersOther = "Please specify your Master's degree"
    }
    if (!form.program) newErrors.program = "Programme selection is required"
    if (!form.agree) newErrors.agree = "You must agree to continue"
    
    setErrors(newErrors)
    
    if (Object.keys(newErrors).length > 0) {
      return
    }

    setLoading(true)

    const payload = {
      name: {
        firstName: form.firstName,
        middleName: form.middleName || null,
        lastName: form.lastName,
      },
      email: form.email,
      mobile: form.mobile,
      address: {
        country: form.country,
        state: form.state,
        pincode: form.pincode,
        fullAddress: form.fullAddress,
      },
      education: {
        bachelors: form.bachelors === "Other" ? form.bachelorsOther : form.bachelors,
        masters: form.masters === "Other" ? form.mastersOther : form.masters || null,
        other: form.otherType
          ? { type: form.otherType, detail: form.otherDetail }
          : null,
      },
      mbaProgram: form.program,
    }

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setTimeout(onClose, 2000)
      } else {
        alert("Submission failed")
      }
    } catch {
      alert("Backend not reachable")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
        <div className="bg-white px-10 py-8 rounded-2xl shadow-2xl text-center transform animate-scaleIn">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Application Submitted Successfully
          </h2>
          <p className="text-gray-600">
            Our admissions team will contact you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-gray-100">

        {/* HEADER */}
        <div className="px-10 py-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">MBA Application Form</h2>
              <p className="text-blue-100 mt-2 text-sm font-medium">Please fill in your details carefully to proceed</p>
            </div>
            <button 
              onClick={onClose} 
              className="text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 text-2xl font-light"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="px-10 py-10 space-y-10">

          {/* PERSONAL */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-base font-bold shadow-md">1</span>
              <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="relative">
                <input 
                  name="firstName" 
                  placeholder="First Name *" 
                  className={`input peer ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.firstName}
                  required 
                />
                <label className="floating-label">First Name</label>
                {errors.firstName && touched.firstName && (
                  <p className="error-message">{errors.firstName}</p>
                )}
              </div>
              <div className="relative">
                <input 
                  name="middleName" 
                  placeholder="Middle Name (Optional)" 
                  className={`input peer ${errors.middleName && touched.middleName ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.middleName}
                />
                <label className="floating-label">Middle Name</label>
                {errors.middleName && touched.middleName && (
                  <p className="error-message">{errors.middleName}</p>
                )}
              </div>
              <div className="relative">
                <input 
                  name="lastName" 
                  placeholder="Last Name *" 
                  className={`input peer ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.lastName}
                  required 
                />
                <label className="floating-label">Last Name</label>
                {errors.lastName && touched.lastName && (
                  <p className="error-message">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <div className="relative">
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address *" 
                  className={`input peer ${errors.email && touched.email ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.email}
                  required 
                />
                <label className="floating-label">Email Address</label>
                {errors.email && touched.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="relative flex gap-2">
  <div className="w-32">
    <select 
      name="countryCode" 
      className="input h-full"
      onChange={handleChange}
      value={form.countryCode}
    >
      {COUNTRY_CODES.map(c => (
        <option key={c.code} value={c.code}>
          {c.code} {c.country}
        </option>
      ))}
    </select>
  </div>
  <div className="relative flex-1">
    <input 
      name="mobile" 
      type="tel"
      placeholder="Mobile Number (10 digits) *" 
      className={`input peer ${errors.mobile && touched.mobile ? 'border-red-500' : ''}`}
      onChange={handleChange}
      onBlur={handleBlur}
      value={form.mobile}
      required 
    />
    <label className="floating-label">Mobile Number</label>
    {errors.mobile && touched.mobile && (
      <p className="error-message">{errors.mobile}</p>
    )}
  </div>
</div>
            </div>
          </section>

          {/* ADDRESS */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-base font-bold shadow-md">2</span>
              <h3 className="text-xl font-bold text-gray-900">Address Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <select 
                  name="country" 
                  className={`input ${errors.country && touched.country ? 'border-red-500' : ''}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.country} 
                  required
                >
                  <option value="">Select Country *</option>
                  {Object.keys(COUNTRIES).map(c => <option key={c}>{c}</option>)}
                </select>
                {errors.country && touched.country && (
                  <p className="error-message">{errors.country}</p>
                )}
              </div>

              <div className="relative">
                <select 
                  name="state" 
                  className={`input ${errors.state && touched.state ? 'border-red-500' : ''}`}
                  disabled={!form.country} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={form.state} 
                  required
                >
                  <option value="">Select State *</option>
                  {form.country &&
                    COUNTRIES[form.country as keyof typeof COUNTRIES].map(s =>
                      <option key={s}>{s}</option>
                    )}
                </select>
                {errors.state && touched.state && (
                  <p className="error-message">{errors.state}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <input 
                name="pincode" 
                placeholder="PIN Code (6 digits) *" 
                className={`input ${errors.pincode && touched.pincode ? 'border-red-500' : ''}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.pincode}
                required 
              />
              {errors.pincode && touched.pincode && (
                <p className="error-message">{errors.pincode}</p>
              )}
            </div>

            <div className="relative">
              <textarea 
                name="fullAddress" 
                placeholder="Full Address *" 
                className={`input min-h-[110px] resize-none ${errors.fullAddress && touched.fullAddress ? 'border-red-500' : ''}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.fullAddress}
                required 
              />
              {errors.fullAddress && touched.fullAddress && (
                <p className="error-message">{errors.fullAddress}</p>
              )}
            </div>
          </section>

          {/* EDUCATION */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-base font-bold shadow-md">3</span>
              <h3 className="text-xl font-bold text-gray-900">Educational Qualification</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="label-modern">Bachelor's Qualification *</label>
                <div className="relative">
                  <select 
                    name="bachelors" 
                    className={`input ${errors.bachelors && touched.bachelors ? 'border-red-500' : ''}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.bachelors} 
                    required
                  >
                    <option value="">Select Bachelor's Degree</option>
                    {BACHELORS_COURSES.map(c => <option key={c}>{c}</option>)}
                  </select>
                  {errors.bachelors && touched.bachelors && (
                    <p className="error-message">{errors.bachelors}</p>
                  )}
                </div>
                {form.bachelors === "Other" && (
                  <div className="relative">
                    <input 
                      name="bachelorsOther" 
                      className={`input mt-3 ${errors.bachelorsOther && touched.bachelorsOther ? 'border-red-500' : ''}`}
                      placeholder="Please specify your Bachelor's degree" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.bachelorsOther}
                      required
                    />
                    {errors.bachelorsOther && touched.bachelorsOther && (
                      <p className="error-message">{errors.bachelorsOther}</p>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="label-modern">Master's Qualification</label>
                <div className="relative">
                  <select 
                    name="masters" 
                    className={`input ${errors.masters && touched.masters ? 'border-red-500' : ''}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.masters}
                  >
                    <option value="">Select Master's Degree (Optional)</option>
                    {MASTERS_COURSES.map(c => <option key={c}>{c}</option>)}
                  </select>
                  {errors.masters && touched.masters && (
                    <p className="error-message">{errors.masters}</p>
                  )}
                </div>
                {form.masters === "Other" && (
                  <div className="relative">
                    <input 
                      name="mastersOther" 
                      className={`input mt-3 ${errors.mastersOther && touched.mastersOther ? 'border-red-500' : ''}`}
                      placeholder="Please specify your Master's degree" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={form.mastersOther}
                    />
                    {errors.mastersOther && touched.mastersOther && (
                      <p className="error-message">{errors.mastersOther}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* PROGRAM */}
          <section className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center text-base font-bold shadow-md">4</span>
              <h3 className="text-xl font-bold text-gray-900">Programme Selection</h3>
            </div>
            <div className="relative">
              <select 
                name="program" 
                className={`input ${errors.program && touched.program ? 'border-red-500' : ''}`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={form.program} 
                required
              >
                <option value="">Select MBA Programme *</option>
                <option>MBA Full-Time</option>
                <option>MBA Executive</option>
                <option>MBA Online</option>
              </select>
              {errors.program && touched.program && (
                <p className="error-message">{errors.program}</p>
              )}
            </div>
          </section>

          {/* AGREEMENT */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-lg">
            <label className="flex gap-3 text-sm text-gray-700 cursor-pointer">
              <input 
                type="checkbox" 
                name="agree" 
                onChange={handleChange} 
                onBlur={handleBlur}
                checked={form.agree}
                required 
                className="mt-0.5 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" 
              />
              <span className="font-medium">I agree to receive information regarding my application and understand that my data will be processed according to the privacy policy *</span>
            </label>
            {errors.agree && touched.agree && (
              <p className="error-message ml-8">{errors.agree}</p>
            )}
          </div>

          {/* SUBMIT */}
          <button 
            onClick={handleSubmit}
            disabled={loading} 
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting Application...
              </span>
            ) : "Submit Application"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.95rem;
          transition: all 0.2s;
          background: white;
        }
        .input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .input:disabled {
          background: #f9fafb;
          cursor: not-allowed;
        }
        .input.border-red-500 {
          border-color: #ef4444;
        }
        .input.border-red-500:focus {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
        .label-modern {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .floating-label {
          position: absolute;
          left: 1rem;
          top: -0.625rem;
          background: white;
          padding: 0 0.375rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b7280;
          pointer-events: none;
        }
        .error-message {
          color: #ef4444;
          font-size: 0.75rem;
          margin-top: 0.375rem;
          font-weight: 500;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}