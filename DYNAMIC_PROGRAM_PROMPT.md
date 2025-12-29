# 🎯 COMPLETE PROMPT FOR DYNAMIC MBA PROGRAM MANAGEMENT

## Context
I have an MBA portal with:
- **Main Website** (Next.js) at `localhost:3000`
- **Admin Panel** at `localhost:8080`
- **Backend API** at `localhost:5000`

Currently, the main website has HARDCODED data for programs (MBA Full-Time, Executive, Online). I want to make EVERYTHING dynamic - fetched from the database and editable through the admin panel.

---

## What Needs to Be Dynamic

### 1. **Programs Page** (`/programs`)
Currently shows hardcoded:
- Program names and descriptions
- Duration, intake, average package
- Features list
- Specializations

**Should fetch from:** `GET /api/programs`

### 2. **Program Detail Page** (`/programs/fulltime`, `/programs/executive`, `/programs/online`)
Currently shows hardcoded:
- Course structure (syllabus) - list of course names
- Eligibility criteria
- Admission process steps
- Program specializations

**Should fetch from:** 
- `GET /api/programs/program/:programId` (for program details)
- `GET /api/courses?programId=xxx&status=Published` (for actual courses)

---

## Database Structure (Already Exists)

### Program Model Fields:
```javascript
{
  programId: 'mba-fulltime',  // Unique identifier
  name: 'MBA Full-Time',
  shortName: 'MBA Full Time',
  description: 'Program description...',
  tagline: 'Marketing tagline',
  
  duration: {
    value: '2 Years',
    unit: 'Years'
  },
  
  intake: {
    value: 180,
    label: 'Students'
  },
  
  avgPackage: {
    value: '₹18 LPA',
    label: 'LPA'
  },
  
  features: [
    'Global curriculum aligned with industry needs',
    'Live projects with leading companies',
    ...
  ],
  
  specializations: [
    {
      name: 'Finance & Strategy',
      description: 'Master financial analysis...'
    },
    ...
  ],
  
  eligibilityCriteria: [
    "Bachelor's degree with minimum 50%",
    'Valid CAT/MAT/XAT/CMAT score',
    ...
  ],
  
  admissionProcess: [
    {
      step: 1,
      title: 'Submit online application form',
      description: 'Complete the online application...'
    },
    ...
  ],
  
  isActive: true,
  displayOrder: 1
}
```

### Course Model Fields:
```javascript
{
  courseCode: 'FIN-301',
  courseName: 'Corporate Finance',
  programId: 'mba-fulltime',
  department: 'Finance & Strategy',
  level: 'Core',
  credits: 4,
  description: 'Advanced corporate finance...',
  status: 'Published'
}
```

---

## TASK 1: Update Main Website to Fetch from API

### File: `app/programs/page.tsx`

**Requirements:**
1. Convert to Server Component (remove "use client")
2. Fetch programs from `http://localhost:5000/api/programs?isActive=true`
3. Display programs dynamically instead of hardcoded data
4. Map database fields to UI:
   - `program.name` → Program title
   - `program.description` → Description text
   - `program.features` → Features list (map over array)
   - `program.duration.value` → Duration stat
   - `program.intake.value` → Intake stat
   - `program.avgPackage.value` → Package stat
5. Link to detail page using `program.programId` (e.g., `/programs/mba-fulltime`)
6. Keep the same design and animations
7. Handle loading and error states

**Example fetch:**
```typescript
async function getPrograms() {
  const res = await fetch('http://localhost:5000/api/programs?isActive=true', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch programs');
  const { data } = await res.json();
  return data;
}
```

---

### File: `app/programs/[id]/page.tsx`

**Requirements:**
1. Keep as Client Component (needs useParams)
2. Fetch program data using `programId` from URL
3. Fetch courses for that program
4. Display:
   - **Program Overview:** duration, intake, avgPackage
   - **Course Structure:** Map over actual courses from database (not hardcoded syllabus)
   - **Eligibility Criteria:** Map over `program.eligibilityCriteria`
   - **Admission Process:** Map over `program.admissionProcess` with step numbers
   - **Specializations:** Map over `program.specializations`
5. Keep the same colorful step design for admission process
6. Handle loading and error states

**Example fetch:**
```typescript
const [program, setProgram] = useState(null);
const [courses, setCourses] = useState([]);

useEffect(() => {
  // Fetch program
  fetch(`http://localhost:5000/api/programs/program/${id}`)
    .then(res => res.json())
    .then(data => setProgram(data.data));
    
  // Fetch courses
  fetch(`http://localhost:5000/api/courses?programId=${id}&status=Published`)
    .then(res => res.json())
    .then(data => setCourses(data.data));
}, [id]);
```

**Course Structure Display:**
Instead of hardcoded syllabus array, show actual courses:
```typescript
{courses.map((course, i) => (
  <li key={i} className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-accent" />
    <div>
      <p className="font-semibold">{course.courseCode} - {course.courseName}</p>
      <p className="text-sm text-muted-foreground">{course.department} • {course.credits} Credits</p>
    </div>
  </li>
))}
```

---

## TASK 2: Create Admin Panel for Program Management

### Location: Admin Panel (`localhost:8080`)

Create a new section: **"Programs Management"**

### Page 1: Programs List (`/admin/programs`)

**Features:**
1. Display all 3 programs in cards
2. Show: Name, Duration, Intake, Status
3. Actions: Edit, View Details
4. Add New Program button

**Card Design:**
```
┌─────────────────────────────────────┐
│  MBA Full-Time                 [Edit]│
│  ─────────────────────────────────  │
│  📅 2 Years                          │
│  👥 180 Students                     │
│  💰 ₹18 LPA                          │
│  ✅ Active                           │
└─────────────────────────────────────┘
```

---

### Page 2: Edit Program (`/admin/programs/edit/:id`)

**Form Sections:**

#### 1. Basic Information
- Program ID (readonly if editing)
- Name
- Short Name
- Description (textarea)
- Tagline (textarea)
- Is Active (toggle)
- Display Order (number)

#### 2. Program Stats
- Duration Value (text)
- Duration Unit (text)
- Intake Value (number)
- Intake Label (text)
- Avg Package Value (text)
- Avg Package Label (text)

#### 3. Features (Dynamic List)
- Add/Remove feature items
- Each feature is a text input
- "Add Feature" button
- Delete button for each feature

**UI:**
```
Features:
[Global curriculum aligned with industry needs] [×]
[Live projects with leading companies]          [×]
[+ Add Feature]
```

#### 4. Specializations (Dynamic List)
- Add/Remove specializations
- Each has: Name (text), Description (textarea)
- "Add Specialization" button

**UI:**
```
Specializations:
┌─────────────────────────────────────┐
│ Name: Finance & Strategy            │
│ Description: [textarea]             │
│                              [Delete]│
└─────────────────────────────────────┘
[+ Add Specialization]
```

#### 5. Eligibility Criteria (Dynamic List)
- Add/Remove criteria items
- Each is a text input
- "Add Criterion" button

**UI:**
```
Eligibility Criteria:
[Bachelor's degree with minimum 50%]  [×]
[Valid CAT/MAT/XAT/CMAT score]        [×]
[+ Add Criterion]
```

#### 6. Admission Process (Dynamic List)
- Add/Remove steps
- Each has: Step Number (auto), Title (text), Description (textarea)
- "Add Step" button
- Steps are numbered automatically

**UI:**
```
Admission Process:
┌─────────────────────────────────────┐
│ Step 1                              │
│ Title: Submit online application    │
│ Description: [textarea]             │
│                              [Delete]│
└─────────────────────────────────────┘
[+ Add Step]
```

#### Form Actions:
- **Save Changes** button (PUT /api/programs/:id)
- **Cancel** button
- Success/Error notifications

---

### Page 3: Course Management (Already exists in admin)

**Enhancement:**
- When viewing courses for a program, show them grouped by department
- Allow admin to add/edit/delete courses
- Course form should have all fields from Course model

---

## TASK 3: API Integration

### Frontend API Service (Create `lib/api.ts`)

```typescript
const API_BASE = 'http://localhost:5000/api';

export const programsAPI = {
  getAll: async () => {
    const res = await fetch(`${API_BASE}/programs?isActive=true`);
    return res.json();
  },
  
  getByProgramId: async (programId: string) => {
    const res = await fetch(`${API_BASE}/programs/program/${programId}`);
    return res.json();
  },
  
  update: async (id: string, data: any) => {
    const res = await fetch(`${API_BASE}/programs/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  }
};

export const coursesAPI = {
  getByProgram: async (programId: string) => {
    const res = await fetch(`${API_BASE}/courses?programId=${programId}&status=Published`);
    return res.json();
  }
};
```

---

## TASK 4: Design Requirements

### Main Website:
- Keep existing design and animations
- Same color scheme and layout
- Smooth transitions
- Loading skeletons while fetching
- Error boundaries for failed fetches

### Admin Panel:
- Modern, clean interface
- Form validation
- Drag-and-drop for reordering (optional)
- Confirmation dialogs for delete
- Toast notifications for success/error
- Auto-save drafts (optional)

---

## Implementation Steps

### Step 1: Update Main Website
1. Update `app/programs/page.tsx` to fetch from API
2. Update `app/programs/[id]/page.tsx` to fetch program and courses
3. Create `lib/api.ts` for API calls
4. Test on `localhost:3000`

### Step 2: Create Admin Interface
1. Create `admin/programs` page (list view)
2. Create `admin/programs/edit/[id]` page (edit form)
3. Implement dynamic form fields (features, specializations, etc.)
4. Add API integration
5. Test on `localhost:8080`

### Step 3: Test End-to-End
1. Edit a program in admin panel
2. Save changes
3. View changes on main website
4. Verify all fields are updating correctly

---

## Expected Behavior

### Before (Current):
- Main website shows hardcoded data
- Admin cannot change program details
- Adding courses doesn't show on program detail page

### After (Desired):
- Main website fetches all data from database
- Admin can edit:
  - Program name, description, stats
  - Features list
  - Specializations
  - Eligibility criteria
  - Admission process steps
- Changes in admin panel immediately reflect on main website
- Course structure shows actual courses from database

---

## Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **State Management:** React useState/useEffect (or React Query if preferred)
- **Forms:** React Hook Form + Zod validation
- **UI Components:** shadcn/ui or custom components
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

---

## Deliverables

1. **Updated `app/programs/page.tsx`** - Dynamic programs listing
2. **Updated `app/programs/[id]/page.tsx`** - Dynamic program details
3. **New `lib/api.ts`** - API service layer
4. **New `admin/programs/page.tsx`** - Programs list
5. **New `admin/programs/edit/[id]/page.tsx`** - Program edit form
6. **Updated admin navigation** - Add "Programs" menu item

---

## Testing Checklist

- [ ] Programs page loads and displays data from API
- [ ] Program detail page shows correct data
- [ ] Course structure shows actual courses
- [ ] Eligibility criteria displays correctly
- [ ] Admission process shows all steps
- [ ] Specializations display correctly
- [ ] Admin can edit program name
- [ ] Admin can add/remove features
- [ ] Admin can add/remove specializations
- [ ] Admin can add/remove eligibility criteria
- [ ] Admin can add/remove admission steps
- [ ] Changes save successfully
- [ ] Changes reflect on main website immediately
- [ ] Error handling works
- [ ] Loading states work

---

## Notes

- The backend API is already complete and working
- Database already has 3 programs with all fields populated
- Just need to build the frontend to consume the API
- Keep the same beautiful design from current website
- Make admin panel intuitive and easy to use

---

## Example API Responses

### GET /api/programs
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "_id": "...",
      "programId": "mba-fulltime",
      "name": "MBA Full-Time",
      "description": "...",
      "duration": { "value": "2 Years", "unit": "Years" },
      "intake": { "value": 180, "label": "Students" },
      "avgPackage": { "value": "₹18 LPA", "label": "LPA" },
      "features": [...],
      "specializations": [...],
      "eligibilityCriteria": [...],
      "admissionProcess": [...]
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
      "description": "...",
      "status": "Published"
    }
  ]
}
```

---

## Priority

**HIGH PRIORITY:**
1. Update main website to fetch from API
2. Create admin edit form for programs
3. Make features, eligibility, and admission process editable

**MEDIUM PRIORITY:**
4. Add specializations management
5. Improve UI/UX with better forms
6. Add validation

**LOW PRIORITY:**
7. Drag-and-drop reordering
8. Auto-save drafts
9. Advanced features

---

## Success Criteria

✅ Admin can edit program details without touching code
✅ Main website shows data from database
✅ Course structure shows actual courses
✅ All program information is dynamic
✅ Changes reflect immediately on main website
✅ System is easy to use for non-technical admins

---

**START WITH:** Updating the main website programs page to fetch from API, then build the admin interface.
