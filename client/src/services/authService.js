// src/services/authService.js
import axios from "axios";
import config from "../Config"; // Import the config file

// Set up the base URL for your API using the config file
const API_URL = config.apiBaseUrl;

// Generic fetch function for API requests
export const fetch = async (endpoint, method = "GET", body = null, requiresAuth = true) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (requiresAuth) {
      const token = localStorage.getItem("token");
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      } else {
        throw new Error("No token found for authenticated request");
      }
    }

    const response = await axios({
      url: `${API_URL}${endpoint}`,
      method,
      data: body,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error(`API request failed [${method} ${endpoint}]:`, error);
    throw error;
  }
};

// Register a new user
export const register = async (userData) => {
  return await fetch(config.apiEndpoints.register, "POST", userData, false);
};

// Login a user
export const login = async (email, password, role) => {
  return await fetch(config.apiEndpoints.login, "POST", { email, password, role }, false);
};

// Get the current logged-in user (for token validation)
export const getCurrentUser = async () => {
  return await fetch("/auth/me", "GET");
};

// Logout user by removing token
export const logout = () => {
  localStorage.removeItem("token");
};

// Export all functions together
export default {
  fetch,
  register,
  login,
  getCurrentUser,
  logout,
};
