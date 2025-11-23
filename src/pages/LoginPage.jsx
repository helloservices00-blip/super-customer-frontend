import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage({ switchToSignup, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login response:", res.status, data);

      if (!res.ok) {
        setMessage(data.message || "Login failed");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
      }
    } catch (err) {
      console.error("Network error:", err);
      setMessage("⚠️ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        width: "100%",
        maxWidth: "400px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#764ba2" }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && <p style={{ marginTop: "15px", color: message.includes("success") ? "green" : "red" }}>{message}</p>}

        <p style={{ marginTop: "15px" }}>
          Don't have an account? <button onClick={switchToSignup} style={{ color: "#764ba2", border: "none", background: "none", cursor: "pointer" }}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "#764ba2",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "0.2s"
};

export default LoginPage;
