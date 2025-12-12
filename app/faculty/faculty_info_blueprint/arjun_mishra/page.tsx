"use client"

import { Linkedin } from "lucide-react"
import "./faculty.css"

export default function FacultyPage() {
  const faculty = {
    name: "Dr. Arjun Mishra",
    designation: "Dean & Professor of Strategy",
    department: "Department of Management Studies",
    email: "arjun.mishra@iemcollege.edu",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",

    summary:
      "Dr. Arjun Mishra is a senior academic leader with deep expertise in strategic management and corporate governance. His research focuses on ethical leadership and sustainable business practices.",

    experience: [
      {
        role: "Dean & Professor",
        institute: "IEM College",
        duration: "2020 - Present",
        location: "Kolkata",
      },
      {
        role: "Visiting Professor",
        institute: "Harvard Business School",
        duration: "2018 - 2019",
        location: "Boston, USA",
      },
      {
        role: "Senior Consultant",
        institute: "McKinsey & Company",
        duration: "2012 - 2018",
        location: "Mumbai",
      },
      {
        role: "Associate Professor",
        institute: "IIM Bangalore",
        duration: "2008 - 2012",
        location: "Bangalore",
      },
    ],

    education: [
      { degree: "Ph.D. in Strategic Management", institute: "IIM Ahmedabad", year: "2008" },
      { degree: "MBA in Finance & Strategy", institute: "ISB Hyderabad", year: "2004" },
      { degree: "B.Tech in Computer Science", institute: "IIT Delhi", year: "2002" },
    ],

    researchAreas: [
      "Corporate Strategy",
      "Strategic Leadership",
      "Mergers & Acquisitions",
      "Sustainable Business",
    ],

    mentorship: {
      phd: 8,
      masters: 24,
    },

    publications: [
      "Corporate Governance Models",
      "Strategic Leadership in India",
      "Business Policy Frameworks",
    ],

    students: 120,
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
