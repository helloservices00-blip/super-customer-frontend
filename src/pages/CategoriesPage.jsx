// src/pages/CategoriesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://super-backend-bzin.onrender.com";

const CategoriesPage = () => {
  const { vendorId } = useParams();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/categories?vendor=${vendorId}`);
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, [vendorId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Categories</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <div
            key={cat._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              minWidth: "150px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#f5fffa",
            }}
            onClick={() => navigate(`/categories/${cat._id}/subcategories`)}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
