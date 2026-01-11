"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  BookOpen,
  FolderOpen,
  Download,
} from "lucide-react"
import { API_BASE_URL } from "@/lib/api-config"

// multicolour steps (RESTORED)
const stepColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-500",
  "bg-orange-600",
  "bg-rose-600",
]

export default function ProgramDetailsPage() {
  const { id } = useParams()
  const [program, setProgram] = useState(null)
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch program details
        const programRes = await fetch(`${API_BASE_URL}/api/programs/program/${id}`)
        const programData = await programRes.json()

        if (programData.success) {
          setProgram(programData.data)
        }

        // Fetch courses for this program
        const coursesRes = await fetch(`${API_BASE_URL}/api/courses?programId=${id}&status=Published`)
        const coursesData = await coursesRes.json()

        if (coursesData.success) {
          setCourses(coursesData.data)
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    )
  }

  if (!program) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl text-red-600">
        Program Not Found
      </div>
    )
  }

  return (
    <main className="py-16 px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2">{program.name}</h1>
      <p className="text-accent font-semibold text-lg mb-8">Program Overview</p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {[
          { icon: Clock, label: "Duration", value: program.duration?.value || "N/A" },
          { icon: Users, label: "Intake", value: `${program.intake?.value || 0} ${program.intake?.label || 'Students'}` },
          { icon: Award, label: "Department Avg Package", value: program.avgPackage?.value || "N/A" },
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

      {/* SYLLABUS - Now showing actual courses from database */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-accent" />
          Course Structure (Syllabus)
        </h2>

        <ul className="space-y-2">
          {courses.map((course, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <div>
                <p className="font-semibold">{course.courseCode} - {course.courseName}</p>
                <p className="text-sm text-muted-foreground">
                  {course.department} • {course.level} • {course.credits} Credits
                </p>
              </div>
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
          {program.eligibilityCriteria && program.eligibilityCriteria.map((item, i) => (
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
          {program.admissionProcess && program.admissionProcess.map((step, i) => (
            <div key={i} className="flex items-center gap-10">
              <div className="flex flex-col items-center text-center">
                <div
                  className={`w-10 h-10 rounded-full text-white flex items-center justify-center 
                  font-bold border-2 border-yellow-400 blink-circle ${stepColors[i % stepColors.length]}`}
                >
                  {step.step}
                </div>
                <p className="text-gray-600 text-sm w-32 mt-2">{step.title}</p>
              </div>

              {i !== program.admissionProcess.length - 1 && (
                <span className="text-2xl text-gray-400">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALIZATIONS (MOVED DOWN) */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FolderOpen className="w-6 h-6 text-accent" />
          Program Specializations
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {program.specializations && program.specializations.map((spec, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg bg-card transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-md"
            >
              <h3 className="font-bold mb-2">{spec.name}</h3>
              {spec.description && (
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
