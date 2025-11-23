import React, { useState } from "react";

function LoginPage({ switchToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Call backend login API
    console.log("Logging in:", email, password);
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
      <h2 style={{ marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
        <button type="submit" style={{ padding: "12px", borderRadius: "8px", border: "none", background: "#4CAF50", color: "#fff", cursor: "pointer" }}>
          Login
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Don't have an account? <button onClick={switchToSignup} style={{ color: "#4CAF50", border: "none", background: "none", cursor: "pointer" }}>Sign Up</button>
      </p>
    </div>
  );
}

export default LoginPage;
