import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js"; // Import the Home component
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import AdminDashboard from "./pages/Admin/Dashboard.js";
import ManageUsers from "./pages/Admin/ManageUser.js";
import ManageOrganizer from "./pages/Admin/MangeOrganizer.js";
import ViewOrganizer from "./pages/Admin/ViewOrganizer.js";
import ViewUser from "./pages/Admin/ViewUser.js";
import OrganizerDashboard from "./pages/Oganizer/Dashboard.js";
import CreateEvent from "./pages/Oganizer/CreateEvent.js";
import AddClub from "./pages/Oganizer/Addclub.js";
import OrganizerViewEvents from "./pages/Oganizer/ViewEvent.js";
import StudentDashboard from "./pages/Student/Dashboard.js";
import StudentViewEvents from "./pages/Student/ViewEvents.js";
// import ProtectedRoute from "./routes/ProtectedRoute.js";
// import RoleBasedRoute from "./routes/RoleBasedRoute.js";
import "./App.css";
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
axios.defaults.headers.common["Content-Type"] = "application/json";

// Optionally set a default Authorization header (if you have a token)
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} /> {/* Add Home Page */}

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route
            path="/admin-dashboard"
            element={
             // <ProtectedRoute>
               // <RoleBasedRoute role="admin">
                  <AdminDashboard />
              //</Routes>  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-users"
            element={
              //<ProtectedRoute>
               // <RoleBasedRoute role="admin">
                  <ManageUsers />
              //  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/manage-organizer"
            element={
              //<ProtectedRoute>
               // <RoleBasedRoute role="admin">
                  <ManageOrganizer />
               // </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/view-organizer/:id"
            element={
             // <ProtectedRoute>
             //   <RoleBasedRoute role="admin">
                  <ViewOrganizer />
              //  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/admin/view-user/:id"
            element={
             // <ProtectedRoute>
               // <RoleBasedRoute role="admin">
                  <ViewUser />
                //</RoleBasedRoute>
              //</ProtectedRoute>
            }
          />

          {/* Organizer Routes */}
          <Route
            path="/organizer-dashboard"
            element={
              //<ProtectedRoute>
                //<RoleBasedRoute role="organizer">
                  <OrganizerDashboard />
               // </RoleBasedRoute>
              //</ProtectedRoute>
            }
          />
          <Route
            path="/organizer/create-event"
            element={
              //<ProtectedRoute>
               // <RoleBasedRoute role="organizer">
                  <CreateEvent />
              //  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/organizer/add-club"
            element={
             // <ProtectedRoute>
             //   <RoleBasedRoute role="organizer">
                  <AddClub />
              //  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />
          <Route
            path="/organizer/view-events"
            element={
             // <ProtectedRoute>
             //   <RoleBasedRoute role="organizer">
                  <OrganizerViewEvents />
              //  </RoleBasedRoute>
             // </ProtectedRoute>
            }
          />

          {/* Student Routes */}
          <Route
            path="/student-dashboard"
            element={
             // <ProtectedRoute>
               // <RoleBasedRoute role="student">
                  <StudentDashboard />
               // </RoleBasedRoute>
              //</ProtectedRoute>
            }
          />
          <Route
            path="/student/view-events"
            element={
              //<ProtectedRoute>
                //<RoleBasedRoute role="student">
                  <StudentViewEvents />
                //</RoleBasedRoute>
              //</ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
