const Site =  require('../models/Sites')

// Business Logic

// Get all Sites
const getAllSite = async () => {
    return await Site.find()
}

// Create a new Site
const createSite = async (siteData) => {
    const site = new Site(siteData)
    return await site.save();
}

// Get Site by ID
const getSitebyId = async (siteId) => {
    return await Site.findById({ siteId });
}

// Update the Site
const updateSite = async (siteId, updatedData) => {
    return await Site.findByIdAndUpdate({siteId}, updatedData, { new: true, runValidators: true});
}

// Delete the Site
const deleteSite = async (siteId) => {
    return await Site.findByIdAndDelete({ siteId });
}

module.exports = {
    getAllSite,
    createSite,
    getSitebyId,
    updateSite,
    deleteSite
}