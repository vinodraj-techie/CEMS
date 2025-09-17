// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Global styles
import App from "./App"; // Main App component
import { BrowserRouter } from "react-router-dom"; // To use routing functionality

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* The root component */}
    </BrowserRouter>
  </React.StrictMode>
);
