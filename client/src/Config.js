const config = {
  // Dynamically set the base API URL from the environment variables
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000",

  // Additional API endpoints
  apiEndpoints: {
    login: "/auth/login",
    register: "/auth/register",
    studentProfile: "/api/student/profile",
    organizerStats: "/api/organizer/stats",
    events: "/api/student/events",
  },

  // Roles available in the app
  roles: {
    admin: "admin",
    organizer: "organizer",
    student: "student",
  },

  // Other configuration options
  defaultLanguage: "en",
};

export default config;
