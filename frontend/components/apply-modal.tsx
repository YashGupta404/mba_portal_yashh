"use client"

import type React from "react"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
    workExperience: "",
    collegeGPA: "",
    testScore: "",
    testType: "",
    reasonForMBA: "",
    goals: "",
  })

  const programs = [
    { value: "fulltime", label: "MBA Full-Time (2 Years)" },
    { value: "executive", label: "MBA Executive (Part-Time)" },
    { value: "online", label: "MBA Online" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setStep(1)
      setSubmitted(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        program: "",
        qualification: "",
        workExperience: "",
        collegeGPA: "",
        testScore: "",
        testType: "",
        reasonForMBA: "",
        goals: "",
      })
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-6 flex items-center justify-between border-b border-primary-foreground/10">
            <div>
              <h2 className="text-2xl font-bold">Application Form</h2>
              <p className="text-sm opacity-80 mt-1">Step {step} of 3</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {submitted && (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-slide-in-up">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
              <p className="text-foreground/60">
                Thank you for applying to IEM College. We'll review your application and get back to you soon.
              </p>
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Step 1: Basic Information */}
              {step === 1 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Select Program *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Choose a program</option>
                      {programs.map((prog) => (
                        <option key={prog.value} value={prog.value}>
                          {prog.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Academic Information */}
              {step === 2 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Highest Qualification *</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select qualification</option>
                      <option value="btech">B.Tech / B.E</option>
                      <option value="bcom">B.Com</option>
                      <option value="bsc">B.Sc</option>
                      <option value="ba">B.A</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      College/University GPA (on 10 scale) *
                    </label>
                    <input
                      type="number"
                      name="collegeGPA"
                      value={formData.collegeGPA}
                      onChange={handleChange}
                      required
                      step="0.01"
                      min="0"
                      max="10"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="e.g., 7.5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Entrance Test Type *</label>
                    <select
                      name="testType"
                      value={formData.testType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                    >
                      <option value="">Select test</option>
                      <option value="cat">CAT</option>
                      <option value="gmat">GMAT</option>
                      <option value="nmat">NMAT</option>
                      <option value="xat">XAT</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Test Score *</label>
                    <input
                      type="number"
                      name="testScore"
                      value={formData.testScore}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="e.g., 750"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Work Experience (Years) *</label>
                    <input
                      type="number"
                      name="workExperience"
                      value={formData.workExperience}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                      placeholder="e.g., 3"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {step === 3 && (
                <div className="space-y-4 animate-slide-in-up">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Why do you want to pursue MBA? *
                    </label>
                    <textarea
                      name="reasonForMBA"
                      value={formData.reasonForMBA}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Share your motivation..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Career Goals *</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="What do you want to achieve?"
                    />
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground/70">
                      By submitting this form, you agree to receive information about IEM College's programs and
                      services.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={() => setStep(Math.max(1, step - 1))}
                  disabled={step === 1}
                  className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-medium transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 font-medium transition-colors"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
