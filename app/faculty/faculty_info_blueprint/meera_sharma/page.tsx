"use client"

import { Linkedin } from "lucide-react"
import "./faculty.css"

export default function FacultyPage() {
  const faculty = {
  name: "Prof. Meera Sharma",
  designation: "Associate Dean & Finance Expert",
  department: "Department of Finance",
  email: "meera@iemcollege.edu",
  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",

  summary: "Finance researcher with strong background in corporate finance and banking analytics.",

  experience: [
    {
      role: "Associate Dean",
      institute: "IEM College",
      duration: "2020 - Present",
      location: "Kolkata",
    },
    {
      role: "Senior Analyst",
      institute: "HDFC Bank",
      duration: "2015 - 2020",
      location: "Mumbai",
    },
  ],

  education: [
    { degree: "Ph.D. in Finance", institute: "XLRI", year: "2014" },
    { degree: "MBA", institute: "XLRI", year: "2010" },
    { degree: "B.Sc Economics", institute: "Delhi University", year: "2008" },
  ],

  researchAreas: ["Corporate Finance", "Investment Banking", "Risk Analysis"],

  mentorship: {
    phd: 5,
    masters: 18,
  },

  publications: [
    "AI in Banking",
    "Risk Analytics",
    "Financial Derivatives",
  ],

  students: 150,
  linkedin: "https://linkedin.com",
}


  return (
    <main className="faculty-container">

      {/* Header */}
      <section className="faculty-header">
        <img src={faculty.photo} className="profile-pic" />

        <div className="profile-info">
          <h1>{faculty.name}</h1>
          <h2>{faculty.designation}</h2>
          <p>{faculty.department}</p>

          <div className="profile-buttons">
            <a href={`mailto:${faculty.email}`} className="email-btn">
              {faculty.email}
            </a>

            <a href={faculty.linkedin} target="_blank" className="linkedin-btn">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-box">
        <h3>Summary</h3>
        <div className="divider"></div>
        <p>{faculty.summary}</p>
      </section>

      {/* Experience */}
      <section className="section-box">
        <h3>Experience</h3>
        <div className="divider"></div>

        <div className="experience-list">
          {faculty.experience.map((exp, i) => (
            <div key={i} className="experience-card">
              <h4>{exp.role}</h4>
              <p className="company">{exp.institute}</p>
              <p className="meta">
                {exp.duration} | {exp.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-box">
        <h3>Education</h3>
        <div className="divider"></div>

        <div className="education-list">
          {faculty.education.map((edu, i) => (
            <div key={i} className="education-card">
              <h4>{edu.degree}</h4>
              <p>{edu.institute}</p>
              <span>{edu.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Area of Interest */}
      <section className="section-box">
        <h3>Area of Interest</h3>
        <div className="divider"></div>

        <div className="tags">
          {faculty.researchAreas.map((area, i) => (
            <span key={i}>{area}</span>
          ))}
        </div>
      </section>

      {/* Mentorship */}
      <section className="section-box">
        <h3>Mentorship</h3>
        <div className="divider"></div>

        <div className="mentorship-grid">
          <div className="mentorship-card">
            <strong>{faculty.mentorship.phd}</strong>
            <p>Ph.D. Students</p>
          </div>

          <div className="mentorship-card">
            <strong>{faculty.mentorship.masters}</strong>
            <p>Master's Students</p>
          </div>

          <div className="mentorship-card">
            <strong>{faculty.students}</strong>
            <p>Total Students Mentored</p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-box">
        <h3>Publications</h3>
        <div className="divider"></div>

        <ul className="publication-list">
          {faculty.publications.map((pub, i) => (
            <li key={i}>{pub}</li>
          ))}
        </ul>
      </section>

    </main>
  )
}
