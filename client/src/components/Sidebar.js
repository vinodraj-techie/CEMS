import React from "react";
import { Link } from "react-router-dom";
import "../styles/componenet/Sidebar.css";

const Sidebar = ({ isOpen, role, toggleSidebar }) => {
  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin-dashboard" },
      { name: "Manage Organizers", path: "/admin-manage-organizers" },
    ],
    organizer: [
      { name: "Dashboard", path: "/organizer-dashboard" },
      { name: "Create Event", path: "/create-event" },
    ],
    user: [
      { name: "Dashboard", path: "/user-dashboard" },
      { name: "My Events", path: "/my-events" },
    ],
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </button>
      <ul>
        {menuItems[role]?.map((item) => (
          <li key={item.name}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
