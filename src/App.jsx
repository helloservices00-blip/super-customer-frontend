import React, { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0f2f5"
    }}>
      {showLogin ? (
        <LoginPage switchToSignup={() => setShowLogin(false)} />
      ) : (
        <SignupPage switchToLogin={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default App;
