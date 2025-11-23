import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login"); // "login", "signup", "dashboard"
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setPage("dashboard");
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setPage("login");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f0f2f5" }}>
      {page === "login" && <LoginPage switchToSignup={() => setPage("signup")} onLogin={handleLogin} />}
      {page === "signup" && <SignupPage switchToLogin={() => setPage("login")} />}
      {page === "dashboard" && <Dashboard user={user} onLogout={handleLogout} />}
    </div>
  );
}

export default App;
