"use client"

import { Users, Target, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering world-class education and research",
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Upholding ethical standards in all our endeavors",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creative thinking and entrepreneurial spirit",
    },
    {
      icon: Award,
      title: "Impact",
      description: "Creating leaders who drive positive change globally",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About IEM College</h1>
            <p className="text-lg opacity-90">
              For over 25 years, IEM College has been a beacon of excellence in management education, shaping tomorrow's
              leaders and driving organizational transformation across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-up">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Founded in 1999, IEM College emerged from a vision to create an institution that would challenge
                conventional wisdom and prepare managers for the complexities of the modern business world.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                What began as a dream of a few passionate educators has blossomed into a premier institution recognized
                globally for its innovative curriculum, exceptional faculty, and outstanding alumni network.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, we continue to evolve, staying at the forefront of management education while maintaining our
                core commitment to developing ethical, thoughtful, and visionary leaders.
              </p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-xl overflow-hidden animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="IEM College Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every student we teach
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{value.title}</h3>
                  <p className="text-foreground/60 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-foreground/70 leading-relaxed">
                To develop and nurture ethical, visionary leaders equipped with cutting-edge knowledge, critical
                thinking skills, and global perspectives to drive sustainable value creation and positive social impact.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-foreground/70 leading-relaxed">
                To be the most respected institution for management education, recognized globally for creating
                transformational leaders who demonstrate excellence, integrity, and commitment to building a better
                world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
