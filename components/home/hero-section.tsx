"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  const [imageIndex, setImageIndex] = useState(0)
  const [particles, setParticles] = useState<{ id: number; left: string; delay: number }[]>([])

  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop&q=90",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop&q=90",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&q=90",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const generatedParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      delay: Math.random() * 2,
    }))
    setParticles(generatedParticles)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Animated Background Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1500 ${
            idx === imageIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/10" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-float-particles"
            style={{
              left: particle.left,
              bottom: "-10px",
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-scale-pop hover:bg-white/15 transition-all duration-300">
            <div className="relative">
              <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" />
              <div className="absolute inset-0 w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
            </div>
            <span className="text-primary-foreground/90 text-sm font-semibold tracking-wide">
              Excellence in Education
            </span>
            <Sparkles className="w-4 h-4 text-secondary animate-bounce-smooth" />
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground leading-tight animate-slide-in-up">
              Shape Your Future
            </h1>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <span
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-foreground animate-slide-in-up"
                style={{ animationDelay: "0.1s" }}
              >
                with
              </span>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary blur-lg opacity-50" />
                <h2
                  className="relative text-5xl sm:text-6xl lg:text-7xl font-black text-secondary animate-text-glow"
                  style={{ animationDelay: "0.2s" }}
                >
                  IEM MBA
                </h2>
              </div>
            </div>
          </div>

          {/* Sub-Text */}
          <p
            className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed animate-slide-in-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            Advance your career with world-class MBA programs. Join leaders and innovators shaping tomorrow's
            business landscape.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                Apply Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="group px-8 py-4 bg-white/15 text-primary-foreground rounded-lg font-bold hover:bg-white/25 transition-all duration-300 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transform hover:scale-105 active:scale-95">
              Explore Programs
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        
      </div>
<aside
  className="hidden lg:block absolute top-10 right-10 w-32 
  bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl 
  p-3 shadow-2xl overflow-hidden animate-fade-in"
>
  {/* Header */}
  <div className="flex items-start gap-2 mb-2">
    <div className="w-1 h-7 bg-gradient-to-b from-yellow-300 via-orange-400 to-red-400 rounded-full animate-pulse"></div>

    <h3 className="text-[11px] font-semibold text-white tracking-tight leading-snug break-words">
      News & Announcements
    </h3>
  </div>

  {/* Auto-Scrolling Content */}
  <div className="relative h-64 overflow-hidden">
   <ul className="news-loop absolute w-full animate-news-loop space-y-4 text-white/90 text-[10px] pr-1">

  {/* ORIGINAL LIST */}
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">🏆 IEM ranked top 10 in Eastern India.</li>
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">🌍 Leadership Summit in Jan 2025.</li>
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">💼 98.5% placement achieved.</li>
  <li className="hover:text-yellow-300">✨ New specialization added.</li>

  {/* --- GAP / SPACER (visible gap between loops) --- */}
  <li className="h-8"></li>  {/* Add a blank vertical gap */}

  {/* DUPLICATE LIST */}
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">🏆 IEM ranked top 10 in Eastern India.</li>
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">🌍 Leadership Summit in Jan 2025.</li>
  <li className="border-b border-white/20 pb-1 hover:text-yellow-300">💼 98.5% placement achieved.</li>
  <li className="hover:text-yellow-300">✨ New specialization added.</li>

</ul>

  </div>
</aside>

</section>
  )
}
