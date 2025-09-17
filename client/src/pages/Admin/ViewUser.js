import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryApi from "../../common/connect.js"; // Ensure correct API import
import "../../styles/pages/Admin/Viewuser.css"; // Fixed typo in import path

const ViewUser = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userUrl = SummaryApi.ViewUser.url.replace(":id", userId);

        const response = await fetch(userUrl, {
          method: SummaryApi.ViewUser.method,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user details.");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Events Participated: {user.events.length}</p>
          <ul>
            {user.events.map((event) => (
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

export default ViewUser;
