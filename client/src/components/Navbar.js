import React from "react";
import { Link } from "react-router-dom";
import "../styles/componenet/Navbar.css";

const Navbar = ({ isAuthenticated, role }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Event Management</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            {role === "admin" && <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>}
            {role === "organizer" && <li><Link to="/organizer-dashboard">Organizer Dashboard</Link></li>}
            {role === "user" && <li><Link to="/user-dashboard">User Dashboard</Link></li>}
            <li>
              <button onClick={() => alert("Logging out")}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
