// backend/models/Faculty.js

import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema({
  id: { 
    type: Number, 
    required: true,
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  specialization: { 
    type: String, 
    required: true 
  },
  
  // ✅ NEW: Slug field for stable URLs
  slug: { 
    type: String, 
    unique: true, 
    index: true,
    sparse: true // Allows null values while keeping unique constraint
  },

  image: { 
    type: String, 
    default: "" 
  },
  achievements: { 
    type: String, 
    default: "" 
  },
  email: { 
    type: String, 
    required: true 
  },
  bio: { 
    type: String, 
    default: "" 
  },

  researchAreas: {
    type: [String],
    default: []
  },

  currentProjects: {
    type: [
      {
        name: String,
        status: String
      }
    ],
    default: []
  },

  publications: { 
    type: Number, 
    default: 0 
  },
  students: { 
    type: Number, 
    default: 0 
  },

  qualifications: {
    type: [String],
    default: []
  },

  linkedin: { 
    type: String, 
    default: "" 
  }
}, {
  timestamps: true
});

// ✅ PRE-SAVE HOOK: Auto-generate slug from name
FacultySchema.pre("save", function(next) {
  if (!this.slug && this.name) {
    this.slug = this.name
      .toLowerCase()
      .replace(/^dr\.\s*|^prof\.\s*/g, "") // Remove Dr. or Prof. prefix
      .replace(/\s+/g, "-")                 // Replace spaces with hyphens
      .replace(/[^\w\-]+/g, "");            // Remove special characters
  }
  next();
});

// ✅ STATIC HELPER: Generate slug from any name
FacultySchema.statics.generateSlug = function(name) {
  return name
    .toLowerCase()
    .replace(/^dr\.\s*|^prof\.\s*/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "");
};

// ✅ IMPORTANT: Force Mongoose to use "faculty" collection name
export default mongoose.model("Faculty", FacultySchema, "faculty");