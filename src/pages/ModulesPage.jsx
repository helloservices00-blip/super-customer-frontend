import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/modules`);
        setModules(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load modules.");
      } finally {
        setLoading(false);
      }
    };
    fetchModules();
  }, []);

  if (loading) return <p style={loadingStyle}>Loading modules...</p>;
  if (error) return <p style={errorStyle}>{error}</p>;

  return (
    <div style={containerStyle}>
      <h1>Modules</h1>
      <div style={gridStyle}>
        {modules.map((mod) => (
          <div key={mod._id} style={cardStyle}>
            <h2>{mod.name}</h2>
            {/* Optional: link to categories/products */}
            {/* <button style={buttonStyle} onClick={() => navigate(`/modules/${mod._id}`)}>View</button> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = { padding: "20px" };
const gridStyle = { display: "flex", gap: "16px", flexWrap: "wrap" };
const cardStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  flex: "1 1 200px",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
};
const buttonStyle = {
  marginTop: "12px",
  padding: "8px 16px",
  border: "none",
  borderRadius: "8px",
  background: "#4CAF50",
  color: "#fff",
  cursor: "pointer",
};
const loadingStyle = { textAlign: "center", padding: "40px", fontSize: "18px" };
const errorStyle = { textAlign: "center", padding: "40px", fontSize: "18px", color: "red" };
