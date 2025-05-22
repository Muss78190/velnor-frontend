import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "adminvelnor") {
      localStorage.setItem("auth", "ok");
      navigate("/admin");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Connexion Admin</h2>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", fontSize: "1rem", margin: "10px" }}
      />
      <br />
      <button onClick={handleLogin} style={{ padding: "10px 20px", fontSize: "1rem" }}>
        Se connecter
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
