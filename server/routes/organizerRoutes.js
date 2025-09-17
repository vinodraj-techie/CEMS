const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const {
  createEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
  addClub,
  getMyClubs,
} = require('../controllers/organizerController');

const router = express.Router();

// Protected and Role-Based Routes for Organizer
router.use(authMiddleware, roleMiddleware(['organizer']));

router.post('/create-event', createEvent);          // Create an event
router.get('/my-events', getMyEvents);              // View organizer's events
router.put('/update-event/:id', updateEvent);       // Update an event
router.delete('/delete-event/:id', deleteEvent);    // Delete an event

router.post('/add-club', addClub);                  // Add a new club
router.get('/my-clubs', getMyClubs);                // View organizer's clubs

module.exports = router;
