import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// Routes
import facultyRoutes from "./routes/facultyRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js"
dotenv.config();

const app = express();

// Middleware
app.use(cors({
        origin:['http://localhost:3000',"http://localhost:8080"],
        methods:['POST',"GET","PUT"],
        credentials:true
    })
);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/faculty", facultyRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/enquiry",enquiryRoutes);

// Health check (optional but useful)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "mba-portal-backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
