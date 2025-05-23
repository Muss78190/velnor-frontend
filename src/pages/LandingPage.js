import React, { useRef, useEffect } from "react";
import "../styles/LandingPage.css";

const faq = [
  { q: "Comment fonctionne l’audit IA ?", a: "L’IA analyse votre site, détecte les failles critiques et vous délivre un rapport stratégique PDF." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, failles d’authentification, erreurs de configuration, etc." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.)." },
  { q: "Le rapport est-il confidentiel ?", a: "Oui, confidentialité et sécurité garanties par VELNOR." }
];

const steps = [
  "Entrez l’URL de votre site.",
  "L’IA scanne & détecte les failles.",
  "Recevez votre rapport PDF stratégique en 24h/48h."
];

const techs = [
  "Détection XSS, SQLi, .env, ports ouverts…",
  "Rapport PDF professionnel, score sécurité, badge IA.",
  "Analyse automatisée par APEX™.",
  "Livraison garantie en 24h/48h."
];

export default function LandingPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Optionnel : ajoute animations GSAP/Framer si tu veux, mais déjà c’est carré sans
  }, []);

  return (
    <div className="velnor-landing">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo"> {/* Mets ici le SVG premium si tu veux */ }
          <span className="logo-shield"></span>
          <span>VELNOR</span>
        </div>
        <div className="nav-links">
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#offres">Offres</a>
          <a href="#techno">Technologie</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#audit" className="cta-nav">Audit IA</a>
      </nav>

      {/* HERO */}
      <section className="section hero">
        <div className="hero-content">
          <h1>VELNOR</h1>
          <h2>L’IA de cybersécurité <span className="premium">premium pour votre entreprise</span></h2>
          <p>
            Protégez vos actifs avec un audit IA nouvelle génération.<br />
            Rapport détaillé, score sécurité, plan d’action – en 24h ou 48h.
          </p>
          <a href="#audit" className="cta-main">Demander un audit IA</a>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="section" id="fonctionnement">
        <h3>🛠 Fonctionnement</h3>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={i}>{step}</div>
          ))}
        </div>
      </section>

      {/* OFFRES */}
      <section className="section" id="offres">
        <h3>💼 Nos Offres</h3>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <ul>
              <li>✔ Rapport PDF professionnel</li>
              <li>✔ Score sécurité & badge IA</li>
              <li>✔ Recommandations stratégiques</li>
            </ul>
            <p className="price">499€ HT</p>
            <button>Choisir</button>
          </div>
          <div className="card card-express">
            <h4>Audit Express – 24h</h4>
            <ul>
              <li>✔ Livraison prioritaire</li>
              <li>✔ Analyse complète IA</li>
              <li>✔ Support prioritaire</li>
            </ul>
            <p className="price">699€ HT</p>
            <button>Choisir</button>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section className="section" id="techno">
        <h3>🧠 Technologie</h3>
        <ul className="features">
          {techs.map((tech, i) => <li key={i}>{tech}</li>)}
        </ul>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
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

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} VELNOR — Cybersécurité Premium</span>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
}
