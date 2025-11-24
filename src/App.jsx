import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ModulesPage from "./pages/ModulesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ModulesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
