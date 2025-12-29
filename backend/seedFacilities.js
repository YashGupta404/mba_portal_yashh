// Seed script for facilities
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const FacilitySchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    details: { type: String, required: true }
}, { timestamps: true });

const Facility = mongoose.model("Facility", FacilitySchema, "facilities");

const sampleFacilities = [
    {
        id: 1,
        title: "Modern Campus",
        details: "State-of-the-art classrooms with latest AV technology"
    },
    {
        id: 2,
        title: "Library",
        details: "50,000+ books, digital journals, and research databases"
    },
    {
        id: 3,
        title: "Computing Lab",
        details: "Advanced software and high-speed internet infrastructure"
    },
    {
        id: 4,
        title: "Auditorium",
        details: "500-seat capacity for seminars and events"
    },
    {
        id: 5,
        title: "Cafeteria",
        details: "Multi-cuisine dining with healthy options"
    },
    {
        id: 6,
        title: "Hostel",
        details: "Comfortable accommodation for out-station students"
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        await Facility.deleteMany({});
        console.log("Cleared existing facilities");

        await Facility.insertMany(sampleFacilities);
        console.log("Added 6 sample facilities!");

        const facilities = await Facility.find();
        console.log("\nFacilities in database:");
        facilities.forEach(f => console.log(`- ${f.id}: ${f.title}`));

        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

seedDatabase();
