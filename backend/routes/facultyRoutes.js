// backend/routes/facultyRoutes.js

import express from "express";
import Faculty from "../models/Faculty.js";

const router = express.Router();

// ============================================
// ROUTE ORDER IS CRITICAL!
// Specific routes MUST come before generic ones
// ============================================

// ✅ 1. GET all faculty
router.get("/", async (req, res) => {
  try {
    const faculty = await Faculty.find().sort({ name: 1 });
    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 2. GET faculty by SLUG (MUST be before /:id route!)
router.get("/by-slug/:slug", async (req, res) => {
  try {
    const faculty = await Faculty.findOne({ slug: req.params.slug });
    
    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    res.json(faculty);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 3. GET faculty by custom numeric ID (last!)
router.get("/:id", async (req, res) => {
  try {
    const numericId = Number(req.params.id);
    
    if (!isNaN(numericId)) {
      const faculty = await Faculty.findOne({ id: numericId });
      if (faculty) {
        return res.json(faculty);
      }
    }
    
    return res.status(404).json({ error: "Faculty not found" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ 4. CREATE new faculty (optional - if you need admin functionality)
router.post("/", async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    const saved = await newFaculty.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ 5. UPDATE faculty by ID (optional)
router.put("/:id", async (req, res) => {
  try {
    const numericId = Number(req.params.id);
    
    const updated = await Faculty.findOneAndUpdate(
      { id: numericId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ 6. DELETE faculty by ID (optional)
router.delete("/:id", async (req, res) => {
  try {
    const numericId = Number(req.params.id);
    
    const deleted = await Faculty.findOneAndDelete({ id: numericId });

    if (!deleted) {
      return res.status(404).json({ error: "Faculty not found" });
    }

    res.json({ message: "Faculty deleted successfully", deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;