import React, { useEffect, useState } from "react";
import SummaryApi from "../../common/connect.js"; // Ensure correct API object
import "../../styles/pages/Admin/manageorganizer.css";

const ManageOrganizer = () => {
  const [pendingOrganizers, setPendingOrganizers] = useState([]);

  // Fetch pending organizers
  useEffect(() => {
    const fetchPendingOrganizers = async () => {
      try {
        const response = await fetch(SummaryApi.ViewOrganizer.url, {
          method: SummaryApi.ViewOrganizer.method,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch organizers.");
        }

        const data = await response.json();
        setPendingOrganizers(data);
      } catch (error) {
        console.error("Error fetching pending organizers:", error);
      }
    };

    fetchPendingOrganizers();
  }, []);

  // Handle approval or rejection
  const handleApproval = async (organizerId, isApproved) => {
    try {
      const approveUrl = SummaryApi.ManageOrganizer.url.replace(":id", organizerId);

      const response = await fetch(approveUrl, {
        method: "PUT", // Ensure this matches your API
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ approved: isApproved }),
      });

      if (!response.ok) {
        throw new Error("Failed to process approval.");
      }

      setPendingOrganizers(pendingOrganizers.filter((org) => org._id !== organizerId));
      alert(isApproved ? "Organizer approved successfully!" : "Organizer rejected.");
    } catch (error) {
      console.error("Approval error:", error);
      alert("Failed to process approval.");
    }
  };

  return (
    <div className="manage-organizer-container">
      <h1>Pending Organizer Approvals</h1>
      {pendingOrganizers.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingOrganizers.map((organizer) => (
              <tr key={organizer._id}>
                <td>{organizer.name}</td>
                <td>{organizer.email}</td>
                <td>
                  <button onClick={() => handleApproval(organizer._id, true)}>
                    Approve
                  </button>
                  <button onClick={() => handleApproval(organizer._id, false)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No pending organizers at the moment.</p>
      )}
    </div>
  );
};

export default ManageOrganizer;
