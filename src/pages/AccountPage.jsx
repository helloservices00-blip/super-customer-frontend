import React from "react";

export default function AccountPage({ user }) {
  return (
    <div style={cardStyle}>
      <h1>Account Info</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
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
