// src/pages/Dashboard.jsx
import React, { useState } from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { FiHome, FiUser, FiShoppingCart, FiLogOut, FiMenu, FiX, FiGrid } from "react-icons/fi";

import HomePage from "./HomePage";
import AccountPage from "./AccountPage";
import CartPage from "./CartPage";
import ModulesPage from "./ModulesPage";
import CategoriesPage from "./CategoriesPage";
import ProductsPage from "./ProductsPage";

export default function Dashboard({ user, onLogout }) {
  const location = useLocation();
  const path = location.pathname.split("/")[2]; // dashboard/:page
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "modules", icon: <FiGrid />, label: "Modules" },
    { name: "home", icon: <FiHome />, label: "Home" },
    { name: "account", icon: <FiUser />, label: "Account" },
    { name: "cart", icon: <FiShoppingCart />, label: "Cart" },
  ];

  return (
    <div style={{ minHeight: "100vh", fontFamily: "Arial,sans-serif", background: "linear-gradient(135deg,#f6d365,#fda085)", padding: "20px" }}>
      
      {/* Navbar */}
      <nav style={navStyle}>
        <h2 style={{ color: "#4CAF50" }}>Multi-Vendor App</h2>

        {/* Mobile Hamburger */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => setMenuOpen(!menuOpen)} style={hamburgerStyle}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div style={{ ...navLinksStyleMobile, display: menuOpen ? "flex" : "none", flexDirection: "column" }}>
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.name}
                style={{
                  ...navBtnStyle,
                  background: path === item.name ? "#4CAF50" : "#fff",
                  color: path === item.name ? "#fff" : "#4CAF50",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} <span style={{ marginLeft: "6px" }}>{item.label}</span>
              </Link>
            ))}
            <button onClick={onLogout} style={{ ...navBtnStyle, background: "#f44336", color: "#fff" }}>
              <FiLogOut /> <span style={{ marginLeft: "6px" }}>Logout</span>
            </button>
          </div>
        </div>

        {/* Desktop nav */}
        <div style={navLinksStyleDesktop}>
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.name}
              style={{
                ...navBtnStyle,
                background: path === item.name ? "#4CAF50" : "#fff",
                color: path === item.name ? "#fff" : "#4CAF50",
              }}
            >
              {item.icon} <span style={{ marginLeft: "6px" }}>{item.label}</span>
            </Link>
          ))}
          <button onClick={onLogout} style={{ ...navBtnStyle, background: "#f44336", color: "#fff" }}>
            <FiLogOut /> <span style={{ marginLeft: "6px" }}>Logout</span>
          </button>
        </div>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="" element={<Navigate to="modules" />} />
        <Route path="modules" element={<ModulesPage />} />
        <Route path="modules/:moduleId/categories" element={<CategoriesPage />} />
        <Route path="modules/:moduleId/categories/:categoryId/products" element={<ProductsPage />} />
        <Route path="home" element={<HomePage user={user} />} />
        <Route path="account" element={<AccountPage user={user} />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<Navigate to="modules" />} />
      </Routes>
    </div>
  );
}

/* Styles */
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
  background: "#fff",
  padding: "10px 20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  flexWrap: "wrap",
};

const navBtnStyle = {
  display: "flex",
  alignItems: "center",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "none",
  fontSize: "14px",
  margin: "4px",
  transition: "all 0.2s",
};

const navLinksStyleMobile = {
  position: "absolute",
  top: "60px",
  right: "20px",
  background: "#fff",
  padding: "10px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  zIndex: 10,
};

const navLinksStyleDesktop = {
  display: "flex",
  gap: "12px",
  alignItems: "center",
};

const hamburgerStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  display: "block",
};
