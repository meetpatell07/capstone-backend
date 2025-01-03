const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({

    reportId: {
        type: Number,
        unique: true,
        required: true,
    },
    reportName: {
        type: String,
        required: true,
        trim: true,
    },
    reportDescription: {
        type: String,
        required: false,
    },
    incidentDate: {
        type: Date,
        required: true
    },
    status : {
        type: String,
        enum: ['Pending', 'In Progess', 'Resolved', 'Rejected'],
        default: 'Pending',
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }, // User who generated the report
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    
})

mongoose.exports = mongoose.model('Report', reportSchema);