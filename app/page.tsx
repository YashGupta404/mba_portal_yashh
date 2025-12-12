import HeroSection from "@/components/home/hero-section"
import NewsScrollBanner from "@/components/home/news-banner"
import StatsSection from "@/components/home/stats-section"
import ProgramsSection from "@/components/home/programs-section"
import AccreditationSection from "@/components/home/accreditation-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <NewsScrollBanner />
      <StatsSection />
      <ProgramsSection />
      <AccreditationSection />
      <TestimonialsSection />
    </main>
  )
}
