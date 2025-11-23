import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  // Lazy load user from localStorage to prevent flicker
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const handleLogin = (userData) => setUser(userData);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard/home" /> : <LoginPage onLogin={handleLogin} />}
      />
      <Route
        path="/signup"
        element={user ? <Navigate to="/dashboard/home" /> : <SignupPage />}
      />
      {/* * is required for nested routes inside Dashboard */}
      <Route
        path="/dashboard/*"
        element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} /> {/* fallback */}
    </Routes>
  );
}

export default App;
