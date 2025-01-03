const Report = require("../models/Report")

// Business Logic

// Get All the Reports
const getAllReports = async () => {
    return await Report.find();
}

const createReport = async(reportData) => {

    // Get the last Report from the databse
    const lastReportId = await Report.findOne().sort({ reportId: -1 }) // sort Descending
    
    // Generate new ReportID
    const newReportId = lastReportId ? lastReportId.reportId + 1 : 1001;

    // Create a new Report Object with generate reportID
    const report = new Report ({
        reportId : newReportId,
        ...reportData
    })

    return await Report.save();
}

// Get Report By Id
const getReportbyId =  async (reportId) => {
    return await Report.findById(reportId);
}

// Update the Report
const updateReport = async (reportId, reportData) => {
    return await Report.findByIdAndUpdate(reportId, reportData, { new: true, runValidators: true })
}

// Delete the Report
const deleteReport = async (reportId) => {
    return await Report.findByIdAndDelete(reportId);
}

module.exports = {
    getAllReports,
    createReport,
    getReportbyId,
    updateReport,
    deleteReport
};