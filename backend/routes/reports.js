const express = require('express');
const { createReport, getReports } = require('../controllers/reportController');
const requireAuth = require('../middleware/authMiddleware');
const router = express.Router();

router.use(requireAuth); // Apply auth middleware to all routes

// POST create a report
router.post('/', createReport);

// GET all reports
router.get('/', getReports);

module.exports = router;