import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes
import facultyRoutes from "./routes/facultyRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/faculty", facultyRoutes);
app.use("/api/applications", applicationRoutes);

// Health check (optional but useful)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "mba-portal-backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
