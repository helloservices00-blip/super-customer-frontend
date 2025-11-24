// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = { name: "Test User" };

  const handleLogout = () => {
    console.log("Logout clicked");
    // redirect or clear token here
  };

  return (
    <Router>
      <Routes>
        {/* The /* is critical for nested routes */}
        <Route path="/dashboard/*" element={<Dashboard user={user} onLogout={handleLogout} />} />

        {/* Optional: redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
