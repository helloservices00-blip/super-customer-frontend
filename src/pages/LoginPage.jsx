import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
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
        navigate("/dashboard/home"); // smooth navigation
      }
    } catch {
      setMessage("Network error. Please try again.");
    }
  };

  const goSignup = () => navigate("/signup");

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        {message && <p style={{color:"red"}}>{message}</p>}
        <p>
          Don't have an account? <button onClick={goSignup} style={linkStyle}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}

const containerStyle = { display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", background:"linear-gradient(135deg,#667eea,#764ba2)" };
const cardStyle = { background:"#fff", padding:"40px", borderRadius:"16px", textAlign:"center", width:"100%", maxWidth:"400px" };
const formStyle = { display:"flex", flexDirection:"column", gap:"15px" };
const inputStyle = { padding:"12px", borderRadius:"12px", border:"1px solid #ccc", fontSize:"16px" };
const buttonStyle = { padding:"12px", borderRadius:"12px", border:"none", background:"#764ba2", color:"#fff", fontWeight:"bold", cursor:"pointer" };
const linkStyle = { border:"none", background:"none", color:"#764ba2", cursor:"pointer" };

export default LoginPage;
