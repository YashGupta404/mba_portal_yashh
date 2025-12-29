"use client"

import { Clock, Users, Award, CheckCircle } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function ProgramsPage() {
  const router = useRouter()
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const videos = ["/videos/video1.mp4", "/videos/video2.mp4", "/videos/video3.mp4"]

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/programs?isActive=true')
        const data = await response.json()

        if (data.success) {
          // Sort by displayOrder
          const sortedPrograms = data.data.sort((a, b) => a.displayOrder - b.displayOrder)
          setPrograms(sortedPrograms)
        } else {
          setError('Failed to load programs')
        }
      } catch (err) {
        console.error('Error fetching programs:', err)
        setError('Failed to load programs')
      } finally {
        setLoading(false)
      }
    }

    fetchPrograms()
  }, [])

  if (loading) {
    return (
      <main className="overflow-hidden">
        <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
          <Videoanimation videos={videos} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-slide-in-up">
              <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Our MBA Programs</h1>
              <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
                Choose from our diverse MBA offerings designed to fit your lifestyle and career goals.
              </p>
            </div>
          </div>
        </section>
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
        </div>
      </main>
    )
  }

  if (error) {
    return (
      <main className="overflow-hidden">
        <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
          <Videoanimation videos={videos} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl animate-slide-in-up">
              <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Our MBA Programs</h1>
              <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
                Choose from our diverse MBA offerings designed to fit your lifestyle and career goals.
              </p>
            </div>
          </div>
        </section>
        <div className="h-screen flex items-center justify-center flex-col gap-4">
          <p className="text-2xl text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90"
          >
            Retry
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Our MBA Programs</h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Choose from our diverse MBA offerings designed to fit your lifestyle and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program._id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center`}>

              {/* Text Content */}
              <div className={`animate-slide-in-up ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  {program.name}
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features && program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                    Apply Now
                  </button>
                  <button
                    onClick={() => router.push(`/programs/${program.programId}`)}
                    className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className={`grid grid-cols-2 gap-4 animate-fade-in ${index % 2 === 1 ? 'order-2 lg:order-1' : ''}`}>
                {[
                  { icon: Clock, label: "Duration", value: program.duration?.value || "N/A" },
                  { icon: Users, label: "Intake", value: `${program.intake?.value || 0} ${program.intake?.label || 'Students'}` },
                  { icon: Award, label: "Avg Package", value: program.avgPackage?.value || "N/A" },
                ].map((stat, idx) => {
                  const Icon = stat.icon
                  return (
                    <div
                      key={idx}
                      className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 text-center"
                    >
                      <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
                      <p className="font-bold text-foreground">{stat.value}</p>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>
      ))}

      {/* Specializations */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Program Specializations</h2>
            <p className="text-foreground/60 text-lg">Choose your area of expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Finance & Strategy", courses: "8 Core + 4 Electives" },
              { name: "Technology & Innovation", courses: "8 Core + 4 Electives" },
              { name: "Marketing & Analytics", courses: "8 Core + 4 Electives" },
              { name: "Operations & Supply Chain", courses: "8 Core + 4 Electives" },
              { name: "Entrepreneurship", courses: "8 Core + 4 Electives" },
              { name: "Business Analytics", courses: "8 Core + 4 Electives" },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{spec.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{spec.courses}</p>
                <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Advance Your Career?</h2>
          <p className="text-lg opacity-90 mb-8">
            Choose the program that aligns with your aspirations and apply today
          </p>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
            Start Your Application
          </button>
        </div>
      </section>
    </main>
  )
}
