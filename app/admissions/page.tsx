"use client"

import { CheckCircle, DollarSign, Users } from "lucide-react"
import { useState } from "react"

export default function AdmissionsPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const requirements = [
    { icon: CheckCircle, text: "Bachelor's degree in any discipline" },
    { icon: CheckCircle, text: "Minimum 50% aggregate score" },
    { icon: CheckCircle, text: "Valid CAT/GMAT/NMAT score" },
    { icon: CheckCircle, text: "2+ years of work experience (recommended)" },
  ]

  const timeline = [
    { month: "January", event: "Applications Open", action: "" },
    { month: "March", event: "Entrance Exam (CAT/GMAT)", action: "Register" },
    { month: "April", event: "Group Discussion & PI", action: "Shortlisted" },
    { month: "May", event: "Admission Offers", action: "Confirm" },
    { month: "July", event: "Batch Commences", action: "Join" },
  ]

  const programs = [
    {
      name: "MBA Full-Time",
      duration: "2 Years",
      intake: "180 Students",
      fees: "18,00,000",
      features: ["Campus Placements", "Live Projects", "International Exposure"],
    },
    {
      name: "MBA Executive",
      duration: "2 Years (Part-Time)",
      intake: "100 Students",
      fees: "15,00,000",
      features: ["Weekend Classes", "Flexible Schedule", "Industry Networking"],
    },
    {
      name: "MBA Online",
      duration: "2 Years",
      intake: "500 Students",
      fees: "12,00,000",
      features: ["Live Classes", "Self-Paced", "Global Reach"],
    },
  ]

  const faqs = [
    {
      question: "What is the selection process?",
      answer:
        "Selection is based on entrance exam score (CAT/GMAT), academic performance, work experience, and performance in group discussion and personal interview.",
    },
    {
      question: "Is work experience mandatory?",
      answer:
        "While not mandatory, we recommend 2+ years of work experience. Fresh graduates with strong academic records are also considered.",
    },
    {
      question: "What are the scholarship opportunities?",
      answer:
        "We offer merit-based, need-based, and category-based scholarships. Up to 50% fees can be waived for qualifying candidates.",
    },
    {
      question: "Can international students apply?",
      answer: "Yes, international students are welcome. They need to provide GMAT scores and valid visa documentation.",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-lg opacity-90">
              Join a community of ambitious professionals committed to excellence and transformation. Start your MBA
              journey with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Eligibility Requirements</h2>
            <p className="text-foreground/60 text-lg">Basic criteria to apply for our MBA programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, idx) => {
              const Icon = req.icon
              return (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 flex items-start gap-4 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground/70 text-sm">{req.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Program Options</h2>
            <p className="text-foreground/60 text-lg">Choose the program that fits your career goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                  <h3 className="text-xl font-bold text-foreground mb-2">{program.name}</h3>
                  <p className="text-accent font-semibold">{program.duration}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <Users className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{program.intake}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <DollarSign className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">₹{program.fees}</span>
                  </div>

                  <div className="pt-4 space-y-2">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Application Timeline</h2>
            <p className="text-foreground/60 text-lg">Important dates and deadlines</p>
          </div>

          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 sm:gap-8 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  {idx < timeline.length - 1 && <div className="w-1 h-16 bg-border mt-2" />}
                </div>
                <div className="pb-6 flex-1">
                  <p className="text-accent font-bold text-sm">{item.month}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.event}</h3>
                  <button className="text-accent text-sm font-medium hover:text-accent/80 transition-colors">
                    {item.action} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card rounded-lg border border-border overflow-hidden animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                  <div
                    className={`transform transition-transform duration-300 ${activeAccordion === idx ? "rotate-180" : ""}`}
                  >
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </button>
                {activeAccordion === idx && (
                  <div className="px-6 py-4 bg-muted/30 border-t border-border">
                    <p className="text-foreground/70">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-lg opacity-90 mb-8">
            Start your application today and join thousands of successful IEM alumni
          </p>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  )
}
