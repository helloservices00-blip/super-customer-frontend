// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "https://super-backend-bzin.onrender.com";

const ProductsPage = () => {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/products?subcategory=${subcategoryId}`);
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [subcategoryId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div
            key={p._id}
            style={{
              padding: "15px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              minWidth: "150px",
              textAlign: "center",
              backgroundColor: "#f0fff0",
            }}
          >
            {p.name} <br />
            ₹{p.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
