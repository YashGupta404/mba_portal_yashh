import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Program from './models/Program.js';
import Course from './models/Course.js';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB Connected for seeding...');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

const programs = [
    {
        programId: 'mba-fulltime',
        name: 'MBA Full-Time',
        shortName: 'MBA Full Time',
        description: 'Our flagship 2-year immersive MBA program designed for early-career professionals ready to accelerate their growth. This is a comprehensive program combining classroom learning, live projects, and international exposure.',
        tagline: 'Intensive 2-year immersive program with hands-on learning, internships, and global business exposure for career transformation.',
        duration: {
            value: '2 Years',
            unit: 'Years'
        },
        intake: {
            value: 180,
            label: 'Students'
        },
        avgPackage: {
            value: '₹18 LPA',
            label: 'LPA'
        },
        features: [
            'Global curriculum aligned with industry needs',
            'Live projects with leading companies',
            'International student exchange program',
            'Dedicated career services and placements',
            'Access to extensive alumni network',
            'Internship opportunities across sectors'
        ],
        specializations: [
            { name: 'Finance & Strategy', description: 'Master financial analysis, investment strategies, and corporate finance' },
            { name: 'Marketing & Analytics', description: 'Learn data-driven marketing and consumer behavior analysis' },
            { name: 'Technology & Innovation', description: 'Focus on digital transformation and tech-driven business models' },
            { name: 'Operations & Supply Chain', description: 'Optimize business operations and supply chain management' },
            { name: 'Business Analytics', description: 'Leverage data analytics for strategic business decisions' },
            { name: 'Entrepreneurship', description: 'Develop skills to launch and scale new ventures' }
        ],
        eligibilityCriteria: [
            "Bachelor's degree with minimum 50%",
            'Valid CAT/MAT/XAT/CMAT score',
            'Personal Interview & Group Discussion'
        ],
        admissionProcess: [
            { step: 1, title: 'Submit online application form', description: 'Complete the online application with all required documents' },
            { step: 2, title: 'Upload academic & ID documents', description: 'Submit transcripts, certificates, and identification' },
            { step: 3, title: 'Appear for entrance exam', description: 'Take the entrance examination (CAT/MAT/XAT/CMAT)' },
            { step: 4, title: 'Attend GD & PI round', description: 'Participate in Group Discussion and Personal Interview' },
            { step: 5, title: 'Receive final admission offer', description: 'Get your admission decision and enrollment details' }
        ],
        isActive: true,
        displayOrder: 1
    },
    {
        programId: 'mba-executive',
        name: 'MBA Executive',
        shortName: 'MBA Executive',
        description: 'Premium executive education for senior professionals. Weekend classes designed for working professionals with 5+ years of experience. Focus on strategy, leadership, and global business projects.',
        tagline: 'Premium executive education for senior professionals. Weekend classes designed for working professionals with 5+ years of experience.',
        duration: {
            value: '18 Months',
            unit: 'Months'
        },
        intake: {
            value: 180,
            label: 'Students'
        },
        avgPackage: {
            value: '₹25 LPA',
            label: 'LPA'
        },
        features: [
            'Weekend and evening classes',
            'Industry-focused curriculum',
            'Executive coaching and mentoring',
            'Global immersion programs',
            'Peer learning from experienced professionals',
            'Leadership development workshops'
        ],
        specializations: [
            { name: 'Finance & Strategy', description: 'Advanced financial management and strategic planning' },
            { name: 'Marketing & Analytics', description: 'Executive-level marketing strategy and analytics' },
            { name: 'Operations & Supply Chain', description: 'Strategic operations and supply chain optimization' },
            { name: 'Entrepreneurship', description: 'Intrapreneurship and new venture creation' }
        ],
        eligibilityCriteria: [
            "Bachelor's degree with minimum 50%",
            'Minimum 5 years of work experience',
            'Personal Interview & Case Study Discussion'
        ],
        admissionProcess: [
            { step: 1, title: 'Submit online application form', description: 'Complete application with work experience details' },
            { step: 2, title: 'Upload academic & experience documents', description: 'Submit transcripts and experience certificates' },
            { step: 3, title: 'Appear for entrance exam', description: 'Take the executive entrance examination' },
            { step: 4, title: 'Attend case study & interview', description: 'Present case study and participate in interview' },
            { step: 5, title: 'Receive final admission offer', description: 'Get your admission decision and program details' }
        ],
        isActive: true,
        displayOrder: 2
    },
    {
        programId: 'mba-online',
        name: 'MBA Online',
        shortName: 'MBA Online',
        description: 'Flexible online learning designed for working professionals. Learn at your own pace with live weekly sessions and recorded content. Perfect for those balancing work and education.',
        tagline: 'Flexible online learning designed for working professionals. Learn at your own pace with live weekly sessions and recorded content.',
        duration: {
            value: '2 Years',
            unit: 'Years'
        },
        intake: {
            value: 450,
            label: 'Students'
        },
        avgPackage: {
            value: '₹15 LPA',
            label: 'LPA'
        },
        features: [
            'Self-paced learning modules',
            'Live interactive sessions',
            'Industry expert guest lectures',
            'Virtual networking opportunities',
            'Digital library access',
            'Online career support'
        ],
        specializations: [
            { name: 'Finance & Strategy', description: 'Online financial management and strategic thinking' },
            { name: 'Marketing & Analytics', description: 'Digital marketing and data analytics' },
            { name: 'Technology & Innovation', description: 'Tech entrepreneurship and innovation management' },
            { name: 'Business Analytics', description: 'Advanced business analytics and data science' }
        ],
        eligibilityCriteria: [
            "Bachelor's degree with minimum 50%",
            'Valid entrance exam score or work experience',
            'Online assessment and interview'
        ],
        admissionProcess: [
            { step: 1, title: 'Submit online application form', description: 'Complete the digital application process' },
            { step: 2, title: 'Upload academic documents', description: 'Submit all required academic credentials' },
            { step: 3, title: 'Complete online assessment', description: 'Take the online entrance assessment' },
            { step: 4, title: 'Virtual interview', description: 'Participate in online interview session' },
            { step: 5, title: 'Receive final admission offer', description: 'Get your admission decision via email' }
        ],
        isActive: true,
        displayOrder: 3
    }
];

const courses = [
    // MBA Full-Time Courses
    {
        courseCode: 'FIN-301',
        courseName: 'Corporate Finance',
        programId: 'mba-fulltime',
        department: 'Finance & Strategy',
        level: 'Core',
        credits: 4,
        description: 'Advanced corporate finance covering capital structure, valuation, and financial strategy',
        instructorName: 'Dr. Brown',
        semester: 3,
        enrolledStudents: 45,
        maxCapacity: 60,
        status: 'Published',
        prerequisites: ['Financial Accounting', 'Managerial Economics'],
        learningOutcomes: [
            'Understand capital budgeting decisions',
            'Analyze corporate financial strategies',
            'Evaluate investment opportunities'
        ],
        assessmentMethods: [
            { method: 'Mid-term Exam', weightage: 30 },
            { method: 'Final Exam', weightage: 40 },
            { method: 'Case Studies', weightage: 20 },
            { method: 'Class Participation', weightage: 10 }
        ]
    },
    {
        courseCode: 'MKT-301',
        courseName: 'Marketing Management',
        programId: 'mba-fulltime',
        department: 'Marketing & Analytics',
        level: 'Core',
        credits: 4,
        description: 'Comprehensive marketing management covering strategy, consumer behavior, and market analysis',
        instructorName: 'Prof. Davis',
        semester: 3,
        enrolledStudents: 52,
        maxCapacity: 60,
        status: 'Published',
        prerequisites: ['Principles of Management'],
        learningOutcomes: [
            'Develop marketing strategies',
            'Analyze consumer behavior',
            'Create marketing plans'
        ],
        assessmentMethods: [
            { method: 'Marketing Plan Project', weightage: 40 },
            { method: 'Mid-term Exam', weightage: 25 },
            { method: 'Final Exam', weightage: 25 },
            { method: 'Presentations', weightage: 10 }
        ]
    },
    {
        courseCode: 'OPS-401',
        courseName: 'Operations Research',
        programId: 'mba-fulltime',
        department: 'Operations & Supply Chain',
        level: 'Advanced',
        credits: 3,
        description: 'Quantitative methods for optimizing business operations and decision-making',
        instructorName: 'Dr. Wilson',
        semester: 4,
        enrolledStudents: 38,
        maxCapacity: 50,
        status: 'Published',
        prerequisites: ['Business Statistics', 'Operations Management'],
        learningOutcomes: [
            'Apply optimization techniques',
            'Solve complex operational problems',
            'Use quantitative decision-making tools'
        ]
    },
    {
        courseCode: 'FIN-501',
        courseName: 'Advanced Financial Analytics',
        programId: 'mba-fulltime',
        department: 'Finance & Strategy',
        level: 'Advanced',
        credits: 3,
        description: 'Data-driven financial analysis using modern analytics tools and techniques',
        instructorName: 'Dr. Smith',
        semester: 5,
        enrolledStudents: 0,
        maxCapacity: 40,
        status: 'Draft',
        prerequisites: ['Corporate Finance', 'Business Analytics'],
        learningOutcomes: [
            'Master financial modeling',
            'Analyze financial data using Python/R',
            'Build predictive financial models'
        ]
    },
    {
        courseCode: 'MKT-401',
        courseName: 'Digital Marketing Strategy',
        programId: 'mba-fulltime',
        department: 'Marketing & Analytics',
        level: 'Elective',
        credits: 3,
        description: 'Modern digital marketing strategies including SEO, SEM, social media, and content marketing',
        instructorName: 'Prof. Jameson',
        semester: 4,
        enrolledStudents: 0,
        maxCapacity: 35,
        status: 'Under Review',
        prerequisites: ['Marketing Management'],
        learningOutcomes: [
            'Develop digital marketing campaigns',
            'Analyze digital marketing metrics',
            'Optimize online presence'
        ]
    },

    // MBA Executive Courses
    {
        courseCode: 'OPS-301',
        courseName: 'Supply Chain Management',
        programId: 'mba-executive',
        department: 'Operations & Supply Chain',
        level: 'Core',
        credits: 4,
        description: 'Strategic supply chain management for executives covering global logistics and optimization',
        instructorName: 'Dr. Williams',
        semester: 3,
        enrolledStudents: 0,
        maxCapacity: 40,
        status: 'Published',
        prerequisites: [],
        learningOutcomes: [
            'Design efficient supply chains',
            'Manage global logistics',
            'Optimize inventory and distribution'
        ]
    },
    {
        courseCode: 'ENT-401',
        courseName: 'Corporate Entrepreneurship',
        programId: 'mba-executive',
        department: 'Entrepreneurship',
        level: 'Elective',
        credits: 3,
        description: 'Intrapreneurship and innovation within established organizations',
        instructorName: 'Prof. Taylor',
        semester: 4,
        enrolledStudents: 20,
        maxCapacity: 30,
        status: 'Published',
        prerequisites: [],
        learningOutcomes: [
            'Foster innovation in organizations',
            'Develop new business ventures',
            'Manage innovation portfolios'
        ]
    },

    // MBA Online Courses
    {
        courseCode: 'MKT-201',
        courseName: 'Digital Marketing Fundamentals',
        programId: 'mba-online',
        department: 'Marketing & Analytics',
        level: 'Foundation',
        credits: 3,
        description: 'Introduction to digital marketing concepts and tools for online learners',
        instructorName: 'Prof. Anderson',
        semester: 2,
        enrolledStudents: 120,
        maxCapacity: 150,
        status: 'Published',
        prerequisites: [],
        learningOutcomes: [
            'Understand digital marketing landscape',
            'Use basic digital marketing tools',
            'Create simple digital campaigns'
        ]
    },
    {
        courseCode: 'BAN-301',
        courseName: 'Business Analytics',
        programId: 'mba-online',
        department: 'Business Analytics',
        level: 'Core',
        credits: 4,
        description: 'Data analytics for business decision-making using modern tools and techniques',
        instructorName: 'Dr. Martinez',
        semester: 3,
        enrolledStudents: 95,
        maxCapacity: 120,
        status: 'Published',
        prerequisites: ['Business Statistics'],
        learningOutcomes: [
            'Analyze business data',
            'Build predictive models',
            'Make data-driven decisions'
        ]
    },
    {
        courseCode: 'TEC-401',
        courseName: 'Technology & Innovation Management',
        programId: 'mba-online',
        department: 'Technology & Innovation',
        level: 'Elective',
        credits: 3,
        description: 'Managing technology and innovation in digital business environments',
        instructorName: 'Prof. Lee',
        semester: 4,
        enrolledStudents: 0,
        maxCapacity: 100,
        status: 'Draft',
        prerequisites: [],
        learningOutcomes: [
            'Manage technology projects',
            'Drive digital transformation',
            'Foster innovation culture'
        ]
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();

        // Clear existing data
        console.log('Clearing existing programs and courses...');
        await Program.deleteMany({});
        await Course.deleteMany({});

        // Insert programs
        console.log('Seeding programs...');
        const insertedPrograms = await Program.insertMany(programs);
        console.log(`✓ ${insertedPrograms.length} programs seeded successfully`);

        // Insert courses
        console.log('Seeding courses...');
        const insertedCourses = await Course.insertMany(courses);
        console.log(`✓ ${insertedCourses.length} courses seeded successfully`);

        console.log('\n✅ Database seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
