import React, { useState, useEffect } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const removeFromCart = (index) => {
    let newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  if (!cart.length) return <p>Your cart is empty.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      {cart.map((p, i) => (
        <div key={i} style={{ background: "#fff", padding: "20px", borderRadius: "12px", marginBottom: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <h3>{p.name}</h3>
          <p>Price: ₹{p.price}</p>
          <button onClick={() => removeFromCart(i)} style={{ padding:"8px 16px", border:"none", borderRadius:"8px", background:"#f44336", color:"#fff", cursor:"pointer" }}>Remove</button>
        </div>
      ))}
    </div>
  );
}
