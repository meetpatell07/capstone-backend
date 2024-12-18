const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    employeeId: {
        type: Number,
        unique: true,
    },
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname: {
        type: String,
        required: true,
        trim: true,
    },
    profile: {
        type: String, // URL for the profile picture
        required: false,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 characters long"],
    },
    role: {
        type: String,
        enum: ["Employee", "HR", "Manager", "Payroll Manager"],
        default: "Employee",
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

mongoose.exports = mongoose.model("User", userSchema);