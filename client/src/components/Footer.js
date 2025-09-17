
import "../styles/componenet/Footer.css";
import React from "react";


const Footer = ({ year, contactInfo }) => {
  return (
    <footer className="footer">
      <p>&copy; {year || new Date().getFullYear()} Event Management</p>
      {contactInfo && <p>Contact: {contactInfo}</p>}
    </footer>
  );
};

export default Footer;


