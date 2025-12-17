"use client"

import { TrendingUp, Target, Users, Award } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"

export default function PlacementsPage() {
  const stats = [
    { label: "100%", subtext: "Placement Rate", icon: TrendingUp },
    { label: "₹18L", subtext: "Avg. Package", icon: Target },
    { label: "150+", subtext: "Recruiting Companies", icon: Users },
    { label: "₹45L", subtext: "Highest Package", icon: Award },
  ]
const videos = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4"
    ]
  const companies = [
    { name: "McKinsey & Company", sector: "Consulting" },
    { name: "Goldman Sachs", sector: "Finance" },
    { name: "Microsoft", sector: "Technology" },
    { name: "Amazon", sector: "E-commerce" },
    { name: "Deloitte", sector: "Consulting" },
    { name: "Accenture", sector: "Technology" },
    { name: "HDFC Bank", sector: "Banking" },
    { name: "Flipkart", sector: "E-commerce" },
    { name: "TCS", sector: "IT Services" },
    { name: "Infosys", sector: "IT Services" },
    { name: "ITC Limited", sector: "FMCG" },
    { name: "Nestlé", sector: "FMCG" },
  ]

  const sectors = [
    { name: "Consulting", percentage: 25, color: "bg-accent" },
    { name: "Finance", percentage: 20, color: "bg-secondary" },
    { name: "Technology", percentage: 18, color: "from-primary to-accent" },
    { name: "FMCG", percentage: 15, color: "from-secondary to-primary" },
    { name: "E-commerce", percentage: 12, color: "bg-primary" },
    { name: "Others", percentage: 10, color: "bg-muted" },
  ]

  const roles = [
    { role: "Management Consultant", companies: 45 },
    { role: "Product Manager", companies: 38 },
    { role: "Senior Analyst", companies: 52 },
    { role: "Business Development", companies: 35 },
    { role: "Finance Manager", companies: 28 },
    { role: "Operations Manager", companies: 32 },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
      <Videoanimation videos={videos}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Placements</h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Our students are highly sought after by leading global organizations. Discover how our career support and
              rigorous curriculum prepare graduates for success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-1">{stat.label}</p>
                  <p className="text-foreground/60 text-sm">{stat.subtext}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Top Recruiting Companies</h2>
            <p className="text-foreground/60 text-lg">150+ organizations trust IEM graduates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {company.name}
                </p>
                <p className="text-sm text-foreground/60">{company.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Distribution */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Sector Distribution</h2>
            <p className="text-foreground/60 text-lg">Diverse career opportunities across industries</p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            {sectors.map((sector, idx) => (
              <div key={idx} className="space-y-2 animate-slide-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="flex justify-between items-center mb-2">
                  <p className="font-medium text-foreground">{sector.name}</p>
                  <p className="text-accent font-semibold">{sector.percentage}%</p>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${sector.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${sector.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Roles */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Most Sought Roles</h2>
            <p className="text-foreground/60 text-lg">Career paths our graduates pursue</p>
          </div>

          <div className="space-y-6">
            {roles.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-6 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium text-foreground">{item.role}</p>
                    <p className="text-accent font-bold">{item.companies} placements</p>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
                      style={{ width: `${(item.companies / 52) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Support */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Career Support</h2>
            <p className="text-foreground/60 text-lg">Comprehensive services to ensure your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Career Counseling",
                description: "Personalized guidance to identify the right career path for your skills and aspirations",
              },
              {
                title: "Resume Building",
                description: "Professional resume crafting workshops and one-on-one feedback from industry experts",
              },
              {
                title: "Interview Prep",
                description: "Mock interviews, case study preparation, and behavioral training with alumni mentors",
              },
              {
                title: "Internships",
                description: "Summer internship placements with leading companies across multiple sectors",
              },
              {
                title: "Networking Events",
                description: "Industry meet-ups, alumni interactions, and exclusive corporate presentations",
              },
              {
                title: "Alumni Network",
                description: "Access to 5000+ successful alumni for mentoring and job opportunities",
              },
            ].map((support, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-lg mb-2 text-foreground">{support.title}</h3>
                <p className="text-foreground/60 text-sm">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Success Stories</h2>
          <p className="text-lg opacity-90 mb-8">Be part of a legacy of excellence and career transformation</p>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors shadow-lg">
            Apply Now
          </button>
        </div>
      </section>
    </main>
  )
}
