import React from "react";

export default function CartPage() {
  return (
    <div style={cardStyle}>
      <h1>Cart</h1>
      <p>Your cart is empty.</p>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
};
