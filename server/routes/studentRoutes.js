const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const {
  getAvailableEvents,
  registerForEvent,
  viewRegisteredEvents,
} = require('../controllers/studentController');

const router = express.Router();

// Protected and Role-Based Routes for Student
router.use(authMiddleware, roleMiddleware(['student']));

router.get('/available-events', getAvailableEvents);      // View all available events
router.post('/register-event/:eventId', registerForEvent); // Register for an event
router.get('/registered-events', viewRegisteredEvents);   // View student's registered events

module.exports = router;
