import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini Model lazily
let genAI = null;
let model = null;

function getModel() {
    if (!model) {
        genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    }
    return model;
}

// MBA Specializations with their courses
const MBA_SPECIALIZATIONS = [
    {
        id: "business-analytics",
        name: "MBA in Business Analytics",
        color: "#7CB342",
        courses: ["Business Statistics", "Data Mining", "Predictive Analytics", "Machine Learning for Business", "Big Data Analytics", "Business Intelligence", "Data Visualization"],
        roles: ["Business Analyst", "Data Analyst", "Strategy Consultant", "Analytics Manager"],
        traits: ["Passion for data-driven problem solving", "Preference for structured decision-making", "Interest in analytical and consulting roles"],
        electives: ["Advanced Business Analytics", "Strategic Decision Making", "Business Leadership"]
    },
    {
        id: "finance",
        name: "MBA in Finance",
        color: "#5C6BC0",
        courses: ["Corporate Finance", "Investment Banking", "Financial Derivatives", "Portfolio Management", "Mergers & Acquisitions", "Financial Risk Management", "Equity Research"],
        roles: ["Investment Banker", "Financial Analyst", "Portfolio Manager", "CFO"],
        traits: ["Strong numerical aptitude", "Interest in markets and investments", "Risk assessment capabilities"],
        electives: ["Corporate Finance", "Investment Banking", "Financial Risk Management"]
    },
    {
        id: "operations",
        name: "MBA in Operations",
        color: "#26A69A",
        courses: ["Supply Chain Management", "Operations Research", "Lean Manufacturing", "Six Sigma", "Project Management", "Quality Management", "Logistics Management"],
        roles: ["Operations Manager", "Supply Chain Analyst", "Process Improvement Lead", "Plant Manager"],
        traits: ["Process-oriented thinking", "Efficiency optimization mindset", "Detail-oriented approach"],
        electives: ["Supply Chain Management", "Lean Operations", "Quality Management"]
    },
    {
        id: "marketing",
        name: "MBA in Marketing",
        color: "#FF7043",
        courses: ["Consumer Behavior", "Brand Management", "Digital Marketing", "Market Research", "Advertising Management", "Sales Management", "Product Management"],
        roles: ["Brand Manager", "Marketing Director", "Product Manager", "Growth Hacker"],
        traits: ["Creative thinking ability", "Consumer behavior understanding", "Strong communication skills"],
        electives: ["Digital Marketing Strategy", "Brand Management", "Consumer Behavior"]
    },
    {
        id: "entrepreneurship",
        name: "MBA in Entrepreneurship",
        color: "#FFA726",
        courses: ["New Venture Creation", "Venture Capital", "Business Model Innovation", "Startup Funding", "Lean Startup Methodology", "Social Entrepreneurship", "Family Business Management"],
        roles: ["Startup Founder", "Venture Capitalist", "Product Innovator", "Business Development Manager"],
        traits: ["Risk-taking appetite", "Innovative mindset", "Leadership and vision"],
        electives: ["Venture Capital", "New Venture Creation", "Innovation Management"]
    },
    {
        id: "hr",
        name: "MBA in Human Resources",
        color: "#AB47BC",
        courses: ["Organizational Behavior", "Talent Management", "Compensation & Benefits", "Performance Management", "Training & Development", "Labor Laws", "HR Analytics"],
        roles: ["HR Manager", "Talent Acquisition Lead", "L&D Manager", "CHRO"],
        traits: ["People-oriented mindset", "Strong interpersonal skills", "Conflict resolution abilities"],
        electives: ["Talent Management", "Organizational Behavior", "Strategic HR"]
    }
];

// Large pool of MBA questions for variety
const MBA_QUESTION_POOL = [
    // Finance Questions
    {
        question: "What does ROI stand for in business?",
        course: "Financial Management",
        category: "Finance",
        targetSpecialization: "finance",
        options: [
            { text: "Return on Investment", isCorrect: true },
            { text: "Rate of Interest", isCorrect: false },
            { text: "Revenue of Industry", isCorrect: false },
            { text: "Risk of Inflation", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of a Balance Sheet?",
        course: "Financial Accounting",
        category: "Finance",
        targetSpecialization: "finance",
        options: [
            { text: "To show assets, liabilities, and equity at a point in time", isCorrect: true },
            { text: "To track daily sales", isCorrect: false },
            { text: "To measure employee productivity", isCorrect: false },
            { text: "To plan production schedules", isCorrect: false }
        ]
    },
    {
        question: "What does P/E ratio measure in stock analysis?",
        course: "Equity Research",
        category: "Finance",
        targetSpecialization: "finance",
        options: [
            { text: "Price to Earnings ratio - stock price relative to earnings", isCorrect: true },
            { text: "Production to Efficiency ratio", isCorrect: false },
            { text: "Profit to Expense ratio", isCorrect: false },
            { text: "Performance to Execution ratio", isCorrect: false }
        ]
    },
    {
        question: "What is NPV in capital budgeting?",
        course: "Corporate Finance",
        category: "Finance",
        targetSpecialization: "finance",
        options: [
            { text: "Net Present Value - the difference between present value of cash inflows and outflows", isCorrect: true },
            { text: "National Product Value", isCorrect: false },
            { text: "Net Profit Variance", isCorrect: false },
            { text: "Nominal Price Verification", isCorrect: false }
        ]
    },
    {
        question: "What is WACC used for in finance?",
        course: "Corporate Finance",
        category: "Finance",
        targetSpecialization: "finance",
        options: [
            { text: "Weighted Average Cost of Capital - to discount future cash flows", isCorrect: true },
            { text: "Weekly Average Consumer Cost", isCorrect: false },
            { text: "Wholesale Asset Control Cost", isCorrect: false },
            { text: "Working Asset Current Cost", isCorrect: false }
        ]
    },
    // Business Analytics Questions
    {
        question: "What is SWOT analysis used for?",
        course: "Strategic Management",
        category: "Business Analytics",
        targetSpecialization: "business-analytics",
        options: [
            { text: "To analyze Strengths, Weaknesses, Opportunities, and Threats", isCorrect: true },
            { text: "To calculate financial ratios", isCorrect: false },
            { text: "To measure employee satisfaction", isCorrect: false },
            { text: "To track inventory levels", isCorrect: false }
        ]
    },
    {
        question: "What does SQL stand for in data analysis?",
        course: "Data Mining",
        category: "Business Analytics",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Structured Query Language", isCorrect: true },
            { text: "Simple Question Logic", isCorrect: false },
            { text: "Statistical Quality Level", isCorrect: false },
            { text: "System Quality Language", isCorrect: false }
        ]
    },
    {
        question: "What is regression analysis used for?",
        course: "Business Statistics",
        category: "Business Analytics",
        targetSpecialization: "business-analytics",
        options: [
            { text: "To understand relationships between variables and make predictions", isCorrect: true },
            { text: "To calculate employee salaries", isCorrect: false },
            { text: "To design marketing campaigns", isCorrect: false },
            { text: "To manage inventory", isCorrect: false }
        ]
    },
    {
        question: "What is a KPI?",
        course: "Business Intelligence",
        category: "Business Analytics",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Key Performance Indicator - a measurable value showing how effectively goals are being achieved", isCorrect: true },
            { text: "Knowledge Process Integration", isCorrect: false },
            { text: "Key Product Investment", isCorrect: false },
            { text: "Knowledge Performance Index", isCorrect: false }
        ]
    },
    {
        question: "What is a dashboard in business intelligence?",
        course: "Data Visualization",
        category: "Business Analytics",
        targetSpecialization: "business-analytics",
        options: [
            { text: "A visual display of key metrics and data points for quick analysis", isCorrect: true },
            { text: "A car's control panel", isCorrect: false },
            { text: "A database storage system", isCorrect: false },
            { text: "An accounting ledger", isCorrect: false }
        ]
    },
    // Operations Questions
    {
        question: "What is the primary goal of Supply Chain Management?",
        course: "Supply Chain Management",
        category: "Operations",
        targetSpecialization: "operations",
        options: [
            { text: "To optimize the flow of goods from supplier to customer", isCorrect: true },
            { text: "To maximize advertising reach", isCorrect: false },
            { text: "To hire the best employees", isCorrect: false },
            { text: "To increase stock prices", isCorrect: false }
        ]
    },
    {
        question: "What is Six Sigma primarily used for?",
        course: "Quality Management",
        category: "Operations",
        targetSpecialization: "operations",
        options: [
            { text: "Quality improvement and defect reduction", isCorrect: true },
            { text: "Financial forecasting", isCorrect: false },
            { text: "Marketing campaigns", isCorrect: false },
            { text: "Employee recruitment", isCorrect: false }
        ]
    },
    {
        question: "What does JIT stand for in manufacturing?",
        course: "Lean Manufacturing",
        category: "Operations",
        targetSpecialization: "operations",
        options: [
            { text: "Just In Time - a production strategy to reduce inventory", isCorrect: true },
            { text: "Job Interview Training", isCorrect: false },
            { text: "Joint Investment Trust", isCorrect: false },
            { text: "Justified Inventory Tracking", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of a Gantt chart?",
        course: "Project Management",
        category: "Operations",
        targetSpecialization: "operations",
        options: [
            { text: "To visualize project schedules and task timelines", isCorrect: true },
            { text: "To show financial performance", isCorrect: false },
            { text: "To display organizational hierarchy", isCorrect: false },
            { text: "To track employee attendance", isCorrect: false }
        ]
    },
    {
        question: "What does TQM stand for?",
        course: "Quality Management",
        category: "Operations",
        targetSpecialization: "operations",
        options: [
            { text: "Total Quality Management", isCorrect: true },
            { text: "Technical Quality Metrics", isCorrect: false },
            { text: "Team Query Management", isCorrect: false },
            { text: "Tactical Quantity Measure", isCorrect: false }
        ]
    },
    // Marketing Questions
    {
        question: "What does B2B stand for in marketing?",
        course: "Marketing Management",
        category: "Marketing",
        targetSpecialization: "marketing",
        options: [
            { text: "Business to Business", isCorrect: true },
            { text: "Back to Basics", isCorrect: false },
            { text: "Buy to Build", isCorrect: false },
            { text: "Budget to Budget", isCorrect: false }
        ]
    },
    {
        question: "What is the full form of CRM in business?",
        course: "Sales Management",
        category: "Marketing",
        targetSpecialization: "marketing",
        options: [
            { text: "Customer Relationship Management", isCorrect: true },
            { text: "Cost Revenue Model", isCorrect: false },
            { text: "Corporate Resource Management", isCorrect: false },
            { text: "Company Risk Management", isCorrect: false }
        ]
    },
    {
        question: "What are the 4 Ps of Marketing?",
        course: "Marketing Management",
        category: "Marketing",
        targetSpecialization: "marketing",
        options: [
            { text: "Product, Price, Place, Promotion", isCorrect: true },
            { text: "People, Process, Performance, Profit", isCorrect: false },
            { text: "Planning, Production, Pricing, Promotion", isCorrect: false },
            { text: "Product, People, Profit, Place", isCorrect: false }
        ]
    },
    {
        question: "What is market segmentation?",
        course: "Consumer Behavior",
        category: "Marketing",
        targetSpecialization: "marketing",
        options: [
            { text: "Dividing a market into distinct groups of buyers with different needs", isCorrect: true },
            { text: "Cutting costs in marketing", isCorrect: false },
            { text: "Measuring market size", isCorrect: false },
            { text: "Setting product prices", isCorrect: false }
        ]
    },
    {
        question: "What is SEO in digital marketing?",
        course: "Digital Marketing",
        category: "Marketing",
        targetSpecialization: "marketing",
        options: [
            { text: "Search Engine Optimization - improving website visibility in search results", isCorrect: true },
            { text: "Sales Engagement Office", isCorrect: false },
            { text: "Social Enterprise Operations", isCorrect: false },
            { text: "Strategic Execution Order", isCorrect: false }
        ]
    },
    // Entrepreneurship Questions
    {
        question: "What is an MVP in startup terminology?",
        course: "Lean Startup Methodology",
        category: "Entrepreneurship",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Minimum Viable Product", isCorrect: true },
            { text: "Maximum Value Proposition", isCorrect: false },
            { text: "Most Valuable Player", isCorrect: false },
            { text: "Market Value Price", isCorrect: false }
        ]
    },
    {
        question: "What is a pivot in startup context?",
        course: "New Venture Creation",
        category: "Entrepreneurship",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "A fundamental change in business strategy or direction", isCorrect: true },
            { text: "A basketball move", isCorrect: false },
            { text: "An accounting term", isCorrect: false },
            { text: "A type of funding", isCorrect: false }
        ]
    },
    {
        question: "What is seed funding?",
        course: "Startup Funding",
        category: "Entrepreneurship",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Initial capital to start a business, often from founders or angel investors", isCorrect: true },
            { text: "Money for agricultural businesses", isCorrect: false },
            { text: "Government grants for research", isCorrect: false },
            { text: "Bank loans for expansion", isCorrect: false }
        ]
    },
    {
        question: "What is a unicorn startup?",
        course: "Venture Capital",
        category: "Entrepreneurship",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "A privately-held startup valued at over $1 billion", isCorrect: true },
            { text: "A startup that sells mythical products", isCorrect: false },
            { text: "A startup with only one founder", isCorrect: false },
            { text: "A startup that never makes profit", isCorrect: false }
        ]
    },
    {
        question: "What is a business incubator?",
        course: "New Venture Creation",
        category: "Entrepreneurship",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "An organization that helps startups grow with resources and mentoring", isCorrect: true },
            { text: "A type of factory equipment", isCorrect: false },
            { text: "A marketing strategy", isCorrect: false },
            { text: "A financial instrument", isCorrect: false }
        ]
    },
    // HR Questions
    {
        question: "What is the purpose of performance appraisal?",
        course: "Performance Management",
        category: "Human Resources",
        targetSpecialization: "hr",
        options: [
            { text: "To evaluate employee performance and provide feedback", isCorrect: true },
            { text: "To calculate product pricing", isCorrect: false },
            { text: "To manage inventory", isCorrect: false },
            { text: "To analyze market trends", isCorrect: false }
        ]
    },
    {
        question: "What does HRIS stand for?",
        course: "HR Analytics",
        category: "Human Resources",
        targetSpecialization: "hr",
        options: [
            { text: "Human Resource Information System", isCorrect: true },
            { text: "High Revenue Investment Strategy", isCorrect: false },
            { text: "Human Rights Information Service", isCorrect: false },
            { text: "Hybrid Resource Integration System", isCorrect: false }
        ]
    },
    {
        question: "What is employee attrition?",
        course: "Talent Management",
        category: "Human Resources",
        targetSpecialization: "hr",
        options: [
            { text: "The rate at which employees leave an organization", isCorrect: true },
            { text: "Employee productivity levels", isCorrect: false },
            { text: "Training effectiveness", isCorrect: false },
            { text: "Salary increments", isCorrect: false }
        ]
    },
    {
        question: "What is onboarding in HR?",
        course: "Training & Development",
        category: "Human Resources",
        targetSpecialization: "hr",
        options: [
            { text: "The process of integrating new employees into an organization", isCorrect: true },
            { text: "Firing employees", isCorrect: false },
            { text: "Giving salary raises", isCorrect: false },
            { text: "Conducting exit interviews", isCorrect: false }
        ]
    },
    {
        question: "What is the purpose of a job description?",
        course: "Talent Management",
        category: "Human Resources",
        targetSpecialization: "hr",
        options: [
            { text: "To outline responsibilities, qualifications, and expectations for a role", isCorrect: true },
            { text: "To set product prices", isCorrect: false },
            { text: "To define marketing strategy", isCorrect: false },
            { text: "To plan production schedules", isCorrect: false }
        ]
    },
    // Additional Finance Questions
    { question: "What is liquidity in finance?", targetSpecialization: "finance", options: [{ text: "Ability to convert assets to cash quickly", isCorrect: true }, { text: "Company profitability", isCorrect: false }, { text: "Market share", isCorrect: false }, { text: "Revenue growth", isCorrect: false }] },
    { question: "What does IPO stand for?", targetSpecialization: "finance", options: [{ text: "Initial Public Offering", isCorrect: true }, { text: "Internal Profit Operation", isCorrect: false }, { text: "Investment Portfolio Option", isCorrect: false }, { text: "Income Payment Order", isCorrect: false }] },
    { question: "What is a dividend?", targetSpecialization: "finance", options: [{ text: "Distribution of profits to shareholders", isCorrect: true }, { text: "Company debt", isCorrect: false }, { text: "Employee bonus", isCorrect: false }, { text: "Tax payment", isCorrect: false }] },
    { question: "What is depreciation?", targetSpecialization: "finance", options: [{ text: "Decrease in asset value over time", isCorrect: true }, { text: "Increase in stock price", isCorrect: false }, { text: "Interest payment", isCorrect: false }, { text: "Sales revenue", isCorrect: false }] },
    { question: "What is EBITDA?", targetSpecialization: "finance", options: [{ text: "Earnings Before Interest, Taxes, Depreciation, Amortization", isCorrect: true }, { text: "Economic Business Investment Data Analysis", isCorrect: false }, { text: "Enterprise Budget and Tax Assessment", isCorrect: false }, { text: "Equity Based Investment Trading Account", isCorrect: false }] },
    { question: "What is a mutual fund?", targetSpecialization: "finance", options: [{ text: "Investment vehicle pooling money from multiple investors", isCorrect: true }, { text: "Bank savings account", isCorrect: false }, { text: "Insurance policy", isCorrect: false }, { text: "Government bond", isCorrect: false }] },
    { question: "What is working capital?", targetSpecialization: "finance", options: [{ text: "Current assets minus current liabilities", isCorrect: true }, { text: "Total company revenue", isCorrect: false }, { text: "Annual profit", isCorrect: false }, { text: "Employee wages", isCorrect: false }] },
    { question: "What is a bear market?", targetSpecialization: "finance", options: [{ text: "Market with declining prices", isCorrect: true }, { text: "Market with rising prices", isCorrect: false }, { text: "Stable market", isCorrect: false }, { text: "New market", isCorrect: false }] },
    { question: "What is hedging in finance?", targetSpecialization: "finance", options: [{ text: "Strategy to reduce investment risk", isCorrect: true }, { text: "Aggressive investing", isCorrect: false }, { text: "Tax evasion", isCorrect: false }, { text: "Profit maximization", isCorrect: false }] },
    { question: "What is equity?", targetSpecialization: "finance", options: [{ text: "Ownership interest in a company", isCorrect: true }, { text: "Company debt", isCorrect: false }, { text: "Operating expenses", isCorrect: false }, { text: "Sales revenue", isCorrect: false }] },
    // Additional Business Analytics Questions
    { question: "What is big data?", targetSpecialization: "business-analytics", options: [{ text: "Large complex datasets requiring advanced processing", isCorrect: true }, { text: "Company financial reports", isCorrect: false }, { text: "Employee database", isCorrect: false }, { text: "Customer list", isCorrect: false }] },
    { question: "What is data mining?", targetSpecialization: "business-analytics", options: [{ text: "Process of discovering patterns in large datasets", isCorrect: true }, { text: "Underground data storage", isCorrect: false }, { text: "Data deletion", isCorrect: false }, { text: "Database backup", isCorrect: false }] },
    { question: "What is machine learning?", targetSpecialization: "business-analytics", options: [{ text: "AI systems that learn from data", isCorrect: true }, { text: "Computer hardware", isCorrect: false }, { text: "Manual data entry", isCorrect: false }, { text: "Software installation", isCorrect: false }] },
    { question: "What is predictive analytics?", targetSpecialization: "business-analytics", options: [{ text: "Using data to forecast future outcomes", isCorrect: true }, { text: "Historical reporting only", isCorrect: false }, { text: "Real-time monitoring", isCorrect: false }, { text: "Data storage", isCorrect: false }] },
    { question: "What is A/B testing?", targetSpecialization: "business-analytics", options: [{ text: "Comparing two versions to see which performs better", isCorrect: true }, { text: "Blood type testing", isCorrect: false }, { text: "Alphabet learning", isCorrect: false }, { text: "Audio testing", isCorrect: false }] },
    { question: "What is ETL in data processing?", targetSpecialization: "business-analytics", options: [{ text: "Extract, Transform, Load", isCorrect: true }, { text: "Evaluate, Test, Launch", isCorrect: false }, { text: "Enter, Track, Log", isCorrect: false }, { text: "Export, Transfer, Link", isCorrect: false }] },
    { question: "What is a data warehouse?", targetSpecialization: "business-analytics", options: [{ text: "Central repository for integrated data", isCorrect: true }, { text: "Physical storage building", isCorrect: false }, { text: "Computer hardware", isCorrect: false }, { text: "Email server", isCorrect: false }] },
    { question: "What does API stand for?", targetSpecialization: "business-analytics", options: [{ text: "Application Programming Interface", isCorrect: true }, { text: "Advanced Programming Integration", isCorrect: false }, { text: "Automated Process Instruction", isCorrect: false }, { text: "Analysis Platform Index", isCorrect: false }] },
    { question: "What is clustering in analytics?", targetSpecialization: "business-analytics", options: [{ text: "Grouping similar data points together", isCorrect: true }, { text: "Deleting data", isCorrect: false }, { text: "Sorting alphabetically", isCorrect: false }, { text: "Counting records", isCorrect: false }] },
    { question: "What is a scatter plot used for?", targetSpecialization: "business-analytics", options: [{ text: "Showing relationship between two variables", isCorrect: true }, { text: "Displaying time series", isCorrect: false }, { text: "Showing percentages", isCorrect: false }, { text: "Counting items", isCorrect: false }] },
    // Additional Operations Questions
    { question: "What is inventory management?", targetSpecialization: "operations", options: [{ text: "Tracking and controlling stock levels", isCorrect: true }, { text: "Employee scheduling", isCorrect: false }, { text: "Financial planning", isCorrect: false }, { text: "Marketing campaigns", isCorrect: false }] },
    { question: "What is capacity planning?", targetSpecialization: "operations", options: [{ text: "Determining production capability needed", isCorrect: true }, { text: "Office space design", isCorrect: false }, { text: "Budget allocation", isCorrect: false }, { text: "Hiring decisions", isCorrect: false }] },
    { question: "What is a bottleneck in operations?", targetSpecialization: "operations", options: [{ text: "Point limiting overall system throughput", isCorrect: true }, { text: "Container design", isCorrect: false }, { text: "Quality issue", isCorrect: false }, { text: "Shipping method", isCorrect: false }] },
    { question: "What is Kaizen?", targetSpecialization: "operations", options: [{ text: "Continuous improvement philosophy", isCorrect: true }, { text: "Japanese food", isCorrect: false }, { text: "Martial art", isCorrect: false }, { text: "Car brand", isCorrect: false }] },
    { question: "What is lead time?", targetSpecialization: "operations", options: [{ text: "Time from order to delivery", isCorrect: true }, { text: "Employee break time", isCorrect: false }, { text: "Meeting duration", isCorrect: false }, { text: "Training period", isCorrect: false }] },
    { question: "What is EOQ?", targetSpecialization: "operations", options: [{ text: "Economic Order Quantity", isCorrect: true }, { text: "Employee Quality Objective", isCorrect: false }, { text: "Enterprise Operations Query", isCorrect: false }, { text: "Efficiency Output Quota", isCorrect: false }] },
    { question: "What is a Kanban system?", targetSpecialization: "operations", options: [{ text: "Visual workflow management method", isCorrect: true }, { text: "Accounting software", isCorrect: false }, { text: "HR system", isCorrect: false }, { text: "Marketing tool", isCorrect: false }] },
    { question: "What is 5S methodology?", targetSpecialization: "operations", options: [{ text: "Workplace organization method (Sort, Set, Shine, Standardize, Sustain)", isCorrect: true }, { text: "Sales strategy", isCorrect: false }, { text: "Security protocol", isCorrect: false }, { text: "Salary structure", isCorrect: false }] },
    { question: "What is MRP?", targetSpecialization: "operations", options: [{ text: "Material Requirements Planning", isCorrect: true }, { text: "Marketing Resource Program", isCorrect: false }, { text: "Management Review Process", isCorrect: false }, { text: "Monthly Revenue Projection", isCorrect: false }] },
    { question: "What is benchmarking?", targetSpecialization: "operations", options: [{ text: "Comparing performance against best practices", isCorrect: true }, { text: "Sitting arrangement", isCorrect: false }, { text: "Tool calibration", isCorrect: false }, { text: "Employee ranking", isCorrect: false }] },
    // Additional Marketing Questions
    { question: "What is brand equity?", targetSpecialization: "marketing", options: [{ text: "Value derived from brand recognition", isCorrect: true }, { text: "Company shares", isCorrect: false }, { text: "Building ownership", isCorrect: false }, { text: "Cash reserves", isCorrect: false }] },
    { question: "What is a target market?", targetSpecialization: "marketing", options: [{ text: "Specific group of consumers for a product", isCorrect: true }, { text: "Sales goal", isCorrect: false }, { text: "Competitor", isCorrect: false }, { text: "Supplier list", isCorrect: false }] },
    { question: "What is guerrilla marketing?", targetSpecialization: "marketing", options: [{ text: "Unconventional low-cost marketing tactics", isCorrect: true }, { text: "Military advertising", isCorrect: false }, { text: "Zoo promotions", isCorrect: false }, { text: "Outdoor campaigns only", isCorrect: false }] },
    { question: "What is CTR in digital marketing?", targetSpecialization: "marketing", options: [{ text: "Click-Through Rate", isCorrect: true }, { text: "Customer Trust Rating", isCorrect: false }, { text: "Content Transfer Rate", isCorrect: false }, { text: "Campaign Tracking Report", isCorrect: false }] },
    { question: "What is a USP?", targetSpecialization: "marketing", options: [{ text: "Unique Selling Proposition", isCorrect: true }, { text: "United Sales Platform", isCorrect: false }, { text: "Universal Service Plan", isCorrect: false }, { text: "User Support Portal", isCorrect: false }] },
    { question: "What is content marketing?", targetSpecialization: "marketing", options: [{ text: "Creating valuable content to attract customers", isCorrect: true }, { text: "TV commercials only", isCorrect: false }, { text: "Price discounting", isCorrect: false }, { text: "Product packaging", isCorrect: false }] },
    { question: "What is influencer marketing?", targetSpecialization: "marketing", options: [{ text: "Using social media personalities to promote products", isCorrect: true }, { text: "Employee advocacy", isCorrect: false }, { text: "Executive speeches", isCorrect: false }, { text: "Press releases", isCorrect: false }] },
    { question: "What is a sales funnel?", targetSpecialization: "marketing", options: [{ text: "Customer journey from awareness to purchase", isCorrect: true }, { text: "Kitchen equipment", isCorrect: false }, { text: "Factory tool", isCorrect: false }, { text: "Office supply", isCorrect: false }] },
    { question: "What is PPC advertising?", targetSpecialization: "marketing", options: [{ text: "Pay-Per-Click advertising", isCorrect: true }, { text: "Product Placement Campaign", isCorrect: false }, { text: "Public Promotion Channel", isCorrect: false }, { text: "Premium Price Category", isCorrect: false }] },
    { question: "What is retargeting?", targetSpecialization: "marketing", options: [{ text: "Showing ads to previous website visitors", isCorrect: true }, { text: "Changing target market", isCorrect: false }, { text: "Product relaunching", isCorrect: false }, { text: "Store relocation", isCorrect: false }] },
    // Additional Entrepreneurship Questions
    { question: "What is bootstrapping?", targetSpecialization: "entrepreneurship", options: [{ text: "Self-funding a business without external capital", isCorrect: true }, { text: "Boot manufacturing", isCorrect: false }, { text: "Computer startup", isCorrect: false }, { text: "Employee training", isCorrect: false }] },
    { question: "What is a business model canvas?", targetSpecialization: "entrepreneurship", options: [{ text: "Visual template for developing business models", isCorrect: true }, { text: "Painting for office", isCorrect: false }, { text: "Financial statement", isCorrect: false }, { text: "Legal document", isCorrect: false }] },
    { question: "What is equity dilution?", targetSpecialization: "entrepreneurship", options: [{ text: "Reduction in ownership percentage when new shares are issued", isCorrect: true }, { text: "Water purification", isCorrect: false }, { text: "Product mixing", isCorrect: false }, { text: "Sales reduction", isCorrect: false }] },
    { question: "What is a term sheet?", targetSpecialization: "entrepreneurship", options: [{ text: "Document outlining investment terms", isCorrect: true }, { text: "Product catalog", isCorrect: false }, { text: "Employee schedule", isCorrect: false }, { text: "Meeting agenda", isCorrect: false }] },
    { question: "What is product-market fit?", targetSpecialization: "entrepreneurship", options: [{ text: "When a product satisfies strong market demand", isCorrect: true }, { text: "Physical product size", isCorrect: false }, { text: "Store layout", isCorrect: false }, { text: "Shipping method", isCorrect: false }] },
    { question: "What is a Series A round?", targetSpecialization: "entrepreneurship", options: [{ text: "First significant venture capital funding", isCorrect: true }, { text: "TV show episode", isCorrect: false }, { text: "Sports competition", isCorrect: false }, { text: "Product version", isCorrect: false }] },
    { question: "What is runway in startup terms?", targetSpecialization: "entrepreneurship", options: [{ text: "Time before a startup runs out of money", isCorrect: true }, { text: "Airport strip", isCorrect: false }, { text: "Fashion show path", isCorrect: false }, { text: "Office hallway", isCorrect: false }] },
    { question: "What is a cap table?", targetSpecialization: "entrepreneurship", options: [{ text: "Capitalization table showing ownership stakes", isCorrect: true }, { text: "Furniture inventory", isCorrect: false }, { text: "Hat collection", isCorrect: false }, { text: "Capacity chart", isCorrect: false }] },
    { question: "What is customer acquisition cost?", targetSpecialization: "entrepreneurship", options: [{ text: "Cost to acquire a new customer", isCorrect: true }, { text: "Product price", isCorrect: false }, { text: "Employee salary", isCorrect: false }, { text: "Office rent", isCorrect: false }] },
    { question: "What is LTV in business?", targetSpecialization: "entrepreneurship", options: [{ text: "Lifetime Value of a customer", isCorrect: true }, { text: "Limited Time Voucher", isCorrect: false }, { text: "Legal Tax Value", isCorrect: false }, { text: "Long Term Vision", isCorrect: false }] },
    // Additional HR Questions
    { question: "What is 360-degree feedback?", targetSpecialization: "hr", options: [{ text: "Performance evaluation from all directions", isCorrect: true }, { text: "Circular office layout", isCorrect: false }, { text: "Full rotation training", isCorrect: false }, { text: "Complete product review", isCorrect: false }] },
    { question: "What is employer branding?", targetSpecialization: "hr", options: [{ text: "Company's reputation as an employer", isCorrect: true }, { text: "Logo design", isCorrect: false }, { text: "Product branding", isCorrect: false }, { text: "Office decoration", isCorrect: false }] },
    { question: "What is a competency framework?", targetSpecialization: "hr", options: [{ text: "Structure defining skills needed for roles", isCorrect: true }, { text: "Building blueprint", isCorrect: false }, { text: "Software architecture", isCorrect: false }, { text: "Legal structure", isCorrect: false }] },
    { question: "What is succession planning?", targetSpecialization: "hr", options: [{ text: "Identifying and developing future leaders", isCorrect: true }, { text: "Business sale planning", isCorrect: false }, { text: "Product launch sequence", isCorrect: false }, { text: "Event scheduling", isCorrect: false }] },
    { question: "What is employee engagement?", targetSpecialization: "hr", options: [{ text: "Emotional commitment to organization", isCorrect: true }, { text: "Marriage at work", isCorrect: false }, { text: "Contract signing", isCorrect: false }, { text: "Meeting attendance", isCorrect: false }] },
    { question: "What is a PIP in HR?", targetSpecialization: "hr", options: [{ text: "Performance Improvement Plan", isCorrect: true }, { text: "Profit Increase Program", isCorrect: false }, { text: "Product Innovation Process", isCorrect: false }, { text: "Personal Insurance Policy", isCorrect: false }] },
    { question: "What is offboarding?", targetSpecialization: "hr", options: [{ text: "Process when employees leave organization", isCorrect: true }, { text: "Boat departure", isCorrect: false }, { text: "Product removal", isCorrect: false }, { text: "Service cancellation", isCorrect: false }] },
    { question: "What is a CHRO?", targetSpecialization: "hr", options: [{ text: "Chief Human Resources Officer", isCorrect: true }, { text: "Corporate Hierarchy Review Officer", isCorrect: false }, { text: "Central HR Operations", isCorrect: false }, { text: "Company Head Revenue Officer", isCorrect: false }] },
    { question: "What is psychometric testing?", targetSpecialization: "hr", options: [{ text: "Measuring mental capabilities and personality", isCorrect: true }, { text: "Physical fitness test", isCorrect: false }, { text: "Product quality testing", isCorrect: false }, { text: "Machine calibration", isCorrect: false }] },
    { question: "What is diversity and inclusion?", targetSpecialization: "hr", options: [{ text: "Creating an environment where all feel valued", isCorrect: true }, { text: "Product variety", isCorrect: false }, { text: "Multiple office locations", isCorrect: false }, { text: "Service expansion", isCorrect: false }] }
];

// Quiz Generator Agent
export class QuizGeneratorAgent {
    constructor() {
        this.specializations = MBA_SPECIALIZATIONS;
        this.questionPool = MBA_QUESTION_POOL;
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    async generateQuizQuestions() {
        // Shuffle the question pool and pick 10 random questions
        // Ensure we get diverse specializations
        const shuffledPool = this.shuffleArray([...this.questionPool]);
        const selectedQuestions = [];
        const usedSpecs = new Set();

        // First pass: get one question from each specialization
        for (const q of shuffledPool) {
            if (!usedSpecs.has(q.targetSpecialization) && selectedQuestions.length < 6) {
                usedSpecs.add(q.targetSpecialization);
                selectedQuestions.push(q);
            }
        }

        // Second pass: fill remaining with random questions
        for (const q of shuffledPool) {
            if (selectedQuestions.length >= 10) break;
            if (!selectedQuestions.includes(q)) {
                selectedQuestions.push(q);
            }
        }

        // Shuffle the selected questions order
        const finalQuestions = this.shuffleArray(selectedQuestions.slice(0, 10));

        // Format questions with shuffled options
        return finalQuestions.map((q, index) => {
            const spec = this.specializations.find(s => s.id === q.targetSpecialization);
            const shuffledOptions = this.shuffleArray(q.options.map(opt => ({
                text: opt.text,
                isCorrect: opt.isCorrect,
                specialization: opt.isCorrect ? q.targetSpecialization : this.getRandomOtherSpecialization(q.targetSpecialization),
                points: opt.isCorrect ? 2 : 0
            })));

            return {
                id: index + 1,
                question: q.question,
                course: q.course,
                category: q.category,
                targetSpecialization: q.targetSpecialization,
                options: shuffledOptions
            };
        });
    }

    getRandomOtherSpecialization(excludeId) {
        const others = this.specializations.filter(s => s.id !== excludeId);
        return others[Math.floor(Math.random() * others.length)].id;
    }
}

// Course Recommender Agent - Fixed scoring
export class CourseRecommenderAgent {
    constructor() {
        this.specializations = MBA_SPECIALIZATIONS;
    }

    calculateScores(answers, questions) {
        // Initialize scores for ALL specializations
        const scores = {};
        const correctBySpec = {};
        const totalBySpec = {};

        this.specializations.forEach(spec => {
            scores[spec.id] = 0;
            correctBySpec[spec.id] = 0;
            totalBySpec[spec.id] = 0;
        });

        // Calculate correct answers per specialization
        answers.forEach(answer => {
            const question = questions.find(q => q.id === answer.questionId);
            if (!question) return;

            const targetSpec = question.targetSpecialization;
            totalBySpec[targetSpec] = (totalBySpec[targetSpec] || 0) + 1;

            // Check if answer is correct
            if (answer.selectedOption && answer.selectedOption.isCorrect) {
                scores[targetSpec] = (scores[targetSpec] || 0) + 2;
                correctBySpec[targetSpec] = (correctBySpec[targetSpec] || 0) + 1;
            }
        });

        return { scores, correctBySpec, totalBySpec };
    }

    async analyzeResults(answers, questions) {
        const { scores, correctBySpec, totalBySpec } = this.calculateScores(answers, questions);

        // Calculate total correct and wrong
        const totalCorrect = Object.values(correctBySpec).reduce((a, b) => a + b, 0);
        const totalWrong = answers.length - totalCorrect;

        // Sort specializations by score (higher scores = better fit)
        const sortedSpecs = Object.entries(scores)
            .sort(([, a], [, b]) => b - a)
            .map(([id, score]) => ({
                id,
                score: score || 0,
                correct: correctBySpec[id] || 0,
                total: totalBySpec[id] || 0
            }));

        // Get top matches
        const topMatchId = sortedSpecs[0]?.id || 'business-analytics';
        const secondMatchId = sortedSpecs[1]?.id || 'finance';

        const topMatch = this.specializations.find(s => s.id === topMatchId);
        const secondMatch = this.specializations.find(s => s.id === secondMatchId);

        // Build question analysis
        const questionAnalysis = answers.map((answer, idx) => {
            const question = questions.find(q => q.id === answer.questionId);
            const targetSpec = this.specializations.find(s => s.id === question?.targetSpecialization);
            const isCorrect = answer.selectedOption?.isCorrect || false;
            const correctOption = question?.options?.find(o => o.isCorrect);

            return {
                questionNumber: idx + 1,
                question: question?.question || '',
                course: question?.course || '',
                category: question?.category || '',
                targetSpecialization: targetSpec?.name || 'General',
                selectedAnswer: answer.selectedOption?.text || '',
                isCorrect,
                correctAnswer: correctOption?.text || ''
            };
        });

        // Default insights based on performance
        let aiInsights = {
            whyThisFits: topMatch?.traits || ["Shows aptitude in this area"],
            careerInsight: totalCorrect >= 7
                ? `Excellent performance! You got ${totalCorrect}/${answers.length} correct. You demonstrate strong knowledge in ${topMatch?.name?.replace('MBA in ', '')} concepts.`
                : totalCorrect >= 4
                    ? `Good effort! You got ${totalCorrect}/${answers.length} correct. Consider exploring ${topMatch?.name} to build on your strengths.`
                    : `You got ${totalCorrect}/${answers.length} correct. Don't worry - this quiz helps identify areas to focus on. ${topMatch?.name} could be a great starting point!`,
            improvementAreas: ["Continue building foundational MBA knowledge", "Focus on weaker subject areas"]
        };

        // Try to get AI-powered insights
        try {
            const geminiModel = getModel();
            const prompt = `You are an MBA career counselor. A student took an MBA aptitude quiz:

Score: ${totalCorrect}/${answers.length} (${Math.round((totalCorrect / answers.length) * 100)}%)

Performance by area:
${sortedSpecs.filter(s => s.total > 0).map(s => {
                const spec = this.specializations.find(sp => sp.id === s.id);
                return `- ${spec?.name?.replace('MBA in ', '')}: ${s.correct}/${s.total} correct`;
            }).join('\n')}

Best area: ${topMatch?.name?.replace('MBA in ', '')}

Provide concise, encouraging insights in JSON:
{
    "whyThisFits": ["Specific reason 1", "Specific reason 2", "Specific reason 3"],
    "careerInsight": "2 sentences of personalized advice"
}

Return ONLY JSON.`;

            const result = await geminiModel.generateContent(prompt);
            const response = result.response.text();
            const cleanResult = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const parsed = JSON.parse(cleanResult);
            if (parsed.whyThisFits) aiInsights.whyThisFits = parsed.whyThisFits;
            if (parsed.careerInsight) aiInsights.careerInsight = parsed.careerInsight;
        } catch (error) {
            console.error("AI insights error:", error.message);
        }

        return {
            summary: {
                totalQuestions: answers.length,
                correctAnswers: totalCorrect,
                wrongAnswers: totalWrong,
                percentage: Math.round((totalCorrect / answers.length) * 100)
            },
            primaryMatch: {
                id: topMatch?.id,
                name: topMatch?.name,
                color: topMatch?.color,
                score: sortedSpecs[0]?.score || 0,
                correct: sortedSpecs[0]?.correct || 0,
                total: sortedSpecs[0]?.total || 0,
                percentage: sortedSpecs[0]?.total > 0
                    ? Math.round((sortedSpecs[0]?.correct / sortedSpecs[0]?.total) * 100)
                    : 0
            },
            secondaryMatch: {
                id: secondMatch?.id,
                name: secondMatch?.name,
                color: secondMatch?.color,
                score: sortedSpecs[1]?.score || 0,
                correct: sortedSpecs[1]?.correct || 0,
                total: sortedSpecs[1]?.total || 0
            },
            allScores: sortedSpecs.map(({ id, score, correct, total }) => {
                const spec = this.specializations.find(s => s.id === id);
                return {
                    id,
                    name: spec?.name || id,
                    color: spec?.color || '#888888',
                    score: score || 0,
                    correct: correct || 0,
                    total: total || 0
                };
            }),
            likelyRoles: topMatch?.roles || [],
            whyThisFits: aiInsights.whyThisFits,
            recommendedElectives: topMatch?.electives || [],
            improvementAreas: aiInsights.improvementAreas || [],
            questionAnalysis,
            careerInsight: aiInsights.careerInsight
        };
    }
}

// Resume Analyzer Agent
export class ResumeAnalyzerAgent {
    constructor() {
        this.specializations = MBA_SPECIALIZATIONS;
    }

    async analyzeResume(resumeText) {
        const geminiModel = getModel();

        const prompt = `You are an expert MBA career counselor.

Analyze this resume and recommend the best MBA specialization:

RESUME:
${resumeText}

SPECIALIZATIONS:
${this.specializations.map(s => `- ${s.id}: ${s.name}`).join('\n')}

Provide analysis in JSON:
{
    "primaryMatch": {
        "specialization": "specialization-id",
        "matchScore": 85,
        "reasons": ["Reason 1", "Reason 2", "Reason 3"]
    },
    "secondaryMatch": {
        "specialization": "specialization-id",
        "matchScore": 70,
        "reasons": ["Reason 1", "Reason 2"]
    },
    "scores": {
        "business-analytics": 0,
        "finance": 0,
        "operations": 0,
        "marketing": 0,
        "entrepreneurship": 0,
        "hr": 0
    },
    "likelyRoles": ["Role 1", "Role 2", "Role 3"],
    "whyThisFits": ["Insight 1", "Insight 2", "Insight 3"],
    "recommendedElectives": ["Elective 1", "Elective 2"],
    "careerInsight": "Career advice based on resume"
}

Return ONLY JSON.`;

        try {
            const result = await geminiModel.generateContent(prompt);
            const response = result.response.text();
            const cleanResult = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
            const analysis = JSON.parse(cleanResult);

            const primarySpec = this.specializations.find(s => s.id === analysis.primaryMatch.specialization);
            const secondarySpec = this.specializations.find(s => s.id === analysis.secondaryMatch.specialization);

            const allScores = Object.entries(analysis.scores)
                .map(([id, score]) => {
                    const spec = this.specializations.find(s => s.id === id);
                    return {
                        id,
                        name: spec?.name || id,
                        color: spec?.color || '#888888',
                        score: Number(score) || 0
                    };
                })
                .sort((a, b) => b.score - a.score);

            return {
                success: true,
                primaryMatch: {
                    id: primarySpec?.id || analysis.primaryMatch.specialization,
                    name: primarySpec?.name || analysis.primaryMatch.specialization,
                    color: primarySpec?.color || '#7CB342',
                    score: analysis.primaryMatch.matchScore,
                    reasons: analysis.primaryMatch.reasons
                },
                secondaryMatch: {
                    id: secondarySpec?.id || analysis.secondaryMatch.specialization,
                    name: secondarySpec?.name || analysis.secondaryMatch.specialization,
                    color: secondarySpec?.color || '#5C6BC0',
                    score: analysis.secondaryMatch.matchScore,
                    reasons: analysis.secondaryMatch.reasons
                },
                allScores,
                likelyRoles: analysis.likelyRoles,
                whyThisFits: analysis.whyThisFits,
                recommendedElectives: analysis.recommendedElectives,
                careerInsight: analysis.careerInsight
            };
        } catch (error) {
            console.error("Resume analysis error:", error.message);

            // Fallback: provide a default recommendation based on keyword matching
            console.log("Providing fallback recommendation...");
            const resumeLower = resumeText.toLowerCase();

            // Simple keyword matching for fallback
            let scores = {
                'business-analytics': 0,
                'finance': 0,
                'operations': 0,
                'marketing': 0,
                'entrepreneurship': 0,
                'hr': 0
            };

            // Analytics keywords
            if (resumeLower.includes('data') || resumeLower.includes('analytics') || resumeLower.includes('python') || resumeLower.includes('sql')) scores['business-analytics'] += 20;
            // Finance keywords
            if (resumeLower.includes('finance') || resumeLower.includes('accounting') || resumeLower.includes('investment') || resumeLower.includes('banking')) scores['finance'] += 20;
            // Operations keywords
            if (resumeLower.includes('operations') || resumeLower.includes('supply chain') || resumeLower.includes('manufacturing') || resumeLower.includes('logistics')) scores['operations'] += 20;
            // Marketing keywords
            if (resumeLower.includes('marketing') || resumeLower.includes('brand') || resumeLower.includes('digital') || resumeLower.includes('social media')) scores['marketing'] += 20;
            // Entrepreneurship keywords
            if (resumeLower.includes('startup') || resumeLower.includes('entrepreneur') || resumeLower.includes('founder') || resumeLower.includes('business')) scores['entrepreneurship'] += 20;
            // HR keywords
            if (resumeLower.includes('hr') || resumeLower.includes('human resource') || resumeLower.includes('recruitment') || resumeLower.includes('talent')) scores['hr'] += 20;

            const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
            const primarySpec = this.specializations.find(s => s.id === sortedScores[0][0]);
            const secondarySpec = this.specializations.find(s => s.id === sortedScores[1][0]);

            return {
                success: true,
                primaryMatch: {
                    id: primarySpec?.id,
                    name: primarySpec?.name,
                    color: primarySpec?.color || '#7CB342',
                    score: 75,
                    reasons: ["Based on your background and experience", "Aligns with your career trajectory", "Matches your skill profile"]
                },
                secondaryMatch: {
                    id: secondarySpec?.id,
                    name: secondarySpec?.name,
                    color: secondarySpec?.color || '#5C6BC0',
                    score: 60,
                    reasons: ["Secondary option based on your profile", "Could complement your primary choice"]
                },
                allScores: sortedScores.map(([id, score]) => {
                    const spec = this.specializations.find(s => s.id === id);
                    return { id, name: spec?.name || id, color: spec?.color || '#888888', score: score || 50 };
                }),
                likelyRoles: primarySpec?.roles || ["Business Analyst", "Manager", "Consultant"],
                whyThisFits: ["Your experience aligns with this specialization", "Strong foundation for this career path", "Good match based on your skills"],
                recommendedElectives: primarySpec?.electives || ["Strategic Management", "Business Leadership"],
                careerInsight: "Based on your resume, we recommend exploring this MBA specialization to build on your existing strengths and open new career opportunities."
            };
        }
    }
}

// MBA Counselor Chatbot Agent - Interactive AI counselor
export class MBACounselorChatbotAgent {
    constructor() {
        this.specializations = MBA_SPECIALIZATIONS;
    }

    async chat(message, conversationHistory = [], quizResults = null) {
        const geminiModel = getModel();

        // Build context from quiz results if available
        let resultsContext = '';
        if (quizResults) {
            resultsContext = `
STUDENT'S QUIZ RESULTS:
- Recommended Specialization: ${quizResults.primaryMatch?.name || 'Not determined'}
- Score: ${quizResults.summary?.correctAnswers || 0}/${quizResults.summary?.totalQuestions || 10} (${quizResults.summary?.percentage || 0}%)
- Secondary Match: ${quizResults.secondaryMatch?.name || 'Not determined'}
- Likely Career Roles: ${quizResults.likelyRoles?.join(', ') || 'Various MBA roles'}
- Why This Fits: ${quizResults.whyThisFits?.join(', ') || 'Based on aptitude assessment'}
`;
        }

        // Build conversation history
        const historyText = conversationHistory.map(msg =>
            `${msg.role === 'user' ? 'Student' : 'Counselor'}: ${msg.content}`
        ).join('\n');

        const systemPrompt = `You are an expert MBA Career Counselor at IEM College, one of India's top MBA institutions. You are friendly, knowledgeable, and helpful.

YOUR ROLE:
- Help students choose the right MBA specialization
- Answer questions about MBA courses, careers, salaries, and opportunities
- Provide personalized advice based on the student's quiz results (if available)
- Guide them on admission process, eligibility, and requirements
- Be encouraging and supportive

${resultsContext}

IEM MBA SPECIALIZATIONS OFFERED:
1. MBA in Business Analytics - For data-driven decision makers. Covers: Data Mining, Predictive Analytics, Machine Learning, Business Intelligence
2. MBA in Finance - For future investment bankers and CFOs. Covers: Corporate Finance, Investment Banking, Portfolio Management, M&A
3. MBA in Operations - For supply chain and process experts. Covers: Supply Chain, Six Sigma, Lean Manufacturing, Quality Management
4. MBA in Marketing - For brand builders and growth experts. Covers: Digital Marketing, Brand Management, Consumer Behavior, Market Research
5. MBA in Entrepreneurship - For startup founders and innovators. Covers: New Venture Creation, Venture Capital, Lean Startup, Business Model Innovation
6. MBA in Human Resources - For people managers and culture builders. Covers: Talent Management, Organizational Behavior, HR Analytics, Performance Management

IEM MBA PROGRAM DETAILS:
- Duration: 2 years (4 semesters)
- Eligibility: Bachelor's degree with 50% marks, valid CAT/MAT/XAT score
- Average Placement: ₹8-15 LPA for top performers
- Top Recruiters: TCS, Infosys, Deloitte, KPMG, Amazon, Flipkart, and more
- Internship: 2-month mandatory summer internship

GUIDELINES:
- Give concise, helpful responses (max 150 words)
- If asked about something outside MBA, politely redirect to MBA topics
- Be specific about IEM's programs when relevant
- Encourage students to apply if they seem interested
- Use bullet points for lists
- Be warm and conversational

CONVERSATION SO FAR:
${historyText}

Student's new message: ${message}

Respond as the MBA Counselor:`;

        try {
            const result = await geminiModel.generateContent(systemPrompt);
            const response = result.response.text();

            return {
                success: true,
                message: response.trim(),
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            console.error("Chatbot error:", error);

            // Fallback response
            return {
                success: true,
                message: "I'm sorry, I'm having trouble processing that right now. Could you please rephrase your question? I'm here to help you with anything related to MBA programs, specializations, careers, or admissions at IEM!",
                timestamp: new Date().toISOString()
            };
        }
    }

    // Get initial greeting based on quiz results
    getInitialGreeting(quizResults = null) {
        if (quizResults && quizResults.primaryMatch) {
            return `Hello! 👋 I'm your IEM MBA Counselor. I see you've completed our MBA Fit Finder quiz and scored **${quizResults.summary?.percentage || 0}%**!

Based on your results, **${quizResults.primaryMatch.name}** seems like a great fit for you. 

I'm here to help you explore this specialization further, answer any questions about our MBA program, discuss career opportunities, or help you understand the admission process.

**What would you like to know?** You can ask me about:
• Your recommended specialization
• Career prospects and salaries
• Course curriculum and electives
• Admission process and eligibility
• Anything else about our MBA program!`;
        }

        return `Hello! 👋 I'm your IEM MBA Counselor. I'm here to help you explore our MBA programs and find the perfect specialization for your career goals.

Feel free to ask me about:
• Different MBA specializations we offer
• Career opportunities after MBA
• Admission process and eligibility
• Placement statistics and top recruiters
• Any other questions about pursuing an MBA!

**How can I help you today?**`;
    }
}

export { MBA_SPECIALIZATIONS };

