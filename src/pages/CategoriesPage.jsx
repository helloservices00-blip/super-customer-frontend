import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function CategoriesPage() {
  const { moduleId } = useParams();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/api/categories?moduleId=${moduleId}`)
      .then(res => setCategories(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [moduleId]);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div style={containerStyle}>
      <h1>Categories</h1>
      <div style={gridStyle}>
        {categories.map(c => (
          <div key={c._id} style={cardStyle} onClick={() => navigate(`/dashboard/modules/${moduleId}/categories/${c._id}/products`)}>
            <h2>{c.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = { padding: "20px" };
const gridStyle = { display: "flex", flexWrap: "wrap", gap: "16px" };
const cardStyle = { background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", flex: "1 1 200px", textAlign: "center", cursor: "pointer" };
