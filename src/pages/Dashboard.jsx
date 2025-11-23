import React from "react";

function Dashboard({ user, onLogout }) {
  return (
    <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", width: "100%", maxWidth: "500px", textAlign: "center" }}>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>You are successfully logged in.</p>
      <button onClick={onLogout} style={{ marginTop: "20px", padding: "12px", borderRadius: "8px", border: "none", background: "#f44336", color: "#fff", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
