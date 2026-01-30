import HeroSection from "@/components/home/hero-section"
import NewsScrollBanner from "@/components/home/news-banner"
import StatsSection from "@/components/home/stats-section"
import ProgramsSection from "@/components/home/programs-section"
import AccreditationSection from "@/components/home/accreditation-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import PlacementSection from "@/components/home/PlacementSection"
import StudentAcademicExcellenceSection from "@/components/home/StudentexcellenceSection"
import MBAFitFinderSidebar from "@/components/home/MBAFitFinderSidebar"




export default function Home() {
  return (
    <main className="overflow-hidden">
      <MBAFitFinderSidebar />
      <HeroSection />
      <NewsScrollBanner />
      <StatsSection />
      <PlacementSection />
      <StudentAcademicExcellenceSection />
      <ProgramsSection />
      <AccreditationSection />
      <TestimonialsSection />

    </main>
  )
}
