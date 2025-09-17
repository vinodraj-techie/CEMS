import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/pages/Student/Dashboard.css";


const Dashboard = () => {
  const [student, setStudent] = useState({ name: "", registeredEvents: [] });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("/api/student/profile");
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="student-dashboard-container">
      <h1>Welcome, {student.name}</h1>
      <h2>Your Registered Events</h2>
      {student.registeredEvents.length > 0 ? (
        <ul>
          {student.registeredEvents.map((event) => (
            <li key={event.id}>
              <strong>{event.name}</strong> - {new Date(event.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      ) : (
        <p>You have not registered for any events yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
