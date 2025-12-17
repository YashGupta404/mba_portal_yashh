"use client"

import { Users, Zap, Gamepad2, Music, Award, Heart } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"

export default function StudentLifePage() {
  const activities = [
    {
      icon: Users,
      title: "Student Clubs",
      description: "Join 20+ clubs including Entrepreneurship, Analytics, Social Impact, and more",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      icon: Music,
      title: "Cultural Events",
      description: "Annual fest with music, dance, theater, and international cultural performances",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    },
    {
      icon: Award,
      title: "Sports & Wellness",
      description: "State-of-the-art facilities for cricket, basketball, badminton, yoga, and fitness",
      image: "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop",
    },
    {
      icon: Zap,
      title: "Case Competitions",
      description: "Inter-college competitions, national case championships, and business simulations",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
    {
      icon: Heart,
      title: "Social Initiatives",
      description: "CSR projects, community outreach, and sustainability-focused activities",
      image: "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
    },
    {
      icon: Gamepad2,
      title: "Internals & Events",
      description: "Regular seminars, panel discussions, industry talks, and networking events",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    },
  ]

  const facilities = [
    { title: "Modern Campus", details: "State-of-the-art classrooms with latest AV technology" },
    { title: "Library", details: "50,000+ books, digital journals, and research databases" },
    { title: "Computing Lab", details: "Advanced software and high-speed internet infrastructure" },
    { title: "Auditorium", details: "500-seat capacity for seminars and events" },
    { title: "Cafeteria", details: "Multi-cuisine dining with healthy options" },
    { title: "Hostel", details: "Comfortable accommodation for out-station students" },
  ]
const videos = [
        "/videos/video1.mp4",
        "/videos/video2.mp4",
        "/videos/video3.mp4"
    ]
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Student Life at IEM</h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Experience a vibrant community where academics meet culture, sports, entrepreneurship, and lasting
              friendships. Your MBA journey is about holistic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Activities & Experiences</h2>
            <p className="text-foreground/60 text-lg">Beyond the classroom - a holistic learning environment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, idx) => {
              const Icon = activity.icon
              return (
                <div
                  key={idx}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="h-48 overflow-hidden bg-muted">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <Icon className="w-6 h-6 text-accent mb-3" />
                    <h3 className="text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-foreground/60 text-sm">{activity.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Campus Facilities</h2>
            <p className="text-foreground/60 text-lg">World-class infrastructure for an enriching experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{facility.title}</h3>
                <p className="text-foreground/60 text-sm">{facility.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Campus Moments</h2>
            <p className="text-foreground/60 text-lg">A peek into the vibrant campus life</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 auto-rows-[300px]">
            {[
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=400&h=300&fit=crop",
              "https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=400&h=300&fit=crop",
            ].map((image, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg border border-border hover:border-accent/50 cursor-pointer animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt="Campus moment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Student Voices</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aisha Gupta",
                batch: "MBA 2024",
                text: "The holistic environment at IEM helped me grow as both a professional and a person. The clubs and events made MBA truly memorable.",
              },
              {
                name: "Rohan Kapoor",
                batch: "MBA 2024",
                text: "Balancing academics, competitions, and cultural events was challenging but rewarding. I built skills and friendships that will last forever.",
              },
              {
                name: "Priya Verma",
                batch: "MBA Executive 2023",
                text: "Despite a full-time job, I could participate in networking events and initiatives. The flexibility was perfect for my career.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <p className="text-foreground/70 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-accent">{testimonial.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
