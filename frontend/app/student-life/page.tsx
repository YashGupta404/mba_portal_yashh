"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"
import { API_BASE_URL } from "@/lib/api-config"

interface Activity {
  _id: string;
  id: number;
  title: string;
  description: string;
  category: 'cultural' | 'academic' | 'sports' | 'career' | 'networking' | 'social';
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
  date: string;
  time: string;
  venue: string;
  attendees: number;
  image: string;
}

const categoryColors: Record<string, string> = {
  cultural: 'bg-purple-500',
  academic: 'bg-blue-500',
  sports: 'bg-green-500',
  career: 'bg-orange-500',
  networking: 'bg-pink-500',
  social: 'bg-red-500',
}

const statusColors: Record<string, string> = {
  upcoming: 'bg-green-500 text-white',
  ongoing: 'bg-yellow-500 text-black',
  completed: 'bg-gray-500 text-white',
  cancelled: 'bg-red-500 text-white',
}

interface Facility {
  _id: string;
  id: number;
  title: string;
  details: string;
}

export default function StudentLifePage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch both activities and facilities
        const [activitiesRes, facilitiesRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/student-life`),
          fetch(`${API_BASE_URL}/api/facilities`)
        ]);

        const activitiesData = await activitiesRes.json();
        const facilitiesData = await facilitiesRes.json();

        setActivities(activitiesData);
        setFacilities(facilitiesData);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4"
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos} />
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

      {/* Activities Section - Cards like Admin Portal */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Events & Activities</h2>
            <p className="text-foreground/60 text-lg">Campus events and student activities</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
            </div>
          ) : activities.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-lg">No activities found. Check back later!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, idx) => (
                <div
                  key={activity._id}
                  className="bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 animate-slide-in-up overflow-hidden"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Category & Status Badges */}
                  <div className="p-4 pb-0">
                    <div className="flex gap-2 mb-4">
                      <span className={`px-3 py-1 text-xs font-bold text-white rounded-full ${categoryColors[activity.category]}`}>
                        {activity.category}
                      </span>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[activity.status]}`}>
                        {activity.status}
                      </span>
                    </div>
                  </div>

                  {/* Calendar Icon Placeholder (like admin portal) */}
                  <div className="flex justify-center items-center h-32 bg-muted/30">
                    {activity.image ? (
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Calendar className="w-16 h-16 text-foreground/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-foreground/60 text-sm mb-4 line-clamp-2">{activity.description}</p>

                    {/* Event Details */}
                    <div className="space-y-2 text-sm text-foreground/70 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-foreground/40" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-foreground/40" />
                        <span>{activity.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-foreground/40" />
                        <span>{activity.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-foreground/40" />
                        <span>{activity.attendees} attendees</span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <button className="w-full py-2.5 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                key={facility._id}
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
