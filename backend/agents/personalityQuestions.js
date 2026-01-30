/**
 * PERSONALITY-BASED MBA SPECIALIZATION QUIZ QUESTIONS
 * 
 * These questions assess personal traits, preferences, and interests
 * to determine the best MBA specialization fit.
 * 
 * Each question maps to a specific specialization based on the trait it assesses.
 */

// Industry average packages for tiebreaker (in LPA - Lakhs Per Annum)
export const INDUSTRY_PACKAGES = {
    'finance': 18,           // Finance typically has highest packages
    'business-analytics': 16,
    'marketing': 12,
    'operations': 11,
    'entrepreneurship': 10,  // Variable, founders often have lower initial pay
    'hr': 10
};

export const PERSONALITY_QUESTIONS = [
    // ==================== FINANCE PERSONALITY QUESTIONS ====================
    {
        question: "How comfortable are you with handling money and making financial decisions?",
        category: "Financial Aptitude",
        targetSpecialization: "finance",
        options: [
            { text: "I love managing money and tracking investments", isCorrect: true },
            { text: "I'm okay with basic budgeting", isCorrect: false },
            { text: "I prefer others to handle financial matters", isCorrect: false },
            { text: "I find money matters stressful", isCorrect: false }
        ]
    },
    {
        question: "When you read the news, what section do you gravitate towards first?",
        category: "Interest Area",
        targetSpecialization: "finance",
        options: [
            { text: "Stock market and business finance news", isCorrect: true },
            { text: "Technology and innovation", isCorrect: false },
            { text: "Entertainment and lifestyle", isCorrect: false },
            { text: "Sports and culture", isCorrect: false }
        ]
    },
    {
        question: "How do you react when someone discusses stock market trends?",
        category: "Financial Interest",
        targetSpecialization: "finance",
        options: [
            { text: "I get excited and join the conversation with my own insights", isCorrect: true },
            { text: "I listen politely but don't contribute much", isCorrect: false },
            { text: "I find it boring and change the topic", isCorrect: false },
            { text: "I don't understand much about stocks", isCorrect: false }
        ]
    },
    {
        question: "If you inherited a significant amount of money, what would you do first?",
        category: "Financial Mindset",
        targetSpecialization: "finance",
        options: [
            { text: "Research investment options and create a diversified portfolio", isCorrect: true },
            { text: "Start my own business", isCorrect: false },
            { text: "Buy things I've always wanted", isCorrect: false },
            { text: "Save it in a bank account", isCorrect: false }
        ]
    },
    {
        question: "How good are you at calculating percentages and interest in your head?",
        category: "Numerical Aptitude",
        targetSpecialization: "finance",
        options: [
            { text: "Very good - I can do complex calculations quickly", isCorrect: true },
            { text: "Average - I need a calculator for most things", isCorrect: false },
            { text: "Not great - I avoid calculations when possible", isCorrect: false },
            { text: "I struggle with numbers", isCorrect: false }
        ]
    },
    {
        question: "When making a major purchase, how do you approach the decision?",
        category: "Risk Assessment",
        targetSpecialization: "finance",
        options: [
            { text: "I analyze ROI, compare financing options, and calculate total cost", isCorrect: true },
            { text: "I research reviews and features", isCorrect: false },
            { text: "I go with my gut feeling", isCorrect: false },
            { text: "I buy what looks best", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy analyzing company annual reports and financial statements?",
        category: "Financial Analysis",
        targetSpecialization: "finance",
        options: [
            { text: "Yes, I find them fascinating and insightful", isCorrect: true },
            { text: "I can read them if needed but don't seek them out", isCorrect: false },
            { text: "I find them confusing", isCorrect: false },
            { text: "I've never looked at one", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about taking calculated risks with money?",
        category: "Risk Tolerance",
        targetSpecialization: "finance",
        options: [
            { text: "I enjoy it when the risk-reward ratio is favorable", isCorrect: true },
            { text: "I prefer safe options with guaranteed returns", isCorrect: false },
            { text: "I avoid financial risks entirely", isCorrect: false },
            { text: "I'm not sure what calculated risk means", isCorrect: false }
        ]
    },
    {
        question: "Can you explain concepts like P/E ratio or market capitalization to someone?",
        category: "Financial Knowledge",
        targetSpecialization: "finance",
        options: [
            { text: "Yes, confidently and in detail", isCorrect: true },
            { text: "I know the basics but might struggle with details", isCorrect: false },
            { text: "I've heard of them but can't explain them", isCorrect: false },
            { text: "I don't know what these terms mean", isCorrect: false }
        ]
    },
    {
        question: "What's your opinion on credit cards and loans?",
        category: "Financial Planning",
        targetSpecialization: "finance",
        options: [
            { text: "They're powerful tools when used strategically for leverage", isCorrect: true },
            { text: "They're convenient for purchases", isCorrect: false },
            { text: "They're dangerous and should be avoided", isCorrect: false },
            { text: "I don't think about them much", isCorrect: false }
        ]
    },
    {
        question: "Do you follow any business leaders or investors like Warren Buffett?",
        category: "Investment Interest",
        targetSpecialization: "finance",
        options: [
            { text: "Yes, I regularly read about their strategies and philosophies", isCorrect: true },
            { text: "I've heard of them but don't follow closely", isCorrect: false },
            { text: "I follow celebrities and influencers instead", isCorrect: false },
            { text: "I don't follow any public figures", isCorrect: false }
        ]
    },
    {
        question: "How comfortable are you with Excel and financial formulas?",
        category: "Technical Skills",
        targetSpecialization: "finance",
        options: [
            { text: "Very comfortable - I build complex financial models", isCorrect: true },
            { text: "I can do basic spreadsheets", isCorrect: false },
            { text: "I prefer other tools", isCorrect: false },
            { text: "I avoid spreadsheets when possible", isCorrect: false }
        ]
    },

    // ==================== BUSINESS ANALYTICS PERSONALITY QUESTIONS ====================
    {
        question: "When you see a chart or graph, what's your first reaction?",
        category: "Data Orientation",
        targetSpecialization: "business-analytics",
        options: [
            { text: "I analyze patterns and look for insights", isCorrect: true },
            { text: "I glance at it briefly and move on", isCorrect: false },
            { text: "I find it confusing and skip it", isCorrect: false },
            { text: "I prefer text explanations over visuals", isCorrect: false }
        ]
    },
    {
        question: "How do you approach solving a complex problem?",
        category: "Problem Solving",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Break it down into data points and analyze systematically", isCorrect: true },
            { text: "Trust my intuition and experience", isCorrect: false },
            { text: "Ask others for their opinions", isCorrect: false },
            { text: "Try different solutions until one works", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy finding patterns in everyday situations?",
        category: "Pattern Recognition",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Yes, I often notice patterns others miss", isCorrect: true },
            { text: "Sometimes, if they're obvious", isCorrect: false },
            { text: "Not really, I focus on other things", isCorrect: false },
            { text: "I don't look for patterns", isCorrect: false }
        ]
    },
    {
        question: "How do you make decisions when there's uncertainty?",
        category: "Data-Driven Decision Making",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Gather as much data as possible before deciding", isCorrect: true },
            { text: "Go with my gut feeling", isCorrect: false },
            { text: "Consult with friends and family", isCorrect: false },
            { text: "Avoid making the decision if possible", isCorrect: false }
        ]
    },
    {
        question: "When planning a trip, how do you prepare?",
        category: "Planning Style",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Research extensively, compare costs, optimize routes and timing", isCorrect: true },
            { text: "Book the first good option I find", isCorrect: false },
            { text: "Ask friends for recommendations", isCorrect: false },
            { text: "Go spontaneously without much planning", isCorrect: false }
        ]
    },
    {
        question: "How interested are you in learning programming or coding?",
        category: "Technical Aptitude",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Very interested - I already know some or want to learn", isCorrect: true },
            { text: "Somewhat interested but not a priority", isCorrect: false },
            { text: "Not interested in technical skills", isCorrect: false },
            { text: "I find coding intimidating", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy puzzles, brain teasers, or logic games?",
        category: "Logical Thinking",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Love them - they're fun and stimulating", isCorrect: true },
            { text: "They're okay occasionally", isCorrect: false },
            { text: "I find them frustrating", isCorrect: false },
            { text: "I prefer other activities", isCorrect: false }
        ]
    },
    {
        question: "When something goes wrong, what do you want to know first?",
        category: "Root Cause Analysis",
        targetSpecialization: "business-analytics",
        options: [
            { text: "What data or facts led to this outcome?", isCorrect: true },
            { text: "Who is responsible?", isCorrect: false },
            { text: "How do we fix it quickly?", isCorrect: false },
            { text: "How do others feel about it?", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about statistics and probability?",
        category: "Statistical Thinking",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Fascinating - I enjoy understanding chances and trends", isCorrect: true },
            { text: "Useful but not exciting", isCorrect: false },
            { text: "A bit confusing", isCorrect: false },
            { text: "I avoid anything with statistics", isCorrect: false }
        ]
    },
    {
        question: "Would you enjoy creating dashboards and reports to visualize information?",
        category: "Data Visualization",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Yes, I find it satisfying to present data clearly", isCorrect: true },
            { text: "I could do it if required", isCorrect: false },
            { text: "I'd prefer someone else to do it", isCorrect: false },
            { text: "I don't know how to create them", isCorrect: false }
        ]
    },
    {
        question: "When shopping online, do you compare prices across multiple websites?",
        category: "Comparative Analysis",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Always - I use price trackers and comparison sites", isCorrect: true },
            { text: "Sometimes, if it's a big purchase", isCorrect: false },
            { text: "Rarely, I buy from trusted sites", isCorrect: false },
            { text: "I just buy what I need quickly", isCorrect: false }
        ]
    },
    {
        question: "How curious are you about why certain products become popular?",
        category: "Consumer Insights",
        targetSpecialization: "business-analytics",
        options: [
            { text: "Very curious - I analyze trends and market patterns", isCorrect: true },
            { text: "Mildly curious but don't research deeply", isCorrect: false },
            { text: "Not really, I just use what I like", isCorrect: false },
            { text: "I don't think about it", isCorrect: false }
        ]
    },

    // ==================== MARKETING PERSONALITY QUESTIONS ====================
    {
        question: "How often do you notice advertisements and analyze their messaging?",
        category: "Advertising Awareness",
        targetSpecialization: "marketing",
        options: [
            { text: "All the time - I often critique or appreciate ad creativity", isCorrect: true },
            { text: "Sometimes, if they're particularly good or bad", isCorrect: false },
            { text: "I try to ignore ads", isCorrect: false },
            { text: "I use ad blockers and skip ads whenever possible", isCorrect: false }
        ]
    },
    {
        question: "Are you good at convincing others to see your point of view?",
        category: "Persuasion Skills",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I'm quite persuasive and people often agree with me", isCorrect: true },
            { text: "Sometimes, depending on the topic", isCorrect: false },
            { text: "Not really, I often give up trying", isCorrect: false },
            { text: "I avoid arguments and debates", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy creating content for social media?",
        category: "Content Creation",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I love crafting posts and seeing engagement", isCorrect: true },
            { text: "Occasionally, for special moments", isCorrect: false },
            { text: "I consume content but rarely create", isCorrect: false },
            { text: "I'm not active on social media", isCorrect: false }
        ]
    },
    {
        question: "When you have a new idea, how do you share it with others?",
        category: "Communication Style",
        targetSpecialization: "marketing",
        options: [
            { text: "I create a compelling story or presentation to sell the idea", isCorrect: true },
            { text: "I explain it straightforwardly with facts", isCorrect: false },
            { text: "I share it casually in conversation", isCorrect: false },
            { text: "I keep ideas to myself", isCorrect: false }
        ]
    },
    {
        question: "How interested are you in understanding why people buy certain products?",
        category: "Consumer Behavior",
        targetSpecialization: "marketing",
        options: [
            { text: "Very interested - consumer psychology fascinates me", isCorrect: true },
            { text: "Somewhat interested for practical purposes", isCorrect: false },
            { text: "Not particularly interested", isCorrect: false },
            { text: "I don't think about it", isCorrect: false }
        ]
    },
    {
        question: "Do you often recommend products or services to friends and family?",
        category: "Word of Mouth",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I love sharing great finds and influencing others", isCorrect: true },
            { text: "Sometimes, if asked", isCorrect: false },
            { text: "Rarely, I keep opinions to myself", isCorrect: false },
            { text: "I don't pay attention to brands", isCorrect: false }
        ]
    },
    {
        question: "How important is brand image and aesthetics to you?",
        category: "Brand Sensitivity",
        targetSpecialization: "marketing",
        options: [
            { text: "Very important - I appreciate good branding and design", isCorrect: true },
            { text: "Somewhat important for certain products", isCorrect: false },
            { text: "Not important - I focus on functionality", isCorrect: false },
            { text: "I don't notice brand aesthetics", isCorrect: false }
        ]
    },
    {
        question: "Would you enjoy planning events or promotional campaigns?",
        category: "Event Planning",
        targetSpecialization: "marketing",
        options: [
            { text: "Absolutely - I love organizing and creating experiences", isCorrect: true },
            { text: "It sounds okay but stressful", isCorrect: false },
            { text: "I'd prefer to attend rather than organize", isCorrect: false },
            { text: "Event planning doesn't interest me", isCorrect: false }
        ]
    },
    {
        question: "Do you keep up with trending topics and viral content?",
        category: "Trend Awareness",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I'm always aware of what's trending", isCorrect: true },
            { text: "I catch some trends through friends", isCorrect: false },
            { text: "I'm usually late to trends", isCorrect: false },
            { text: "I don't follow trends", isCorrect: false }
        ]
    },
    {
        question: "How creative do you consider yourself?",
        category: "Creativity",
        targetSpecialization: "marketing",
        options: [
            { text: "Very creative - I constantly have new ideas", isCorrect: true },
            { text: "Moderately creative when motivated", isCorrect: false },
            { text: "Not very creative - I prefer structured work", isCorrect: false },
            { text: "I don't think of myself as creative", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy writing catchy slogans or taglines?",
        category: "Copywriting",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I love playing with words and creating memorable phrases", isCorrect: true },
            { text: "I could try if needed", isCorrect: false },
            { text: "I'm better with formal writing", isCorrect: false },
            { text: "Writing isn't my strength", isCorrect: false }
        ]
    },
    {
        question: "Would you enjoy presenting ideas to a large audience?",
        category: "Public Speaking",
        targetSpecialization: "marketing",
        options: [
            { text: "Yes, I enjoy being the center of attention and sharing ideas", isCorrect: true },
            { text: "I can do it if necessary but prefer small groups", isCorrect: false },
            { text: "I find public speaking stressful", isCorrect: false },
            { text: "I avoid speaking in front of groups", isCorrect: false }
        ]
    },

    // ==================== OPERATIONS PERSONALITY QUESTIONS ====================
    {
        question: "How organized are your personal belongings and workspace?",
        category: "Organization",
        targetSpecialization: "operations",
        options: [
            { text: "Everything has a specific place - I'm very systematic", isCorrect: true },
            { text: "Mostly organized with some clutter", isCorrect: false },
            { text: "It's a bit messy but I can find things", isCorrect: false },
            { text: "I work in organized chaos", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy optimizing processes to save time?",
        category: "Process Optimization",
        targetSpecialization: "operations",
        options: [
            { text: "Yes, I constantly look for more efficient ways to do things", isCorrect: true },
            { text: "Sometimes, if it's worth the effort", isCorrect: false },
            { text: "I stick to what works", isCorrect: false },
            { text: "I don't think about process efficiency", isCorrect: false }
        ]
    },
    {
        question: "When you notice inefficiency somewhere, how do you react?",
        category: "Efficiency Mindset",
        targetSpecialization: "operations",
        options: [
            { text: "It bothers me and I want to fix it immediately", isCorrect: true },
            { text: "I notice it but don't always act", isCorrect: false },
            { text: "I usually don't notice inefficiencies", isCorrect: false },
            { text: "I leave it for others to handle", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about following detailed procedures and checklists?",
        category: "Process Adherence",
        targetSpecialization: "operations",
        options: [
            { text: "I love them - they ensure nothing is missed", isCorrect: true },
            { text: "They're useful but can be restrictive", isCorrect: false },
            { text: "I prefer flexibility over strict procedures", isCorrect: false },
            { text: "I find them tedious", isCorrect: false }
        ]
    },
    {
        question: "Are you someone who pays attention to tiny details?",
        category: "Attention to Detail",
        targetSpecialization: "operations",
        options: [
            { text: "Yes, I catch errors and details others miss", isCorrect: true },
            { text: "I try to but sometimes miss things", isCorrect: false },
            { text: "I focus on the big picture", isCorrect: false },
            { text: "Details aren't my strong suit", isCorrect: false }
        ]
    },
    {
        question: "When cooking or following a recipe, how strictly do you follow instructions?",
        category: "Procedure Following",
        targetSpecialization: "operations",
        options: [
            { text: "Very strictly - precise measurements and steps", isCorrect: true },
            { text: "Mostly follow but make small adjustments", isCorrect: false },
            { text: "I use recipes as loose guidelines", isCorrect: false },
            { text: "I improvise without recipes", isCorrect: false }
        ]
    },
    {
        question: "How do you handle multiple tasks with deadlines?",
        category: "Project Management",
        targetSpecialization: "operations",
        options: [
            { text: "I create schedules, prioritize, and track progress systematically", isCorrect: true },
            { text: "I make mental notes and try to manage", isCorrect: false },
            { text: "I work on the most urgent one first", isCorrect: false },
            { text: "I often feel overwhelmed", isCorrect: false }
        ]
    },
    {
        question: "Do you like managing and coordinating different moving parts of a project?",
        category: "Coordination",
        targetSpecialization: "operations",
        options: [
            { text: "Yes, I enjoy bringing order to complexity", isCorrect: true },
            { text: "It's okay but can be stressful", isCorrect: false },
            { text: "I prefer working on one thing at a time", isCorrect: false },
            { text: "I avoid coordination roles", isCorrect: false }
        ]
    },
    {
        question: "When packing for a trip, how do you approach it?",
        category: "Planning Methodology",
        targetSpecialization: "operations",
        options: [
            { text: "I make lists, check off items, and pack methodically", isCorrect: true },
            { text: "I have a rough mental list", isCorrect: false },
            { text: "I pack quickly without too much planning", isCorrect: false },
            { text: "I often forget important items", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about monitoring and improving quality standards?",
        category: "Quality Control",
        targetSpecialization: "operations",
        options: [
            { text: "I believe quality is paramount and enjoy maintaining high standards", isCorrect: true },
            { text: "Quality is important but shouldn't slow things down too much", isCorrect: false },
            { text: "Good enough is often sufficient", isCorrect: false },
            { text: "I don't focus on quality standards", isCorrect: false }
        ]
    },
    {
        question: "Are you good at estimating how long tasks will take?",
        category: "Time Estimation",
        targetSpecialization: "operations",
        options: [
            { text: "Yes, I'm usually accurate with time estimates", isCorrect: true },
            { text: "I try but often underestimate", isCorrect: false },
            { text: "I'm not good at time estimation", isCorrect: false },
            { text: "I don't usually estimate time", isCorrect: false }
        ]
    },
    {
        question: "Would you enjoy working in a factory or logistics environment?",
        category: "Operational Interest",
        targetSpecialization: "operations",
        options: [
            { text: "Yes, I find manufacturing and logistics interesting", isCorrect: true },
            { text: "Maybe, I'm not sure", isCorrect: false },
            { text: "I prefer office-based work", isCorrect: false },
            { text: "Factory environments don't appeal to me", isCorrect: false }
        ]
    },

    // ==================== HR PERSONALITY QUESTIONS ====================
    {
        question: "Do you enjoy listening to people and understanding their problems?",
        category: "Empathy",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, I'm a great listener and people often confide in me", isCorrect: true },
            { text: "I listen when asked but don't seek it out", isCorrect: false },
            { text: "I prefer to focus on tasks over emotions", isCorrect: false },
            { text: "I find emotional conversations draining", isCorrect: false }
        ]
    },
    {
        question: "How do you handle conflicts between friends or colleagues?",
        category: "Conflict Resolution",
        targetSpecialization: "hr",
        options: [
            { text: "I often mediate and help find solutions", isCorrect: true },
            { text: "I stay neutral and don't get involved", isCorrect: false },
            { text: "I support the side I think is right", isCorrect: false },
            { text: "I avoid conflict situations", isCorrect: false }
        ]
    },
    {
        question: "Are you good at understanding unspoken emotions and body language?",
        category: "Emotional Intelligence",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, I easily pick up on non-verbal cues", isCorrect: true },
            { text: "Sometimes, if I'm paying attention", isCorrect: false },
            { text: "I mostly focus on what people say", isCorrect: false },
            { text: "I'm not good at reading body language", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy helping others grow and develop their skills?",
        category: "People Development",
        targetSpecialization: "hr",
        options: [
            { text: "Absolutely - mentoring others is very rewarding for me", isCorrect: true },
            { text: "I help when asked but don't actively seek it", isCorrect: false },
            { text: "I prefer to focus on my own development", isCorrect: false },
            { text: "Teaching and mentoring aren't my strengths", isCorrect: false }
        ]
    },
    {
        question: "How comfortable are you with having difficult conversations?",
        category: "Difficult Conversations",
        targetSpecialization: "hr",
        options: [
            { text: "I can handle them with tact and professionalism", isCorrect: true },
            { text: "I manage but find them uncomfortable", isCorrect: false },
            { text: "I try to avoid them when possible", isCorrect: false },
            { text: "I really struggle with difficult conversations", isCorrect: false }
        ]
    },
    {
        question: "Do people often come to you for advice on personal or career matters?",
        category: "Advisory Role",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, I'm often the go-to person for advice", isCorrect: true },
            { text: "Occasionally, for specific topics", isCorrect: false },
            { text: "Rarely - I'm not seen as an advisor", isCorrect: false },
            { text: "I prefer not to give advice", isCorrect: false }
        ]
    },
    {
        question: "How interested are you in organizational culture and workplace dynamics?",
        category: "Organizational Behavior",
        targetSpecialization: "hr",
        options: [
            { text: "Very interested - I analyze why some teams work better than others", isCorrect: true },
            { text: "Somewhat interested for practical reasons", isCorrect: false },
            { text: "I don't think about it much", isCorrect: false },
            { text: "Culture and dynamics seem vague to me", isCorrect: false }
        ]
    },
    {
        question: "Would you be comfortable interviewing and evaluating job candidates?",
        category: "Recruitment",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, I would enjoy assessing and selecting the right people", isCorrect: true },
            { text: "I could do it but might find it challenging", isCorrect: false },
            { text: "I'd prefer to be on the other side of the table", isCorrect: false },
            { text: "Judging people makes me uncomfortable", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about diversity and inclusion in the workplace?",
        category: "Diversity & Inclusion",
        targetSpecialization: "hr",
        options: [
            { text: "It's crucial and I actively support inclusive environments", isCorrect: true },
            { text: "It's important but not my primary focus", isCorrect: false },
            { text: "I haven't thought about it much", isCorrect: false },
            { text: "I think merit should be the only consideration", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy organizing team activities or team-building events?",
        category: "Team Building",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, I love bringing teams together and building relationships", isCorrect: true },
            { text: "I participate happily but don't organize", isCorrect: false },
            { text: "I find team activities forced and uncomfortable", isCorrect: false },
            { text: "I prefer to skip team events", isCorrect: false }
        ]
    },
    {
        question: "How would you handle if a trusted employee made a serious mistake?",
        category: "Employee Relations",
        targetSpecialization: "hr",
        options: [
            { text: "Discuss it privately, understand the context, and help them improve", isCorrect: true },
            { text: "Report it to HR or management", isCorrect: false },
            { text: "Address it in a group meeting", isCorrect: false },
            { text: "Let it slide this time", isCorrect: false }
        ]
    },
    {
        question: "Are you interested in designing training programs for employees?",
        category: "Learning & Development",
        targetSpecialization: "hr",
        options: [
            { text: "Yes, helping people learn and grow excites me", isCorrect: true },
            { text: "I could design them if needed", isCorrect: false },
            { text: "I'd prefer to participate rather than design", isCorrect: false },
            { text: "Training design doesn't interest me", isCorrect: false }
        ]
    },

    // ==================== ENTREPRENEURSHIP PERSONALITY QUESTIONS ====================
    {
        question: "Have you ever thought about starting your own business?",
        category: "Entrepreneurial Spirit",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Yes, I have multiple business ideas and dream of being my own boss", isCorrect: true },
            { text: "It's crossed my mind but I prefer job security", isCorrect: false },
            { text: "I haven't really thought about it", isCorrect: false },
            { text: "No, I prefer working for established companies", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about taking risks for potentially high rewards?",
        category: "Risk Appetite",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "I thrive on calculated risks - high risk, high reward", isCorrect: true },
            { text: "I take moderate risks occasionally", isCorrect: false },
            { text: "I prefer safe, predictable outcomes", isCorrect: false },
            { text: "I avoid risks whenever possible", isCorrect: false }
        ]
    },
    {
        question: "When others say 'it's not possible', how do you react?",
        category: "Resilience",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "I see it as a challenge and try to prove them wrong", isCorrect: true },
            { text: "I consider their perspective but try anyway", isCorrect: false },
            { text: "I usually accept their judgment", isCorrect: false },
            { text: "I give up if experts say it's impossible", isCorrect: false }
        ]
    },
    {
        question: "How comfortable are you with uncertainty and unpredictable outcomes?",
        category: "Uncertainty Tolerance",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "I'm comfortable - I see uncertainty as opportunity", isCorrect: true },
            { text: "I can handle some uncertainty", isCorrect: false },
            { text: "I prefer stability and predictability", isCorrect: false },
            { text: "Uncertainty makes me very anxious", isCorrect: false }
        ]
    },
    {
        question: "Do you often come up with innovative ideas or solutions?",
        category: "Innovation",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Yes, I'm constantly generating new ideas", isCorrect: true },
            { text: "Sometimes, when the situation demands", isCorrect: false },
            { text: "I prefer proven approaches", isCorrect: false },
            { text: "I'm better at executing others' ideas", isCorrect: false }
        ]
    },
    {
        question: "How well do you handle failure and setbacks?",
        category: "Failure Tolerance",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "I see failure as a learning opportunity and bounce back quickly", isCorrect: true },
            { text: "I recover eventually but need time", isCorrect: false },
            { text: "Failure affects me significantly", isCorrect: false },
            { text: "I avoid situations where I might fail", isCorrect: false }
        ]
    },
    {
        question: "Are you comfortable wearing multiple hats and doing varied tasks?",
        category: "Versatility",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Absolutely - I love variety and can adapt to any role", isCorrect: true },
            { text: "I can if needed but prefer specialization", isCorrect: false },
            { text: "I like focused, specialized work", isCorrect: false },
            { text: "I work best with clearly defined roles", isCorrect: false }
        ]
    },
    {
        question: "How do you feel about working long hours on something you believe in?",
        category: "Passion & Dedication",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "I'd work around the clock for something I'm passionate about", isCorrect: true },
            { text: "I'd work extra but need work-life balance", isCorrect: false },
            { text: "I prefer standard working hours", isCorrect: false },
            { text: "I value my personal time over work", isCorrect: false }
        ]
    },
    {
        question: "Do you enjoy pitching ideas and convincing people to support your vision?",
        category: "Pitching Skills",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Yes, I love sharing my vision and getting buy-in", isCorrect: true },
            { text: "I can do it when necessary", isCorrect: false },
            { text: "I prefer others to do the pitching", isCorrect: false },
            { text: "Selling ideas feels uncomfortable to me", isCorrect: false }
        ]
    },
    {
        question: "How would you react if your initial business idea failed?",
        category: "Adaptability",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Pivot quickly to a new approach based on learnings", isCorrect: true },
            { text: "Take time to reflect before trying again", isCorrect: false },
            { text: "Try the same idea with minor changes", isCorrect: false },
            { text: "Give up on entrepreneurship", isCorrect: false }
        ]
    },
    {
        question: "Are you excited by the idea of building something from scratch?",
        category: "Builder Mentality",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Absolutely - creating something new is incredibly exciting", isCorrect: true },
            { text: "It sounds interesting but also daunting", isCorrect: false },
            { text: "I prefer improving existing things", isCorrect: false },
            { text: "I'd rather join an established organization", isCorrect: false }
        ]
    },
    {
        question: "How important is financial independence to you?",
        category: "Independence Drive",
        targetSpecialization: "entrepreneurship",
        options: [
            { text: "Very important - I want to control my own financial destiny", isCorrect: true },
            { text: "Important but not at the cost of security", isCorrect: false },
            { text: "I'm comfortable with a steady salary", isCorrect: false },
            { text: "Money isn't a major motivator for me", isCorrect: false }
        ]
    }
];

export default PERSONALITY_QUESTIONS;
