import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import "../../styles/pages/Admin/Dashboard.css";


const Dashboard = () => {
  const [stats, setStats] = useState({ users: 0, organizers: 0, events: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/admin/stats");
        setStats(response.data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <main>
        <h1>Admin Dashboard</h1>
        <div className="stats-container">
          <div>
            <h3>Total Users</h3>
            <p>{stats.users}</p>
          </div>
          <div>
            <h3>Total Organizers</h3>
            <p>{stats.organizers}</p>
          </div>
          <div>
            <h3>Total Events</h3>
            <p>{stats.events}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
