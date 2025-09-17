// routes/AdminRoutes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/Dashboard';
import ManageUsers from '../pages/Admin/ManageUsers';
import ManageOrganizer from '../pages/Admin/ManageOrganizer';
import ViewOrganizer from '../pages/Admin/ViewOrganizer';
import ViewUser from '../pages/Admin/ViewUser';
//import ProtectedRoute from './ProtectedRoute'; // Importing ProtectedRoute
//import RoleBasedRoute from './RoleBasedRoute'; // Import Role-Based Route

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Wrap the routes in ProtectedRoute and RoleBasedRoute for access control */}
      
        
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manage-users" element={<ManageUsers />} />
          <Route path="/admin/manage-organizers" element={<ManageOrganizer />} />
          <Route path="/admin/view-organizer/:id" element={<ViewOrganizer />} />
          <Route path="/admin/view-user/:id" element={<ViewUser />} />
        
      
    </Routes>
  );
};

export default AdminRoutes;
