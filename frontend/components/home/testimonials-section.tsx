"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "MBA 2022 | Senior Manager at Tech Corp",
      text: "IEM College transformed my career trajectory. The curriculum, faculty expertise, and networking opportunities are unparalleled.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "MBA Executive 2023 | Director of Operations",
      text: "Balancing work and studies was seamless with their flexible program. The practical approach to learning made all the difference.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "MBA 2021 | Entrepreneur",
      text: "The faculty mentorship and business incubation support helped me launch my startup. Grateful for their guidance every step of the way.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Hear from our alumni about their transformative IEM experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-primary-foreground/10 backdrop-blur-md rounded-xl p-8 mb-8 border border-primary-foreground/20">
            <div className="flex gap-1 mb-4">
              {Array(testimonials[current].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
            </div>
            <p className="text-xl mb-6 leading-relaxed">"{testimonials[current].text}"</p>
            <div>
              <p className="font-semibold">{testimonials[current].name}</p>
              <p className="text-primary-foreground/70 text-sm">{testimonials[current].role}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? "bg-secondary w-8" : "bg-primary-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
              className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
