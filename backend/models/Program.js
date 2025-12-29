import mongoose from 'mongoose';

const programSchema = new mongoose.Schema({
    programId: {
        type: String,
        required: true,
        unique: true,
        enum: ['mba-fulltime', 'mba-executive', 'mba-online']
    },
    name: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
overviewText: {
    type: String
},
syllabusFile: {
    type: String
},

    tagline: {
        type: String
    },
    duration: {
        value: { type: String, required: true },
        unit: { type: String, default: 'Years' }
    },
    intake: {
        value: { type: Number, required: true },
        label: { type: String, default: 'Students' }
    },
    avgPackage: {
        value: { type: String, required: true },
        label: { type: String, default: 'LPA' }
    },
    features: [{
        type: String
    }],
    specializations: [{
        name: { type: String, required: true },
        description: { type: String }
    }],
    eligibilityCriteria: [{
        type: String
    }],
    admissionProcess: [{
        step: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String }
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    displayOrder: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

const Program = mongoose.model('Program', programSchema);
export default Program;
