# 🎯 ADMIN PANEL PROMPT - Program Management Interface

## What I Need

Build a **Program Management Interface** for the MBA Admin Panel where admins can edit ALL program details including:
- Basic info (name, description, duration, intake, package)
- Features list (add/remove items)
- Specializations (add/remove with name & description)
- Eligibility criteria (add/remove items)
- Admission process steps (add/remove with step number, title, description)

---

## Current Setup

- **Admin Panel:** Running at `localhost:8080`
- **Backend API:** Running at `localhost:5000`
- **Database:** MongoDB with Program model already created

---

## API Endpoints Available

```
GET    /api/programs              → Get all programs
GET    /api/programs/:id          → Get program by MongoDB ID
PUT    /api/programs/:id          → Update program
POST   /api/programs              → Create new program
DELETE /api/programs/:id          → Delete program
```

---

## Program Data Structure

```typescript
interface Program {
  _id: string;
  programId: string;  // 'mba-fulltime', 'mba-executive', 'mba-online'
  name: string;
  shortName: string;
  description: string;
  tagline: string;
  
  duration: {
    value: string;
    unit: string;
  };
  
  intake: {
    value: number;
    label: string;
  };
  
  avgPackage: {
    value: string;
    label: string;
  };
  
  features: string[];  // Array of feature strings
  
  specializations: Array<{
    name: string;
    description: string;
  }>;
  
  eligibilityCriteria: string[];  // Array of criteria strings
  
  admissionProcess: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  
  isActive: boolean;
  displayOrder: number;
}
```

---

## Required Pages

### 1. Programs List Page (`/admin/programs`)

**Features:**
- Display all 3 programs in cards
- Show: Name, Duration, Intake, Package, Status
- Edit button for each program
- Add New Program button (optional)

**Card Design:**
```
┌──────────────────────────────────────┐
│  MBA Full-Time              [Edit]   │
│  ────────────────────────────────    │
│  📅 Duration: 2 Years                │
│  👥 Intake: 180 Students             │
│  💰 Avg Package: ₹18 LPA             │
│  ✅ Active                           │
└──────────────────────────────────────┘
```

---

### 2. Edit Program Page (`/admin/programs/edit/:id`)

**Layout:** Single page with tabbed sections or accordion

#### Tab 1: Basic Information
```
Program ID: [mba-fulltime] (readonly)
Name: [MBA Full-Time]
Short Name: [MBA Full Time]
Description: [textarea - 3-4 lines]
Tagline: [textarea - 2-3 lines]

Duration Value: [2 Years]
Duration Unit: [Years]

Intake Value: [180]
Intake Label: [Students]

Avg Package Value: [₹18 LPA]
Avg Package Label: [LPA]

Is Active: [✓] (toggle switch)
Display Order: [1]
```

#### Tab 2: Features (Dynamic List)
```
Features:
┌─────────────────────────────────────────┐
│ [Global curriculum aligned with...]  [×]│
│ [Live projects with leading...]      [×]│
│ [International student exchange...]  [×]│
└─────────────────────────────────────────┘
[+ Add Feature]
```

**Functionality:**
- Each feature is a text input
- Click [×] to remove
- Click [+ Add Feature] to add new empty input
- Features are stored as array of strings

#### Tab 3: Specializations (Dynamic List)
```
Specializations:
┌─────────────────────────────────────────┐
│ Name: [Finance & Strategy]              │
│ Description:                            │
│ [Master financial analysis, investment  │
│  strategies, and corporate finance]     │
│                                  [Delete]│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Name: [Marketing & Analytics]           │
│ Description:                            │
│ [Learn data-driven marketing and...]    │
│                                  [Delete]│
└─────────────────────────────────────────┘

[+ Add Specialization]
```

**Functionality:**
- Each specialization has name (text input) and description (textarea)
- Click [Delete] to remove
- Click [+ Add Specialization] to add new empty form
- Stored as array of objects: `[{ name: '', description: '' }]`

#### Tab 4: Eligibility Criteria (Dynamic List)
```
Eligibility Criteria:
┌─────────────────────────────────────────┐
│ [Bachelor's degree with minimum 50%] [×]│
│ [Valid CAT/MAT/XAT/CMAT score]       [×]│
│ [Personal Interview & Group...]      [×]│
└─────────────────────────────────────────┘
[+ Add Criterion]
```

**Functionality:**
- Same as Features
- Array of strings

#### Tab 5: Admission Process (Dynamic List with Steps)
```
Admission Process:
┌─────────────────────────────────────────┐
│ Step 1                                  │
│ Title: [Submit online application form] │
│ Description:                            │
│ [Complete the online application with   │
│  all required documents]                │
│                                  [Delete]│
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Step 2                                  │
│ Title: [Upload academic & ID documents] │
│ Description:                            │
│ [Submit transcripts, certificates...]   │
│                                  [Delete]│
└─────────────────────────────────────────┘

[+ Add Step]
```

**Functionality:**
- Step numbers are auto-generated (1, 2, 3...)
- Each step has title (text input) and description (textarea)
- Click [Delete] to remove
- Click [+ Add Step] to add new step
- When step is deleted, renumber remaining steps automatically
- Stored as array: `[{ step: 1, title: '', description: '' }]`

---

## Form Actions

At the bottom of the form:
```
[Cancel]  [Save Changes]
```

- **Cancel:** Navigate back to programs list
- **Save Changes:** 
  - Validate all fields
  - PUT request to `/api/programs/:id`
  - Show success toast
  - Navigate back to list

---

## Implementation Requirements

### 1. State Management
```typescript
const [program, setProgram] = useState<Program | null>(null);
const [loading, setLoading] = useState(true);

// For dynamic arrays
const [features, setFeatures] = useState<string[]>([]);
const [specializations, setSpecializations] = useState<Array<{name: string, description: string}>>([]);
const [eligibility, setEligibility] = useState<string[]>([]);
const [admissionSteps, setAdmissionSteps] = useState<Array<{step: number, title: string, description: string}>>([]);
```

### 2. Dynamic List Functions

**For Features (string array):**
```typescript
const addFeature = () => {
  setFeatures([...features, '']);
};

const updateFeature = (index: number, value: string) => {
  const updated = [...features];
  updated[index] = value;
  setFeatures(updated);
};

const removeFeature = (index: number) => {
  setFeatures(features.filter((_, i) => i !== index));
};
```

**For Specializations (object array):**
```typescript
const addSpecialization = () => {
  setSpecializations([...specializations, { name: '', description: '' }]);
};

const updateSpecialization = (index: number, field: 'name' | 'description', value: string) => {
  const updated = [...specializations];
  updated[index][field] = value;
  setSpecializations(updated);
};

const removeSpecialization = (index: number) => {
  setSpecializations(specializations.filter((_, i) => i !== index));
};
```

**For Admission Steps (with auto-numbering):**
```typescript
const addAdmissionStep = () => {
  const newStep = {
    step: admissionSteps.length + 1,
    title: '',
    description: ''
  };
  setAdmissionSteps([...admissionSteps, newStep]);
};

const updateAdmissionStep = (index: number, field: 'title' | 'description', value: string) => {
  const updated = [...admissionSteps];
  updated[index][field] = value;
  setAdmissionSteps(updated);
};

const removeAdmissionStep = (index: number) => {
  const filtered = admissionSteps.filter((_, i) => i !== index);
  // Renumber steps
  const renumbered = filtered.map((step, i) => ({ ...step, step: i + 1 }));
  setAdmissionSteps(renumbered);
};
```

### 3. Save Function
```typescript
const handleSave = async () => {
  try {
    const updatedProgram = {
      ...program,
      features,
      specializations,
      eligibilityCriteria: eligibility,
      admissionProcess: admissionSteps
    };
    
    const response = await fetch(`http://localhost:5000/api/programs/${program._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProgram)
    });
    
    if (response.ok) {
      toast.success('Program updated successfully!');
      router.push('/admin/programs');
    } else {
      toast.error('Failed to update program');
    }
  } catch (error) {
    toast.error('Error updating program');
  }
};
```

---

## Design Guidelines

### Colors (Match existing admin panel)
- **Background:** Dark theme (#0F172A, #1E293B)
- **Cards:** #1E293B with border
- **Primary Button:** Blue gradient
- **Delete Button:** Red
- **Add Button:** Green or accent color

### Components
- **Text Input:** Border, rounded, padding
- **Textarea:** 3-4 rows, resizable
- **Toggle Switch:** For isActive field
- **Button:** Rounded, with hover effect
- **Card:** Border, shadow on hover

### Animations
- Fade in on page load
- Smooth transitions for add/remove
- Hover effects on cards and buttons

---

## Validation

**Required Fields:**
- Program ID
- Name
- Description
- Duration value
- Intake value
- Avg Package value

**Optional Fields:**
- Features (can be empty array)
- Specializations (can be empty array)
- Eligibility criteria (can be empty array)
- Admission process (can be empty array)

**Validation Rules:**
- Name: Min 3 characters
- Description: Min 10 characters
- Intake value: Must be positive number
- Features: Each feature must be non-empty string
- Specializations: Name is required if adding specialization

---

## Example Component Structure

```typescript
// ProgramsList.tsx
export default function ProgramsList() {
  const [programs, setPrograms] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/api/programs')
      .then(res => res.json())
      .then(data => setPrograms(data.data));
  }, []);
  
  return (
    <div className="grid grid-cols-3 gap-6">
      {programs.map(program => (
        <ProgramCard key={program._id} program={program} />
      ))}
    </div>
  );
}

// EditProgram.tsx
export default function EditProgram() {
  const { id } = useParams();
  const [program, setProgram] = useState(null);
  const [features, setFeatures] = useState([]);
  // ... other state
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/programs/${id}`)
      .then(res => res.json())
      .then(data => {
        setProgram(data.data);
        setFeatures(data.data.features);
        // ... set other fields
      });
  }, [id]);
  
  return (
    <form onSubmit={handleSave}>
      {/* Basic Info Section */}
      {/* Features Section */}
      {/* Specializations Section */}
      {/* Eligibility Section */}
      {/* Admission Process Section */}
    </form>
  );
}
```

---

## Testing Checklist

- [ ] Programs list loads and displays all programs
- [ ] Edit button navigates to edit page
- [ ] Edit page loads program data
- [ ] Can edit basic fields (name, description, etc.)
- [ ] Can add new feature
- [ ] Can edit existing feature
- [ ] Can remove feature
- [ ] Can add new specialization
- [ ] Can edit specialization name and description
- [ ] Can remove specialization
- [ ] Can add new eligibility criterion
- [ ] Can remove eligibility criterion
- [ ] Can add new admission step
- [ ] Can edit admission step title and description
- [ ] Can remove admission step (renumbers correctly)
- [ ] Save button works
- [ ] Success toast appears
- [ ] Changes persist in database
- [ ] Validation works for required fields

---

## Priority Features

**MUST HAVE:**
1. Programs list page
2. Edit program page with all fields
3. Dynamic features list (add/remove)
4. Dynamic eligibility list (add/remove)
5. Dynamic admission process (add/remove with auto-numbering)
6. Save functionality

**NICE TO HAVE:**
7. Dynamic specializations list
8. Drag-and-drop reordering
9. Duplicate program feature
10. Preview before save

---

## Deliverables

1. **Programs List Component** - Display all programs
2. **Edit Program Form** - Full edit interface
3. **Dynamic List Components** - Reusable for features, eligibility, etc.
4. **API Integration** - Fetch and save functions
5. **Navigation Update** - Add "Programs" to admin menu

---

**START WITH:** Create the programs list page, then build the edit form with basic fields, then add dynamic list functionality for features, eligibility, and admission process.
