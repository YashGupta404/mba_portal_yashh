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

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "country" ? { state: "" } : {}),
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!form.agree || !form.bachelors) return

    setLoading(true)

    const payload = {
      name: form.name,
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
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
        <div className="bg-white px-8 py-6 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-bold text-green-600">
            Application Submitted Successfully
          </h2>
          <p className="text-gray-600 mt-2">
            Our admissions team will contact you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">

        {/* HEADER */}
        <div className="px-8 py-6 border-b flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">MBA Application Form</h2>
            <p className="text-sm text-gray-500 mt-1">Please fill in your details carefully</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-xl">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">

          {/* PERSONAL */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input name="name" placeholder="Full Name *" className="input" onChange={handleChange} required />
              <input name="email" type="email" placeholder="Email Address *" className="input" onChange={handleChange} required />
              <input name="mobile" placeholder="Mobile Number *" className="input" onChange={handleChange} required />
            </div>
          </section>

          {/* ADDRESS */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Address Details</h3>
            <select name="country" className="input" onChange={handleChange} required>
              <option value="">Select Country *</option>
              {Object.keys(COUNTRIES).map(c => <option key={c}>{c}</option>)}
            </select>

            <select name="state" className="input" disabled={!form.country} onChange={handleChange} required>
              <option value="">Select State *</option>
              {form.country &&
                COUNTRIES[form.country as keyof typeof COUNTRIES].map(s =>
                  <option key={s}>{s}</option>
                )}
            </select>

            <input name="pincode" placeholder="PIN Code *" className="input" onChange={handleChange} required />
            <textarea name="fullAddress" placeholder="Full Address *" className="input min-h-[90px]" onChange={handleChange} required />
          </section>

          {/* EDUCATION */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Educational Qualification</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">Bachelor’s Qualification *</label>
                <select name="bachelors" className="input" onChange={handleChange} required>
                  <option value="">Select</option>
                  {BACHELORS_COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
                {form.bachelors === "Other" && (
                  <input name="bachelorsOther" className="input mt-2" placeholder="Specify Bachelor's" onChange={handleChange} />
                )}
              </div>

              <div>
                <label className="label">Master’s Qualification</label>
                <select name="masters" className="input" onChange={handleChange}>
                  <option value="">Optional</option>
                  {MASTERS_COURSES.map(c => <option key={c}>{c}</option>)}
                </select>
                {form.masters === "Other" && (
                  <input name="mastersOther" className="input mt-2" placeholder="Specify Master's" onChange={handleChange} />
                )}
              </div>
            </div>
          </section>

          {/* PROGRAM */}
          <select name="program" className="input" onChange={handleChange} required>
            <option value="">Select MBA Programme *</option>
            <option>MBA Full-Time</option>
            <option>MBA Executive</option>
            <option>MBA Online</option>
          </select>

          {/* AGREEMENT */}
          <label className="flex gap-2 text-sm text-gray-600">
            <input type="checkbox" name="agree" onChange={handleChange} required />
            I agree to receive information regarding my application *
          </label>

          {/* SUBMIT */}
          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg">
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.6rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
        }
        .label {
          font-size: 0.85rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  )
}
