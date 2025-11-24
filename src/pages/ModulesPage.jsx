import React, { useEffect, useState } from "react";
import { fetchModules } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function ModulesPage() {
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchModules()
      .then(setModules)
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading modules…</p>;
  if (err) return <p style={{ color: "red" }}>Error: {err}</p>;

  return (
    <div>
      <h2>Modules</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {modules.map(m => (
          <div
            key={m._id}
            onClick={() => navigate(`/dashboard/vendors/${m._id}`)}
            style={{
              width: 220,
              padding: 16,
              borderRadius: 10,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              background: "#fff",
              cursor: "pointer",
            }}
          >
            <h3 style={{ margin: 0 }}>{m.name}</h3>
            <p style={{ marginTop: 8, color: "#666" }}>Show vendors</p>
          </div>
        ))}
      </div>
    </div>
  );
}
