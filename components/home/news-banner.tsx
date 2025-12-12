"use client"

import { useEffect, useRef } from "react"
import { Bell } from "lucide-react"

export default function NewsScrollBanner() {
  const scrollRef = useRef(null)

  const news = [
    { id: 1, text: "🎓 Congratulations to our 2024 batch - 100% placement record achieved!", isNew: true },
    { id: 2, text: "📢 New MBA Executive program starting January 2025 - Applications open now!", isNew: true },
    { id: 3, text: "🏆 IEM College ranked #1 in Management Education - NIRF 2024", isNew: false },
    { id: 4, text: "💼 Global exchange program with 15+ international universities", isNew: false },
    { id: 5, text: "🌟 Join our alumni network of 5000+ successful leaders", isNew: false },
  ]

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 1
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollPosition = 0
      }
      scrollElement.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Bell className="w-5 h-5 animate-bounce" />
            <span className="font-semibold text-sm">Latest Updates</span>
          </div>

          {/* Scrolling News */}
          <div ref={scrollRef} className="flex-1 overflow-hidden scroll-smooth" style={{ scrollBehavior: "smooth" }}>
            <div className="flex gap-8">
              {[...news, ...news].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
                  {item.isNew && (
                    <span className="px-2 py-1 bg-secondary/20 rounded text-xs font-bold text-secondary animate-pulse">
                      NEW
                    </span>
                  )}
                  <span className="text-sm opacity-90">{item.text}</span>
                  <span className="mx-2 opacity-40">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
