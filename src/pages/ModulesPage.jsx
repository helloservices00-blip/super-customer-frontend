// src/pages/ModulesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://super-backend-bzin.onrender.com";

const ModulesPage = () => {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/modules`);
        setModules(res.data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch modules");
      } finally {
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
        {modules.length > 0 ? (
          modules.map((module) => (
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
              }}
              onClick={() => navigate(`/modules/${module._id}/vendors`)}
            >
              {module.name}
            </div>
          ))
        ) : (
          <p>No modules found</p>
        )}
      </div>
    </div>
  );
};

export default ModulesPage;
