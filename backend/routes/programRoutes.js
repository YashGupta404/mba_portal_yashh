import express from 'express';
import {
    getPrograms,
    getProgramById,
    getProgramByProgramId,
    createProgram,
    updateProgram,
    deleteProgram
} from '../controllers/programController.js';

const router = express.Router();

// Get all programs
router.get('/', getPrograms);

// Get program by programId (e.g., 'mba-fulltime')
router.get('/program/:programId', getProgramByProgramId);

// Get single program by MongoDB ID
router.get('/:id', getProgramById);

// Create new program
router.post('/', createProgram);

// Update program
router.put('/:id', updateProgram);

// Delete program
router.delete('/:id', deleteProgram);

export default router;
