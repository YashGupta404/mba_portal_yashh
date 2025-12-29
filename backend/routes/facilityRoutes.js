// backend/routes/facilityRoutes.js

import express from "express";
import Facility from "../models/Facility.js";

const router = express.Router();

// ✅ GET all facilities
router.get("/", async (req, res) => {
    try {
        const facilities = await Facility.find().sort({ id: 1 });
        res.json(facilities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ GET single facility by ID
router.get("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        if (!isNaN(numericId)) {
            const facility = await Facility.findOne({ id: numericId });
            if (facility) {
                return res.json(facility);
            }
        }

        return res.status(404).json({ error: "Facility not found" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ✅ CREATE new facility
router.post("/", async (req, res) => {
    try {
        const newFacility = new Facility(req.body);
        const saved = await newFacility.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ UPDATE facility by ID
router.put("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        const updated = await Facility.findOneAndUpdate(
            { id: numericId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ error: "Facility not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✅ DELETE facility by ID
router.delete("/:id", async (req, res) => {
    try {
        const numericId = Number(req.params.id);

        const deleted = await Facility.findOneAndDelete({ id: numericId });

        if (!deleted) {
            return res.status(404).json({ error: "Facility not found" });
        }

        res.json({ message: "Facility deleted successfully", deleted });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
