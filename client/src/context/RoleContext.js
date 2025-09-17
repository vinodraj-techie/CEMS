import React, { createContext, useState, useEffect } from "react";

// Create RoleContext
export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);

  // Get the user's role from localStorage or the user object
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode JWT
      setRole(decodedToken.role); // Assuming the token contains role info
    }
  }, []);

  const setUserRole = (role) => {
    setRole(role);
  };

  return (
    <RoleContext.Provider value={{ role, setUserRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
