const express = require('express')
const siteController = require('../controllers/siteController')

const router = express.Router();

// Create a new Site
router.post('/', siteController.createSite);

// Get All Sites
router.get('/', siteController.getAllSite);

// Get a Site By Id
router.get('/:siteId', siteController.getSitebyId)

// Update a Site
router.put('/:siteId', siteController.updateSite)

// Delete a Site
router.delete('/:siteId', siteController.deleteSite)

module.exports = router;
