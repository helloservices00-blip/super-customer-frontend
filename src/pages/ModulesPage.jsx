import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/modules`);
        setModules(res.data);
      } catch (err) {
        console.error("Error fetching modules:", err);
        setError("Failed to load modules from backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, []);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modules</h1>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {modules.map((mod) => (
          <div
            key={mod._id}
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              flex: "1 1 200px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/dashboard/modules/${mod._id}/categories`)}
          >
            {mod.name}
          </div>
        ))}
      </div>
    </div>
  );
}
