const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

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
        required: false, // make it to true later
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

// Hash the password before saving the user
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Only hash if password is new or modified
    const salt = await bcrypt.genSalt(10); // Generate a salt
    this.password = await bcrypt.hash(this.password, salt); // Hash the password
    next();
});

// Compare plain text password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);