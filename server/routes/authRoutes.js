const express = require('express');
const { register, login } = require('../controllers/authController'); // Ensure this file is correctly importing the controller
const router = express.Router();

// Register route
router.post('/register', register); // Ensure the controller method is imported correctly

// Login route
router.post('/login', login); // Ensure the controller method is imported correctly

module.exports = router;
