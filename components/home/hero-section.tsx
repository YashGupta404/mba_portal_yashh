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
      {/* Animated Background Images with Zoom Effect */}
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

      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

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

      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-primary/5 blur-2xl animate-float-slow" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
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

          <p
            className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed animate-slide-in-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            Advance your career with world-class MBA programs. Join leaders and innovators shaping tomorrow's business
            landscape.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 overflow-hidden text-base">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <div className="relative flex items-center justify-center gap-2">
                Apply Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button className="group px-8 py-4 bg-white/15 text-primary-foreground rounded-lg font-bold hover:bg-white/25 transition-all duration-300 backdrop-blur-md border-2 border-white/30 hover:border-white/50 transform hover:scale-105 active:scale-95 text-base">
              Explore Programs
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce-smooth">
            <div className="w-7 h-11 border-2 border-white/40 rounded-full flex items-start justify-center p-2 hover:border-white/60 transition-colors">
              <div
                className="w-1.5 h-3 bg-white/50 rounded-full animate-slide-in-up"
                style={{ animationDelay: "0s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
