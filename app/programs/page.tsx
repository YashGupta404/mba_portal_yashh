"use client"

import { Clock, Users, Award, CheckCircle } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"
import { useRouter } from "next/navigation"

export default function ProgramsPage() {
  const router = useRouter()

  const videos=["/videos/video1.mp4","/videos/video2.mp4","/videos/video3.mp4"];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
      <Videoanimation videos={videos}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Our MBA Programs</h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Choose from our diverse MBA offerings designed to fit your lifestyle and career goals.
            </p>
          </div>
        </div>
      </section>

      {/* Full-Time Program */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">MBA Full-Time</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Our flagship 2-year immersive MBA program designed for early-career professionals ready to accelerate
                their growth. This is a comprehensive program combining classroom learning, live projects, and
                international exposure.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Global curriculum aligned with industry needs",
                  "Live projects with leading companies",
                  "International student exchange program",
                  "Dedicated career services and placements",
                  "Access to extensive alumni network",
                  "Internship opportunities across sectors",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Updated Buttons */}
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Apply Now
                </button>

                <button
                  onClick={() => router.push("/programs/fulltime")}
                  className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                >
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {[
                { icon: Clock, label: "Duration", value: "2 Years" },
                { icon: Users, label: "Intake", value: "180 Students" },
                { icon: Award, label: "Avg Package", value: "₹18 LPA" },
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

      {/* Executive Program */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 order-2 lg:order-1 animate-fade-in">
              {[
                { icon: Clock, label: "Duration", value: "2 Years" },
                { icon: Users, label: "Intake", value: "100 Students" },
                { icon: Award, label: "Avg Package", value: "₹16 LPA" },
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

            <div className="order-1 lg:order-2 animate-slide-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">MBA Executive</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Perfect for working professionals, our 2-year part-time MBA offers flexibility without compromising on
                quality. Weekend classes, evening sessions, and online modules ensure you can balance work and studies.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Weekend and evening classes",
                  "Flexible schedule adapted to professionals",
                  "Peer learning from diverse industries",
                  "Practical case studies and real-world applications",
                  "Networking with experienced professionals",
                  "Career advancement opportunities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Online Program */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">MBA Online</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Learn from anywhere in the world without compromising on the IEM College experience. Our online MBA
                features live interactive classes, assignments, and industry-focused curriculum delivered through a
                robust digital platform.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Learn from any location globally",
                  "Live interactive class sessions",
                  "Self-paced learning modules",
                  "Industry expert instructors",
                  "Same degree as on-campus students",
                  "Affordable tuition fees",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                Apply Now
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              {[
                { icon: Clock, label: "Duration", value: "2 Years" },
                { icon: Users, label: "Intake", value: "500 Students" },
                { icon: Award, label: "Avg Package", value: "₹14 LPA" },
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
