"use client"

import { Briefcase, Globe } from "lucide-react"

export default function ProgramsSection() {
  const programs = [
    {
      icon: Briefcase,
      title: "MBA Full-Time",
      description: "Immersive 2-year program designed for career accelerators",
      features: ["Live Project Work", "Industry Internships", "Global Exposure"],
    },
    {
      icon: Briefcase,
      title: "MBA Executive",
      description: "Part-time program for working professionals",
      features: ["Weekend Classes", "Flexible Schedule", "Peer Learning"],
    },
    {
      icon: Globe,
      title: "MBA Online",
      description: "Learn from anywhere without compromising on quality",
      features: ["Live Classes", "Self-Paced", "Same Degree"],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Choose the MBA program that fits your career aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <div
                key={idx}
                className="group bg-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-accent/50 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-foreground/60 text-sm mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                  Learn More
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
