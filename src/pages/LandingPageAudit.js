import React, { useEffect } from "react";
import "../styles/LandingPageAudit.css";

const LandingPageAudit = () => {
  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="audit-body">
      <div className="galaxy-bg"></div>

      <header className="hero-section reveal">
        <h1>🛡️ VELNOR – Audit IA Cybersécurité</h1>
        <p>Une IA puissante pour analyser vos vulnérabilités et livrer un rapport PDF stratégique et pro.</p>
        <a href="/paiement-24h" className="cta-btn">🚀 Commander un audit express</a>
      </header>

      <section className="section reveal">
        <h2>🚀 Fonctionnement</h2>
        <div className="steps">
          <div className="step">1. Entrez votre site</div>
          <div className="step">2. L’IA lance l’audit</div>
          <div className="step">3. Vous recevez un PDF pro</div>
        </div>
      </section>

      <section className="section reveal">
        <h2>🔍 Ce que l’audit couvre</h2>
        <ul className="features">
          <li>✅ Ports et services ouverts</li>
          <li>✅ Headers de sécurité manquants</li>
          <li>✅ CVE & technologies vulnérables</li>
          <li>✅ Chemins sensibles exposés</li>
          <li>✅ Score IA & recommandations</li>
        </ul>
      </section>

      <section className="section reveal">
        <h2>📦 Nos Offres</h2>
        <div className="offers">
          <div className="offer">
            <h3>Audit 48h – 499 €</h3>
            <p>Rapport complet livré sous 48h</p>
            <a href="/paiement-48h">Choisir</a>
          </div>
          <div className="offer highlight">
            <h3>Audit Express 24h – 699 €</h3>
            <p>Livraison prioritaire + badge sécurité</p>
            <a href="/paiement-24h">Choisir</a>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <h2>🧠 FAQ</h2>
        <details><summary>Quels types de failles ?</summary><p>XSS, SQLi, ports, headers, .env, etc.</p></details>
        <details><summary>Rapport compréhensible ?</summary><p>Oui, structuré avec résumé et conseils clairs.</p></details>
        <details><summary>Comment je reçois le rapport ?</summary><p>Par email, PDF sécurisé et lisible.</p></details>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default LandingPageAudit;