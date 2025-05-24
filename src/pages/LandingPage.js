import React from "react";
import "../styles/LandingPage.css";

// Exemple de témoignages (à personnaliser)
const testimonials = [
  {
    name: "Ludovic M.",
    text: "Audit IA reçu en 24h, ultra détaillé, j’ai sécurisé tout mon site. Rapport professionnel et recommandations faciles à suivre.",
    job: "CEO - Start-Up SaaS"
  },
  {
    name: "Amine B.",
    text: "La meilleure expérience d’audit cybersécurité ! Rapport clair, badge IA, tout livré rapidement. Je recommande à 100%.",
    job: "CTO - Agence Web"
  }
];

// FAQ
const FAQ = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible." },
  { q: "Les rapports sont-ils confidentiels ?", a: "Oui, chaque audit est traité en toute confidentialité et sécurité." }
];

export default function LandingPage() {
  return (
    <div className="velnor-landing">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🛡️ <span>VELNOR</span></div>
        <div className="nav-links">
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#technologie">Technologie</a>
          <a href="#offres">Offres</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#faq">FAQ</a>
          <a href="#offres" className="nav-cta">Audit IA</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1><span className="velnor-glow">VELNOR</span></h1>
          <h2>L’IA de cybersécurité <span className="subtitle">premium pour votre entreprise</span></h2>
          <p>
            Protégez vos actifs avec un audit IA nouvelle génération.<br />
            Rapport détaillé, score sécurité, plan d’action – en 24h ou 48h.
          </p>
          <a href="#offres">
            <button className="cta-btn">Demander un audit IA</button>
          </a>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="section" id="fonctionnement">
        <h3>🛠 Fonctionnement</h3>
        <div className="steps">
          <div className="step">1️⃣ Entrez l’URL de votre site</div>
          <div className="step">2️⃣ L’IA analyse, scanne et identifie les failles</div>
          <div className="step">3️⃣ Recevez un PDF stratégique en 24h ou 48h</div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section className="section" id="technologie">
        <h3>🧠 Technologie VELNOR</h3>
        <ul className="features">
          <li>✅ Détection XSS, SQLi, .env, ports ouverts</li>
          <li>📄 Rapport PDF pro généré par IA</li>
          <li>🛡️ Score sécurité + Badge IA</li>
          <li>⚡ Livraison garantie en 24h/48h</li>
        </ul>
      </section>

      {/* OFFRES */}
      <section className="section" id="offres">
        <h3>💼 Nos Offres</h3>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p>Rapport PDF, score IA, recommandations</p>
            <p className="price">499€ HT</p>
            <button>Choisir</button>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
            <p className="price">699€ HT</p>
            <button>Choisir</button>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="section" id="temoignages">
        <h3>🗣️ Ils ont audité leur site avec VELNOR</h3>
        <div className="testimonials">
          {testimonials.map((item, i) => (
            <div className="testimonial" key={i}>
              <div className="testimonial-text">“{item.text}”</div>
              <div className="testimonial-author">
                <strong>{item.name}</strong><br />
                <span>{item.job}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <h3>❓ FAQ</h3>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} VELNOR — Cybersécurité premium</span>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
}
