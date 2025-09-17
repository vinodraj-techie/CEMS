 routes/RoleBasedRoute.js

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const RoleBasedRoute = ({ role }) => {
  // Get user role from localStorage
  const userRole = localStorage.getItem("role");

  // If the user's role doesn't match the required role, redirect to the dashboard
  if (userRole !== role) {
    return <Navigate to={`/${userRole}/dashboard`} />;
  }

  return <Outlet />; // If role matches, allow access to the route
};

export default RoleBasedRoute;
