const Event = require('../models/Event'); // Assuming Event schema exists
const Club = require('../models/Club'); // Assuming Club schema exists

// Create an event
const createEvent = async (req, res) => {
  const { name, location, date, rewards, description, clubId } = req.body;
  const organizerId = req.user.id; // Assuming authMiddleware adds req.user

  try {
    // Check if the club exists and belongs to the organizer
    const club = await Club.findOne({ _id: clubId, organizer: organizerId });
    if (!club) {
      return res.status(404).json({ success: false, message: 'Club not found or unauthorized' });
    }

    // Create the event
    const event = new Event({
      name,
      location,
      date,
      rewards,
      description,
      club: clubId,
      organizer: organizerId,
    });

    await event.save();
    res.status(201).json({ success: true, message: 'Event created successfully', event });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ success: false, message: 'Failed to create event' });
  }
};

// Get all events created by the organizer
const getMyEvents = async (req, res) => {
  const organizerId = req.user.id;

  try {
    const events = await Event.find({ organizer: organizerId }).populate('club');
    res.status(200).json({ success: true, events });
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch events' });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  const { id } = req.params;
  const organizerId = req.user.id;

  try {
    const event = await Event.findOneAndUpdate(
      { _id: id, organizer: organizerId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found or unauthorized' });
    }

    res.status(200).json({ success: true, message: 'Event updated successfully', event });
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ success: false, message: 'Failed to update event' });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const organizerId = req.user.id;

  try {
    const event = await Event.findOneAndDelete({ _id: id, organizer: organizerId });

    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found or unauthorized' });
    }

    res.status(200).json({ success: true, message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ success: false, message: 'Failed to delete event' });
  }
};

// Add a new club
const addClub = async (req, res) => {
  const { name, description } = req.body;
  const organizerId = req.user.id;

  try {
    const club = new Club({
      name,
      description,
      organizer: organizerId,
    });

    await club.save();
    res.status(201).json({ success: true, message: 'Club added successfully', club });
  } catch (error) {
    console.error('Error adding club:', error);
    res.status(500).json({ success: false, message: 'Failed to add club' });
  }
};

// Get all clubs created by the organizer
const getMyClubs = async (req, res) => {
  const organizerId = req.user.id;

  try {
    const clubs = await Club.find({ organizer: organizerId });
    res.status(200).json({ success: true, clubs });
  } catch (error) {
    console.error('Error fetching clubs:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch clubs' });
  }
};

module.exports = {
  createEvent,
  getMyEvents,
  updateEvent,
  deleteEvent,
  addClub,
  getMyClubs,
};
