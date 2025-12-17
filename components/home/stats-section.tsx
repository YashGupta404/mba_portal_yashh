"use client"

import { useEffect, useRef, useState } from "react"

function StatCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const increment = target / 50
        const interval = setInterval(() => {
          current += increment
          if (current >= target) {
            setCount(target)
            clearInterval(interval)
          } else {
            setCount(Math.floor(current))
          }
        }, 30)
      }
    })

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{count}+</div>
      <p className="text-foreground/70 text-sm lg:text-base">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">By The Numbers</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            IEM College's impact and excellence in management education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter target={5000} label="Alumni Network" />
          <StatCounter target={100} label="Placement Rate %" />
          <StatCounter target={50} label="Global Partners" />
          <StatCounter target={25} label="Years Excellence" />
        </div>
      </div>
    </section>
  )
}
