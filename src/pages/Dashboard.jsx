import React from "react";

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", 
      padding: "20px", 
      fontFamily: "Arial, sans-serif" 
    }}>
      {/* Navbar */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", background: "#fff", padding: "10px 20px", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color: "#4CAF50" }}>Multi-Vendor App</h2>
        <div style={{ display: "flex", gap: "15px" }}>
          <button style={navBtnStyle}>Home</button>
          <button style={navBtnStyle}>Account</button>
          <button style={navBtnStyle}>Cart</button>
          <button onClick={onLogout} style={{ ...navBtnStyle, background: "#f44336" }}>Logout</button>
        </div>
      </nav>

      {/* Welcome Card */}
      <div style={{ 
        background: "#fff", 
        padding: "40px", 
        borderRadius: "16px", 
        textAlign: "center", 
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)" 
      }}>
        <h1 style={{ color: "#4CAF50" }}>Welcome, {user?.name || "User"}!</h1>
        <p style={{ fontSize: "18px", color: "#333", marginTop: "10px" }}>
          You are successfully logged in.
        </p>
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <button style={cardBtnStyle}>Go to Home</button>
          <button style={cardBtnStyle}>My Account</button>
          <button style={cardBtnStyle}>My Cart</button>
        </div>
      </div>
    </div>
  );
}

// Navbar button style
const navBtnStyle = {
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#4CAF50",
  color: "#fff",
  cursor: "pointer",
  fontWeight: "bold",
  transition: "0.2s",
};

// Card button style
const cardBtnStyle = {
  padding: "12px 24px",
  borderRadius: "12px",
  border: "none",
  background: "#4CAF50",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "0.2s",
};

export default Dashboard;
