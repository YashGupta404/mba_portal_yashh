# 🎯 MAIN WEBSITE PROMPT - Dynamic Programs Pages

## What I Need

Update the **main MBA website** to fetch ALL program data from the database instead of using hardcoded values. This includes:
- Programs listing page (`/programs`)
- Individual program detail pages (`/programs/fulltime`, `/programs/executive`, `/programs/online`)

---

## Current Setup

- **Main Website:** Running at `localhost:3000` (Next.js)
- **Backend API:** Running at `localhost:5000`
- **Current State:** All data is hardcoded in the components

---

## API Endpoints to Use

```
GET /api/programs?isActive=true
→ Returns all active programs

GET /api/programs/program/:programId
→ Returns single program by programId (e.g., 'mba-fulltime')

GET /api/courses?programId=xxx&status=Published
→ Returns published courses for a program
```

---

## TASK 1: Update Programs Listing Page

**File:** `app/programs/page.tsx`

### Current Code (Hardcoded):
```typescript
"use client"

export default function ProgramsPage() {
  return (
    <main>
      {/* Full-Time Program - HARDCODED */}
      <section>
        <h2>MBA Full-Time</h2>
        <p>Our flagship 2-year immersive MBA program...</p>
        <ul>
          {["Global curriculum...", "Live projects..."].map(...)}
        </ul>
        <div>
          <Clock /> Duration: 2 Years
          <Users /> Intake: 180 Students
          <Award /> Avg Package: ₹18 LPA
        </div>
      </section>
      
      {/* Executive Program - HARDCODED */}
      <section>...</section>
      
      {/* Online Program - HARDCODED */}
      <section>...</section>
    </main>
  );
}
```

### Required Changes:

1. **Convert to Server Component** (remove "use client")
2. **Fetch programs from API**
3. **Map over programs array** instead of hardcoded sections
4. **Keep the same design** (alternating layout, same colors, same animations)

### New Code Structure:
```typescript
// Remove "use client"

async function getPrograms() {
  const res = await fetch('http://localhost:5000/api/programs?isActive=true', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch programs');
  const { data } = await res.json();
  return data;
}

export default async function ProgramsPage() {
  const programs = await getPrograms();
  
  return (
    <main className="overflow-hidden">
      {/* Hero Section - Keep as is */}
      <section className="py-16 lg:py-24 bg-black/70 relative text-primary-foreground">
        <Videoanimation videos={videos}/>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Our MBA Programs</h1>
          <p>Choose from our diverse MBA offerings...</p>
        </div>
      </section>

      {/* Dynamic Program Sections */}
      {programs.map((program, index) => (
        <section 
          key={program._id}
          className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              
              {/* Text Content */}
              <div className={`animate-slide-in-up ${index % 2 === 1 ? 'order-1 lg:order-2' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                  {program.name}
                </h2>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {program.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                    Apply Now
                  </button>
                  <button
                    onClick={() => router.push(`/programs/${program.programId}`)}
                    className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Stats Cards */}
              <div className={`grid grid-cols-2 gap-4 animate-fade-in ${
                index % 2 === 1 ? 'order-2 lg:order-1' : ''
              }`}>
                {[
                  { icon: Clock, label: "Duration", value: program.duration.value },
                  { icon: Users, label: "Intake", value: `${program.intake.value} ${program.intake.label}` },
                  { icon: Award, label: "Avg Package", value: program.avgPackage.value },
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 text-center"
                    >
                      <Icon className="w-8 h-8 text-accent mx-auto mb-2" />
                      <p className="text-foreground/60 text-sm mb-1">{stat.label}</p>
                      <p className="font-bold text-foreground">{stat.value}</p>
                    </div>
                  );
                })}
              </div>
              
            </div>
          </div>
        </section>
      ))}

      {/* Specializations Section - Keep as is or make dynamic */}
      <section className="py-16 lg:py-24 bg-muted/50">
        {/* ... */}
      </section>

      {/* CTA Section - Keep as is */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        {/* ... */}
      </section>
    </main>
  );
}
```

### Key Points:
- **Alternating layout:** Use `index % 2` to alternate background colors and text/stats order
- **Dynamic features:** Map over `program.features` array
- **Dynamic stats:** Use `program.duration.value`, `program.intake.value`, etc.
- **Link to detail page:** Use `program.programId` for the URL

---

## TASK 2: Update Program Detail Page

**File:** `app/programs/[id]/page.tsx`

### Current Code (Hardcoded):
```typescript
"use client"

const programs = {
  fulltime: {
    name: "MBA Full-Time",
    duration: "2 Years",
    intake: "180 Students",
    avgPackage: "₹18 LPA",
    eligibility: ["Bachelor's degree...", "Valid CAT/MAT..."],
    applicationProcess: ["Submit online...", "Upload academic..."],
    specializations: ["Finance & Strategy", "Marketing..."],
    syllabus: ["Principles of Management", "Managerial Economics", ...]
  },
  // ... more hardcoded programs
};

export default function ProgramDetailsPage() {
  const { id } = useParams();
  const program = programs[id];
  
  return (
    <main>
      <h1>{program.name}</h1>
      {/* ... hardcoded data */}
    </main>
  );
}
```

### Required Changes:

1. **Keep as Client Component** (needs useParams)
2. **Fetch program data from API**
3. **Fetch courses from API** (for course structure)
4. **Replace hardcoded syllabus** with actual courses
5. **Use dynamic eligibility, admission process, specializations**

### New Code Structure:
```typescript
"use client"

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Clock, Users, Award, CheckCircle, BookOpen, FolderOpen, Download } from "lucide-react";

export default function ProgramDetailsPage() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch program details
        const programRes = await fetch(`http://localhost:5000/api/programs/program/${id}`);
        const programData = await programRes.json();
        setProgram(programData.data);

        // Fetch courses for this program
        const coursesRes = await fetch(`http://localhost:5000/api/courses?programId=${id}&status=Published`);
        const coursesData = await coursesRes.json();
        setCourses(coursesData.data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!program) {
    return <div className="h-screen flex items-center justify-center text-2xl text-red-600">Program Not Found</div>;
  }

  return (
    <main className="py-16 px-6 max-w-5xl mx-auto">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-2">{program.name}</h1>
      <p className="text-accent font-semibold text-lg mb-8">Program Overview</p>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-12">
        {[
          { icon: Clock, label: "Duration", value: program.duration.value },
          { icon: Users, label: "Intake", value: `${program.intake.value} ${program.intake.label}` },
          { icon: Award, label: "Department Avg Package", value: program.avgPackage.value },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-card rounded-xl border text-center transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-accent"
          >
            <item.icon className="w-8 h-8 text-accent mx-auto mb-2" />
            <p className="font-bold">{item.value}</p>
            <p className="text-xs text-foreground/60">{item.label}</p>
          </div>
        ))}
      </div>

      {/* COURSE STRUCTURE - Use actual courses from database */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-accent" />
          Course Structure (Syllabus)
        </h2>

        <ul className="space-y-2">
          {courses.map((course, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <div>
                <p className="font-semibold">
                  {course.courseCode} - {course.courseName}
                </p>
                <p className="text-sm text-muted-foreground">
                  {course.department} • {course.level} • {course.credits} Credits
                </p>
              </div>
            </li>
          ))}
        </ul>

        <button className="mt-6 px-5 py-3 bg-accent text-white rounded-lg flex items-center gap-2 hover:bg-accent/80 transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5" />
          Download Syllabus
        </button>
      </section>

      {/* ELIGIBILITY - Use dynamic data */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Eligibility Criteria</h2>
        <ul className="space-y-2">
          {program.eligibilityCriteria.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ADMISSION PROCESS - Use dynamic data */}
      <div className="w-full overflow-x-auto py-6">
        <div className="flex items-start gap-10 min-w-max px-4">
          {program.admissionProcess.map((step, i) => (
            <div key={i} className="flex items-center gap-10">
              <div className="flex flex-col items-center text-center">
                <div className={`w-10 h-10 rounded-full text-white flex items-center justify-center font-bold border-2 border-yellow-400 blink-circle ${stepColors[i % stepColors.length]}`}>
                  {step.step}
                </div>
                <p className="text-gray-600 text-sm w-32 mt-2">{step.title}</p>
              </div>

              {i !== program.admissionProcess.length - 1 && (
                <span className="text-2xl text-gray-400">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* SPECIALIZATIONS - Use dynamic data */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <FolderOpen className="w-6 h-6 text-accent" />
          Program Specializations
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {program.specializations.map((spec, i) => (
            <div
              key={i}
              className="p-4 border rounded-lg bg-card transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-md"
            >
              <h3 className="font-bold mb-2">{spec.name}</h3>
              {spec.description && (
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

// Keep the colorful step colors
const stepColors = [
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-500",
  "bg-orange-600",
  "bg-rose-600",
];
```

### Key Changes:
1. **Fetch program:** `GET /api/programs/program/${id}`
2. **Fetch courses:** `GET /api/courses?programId=${id}&status=Published`
3. **Course Structure:** Show actual courses with code, name, department, credits
4. **Eligibility:** Map over `program.eligibilityCriteria`
5. **Admission Process:** Map over `program.admissionProcess` with step numbers
6. **Specializations:** Map over `program.specializations` with name and description

---

## Error Handling

### Add Loading State:
```typescript
if (loading) {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
    </div>
  );
}
```

### Add Error State:
```typescript
const [error, setError] = useState(null);

if (error) {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-4">
      <p className="text-2xl text-red-600">Failed to load program</p>
      <button onClick={() => window.location.reload()} className="px-6 py-2 bg-accent text-white rounded-lg">
        Retry
      </button>
    </div>
  );
}
```

---

## Testing Checklist

### Programs Page:
- [ ] Page loads without errors
- [ ] All 3 programs display
- [ ] Program names show correctly
- [ ] Descriptions show correctly
- [ ] Features list displays for each program
- [ ] Duration, intake, package stats show correctly
- [ ] "Learn More" button links to correct detail page
- [ ] Alternating layout works (left-right-left)
- [ ] Animations still work

### Program Detail Page:
- [ ] Page loads for `/programs/mba-fulltime`
- [ ] Page loads for `/programs/mba-executive`
- [ ] Page loads for `/programs/mba-online`
- [ ] Program name displays
- [ ] Stats (duration, intake, package) display
- [ ] Course structure shows actual courses from database
- [ ] Course codes and names display
- [ ] Department and credits show for each course
- [ ] Eligibility criteria displays
- [ ] Admission process shows all steps
- [ ] Step numbers are correct
- [ ] Specializations display with names and descriptions
- [ ] Loading state works
- [ ] Error handling works

---

## Important Notes

1. **Keep the same design** - Don't change colors, spacing, or layout
2. **Keep animations** - All existing animations should still work
3. **Responsive design** - Must work on mobile, tablet, desktop
4. **SEO** - Use proper meta tags (optional enhancement)
5. **Performance** - Use `cache: 'no-store'` for fresh data

---

## Expected Result

### Before:
- Programs page shows 3 hardcoded sections
- Detail page shows hardcoded syllabus list
- Admin cannot change anything

### After:
- Programs page fetches from database
- Detail page shows actual courses
- Admin can edit everything in admin panel
- Changes reflect immediately on website

---

## API Response Examples

### GET /api/programs?isActive=true
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "...",
      "programId": "mba-fulltime",
      "name": "MBA Full-Time",
      "description": "Our flagship 2-year immersive MBA program...",
      "duration": { "value": "2 Years", "unit": "Years" },
      "intake": { "value": 180, "label": "Students" },
      "avgPackage": { "value": "₹18 LPA", "label": "LPA" },
      "features": [
        "Global curriculum aligned with industry needs",
        "Live projects with leading companies",
        ...
      ],
      "specializations": [
        {
          "name": "Finance & Strategy",
          "description": "Master financial analysis..."
        },
        ...
      ],
      "eligibilityCriteria": [
        "Bachelor's degree with minimum 50%",
        ...
      ],
      "admissionProcess": [
        {
          "step": 1,
          "title": "Submit online application form",
          "description": "Complete the online application..."
        },
        ...
      ]
    }
  ]
}
```

### GET /api/courses?programId=mba-fulltime&status=Published
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "_id": "...",
      "courseCode": "FIN-301",
      "courseName": "Corporate Finance",
      "programId": "mba-fulltime",
      "department": "Finance & Strategy",
      "level": "Core",
      "credits": 4,
      "description": "Advanced corporate finance...",
      "status": "Published"
    },
    ...
  ]
}
```

---

**START WITH:** Update the programs listing page first, then update the detail page.
