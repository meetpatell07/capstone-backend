const mongoose = require('mongoose')

const sitesSchema = new mongoose.Schema({

    siteId: {
        type: Number,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    location: {
        address: { type: String, required: true},
        coordinates: {
            type: [Number], // Latitude and Longitude
            required: true
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    isavailable: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

})

module.exports = mongoose.model('Site', sitesSchema)