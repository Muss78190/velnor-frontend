import React from "react";
import "../styles/LandingPage.css";

const faq = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible." },
  { q: "Les rapports sont-ils confidentiels ?", a: "Oui, chaque audit est traité en toute confidentialité et sécurité." }
];

const LandingPage = () => (
  <div className="velnor-landing">
    <div className="galaxy-bg"></div>
    <nav className="navbar">
      <div className="logo">🛡️ VELNOR</div>
      <div className="nav-links">
        <a href="#fonctionnement">Fonctionnement</a>
        <a href="#technologie">Technologie</a>
        <a href="#offres">Offres</a>
        <a href="#faq">FAQ</a>
        <a href="/audit" className="nav-cta">Audit IA</a>
      </div>
    </nav>

    <section className="hero">
      <div className="hero-content">
        <h1><span className="velnor-glow">VELNOR</span></h1>
        <h2>L’IA de cybersécurité <span className="subtitle">venue d'une autre dimension</span></h2>
        <p>
          Auditez votre site grâce à une IA de pointe qui détecte les failles critiques<br />
          et vous livre un rapport stratégique en 24h ou 48h.
        </p>
        <a href="/audit" className="cta-btn">🚀 Commander un audit IA</a>
      </div>
    </section>

    <section id="fonctionnement" className="section fonctionnement">
      <h3>🛠 Fonctionnement</h3>
      <div className="steps">
        <div className="step">1️⃣ Entrez l’URL de votre site</div>
        <div className="step">2️⃣ L’IA analyse, scanne et identifie les failles</div>
        <div className="step">3️⃣ Recevez un PDF stratégique en 24h ou 48h</div>
      </div>
    </section>

    <section id="technologie" className="section technologie">
      <h3>🧠 Technologie VELNOR</h3>
      <ul className="features">
        <li>✅ Détection XSS, SQLi, .env, ports ouverts</li>
        <li>📄 Rapport PDF pro généré par APEX™</li>
        <li>🛡️ Score sécurité + Badge IA</li>
        <li>⚡ Livraison garantie en 24h/48h</li>
      </ul>
    </section>

    <section id="offres" className="section offres">
      <h3>💼 Nos Offres</h3>
      <div className="pricing-cards">
        <div className="card">
          <h4>Audit IA – 48h</h4>
          <p>Rapport PDF, score IA, recommandations</p>
          <p className="price">499€ HT</p>
          <a href="/paiement-48h"><button>Choisir</button></a>
        </div>
        <div className="card">
          <h4>Audit Express – 24h</h4>
          <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
          <p className="price">699€ HT</p>
          <a href="/paiement-24h"><button>Choisir</button></a>
        </div>
      </div>
    </section>

    <section id="faq" className="section faq">
      <h3>❓ FAQ</h3>
      <div className="faq-list">
        {faq.map((item, i) => (
          <details key={i} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>

    <footer className="footer">
      <span>© {new Date().getFullYear()} VELNOR — Cybersécurité Galactique</span>
      <a href="/mentions-legales">Mentions légales</a>
    </footer>
  </div>
);

export default LandingPage;
