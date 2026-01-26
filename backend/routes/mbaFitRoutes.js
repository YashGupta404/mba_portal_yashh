import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
    QuizGeneratorAgent,
    CourseRecommenderAgent,
    ResumeAnalyzerAgent,
    MBACounselorChatbotAgent,
    MBA_SPECIALIZATIONS
} from '../agents/mbaFitAgents.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain'
        ];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed.'));
        }
    }
});

// Initialize agents
const quizAgent = new QuizGeneratorAgent();
const recommenderAgent = new CourseRecommenderAgent();
const resumeAgent = new ResumeAnalyzerAgent();
const chatbotAgent = new MBACounselorChatbotAgent();

// Cache for generated questions (to avoid regenerating on every request)
let cachedQuestions = null;
let cacheTimestamp = null;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes

/**
 * GET /api/mba-fit/specializations
 * Get all available MBA specializations
 */
router.get('/specializations', (req, res) => {
    try {
        res.json({
            success: true,
            data: MBA_SPECIALIZATIONS.map(spec => ({
                id: spec.id,
                name: spec.name,
                color: spec.color,
                roles: spec.roles,
                electives: spec.electives
            }))
        });
    } catch (error) {
        console.error('Error fetching specializations:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch specializations' });
    }
});

/**
 * GET /api/mba-fit/quiz/questions
 * Generate fresh random quiz questions every time (no caching)
 */
router.get('/quiz/questions', async (req, res) => {
    try {
        // Always generate new random questions - no caching
        console.log('Generating fresh random quiz questions...');
        const questions = await quizAgent.generateQuizQuestions();

        res.json({
            success: true,
            data: questions
        });
    } catch (error) {
        console.error('Error generating quiz questions:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate quiz questions',
            details: error.message
        });
    }
});

/**
 * POST /api/mba-fit/quiz/submit
 * Submit quiz answers and get recommendations
 */
router.post('/quiz/submit', async (req, res) => {
    try {
        const { answers, questions } = req.body;

        if (!answers || !Array.isArray(answers) || answers.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Invalid answers format'
            });
        }

        if (!questions || !Array.isArray(questions)) {
            return res.status(400).json({
                success: false,
                error: 'Questions data is required'
            });
        }

        console.log(`Analyzing ${answers.length} quiz answers...`);
        const results = await recommenderAgent.analyzeResults(answers, questions);

        res.json({
            success: true,
            data: results
        });
    } catch (error) {
        console.error('Error analyzing quiz results:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to analyze quiz results',
            details: error.message
        });
    }
});

/**
 * POST /api/mba-fit/resume/analyze
 * Upload and analyze resume for MBA specialization recommendation
 */
router.post('/resume/analyze', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'No resume file uploaded'
            });
        }

        const filePath = req.file.path;
        let resumeText = '';

        // Extract text based on file type
        if (req.file.mimetype === 'text/plain') {
            resumeText = fs.readFileSync(filePath, 'utf-8');
        } else if (req.file.mimetype === 'application/pdf') {
            // For PDF, we'll use a dynamic import of pdf-parse
            try {
                const pdfParse = (await import('pdf-parse')).default;
                const pdfBuffer = fs.readFileSync(filePath);
                const pdfData = await pdfParse(pdfBuffer);
                resumeText = pdfData.text;
            } catch (pdfError) {
                console.error('PDF parsing error:', pdfError);
                // If PDF parsing fails, try reading as text
                resumeText = fs.readFileSync(filePath, 'utf-8');
            }
        } else {
            // For DOC/DOCX, we'll read the raw text (basic extraction)
            // In production, you'd want a proper DOCX parser
            resumeText = fs.readFileSync(filePath, 'utf-8');
        }

        // Clean up the uploaded file
        fs.unlinkSync(filePath);

        if (!resumeText || resumeText.trim().length < 50) {
            return res.status(400).json({
                success: false,
                error: 'Could not extract sufficient text from the resume. Please try a different file format.'
            });
        }

        console.log('Analyzing resume...');
        const results = await resumeAgent.analyzeResume(resumeText);

        res.json({
            success: true,
            data: results
        });
    } catch (error) {
        console.error('Error analyzing resume:', error);

        // Clean up file if it exists
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({
            success: false,
            error: 'Failed to analyze resume',
            details: error.message
        });
    }
});

/**
 * POST /api/mba-fit/resume/analyze-text
 * Analyze resume from raw text (for copy-paste functionality)
 */
router.post('/resume/analyze-text', async (req, res) => {
    try {
        const { resumeText } = req.body;

        if (!resumeText || resumeText.trim().length < 50) {
            return res.status(400).json({
                success: false,
                error: 'Please provide more resume content (at least 50 characters)'
            });
        }

        console.log('Analyzing resume text...');
        const results = await resumeAgent.analyzeResume(resumeText);

        res.json({
            success: true,
            data: results
        });
    } catch (error) {
        console.error('Error analyzing resume text:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to analyze resume',
            details: error.message
        });
    }
});

/**
 * POST /api/mba-fit/chatbot/message
 * Send a message to the MBA Counselor Chatbot
 */
router.post('/chatbot/message', async (req, res) => {
    try {
        const { message, conversationHistory, quizResults } = req.body;

        if (!message || message.trim().length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }

        console.log('Processing chatbot message:', message.substring(0, 50) + '...');
        const response = await chatbotAgent.chat(message, conversationHistory || [], quizResults);

        res.json({
            success: true,
            data: response
        });
    } catch (error) {
        console.error('Chatbot error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process message',
            details: error.message
        });
    }
});

/**
 * POST /api/mba-fit/chatbot/greeting
 * Get initial greeting from the chatbot based on quiz results
 */
router.post('/chatbot/greeting', (req, res) => {
    try {
        const { quizResults } = req.body;
        const greeting = chatbotAgent.getInitialGreeting(quizResults);

        res.json({
            success: true,
            data: {
                message: greeting,
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        console.error('Greeting error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get greeting'
        });
    }
});

export default router;

