import React from "react";
import "../styles/LandingPageAudit.css";
import { Link } from "react-router-dom";

const LandingPageAudit = () => {
  return (
    <div className="audit-container">
      <div className="audit-content">
        <h1>🔍 Audit IA de cybersécurité</h1>
        <p>
          Notre IA autonome détecte les vulnérabilités de votre site web,
          identifie les failles critiques et vous livre un rapport stratégique
          PDF. Tout est automatisé, rapide et professionnel.
        </p>

        <div className="audit-boxes">
          <div className="audit-box">
            <h2>🔒 Analyse sécurité</h2>
            <p>Détection des ports ouverts, headers manquants, fichiers exposés...</p>
          </div>

          <div className="audit-box">
            <h2>🧠 Intelligence IA</h2>
            <p>L’IA simule un audit cybersécurité comme un pentester professionnel.</p>
          </div>

          <div className="audit-box">
            <h2>📄 Rapport PDF</h2>
            <p>Vous recevez un rapport PDF clair, avec score, anomalies et recommandations.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <Link to="/paiement-24h" className="btn-pink">
            🔥 Audit Express 24h
          </Link>
          <Link to="/paiement-48h" className="btn-purple">
            ⏱️ Audit Standard 48h
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAudit;
