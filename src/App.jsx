import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  // Lazy initialization prevents flicker
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

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
      <Route
        path="/dashboard/*"
        element={user ? <Dashboard user={user} onLogout={handleLogout} /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
