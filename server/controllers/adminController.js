const User = require('../models/User');

// Get all users (students)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'student' });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all organizers
exports.getAllOrganizers = async (req, res) => {
  try {
    const organizers = await User.find({ role: 'organizer' });
    res.json(organizers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve organizer
exports.approveOrganizer = async (req, res) => {
  try {
    const organizer = await User.findByIdAndUpdate(
      req.params.id,
      { approved: true },
      { new: true }
    );
    if (!organizer) return res.status(404).json({ message: "Organizer not found" });

    res.json({ message: "Organizer approved", organizer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an organizer
exports.deleteOrganizer = async (req, res) => {
  try {
    const organizer = await User.findOneAndDelete({ _id: req.params.id, role: 'organizer' });
    if (!organizer) return res.status(404).json({ message: "Organizer not found or not an organizer" });

    res.json({ message: "Organizer deleted successfully", organizer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
