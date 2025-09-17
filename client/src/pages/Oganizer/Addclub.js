import React, { useState } from "react";
import SummaryApi from "../../common/connect.js";
import "../../styles/pages/Organizerr/AddClub.css";

const AddClub = () => {
  const [clubData, setClubData] = useState({
    name: "",
    description: "",
    organizer: "", // ✅ manually input organizer ID
  });

  const handleChange = (e) => {
    setClubData({ ...clubData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.Addclub.url, {
        method: SummaryApi.Addclub.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clubData),
      });

      if (!response.ok) throw new Error("Failed to add club.");

      alert("Club added successfully!");
      setClubData({ name: "", description: "", organizer: "" });
    } catch (error) {
      console.error("Error adding club:", error);
      alert("Failed to add club!");
    }
  };

  return (
    <div className="add-club-container">
      <h2>Add Club</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Club Name"
          value={clubData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Club Description"
          value={clubData.description}
          onChange={handleChange}
          required
        ></textarea>

        {/* ✅ Input for organizer ID */}
        <input
          type="text"
          name="organizer"
          placeholder="Organizer ID"
          value={clubData.organizer}
          onChange={handleChange}
          required
        />

        <button type="submit">Add Club</button>
      </form>
    </div>
  );
};

export default AddClub;
