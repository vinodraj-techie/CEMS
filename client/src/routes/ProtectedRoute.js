routes/ProtectedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check if the user is authenticated (e.g., check for a token in localStorage)
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    // If not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return <Outlet />; // If authenticated, allow access to the route
};

export default ProtectedRoute;
