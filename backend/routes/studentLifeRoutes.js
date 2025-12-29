// backend/routes/studentLifeRoutes.js

import express from "express";
import StudentLife from "../models/StudentLife.js";

const router = express.Router();

// ✅ GET all activities
router.get("/", async (req, res) => {
    try {
        const activities = await StudentLife.find().sort({ id: 1 });
        res.json(activities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ GET single activity by ID
router.get("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        if (!isNaN(numericId)) {
            const activity = await StudentLife.findOne({ id: numericId });
            if (activity) {
                return res.json(activity);
            }
        }

        return res.status(404).json({ error: "Activity not found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ CREATE new activity
router.post("/", async (req, res) => {
    try {
        const newActivity = new StudentLife(req.body);
        const saved = await newActivity.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ UPDATE activity by ID
router.put("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        const updated = await StudentLife.findOneAndUpdate(
            { id: numericId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Activity not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ DELETE activity by ID
router.delete("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        const deleted = await StudentLife.findOneAndDelete({ id: numericId });

        if (!deleted) {
            return res.status(404).json({ error: "Activity not found" });
        }

        res.json({ message: "Activity deleted successfully", deleted });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
