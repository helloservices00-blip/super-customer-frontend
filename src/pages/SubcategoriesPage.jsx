// src/pages/SubcategoriesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://super-backend-bzin.onrender.com";

const SubcategoriesPage = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/subcategories?category=${categoryId}`);
        setSubcategories(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSubcategories();
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Subcategories</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {subcategories.map((sub) => (
          <div
            key={sub._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              minWidth: "150px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#fff8dc",
            }}
            onClick={() => navigate(`/subcategories/${sub._id}/products`)}
          >
            {sub.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesPage;
