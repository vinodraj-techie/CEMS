import React, { useState } from "react";
import SummaryApi from "../../common/connect.js"; // Make sure path is correct
import "../../styles/pages/Organizerr/CreateEvent.css"; // Your CSS file

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    location: "",
    date: "",
    description: "",
    rewards: "",
    organizer: "", // added for dev
    club: "",      // added for dev
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !eventData.name ||
      !eventData.location ||
      !eventData.date ||
      !eventData.description ||
      !eventData.organizer ||
      !eventData.club
    ) {
      setError("All fields except rewards are required.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const response = await fetch(SummaryApi.CreateEvent.url, {
        method: SummaryApi.CreateEvent.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event.");
      }

      setSuccess("Event created successfully!");
      setEventData({
        name: "",
        location: "",
        date: "",
        description: "",
        rewards: "",
        organizer: "",
        club: "",
      });
    } catch (error) {
      setError("Failed to create event. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create Event</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={eventData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={eventData.location}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Event Description"
          value={eventData.description}
          onChange={handleChange}
          required
        ></textarea>

        <input
          type="text"
          name="rewards"
          placeholder="Rewards (if any)"
          value={eventData.rewards}
          onChange={handleChange}
        />

        <input
          type="text"
          name="organizer"
          placeholder="Organizer ID"
          value={eventData.organizer}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="club"
          placeholder="Club ID"
          value={eventData.club}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
