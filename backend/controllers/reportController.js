const Report = require('../models/ReportsModel');
const mongoose = require('mongoose');

// Create a report
const createReport = async (req, res) => {
    const { reportedBy, reportedItem, reason, type } = req.body;

    if (!mongoose.Types.ObjectId.isValid(reportedBy) || !mongoose.Types.ObjectId.isValid(reportedItem)) {
        return res.status(404).json({ error: 'Invalid user ID or reported item ID' });
    }

    try {
        const report = await Report.create({ reportedBy, reportedItem, reason, type, createdAt: new Date() });
        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all reports
const getReports = async (req, res) => {
    try {
        const reports = await Report.find({}).sort({ createdAt: -1 });
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createReport,
    getReports
};