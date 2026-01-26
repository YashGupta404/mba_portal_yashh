"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    Upload,
    FileText,
    ArrowRight,
    ArrowLeft,
    Target,
    Briefcase,
    BookOpen,
    Download,
    RotateCcw,
    Sparkles,
    Brain,
    TrendingUp,
    Loader2,
    MessageCircle,
    Send,
    X,
    Bot
} from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Types
interface QuizOption {
    text: string;
    specialization: string;
    points: number;
    isCorrect?: boolean;
}

interface QuizQuestion {
    id: number;
    question: string;
    category: string;
    course?: string;
    options: QuizOption[];
    targetSpecialization: string;
}

interface Answer {
    questionId: number;
    selectedOption: QuizOption;
}

interface SpecializationScore {
    id: string;
    name: string;
    color: string;
    score: number;
    correct?: number;
    total?: number;
}

interface QuestionAnalysis {
    questionNumber: number;
    question: string;
    course?: string;
    category: string;
    targetSpecialization: string;
    selectedAnswer: string;
    isCorrect: boolean;
    correctAnswer?: string;
}

interface QuizResult {
    summary?: {
        totalQuestions: number;
        correctAnswers: number;
        wrongAnswers: number;
        percentage: number;
    };
    primaryMatch: {
        id: string;
        name: string;
        color: string;
        score: number;
        correct?: number;
        total?: number;
        percentage?: number;
        reasons?: string[];
    };
    secondaryMatch: {
        id: string;
        name: string;
        color: string;
        score: number;
        reasons?: string[];
    };
    allScores: SpecializationScore[];
    likelyRoles: string[];
    whyThisFits: string[];
    recommendedElectives: string[];
    improvementAreas?: string[];
    questionAnalysis: QuestionAnalysis[];
    careerInsight: string;
}

interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp?: string;
}


type ViewState = 'landing' | 'quiz' | 'resume-upload' | 'results' | 'loading';

export default function MBAFitFinderPage() {
    const [viewState, setViewState] = useState<ViewState>('landing');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [results, setResults] = useState<QuizResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [resultSource, setResultSource] = useState<'quiz' | 'resume'>('quiz');

    // Chatbot state
    const [showChatbot, setShowChatbot] = useState(false);
    const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
    const [chatInput, setChatInput] = useState('');
    const [isChatLoading, setIsChatLoading] = useState(false);
    const chatEndRef = React.useRef<HTMLDivElement>(null);

    // Fetch quiz questions - with cache prevention for fresh questions each time
    const fetchQuestions = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // Add timestamp to prevent caching and get fresh shuffled questions
            const timestamp = Date.now();
            const response = await fetch(`${API_URL}/api/mba-fit/quiz/questions?t=${timestamp}`);
            const data = await response.json();
            if (data.success) {
                setQuestions(data.data);
                setViewState('quiz');
            } else {
                throw new Error(data.error || 'Failed to load questions');
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // Submit quiz answers
    const submitQuiz = async () => {
        setViewState('loading');
        setError(null);
        try {
            const response = await fetch(`${API_URL}/api/mba-fit/quiz/submit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers, questions }),
            });
            const data = await response.json();
            if (data.success) {
                setResults(data.data);
                setResultSource('quiz');
                setViewState('results');
            } else {
                throw new Error(data.error || 'Failed to analyze results');
            }
        } catch (err: any) {
            setError(err.message);
            setViewState('quiz');
        }
    };

    // Handle answer selection
    const handleAnswerSelect = (option: QuizOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        const newAnswer: Answer = {
            questionId: currentQuestion.id,
            selectedOption: option,
        };

        setAnswers(prev => {
            const existing = prev.findIndex(a => a.questionId === currentQuestion.id);
            if (existing >= 0) {
                const updated = [...prev];
                updated[existing] = newAnswer;
                return updated;
            }
            return [...prev, newAnswer];
        });

        // Auto-advance after a brief delay
        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            }
        }, 300);
    };

    // Handle resume upload
    const handleResumeUpload = async (file: File) => {
        setUploadedFile(file);
        setViewState('loading');
        setError(null);

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await fetch(`${API_URL}/api/mba-fit/resume/analyze`, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setResults(data.data);
                setResultSource('resume');
                setViewState('results');
            } else {
                throw new Error(data.error || 'Failed to analyze resume');
            }
        } catch (err: any) {
            setError(err.message);
            setViewState('resume-upload');
        }
    };

    // Handle file drop
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) handleResumeUpload(file);
    };

    // Reset to start
    const resetQuiz = () => {
        setViewState('landing');
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setResults(null);
        setUploadedFile(null);
        setError(null);
        setChatMessages([]);
        setShowChatbot(false);
    };

    // Open chatbot with initial greeting
    const openChatbot = async () => {
        setShowChatbot(true);
        setIsChatLoading(true);
        try {
            const response = await fetch(`${API_URL}/api/mba-fit/chatbot/greeting`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quizResults: results })
            });
            const data = await response.json();
            if (data.success) {
                setChatMessages([{
                    role: 'assistant',
                    content: data.data.message,
                    timestamp: data.data.timestamp
                }]);
            }
        } catch (err) {
            setChatMessages([{
                role: 'assistant',
                content: "Hello! 👋 I'm your IEM MBA Counselor. How can I help you today?",
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    // Send message to chatbot
    const sendChatMessage = async () => {
        if (!chatInput.trim() || isChatLoading) return;

        const userMessage: ChatMessage = {
            role: 'user',
            content: chatInput.trim(),
            timestamp: new Date().toISOString()
        };

        setChatMessages(prev => [...prev, userMessage]);
        setChatInput('');
        setIsChatLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/mba-fit/chatbot/message`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: userMessage.content,
                    conversationHistory: chatMessages,
                    quizResults: results
                })
            });
            const data = await response.json();
            if (data.success) {
                setChatMessages(prev => [...prev, {
                    role: 'assistant',
                    content: data.data.message,
                    timestamp: data.data.timestamp
                }]);
            }
        } catch (err) {
            setChatMessages(prev => [...prev, {
                role: 'assistant',
                content: "I'm sorry, I couldn't process that. Please try again.",
                timestamp: new Date().toISOString()
            }]);
        } finally {
            setIsChatLoading(false);
        }
    };

    // Auto-scroll chat to bottom
    React.useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    // Get current answer for a question
    const getCurrentAnswer = () => {
        const currentQuestion = questions[currentQuestionIndex];
        return answers.find(a => a.questionId === currentQuestion?.id);
    };

    // Progress percentage
    const progressPercentage = questions.length > 0
        ? Math.round(((currentQuestionIndex + 1) / questions.length) * 100)
        : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            <main className="pt-8 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        {/* Landing View */}
                        {viewState === 'landing' && (
                            <LandingView
                                onStartQuiz={fetchQuestions}
                                onUploadResume={() => setViewState('resume-upload')}
                                isLoading={isLoading}
                            />
                        )}

                        {/* Quiz View */}
                        {viewState === 'quiz' && questions.length > 0 && (
                            <QuizView
                                questions={questions}
                                currentIndex={currentQuestionIndex}
                                answers={answers}
                                onAnswerSelect={handleAnswerSelect}
                                onPrevious={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                                onNext={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
                                onSubmit={submitQuiz}
                                progress={progressPercentage}
                                getCurrentAnswer={getCurrentAnswer}
                            />
                        )}

                        {/* Resume Upload View */}
                        {viewState === 'resume-upload' && (
                            <ResumeUploadView
                                onUpload={handleResumeUpload}
                                onBack={() => setViewState('landing')}
                                isDragOver={isDragOver}
                                setIsDragOver={setIsDragOver}
                                handleDrop={handleDrop}
                                error={error}
                            />
                        )}

                        {/* Loading View */}
                        {viewState === 'loading' && (
                            <LoadingView source={resultSource} />
                        )}

                        {/* Results View */}
                        {viewState === 'results' && results && (
                            <ResultsView
                                results={results}
                                source={resultSource}
                                onRetake={resetQuiz}
                                onOpenChatbot={openChatbot}
                            />
                        )}
                    </AnimatePresence>

                    {/* Error Display */}
                    {error && viewState !== 'resume-upload' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                        >
                            {error}
                        </motion.div>
                    )}
                </div>
            </main>

            {/* Chatbot Modal */}
            <AnimatePresence>
                {showChatbot && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                        onClick={() => setShowChatbot(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Chat Header */}
                            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">MBA Counselor</h3>
                                        <p className="text-white/80 text-sm">AI-Powered Career Guidance</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowChatbot(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Chat Messages */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                                {chatMessages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                                                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-br-md'
                                                : 'bg-white text-slate-700 rounded-bl-md shadow-md border border-slate-100'
                                                }`}
                                        >
                                            <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                                        </div>
                                    </div>
                                ))}
                                {isChatLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white p-4 rounded-2xl rounded-bl-md shadow-md border border-slate-100">
                                            <div className="flex items-center gap-2">
                                                <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                                                <span className="text-slate-500 text-sm">Thinking...</span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={chatEndRef} />
                            </div>

                            {/* Chat Input */}
                            <div className="p-4 border-t border-slate-200 bg-white">
                                <div className="flex gap-3">
                                    <input
                                        type="text"
                                        value={chatInput}
                                        onChange={(e) => setChatInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                                        placeholder="Ask about MBA programs, careers, admissions..."
                                        className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                                        disabled={isChatLoading}
                                    />
                                    <button
                                        onClick={sendChatMessage}
                                        disabled={isChatLoading || !chatInput.trim()}
                                        className="px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="text-xs text-slate-400 mt-2 text-center">
                                    Powered by AI • Your data is secure
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Landing View Component
function LandingView({
    onStartQuiz,
    onUploadResume,
    isLoading
}: {
    onStartQuiz: () => void;
    onUploadResume: () => void;
    isLoading: boolean;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                    MBA Fit Finder™
                </h1>
                <p className="text-lg text-slate-600 mb-12">
                    Discover your ideal MBA specialization
                </p>
            </motion.div>

            {/* Option Cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* Quiz Option */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 cursor-pointer group"
                    onClick={onStartQuiz}
                >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Take the Quiz</h2>
                    <p className="text-slate-600 mb-6">
                        Answer 10 intelligent questions about your background, preferences, and career goals
                    </p>
                    <ul className="text-left text-sm text-slate-500 space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            5-minute assessment
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Personalized insights
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            Best-fit specializations
                        </li>
                    </ul>
                    <button
                        disabled={isLoading}
                        className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Loading...
                            </>
                        ) : (
                            <>
                                Start Quiz
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </motion.div>

                {/* Resume Option */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 cursor-pointer group"
                    onClick={onUploadResume}
                >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <Upload className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Upload Resume</h2>
                    <p className="text-slate-600 mb-6">
                        Let our AI analyze your background and experience to recommend ideal MBA paths
                    </p>
                    <ul className="text-left text-sm text-slate-500 space-y-2 mb-6">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500" />
                            AI-powered analysis
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500" />
                            Detailed report
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-amber-500" />
                            Career recommendations
                        </li>
                    </ul>
                    <button className="w-full py-3 px-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                        Upload Resume
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Quiz View Component
function QuizView({
    questions,
    currentIndex,
    answers,
    onAnswerSelect,
    onPrevious,
    onNext,
    onSubmit,
    progress,
    getCurrentAnswer,
}: {
    questions: QuizQuestion[];
    currentIndex: number;
    answers: Answer[];
    onAnswerSelect: (option: QuizOption) => void;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
    progress: number;
    getCurrentAnswer: () => Answer | undefined;
}) {
    const currentQuestion = questions[currentIndex];
    const currentAnswer = getCurrentAnswer();
    const isLastQuestion = currentIndex === questions.length - 1;
    const allAnswered = answers.length === questions.length;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    MBA Fit Finder™
                </h1>
                <p className="text-slate-600">
                    {questions.length} questions to discover your ideal specialization
                </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Question {currentIndex + 1} of {questions.length}</span>
                    <span>{progress}%</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, #22c55e 0%, #eab308 50%, #ef4444 100%)',
                        }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
                {/* Question */}
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6">
                    {currentQuestion.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => onAnswerSelect(option)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${currentAnswer?.selectedOption.text === option.text
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-800'
                                : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${currentAnswer?.selectedOption.text === option.text
                                    ? 'border-emerald-500 bg-emerald-500'
                                    : 'border-slate-300'
                                    }`}>
                                    {currentAnswer?.selectedOption.text === option.text && (
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    )}
                                </div>
                                <span className="font-medium">{option.text}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={onPrevious}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                </button>

                {isLastQuestion ? (
                    <button
                        onClick={onSubmit}
                        disabled={!allAnswered}
                        className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        Get Results
                        <Sparkles className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        onClick={onNext}
                        className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                    >
                        Next
                        <ArrowRight className="w-5 h-5" />
                    </button>
                )}
            </div>
        </motion.div>
    );
}

// Resume Upload View
function ResumeUploadView({
    onUpload,
    onBack,
    isDragOver,
    setIsDragOver,
    handleDrop,
    error,
}: {
    onUpload: (file: File) => void;
    onBack: () => void;
    isDragOver: boolean;
    setIsDragOver: (value: boolean) => void;
    handleDrop: (e: React.DragEvent) => void;
    error: string | null;
}) {
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) onUpload(file);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
        >
            {/* Back Button */}
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-800 mb-8 transition-colors"
            >
                <ArrowLeft className="w-5 h-5" />
                Back
            </button>

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    Upload Your Resume
                </h1>
                <p className="text-slate-600">
                    Let our AI analyze your background and recommend the perfect MBA specialization
                </p>
            </div>

            {/* Upload Area */}
            <div
                onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                className={`bg-white rounded-2xl p-12 shadow-lg border-2 border-dashed transition-all cursor-pointer ${isDragOver
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-slate-300 hover:border-slate-400'
                    }`}
            >
                <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx,.txt"
                    onChange={handleFileSelect}
                    className="hidden"
                />
                <label htmlFor="resume-upload" className="cursor-pointer block text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-100 flex items-center justify-center">
                        <Upload className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        Drop your resume here
                    </h3>
                    <p className="text-slate-500 mb-4">or click to select a file</p>
                    <p className="text-sm text-slate-400">
                        PDF, DOC, DOCX, or TXT (Max 10MB)
                    </p>
                </label>
            </div>

            {/* Error Message */}
            {error && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
                >
                    {error}
                </motion.div>
            )}

            {/* What We Analyze */}
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <h3 className="font-semibold text-slate-800 mb-4">What we analyze</h3>
                <ul className="space-y-3 text-slate-600">
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        Your work experience and industry background
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        Technical and professional skills
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        Educational qualifications
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        Career progression and achievements
                    </li>
                </ul>
            </div>
        </motion.div>
    );
}

// Loading View
function LoadingView({ source }: { source: 'quiz' | 'resume' }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20"
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                className="w-20 h-20 mb-8 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 flex items-center justify-center"
            >
                <Brain className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {source === 'quiz' ? 'Analyzing Your Responses' : 'Analyzing Your Resume'}
            </h2>
            <p className="text-slate-600">
                Our AI is finding your best MBA match...
            </p>
        </motion.div>
    );
}

// Results View
function ResultsView({
    results,
    source,
    onRetake,
    onOpenChatbot,
}: {
    results: QuizResult;
    source: 'quiz' | 'resume';
    onRetake: () => void;
    onOpenChatbot: () => void;
}) {
    const maxScore = Math.max(...results.allScores.map(s => s.score), 1);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-3xl mx-auto"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                    Your MBA Fit Result
                </h1>
                <p className="text-slate-600">
                    Based on your {source === 'quiz' ? 'quiz performance' : 'resume'}, here's your personalized recommendation
                </p>
            </div>

            {/* Score Summary (for quiz) */}
            {source === 'quiz' && results.summary && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="grid grid-cols-3 gap-4 mb-6"
                >
                    <div className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-200">
                        <div className="text-3xl font-bold text-emerald-600">{results.summary.correctAnswers}</div>
                        <div className="text-sm text-emerald-700">Correct</div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 text-center border border-red-200">
                        <div className="text-3xl font-bold text-red-600">{results.summary.wrongAnswers}</div>
                        <div className="text-sm text-red-700">Wrong</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-200">
                        <div className="text-3xl font-bold text-blue-600">{results.summary.percentage}%</div>
                        <div className="text-sm text-blue-700">Score</div>
                    </div>
                </motion.div>
            )}

            {/* Primary Match Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl p-8 mb-6 text-white"
                style={{ backgroundColor: results.primaryMatch.color || '#5F7161' }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <Target className="w-6 h-6 text-white/70" />
                    <span className="text-white/70 font-medium">BEST MATCH FOR YOU</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    {results.primaryMatch.name}
                </h2>
                <p className="text-white/80">
                    {source === 'quiz'
                        ? `You scored highest in ${results.primaryMatch.name?.replace('MBA in ', '')} questions!`
                        : 'Your background aligns perfectly with this specialization'}
                </p>
            </motion.div>

            {/* Score Chart */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-6"
            >
                <h3 className="font-semibold text-slate-800 mb-6">Performance by Specialization</h3>
                <div className="flex items-end justify-between gap-3" style={{ height: '220px' }}>
                    {results.allScores.slice(0, 6).map((spec, index) => {
                        // Calculate bar height - use correct count
                        const value = spec.correct !== undefined ? spec.correct : spec.score;
                        const maxValue = Math.max(...results.allScores.map(s => s.correct !== undefined ? s.correct : s.score), 1);

                        // Calculate height: min 30px for 0, scale up to 180px for max
                        const minHeight = 30; // minimum height in pixels
                        const maxHeight = 180; // maximum height in pixels
                        const barHeight = value === 0
                            ? minHeight
                            : minHeight + ((value / maxValue) * (maxHeight - minHeight));

                        return (
                            <div key={spec.id} className="flex-1 flex flex-col items-center justify-end h-full">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: barHeight }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                                    className="w-full rounded-t-lg relative group cursor-pointer flex items-center justify-center"
                                    style={{
                                        backgroundColor: spec.color || '#888888',
                                    }}
                                >
                                    {/* Score label on bar */}
                                    <span className="text-white font-bold text-lg drop-shadow-md">
                                        {spec.correct !== undefined ? spec.correct : spec.score}
                                    </span>
                                    {/* Tooltip on hover */}
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-16 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap transition-opacity z-10 shadow-lg">
                                        <div className="font-semibold">{spec.name?.replace('MBA in ', '')}</div>
                                        {spec.correct !== undefined ? (
                                            <div>{spec.correct}/{spec.total} correct</div>
                                        ) : (
                                            <div>Score: {spec.score}</div>
                                        )}
                                    </div>
                                </motion.div>
                                <span className="text-xs text-slate-600 mt-2 text-center leading-tight font-medium">
                                    {spec.name?.replace('MBA in ', '').split(' ')[0]}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Why This Fits & Likely Roles */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        <h3 className="font-semibold text-slate-800">Why This Fits You</h3>
                    </div>
                    <ul className="space-y-3">
                        {results.whyThisFits?.map((reason, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-600">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                {reason}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <Briefcase className="w-5 h-5 text-red-500" />
                        <h3 className="font-semibold text-slate-800">Likely Career Roles</h3>
                    </div>
                    <ul className="space-y-3">
                        {results.likelyRoles?.map((role, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-600">
                                <ArrowRight className="w-4 h-4 text-slate-400" />
                                {role}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Secondary Match */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-50 rounded-2xl p-6 mb-6 border border-slate-200"
            >
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-800">
                        Second Best: {results.secondaryMatch?.name}
                    </h3>
                </div>
                <p className="text-slate-600">
                    Also a good fit for your profile. Consider this as an alternative path.
                </p>
            </motion.div>

            {/* Recommended Electives */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-6"
            >
                <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold text-slate-800">Recommended Electives</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                    {results.recommendedElectives?.map((elective, index) => (
                        <span
                            key={index}
                            className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium"
                        >
                            {elective}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Question Analysis (for quiz results) */}
            {source === 'quiz' && results.questionAnalysis && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-8"
                >
                    <h3 className="font-semibold text-slate-800 mb-4">Question-wise Breakdown</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {results.questionAnalysis.map((q, index) => (
                            <div
                                key={index}
                                className={`flex items-start gap-3 p-4 rounded-xl border ${q.isCorrect
                                    ? 'bg-emerald-50 border-emerald-200'
                                    : 'bg-red-50 border-red-200'
                                    }`}
                            >
                                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${q.isCorrect
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-red-500 text-white'
                                    }`}>
                                    {q.isCorrect ? '✓' : '✗'}
                                </span>
                                <div className="flex-grow">
                                    <p className="text-sm text-slate-700 font-medium">{q.question}</p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        <span className="font-medium">{q.course || q.category}</span>
                                        {' • '}
                                        {q.targetSpecialization}
                                    </p>
                                    <p className={`text-xs mt-2 ${q.isCorrect ? 'text-emerald-700' : 'text-red-700'}`}>
                                        Your answer: <span className="font-medium">{q.selectedAnswer}</span>
                                    </p>
                                    {!q.isCorrect && q.correctAnswer && (
                                        <p className="text-xs text-emerald-700 mt-1">
                                            Correct answer: <span className="font-medium">{q.correctAnswer}</span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
            >
                <button
                    onClick={() => window.print()}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-slate-800 text-slate-800 hover:bg-slate-50 font-semibold rounded-xl transition-colors"
                >
                    <Download className="w-5 h-5" />
                    Download Report
                </button>
            </motion.div>

            {/* Retake */}
            <div className="text-center">
                <button
                    onClick={onRetake}
                    className="flex items-center gap-2 mx-auto text-slate-500 hover:text-slate-700 transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Retake Quiz
                </button>
            </div>
        </motion.div>
    );
}
