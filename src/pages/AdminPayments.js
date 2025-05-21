import React, { useState } from "react";
import "../styles/AdminPayments.css";

const AdminPayments = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = "https://velnor-backend.onrender.com"; // ✅ CORRECT BACKEND URL

  const lancerAudit = async () => {
    if (!url) return;
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`${API_BASE}/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (res.ok) {
        setResult(data);
      } else {
        setError(data.error || "Erreur serveur.");
      }
    } catch (err) {
      setError("Erreur réseau ou serveur.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <h1>🧠 Lancer un audit IA</h1>

      <div className="admin-audit-box">
        <input
          type="text"
          placeholder="https://monsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={lancerAudit} disabled={loading}>
          {loading ? "Analyse en cours..." : "🚀 Lancer l’audit"}
        </button>
      </div>

      {error && <p className="admin-error">{error}</p>}

      {result && (
        <div className="admin-result">
          <h2>✅ Audit terminé</h2>
          <p><strong>URL :</strong> {result.url}</p>
          <p><strong>Score :</strong> {result.score}/100</p>
          <p><strong>Résumé :</strong> {result.resume}</p>

          <h3>💡 Recommandations :</h3>
          <ul>
            {result.recommendations.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>

          <a
            href={`${API_BASE}${result.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="admin-btn"
            style={{ marginTop: "10px", display: "inline-block" }}
          >
            📄 Télécharger le rapport PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default AdminPayments;
