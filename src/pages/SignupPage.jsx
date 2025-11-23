import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function SignupPage({ switchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      console.log("Signup response:", res.status, data);

      if (!res.ok) {
        setMessage(data.message || "Signup failed");
      } else {
        setMessage("✅ Signup successful! Redirecting to login...");
        setTimeout(() => switchToLogin(), 2000);
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
      background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
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
        <h2 style={{ marginBottom: "20px", color: "#fda085" }}>Sign Up</h2>
        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
          <button type="submit" disabled={loading} style={buttonStyle}>{loading ? "Signing up..." : "Sign Up"}</button>
        </form>

        {message && <p style={{ marginTop: "15px", color: message.includes("successful") ? "green" : "red" }}>{message}</p>}

        <p style={{ marginTop: "15px" }}>
          Already have an account? <button onClick={switchToLogin} style={{ color: "#fda085", border: "none", background: "none", cursor: "pointer" }}>Login</button>
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
  background: "#fda085",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  transition: "0.2s"
};

export default SignupPage;
