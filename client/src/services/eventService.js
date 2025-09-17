import axios from "axios";

// Set up the base URL for event-related API
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};

// Get all events for a specific club or all events
export const getEvents = async (clubId = "") => {
  try {
    const url = clubId ? `${API_URL}?clubId=${clubId}` : API_URL;
    const response = await axios.get(url);
    return response.data; // Return events list
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

// Get a specific event by ID
export const getEventById = async (eventId) => {
  try {
    const response = await axios.get(`${API_URL}/${eventId}`);
    return response.data; // Return event details
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error;
  }
};

// Update an existing event
export const updateEvent = async (eventId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${eventId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating event:", error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (eventId) => {
  try {
    const response = await axios.delete(`${API_URL}/${eventId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting event:", error);
    throw error;
  }
};
