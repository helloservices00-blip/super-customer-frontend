import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoriesPage() {
  const { moduleId, vendorId } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!vendorId) return;
    setLoading(true);
    fetchCategories(moduleId, vendorId)
      .then(setCategories)
      .catch(e => setErr(e.message))
      .finally(() => setLoading(false));
  }, [moduleId, vendorId]);

  if (loading) return <p>Loading categories…</p>;
  if (err) return <p style={{ color: "red" }}>Error: {err}</p>;

  return (
    <div>
      <h2>Categories</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {categories.map(c => (
          <div
            key={c._id}
            onClick={() => navigate(`/dashboard/products/${moduleId}/${vendorId}/${c._id}`)}
            style={{
              padding: 12,
              borderRadius: 10,
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
              cursor: "pointer",
              minWidth: 200,
            }}
          >
            <strong>{c.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
