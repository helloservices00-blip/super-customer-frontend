import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage({ switchToSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div style={{ background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)", width: "100%", maxWidth: "400px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }} />
        <button type="submit" style={{ padding: "12px", borderRadius: "8px", border: "none", background: "#4CAF50", color: "#fff", cursor: "pointer" }}>Login</button>
      </form>
      {message && <p style={{ marginTop: "10px", color: "red" }}>{message}</p>}
      <p style={{ marginTop: "15px" }}>Don't have an account? <button onClick={switchToSignup} style={{ color: "#4CAF50", border: "none", background: "none", cursor: "pointer" }}>Sign Up</button></p>
    </div>
  );
}

export default LoginPage;
