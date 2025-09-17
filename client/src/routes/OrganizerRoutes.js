// routes/OrganizerRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OrganizerDashboard from '../pages/Organizer/Dashboard';
import CreateEvent from '../pages/Organizer/CreateEvent';
import AddClub from '../pages/Organizer/AddClub';
import ViewEvents from '../pages/Organizer/ViewEvents';
//import ProtectedRoute from './ProtectedRoute'; // Importing ProtectedRoute
//import RoleBasedRoute from './RoleBasedRoute'; // Import Role-Based Route

const OrganizerRoutes = () => {
  return (
    <Routes>
      {/* Wrap the routes in ProtectedRoute and RoleBasedRoute for access control */}
      <Route element={<ProtectedRoute />}>
        <Route element={<RoleBasedRoute role="organizer" />}>
          <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
          <Route path="/organizer/create-event" element={<CreateEvent />} />
          <Route path="/organizer/add-club" element={<AddClub />} />
          <Route path="/organizer/view-events" element={<ViewEvents />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default OrganizerRoutes;
