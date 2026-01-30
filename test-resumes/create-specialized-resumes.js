/**
 * DOCX Resume Generator
 * Creates 15 .docx test resumes for all MBA specializations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Since we can't easily create proper DOCX files without a library,
// we'll create rich text files that can be converted to DOCX
// The resume analyzer accepts .txt, .pdf, and .docx files

const RESUMES = {
    finance: [
        {
            name: "finance_analyst_resume.txt",
            content: `SARAH JOHNSON
Senior Financial Analyst | Investment Banking Professional
Email: sarah.johnson@email.com | Phone: +91 9876543210

PROFESSIONAL SUMMARY
Results-driven financial analyst with 5+ years of experience in investment banking, 
corporate finance, and M&A advisory. Proven track record in financial modeling, 
valuation analysis, and strategic financial planning. CFA Level II candidate.

PROFESSIONAL EXPERIENCE

Senior Financial Analyst | Goldman Sachs India | 2020 - Present
• Led DCF and LBO valuation models for M&A transactions worth $500M+
• Managed portfolio of 15 corporate banking clients in technology sector
• Developed financial forecasts and conducted equity research
• Supported IPO preparations and debt restructuring projects
• Analyzed financial derivatives and hedging strategies

Financial Analyst | ICICI Bank | 2018 - 2020
• Performed credit analysis and risk assessment for corporate loans
• Created financial statements analysis and earnings forecasts
• Supported investment banking team in capital raising activities
• Managed interest rate risk and forex hedging portfolios

EDUCATION
Bachelor of Commerce (Honors) | Delhi University | 2018
CFA Level II Candidate

TECHNICAL SKILLS
• Financial Modeling: DCF, LBO, M&A, Comparable Analysis
• Tools: Bloomberg Terminal, Capital IQ, FactSet, Excel VBA
• Analysis: Portfolio Management, Risk Assessment, Valuation
• Languages: Python (for financial analysis)`
        },
        {
            name: "investment_banker_resume.txt",
            content: `RAJIV MEHTA
Investment Banking Associate
Contact: rajiv.mehta@email.com | LinkedIn: /in/rajivmehta

CAREER OBJECTIVE
Investment banking professional seeking MBA to advance career in 
private equity and venture capital. Strong background in M&A, 
corporate finance, and capital markets.

WORK EXPERIENCE

Associate - Investment Banking | JP Morgan Chase | 2019 - Present
• Execute equity and debt capital raising transactions exceeding $1B
• Lead due diligence for merger and acquisition deals
• Build comprehensive financial models for client presentations
• Manage relationships with C-suite executives and institutional investors
• Analyze market trends and prepare pitch books

Investment Analyst | HDFC Securities | 2017 - 2019
• Conducted equity research covering banking and financial services
• Published investment recommendations with 85% accuracy rate
• Performed balance sheet analysis and valuation for stock picks
• Tracked portfolio performance and market movements

EDUCATION
B.Com in Finance | Mumbai University | 2017
NISM Certifications: Equity Derivatives, Investment Advisor

KEY COMPETENCIES
Investment Banking | Financial Modeling | M&A Advisory
Corporate Finance | Equity Research | Risk Management
Portfolio Analysis | Capital Markets | Treasury Operations`
        }
    ],
    analytics: [
        {
            name: "data_scientist_resume.txt",
            content: `PRIYA SHARMA
Data Scientist | Business Analytics Expert
priya.sharma@email.com | +91 8765432109

PROFILE
Data-driven professional with 4 years of experience in business analytics,
machine learning, and predictive modeling. Expert in transforming complex 
data into actionable business insights using Python, SQL, and ML frameworks.

PROFESSIONAL EXPERIENCE

Senior Data Scientist | Amazon India | 2021 - Present
• Built predictive models for customer behavior analysis achieving 92% accuracy
• Developed recommendation algorithms increasing cross-sell revenue by 25%
• Created Tableau dashboards for real-time business intelligence
• Implemented A/B testing frameworks optimizing product features
• Analyzed big data using Apache Spark and Hadoop ecosystem

Business Analyst | Flipkart | 2019 - 2021
• Conducted market research and competitive analysis using data mining
• Built KPI dashboards for executive decision-making in Power BI
• Performed regression analysis for demand forecasting
• Automated reporting pipelines using Python and SQL

EDUCATION
B.Tech in Computer Science | IIT Delhi | 2019

TECHNICAL EXPERTISE
Programming: Python, R, SQL, Scala
ML/AI: TensorFlow, Scikit-learn, PyTorch, XGBoost
Visualization: Tableau, Power BI, Matplotlib, D3.js
Big Data: Apache Spark, Hadoop, Hive, Kafka
Statistics: Regression, Classification, Clustering, Time Series`
        },
        {
            name: "bi_analyst_resume.txt",
            content: `ARUN KRISHNAN
Business Intelligence Analyst
arun.krishnan@email.com | Portfolio: arunkrishnan.dev

SUMMARY
Analytics professional specializing in business intelligence, data visualization,
and predictive analytics. 5+ years of experience building enterprise data solutions.

EXPERIENCE

Business Intelligence Manager | Infosys | 2020 - Present
• Led team of 8 data analysts for Fortune 500 clients
• Designed enterprise data warehouse solutions on Azure
• Created ETL pipelines for real-time data integration
• Built executive dashboards achieving 99.9% uptime
• Implemented predictive analytics for revenue forecasting

Data Analyst | TCS | 2018 - 2020
• Performed data mining and pattern recognition on customer data
• Built statistical models for customer segmentation
• Developed automated reporting using Python and SQL
• Conducted A/B testing for marketing campaigns

EDUCATION
M.Sc. Statistics | ISI Kolkata | 2018
B.Sc. Mathematics | St. Stephen's College | 2016

SKILLS & TOOLS
Data Analysis: Python, R, SQL, SAS
Visualization: Tableau, Power BI, Looker
Cloud: AWS, Azure, GCP
Databases: PostgreSQL, MongoDB, Snowflake
Statistics: Hypothesis Testing, Regression, ML Algorithms`
        }
    ],
    marketing: [
        {
            name: "digital_marketing_resume.txt",
            content: `NEHA GUPTA
Digital Marketing Manager | Brand Strategy Expert
neha.gupta@email.com | @nehadigital

PROFESSIONAL SUMMARY
Creative marketing professional with 4+ years driving digital marketing 
campaigns, brand management, and customer engagement strategies.
Proven track record of 150%+ growth in social media engagement.

WORK EXPERIENCE

Digital Marketing Manager | Hindustan Unilever | 2021 - Present
• Lead digital marketing campaigns for 5 consumer brands
• Increased social media engagement by 150% through content strategy
• Manage brand positioning and integrated marketing communications
• Conduct consumer behavior research and market segmentation
• Optimize SEO/SEM strategies increasing organic traffic by 80%
• Manage influencer marketing partnerships

Brand Executive | P&G India | 2019 - 2021
• Developed integrated marketing campaigns for FMCG products
• Managed advertising agency relationships and creative briefs
• Conducted market research and competitor analysis
• Executed product launch strategies with 95% retail penetration

EDUCATION
BBA in Marketing | Christ University | 2019

MARKETING SKILLS
Digital Marketing | SEO | SEM | PPC | Content Marketing
Social Media Strategy | Brand Management | Consumer Insights
Market Research | Campaign Management | Analytics
Tools: Google Analytics, HubSpot, Hootsuite, Adobe Creative Suite`
        },
        {
            name: "brand_manager_resume.txt",
            content: `VIKRAM SINGH
Brand Manager | Consumer Marketing Expert
vikram.singh@email.com | +91 9988776655

PROFILE
Experienced brand management professional with deep expertise in
consumer marketing, advertising, and retail strategy. Passionate about
building iconic brands through creative campaigns.

PROFESSIONAL EXPERIENCE

Brand Manager | Nestle India | 2020 - Present
• Manage P&L for brand portfolio worth INR 500 Crores
• Develop 360-degree marketing campaigns across channels
• Lead consumer insight studies and focus groups
• Partner with advertising agencies for creative development
• Execute sales promotions and trade marketing initiatives
• Manage customer acquisition campaigns with ROI tracking

Marketing Executive | ITC Limited | 2018 - 2020
• Supported brand launches in FMCG categories
• Conducted market segmentation and targeting analysis
• Managed point-of-sale marketing materials
• Analyzed sales funnel and customer journey

EDUCATION
MBA in Marketing | XLRI Jamshedpur | 2018
B.Com | Loyola College Chennai | 2016

EXPERTISE AREAS
Brand Strategy | Consumer Marketing | Advertising
Market Research | Retail Marketing | Trade Promotions
Campaign Analytics | Customer Acquisition | CRM`
        }
    ],
    operations: [
        {
            name: "supply_chain_resume.txt",
            content: `DEEPAK SHARMA
Operations Manager | Supply Chain Expert
deepak.sharma@email.com | +91 9123456789

PROFESSIONAL SUMMARY
Operations and supply chain professional with 6+ years experience in
manufacturing, logistics, and process optimization. Certified Six Sigma 
Black Belt with proven record of efficiency improvements.

WORK EXPERIENCE

Operations Manager | Tata Motors | 2020 - Present
• Manage plant operations with 200+ workforce
• Implemented lean manufacturing reducing waste by 30%
• Optimize supply chain processes and vendor management
• Lead Six Sigma projects achieving INR 5Cr cost savings
• Improve production capacity through Kaizen initiatives
• Manage inventory using JIT systems

Supply Chain Analyst | Mahindra & Mahindra | 2018 - 2020
• Managed inventory optimization and demand forecasting
• Implemented Just-In-Time inventory systems
• Coordinated logistics and distribution network
• Analyzed production bottlenecks and improved throughput

EDUCATION
B.E. Mechanical Engineering | VJTI Mumbai | 2018

CERTIFICATIONS
• Lean Six Sigma Black Belt
• PMP (Project Management Professional)
• APICS CSCP (Certified Supply Chain Professional)

CORE COMPETENCIES
Supply Chain Management | Lean Manufacturing | Six Sigma
Operations Research | Project Management | Quality Control
Inventory Management | TQM | Process Improvement`
        }
    ],
    hr: [
        {
            name: "hr_manager_resume.txt",
            content: `ANITA PATEL
HR Manager | Talent Management Specialist
anita.patel@email.com | +91 8899776655

PROFESSIONAL SUMMARY
Human Resources professional with 5+ years experience in talent management,
employee engagement, and HR operations. Expert in recruitment, performance
management, and organizational development.

WORK EXPERIENCE

HR Manager | Wipro Technologies | 2021 - Present
• Lead talent acquisition for 500+ positions annually
• Design employee engagement programs improving retention by 20%
• Implement 360-degree feedback and performance appraisal systems
• Develop succession planning for leadership roles
• Manage compensation and benefits administration
• Drive diversity and inclusion initiatives

HR Business Partner | Cognizant | 2019 - 2021
• Partner with business leaders on workforce planning
• Conduct training needs analysis and L&D programs
• Manage onboarding and offboarding processes
• Handle employee grievances and conflict resolution
• Implement HRIS and HR analytics dashboards

EDUCATION
MBA in Human Resources | XLRI Jamshedpur | 2019
B.A. Psychology | Lady Shri Ram College | 2017

HR EXPERTISE
Talent Acquisition | Employee Engagement | Performance Management
Training & Development | Organizational Behavior | HR Analytics
Compensation & Benefits | Employee Relations | Succession Planning
Tools: Workday, SuccessFactors, SAP HR, LinkedIn Recruiter`
        },
        {
            name: "chro_resume.txt",
            content: `SURESH NAIR
Vice President - Human Resources
suresh.nair@email.com | LinkedIn: /in/sureshnair

CAREER PROFILE
Senior HR leader with 10+ years experience in strategic HR, organizational
development, and culture transformation. Expert in building high-performance
teams and employer branding.

PROFESSIONAL EXPERIENCE

VP - Human Resources | Tech Mahindra | 2020 - Present
• Lead HR strategy for 10,000+ employee division
• Design competency frameworks and career development paths
• Implement HR analytics dashboard for data-driven decisions
• Drive diversity and inclusion initiatives achieving 40% women hiring
• Manage employee experience and engagement programs
• Conduct psychometric testing for leadership selection

Senior HR Manager | Infosys | 2015 - 2020
• Managed end-to-end recruitment lifecycle for tech roles
• Designed Performance Improvement Plans and coaching programs
• Led campus recruitment from 50+ engineering colleges
• Developed employer branding strategy increasing applications by 200%
• Implemented learning and development programs

EDUCATION
PGDM in HR | TISS Mumbai | 2015
B.Com | Symbiosis Pune | 2013

CORE COMPETENCIES
Strategic HR | Talent Management | Organizational Development
Employee Engagement | Compensation & Benefits | HR Analytics
Learning & Development | Workforce Planning | Culture Building`
        }
    ],
    entrepreneurship: [
        {
            name: "startup_founder_resume.txt",
            content: `ARJUN KAPOOR
Startup Founder & CEO
arjun.kapoor@email.com | @arjunstartup

PROFESSIONAL SUMMARY
Serial entrepreneur with experience founding and scaling technology startups.
Raised $2M+ in venture funding. Passionate about innovation, product development,
and building disruptive businesses.

ENTREPRENEURIAL EXPERIENCE

Founder & CEO | TechVentures Pvt Ltd | 2020 - Present
• Founded B2B SaaS startup for supply chain optimization
• Raised $2M seed funding from Sequoia and angel investors
• Built product from MVP to product-market fit
• Manage team of 25 across engineering, sales, and operations
• Developed business model canvas and growth strategy
• Achieved 300% revenue growth year-over-year

Co-Founder | EduLearn App | 2018 - 2020
• Bootstrapped ed-tech startup reaching 100K users
• Led new venture creation from ideation to market launch
• Managed customer acquisition with CAC < INR 50
• Successfully pivoted product based on market feedback
• Exited through acqui-hire to major ed-tech company

EDUCATION
B.Tech Computer Science | IIT Bombay | 2018

SKILLS & EXPERTISE
Startup Funding | Venture Capital | Business Model Innovation
MVP Development | Lean Startup | Product-Market Fit
CAC/LTV Analysis | Pitch Deck Creation | Team Building
Technologies: React, Node.js, AWS, Product Management`
        },
        {
            name: "business_developer_resume.txt",
            content: `NISHA AGARWAL
Business Development Director | Startup Ecosystem Expert
nisha.agarwal@email.com | +91 9876512345

PROFILE
Entrepreneurship-focused professional with experience in startup incubation,
venture capital, and business development. Passionate about fostering 
innovation and supporting new venture development.

WORK EXPERIENCE

Director - Startup Programs | IIM Bangalore Incubator | 2020 - Present
• Mentor 50+ startups from ideation to Series A funding
• Manage seed funding and angel investment processes
• Organize pitch competitions and demo days
• Develop entrepreneur training programs
• Facilitate cap table management and equity dilution planning
• Connect startups with venture capitalists and investors

Venture Capital Associate | Sequoia Capital India | 2018 - 2020
• Evaluated 200+ startup investment opportunities
• Conducted due diligence and term sheet analysis
• Supported portfolio companies with growth strategies
• Analyzed runway calculations and burn rate optimization
• Published market research on emerging sectors

EDUCATION
MBA - Entrepreneurship | Stanford GSB | 2018
B.E. Electronics | BITS Pilani | 2016

EXPERTISE
Startup Ecosystem | Venture Capital | Business Incubation
Seed Funding | Series A | Business Model Canvas
Founder Coaching | Cap Table | Pitch Deck Review
Due Diligence | Market Analysis | Growth Strategy`
        }
    ]
};

// Create resumes
async function createResumes() {
    console.log('Creating specialized resumes...\n');

    for (const [spec, resumes] of Object.entries(RESUMES)) {
        console.log(`📁 ${spec.toUpperCase()}`);
        for (const resume of resumes) {
            const filePath = path.join(__dirname, resume.name);
            fs.writeFileSync(filePath, resume.content, 'utf-8');
            console.log(`   ✅ Created: ${resume.name}`);
        }
    }

    console.log('\n✨ All resumes created successfully!');
    console.log('\nTo test these resumes:');
    console.log('1. Run: node run-test.js');
    console.log('2. Or upload them manually through http://localhost:3000/mba-fit-finder');
}

createResumes().catch(console.error);
