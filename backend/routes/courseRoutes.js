import express from 'express';
import {
    getCourses,
    getCourseById,
    getCourseByCourseCode,
    createCourse,
    updateCourse,
    deleteCourse,
    getCoursesByDepartment,
    bulkUpdateStatus
} from '../controllers/courseController.js';

const router = express.Router();

// Get all courses with optional filters
router.get('/', getCourses);

// Get courses grouped by department for a program
router.get('/by-department/:programId', getCoursesByDepartment);

// Get course by course code
router.get('/code/:courseCode', getCourseByCourseCode);

// Get single course by ID
router.get('/:id', getCourseById);

// Create new course
router.post('/', createCourse);

// Bulk update course status
router.patch('/bulk-status', bulkUpdateStatus);

// Update course
router.put('/:id', updateCourse);

// Delete course
router.delete('/:id', deleteCourse);

export default router;
