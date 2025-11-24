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
        setError("Failed to load modules");
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  if (loading) return <p>Loading modules...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {modules.map((mod) => (
        <div
          key={mod._id}
          style={{
            padding: "20px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            cursor: "pointer",
            minWidth: "150px",
            textAlign: "center",
          }}
          onClick={() => navigate(`/dashboard/modules/${mod._id}/categories`)}
        >
          {mod.name}
        </div>
      ))}
    </div>
  );
}
