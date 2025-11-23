import React, { useState } from "react";

function SignupPage({ switchToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Call backend signup API
    console.log("Signing up:", { name, email, password });
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
        <button type="submit" style={{ padding: "12px", borderRadius: "8px", border: "none", background: "#4CAF50", color: "#fff", cursor: "pointer" }}>
          Sign Up
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Already have an account? <button onClick={switchToLogin} style={{ color: "#4CAF50", border: "none", background: "none", cursor: "pointer" }}>Login</button>
      </p>
    </div>
  );
}

export default SignupPage;
