const { reportService } = require("../services/reportService");

// Controller

// Get All reports 
const getAllReport = async (req, res) => {
    try {
        const report = await reportService.getAllReport
        if(report){
            res.status(200).json({ message: "Successfully Fetched Report", report})
        } else{
            res.status(404).json({ message: "Report Not Found"})
        }    
    } catch (error) {
        console.log("Error Occurred: ", error)
        res.status(500).json({message: "Error Fetching Reports", error})
    }
}

// Create a Report
const createReport = async (req, res) => {
    const reportData = req.body; // Fetch the Data from thr req body
    try {
        const report = await reportService.createReport(reportData);
        res.status(201).json({ message: "Successfully Created Report: ", report});
    } catch (error) {
        console.log("Error Creating Report: ", error)
        res.status(500).json({ message: "Error Creating Report", error})
    }
}

// Get a Report By Id
const getReportbyId = async (req, res) => {
    const {reportId} = req.params; // Get the Id from the params
    try {
        const report = await reportService.getReportbyId(reportId);
        if(report){
            res.status(200).json({ message: "Successfully Fetched Report", report})
        } else{
            res.status(404).json({ message: "Report Not Found"})
        }
    } catch (error) {
        console.log("Error Occurred: ", error)
        res.status(500).json({message: "Error Fetching Reports", error})
    }
}

// Update a Report 
const updateReport = async (req, res) => {
    try {
        const {reportId} = req.params;
        const updatedReport = req.body;

        const report = await reportService.updateReport(reportId, updatedReport);
        if(report){
            res.status(200).json({ message: "Successfully Updated Report", report})
        } else{
            res.status(404).json({ message: "Report Not Found"})
        }
    } catch (error) {
        console.log("Error Occurred: ", error)
        res.status(500).json({message: "Error Updating Reports", error})
    }
}

// Delete a Report
const deleteReport = async (req, res) => {
    try {
        const {reportId} = req.params;

        const report = await reportService.deleteReport(reportId);
        if(report){
            res.status(204).json({ message: "Successfully Deleted Report", report})
        } else{
            res.status(404).json({ message: "Report Not Found"})
        }
    } catch (error) {
        console.log("Error Occurred: ", error)
        res.status(500).json({message: "Error Deleting Reports", error})
    }
}