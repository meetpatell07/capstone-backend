const User = require("../models/User"); // Import a User Model

// Business Logic: Create a new User
const createUserService = async ({ fname, lname, email, password, mobile, dateofBirth, role, profile, employeeId}) => {
    // Check if the email already exists
    const exisitingUser = await User.findOne({ email });
    if (exisitingUser) throw new Error("Email Already exists");

    // Generate a unique employee ID
    // const lastUser = await User.findOne.sort({ employeeId : -1}); // queries for the last user in database and sorts the results in descending order
    // const employeeId = lastUser ? lastUser.employeeId + 1 : 1001 // If there is exisitng user in databse it adds 1 on the Id
     
    // Create a new User
    const user = new User({
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

    // Saves the user in Database
    await user.save();
    return user;

}

module.exports = { createUserService };
