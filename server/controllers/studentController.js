const Event = require('../models/Event'); // Assuming Event schema exists
const Registration = require('../models/Registration'); // Assuming Registration schema exists
const User = require('../models/User'); // Assuming User schema for students exists

// Get all available events
const getAvailableEvents = async (req, res) => {
  try {
    const events = await Event.find({ date: { $gte: new Date() } }); // Fetch future events
    res.status(200).json({ success: true, events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch events' });
  }
};

// Register for an event
const registerForEvent = async (req, res) => {
  const { eventId } = req.params;
  const studentId = req.user.id; // Assuming `authMiddleware` adds `req.user`

  try {
    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Check if already registered
    const alreadyRegistered = await Registration.findOne({ event: eventId, student: studentId });
    if (alreadyRegistered) {
      return res.status(400).json({ success: false, message: 'Already registered for this event' });
    }

    // Create registration
    const registration = new Registration({
      event: eventId,
      student: studentId,
    });

    await registration.save();
    res.status(201).json({ success: true, message: 'Successfully registered for the event' });
  } catch (error) {
    console.error('Error registering for event:', error);
    res.status(500).json({ success: false, message: 'Failed to register for the event' });
  }
};

// View registered events
const viewRegisteredEvents = async (req, res) => {
  const studentId = req.user.id;

  try {
    const registrations = await Registration.find({ student: studentId }).populate('event');
    res.status(200).json({ success: true, registrations });
  } catch (error) {
    console.error('Error fetching registered events:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch registered events' });
  }
};

module.exports = {
  getAvailableEvents,
  registerForEvent,
  viewRegisteredEvents,
};
