import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const newFacultyMembers = [
    {
        id: 101,
        name: "Prof. Saptaparna Ghosh",
        title: "Asst. Head of the Department (Management)",
        specialization: "International Marketing, Global & Digital Marketing",
        image: "",
        achievements: "-",
        email: "saptaparna.ghosh@iem.edu.in",
        bio: "15 years of Industrial experience (L&T, Tata Communications Ltd., Vodafone) and 6 years of teaching experience",
        researchAreas: ["International Marketing", "Global & Digital Marketing"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (Electronics and Telecommunication) IEM", "MBA (Marketing) VGSOM (IIT Kharagpur)"],
        linkedin: "",
        slug: "saptaparna-ghosh"
    },
    {
        id: 102,
        name: "Prof. (Dr.) Bikas Chandra Mandal",
        title: "Professor",
        specialization: "Sales & Marketing",
        image: "",
        achievements: "-",
        email: "bikas.mandal@iem.edu.in",
        bio: "36 years of experience in Industry & academics",
        researchAreas: ["Sales & Marketing"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (IIT Bombay)", "PGDM (IIM, Calcutta)"],
        linkedin: "",
        slug: "bikas-chandra-mandal"
    },
    {
        id: 103,
        name: "Prof. (Dr.) Swati Mukherjee",
        title: "Professor",
        specialization: "Marketing Management, Consumer Behaviour, Advertising and Sales Promotion",
        image: "",
        achievements: "Several Publications in National Journal",
        email: "swati.mukherjee@iem.edu.in",
        bio: "16 Years teaching experience and 12 years research experience. Several Publications in National Journal.",
        researchAreas: ["Marketing Management", "Consumer Behaviour", "Advertising and Sales Promotion"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["MBA (Marketing)", "Ph.D"],
        linkedin: "",
        slug: "swati-mukherjee"
    },
    {
        id: 104,
        name: "Prof. Arundhati Ray",
        title: "Professor",
        specialization: "Economics",
        image: "",
        achievements: "TEA Fellow - Fulbright Commission",
        email: "arundhati.ray@iem.edu.in",
        bio: "18 years of teaching experience",
        researchAreas: ["Economics"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["M.Phil (Eco.)", "B.Ed. (Calcutta University)"],
        linkedin: "",
        slug: "arundhati-ray"
    },
    {
        id: 105,
        name: "Prof. Sohini Datta",
        title: "Professor",
        specialization: "Business Communication, Soft Skills and Personality Development",
        image: "",
        achievements: "-",
        email: "sohini.datta@iem.edu.in",
        bio: "15 years of experience in Academics",
        researchAreas: ["Business Communication", "Soft Skills", "Personality Development"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["M.Phil (English) University of Calcutta", "M.A (English) University of Calcutta", "B.A (English) University of Calcutta", "Ph.D (Pursuing)"],
        linkedin: "",
        slug: "sohini-datta"
    },
    {
        id: 106,
        name: "Prof. (Dr.) Nivedita Mondal",
        title: "Professor",
        specialization: "Economics",
        image: "",
        achievements: "-",
        email: "nivedita.mondal@iem.edu.in",
        bio: "8+ years of experience in academics",
        researchAreas: ["Economics"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["Ph.D (Economics)", "M. Phil", "M.Sc - Calcutta University"],
        linkedin: "",
        slug: "nivedita-mondal"
    },
    {
        id: 107,
        name: "Prof. (Dr.) Prasenjit Kundu",
        title: "Professor",
        specialization: "HR and Operations Management",
        image: "",
        achievements: "-",
        email: "prasenjit.kundu@iem.edu.in",
        bio: "18 years of Academic experience in MIS, E-Business, SAP",
        researchAreas: ["HR and Operations Management", "MIS", "E-Business", "SAP"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["Ph.D (Computer Science) Utkal University", "B.Sc (Calcutta University)", "MCA (IGNOU)", "M.Phil (CS) CMJ", "MBA (NIMB)"],
        linkedin: "",
        slug: "prasenjit-kundu"
    },
    {
        id: 108,
        name: "Prof. (Dr.) Sutapa Chatterjee Bhattacharya",
        title: "Professor",
        specialization: "HR",
        image: "",
        achievements: "-",
        email: "sutapa.chatterjee@iem.edu.in",
        bio: "33 years of experience in India and abroad. 22 years in MNCs & 11 years in academics",
        researchAreas: ["HR", "Human Resource Management"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["Ph.D. (CU)", "MBA (IISWBM)"],
        linkedin: "",
        slug: "sutapa-chatterjee-bhattacharya"
    },
    {
        id: 109,
        name: "Prof. (Dr.) Anik Kumar Hazra",
        title: "Assistant Professor",
        specialization: "Finance",
        image: "",
        achievements: "-",
        email: "anik.hazra@iem.edu.in",
        bio: "10 years Academic Experience",
        researchAreas: ["Finance"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["Ph.D Visva-Bharati University Santiniketan", "B.Tech (Electronics & Communication Engineering)", "MBA (Finance-Major)"],
        linkedin: "",
        slug: "anik-kumar-hazra"
    },
    {
        id: 110,
        name: "Prof. Shouvik Chattopadhyay",
        title: "Assistant Professor",
        specialization: "Logistics and Supply Chain Management",
        image: "",
        achievements: "-",
        email: "shouvik.chattopadhyay@iem.edu.in",
        bio: "20 years of Industrial and academic experience in all over India and Middle East",
        researchAreas: ["Logistics and Supply Chain Management"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["PGDTLM", "B.Com", "DJOA (Norway)", "SSGB (USA)", "Ohsas 18001:2007 (UK)"],
        linkedin: "",
        slug: "shouvik-chattopadhyay"
    },
    {
        id: 111,
        name: "Prof. Writaparna Mukherjee",
        title: "Assistant Professor",
        specialization: "IT, Systems",
        image: "",
        achievements: "-",
        email: "writaparna.mukherjee@iem.edu.in",
        bio: "14 Years experience",
        researchAreas: ["IT", "Systems"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["B.Tech (IT)", "M.Tech (CSE)"],
        linkedin: "",
        slug: "writaparna-mukherjee"
    },
    {
        id: 112,
        name: "Prof. Kaushik Kr. Ganguly",
        title: "Assistant Professor",
        specialization: "Marketing",
        image: "",
        achievements: "-",
        email: "kaushik.ganguly@iem.edu.in",
        bio: "22 years of Industrial experience",
        researchAreas: ["Marketing"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["B.Sc Engineering (Electronics & Communication) BIT Sindri", "MBA (FOMS - Jabalpur)"],
        linkedin: "",
        slug: "kaushik-kr-ganguly"
    },
    {
        id: 113,
        name: "Prof. Prarthana Banerjee",
        title: "Assistant Professor",
        specialization: "Economics",
        image: "",
        achievements: "-",
        email: "prarthana.banerjee@iem.edu.in",
        bio: "18 years in academics",
        researchAreas: ["Economics"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["M. Phil (J.U)", "M. Sc in Economics (C. U.)"],
        linkedin: "",
        slug: "prarthana-banerjee"
    },
    {
        id: 114,
        name: "Ms Sanhita Ghosh",
        title: "Assistant Professor",
        specialization: "Finance",
        image: "",
        achievements: "-",
        email: "sanhita.ghosh@iem.edu.in",
        bio: "10 years Corporate experience in Finance",
        researchAreas: ["Finance"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["MBA from Kalyani University", "Master (Finance) from University of Illinois Chicago"],
        linkedin: "",
        slug: "sanhita-ghosh"
    },
    {
        id: 115,
        name: "Prof. Chirabrata Majumder",
        title: "Professor",
        specialization: "Industry Academia Collaborations and Coach Start-up Entrepreneurs",
        image: "",
        achievements: "-",
        email: "chirabrata.majumder@iem.edu.in",
        bio: "26 years of Industry experience in senior strategic and Leadership positions. 1 and half years experience in Academia.",
        researchAreas: ["HR", "Industry Academia Collaborations"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["PGDBM-HR", "PRINCE2"],
        linkedin: "",
        slug: "chirabrata-majumder"
    },
    {
        id: 116,
        name: "Prof. (Dr.) Subrata Chattopadhyay",
        title: "Professor",
        specialization: "Marketing and Strategy",
        image: "",
        achievements: "-",
        email: "subrata.chattopadhyay@iem.edu.in",
        bio: "5 years Corporate experience & 15 years academic experience",
        researchAreas: ["Marketing and Strategy"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["MSc. Physics (CU)", "MBA", "PGDCA", "PHD (IIT-ISM Dhanbad)"],
        linkedin: "",
        slug: "subrata-chattopadhyay"
    },
    {
        id: 117,
        name: "Prof. (Dr.) Dipak Saha",
        title: "Professor & Convener - Center of Excellence for Business Research & Cases",
        specialization: "Supply Chain Management, Marketing",
        image: "",
        achievements: "-",
        email: "dipak.saha@iem.edu.in",
        bio: "3 years Industry experience & 17 years academic experience",
        researchAreas: ["Supply Chain Management", "Marketing"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["PhD", "MBA"],
        linkedin: "",
        slug: "dipak-saha"
    },
    {
        id: 118,
        name: "Prof. (Dr.) Nadinla Srividya",
        title: "Professor",
        specialization: "HR and Marketing",
        image: "",
        achievements: "-",
        email: "nadinla.srividya@iem.edu.in",
        bio: "20 years academic experience",
        researchAreas: ["HR and Marketing"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["Post Doc", "PhD", "MPhil", "MBA", "B.Tech"],
        linkedin: "",
        slug: "nadinla-srividya"
    },
    {
        id: 119,
        name: "Prof. (Dr.) Udit Chawla",
        title: "Associate Professor",
        specialization: "Business Analytics",
        image: "",
        achievements: "-",
        email: "udit.chawla@iem.edu.in",
        bio: "4 years Corporate experience & 11 years academic experience",
        researchAreas: ["Business Analytics"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["PhD in Management (RK University, Gujrat)", "BTech", "MBA"],
        linkedin: "",
        slug: "udit-chawla"
    },
    {
        id: 120,
        name: "Prof. Saugata Ghosh",
        title: "Assistant Professor of Practice",
        specialization: "Finance and Stock Market Analyst",
        image: "",
        achievements: "-",
        email: "saugata.ghosh@iem.edu.in",
        bio: "23 years Corporate experience & 5 years academic experience",
        researchAreas: ["Finance", "Stock Market Analysis"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["B.Com"],
        linkedin: "",
        slug: "saugata-ghosh"
    },
    {
        id: 121,
        name: "Prof. Debasree Saha",
        title: "Assistant Professor",
        specialization: "Human Resource",
        image: "",
        achievements: "-",
        email: "debasree.saha@iem.edu.in",
        bio: "Over 10 years experience in industry",
        researchAreas: ["Human Resource"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["MBA (IISWBM)", "Pursuing PhD from UEM"],
        linkedin: "",
        slug: "debasree-saha"
    },
    {
        id: 122,
        name: "Prof. Dr. Pritha Chanda",
        title: "Assistant Professor",
        specialization: "Human Resource Management",
        image: "",
        achievements: "-",
        email: "pritha.chanda@iem.edu.in",
        bio: "5 years of academic experience",
        researchAreas: ["Human Resource Management"],
        currentProjects: [],
        publications: 0,
        students: 0,
        qualifications: ["MBA & M.Phil - Indian Institute of Social Welfare and Business Management", "Ph.D - Department of Business Management University of Calcutta"],
        linkedin: "",
        slug: "pritha-chanda"
    }
];

async function seedFaculty() {
    const client = new MongoClient(MONGODB_URI);

    try {
        console.log('Connecting to MongoDB...');
        await client.connect();
        console.log('Connected!\n');

        const db = client.db('mba_portal');
        const facultyCollection = db.collection('faculty');

        // Check existing count
        const existingCount = await facultyCollection.countDocuments();
        console.log(`Current faculty count: ${existingCount}\n`);

        let added = 0;
        let skipped = 0;

        for (const faculty of newFacultyMembers) {
            // Check if already exists
            const exists = await facultyCollection.findOne({ id: faculty.id });
            if (exists) {
                console.log(`SKIP: ID ${faculty.id} - ${faculty.name} (already exists)`);
                skipped++;
                continue;
            }

            // Add createdAt and updatedAt timestamps
            const docToInsert = {
                ...faculty,
                createdAt: new Date(),
                updatedAt: new Date()
            };

            await facultyCollection.insertOne(docToInsert);
            console.log(`ADDED: ID ${faculty.id} - ${faculty.name}`);
            added++;
        }

        console.log('\n========== SUMMARY ==========');
        console.log(`Added: ${added}`);
        console.log(`Skipped: ${skipped}`);

        const finalCount = await facultyCollection.countDocuments();
        console.log(`\nTotal faculty now: ${finalCount}`);

        // List all faculty
        console.log('\n========== ALL FACULTY ==========');
        const allFaculty = await facultyCollection.find().sort({ id: 1 }).toArray();
        allFaculty.forEach((f, i) => {
            console.log(`${i + 1}. ID: ${f.id} - ${f.name}`);
        });

    } catch (err) {
        console.error('ERROR:', err.message);
    } finally {
        await client.close();
        console.log('\nDisconnected from MongoDB.');
    }
}

seedFaculty();
