"use client"

import { Bell } from "lucide-react"

export default function NewsScrollBanner() {
  const news = [
    { id: 1, text: "🎓 Congratulations to our 2024 batch - 100% placement record achieved!", isNew: true },
    { id: 2, text: "📢 New MBA Executive program starting January 2025 - Applications open now!", isNew: true },
    { id: 3, text: "🏆 IEM College ranked #1 in Management Education - NIRF 2024", isNew: false },
    { id: 4, text: "💼 Global exchange program with 15+ international universities", isNew: false },
    { id: 5, text: "🌟 Join our alumni network of 5000+ successful leaders", isNew: false },
  ]

  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-4">

          {/* Left: Golden Bell + Blinking Golden Badge */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Bell Icon with Golden Blink */}
            <Bell className="w-5 h-5 text-yellow-300 animate-golden-blink drop-shadow-[0_0_6px_rgba(255,215,0,0.9)]" />

            {/* Golden Pulsating Badge */}
            <span className="font-semibold text-sm px-3 py-1 rounded-md bg-gradient-to-r from-yellow-300 to-yellow-500 text-black animate-golden-pulse shadow-[0_0_8px_rgba(255,215,0,0.9)]">
              Latest Updates
            </span>
          </div>

          {/* Scrolling Ticker */}
          <div className="relative flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee whitespace-nowrap">

              {/* LOOP 1 */}
              {news.map((item) => (
                <div key={item.id} className="flex items-center gap-2 mx-8 flex-shrink-0">
                  {item.isNew && (
                    <span className="px-2 py-1 bg-secondary/20 rounded text-xs font-bold text-secondary animate-pulse">
                      NEW
                    </span>
                  )}
                  <span className="text-sm opacity-90">{item.text}</span>
                  <span className="mx-2 opacity-40">•</span>
                </div>
              ))}

              {/* GAP BETWEEN LOOPS */}
              <div className="w-32"></div>

              {/* LOOP 2 */}
              {news.map((item) => (
                <div key={`dup-${item.id}`} className="flex items-center gap-2 mx-8 flex-shrink-0">
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