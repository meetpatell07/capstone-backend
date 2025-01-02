const Site =  require('../models/Sites')

// Business Logic

// Get all Sites
const getAllSite = async () => {
    return await Site.find()
}

// Create a new Site
const createSite = async (siteData) => {

    try {
        console.log("Incoming siteData in service:", siteData); // Debug siteData

        // Get the last site from the database (sort descending by siteId)
        const lastsiteId =  await Site.findOne().sort({ siteId: -1 }) // sort Descending

        // Generate a new siteID
        const newSiteId =  lastsiteId ? lastsiteId.siteId + 1 : 101; // Add 1 if siteId already exist, else default
        
        // create a new site object with generated siteID
        const site = new Site({
            siteId: newSiteId, // Assign the new siteId
            ...siteData,
        })

        // const site = new Site(siteData) // Reference of how object is been created
        return await site.save();
        
    } catch (error) {
        console.log("Error: " + error)
        throw new Error(`Error creating site: ${error.message}`);     
    }
}

// Get Site by ID
const getSitebyId = async (siteId) => {
    return await Site.findById( siteId ); // Here, siteId should only receive the siteId value not the object containg sid key, ie { sid }
}

// Update the Site
const updateSite = async (siteId, updatedData) => {
    return await Site.findByIdAndUpdate(siteId, updatedData, { new: true, runValidators: true});
}

// Delete the Site
const deleteSite = async (siteId) => {
    return await Site.findByIdAndDelete( siteId );
}

module.exports = {
    getAllSite,
    createSite,
    getSitebyId,
    updateSite,
    deleteSite
}