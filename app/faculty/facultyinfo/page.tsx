"use client";

import { useRouter } from "next/navigation";
import { Mail, Linkedin, BookOpen, Code2, BarChart3, X } from "lucide-react";
import { useFaculty } from "@/app/context/FacultyContext";

export default function FacultyInfoPage() {
  const router = useRouter();
  const { selected, setSelected } = useFaculty();

  // If user reloads /facultyinfo directly
  if (!selected) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8 bg-background">
        <div className="max-w-xl bg-card p-8 rounded-3xl border border-border/50 text-center">
          <h2 className="text-2xl font-bold">No Faculty Selected</h2>
          <p className="text-foreground/60 mt-2">
            Please go back and click <strong>Details</strong> on a faculty card.
          </p>

          <button
            onClick={() => router.push("/faculty")}
            className="mt-6 px-6 py-3 bg-primary text-white rounded-xl"
          >
            Back to Faculty Page
          </button>
        </div>
      </main>
    );
  }

  const member = selected;

  return (
    <main className="min-h-screen bg-muted/10 p-8">
      <div className="max-w-5xl mx-auto bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden">
        
        {/* HEADER IMAGE */}
        <div className="relative h-72">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

          {/* Back Button */}
          <button
            onClick={() => {
              setSelected(null);
              router.push("/faculty");
            }}
            className="absolute top-6 left-6 p-3 bg-white/20 rounded-full backdrop-blur-md hover:bg-white/40 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="p-10">

          {/* NAME + TITLE */}
          <h1 className="text-4xl font-bold">{member.name}</h1>
          <p className="text-accent font-semibold text-lg mt-2">{member.title}</p>
          <p className="text-foreground/60 italic mt-1">{member.specialization}</p>

          {/* BIO */}
          <p className="mt-5 text-foreground/80 leading-relaxed">
            {member.bio || "No biography available."}
          </p>

          {/* CONTACT BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href={`mailto:${member.email}`}
              className="px-5 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold"
            >
              <Mail className="inline-block w-5 h-5 mr-2" />
              Email
            </a>

            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border-2 border-accent text-accent rounded-xl font-bold hover:bg-accent/10"
              >
                <Linkedin className="inline-block w-5 h-5 mr-2" />
                LinkedIn
              </a>
            )}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 p-6 mt-10 bg-accent/10 border border-accent/20 rounded-2xl">
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">{member.publications}</p>
              <p className="text-xs text-foreground/60">Publications</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-accent">{member.students}</p>
              <p className="text-xs text-foreground/60">Students Mentored</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-accent">{member.qualifications?.length}</p>
              <p className="text-xs text-foreground/60">Qualifications</p>
            </div>
          </div>

          {/* RESEARCH AREAS */}
          {member.researchAreas?.length > 0 && (
            <section className="mt-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Code2 className="w-5 h-5 text-accent" /> Research Areas
              </h3>
              <div className="flex flex-wrap gap-3 mt-4">
                {member.researchAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-accent/20 text-accent rounded-xl text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* PROJECTS */}
          {member.currentProjects?.length > 0 && (
            <section className="mt-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-accent" /> Current Projects
              </h3>

              <div className="mt-4 space-y-4">
                {member.currentProjects.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-card border border-border rounded-xl hover:border-accent transition"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{p.name}</p>
                      <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                        p.status === "Ongoing"
                          ? "bg-green-500/20 text-green-600"
                          : p.status === "In Review"
                          ? "bg-yellow-500/20 text-yellow-600"
                          : "bg-blue-500/20 text-blue-600"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* QUALIFICATIONS */}
          {member.qualifications?.length > 0 && (
            <section className="mt-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" /> Qualifications
              </h3>

              <ul className="mt-4 space-y-2">
                {member.qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}
