
import React from "react";
import "../styles/LandingPageAudit.css";

const LandingPageAudit = () => {
  return (
    <div className="landing-audit">
      <header className="hero-audit">
        <h1>🛡️ VELNOR</h1>
        <p>Votre site web audité automatiquement par une IA de cybersécurité puissante.</p>
        <a href="/paiement-24h" className="cta-button">🚀 Demander un audit IA</a>
      </header>

      <section className="features-audit">
        <h2>🔍 Ce que vous obtenez</h2>
        <ul>
          <li>✅ Rapport PDF clair et professionnel</li>
          <li>✅ Détection des failles critiques (XSS, SQLi, .env, ports...)</li>
          <li>✅ Score de sécurité et badge IA</li>
          <li>✅ Livraison garantie en 24h ou 48h</li>
        </ul>
      </section>

      <section className="faq-audit">
        <h2>❓ FAQ</h2>
        <details>
          <summary>L’IA détecte-t-elle les failles réelles ?</summary>
          <p>Oui, notre moteur APEX™ détecte des vulnérabilités techniques et structurelles de votre site.</p>
        </details>
        <details>
          <summary>Quand vais-je recevoir mon rapport ?</summary>
          <p>En fonction de votre choix : en 24h (express) ou 48h (standard).</p>
        </details>
        <details>
          <summary>Est-ce que l’audit est automatisé ?</summary>
          <p>Oui, tout est généré par notre IA de cybersécurité sans intervention humaine.</p>
        </details>
      </section>
    </div>
  );
};

export default LandingPageAudit;
