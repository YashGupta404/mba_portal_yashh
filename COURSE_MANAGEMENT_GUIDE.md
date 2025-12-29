# MBA Portal - Course Management System

## 📊 Database Structure

### Collections Overview

#### 1. **Programs Collection**
Stores metadata for MBA programs (Full-Time, Executive, Online)

**Schema Fields:**
```javascript
{
  programId: String (unique) // 'mba-fulltime', 'mba-executive', 'mba-online'
  name: String // Full program name
  shortName: String // Display name
  description: String // Program overview
  tagline: String // Marketing tagline
  duration: {
    value: String
    unit: String
  }
  intake: {
    value: Number
    label: String
  }
  avgPackage: {
    value: String
    label: String
  }
  features: [String] // Program highlights
  specializations: [{
    name: String
    description: String
  }]
  eligibilityCriteria: [String]
  admissionProcess: [{
    step: Number
    title: String
    description: String
  }]
  isActive: Boolean
  displayOrder: Number
  timestamps: true
}
```

#### 2. **Courses Collection**
Stores individual courses for each program

**Schema Fields:**
```javascript
{
  courseCode: String (unique, uppercase) // e.g., 'FIN-301'
  courseName: String
  programId: String // Reference to program
  department: String (enum) // Finance, Marketing, etc.
  level: String (enum) // Foundation, Core, Advanced, Elective
  credits: Number (1-10)
  description: String
  syllabus: String
  instructor: ObjectId (ref: Faculty)
  instructorName: String
  semester: Number (1-6)
  prerequisites: [String]
  learningOutcomes: [String]
  assessmentMethods: [{
    method: String
    weightage: Number
  }]
  enrolledStudents: Number
  maxCapacity: Number
  status: String (enum) // Draft, Under Review, Published, Archived
  isActive: Boolean
  timestamps: true
}
```

**Indexes:**
- `{ programId: 1, department: 1, status: 1 }`
- `{ courseCode: 1 }`

---

## 🔌 API Endpoints

### **Programs API** (`/api/programs`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/programs` | Get all programs (optional: `?isActive=true`) |
| GET | `/api/programs/:id` | Get program by MongoDB ID |
| GET | `/api/programs/program/:programId` | Get program by programId (e.g., 'mba-fulltime') |
| POST | `/api/programs` | Create new program |
| PUT | `/api/programs/:id` | Update program |
| DELETE | `/api/programs/:id` | Delete program |

### **Courses API** (`/api/courses`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/courses` | Get all courses (supports filters) |
| GET | `/api/courses/:id` | Get course by MongoDB ID |
| GET | `/api/courses/code/:courseCode` | Get course by course code |
| GET | `/api/courses/by-department/:programId` | Get courses grouped by department |
| POST | `/api/courses` | Create new course |
| PUT | `/api/courses/:id` | Update course |
| DELETE | `/api/courses/:id` | Delete course |
| PATCH | `/api/courses/bulk-status` | Bulk update course status |

**Query Parameters for GET /api/courses:**
- `programId` - Filter by program (e.g., 'mba-fulltime')
- `department` - Filter by department
- `level` - Filter by level
- `status` - Filter by status

---

## 🚀 Setup Instructions

### 1. **Seed the Database**

Run the seeder script to populate initial data:

```bash
cd backend
node seedPrograms.js
```

This will create:
- 3 MBA programs (Full-Time, Executive, Online)
- 10+ sample courses across different programs

### 2. **Restart Backend Server**

The backend should automatically restart if using nodemon. If not:

```bash
# Stop the current server (Ctrl+C)
node server.js
```

### 3. **Test API Endpoints**

Test in browser or Postman:

```
GET http://localhost:5000/api/programs
GET http://localhost:5000/api/courses
GET http://localhost:5000/api/courses?programId=mba-fulltime
GET http://localhost:5000/api/courses/by-department/mba-fulltime
```

---

## 📝 Usage Examples

### **Fetch Programs for Main Website**

```javascript
// In your Next.js page
const response = await fetch('http://localhost:5000/api/programs?isActive=true');
const { data: programs } = await response.json();
```

### **Fetch Courses by Program**

```javascript
const response = await fetch('http://localhost:5000/api/courses?programId=mba-fulltime&status=Published');
const { data: courses } = await response.json();
```

### **Fetch Courses Grouped by Department**

```javascript
const response = await fetch('http://localhost:5000/api/courses/by-department/mba-fulltime');
const { data: departmentGroups } = await response.json();

// Returns:
// [
//   {
//     _id: 'Finance & Strategy',
//     courses: [...],
//     count: 5
//   },
//   ...
// ]
```

### **Create New Course (Admin)**

```javascript
const newCourse = {
  courseCode: 'FIN-601',
  courseName: 'Investment Banking',
  programId: 'mba-fulltime',
  department: 'Finance & Strategy',
  level: 'Advanced',
  credits: 3,
  description: 'Advanced investment banking concepts',
  instructorName: 'Dr. Johnson',
  semester: 6,
  maxCapacity: 40,
  status: 'Draft'
};

const response = await fetch('http://localhost:5000/api/courses', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newCourse)
});
```

---

## 🎨 Frontend Integration Guide

### **Main Website - Programs Page**

Update `app/programs/page.tsx` to fetch from API:

```typescript
async function getPrograms() {
  const res = await fetch('http://localhost:5000/api/programs?isActive=true', {
    cache: 'no-store'
  });
  const { data } = await res.json();
  return data;
}

export default async function ProgramsPage() {
  const programs = await getPrograms();
  
  return (
    <div>
      {programs.map(program => (
        <ProgramCard key={program.programId} program={program} />
      ))}
    </div>
  );
}
```

### **Main Website - Program Detail Page**

Create `app/programs/[programId]/page.tsx`:

```typescript
async function getProgram(programId: string) {
  const res = await fetch(`http://localhost:5000/api/programs/program/${programId}`);
  const { data } = await res.json();
  return data;
}

async function getCourses(programId: string) {
  const res = await fetch(`http://localhost:5000/api/courses/by-department/${programId}`);
  const { data } = await res.json();
  return data;
}

export default async function ProgramDetailPage({ params }) {
  const program = await getProgram(params.programId);
  const coursesByDepartment = await getCourses(params.programId);
  
  return (
    <div>
      <ProgramOverview program={program} />
      <CourseStructure coursesByDepartment={coursesByDepartment} />
    </div>
  );
}
```

---

## 🔐 Admin Panel Integration

### **Course Management Dashboard**

The admin panel should have:

1. **Program Selection** - Dropdown to select MBA program
2. **Course List** - Display courses for selected program
3. **Filters** - Department, Level, Status
4. **CRUD Operations** - Add, Edit, Delete courses
5. **Bulk Actions** - Bulk status updates

### **Recommended Admin Features**

- ✅ Drag-and-drop course reordering
- ✅ Course status workflow (Draft → Review → Published)
- ✅ Faculty assignment to courses
- ✅ Syllabus upload
- ✅ Course analytics (enrollment, capacity)
- ✅ Export course data to CSV/PDF

---

## 📋 Department Categories

The system supports these departments:

1. **Finance & Strategy**
2. **Marketing & Analytics**
3. **Technology & Innovation**
4. **Operations & Supply Chain**
5. **Business Analytics**
6. **Entrepreneurship**
7. **Human Resources**
8. **General Management**

---

## 🎯 Course Levels

1. **Foundation** - Introductory courses
2. **Core** - Required courses for all students
3. **Advanced** - Specialized advanced topics
4. **Elective** - Optional courses

---

## 📊 Course Status Workflow

```
Draft → Under Review → Published → Archived
```

- **Draft**: Course being created
- **Under Review**: Awaiting approval
- **Published**: Live and visible to students
- **Archived**: No longer active

---

## 🔄 Data Flow

```
Main Website (Frontend)
    ↓
API Request to Backend
    ↓
Express Routes (/api/courses, /api/programs)
    ↓
Controllers (courseController, programController)
    ↓
MongoDB (Programs & Courses Collections)
    ↓
Response to Frontend
```

---

## 🛠️ Next Steps

1. ✅ **Backend Setup Complete**
2. ⏳ **Update Main Website** - Integrate API calls
3. ⏳ **Update Admin Panel** - Build course management UI
4. ⏳ **Add Authentication** - Protect admin routes
5. ⏳ **Add File Upload** - For syllabus PDFs
6. ⏳ **Add Search** - Full-text search for courses

---

## 📞 Support

For questions or issues:
- Check API responses in browser DevTools
- Verify MongoDB connection
- Check backend console for errors
- Ensure seeder ran successfully
