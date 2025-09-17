import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../../common/connect.js"; // Ensure correct API import
import "../../styles/pages/Admin/Vieworganizer.css"; // Fixed typo in import path

const ViewOrganizer = () => {
  const { organizerId } = useParams();
  const [organizer, setOrganizer] = useState(null);

  useEffect(() => {
    const fetchOrganizer = async () => {
      try {
        const organizerUrl = SummaryApi.ViewOrganizer.url.replace(":id", organizerId);

        const response = await fetch(organizerUrl, {
          method: SummaryApi.ViewOrganizer.method,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch organizer details.");
        }

        const data = await response.json();
        setOrganizer(data);
      } catch (error) {
        console.error("Error fetching organizer:", error);
      }
    };

    fetchOrganizer();
  }, [organizerId]);

  return (
    <div>
      <h2>Organizer Details</h2>
      {organizer ? (
        <div>
          <p>Name: {organizer.name}</p>
          <p>Email: {organizer.email}</p>
          <p>Events Managed: {organizer.events.length}</p>
          <ul>
            {organizer.events.map((event) => (
              <li key={event.id}>{event.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewOrganizer;
