import React, { useEffect, useState } from "react";
import SummaryApi from "../../common/connect.js"; // Ensure correct API import
import "../../styles/pages/Organizerr/ViewEvents.css"; // Fixed typo in import path

const ViewEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(SummaryApi.ViewEvents.url);
        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      const deleteUrl = SummaryApi.DeleteEvent.url.replace(":id", eventId);
      const response = await fetch(deleteUrl, { method: SummaryApi.DeleteEvent.method });

      if (!response.ok) throw new Error("Failed to delete event");

      setEvents(events.filter((event) => event.id !== eventId));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete event!");
    }
  };

  return (
    <div className="view-events-container">
      <h2>View Events</h2>
      {events.length > 0 ? (
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
                  <button onClick={() => handleDelete(event.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events found!</p>
      )}
    </div>
  );
};

export default ViewEvents;
