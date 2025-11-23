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

      console.log("Signup response:", res.status, data); // log for debugging

      if (!res.ok) {
        // If backend returns error, show message
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
      background: "#fff",
      padding: "40px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center"
    }}>
      <h2 style={{ marginBottom: "20px" }}>Sign Up</h2>
      <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "12px", borderRadius: "8px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            background: "#4CAF50",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      {message && <p style={{ marginTop: "15px", color: message.includes("successful") ? "green" : "red" }}>{message}</p>}

      <p style={{ marginTop: "15px" }}>
        Already have an account? <button onClick={switchToLogin} style={{ color: "#4CAF50", border: "none", background: "none", cursor: "pointer" }}>Login</button>
      </p>
    </div>
  );
}

export default SignupPage;
