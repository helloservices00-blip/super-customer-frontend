import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", 
      fontFamily: "Arial, sans-serif", 
      padding: "20px" 
    }}>
      
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", background: "#fff", padding: "10px 20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#4CAF50" }}>Multi-Vendor App</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          {/* Home Button */}
          <Link to="home" style={navBtnStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
              <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2z"/>
            </svg>
            Home
          </Link>

          {/* Account Button */}
          <Link to="account" style={navBtnStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.2c-3 0-9 1.5-9 4.4V21h18v-2.4c0-2.9-6-4.4-9-4.4z"/>
            </svg>
            Account
          </Link>

          {/* Cart Button */}
          <Link to="cart" style={navBtnStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24" style={{ marginRight: "6px" }}>
              <path d="M7 4h-2l-1 2H2v2h2l3.6 7.59L5.25 16.04C5.09 16.28 5 16.57 5 16.88 5 17.64 5.66 18.3 6.42 18.3h12.36v-2H6.92c-.06 0-.12-.03-.15-.08l.03-.03L7 16l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49-1.75-1-3.58 6.49H8.53l-.4-.91L7 4z"/>
            </svg>
            Cart
          </Link>

          {/* Logout */}
          <button onClick={onLogout} style={{ ...navBtnStyle, background: "#f44336" }}>Logout</button>
        </div>
      </nav>

      {/* Page Content */}
      <Routes>
        <Route path="home" element={
          <div style={cardStyle}>
            <h1 style={{ color: "#4CAF50" }}>Welcome, {user.name}!</h1>
            <p>This is your Home page.</p>
          </div>
        } />
        <Route path="account" element={
          <div style={cardStyle}>
            <h1 style={{ color: "#FFA500" }}>Account Info</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        } />
        <Route path="cart" element={
          <div style={cardStyle}>
            <h1 style={{ color: "#FF5722" }}>Your Cart</h1>
            <p>Cart is empty for now.</p>
          </div>
        } />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}

const navBtnStyle = {
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#4CAF50",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  transition: "all 0.2s",
};

const cardStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "16px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
};

export default Dashboard;
