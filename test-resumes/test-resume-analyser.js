/**
 * Test Script for Resume Analyser
 * Creates 15 test resumes for specific specializations and tests the AI resume analyser
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Test resumes for each specialization
const TEST_RESUMES = [
    // ===== FINANCE RESUMES (3) =====
    {
        filename: 'resume_finance_1.txt',
        expectedSpecialization: 'finance',
        content: `JOHN SMITH
Financial Analyst | Investment Banking Professional

PROFESSIONAL EXPERIENCE

Senior Financial Analyst | Goldman Sachs | 2020 - Present
- Conducted equity research and valuation analysis for M&A transactions worth $500M+
- Built advanced financial models including DCF, LBO, and comparable company analysis
- Managed portfolio of investment banking clients in technology sector
- Performed due diligence for merger and acquisition deals

Financial Analyst | JP Morgan Chase | 2018 - 2020
- Analyzed corporate finance strategies and capital structure optimization
- Created financial statements analysis and earnings forecasts
- Supported investment banking team in IPO preparation
- Managed derivative portfolios and hedging strategies

EDUCATION
Bachelor of Commerce in Finance | University of Delhi | 2018
CFA Level 2 Candidate

SKILLS
- Financial Modeling (DCF, LBO, M&A)
- Bloomberg Terminal, Capital IQ
- Portfolio Management
- Risk Assessment
- Investment Valuation
- Corporate Finance`
    },
    {
        filename: 'resume_finance_2.txt',
        expectedSpecialization: 'finance',
        content: `PRIYA SHARMA
Investment Banker | Corporate Finance Specialist

SUMMARY
Experienced investment banking professional with 4 years of expertise in corporate finance, 
mergers and acquisitions, and capital markets. Strong background in financial analysis and valuation.

EXPERIENCE

Associate - Investment Banking | Citibank | 2021 - Present
- Lead execution of debt and equity capital raising transactions
- Prepared pitch books and financial presentations for C-suite executives
- Conducted credit analysis and risk assessment for lending decisions
- Managed relationships with institutional investors and fund managers

Equity Research Analyst | ICICI Securities | 2019 - 2021
- Published research reports on banking and financial services sector
- Developed financial models for stock price targets
- Monitored portfolio performance and market trends
- Analyzed balance sheets and income statements

EDUCATION
B.Com (Hons) Finance | Shri Ram College of Commerce | 2019

CERTIFICATIONS
- CFA Level 1 Cleared
- NISM Equity Dealers Certification

SKILLS
Financial Modeling, Valuation, M&A, IPO, Equity Research, Risk Management`
    },
    {
        filename: 'resume_finance_3.txt',
        expectedSpecialization: 'finance',
        content: `RAHUL GUPTA
Treasury Manager | Banking Operations

PROFILE
Seasoned finance professional with expertise in treasury operations, 
investment management, and corporate banking. Strong background in 
working capital management and cash flow optimization.

WORK EXPERIENCE

Treasury Manager | HDFC Bank | 2019 - Present
- Managed corporate treasury operations worth INR 5000 Crores
- Implemented hedging strategies for forex and interest rate risks
- Optimized working capital and liquidity management
- Developed investment strategies for surplus funds
- Analyzed financial derivatives and structured products

Senior Banking Officer | State Bank of India | 2016 - 2019
- Processed corporate loans and credit facilities
- Conducted financial statement analysis for credit decisions
- Managed NPA recovery and portfolio quality
- Prepared financial reports for regulatory compliance

EDUCATION
MBA in Banking & Finance | NMIMS Mumbai | 2016
B.Com | Mumbai University | 2014

SKILLS
Treasury Management, Corporate Banking, Financial Analysis,
Risk Management, WACC Analysis, Capital Budgeting, Forex Trading`
    },

    // ===== BUSINESS ANALYTICS RESUMES (3) =====
    {
        filename: 'resume_analytics_1.txt',
        expectedSpecialization: 'business-analytics',
        content: `ANANYA KRISHNAN
Data Scientist | Business Analytics Professional

SUMMARY
Data-driven professional with 3+ years of experience in business analytics,
machine learning, and data visualization. Expert in transforming complex data
into actionable business insights.

EXPERIENCE

Data Scientist | Amazon India | 2021 - Present
- Built predictive models for customer behavior analysis using Python and ML
- Developed dashboards in Tableau for real-time business intelligence
- Implemented A/B testing frameworks for product optimization
- Created recommendation algorithms increasing sales by 25%
- Analyzed big data using SQL and Apache Spark

Business Analyst | Flipkart | 2019 - 2021
- Conducted market research and competitive analysis
- Built KPI dashboards for executive decision-making
- Performed regression analysis for demand forecasting
- Automated reporting using Python and Excel VBA

EDUCATION
B.Tech in Computer Science | IIT Delhi | 2019

TECHNICAL SKILLS
Python, R, SQL, Tableau, Power BI, Machine Learning, 
Data Mining, Statistical Analysis, Big Data Analytics, TensorFlow`
    },
    {
        filename: 'resume_analytics_2.txt',
        expectedSpecialization: 'business-analytics',
        content: `VIKRAM REDDY
Business Intelligence Analyst | Data Analytics Expert

PROFILE
Analytics professional specializing in data-driven decision making,
business intelligence, and predictive analytics. Strong experience
in SQL, Python, and visualization tools.

PROFESSIONAL EXPERIENCE

Business Intelligence Manager | Infosys | 2020 - Present
- Led data analytics team of 8 analysts
- Designed enterprise data warehouse solutions
- Created ETL pipelines for data integration
- Built executive dashboards using Power BI
- Implemented predictive analytics for business forecasting

Data Analyst | TCS | 2017 - 2020
- Performed data mining and pattern recognition analysis
- Built statistical models for customer segmentation
- Automated data collection and reporting processes
- Conducted A/B testing for marketing campaigns

EDUCATION
M.Sc. Statistics | ISI Kolkata | 2017
B.Sc. Mathematics | St. Stephen's College | 2015

SKILLS
SQL, Python, R, Tableau, Power BI, Machine Learning,
Data Warehousing, ETL, Statistical Modeling, Predictive Analytics`
    },
    {
        filename: 'resume_analytics_3.txt',
        expectedSpecialization: 'business-analytics',
        content: `SNEHA PATEL
Analytics Consultant | Data Visualization Specialist

SUMMARY
Results-oriented analytics professional with expertise in business 
intelligence, data visualization, and statistical analysis. Passionate 
about transforming data into strategic insights.

EXPERIENCE

Senior Analytics Consultant | Deloitte | 2020 - Present
- Developed data strategy roadmaps for Fortune 500 clients
- Built machine learning models for risk prediction
- Created interactive dashboards for C-level executives
- Conducted advanced statistical analysis using R
- Implemented big data solutions using Hadoop and Spark

Data Visualization Analyst | Ernst & Young | 2018 - 2020
- Designed data visualization solutions using Tableau
- Performed regression and clustering analysis
- Built automated reporting systems
- Analyzed marketing ROI using attribution modeling

EDUCATION
MBA in Business Analytics | ISB Hyderabad | 2018
B.E. in IT | BITS Pilani | 2016

TECHNICAL EXPERTISE
Python, SQL, R, Tableau, Power BI, Apache Spark,
Data Mining, Predictive Modeling, Business Intelligence`
    },

    // ===== MARKETING RESUMES (3) =====
    {
        filename: 'resume_marketing_1.txt',
        expectedSpecialization: 'marketing',
        content: `MEERA IYER
Digital Marketing Manager | Brand Strategy Expert

PROFESSIONAL SUMMARY
Creative marketing professional with 4+ years of experience in digital
marketing, brand management, and consumer engagement. Proven track record
of driving brand growth through innovative marketing campaigns.

EXPERIENCE

Digital Marketing Manager | Hindustan Unilever | 2021 - Present
- Led digital marketing campaigns for 5 consumer brands
- Increased social media engagement by 150% through content strategy
- Managed brand positioning and marketing communications
- Conducted consumer behavior research and market segmentation
- Optimized SEO and SEM strategies for brand visibility

Brand Executive | P&G India | 2019 - 2021
- Developed integrated marketing campaigns for FMCG products
- Managed advertising agency relationships
- Conducted market research and competitor analysis
- Executed product launch strategies

EDUCATION
BBA in Marketing | Christ University | 2019

SKILLS
Digital Marketing, Brand Management, Content Strategy,
Social Media Marketing, SEO/SEM, Consumer Behavior, Market Research`
    },
    {
        filename: 'resume_marketing_2.txt',
        expectedSpecialization: 'marketing',
        content: `ARUN KUMAR
Product Marketing Manager | Growth Marketing Specialist

PROFILE
Strategic marketing professional with expertise in product marketing,
growth hacking, and customer acquisition. Strong background in B2B
and B2C marketing campaigns.

WORK EXPERIENCE

Product Marketing Manager | Zomato | 2020 - Present
- Developed go-to-market strategies for new product features
- Led customer acquisition campaigns increasing user base by 40%
- Created compelling brand messaging and value propositions
- Managed influencer marketing and PR campaigns
- Analyzed customer journey and improved conversion rates

Growth Marketing Lead | Swiggy | 2018 - 2020
- Executed performance marketing campaigns across channels
- Optimized CTR and CPA through A/B testing
- Built customer retention programs
- Managed PPC and display advertising budgets

EDUCATION
PGDM Marketing | MICA Ahmedabad | 2018
B.A. in Mass Communication | Delhi University | 2016

SKILLS
Product Marketing, Growth Hacking, Digital Advertising,
Content Marketing, Brand Strategy, Customer Acquisition, CRM`
    },
    {
        filename: 'resume_marketing_3.txt',
        expectedSpecialization: 'marketing',
        content: `KAVITHA RAMESH
Brand Manager | Consumer Marketing Expert

SUMMARY
Experienced brand management professional with deep expertise in
consumer marketing, advertising, and retail strategy. Passionate about
building iconic brands through creative campaigns.

EXPERIENCE

Brand Manager | Nestle India | 2019 - Present
- Managed P&L for brand portfolio worth INR 500 Crores
- Developed 360-degree marketing campaigns
- Led consumer insight studies and focus groups
- Partnered with advertising agencies for creative development
- Executed sales promotions and trade marketing initiatives

Marketing Executive | ITC Limited | 2017 - 2019
- Supported brand launches in FMCG category
- Conducted market segmentation and targeting analysis
- Managed point-of-sale marketing materials
- Analyzed sales funnel and customer behavior

EDUCATION
MBA in Marketing | XLRI Jamshedpur | 2017
B.Com | Loyola College Chennai | 2015

EXPERTISE
Brand Management, Consumer Marketing, Advertising,
Market Research, Retail Marketing, Trade Promotions, CRM`
    },

    // ===== OPERATIONS RESUMES (2) =====
    {
        filename: 'resume_operations_1.txt',
        expectedSpecialization: 'operations',
        content: `SURESH MENON
Operations Manager | Supply Chain Expert

PROFESSIONAL SUMMARY
Operations and supply chain professional with 5+ years of experience
in manufacturing, logistics, and process optimization. Certified
Six Sigma Black Belt with proven record of efficiency improvements.

EXPERIENCE

Operations Manager | Tata Motors | 2020 - Present
- Managed plant operations with 200+ workforce
- Implemented lean manufacturing reducing waste by 30%
- Optimized supply chain processes and vendor management
- Led Six Sigma projects achieving significant cost savings
- Improved production capacity through Kaizen initiatives

Supply Chain Analyst | Mahindra & Mahindra | 2018 - 2020
- Managed inventory optimization and demand forecasting
- Implemented JIT (Just-in-Time) inventory systems
- Coordinated logistics and distribution network
- Analyzed bottlenecks and improved throughput

EDUCATION
B.E. in Mechanical Engineering | VJTI Mumbai | 2018

CERTIFICATIONS
- Six Sigma Black Belt
- PMP Certified

SKILLS
Supply Chain Management, Lean Manufacturing, Six Sigma,
Operations Research, Project Management, Inventory Control, TQM`
    },
    {
        filename: 'resume_operations_2.txt',
        expectedSpecialization: 'operations',
        content: `DEEPAK SHARMA
Plant Manager | Manufacturing Excellence Leader

PROFILE
Senior operations professional with expertise in manufacturing
operations, quality management, and continuous improvement.
Strong background in automotive and FMCG manufacturing.

WORK EXPERIENCE

Plant Manager | Maruti Suzuki | 2019 - Present
- Led manufacturing operations for 500+ team
- Achieved 99.5% quality standards through TQM implementation
- Reduced production lead time by 25% using Kanban systems
- Managed material requirements planning (MRP)
- Implemented 5S methodology across plant

Production Manager | Bajaj Auto | 2016 - 2019
- Supervised assembly line operations
- Led capacity planning and resource allocation
- Implemented EOQ models for inventory management
- Conducted root cause analysis for quality issues

EDUCATION
MBA in Operations | NITIE Mumbai | 2016
B.Tech in Production Engineering | NIT Trichy | 2014

SKILLS
Manufacturing Operations, TQM, Lean Six Sigma, Supply Chain,
Production Planning, Kaizen, 5S, MRP, Quality Management`
    },

    // ===== HR RESUMES (2) =====
    {
        filename: 'resume_hr_1.txt',
        expectedSpecialization: 'hr',
        content: `POOJA SAXENA
HR Manager | Talent Acquisition Specialist

PROFESSIONAL SUMMARY
Human Resources professional with 4+ years of experience in talent
management, employee engagement, and HR operations. Strong expertise
in recruitment, performance management, and organizational development.

EXPERIENCE

HR Manager | Wipro Technologies | 2021 - Present
- Led talent acquisition for 500+ positions annually
- Designed employee engagement programs improving retention by 20%
- Implemented 360-degree feedback and performance appraisal systems
- Developed succession planning for leadership roles
- Managed compensation and benefits administration

HR Business Partner | Cognizant | 2019 - 2021
- Partnered with business leaders on workforce planning
- Conducted training needs analysis and L&D programs
- Managed onboarding and offboarding processes
- Handled employee grievances and conflict resolution

EDUCATION
MBA in Human Resources | XLRI Jamshedpur | 2019
B.A. Psychology | Lady Shri Ram College | 2017

SKILLS
Talent Acquisition, Employee Engagement, Performance Management,
Training & Development, Organizational Behavior, HR Analytics, HRIS`
    },
    {
        filename: 'resume_hr_2.txt',
        expectedSpecialization: 'hr',
        content: `RAJESH NAIR
CHRO | Human Resources Leader

PROFILE
Senior HR leader with 8+ years of experience in strategic HR,
organizational development, and culture transformation. Expert in
building high-performance teams and employer branding.

WORK EXPERIENCE

Vice President - HR | Tech Mahindra | 2020 - Present
- Led HR strategy for 10,000+ employee division
- Designed competency frameworks and career paths
- Implemented HR analytics dashboard for decision making
- Drove diversity and inclusion initiatives
- Managed psychometric testing for leadership selection

Senior HR Manager | Infosys | 2016 - 2020
- Managed end-to-end recruitment lifecycle
- Designed PIP (Performance Improvement Plans)
- Led campus recruitment programs
- Developed employer branding strategy

EDUCATION
PGDM HR | TISS Mumbai | 2016
B.Com | Symbiosis Pune | 2014

EXPERTISE
Strategic HR, Talent Management, Organizational Development,
Employee Engagement, Compensation & Benefits, HR Analytics, L&D`
    },

    // ===== ENTREPRENEURSHIP RESUMES (2) =====
    {
        filename: 'resume_entrepreneurship_1.txt',
        expectedSpecialization: 'entrepreneurship',
        content: `ARJUN KAPOOR
Startup Founder | Serial Entrepreneur

PROFESSIONAL SUMMARY
Entrepreneurial leader with experience founding and scaling technology
startups. Strong background in venture funding, business model
development, and product innovation.

ENTREPRENEURIAL EXPERIENCE

Founder & CEO | TechVentures Pvt Ltd | 2020 - Present
- Founded B2B SaaS startup, raised $2M seed funding
- Built product from MVP to product-market fit
- Managed team of 25 across engineering and sales
- Pitched to venture capitalists and angel investors
- Developed business model canvas and growth strategy

Co-Founder | EduLearn App | 2018 - 2020
- Bootstrapped ed-tech startup to 100K users
- Led new venture creation from ideation to launch
- Managed customer acquisition cost optimization
- Successfully pivoted product based on market feedback

EDUCATION
B.Tech Computer Science | IIT Bombay | 2018

SKILLS
Startup Funding, Venture Capital, Business Model Innovation,
MVP Development, Lean Startup, Product-Market Fit, CAC/LTV Analysis,
Pitch Deck Creation, Term Sheet Negotiation`
    },
    {
        filename: 'resume_entrepreneurship_2.txt',
        expectedSpecialization: 'entrepreneurship',
        content: `NISHA AGARWAL
Business Development Director | Startup Ecosystem Expert

PROFILE
Entrepreneurship-focused professional with experience in business
incubation, venture capital, and startup mentoring. Passionate about
fostering innovation and supporting new venture development.

EXPERIENCE

Director - Startup Programs | IIM Bangalore Incubator | 2020 - Present
- Mentored 50+ startups from ideation to Series A
- Managed seed funding and angel investment processes
- Organized pitch competitions and demo days
- Developed entrepreneur training programs
- Facilitated equity dilution and cap table management

Venture Capital Associate | Sequoia Capital India | 2018 - 2020
- Evaluated startup investment opportunities
- Conducted due diligence and term sheet analysis
- Supported portfolio companies with growth strategies
- Analyzed runway calculations and burn rates

EDUCATION
MBA - Entrepreneurship | Stanford GSB | 2018
B.E. Electronics | BITS Pilani | 2016

EXPERTISE
Startup Ecosystem, Venture Capital, Business Incubation,
Seed Funding, Series A, Business Model Canvas, Cap Table,
Founder Coaching, Pitch Deck Review`
    }
];

// Function to create test resume files
async function createTestResumes() {
    console.log('📁 Creating test resumes...\n');

    const resumesDir = path.join(__dirname);

    for (const resume of TEST_RESUMES) {
        const filePath = path.join(resumesDir, resume.filename);
        fs.writeFileSync(filePath, resume.content, 'utf-8');
        console.log(`✅ Created: ${resume.filename} (Expected: ${resume.expectedSpecialization})`);
    }

    console.log(`\n📊 Total resumes created: ${TEST_RESUMES.length}`);
}

// Function to test resume analyser API
async function testResumeAnalyser() {
    console.log('\n🔬 Testing Resume Analyser...\n');
    console.log('='.repeat(70));

    const API_URL = 'http://localhost:5000';

    let correctPredictions = 0;
    let totalTests = 0;
    const results = [];

    for (const resume of TEST_RESUMES) {
        totalTests++;

        try {
            // Send resume text for analysis
            const response = await fetch(`${API_URL}/api/mba-fit/resume/analyze-text`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ resumeText: resume.content })
            });

            const data = await response.json();

            if (data.success && data.data.primaryMatch) {
                const predictedSpec = data.data.primaryMatch.id;
                const expectedSpec = resume.expectedSpecialization;
                const isCorrect = predictedSpec === expectedSpec;

                if (isCorrect) correctPredictions++;

                const result = {
                    resume: resume.filename,
                    expected: expectedSpec,
                    predicted: predictedSpec,
                    correct: isCorrect,
                    score: data.data.primaryMatch.score,
                    secondaryMatch: data.data.secondaryMatch?.id
                };

                results.push(result);

                const status = isCorrect ? '✅ CORRECT' : '❌ WRONG';
                console.log(`${status} | ${resume.filename}`);
                console.log(`   Expected: ${expectedSpec} | Predicted: ${predictedSpec} | Score: ${data.data.primaryMatch.score}`);
                if (!isCorrect) {
                    console.log(`   Secondary: ${data.data.secondaryMatch?.id}`);
                }
                console.log('-'.repeat(70));
            } else {
                console.log(`❌ ERROR | ${resume.filename}: ${data.error || 'Unknown error'}`);
                results.push({
                    resume: resume.filename,
                    expected: resume.expectedSpecialization,
                    predicted: 'ERROR',
                    correct: false,
                    error: data.error
                });
            }
        } catch (error) {
            console.log(`❌ ERROR | ${resume.filename}: ${error.message}`);
            results.push({
                resume: resume.filename,
                expected: resume.expectedSpecialization,
                predicted: 'ERROR',
                correct: false,
                error: error.message
            });
        }
    }

    // Print summary
    console.log('\n' + '='.repeat(70));
    console.log('📊 FINAL RESULTS');
    console.log('='.repeat(70));
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Correct Predictions: ${correctPredictions}`);
    console.log(`Wrong Predictions: ${totalTests - correctPredictions}`);
    console.log(`Accuracy: ${((correctPredictions / totalTests) * 100).toFixed(1)}%`);

    // Group by specialization
    console.log('\n📈 Results by Specialization:');
    const specGroups = {};
    results.forEach(r => {
        if (!specGroups[r.expected]) {
            specGroups[r.expected] = { total: 0, correct: 0 };
        }
        specGroups[r.expected].total++;
        if (r.correct) specGroups[r.expected].correct++;
    });

    for (const [spec, data] of Object.entries(specGroups)) {
        const accuracy = ((data.correct / data.total) * 100).toFixed(0);
        console.log(`   ${spec}: ${data.correct}/${data.total} (${accuracy}%)`);
    }

    return { correctPredictions, totalTests, accuracy: (correctPredictions / totalTests) * 100, results };
}

// Main execution
async function main() {
    console.log('🚀 Resume Analyser Test Suite');
    console.log('='.repeat(70));

    // Create the test resume files
    await createTestResumes();

    // Wait a bit then test
    console.log('\n⏳ Make sure the backend server is running on http://localhost:5000');
    console.log('   Run: cd backend && npm start\n');

    // Check if we should run tests
    const args = process.argv;
    if (args.includes('--test')) {
        await testResumeAnalyser();
    } else {
        console.log('💡 To run the tests, use: node test-resume-analyser.js --test');
    }
}

main().catch(console.error);
