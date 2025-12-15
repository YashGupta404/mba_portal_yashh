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
    name: "",
    email: "",
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

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "country" ? { state: "" } : {}),
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!form.bachelors || !form.agree) return
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* HEADER */}
        <div className="px-8 py-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              MBA Application Form
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Please fill in your details carefully
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">
          
          {/* BASIC DETAILS */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                name="name"
                placeholder="Full Name *"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                className="input"
                onChange={handleChange}
                required
              />
              <input
                name="mobile"
                placeholder="Mobile Number *"
                className="input"
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* ADDRESS */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Address Details
            </h3>

            <div className="space-y-3">
              <select name="country" className="input" onChange={handleChange} required>
                <option value="">Select Country *</option>
                {Object.keys(COUNTRIES).map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select
                name="state"
                className="input"
                onChange={handleChange}
                disabled={!form.country}
                required
              >
                <option value="">
                  {form.country ? "Select State *" : "Select country first"}
                </option>
                {form.country &&
                  COUNTRIES[form.country as keyof typeof COUNTRIES].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
              </select>

              <input
                name="pincode"
                placeholder="PIN Code *"
                className="input"
                onChange={handleChange}
                required
              />

              <textarea
                name="fullAddress"
                placeholder="Full Address *"
                className="input min-h-[90px]"
                onChange={handleChange}
                required
              />
            </div>
          </section>

          {/* EDUCATION */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Educational Qualification
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* BACHELORS */}
              <div className="space-y-2">
                <label className="label">Bachelor’s Qualification *</label>
                <select name="bachelors" className="input" onChange={handleChange} required>
                  <option value="">Select Bachelor’s Degree</option>
                  {BACHELORS_COURSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                {form.bachelors === "Other" && (
                  <input
                    name="bachelorsOther"
                    placeholder="Specify Bachelor’s Qualification"
                    className="input"
                    onChange={handleChange}
                  />
                )}
              </div>

              {/* MASTERS */}
              <div className="space-y-2">
                <label className="label">Master’s Qualification</label>
                <select name="masters" className="input" onChange={handleChange}>
                  <option value="">Select Master’s Degree (Optional)</option>
                  {MASTERS_COURSES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                {form.masters === "Other" && (
                  <input
                    name="mastersOther"
                    placeholder="Specify Master’s Qualification"
                    className="input"
                    onChange={handleChange}
                  />
                )}
              </div>
            </div>

            {/* OTHER */}
            <div className="space-y-2">
              <label className="label">Other Qualification</label>
              <select name="otherType" className="input" onChange={handleChange}>
                <option value="">Select (Optional)</option>
                {OTHER_QUALIFICATIONS.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>

              {form.otherType && (
                <input
                  name="otherDetail"
                  placeholder="Specify Other Qualification"
                  className="input"
                  onChange={handleChange}
                />
              )}
            </div>
          </section>

          {/* MBA PROGRAM */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              MBA Programme
            </h3>

            <select
              name="program"
              className="input"
              onChange={handleChange}
              required
            >
              <option value="">Select MBA Programme *</option>
              <option value="MBA Full-Time">MBA Full-Time</option>
              <option value="MBA Executive">MBA Executive</option>
              <option value="MBA Online">MBA Online</option>
            </select>
          </section>

          {/* AGREEMENT */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agree"
              onChange={handleChange}
              required
              className="mt-1"
            />
            <p className="text-sm text-gray-600">
              I agree to receive information regarding my application *
            </p>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* INPUT STYLES */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
        }
        .label {
          font-size: 0.85rem;
          font-weight: 500;
          color: #374151;
        }
      `}</style>
    </div>
  )
}
