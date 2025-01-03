const siteService = require('../services/siteService')

// Controller will communicate with service

// Get All Sites Controller
const getAllSite = async (req, res) => {
    try {
        const sites = await siteService.getAllSite();
        if(sites){
            res.status(200).json({ message: "Successfully Fetched Site", sites});
        } else {
            res.status(404).json({ message: "Site Not Found"});
        }    
    } catch (error) {
        res.status(500).json({ message: "Error Fetching sites", error})
        console.log(error);
    }
}

// Create a Site
const createSite = async (req, res) => {
    const data = req.body; 
    try {
        const site = await siteService.createSite(data);
        res.status(201).json({ message: "Successfully Created Sites", site})
    } catch (error) {
        res.status(500).json({ message: "Error Creating Site", error})
        console.log(error);
    }
}

// Get Site by ID
const getSitebyId = async (req, res) => {
    try {
        const {siteId}  = req.params; // Using destructing to get the siteId from the URL params
        const site = await siteService.getSitebyId(siteId);
        if(siteId){
            res.status(200).json({ message: "Successfully Fetched Site", site});
        } else {
            res.status(404).json({ message: "Site Not Found"});
        }
    } catch (error) {
        res.status(500).json({ message: "Error Fetching site", error})
        console.log(error);
    }
}

// Update Site by ID
const updateSite = async (req, res) => {
    const {siteId} = req.params;
    const updatedData = req.body;


    try {
        const updatesitebyId =  await siteService.updateSite(siteId, updatedData);
        console.log(updatesitebyId)
        if(updatesitebyId){
            res.status(200).json({ message: "Successfully Updated Site", updatesitebyId});
        } else {
            res.status(404).json({ message: "Site Not Found"});
        }

    } catch (error) {
        res.status(500).json({ message: "Error Updating site", error})
        console.log(error); 
    }
}

// Delete the Site
const deleteSite = async (req, res) => {
    const {sid} = req.params;

    try {
        const deleteSiteById = await siteService.deleteSite(sid);
        
        if(deleteSiteById){
            res.status(204).json({ message: "Site Deleted Successfully"})
        } else{
            res.status(404).json({ message: "Site Not Found"});
        }

    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: "Error Deleting Site", error})
    }
}

module.exports = {
    getAllSite,
    createSite,
    getSitebyId,
    updateSite,
    deleteSite
}