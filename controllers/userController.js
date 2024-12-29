const { createUserService } = require("../services/userService");
const User = require('../models/User'); // Assuming your User model is in the models folder

// Get all Users
const getAllUser = async (req, res) => {
    try {
        const users = await User.find(); // Find All Users
        res.status(200).json(users); // Return the Users Data wit 200 status code
    } catch (error) {
        console.log(error)
        res.status(500).json({ message : "Error Fetching Users ", error})
    }
}

// @desc Create a new user with an optional profile picture
// @route POST /api/users
// @access Private (HR, SuperAdmin)
const createUser = async (req, res) => {
    try {
        const { fname, lname, email, password, mobile, dateofBirth, role } = req.body

        // File upload handling (optional profile picture)
        const profile = req.file ? `/uploads/${req.file.filename}` : null;

        // Generate a unique employeeId
        const lastUser = await User.findOne().sort({ employeeId: -1 });
        const employeeId = lastUser ? lastUser.employeeId + 1 : 1001;

        // call the service layer to handle the business logic
        const user = await createUserService({
            fname,
            lname,
            employeeId,
            email,
            password,
            mobile,
            dateofBirth,
            role: role || "Employee",
            profile
        })

        res.status(201).json({ message: "Employee Created Successfully", user})

    } catch (error) {
        res.status(400).json({ message: error.messgae})
        console.log("Error Occured: ", error)
    }
}

module.exports = { createUser, getAllUser }