// backend/models/StudentLife.js

import mongoose from "mongoose";

const StudentLifeSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['cultural', 'academic', 'sports', 'career', 'networking', 'social']
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
        default: 'upcoming'
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    attendees: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

export default mongoose.model("StudentLife", StudentLifeSchema, "student-life");
