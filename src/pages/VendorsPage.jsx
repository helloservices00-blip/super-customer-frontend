import React, { useEffect, useState } from "react";
import { fetchVendors } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function VendorsPage() {
  const { moduleId } = useParams();
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!moduleId) return;
    setLoading(true);
    fetchVendors(moduleId)
      .then(setVendors)
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, [moduleId]);

  if (loading) return <p>Loading vendors…</p>;
  if (err) return <p style={{ color: "red" }}>Error: {err}</p>;

  return (
    <div>
      <h2>Vendors</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {vendors.map(v => (
          <div
            key={v._id}
            onClick={() => navigate(`/dashboard/categories/${moduleId}/${v._id}`)}
            style={{
              width: 260,
              padding: 14,
              borderRadius: 10,
              background: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              cursor: "pointer",
            }}
          >
            <h4 style={{ margin: 0 }}>{v.name}</h4>
            {v.location && <small style={{ color: "#666" }}>{v.location}</small>}
          </div>
        ))}
      </div>
    </div>
  );
}
