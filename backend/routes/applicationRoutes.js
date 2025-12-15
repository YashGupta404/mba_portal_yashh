import express from "express";
import Application from "../models/Application.js";

const router = express.Router();

/**
 * POST /api/applications
 * Save application form
 */
router.post("/", async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
