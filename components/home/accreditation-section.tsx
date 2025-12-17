"use client"

import { Trophy } from "lucide-react"

export default function AccreditationSection() {
  const accreditations = [
    { name: "AACSB" },
    { name: "ACBSP" },
    { name: "AACTE" },
    { name: "NAAC" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Accreditations & Recognition
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Internationally recognized and accredited by leading educational bodies
          </p>
        </div>

        {/* Accreditation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 border border-border rounded-xl 
                         hover:border-accent/50 hover:shadow-xl transition-all duration-300 
                         group cursor-pointer animate-slide-in-up"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-yellow-300/10 rounded-full flex items-center justify-center 
                              mb-4 group-hover:bg-yellow-300/20 
                              shadow-[0_0_10px_rgba(255,215,0,0.25)]
                              group-hover:shadow-[0_0_18px_rgba(255,215,0,0.45)]
                              transition-all duration-300">

                <Trophy className="w-10 h-10 text-yellow-400 icon-gold-blink icon-float" />
              </div>

              {/* Name */}
              <p className="font-semibold text-foreground text-center">{acc.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
