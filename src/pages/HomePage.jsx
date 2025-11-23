// HomePage.jsx
import React from "react";

export default function HomePage({ user }) {
  return (
    <div style={cardStyle}>
      <h1>Welcome, {user.name}!</h1>
      <p>This is Home page.</p>
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
