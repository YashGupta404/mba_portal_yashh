"use client"

import { useRouter } from "next/navigation"
import { Mail, Linkedin, Award, BookOpen, Star, Sparkles, X, ExternalLink, Code2, BarChart3, Users } from "lucide-react"
import { useState } from "react"

export default function FacultyPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [selectedFaculty, setSelectedFaculty] = useState<number | null>(null)

  const router = useRouter()


  const faculty = [
    {
      id: 1,
      name: "Dr. Arjun Mishra",
      title: "Dean & Professor of Strategy",
      specialization: "Strategic Management, Corporate Governance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      achievements: "15+ years in academia and industry",
      email: "arjun@iemcollege.edu",
      bio: "Dr. Arjun Mishra is an accomplished academic leader with extensive experience in strategic management and corporate governance. He has guided the institution through multiple transformative initiatives.",
      researchAreas: ["Strategic Management", "Corporate Governance", "Organizational Behavior", "Business Policy"],
      currentProjects: [
        { name: "Digital Transformation in SMEs", status: "Ongoing" },
        { name: "Sustainable Business Models", status: "Ongoing" },
        { name: "Global Supply Chain Resilience", status: "In Review" },
      ],
      publications: 45,
      students: 120,
      qualifications: ["Ph.D. in Management", "M.B.A., IIM Ahmedabad", "B.Com"],
      linkedin: "https://linkedin.com",
    },
    {
      id: 2,
      name: "Prof. Meera Sharma",
      title: "Associate Dean & Finance Expert",
      specialization: "Corporate Finance, Investment Banking",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      achievements: "Published 40+ research papers",
      email: "meera@iemcollege.edu",
      bio: "Prof. Meera Sharma is a leading finance expert with deep knowledge in corporate finance and investment banking. Her research has influenced industry practices.",
      researchAreas: ["Corporate Finance", "Investment Banking", "Financial Markets", "Risk Management"],
      currentProjects: [
        { name: "AI in Portfolio Management", status: "Ongoing" },
        { name: "Climate Finance Mechanisms", status: "Ongoing" },
        { name: "Fintech Innovations", status: "In Review" },
      ],
      publications: 47,
      students: 150,
      qualifications: ["Ph.D. in Finance", "M.B.A., XLRI", "B.Sc. Economics"],
      linkedin: "https://linkedin.com",
    },
    {
      id: 3,
      name: "Prof. Rajesh Kumar",
      title: "Operations Management Lead",
      specialization: "Supply Chain, Operations Excellence",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
      achievements: "Certified consultant for Fortune 500 companies",
      email: "rajesh@iemcollege.edu",
      bio: "Prof. Rajesh Kumar brings real-world operational expertise from leading Fortune 500 companies. His consulting work shapes curriculum and research initiatives.",
      researchAreas: ["Supply Chain Management", "Operations Excellence", "Lean Manufacturing", "Process Optimization"],
      currentProjects: [
        { name: "Smart Manufacturing Ecosystems", status: "Ongoing" },
        { name: "Circular Economy Models", status: "Ongoing" },
        { name: "Last-Mile Delivery Optimization", status: "Completed" },
      ],
      publications: 38,
      students: 95,
      qualifications: ["Ph.D. in Operations", "M.Tech Operations Management", "B.Tech Industrial Engineering"],
      linkedin: "https://linkedin.com",
    },
    {
      id: 4,
      name: "Dr. Priya Singh",
      title: "Marketing & Innovation Specialist",
      specialization: "Digital Marketing, Brand Management",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      achievements: "TEDx Speaker, Marketing Thought Leader",
      email: "priya@iemcollege.edu",
      bio: "Dr. Priya Singh is a dynamic thought leader in digital marketing and brand innovation. Her TEDx talks have inspired thousands globally.",
      researchAreas: ["Digital Marketing", "Brand Management", "Consumer Psychology", "Marketing Analytics"],
      currentProjects: [
        { name: "Neuromarketing Research Lab", status: "Ongoing" },
        { name: "Social Media Impact Analysis", status: "Ongoing" },
        { name: "Brand Equity Measurement Framework", status: "In Review" },
      ],
      publications: 52,
      students: 140,
      qualifications: ["Ph.D. in Marketing", "M.B.A., ISB", "B.Sc. Psychology"],
      linkedin: "https://linkedin.com",
    },
    {
      id: 5,
      name: "Prof. Vikram Patel",
      title: "Entrepreneurship & Innovation",
      specialization: "Startup Ecosystem, Business Incubation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      achievements: "5 successful startup exits",
      email: "vikram@iemcollege.edu",
      bio: "Prof. Vikram Patel is an accomplished entrepreneur with 5 successful startup exits. He mentors the next generation of innovators and builders.",
      researchAreas: ["Entrepreneurship", "Innovation Management", "Startup Ecosystems", "Business Model Innovation"],
      currentProjects: [
        { name: "Startup Incubation Hub", status: "Ongoing" },
        { name: "Venture Capital Landscape Study", status: "Ongoing" },
        { name: "Women Entrepreneurship Initiative", status: "Ongoing" },
      ],
      publications: 28,
      students: 110,
      qualifications: ["MBA from Stanford GSB", "B.Tech IT", "Certified Venture Advisor"],
      linkedin: "https://linkedin.com",
    },
    {
      id: 6,
      name: "Dr. Ananya Desai",
      title: "Technology & Analytics Lead",
      specialization: "AI, Big Data, Digital Transformation",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
      achievements: "AI research published in top journals",
      email: "ananya@iemcollege.edu",
      bio: "Dr. Ananya Desai is a pioneering researcher in AI and big data analytics. Her work has been published in top-tier international journals.",
      researchAreas: ["Artificial Intelligence", "Big Data Analytics", "Digital Transformation", "Machine Learning"],
      currentProjects: [
        { name: "AI for Business Intelligence", status: "Ongoing" },
        { name: "Predictive Analytics Framework", status: "Ongoing" },
        { name: "Data Ethics Guidelines", status: "In Review" },
      ],
      publications: 56,
      students: 165,
      qualifications: ["Ph.D. in Computer Science", "M.Tech AI & ML", "B.Tech Computer Science"],
      linkedin: "https://linkedin.com",
    },
  ]

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-slide-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Faculty</h1>
            <p className="text-lg opacity-90">
              Meet the world-class educators and mentors who bring industry expertise and academic rigor to every
              classroom. Our faculty combines decades of experience with innovative teaching methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((member, idx) => (
              <div
                key={member.id}
                className="group relative animate-slide-in-up h-full cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
              >
                {/* Premium Glow Border */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                    hoveredId === member.id ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 50%, hsl(var(--primary)) 100%)`,
                  }}
                />

                {/* Main Card Container */}
                <div
                  className={`relative h-full transition-all duration-500 transform ${
                    expandedId === member.id ? "scale-105" : "scale-100"
                  }`}
                >
                  {/* Card Background */}
                  <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
                    {/* Profile Image Section - Enhanced with Swipe Effect */}
                    <div className="relative overflow-hidden bg-linear-to-b from-muted via-muted/70 to-muted/50">
                      {/* Large Profile Picture Container with Swipe Effect */}
                      <div className="relative w-full pt-8 pb-6 px-4 flex justify-center h-72 overflow-hidden">
                        {/* Image Section - Stays Visible, Moves Left */}
                        <div
                          className={`absolute inset-4 transition-all duration-500 ease-out ${
                            hoveredId === member.id ? "-translate-x-20 opacity-100" : "translate-x-0 opacity-100"
                          }`}
                        >
                          <div className={`relative transition-all duration-500 h-full flex items-center justify-center ${
                            hoveredId === member.id ? "scale-110" : "scale-100"
                          }`}>
                            {/* Outer Glow Ring */}
                            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary/20 to-accent/20 blur-lg animate-pulse" />

                            {/* Image Container */}
                            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl">
                              <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-700 ${
                                  hoveredId === member.id ? "scale-120 brightness-125" : "scale-100 brightness-100"
                                }`}
                              />

                              {/* Overlay on Hover */}
                              <div
                                className={`absolute inset-0 transition-all duration-500 ${
                                  hoveredId === member.id
                                    ? "bg-linear-to-t from-primary/40 via-transparent to-transparent"
                                    : "bg-transparent"
                                }`}
                              />
                            </div>

                            {/* Status Badge */}
                            <div className="absolute -bottom-2 right-0 bg-accent text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                              ⭐ Featured
                            </div>
                          </div>
                        </div>

                        {/* Details Panel - Slides in from Right on Hover */}
                        <div
                          className={`absolute inset-4 right-auto left-32 transition-all duration-500 ease-out ${
                            hoveredId === member.id ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                          }`}
                        >
                          <div className="h-full flex flex-col justify-between p-4 bg-linear-to-b from-primary/10 to-accent/5 rounded-2xl border border-accent/20 backdrop-blur-sm overflow-y-auto">
                            {/* Quick Stats */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-2 text-xs">
                                <BarChart3 className="w-4 h-4 text-accent shrink-0" />
                                <span className="text-foreground/70"><span className="font-bold text-accent">{member.publications}</span> Publications</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Users className="w-4 h-4 text-accent shrink-0" />
                                <span className="text-foreground/70">Mentors <span className="font-bold text-accent">{member.students}</span> Students</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Code2 className="w-4 h-4 text-accent shrink-0" />
                                <span className="text-foreground/70"><span className="font-bold text-accent">{member.researchAreas.length}</span> Research Areas</span>
                              </div>
                            </div>

                            {/* Research Areas Preview */}
                            <div>
                              <p className="text-xs font-bold text-accent mb-2">Research Focus:</p>
                              <div className="flex flex-wrap gap-1">
                                {member.researchAreas.slice(0, 2).map((area, i) => (
                                  <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                                    {area}
                                  </span>
                                ))}
                                {member.researchAreas.length > 2 && (
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
                                setSelectedFaculty(member.id)
                              }}
                              className="w-full px-3 py-2 bg-linear-to-r from-primary to-accent text-white text-xs font-bold rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                              Read More <ExternalLink className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Animated Accent Line */}
                      <div className={`h-1 bg-linear-to-r from-transparent via-accent to-transparent transition-all duration-500 ${
                        hoveredId === member.id ? "opacity-100 scale-x-100" : "opacity-50 scale-x-75"
                      }`} />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col grow">
                      {/* Name with gradient effect */}
                      <div className="mb-2 text-center">
                        <h3
                          className={`text-2xl font-bold transition-all duration-500 ${
                            hoveredId === member.id
                              ? "text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-primary"
                              : "text-foreground"
                          }`}
                        >
                          {member.name}
                        </h3>
                      </div>

                      {/* Title Badge */}
                      <div className="text-center mb-3">
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                          hoveredId === member.id
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

                      {/* Achievement Badge with Interactive Effects */}
                      <div
                        className={`relative p-4 rounded-2xl border transition-all duration-500 overflow-hidden group/badge ${
                          hoveredId === member.id
                            ? "bg-accent/25 border-accent/60 shadow-lg shadow-accent/30"
                            : "bg-accent/8 border-accent/20"
                        }`}
                      >
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover/badge:opacity-100 transition-opacity duration-500 animate-shimmer" />

                        <div className="relative flex items-start gap-3">
                          <div className={`transition-transform duration-500 flex-shrink-0 ${
                            hoveredId === member.id ? "animate-bounce scale-110" : "scale-100"
                          }`}>
                            <Award className="w-5 h-5 text-accent" />
                          </div>
                          <p className="text-xs text-foreground/80 font-medium leading-relaxed">{member.achievements}</p>
                        </div>
                      </div>

                      {/* Contact Links with Enhanced Buttons */}
                      <div className="flex gap-2 pt-6 mt-auto">
                        <a
                          href={`mailto:${member.email}`}
                          className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 overflow-hidden relative group/btn ${
                            hoveredId === member.id
                              ? "bg-linear-to-r from-primary to-accent text-white shadow-lg shadow-primary/50 scale-105"
                              : "bg-accent/10 text-accent hover:bg-accent/20"
                          }`}
                        >
                          <Mail className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
                          <span>Email</span>
                        </a>
                        <button
  onClick={(e) => {
    e.stopPropagation()
    router.push(
  `/faculty/faculty_info_blueprint/${member.name
    .toLowerCase()
    .replace(/^dr\.\s*|^prof\.\s*/g, "")
    .replace(/\s+/g, "_")}`
)


  }}
  className={`flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl font-medium text-xs transition-all duration-500 overflow-hidden relative group/btn ${
    hoveredId === member.id
      ? "bg-linear-to-r from-accent to-primary text-white shadow-lg shadow-accent/50 scale-105"
      : "bg-accent/10 text-accent hover:bg-accent/20"
  }`}
>
  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:rotate-12" />
  <span>Details</span>
</button>

                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Details Modal */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="bg-card rounded-3xl border border-border/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-pop"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Background Image */}
            <div className="relative h-64 bg-linear-to-b from-muted to-muted/50 overflow-hidden">
              {selectedFaculty && (
                <>
                  <img
                    src={faculty.find((f) => f.id === selectedFaculty)?.image || "/placeholder.svg"}
                    alt="Faculty"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/60" />

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </>
              )}
            </div>

            {/* Content */}
            {selectedFaculty && (
              <div className="p-8">
                {(() => {
                  const member = faculty.find((f) => f.id === selectedFaculty)
                  return (
                    <>
                      {/* Title Section */}
                      <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-2">{member?.name}</h1>
                        <p className="text-lg text-accent font-semibold mb-3">{member?.title}</p>
                        <p className="text-foreground/70">{member?.bio}</p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-accent">{member?.publications}</p>
                          <p className="text-xs text-foreground/70">Publications</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-accent">{member?.students}</p>
                          <p className="text-xs text-foreground/70">Students Mentored</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-accent">{member?.qualifications.length}</p>
                          <p className="text-xs text-foreground/70">Qualifications</p>
                        </div>
                      </div>

                      {/* Research Areas */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <Code2 className="w-5 h-5 text-accent" />
                          Research Areas
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                          {member?.researchAreas.map((area, i) => (
                            <div key={i} className="p-3 bg-accent/10 rounded-lg border border-accent/20 hover:border-accent/50 transition-all">
                              <p className="text-sm font-medium text-accent">{area}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Current Projects */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-accent" />
                          Current Projects
                        </h3>
                        <div className="space-y-3">
                          {member?.currentProjects.map((project, i) => (
                            <div key={i} className="p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-all group cursor-pointer">
                              <div className="flex items-start justify-between">
                                <p className="font-medium text-foreground group-hover:text-accent transition-colors">{project.name}</p>
                                <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                                  project.status === "Ongoing"
                                    ? "bg-green-500/20 text-green-600"
                                    : project.status === "In Review"
                                    ? "bg-yellow-500/20 text-yellow-600"
                                    : "bg-blue-500/20 text-blue-600"
                                }`}>
                                  {project.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Qualifications */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-accent" />
                          Qualifications
                        </h3>
                        <div className="space-y-2">
                          {member?.qualifications.map((qual, i) => (
                            <div key={i} className="flex items-center gap-3 p-2">
                              <div className="w-2 h-2 bg-accent rounded-full" />
                              <p className="text-foreground/80">{qual}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact Section */}
                      <div className="flex gap-4 pt-8 border-t border-border">
                        <a
                          href={`mailto:${member?.email}`}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-primary to-accent text-white rounded-lg font-bold hover:opacity-90 transition-all"
                        >
                          <Mail className="w-5 h-5" />
                          Send Email
                        </a>
                        <a
                          href={member?.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border-2 border-accent text-accent rounded-lg font-bold hover:bg-accent/10 transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                          LinkedIn
                        </a>
                      </div>
                    </>
                  )
                })()}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Faculty Excellence */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">Faculty Excellence</h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Our faculty is committed to continuous learning and research excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up">
              <BookOpen className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2 text-foreground">Research & Publication</h3>
              <p className="text-foreground/60 text-sm">
                Active contributors to peer-reviewed journals and industry publications globally
              </p>
            </div>
            <div
              className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "100ms" }}
            >
              <Award className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2 text-foreground">Industry Experience</h3>
              <p className="text-foreground/60 text-sm">
                Bring real-world expertise and practical insights from leading global organizations
              </p>
            </div>
            <div
              className="p-8 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <Linkedin className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2 text-foreground">Mentorship & Guidance</h3>
              <p className="text-foreground/60 text-sm">
                Dedicated mentors invested in student success and career development
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
