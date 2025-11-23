import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductsPage() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/api/products?categoryId=${categoryId}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart`);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={containerStyle}>
      <h1>Products</h1>
      <div style={gridStyle}>
        {products.map(p => (
          <div key={p._id} style={cardStyle}>
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
            <button onClick={() => addToCart(p)} style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const containerStyle = { padding: "20px" };
const gridStyle = { display: "flex", flexWrap: "wrap", gap: "16px" };
const cardStyle = { background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", flex: "1 1 200px", textAlign: "center" };
const buttonStyle = { marginTop: "12px", padding: "8px 16px", borderRadius: "8px", border: "none", background: "#4CAF50", color: "#fff", cursor: "pointer" };
