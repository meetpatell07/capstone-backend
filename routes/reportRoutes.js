const express = require('express')
const reportController = require('../controllers/reportController');

const router = express.Router();

// Create a Report
router.post('/', reportController.createReport);

// Get all Report
router.get('/', reportController.getAllReport);

// Get Report By ID
router.get('/:reportId', reportController.getReportbyId);

// Update a Report
router.put('/:reportId', reportController.updateReport);

// Delete a Report
router.delete('/:reportId', reportController.deleteReport);

module.exports = router;
