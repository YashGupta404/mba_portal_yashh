"use client"

import { Briefcase, Globe } from "lucide-react"
import Link from "next/link"

export default function ProgramsSection() {
  const programs = [
    {
      icon: Briefcase,
      title: "MBA Full-Time",
      slug: "fulltime",
      description: "Immersive 2-year program designed for career accelerators",
      features: ["Live Project Work", "Industry Internships", "Global Exposure"],
    },
    {
      icon: Briefcase,
      title: "MBA Executive",
      slug: "executive",
      description: "Part-time program for working professionals",
      features: ["Weekend Classes", "Flexible Schedule", "Peer Learning"],
    },
    {
      icon: Globe,
      title: "MBA Online",
      slug: "online",
      description: "Learn from anywhere without compromising on quality",
      features: ["Live Classes", "Self-Paced", "Same Degree"],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Choose the MBA program that fits your career aspirations
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const Icon = program.icon
            return (
              <div
                key={idx}
                className="group bg-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-accent/50 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-yellow-300/10 rounded-xl flex items-center justify-center 
                                  shadow-[0_0_12px_rgba(255,215,0,0.3)]
                                  group-hover:shadow-[0_0_18px_rgba(255,215,0,0.6)]
                                  transition-all duration-300">
                    <Icon className="w-8 h-8 text-yellow-400 icon-gold-blink icon-float" />
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                <p className="text-foreground/60 text-sm mb-6">{program.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <Link
                  href={`/programs/${program.slug}`}
                  className="w-full inline-block"
                >
                  <span className="w-full block px-4 py-2 border border-accent text-accent rounded-lg font-medium text-center hover:bg-accent hover:text-accent-foreground transition-colors">
                    Learn More
                  </span>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}