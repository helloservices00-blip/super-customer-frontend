import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AccountPage from "./AccountPage.jsx";
import CartPage from "./CartPage.jsx";

export default function Dashboard({ user, onLogout }) {
  return (
    <div style={{minHeight:"100vh", fontFamily:"Arial,sans-serif", padding:"20px", background:"linear-gradient(135deg,#f6d365,#fda085)"}}>
      <nav style={{display:"flex", justifyContent:"space-between", alignItems:"center", background:"#fff", padding:"10px 20px", borderRadius:"12px", marginBottom:"40px", boxShadow:"0 4px 10px rgba(0,0,0,0.1)"}}>
        <h2 style={{color:"#4CAF50"}}>Multi-Vendor App</h2>
        <div style={{display:"flex", gap:"15px"}}>
          <Link to="home" style={navBtnStyle}>Home</Link>
          <Link to="account" style={navBtnStyle}>Account</Link>
          <Link to="cart" style={navBtnStyle}>Cart</Link>
          <button onClick={onLogout} style={{...navBtnStyle, background:"#f44336"}}>Logout</button>
        </div>
      </nav>

      <Routes>
        <Route path="" element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage user={user} />} />
        <Route path="account" element={<AccountPage user={user} />} />
        <Route path="cart" element={<CartPage user={user} />} />
        <Route path="*" element={<Navigate to="home" />} />
      </Routes>
    </div>
  );
}

const navBtnStyle = { padding:"8px 16px", borderRadius:"8px", border:"none", background:"#4CAF50", color:"#fff", fontWeight:"bold", cursor:"pointer", textDecoration:"none" };
