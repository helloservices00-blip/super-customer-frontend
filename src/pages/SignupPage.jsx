import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export default function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (!res.ok) setMessage(data.message || "Signup failed");
      else {
        setMessage("Signup successful! Redirecting...");
        setTimeout(()=>navigate("/"),2000);
      }
    } catch {
      setMessage("Network error.");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup} style={formStyle}>
          <input type="text" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required style={inputStyle} />
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required style={inputStyle} />
          <button type="submit" style={buttonStyle}>Sign Up</button>
        </form>
        {message && <p style={{color: message.includes("successful")?"green":"red"}}>{message}</p>}
        <p>
          Already have an account? <button onClick={()=>navigate("/")} style={linkStyle}>Login</button>
        </p>
      </div>
    </div>
  );
}

const containerStyle = { display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", background:"linear-gradient(135deg,#f6d365,#fda085)" };
const cardStyle = { background:"#fff", padding:"40px", borderRadius:"16px", width:"100%", maxWidth:"400px", textAlign:"center" };
const formStyle = { display:"flex", flexDirection:"column", gap:"15px" };
const inputStyle = { padding:"12px", borderRadius:"12px", border:"1px solid #ccc", fontSize:"16px" };
const buttonStyle = { padding:"12px", borderRadius:"12px", border:"none", background:"#fda085", color:"#fff", fontWeight:"bold", cursor:"pointer" };
const linkStyle = { border:"none", background:"none", color:"#fda085", cursor:"pointer" };
