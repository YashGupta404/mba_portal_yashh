"use client"

import { useRouter } from "next/navigation"
import { Mail, Linkedin, Award, BookOpen, Star, Sparkles, X, ExternalLink, Code2, BarChart3, Users } from "lucide-react"
import Videoanimation from "../../components/ui/videoanimation.jsx"
import { useState, useEffect } from "react";
// NEW: useFaculty context import
import { useFaculty } from "@/app/context/FacultyContext";
import { API_BASE_URL } from "@/lib/api-config";

interface Project {
  name: string;
  status: string;
}

interface FacultyMember {
  _id: string;
  id: number;
  name: string;
  title: string;
  specialization: string;
  image: string;
  email: string;
  achievements: string;
  bio: string;
  researchAreas: string[];
  qualifications: string[];
  currentProjects: Project[];
  publications: number;
  students: number;
  linkedin: string;
  slug?: string; // Added optional slug field
}

export default function FacultyPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [selectedFaculty, setSelectedFaculty] = useState<string | null>(null)
  const [faculty, setFaculty] = useState<FacultyMember[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter()

  // NEW: context setter
  const { setSelected } = useFaculty();

  useEffect(() => {
    async function fetchFaculty() {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE_URL}/api/faculty`);
        const data = await res.json();
        setFaculty(data);
      } catch (error) {
        console.error("Failed to load faculty:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchFaculty();
  }, []);

  // Function to generate slug from name
  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/^dr\.\s*|^prof\.\s*/g, "")
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "");
  };

  if (loading) {
    return (
      <main className="overflow-hidden">
        <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Faculty</h1>
              <p className="text-lg opacity-90">Loading faculty information...</p>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center h-96">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }
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
            <h1 className="drop-shadow-[2px_2px_5px_white] text-4xl lg:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="drop-shadow-[2px_2px_5px_white] text-lg opacity-90">
              Meet the world-class educators and mentors who bring industry expertise and academic rigor to every
              classroom. Our faculty combines decades of experience with innovative teaching methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, idx) => (
              <div
                key={member._id}
                className="group relative animate-slide-in-up h-full cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredId(member._id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setExpandedId(expandedId === member._id ? null : member._id)}
              >
                {/* Premium Glow Border */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${hoveredId === member._id ? "animate-pulse" : ""
                    }`}
                />

                {/* Main Card Container */}
                <div
                  className={`relative h-full transition-all duration-500 transform ${expandedId === member._id ? "scale-105" : "scale-100"
                    }`}
                >
                  {/* Card Background */}
                  <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full">

                    {/* Profile Image Section */}
                    <div className="relative overflow-hidden bg-gradient-to-b from-muted via-muted/70 to-muted/50">
                      <div className="relative w-full pt-8 pb-6 px-4 flex justify-center h-72 overflow-hidden">

                        {/* Image Section */}
                        <div
                          className={`absolute inset-4 transition-all duration-500 ease-out ${hoveredId === member._id ? "-translate-x-20 opacity-100" : "translate-x-0 opacity-100"
                            }`}
                        >
                          <div className={`relative transition-all duration-500 h-full flex items-center justify-center ${hoveredId === member._id ? "scale-110" : "scale-100"
                            }`}>

                            {/* Outer Glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-lg animate-pulse" />

                            {/* Image */}
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-700 ${hoveredId === member._id ? "scale-120 brightness-125" : "scale-100 brightness-100"
                                  }`}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Details Panel Slide */}
                        <div
                          className={`absolute inset-4 right-auto left-32 transition-all duration-500 ease-out ${hoveredId === member._id ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                            }`}
                        >
                          <div className="h-full flex flex-col justify-between p-4 bg-gradient-to-b from-primary/10 to-accent/5 rounded-2xl border border-accent/20 backdrop-blur-sm overflow-y-auto">

                            {/* Stats */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs">
                                <BarChart3 className="w-4 h-4 text-accent shrink-0" />
                                <span><span className="font-bold text-accent">{member.publications || 0}</span> Publications</span>
                              </div>

                              <div className="flex items-center gap-2 text-xs">
                                <Users className="w-4 h-4 text-accent shrink-0" />
                                <span>Mentors <span className="font-bold text-accent">{member.students || 0}</span> Students</span>
                              </div>

                              <div className="flex items-center gap-2 text-xs">
                                <Code2 className="w-4 h-4 text-accent shrink-0" />
                                <span><span className="font-bold text-accent">{member.researchAreas?.length || 0}</span> Research Areas</span>
                              </div>
                            </div>

                            {/* Research Focus */}
                            <div>
                              <p className="text-xs font-bold text-accent mb-2">Research Focus:</p>
                              <div className="flex flex-wrap gap-1">
                                {member.researchAreas?.slice(0, 2).map((area, i) => (
                                  <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">{area}</span>
                                ))}
                                {member.researchAreas && member.researchAreas.length > 2 && (
                                  <span className="text-xs bg-accent/10 text-accent/70 px-2 py-1 rounded">
                                    +{member.researchAreas.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Read More Button */}
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedFaculty(member._id)
                              }}
                              className="w-full px-3 py-2 bg-gradient-to-r from-primary to-accent text-white text-xs font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              Quick View <ExternalLink className="w-3 h-3" />
                            </button>

                          </div>
                        </div>
                      </div>

                      {/* Accent Line */}
                      <div className={`h-1 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500 ${hoveredId === member._id ? "opacity-100 scale-x-100" : "opacity-50 scale-x-75"
                        }`} />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col grow">

                      {/* Name */}
                      <div className="mb-2 text-center">
                        <h3
                          className={`text-2xl font-bold transition-all duration-500 ${hoveredId === member._id
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary"
                            : "text-foreground"
                            }`}
                        >
                          {member.name}
                        </h3>
                      </div>

                      {/* Title */}
                      <div className="text-center mb-3">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${hoveredId === member._id
                          ? "bg-accent/30 text-accent border border-accent/50"
                          : "bg-accent/10 text-accent border border-accent/20"
                          }`}>
                          {member.title}
                        </span>
                      </div>

                      {/* Specialization */}
                      <p className="text-foreground/70 text-sm text-center mb-4 italic leading-relaxed">
                        {member.specialization}
                      </p>

                      {/* Achievements */}
                      <div
                        className={`relative p-4 rounded-2xl border transition-all duration-500 overflow-hidden group/badge ${hoveredId === member._id
                          ? "bg-accent/25 border-accent/60 shadow-lg shadow-accent/30"
                          : "bg-accent/8 border-accent/20"
                          }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 animate-shimmer" />

                        <div className="relative flex items-start gap-3">
                          <div className={`transition-transform duration-500 flex-shrink-0 ${hoveredId === member._id ? "animate-bounce scale-110" : "scale-100"
                            }`}>
                            <Award className="w-5 h-5 text-accent" />
                          </div>
                          <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                            {member.achievements || "No achievements listed"}
                          </p>
                        </div>
                      </div>

                      {/* Email + Details Buttons */}
                      <div className="flex gap-2 pt-6 mt-auto">

                        {/* Email */}
                        <a
                          href={`mailto:${member.email}`}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 ${hoveredId === member._id
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                            : "bg-accent/10 text-accent hover:bg-accent/20"
                            }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Mail className="w-4 h-4" />
                          <span>Email</span>
                        </a>

                        {/* Details Route - CHANGED: Use context and fixed page */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            // Save full faculty object into global context
                            setSelected(member);
                            // Navigate to the fixed details page
                            router.push("/faculty/facultyinfo");
                          }}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 ${hoveredId === member._id
                            ? "bg-gradient-to-r from-accent to-primary text-white shadow-lg scale-105"
                            : "bg-accent/10 text-accent hover:bg-accent/20"
                            }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Details</span>
                        </button>

                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="bg-card rounded-3xl border border-border/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 bg-gradient-to-b from-muted to-muted/50 overflow-hidden">

              <img
                src={
                  faculty.find((f) => f._id === selectedFaculty)?.image ||
                  "/placeholder.svg"
                }
                alt="Faculty"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all"
              >
                <X className="w-5 h-5 text-white" />
              </button>

            </div>

            {/* Modal Content */}
            <div className="p-8">
              {(() => {
                const member = faculty.find((f) => f._id === selectedFaculty)

                if (!member) return null

                return (
                  <>
                    {/* Name + Title */}
                    <div className="mb-8">
                      <h1 className="text-4xl font-bold">{member.name}</h1>
                      <p className="text-lg text-accent font-semibold mb-3">{member.title}</p>
                      <p className="text-foreground/70">{member.bio || "No bio available"}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-accent">{member.publications || 0}</p>
                        <p className="text-xs">Publications</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-accent">{member.students || 0}</p>
                        <p className="text-xs">Students Mentored</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold text-accent">{member.qualifications?.length || 0}</p>
                        <p className="text-xs">Qualifications</p>
                      </div>
                    </div>

                    {/* Research Areas */}
                    {member.researchAreas && member.researchAreas.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-accent" />
                          Research Areas
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {member.researchAreas.map((area, i) => (
                            <div key={i} className="p-3 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50">
                              <p className="text-sm font-medium text-accent">{area}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Projects */}
                    {member.currentProjects && member.currentProjects.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-accent" />
                          Current Projects
                        </h3>
                        <div className="space-y-3">
                          {member.currentProjects.map((project, i) => (
                            <div key={i} className="p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all">
                              <div className="flex items-start justify-between">
                                <p className="font-medium">{project.name}</p>
                                <span
                                  className={`text-xs px-3 py-1 rounded-full font-bold ${project.status === "Ongoing"
                                    ? "bg-green-500/20 text-green-600"
                                    : project.status === "In Review"
                                      ? "bg-yellow-500/20 text-yellow-600"
                                      : "bg-blue-500/20 text-blue-600"
                                    }`}
                                >
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Qualifications */}
                    {member.qualifications && member.qualifications.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-accent" />
                          Qualifications
                        </h3>
                        <div className="space-y-2">
                          {member.qualifications.map((qual, i) => (
                            <div key={i} className="flex items-center gap-3 p-2">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <p>{qual}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact */}
                    <div className="flex gap-4 pt-8 border-t border-border">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-bold text-center hover:opacity-90 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-5 h-5 inline-block mr-2" />
                        Send Email
                      </a>

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-3 border-2 border-accent text-accent rounded-lg font-bold text-center hover:bg-accent/10 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin className="w-5 h-5 inline-block mr-2" />
                          LinkedIn
                        </a>
                      )}
                    </div>

                    {/* Full Profile Button - FIXED: Using slug */}
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          setSelectedFaculty(null);
                          const slug = member.slug || generateSlug(member.name);
                          router.push(`/faculty/${slug}`);
                        }}
                        className="w-full px-4 py-3 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/10 transition-colors"
                      >
                        View Full Profile
                      </button>
                    </div>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Faculty Excellence Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Faculty Excellence</h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Our faculty is committed to continuous learning and research excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 bg-card rounded-xl border hover:border-accent/50 transition-all">
              <BookOpen className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Research & Publication</h3>
              <p className="text-sm text-foreground/60">
                Active contributors to peer-reviewed journals and conferences
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl border hover:border-accent/50 transition-all">
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Industry Experience</h3>
              <p className="text-sm text-foreground/60">
                Faculty bring decades of hands-on industry leadership
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl border hover:border-accent/50 transition-all">
              <Linkedin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Mentorship & Guidance</h3>
              <p className="text-sm text-foreground/60">
                Personalized mentorship to help students grow professionally
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
