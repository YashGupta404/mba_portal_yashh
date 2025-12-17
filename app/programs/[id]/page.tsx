"use client"

import { useParams } from "next/navigation"
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  BookOpen, 
  FolderOpen, 
  Download
} from "lucide-react"

const programs = {
  fulltime: {
    name: "MBA Full-Time",
    duration: "2 Years",
    intake: "180 Students",
    avgPackage: "₹18 LPA",
    eligibility: [
      "Bachelor’s degree with minimum 50%",
      "Valid CAT/MAT/XAT/CMAT score",
      "Personal Interview & Group Discussion",
    ],
    applicationProcess: [
      "Submit online application form",
      "Upload academic & ID documents",
      "Appear for entrance exam",
      "Attend GD & PI round",
      "Receive final admission offer",
    ],
    specializations: [
      "Finance & Strategy",
      "Marketing & Analytics",
      "Technology & Innovation",
      "Operations & Supply Chain",
      "Business Analytics",
      "Entrepreneurship",
    ],
    syllabus: [
      "Principles of Management",
      "Managerial Economics",
      "Financial Accounting",
      "Organizational Behavior",
      "Marketing Management",
      "Operations Research",
      "Business Communication",
      "Corporate Strategy",
    ],
  },

  executive: {
    name: "MBA Executive",
    duration: "2 Years (Weekend/Evening)",
    intake: "100 Students",
    avgPackage: "₹16 LPA",
    eligibility: [
      "Bachelor’s degree with minimum 50%",
      "Minimum 2 years of work experience",
      "Executive aptitude assessment",
    ],
    applicationProcess: [
      "Online application submission",
      "Upload experience certificate",
      "Online aptitude evaluation",
      "Personal Interview",
      "Admission confirmation",
    ],
    specializations: [
      "Leadership & Strategy",
      "Technology Management",
      "Business Analytics",
      "Marketing & Product Management",
      "Operational Excellence",
    ],
    syllabus: [
      "Executive Leadership",
      "Strategic Thinking",
      "Business Law",
      "Cost Accounting",
      "Digital Transformation",
      "Decision Modeling",
      "Professional Ethics",
    ],
  },

  online: {
    name: "MBA Online",
    duration: "2 Years (Flexible Learning)",
    intake: "500 Students",
    avgPackage: "₹14 LPA",
    eligibility: [
      "Bachelor’s degree (any discipline)",
      "No entrance exam required",
      "Basic English communication skills",
    ],
    applicationProcess: [
      "Online registration",
      "Document verification",
      "Fee payment",
      "Onboarding & LMS access",
    ],
    specializations: [
      "Digital Marketing",
      "Finance & Investment",
      "Business Analytics",
      "Human Resource Management",
    ],
    syllabus: [
      "Online Live Classes",
      "Digital Economics",
      "AI for Business",
      "Virtual Collaboration Tools",
      "Marketing in Digital Age",
      "Financial Modeling",
    ],
  },
}

export default function ProgramDetailsPage() {
  const { id } = useParams()
  const program = programs[id]

  if (!program)
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-600">
        Program Not Found
      </div>
    )

  return (
    <main className="py-16 px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2">{program.name}</h1>
      <p className="text-accent font-semibold text-lg mb-8">Program Overview</p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {[
          { icon: Clock, label: "Duration", value: program.duration },
          { icon: Users, label: "Intake", value: program.intake },
          { icon: Award, label: "Department Avg Package", value: program.avgPackage },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-card rounded-xl border text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent"
          >
            <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-bold">{item.value}</p>
            <p className="text-xs text-foreground/60">{item.label}</p>
          </div>
        ))}
      </div>

      {/* SYLLABUS */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-accent" />
          Course Structure (Syllabus)
        </h2>

        <ul className="space-y-2">
          {program.syllabus.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <p>{item}</p>
            </li>
          ))}
        </ul>

        <button className="mt-6 px-5 py-3 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-accent/80 transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5" />
          Download Syllabus
        </button>
      </section>

      {/* ELIGIBILITY */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>

        <ul className="space-y-2">
          {program.eligibility.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* FLOWCHART */}
      <div className="w-full overflow-x-auto py-6">
        <div className="flex items-start gap-10 min-w-max px-4">

          {/* STEP 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="scale-90 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-bold border-2 border-yellow-400 blink-circle">
                1
              </div>
            </div>
            <p className="text-gray-600 text-sm w-32 mt-2">
              Submit online application form
            </p>
          </div>

          <span className="text-2xl text-gray-400">→</span>

          {/* STEP 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="scale-90 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-base font-bold border-2 border-yellow-400 blink-circle">
                2
              </div>
            </div>
            <p className="text-gray-600 text-sm w-32 mt-2">
              Upload academic & ID documents
            </p>
          </div>

          <span className="text-2xl text-gray-400">→</span>

          {/* STEP 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="scale-90 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center text-base font-bold border-2 border-yellow-400 blink-circle">
                3
              </div>
            </div>
            <p className="text-gray-600 text-sm w-32 mt-2">
              Appear for entrance exam
            </p>
          </div>

          <span className="text-2xl text-gray-400">→</span>

          {/* STEP 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="scale-90 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-orange-600 text-white flex items-center justify-center text-base font-bold border-2 border-yellow-400 blink-circle">
                4
              </div>
            </div>
            <p className="text-gray-600 text-sm w-32 mt-2">
              Attend GD & PI round
            </p>
          </div>

          <span className="text-2xl text-gray-400">→</span>

          {/* STEP 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="scale-90 md:scale-100">
              <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center text-base font-bold border-2 border-yellow-400 blink-circle">
                5
              </div>
            </div>
            <p className="text-gray-600 text-sm w-32 mt-2">
              Receive final admission offer
            </p>
          </div>

        </div>
      </div>

      {/* SPECIALIZATIONS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FolderOpen className="w-6 h-6 text-accent" />
          Program Specializations
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {program.specializations.map((spec, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg bg-card transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-md"
            >
              {spec}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
