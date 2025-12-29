import Course from '../models/Course.js';
import Program from '../models/Program.js';

// Get all courses with filters
export const getCourses = async (req, res) => {
    try {
        const { programId, department, level, status } = req.query;

        const filter = {};
        if (programId) filter.programId = programId;
        if (department) filter.department = department;
        if (level) filter.level = level;
        if (status) filter.status = status;

        const courses = await Course.find(filter)
            .populate('instructor', 'name email designation')
            .sort({ createdAt: -1 });

        res.json({
            success: true,
            count: courses.length,
            data: courses
        });
    } catch (error) {
        console.error('Error fetching courses:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch courses',
            error: error.message
        });
    }
};

// Get single course by ID
export const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate('instructor', 'name email designation department');

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        res.json({
            success: true,
            data: course
        });
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch course',
            error: error.message
        });
    }
};

// Get course by course code
export const getCourseByCourseCode = async (req, res) => {
    try {
        const course = await Course.findOne({ courseCode: req.params.courseCode.toUpperCase() })
            .populate('instructor', 'name email designation department');

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        res.json({
            success: true,
            data: course
        });
    } catch (error) {
        console.error('Error fetching course:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch course',
            error: error.message
        });
    }
};

// Create new course
export const createCourse = async (req, res) => {
    try {
        const {
            courseCode,
            courseName,
            programId,
            department,
            level,
            credits,
            description,
            syllabus,
            instructor,
            instructorName,
            semester,
            prerequisites,
            learningOutcomes,
            assessmentMethods,
            maxCapacity,
            status
        } = req.body;

        // Check if course code already exists
        const existingCourse = await Course.findOne({ courseCode: courseCode.toUpperCase() });
        if (existingCourse) {
            return res.status(400).json({
                success: false,
                message: 'Course code already exists'
            });
        }

        // Verify program exists
        const program = await Program.findOne({ programId });
        if (!program) {
            return res.status(400).json({
                success: false,
                message: 'Invalid program ID'
            });
        }

        const course = await Course.create({
            courseCode: courseCode.toUpperCase(),
            courseName,
            programId,
            department,
            level,
            credits,
            description,
            syllabus,
            instructor,
            instructorName,
            semester,
            prerequisites,
            learningOutcomes,
            assessmentMethods,
            maxCapacity,
            status: status || 'Draft'
        });

        res.status(201).json({
            success: true,
            message: 'Course created successfully',
            data: course
        });
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create course',
            error: error.message
        });
    }
};

// Update course
export const updateCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        // If courseCode is being updated, check for duplicates
        if (req.body.courseCode && req.body.courseCode.toUpperCase() !== course.courseCode) {
            const existingCourse = await Course.findOne({
                courseCode: req.body.courseCode.toUpperCase(),
                _id: { $ne: req.params.id }
            });

            if (existingCourse) {
                return res.status(400).json({
                    success: false,
                    message: 'Course code already exists'
                });
            }
        }

        // Update course code to uppercase if provided
        if (req.body.courseCode) {
            req.body.courseCode = req.body.courseCode.toUpperCase();
        }

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('instructor', 'name email designation');

        res.json({
            success: true,
            message: 'Course updated successfully',
            data: updatedCourse
        });
    } catch (error) {
        console.error('Error updating course:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update course',
            error: error.message
        });
    }
};

// Delete course
export const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            });
        }

        await Course.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: 'Course deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete course',
            error: error.message
        });
    }
};

// Get courses grouped by department for a specific program
export const getCoursesByDepartment = async (req, res) => {
    try {
        const { programId } = req.params;

        const courses = await Course.aggregate([
            {
                $match: {
                    programId,
                    status: 'Published',
                    isActive: true
                }
            },
            {
                $group: {
                    _id: '$department',
                    courses: {
                        $push: {
                            _id: '$_id',
                            courseCode: '$courseCode',
                            courseName: '$courseName',
                            credits: '$credits',
                            level: '$level',
                            description: '$description'
                        }
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.json({
            success: true,
            data: courses
        });
    } catch (error) {
        console.error('Error fetching courses by department:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch courses by department',
            error: error.message
        });
    }
};

// Bulk update course status
export const bulkUpdateStatus = async (req, res) => {
    try {
        const { courseIds, status } = req.body;

        if (!courseIds || !Array.isArray(courseIds) || courseIds.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Course IDs array is required'
            });
        }

        const result = await Course.updateMany(
            { _id: { $in: courseIds } },
            { status }
        );

        res.json({
            success: true,
            message: `${result.modifiedCount} courses updated successfully`,
            data: result
        });
    } catch (error) {
        console.error('Error bulk updating courses:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update courses',
            error: error.message
        });
    }
};
