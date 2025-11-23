import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ minHeight:"100vh", fontFamily:"Arial, sans-serif", background:"linear-gradient(135deg,#f6d365,#fda085)", padding:"20px" }}>
      <nav style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"40px", background:"#fff", padding:"10px 20px", borderRadius:"12px", boxShadow:"0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color:"#4CAF50" }}>Multi-Vendor App</h2>
        <div style={{ display:"flex", gap:"15px" }}>
          <Link to="home" style={navBtnStyle}>Home</Link>
          <Link to="account" style={navBtnStyle}>Account</Link>
          <Link to="cart" style={navBtnStyle}>Cart</Link>
          <button onClick={onLogout} style={{ ...navBtnStyle, background:"#f44336" }}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="" element={<Navigate to="home" />} /> {/* default */}
        <Route path="home" element={<div style={cardStyle}><h1>Welcome, {user.name}!</h1><p>This is Home page</p></div>} />
        <Route path="account" element={<div style={cardStyle}><h1>Account Info</h1><p>Name: {user.name}</p><p>Email: {user.email}</p></div>} />
        <Route path="cart" element={<div style={cardStyle}><h1>Cart</h1><p>Cart is empty</p></div>} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}

const navBtnStyle = { padding:"8px 16px", borderRadius:"8px", border:"none", background:"#4CAF50", color:"#fff", cursor:"pointer", fontWeight:"bold", textDecoration:"none" };
const cardStyle = { background:"#fff", padding:"40px", borderRadius:"16px", textAlign:"center", boxShadow:"0 8px 20px rgba(0,0,0,0.2)" };

export default Dashboard;
