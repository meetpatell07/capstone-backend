const siteService = require('../services/siteService')

// Controller will communicate with service

// Get All Sites Controller
const getAllSite = async (req, res) => {
    try {
        const sites = await siteService.getAllSite();
        res.status(200).json(sites)
    } catch (error) {
        res.status(500).json({ message: "Error Fetching sites", error})
        console.log(error);
    }
}

// Create a Site
const createSite = async (req, res) => {
    const updatedData = req.body; 
    try {
        const site = await siteService.createSite(updatedData);
        res.status(201).json({ message: "Successfully Created Sites", site})
    } catch (error) {
        res.status(500).json({ message: "Error Creating Site", error})
        console.log(error);
    }
}

// Get Site by ID
const getSitebyId = async (req, res) => {
    const { sid } = req.params;
    try {
        const site = await siteService.getSitebyId(sid);
        if(site){
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
    const {sid} = req.params;
    const {updatedData} = req.body;

    try {
        const updatesitebyId =  await siteService.updateSite(sid, updatedData);
        if(updatedData){
            res.status(200).json({ message: "Successfully Fetched Site", updatesitebyId});
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