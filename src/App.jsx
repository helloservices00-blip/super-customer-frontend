import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import ModulesPage from "./pages/ModulesPage";
// Later you can add VendorsPage, CategoriesPage, etc.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModulesPage />} />
        <Route path="/modules" element={<ModulesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
