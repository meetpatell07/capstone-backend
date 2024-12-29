const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');
const {protect, authorizeRoles  } = require('../middleware/authMiddleware')

const router = express.Router();

router.get("/get-all-users", getAllUser)
// Create a User(Accessible only by HR or SuperAdmin)
router.post("/user", createUser);

// Create a user (Accessible by HR or SuperAdmin)
// router.post("/", protect, authorizeRoles("HR", "SuperAdmin"), createUser, getAllUser);

module.exports = router;

