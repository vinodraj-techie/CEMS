const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      enum: ['admin', 'organizer', 'student'],
      required:[true,"role is required"],
    },
    approved: {
      type: Boolean,
      default: false, // For organizers; admins need to approve them
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
