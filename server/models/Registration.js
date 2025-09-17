const mongoose = require('mongoose');

// Define the Registration schema
const registrationSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Assuming 'User' is the collection name for students
      required: true,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event', // Assuming 'Event' is the collection name for events
      required: true,
    },
    registrationDate: {
      type: Date,
      default: Date.now, // Automatically set to the date of registration
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'], // Optional: Useful for admin-controlled approvals
      default: 'approved', // Set default status to 'approved' if no approval process is required
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Add an index to ensure unique registration for a student-event combination
registrationSchema.index({ student: 1, event: 1 }, { unique: true });

// Compile the model
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;


