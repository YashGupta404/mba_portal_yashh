import Program from '../models/Program.js';

// Get all programs
export const getPrograms = async (req, res) => {
    try {
        const { isActive } = req.query;

        const filter = {};
        if (isActive !== undefined) {
            filter.isActive = isActive === 'true';
        }

        const programs = await Program.find(filter).sort({ displayOrder: 1 });

        res.json({
            success: true,
            count: programs.length,
            data: programs
        });
    } catch (error) {
        console.error('Error fetching programs:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch programs',
            error: error.message
        });
    }
};

// Get single program by ID
export const getProgramById = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);

        if (!program) {
            return res.status(404).json({
                success: false,
                message: 'Program not found'
            });
        }

        res.json({
            success: true,
            data: program
        });
    } catch (error) {
        console.error('Error fetching program:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch program',
            error: error.message
        });
    }
};

// Get program by programId
export const getProgramByProgramId = async (req, res) => {
    try {
        const program = await Program.findOne({ programId: req.params.programId });

        if (!program) {
            return res.status(404).json({
                success: false,
                message: 'Program not found'
            });
        }

        res.json({
            success: true,
            data: program
        });
    } catch (error) {
        console.error('Error fetching program:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch program',
            error: error.message
        });
    }
};

// Create new program
export const createProgram = async (req, res) => {
    try {
        const existingProgram = await Program.findOne({ programId: req.body.programId });

        if (existingProgram) {
            return res.status(400).json({
                success: false,
                message: 'Program ID already exists'
            });
        }

        const program = await Program.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Program created successfully',
            data: program
        });
    } catch (error) {
        console.error('Error creating program:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create program',
            error: error.message
        });
    }
};

// Update program
export const updateProgram = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);

        if (!program) {
            return res.status(404).json({
                success: false,
                message: 'Program not found'
            });
        }

        // Check if programId is being changed and if it already exists
        if (req.body.programId && req.body.programId !== program.programId) {
            const existingProgram = await Program.findOne({
                programId: req.body.programId,
                _id: { $ne: req.params.id }
            });

            if (existingProgram) {
                return res.status(400).json({
                    success: false,
                    message: 'Program ID already exists'
                });
            }
        }

        const updatedProgram = await Program.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        res.json({
            success: true,
            message: 'Program updated successfully',
            data: updatedProgram
        });
    } catch (error) {
        console.error('Error updating program:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update program',
            error: error.message
        });
    }
};

// Delete program
export const deleteProgram = async (req, res) => {
    try {
        const program = await Program.findById(req.params.id);

        if (!program) {
            return res.status(404).json({
                success: false,
                message: 'Program not found'
            });
        }

        await Program.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Program deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting program:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete program',
            error: error.message
        });
    }
};
