// API Configuration
// In production (Vercel), uses NEXT_PUBLIC_API_URL environment variable
// In development, falls back to localhost:5000

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
    faculty: `${API_BASE_URL}/api/faculty`,
    programs: `${API_BASE_URL}/api/programs`,
    courses: `${API_BASE_URL}/api/courses`,
    applications: `${API_BASE_URL}/api/applications`,
    enquiry: `${API_BASE_URL}/api/enquiry/post`,
    studentLife: `${API_BASE_URL}/api/student-life`,
    facilities: `${API_BASE_URL}/api/facilities`,
};
