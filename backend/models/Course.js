import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    courseName: {
        type: String,
        required: true
    },
    programId: {
        type: String,
        required: true,
        enum: ['mba-fulltime', 'mba-executive', 'mba-online']
    },
    department: {
        type: String,
        required: true,
        enum: [
            'Finance & Strategy',
            'Marketing & Analytics',
            'Technology & Innovation',
            'Operations & Supply Chain',
            'Business Analytics',
            'Entrepreneurship',
            'Human Resources',
            'General Management'
        ]
    },
    level: {
        type: String,
        required: true,
        enum: ['Foundation', 'Core', 'Advanced', 'Elective']
    },
    credits: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    description: {
        type: String,
        required: true
    },
    syllabus: {
        type: String
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty'
    },
    instructorName: {
        type: String
    },
    semester: {
        type: Number,
        min: 1,
        max: 6
    },
    prerequisites: [{
        type: String
    }],
    learningOutcomes: [{
        type: String
    }],
    assessmentMethods: [{
        method: { type: String },
        weightage: { type: Number }
    }],
    enrolledStudents: {
        type: Number,
        default: 0
    },
    maxCapacity: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Draft', 'Under Review', 'Published', 'Archived'],
        default: 'Draft'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Index for efficient queries
courseSchema.index({ programId: 1, department: 1, status: 1 });
courseSchema.index({ courseCode: 1 });

const Course = mongoose.model('Course', courseSchema);
export default Course;
