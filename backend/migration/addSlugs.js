// backend/migrations/addSlugs.js
// Run this ONCE to add slugs to existing faculty records

import mongoose from "mongoose";
import Faculty from "../models/Faculty.js";

// Your MongoDB connection string
const MONGO_URI = "mongodb://localhost:27017/mba_portal"; // Update with your URI

async function addSlugsToExistingFaculty() {
  try {
    // Connect to database
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Get all faculty without slugs
    const facultyMembers = await Faculty.find({ 
      $or: [
        { slug: null }, 
        { slug: { $exists: false } }
      ] 
    });

    console.log(`📊 Found ${facultyMembers.length} faculty members without slugs`);

    // Generate and save slugs
    for (const member of facultyMembers) {
      const slug = member.name
        .toLowerCase()
        .replace(/^dr\.\s*|^prof\.\s*/g, "")
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");

      member.slug = slug;
      await member.save();
      
      console.log(`✅ Added slug "${slug}" for ${member.name}`);
    }

    console.log("\n🎉 Migration completed successfully!");
    console.log("You can now use slug-based URLs like: /faculty/arjun-mishra");

  } catch (error) {
    console.error("❌ Migration failed:", error);
  } finally {
    await mongoose.connection.close();
    console.log("\n🔌 Disconnected from MongoDB");
  }
}

// Run the migration
addSlugsToExistingFaculty();