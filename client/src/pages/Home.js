import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Home.css"; // Create a CSS file for home styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the Event Management Platform</h1>
        <p>Your one-stop solution for organizing and exploring college events.</p>
        <div className="cta-buttons">
          <button onClick={() => navigate("/register")} className="cta-button">
            Get Started
          </button>
          <button onClick={() => navigate("/login")} className="cta-button secondary">
            Login
          </button>
        </div>
      </header>
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature-card">
            <h3>Organize Events</h3>
            <p>Manage events with ease using our platform’s organizer tools.</p>
          </div>
          <div className="feature-card">
            <h3>Explore Opportunities</h3>
            <p>Discover exciting events and participate to win rewards.</p>
          </div>
          <div className="feature-card">
            <h3>Stay Connected</h3>
            <p>Stay updated with the latest events in your college network.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
