// src/pages/ModulesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://super-backend-bzin.onrender.com";

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/modules`);
        setModules(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch modules");
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modules</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {modules.map((module) => (
          <div
            key={module._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              minWidth: "150px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#f0f8ff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            {module.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesPage;
