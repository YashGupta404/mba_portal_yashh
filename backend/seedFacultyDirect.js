import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Faculty from './models/Faculty.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const newFacultyMembers = [
    {
        id: 101,
        name: "Prof. Saptaparna Ghosh",
        title: "Asst. Head of the Department (Management)",
        specialization: "International Marketing, Global & Digital Marketing",
        email: "saptaparna.ghosh@iem.edu.in",
        image: "",
        bio: "15 years of Industrial experience (L&T, Tata Communications Ltd., Vodafone) and 6 years of teaching experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (Electronics and Telecommunication) IEM", "MBA (Marketing) VGSOM (IIT Kharagpur)"],
        researchAreas: ["International Marketing", "Global & Digital Marketing"],
        currentProjects: []
    },
    {
        id: 102,
        name: "Prof. (Dr.) Bikas Chandra Mandal",
        title: "Professor",
        specialization: "Sales & Marketing",
        email: "bikas.mandal@iem.edu.in",
        image: "",
        bio: "36 years of experience in Industry & academics",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (IIT Bombay)", "PGDM (IIM, Calcutta)"],
        researchAreas: ["Sales & Marketing"],
        currentProjects: []
    },
    {
        id: 103,
        name: "Prof. (Dr.) Swati Mukherjee",
        title: "Professor",
        specialization: "Marketing Management, Consumer Behaviour, Advertising and Sales Promotion",
        email: "swati.mukherjee@iem.edu.in",
        image: "",
        bio: "16 Years teaching experience and 12 years research experience. Several Publications in National Journal.",
        achievements: "Several Publications in National Journal",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["MBA (Marketing)", "Ph.D"],
        researchAreas: ["Marketing Management", "Consumer Behaviour", "Advertising and Sales Promotion"],
        currentProjects: []
    },
    {
        id: 104,
        name: "Prof. Arundhati Ray",
        title: "Professor",
        specialization: "Economics",
        email: "arundhati.ray@iem.edu.in",
        image: "",
        bio: "18 years of teaching experience",
        achievements: "TEA Fellow - Fulbright Commission",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["M.Phil (Eco.)", "B.Ed. (Calcutta University)"],
        researchAreas: ["Economics"],
        currentProjects: []
    },
    {
        id: 105,
        name: "Prof. Sohini Datta",
        title: "Professor",
        specialization: "Business Communication, Soft Skills and Personality Development",
        email: "sohini.datta@iem.edu.in",
        image: "",
        bio: "15 years of experience in Academics",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["M.Phil (English) University of Calcutta", "M.A (English) University of Calcutta", "B.A (English) University of Calcutta", "Ph.D (Pursuing)"],
        researchAreas: ["Business Communication", "Soft Skills", "Personality Development"],
        currentProjects: []
    },
    {
        id: 106,
        name: "Prof. (Dr.) Nivedita Mondal",
        title: "Professor",
        specialization: "Economics",
        email: "nivedita.mondal@iem.edu.in",
        image: "",
        bio: "8+ years of experience in academics",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["Ph.D (Economics)", "M. Phil", "M.Sc - Calcutta University"],
        researchAreas: ["Economics"],
        currentProjects: []
    },
    {
        id: 107,
        name: "Prof. (Dr.) Prasenjit Kundu",
        title: "Professor",
        specialization: "HR and Operations Management",
        email: "prasenjit.kundu@iem.edu.in",
        image: "",
        bio: "18 years of Academic experience in MIS, E-Business, SAP",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["Ph.D (Computer Science) Utkal University", "B.Sc (Calcutta University)", "MCA (IGNOU)", "M.Phil (CS) CMJ", "MBA (NIMB)"],
        researchAreas: ["HR and Operations Management", "MIS", "E-Business", "SAP"],
        currentProjects: []
    },
    {
        id: 108,
        name: "Prof. (Dr.) Sutapa Chatterjee Bhattacharya",
        title: "Professor",
        specialization: "HR",
        email: "sutapa.chatterjee@iem.edu.in",
        image: "",
        bio: "33 years of experience in India and abroad. 22 years in MNCs & 11 years in academics",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["Ph.D. (CU)", "MBA (IISWBM)"],
        researchAreas: ["HR", "Human Resource Management"],
        currentProjects: []
    },
    {
        id: 109,
        name: "Prof. (Dr.) Anik Kumar Hazra",
        title: "Assistant Professor",
        specialization: "Finance",
        email: "anik.hazra@iem.edu.in",
        image: "",
        bio: "10 years Academic Experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["Ph.D Visva-Bharati University Santiniketan", "B.Tech (Electronics & Communication Engineering)", "MBA (Finance-Major)"],
        researchAreas: ["Finance"],
        currentProjects: []
    },
    {
        id: 110,
        name: "Prof. Shouvik Chattopadhyay",
        title: "Assistant Professor",
        specialization: "Logistics and Supply Chain Management",
        email: "shouvik.chattopadhyay@iem.edu.in",
        image: "",
        bio: "20 years of Industrial and academic experience in all over India and Middle East",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["PGDTLM", "B.Com", "DJOA (Norway)", "SSGB (USA)", "Ohsas 18001:2007 (UK)"],
        researchAreas: ["Logistics and Supply Chain Management"],
        currentProjects: []
    },
    {
        id: 111,
        name: "Prof. Writaparna Mukherjee",
        title: "Assistant Professor",
        specialization: "IT, Systems",
        email: "writaparna.mukherjee@iem.edu.in",
        image: "",
        bio: "14 Years experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (IT)", "M.Tech (CSE)"],
        researchAreas: ["IT", "Systems"],
        currentProjects: []
    },
    {
        id: 112,
        name: "Prof. Kaushik Kr. Ganguly",
        title: "Assistant Professor",
        specialization: "Marketing",
        email: "kaushik.ganguly@iem.edu.in",
        image: "",
        bio: "22 years of Industrial experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["B.Sc Engineering (Electronics & Communication) BIT Sindri", "MBA (FOMS - Jabalpur)"],
        researchAreas: ["Marketing"],
        currentProjects: []
    },
    {
        id: 113,
        name: "Prof. Prarthana Banerjee",
        title: "Assistant Professor",
        specialization: "Economics",
        email: "prarthana.banerjee@iem.edu.in",
        image: "",
        bio: "18 years in academics",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["M. Phil (J.U)", "M. Sc in Economics (C. U.)"],
        researchAreas: ["Economics"],
        currentProjects: []
    },
    {
        id: 114,
        name: "Ms Sanhita Ghosh",
        title: "Assistant Professor",
        specialization: "Finance",
        email: "sanhita.ghosh@iem.edu.in",
        image: "",
        bio: "10 years Corporate experience in Finance",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["MBA from Kalyani University", "Master (Finance) from University of Illinois Chicago"],
        researchAreas: ["Finance"],
        currentProjects: []
    },
    {
        id: 115,
        name: "Prof. Chirabrata Majumder",
        title: "Professor",
        specialization: "Industry Academia Collaborations and Coach Start-up Entrepreneurs",
        email: "chirabrata.majumder@iem.edu.in",
        image: "",
        bio: "26 years of Industry experience in senior strategic and Leadership positions. 1 and half years experience in Academia. Expert in Industry Academia Collaborations and Coach Start-up Entrepreneurs.",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["PGDBM-HR", "PRINCE2"],
        researchAreas: ["HR", "Industry Academia Collaborations"],
        currentProjects: []
    },
    {
        id: 116,
        name: "Prof. (Dr.) Subrata Chattopadhyay",
        title: "Professor",
        specialization: "Marketing and Strategy",
        email: "subrata.chattopadhyay@iem.edu.in",
        image: "",
        bio: "5 years Corporate experience & 15 years academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["MSc. Physics (CU)", "MBA", "PGDCA", "PHD (IIT-ISM Dhanbad)"],
        researchAreas: ["Marketing and Strategy"],
        currentProjects: []
    },
    {
        id: 117,
        name: "Prof. (Dr.) Dipak Saha",
        title: "Professor & Convener - Center of Excellence for Business Research & Cases",
        specialization: "Supply Chain Management, Marketing",
        email: "dipak.saha@iem.edu.in",
        image: "",
        bio: "3 years Industry experience & 17 years academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["PhD", "MBA"],
        researchAreas: ["Supply Chain Management", "Marketing"],
        currentProjects: []
    },
    {
        id: 118,
        name: "Prof. (Dr.) Nadinla Srividya",
        title: "Professor",
        specialization: "HR and Marketing",
        email: "nadinla.srividya@iem.edu.in",
        image: "",
        bio: "20 years academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["Post Doc", "PhD", "MPhil", "MBA", "B.Tech"],
        researchAreas: ["HR and Marketing"],
        currentProjects: []
    },
    {
        id: 119,
        name: "Prof. (Dr.) Udit Chawla",
        title: "Associate Professor",
        specialization: "Business Analytics",
        email: "udit.chawla@iem.edu.in",
        image: "",
        bio: "4 years Corporate experience & 11 years academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["PhD in Management (RK University, Gujrat)", "BTech", "MBA"],
        researchAreas: ["Business Analytics"],
        currentProjects: []
    },
    {
        id: 120,
        name: "Prof. Saugata Ghosh",
        title: "Assistant Professor of Practice",
        specialization: "Finance and Stock Market Analyst",
        email: "saugata.ghosh@iem.edu.in",
        image: "",
        bio: "23 years Corporate experience & 5 years academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["B.Com"],
        researchAreas: ["Finance", "Stock Market Analysis"],
        currentProjects: []
    },
    {
        id: 121,
        name: "Prof. Debasree Saha",
        title: "Assistant Professor",
        specialization: "Human Resource",
        email: "debasree.saha@iem.edu.in",
        image: "",
        bio: "Over 10 years experience in industry",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["MBA (IISWBM)", "Pursuing PhD from UEM"],
        researchAreas: ["Human Resource"],
        currentProjects: []
    },
    {
        id: 122,
        name: "Prof. Dr. Pritha Chanda",
        title: "Assistant Professor",
        specialization: "Human Resource Management",
        email: "pritha.chanda@iem.edu.in",
        image: "",
        bio: "5 years of academic experience",
        achievements: "-",
        linkedin: "",
        publications: 0,
        students: 0,
        qualifications: ["MBA & M.Phil - Indian Institute of Social Welfare and Business Management", "Ph.D - Department of Business Management University of Calcutta"],
        researchAreas: ["Human Resource Management"],
        currentProjects: []
    }
];

async function seedFaculty() {
    console.log('🚀 Starting Faculty Seeding Process...\n');
    console.log('='.repeat(60));

    try {
        // Connect to MongoDB
        console.log('📡 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB successfully!\n');

        // Check existing faculty
        const existingFaculty = await Faculty.find().sort({ id: 1 });
        console.log(`📋 Existing faculty count: ${existingFaculty.length}`);
        existingFaculty.forEach(f => {
            console.log(`   - ID: ${f.id} - ${f.name}`);
        });

        console.log('\n' + '='.repeat(60));
        console.log('📝 Adding 22 new faculty members...\n');

        const results = {
            success: [],
            failed: [],
            skipped: []
        };

        for (const facultyData of newFacultyMembers) {
            try {
                // Check if faculty with this ID already exists
                const existing = await Faculty.findOne({ id: facultyData.id });
                if (existing) {
                    console.log(`⏭️  Skipped (already exists): ${facultyData.name} (ID: ${facultyData.id})`);
                    results.skipped.push(facultyData.name);
                    continue;
                }

                // Create new faculty
                const newFaculty = new Faculty(facultyData);
                await newFaculty.save();
                console.log(`✅ Successfully added: ${facultyData.name} (ID: ${facultyData.id})`);
                results.success.push(facultyData.name);
            } catch (error) {
                console.error(`❌ Failed to add: ${facultyData.name} (ID: ${facultyData.id}) - ${error.message}`);
                results.failed.push({ name: facultyData.name, error: error.message });
            }
        }

        console.log('\n' + '='.repeat(60));
        console.log('📊 SUMMARY\n');
        console.log(`✅ Successfully added: ${results.success.length} faculty members`);
        console.log(`⏭️  Skipped (already exist): ${results.skipped.length} faculty members`);
        console.log(`❌ Failed to add: ${results.failed.length} faculty members`);

        if (results.failed.length > 0) {
            console.log('\nFailed additions:');
            results.failed.forEach(f => {
                console.log(`  - ${f.name}: ${f.error}`);
            });
        }

        // Final verification
        console.log('\n' + '='.repeat(60));
        console.log('🔍 Final Verification...\n');
        const allFaculty = await Faculty.find().sort({ id: 1 });
        console.log(`📊 Total faculty members in database: ${allFaculty.length}`);
        console.log('\nComplete Faculty List:');
        allFaculty.forEach((f, i) => {
            console.log(`  ${i + 1}. ID: ${f.id} - ${f.name} (${f.title})`);
        });

        console.log('\n' + '='.repeat(60));
        console.log('✨ Faculty seeding process completed!');

    } catch (error) {
        console.error('❌ Fatal error:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('\n📡 Disconnected from MongoDB');
    }
}

seedFaculty();
