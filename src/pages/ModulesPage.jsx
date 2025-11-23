import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/modules`)
      .then(res => setModules(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading modules...</p>;

  return (
    <div style={containerStyle}>
      <h1>Modules</h1>
      <div style={gridStyle}>
        {modules.map(m => (
          <div key={m._id} style={cardStyle} onClick={() => navigate(`/dashboard/modules/${m._id}/categories`)}>
            <h2>{m.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = { padding: "20px" };
const gridStyle = { display: "flex", flexWrap: "wrap", gap: "16px" };
const cardStyle = { background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", flex: "1 1 200px", textAlign: "center", cursor: "pointer", transition: "transform 0.2s" };
