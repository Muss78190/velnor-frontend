// src/pages/AdminPayments.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPayments.css";

const AdminPayments = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth !== "ok") {
      navigate("/admin");
    }
  }, [navigate]);

  const lancerAudit = async () => {
    if (!url) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://51.158.64.37:10000/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.detail || "Erreur serveur.");
      }
    } catch (err) {
      setError("Erreur réseau ou serveur.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/admin");
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">🧠 Audit IA • VELNOR</h1>
        <button className="admin-logout-btn" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>

      <div className="admin-input-box">
        <input
          type="text"
          placeholder="https://monsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          aria-label="URL du site à auditer"
        />
        <button onClick={lancerAudit} disabled={loading}>
          {loading ? "Analyse en cours..." : "🚀 Lancer l’audit"}
        </button>
      </div>

      {error && <p className="admin-error">{error}</p>}

      {result && (
        <div className="admin-result">
          <div className="admin-section">
            <h2>✅ Résultat d’audit</h2>
            <p>
              <strong>🌐 URL :</strong> {result.url}
            </p>
            <p>
              <strong>🔒 Score :</strong> {result.score}/100
            </p>
            <p>
              <strong>📄 Résumé :</strong> {result.resume}
            </p>
          </div>

          <div className="admin-section">
            <h3>⚠️ Anomalies détectées :</h3>
            {result.anomalies && result.anomalies.length > 0 ? (
              <ul>
                {result.anomalies.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            ) : (
              <p>Aucune anomalie détectée.</p>
            )}
          </div>

          <div className="admin-section">
            <h3>💡 Recommandations IA :</h3>
            {result.recommendations && result.recommendations.length > 0 ? (
              <ul>
                {result.recommendations.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            ) : (
              <p>Aucune recommandation disponible.</p>
            )}
          </div>

          <a
            href={`http://51.158.64.37:10000${result.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-download"
            aria-label="Télécharger le rapport PDF"
          >
            📥 Télécharger le rapport PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminPayments;
