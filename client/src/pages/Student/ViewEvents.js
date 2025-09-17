import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/pages/Student/ViewEvent.css";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/student/events");
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleRegister = async (eventId) => {
    try {
      await axios.post(`/api/student/events/register/${eventId}`);
      alert("You have successfully registered for the event!");
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Failed to register for the event.");
    }
  };

  return (
    <div className="view-events-container">
      <h1>Available Events</h1>
      {loading ? (
        <p>Loading events...</p>
      ) : events.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{event.location}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>
                  <button onClick={() => handleRegister(event.id)}>Register</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events available at the moment.</p>
      )}
    </div>
  );
};

export default ViewEvents;
