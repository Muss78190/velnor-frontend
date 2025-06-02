// src/pages/AdminLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminLogin.css"; // Nouveau fichier CSS (voir plus bas)

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (password === "adminvelnor") {
      localStorage.setItem("auth", "ok");
      navigate("/admin/payments");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box" role="form" aria-label="Connexion Admin">
        <h2>Connexion Admin</h2>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          aria-label="Saisir le mot de passe"
        />
        <button onClick={handleLogin}>Se connecter</button>
        {error && <p className="admin-login-error">{error}</p>}
      </div>
    </div>
  );
};

export default AdminLogin;
