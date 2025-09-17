const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const {
  getAllUsers,
  getAllOrganizers,
  approveOrganizer,
  deleteUser,
  deleteOrganizer, // Import deleteOrganizer function
} = require('../controllers/adminController');

const router = express.Router();

// Protected and Role-Based Routes for Admin
//router.use(authMiddleware, roleMiddleware(['admin']));

router.get('/users', getAllUsers);                      // View all users
router.get('/organizers', getAllOrganizers);            // View all organizers
router.put('/approve-organizer/:id', approveOrganizer); // Approve organizer
router.delete('/delete-user/:id', deleteUser);          // Delete a user
router.delete('/delete-organizer/:id', deleteOrganizer); // Delete an organizer

module.exports = router;
