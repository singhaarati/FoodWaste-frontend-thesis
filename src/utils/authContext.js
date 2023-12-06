import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const isAuthenticated = () => {
    return username !== null; // You can adjust the condition based on your authentication logic
  };

  return (
    <AuthContext.Provider value={{ username, setUsername, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
