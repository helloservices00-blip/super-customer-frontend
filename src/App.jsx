// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Dashboard parent route with * to enable nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        
        {/* Redirect any unknown path to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
