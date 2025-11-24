// src/pages/Dashboard.jsx
import React from "react";
import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <FiHome size={40} color="#007bff" />
          <p>Home</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <FiShoppingCart size={40} color="#28a745" />
          <p>Cart</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <FiUser size={40} color="#ffc107" />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
