// Seed script to add sample activities
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const StudentLifeSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true, enum: ['cultural', 'academic', 'sports', 'career', 'networking', 'social'] },
    status: { type: String, enum: ['upcoming', 'ongoing', 'completed', 'cancelled'], default: 'upcoming' },
    date: { type: String, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },
    attendees: { type: Number, default: 0 },
    image: { type: String, default: "" }
}, { timestamps: true });

const StudentLife = mongoose.model("StudentLife", StudentLifeSchema, "student-life");

const sampleActivities = [
    {
        id: 1,
        title: "Annual Business Fest",
        description: "Three-day business festival with competitions and workshops",
        category: "cultural",
        status: "upcoming",
        date: "2024-01-20",
        time: "09:00 AM",
        venue: "Main Auditorium",
        attendees: 450,
        image: ""
    },
    {
        id: 2,
        title: "Guest Lecture: Digital Transformation",
        description: "Industry expert shares insights on digital transformation strategies",
        category: "academic",
        status: "upcoming",
        date: "2024-01-18",
        time: "02:00 PM",
        venue: "Lecture Hall 3",
        attendees: 120,
        image: ""
    },
    {
        id: 3,
        title: "Sports Tournament",
        description: "Inter-batch cricket and football tournament",
        category: "sports",
        status: "upcoming",
        date: "2024-01-22",
        time: "10:00 AM",
        venue: "Sports Complex",
        attendees: 200,
        image: ""
    },
    {
        id: 4,
        title: "Career Fair 2024",
        description: "Annual placement drive with top recruiters from various industries",
        category: "career",
        status: "upcoming",
        date: "2024-02-15",
        time: "09:00 AM",
        venue: "Convention Center",
        attendees: 500,
        image: ""
    },
    {
        id: 5,
        title: "Alumni Networking Night",
        description: "Connect with successful alumni and expand your professional network",
        category: "networking",
        status: "upcoming",
        date: "2024-02-10",
        time: "06:00 PM",
        venue: "Sky Lounge",
        attendees: 150,
        image: ""
    },
    {
        id: 6,
        title: "Community Outreach Program",
        description: "CSR initiative to support local schools and underprivileged communities",
        category: "social",
        status: "upcoming",
        date: "2024-01-28",
        time: "08:00 AM",
        venue: "Local Community Center",
        attendees: 80,
        image: ""
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        // Clear existing activities
        await StudentLife.deleteMany({});
        console.log("Cleared existing activities");

        // Insert sample activities
        await StudentLife.insertMany(sampleActivities);
        console.log("Added 6 sample activities!");

        // Show what was added
        const activities = await StudentLife.find();
        console.log("\nActivities in database:");
        activities.forEach(a => console.log(`- ${a.id}: ${a.title} (${a.category})`));

        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

seedDatabase();
