# Admin Panel Design Guide - Course Management

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--primary-blue: #3B82F6;
--primary-purple: #8B5CF6;
--primary-green: #10B981;

/* Status Colors */
--status-draft: #94A3B8;      /* Gray */
--status-review: #F59E0B;     /* Orange */
--status-published: #10B981;  /* Green */
--status-archived: #6B7280;   /* Dark Gray */

/* Department Colors */
--dept-finance: #3B82F6;      /* Blue */
--dept-marketing: #EC4899;    /* Pink */
--dept-tech: #8B5CF6;         /* Purple */
--dept-operations: #F59E0B;   /* Orange */
--dept-analytics: #06B6D4;    /* Cyan */
--dept-entrepreneurship: #EF4444; /* Red */
--dept-hr: #14B8A6;           /* Teal */
--dept-general: #6366F1;      /* Indigo */

/* Background Colors */
--bg-dark: #0F172A;           /* Dark blue-gray */
--bg-card: #1E293B;           /* Card background */
--bg-hover: #334155;          /* Hover state */

/* Text Colors */
--text-primary: #F1F5F9;
--text-secondary: #CBD5E1;
--text-muted: #94A3B8;
```

### Typography

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
```

---

## 📐 Layout Structure

### 1. **Main Dashboard Layout**

```
┌─────────────────────────────────────────────────────────┐
│  Sidebar (Fixed)  │  Main Content Area                  │
│                   │                                      │
│  • Overview       │  ┌──────────────────────────────┐  │
│  • Courses Mgmt   │  │  Header with Breadcrumbs     │  │
│  • Faculty Mgmt   │  └──────────────────────────────┘  │
│  • Admissions     │                                      │
│  • Analytics      │  ┌──────────────────────────────┐  │
│  • Settings       │  │  Page Title & Actions        │  │
│                   │  └──────────────────────────────┘  │
│                   │                                      │
│                   │  ┌──────────────────────────────┐  │
│                   │  │  Content Cards/Tables        │  │
│                   │  │                              │  │
│                   │  │                              │  │
│                   │  └──────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### 2. **Course Management Page Layout**

```
┌─────────────────────────────────────────────────────────┐
│  Courses Management                    [+ Add Course]    │
├─────────────────────────────────────────────────────────┤
│  Select a programme to manage its courses               │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │  MBA     │  │   MBA    │  │   MBA    │             │
│  │ Full Time│  │Executive │  │  Online  │             │
│  │          │  │          │  │          │             │
│  │ 2 Years  │  │18 Months │  │ 2 Years  │             │
│  │ 320 Std  │  │ 180 Std  │  │ 450 Std  │             │
│  │ 32 Crs   │  │ 20 Crs   │  │ 24 Crs   │             │
│  └──────────┘  └──────────┘  └──────────┘             │
└─────────────────────────────────────────────────────────┘
```

### 3. **Course List View (After Program Selection)**

```
┌─────────────────────────────────────────────────────────┐
│  ← Back    MBA Full Time - Courses        [+ Add New]   │
├─────────────────────────────────────────────────────────┤
│  Filters:                                                │
│  [All Departments ▼] [All Levels ▼] [All Status ▼]     │
│  [Search courses...]                                     │
├─────────────────────────────────────────────────────────┤
│  Draft (2)  │  Under Review (1)  │  Published (3)  │   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │ FIN-301  Advanced Financial Analytics          │    │
│  │ Dr. Smith • 0 students                         │    │
│  │ [Draft]  [Edit] [👁] [🗑]                      │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │ MKT-401  Digital Marketing Strategy            │    │
│  │ Prof. Jameson • 0 students                     │    │
│  │ [Under Review]  [Edit] [👁] [🗑]               │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Component Designs

### 1. **Program Selection Card**

**Design Specifications:**
- **Size:** 280px × 320px
- **Background:** Gradient based on program type
  - Full-Time: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
  - Executive: `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
  - Online: `linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)`
- **Border Radius:** 16px
- **Shadow:** `0 10px 30px rgba(0,0,0,0.2)`
- **Hover Effect:** 
  - Transform: `translateY(-8px)`
  - Shadow: `0 20px 40px rgba(0,0,0,0.3)`
  - Transition: `all 0.3s ease`

**Content:**
```
┌─────────────────────┐
│  [Icon]             │
│                     │
│  MBA Full Time      │
│  ─────────────      │
│                     │
│  ⏱ 2 Years          │
│  👥 320 Students    │
│  📚 32 Courses      │
│                     │
│  [Manage Courses →] │
└─────────────────────┘
```

### 2. **Course Card (List View)**

**Design Specifications:**
- **Background:** `#1E293B` (dark card)
- **Border:** `1px solid #334155`
- **Border Radius:** 12px
- **Padding:** 20px
- **Hover:** Border color changes to primary color

**Layout:**
```
┌──────────────────────────────────────────────────┐
│  FIN-301                           [Status Badge] │
│  Advanced Financial Analytics                     │
│  ─────────────────────────────────────────────   │
│  👤 Dr. Smith                                     │
│  📊 0 students                                    │
│  📘 Finance & Strategy • Advanced • 3 Credits    │
│                                                   │
│  [Edit] [View] [Delete]                          │
└──────────────────────────────────────────────────┘
```

### 3. **Status Badge**

**Design Specifications:**
- **Height:** 24px
- **Padding:** 6px 12px
- **Border Radius:** 12px (pill shape)
- **Font Size:** 12px
- **Font Weight:** 600

**Color Variants:**
```css
/* Draft */
background: rgba(148, 163, 184, 0.1);
color: #94A3B8;
border: 1px solid #94A3B8;

/* Under Review */
background: rgba(245, 158, 11, 0.1);
color: #F59E0B;
border: 1px solid #F59E0B;

/* Published */
background: rgba(16, 185, 129, 0.1);
color: #10B981;
border: 1px solid #10B981;

/* Archived */
background: rgba(107, 114, 128, 0.1);
color: #6B7280;
border: 1px solid #6B7280;
```

### 4. **Add/Edit Course Modal**

**Design Specifications:**
- **Width:** 800px (desktop), 95vw (mobile)
- **Max Height:** 90vh
- **Background:** `#1E293B`
- **Border Radius:** 16px
- **Overlay:** `rgba(0, 0, 0, 0.7)` with backdrop blur

**Layout:**
```
┌────────────────────────────────────────┐
│  Add New Course                    [×] │
├────────────────────────────────────────┤
│                                        │
│  Course Code *                         │
│  [FIN-601        ]                     │
│                                        │
│  Course Name *                         │
│  [Investment Banking              ]    │
│                                        │
│  Program *          Department *       │
│  [MBA Full Time ▼]  [Finance ▼]       │
│                                        │
│  Level *            Credits *          │
│  [Advanced ▼]       [3        ]        │
│                                        │
│  Description *                         │
│  [                                ]    │
│  [                                ]    │
│                                        │
│  Instructor         Semester           │
│  [Dr. Johnson   ]   [6        ]        │
│                                        │
│  Max Capacity       Status             │
│  [40            ]   [Draft ▼]          │
│                                        │
│  [Cancel]              [Save Course]   │
└────────────────────────────────────────┘
```

### 5. **Filter Panel**

**Design Specifications:**
- **Background:** `#1E293B`
- **Border:** `1px solid #334155`
- **Border Radius:** 8px
- **Padding:** 16px

**Layout:**
```
┌─────────────────────────────────────┐
│  Filters                            │
├─────────────────────────────────────┤
│  Department                         │
│  [All Departments            ▼]    │
│                                     │
│  Level                              │
│  [All Levels                 ▼]    │
│                                     │
│  Status                             │
│  [All Status                 ▼]    │
│                                     │
│  Credits Range                      │
│  [━━━●━━━━━━] 1 - 10               │
│                                     │
│  [Clear All]        [Apply Filters] │
└─────────────────────────────────────┘
```

---

## 🎭 Animations & Transitions

### 1. **Page Transitions**
```css
/* Fade in content */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-content {
  animation: fadeIn 0.4s ease-out;
}
```

### 2. **Card Hover Effects**
```css
.course-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  border-color: var(--primary-blue);
}
```

### 3. **Button Interactions**
```css
.btn-primary {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-primary:hover::before {
  width: 300px;
  height: 300px;
}
```

### 4. **Modal Animations**
```css
/* Modal entrance */
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal {
  animation: modalSlideIn 0.3s ease-out;
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile */
@media (max-width: 640px) {
  /* Stack cards vertically */
  /* Full-width modals */
  /* Collapsible sidebar */
}

/* Tablet */
@media (min-width: 641px) and (max-width: 1024px) {
  /* 2-column grid for cards */
  /* Adjusted modal width */
}

/* Desktop */
@media (min-width: 1025px) {
  /* 3-column grid for cards */
  /* Fixed sidebar */
  /* Full modal experience */
}
```

---

## ✨ Micro-interactions

### 1. **Loading States**
- Skeleton screens for course cards
- Shimmer effect on loading
- Spinner for button actions

### 2. **Success Feedback**
- Toast notifications (top-right)
- Success checkmark animation
- Confetti for major actions (optional)

### 3. **Error Handling**
- Shake animation for form errors
- Red border highlight on invalid fields
- Clear error messages below fields

### 4. **Empty States**
- Friendly illustrations
- Helpful messages
- Clear call-to-action

---

## 🎨 Design Inspiration

### Similar Designs to Reference:
1. **Notion** - Clean, minimal interface
2. **Linear** - Smooth animations and interactions
3. **Vercel Dashboard** - Modern, dark theme
4. **Stripe Dashboard** - Professional, data-focused
5. **Tailwind UI** - Component patterns

---

## 🛠️ Implementation Tools

### Recommended Libraries:
- **UI Components:** shadcn/ui, Headless UI
- **Animations:** Framer Motion
- **Icons:** Lucide React, Heroicons
- **Forms:** React Hook Form + Zod
- **Notifications:** React Hot Toast, Sonner
- **Tables:** TanStack Table
- **Charts:** Recharts, Chart.js

---

## 📋 Design Checklist

- [ ] Consistent color palette across all components
- [ ] Smooth transitions and animations
- [ ] Responsive layout for all screen sizes
- [ ] Accessible (WCAG 2.1 AA compliant)
- [ ] Loading states for all async operations
- [ ] Error states with helpful messages
- [ ] Empty states with clear CTAs
- [ ] Hover states for interactive elements
- [ ] Focus states for keyboard navigation
- [ ] Consistent spacing and typography
- [ ] Dark mode optimized
- [ ] Touch-friendly on mobile (min 44px tap targets)

---

## 🎯 User Experience Goals

1. **Efficiency** - Admins can manage courses quickly
2. **Clarity** - Information is easy to understand
3. **Feedback** - Clear confirmation of actions
4. **Forgiveness** - Easy to undo mistakes
5. **Consistency** - Familiar patterns throughout
6. **Delight** - Subtle animations and polish
