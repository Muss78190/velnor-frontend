import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const NAV_LINKS = [
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#offres", label: "Offres" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

const FAQ = [
  {
    q: "Comment fonctionne l’audit IA ?",
    a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h."
  },
  {
    q: "Quels types de failles sont détectées ?",
    a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques."
  },
  {
    q: "Mon site est-il compatible ?",
    a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible."
  },
  {
    q: "Les rapports sont-ils confidentiels ?",
    a: "Oui, chaque audit est traité en toute confidentialité et sécurité."
  }
];

const TESTIMONIALS = [
  {
    text: "Velnor m'a permis de sécuriser mon business en un temps record, avec un rapport limpide.",
    name: "Paul D. – CTO startup SaaS"
  },
  {
    text: "Audit premium, retour en 24h, des recommandations actionnables. Vraiment pro.",
    name: "Sarah K. – Freelance Web"
  },
  {
    text: "Le rapport PDF est digne d’un cabinet de cybersécurité à 2000€, bluffant.",
    name: "Entreprise Turing – PME"
  }
];

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="velnor-navbar">
      <div className="velnor-title">VELNOR</div>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li>
          <button
            className="admin-btn-navbar"
            onClick={() => navigate("/admin")}
          >
            Admin
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="velnor-hero">
      <h1>VELNOR</h1>
      <h2>
        L’IA de cybersécurité <span className="subtitle-glow">premium et futuriste</span>
      </h2>
      <p>
        Sécurisez votre site avec une IA d’élite. Rapport détaillé, score sécurité, plan d’action — livré en 24h ou 48h.
      </p>
      <a href="#offres">
        <button className="cta-main">Demander un audit IA</button>
      </a>
    </section>
  );
}

function Fonctionnement() {
  return (
    <section className="section fonctionnement" id="fonctionnement">
      <h3>🛠 Fonctionnement</h3>
      <div className="steps">
        <div className="step">1️⃣ Entrez l’URL de votre site</div>
        <div className="step">2️⃣ L’IA scanne, analyse et identifie les failles</div>
        <div className="step">3️⃣ Recevez un PDF premium en 24h ou 48h</div>
      </div>
    </section>
  );
}

function Offres() {
  const navigate = useNavigate();
  return (
    <section className="section offres" id="offres">
      <h3>💼 Nos Offres</h3>
      <div className="pricing-cards">
        <div className="card">
          <h4>Audit IA – 48h</h4>
          <p>Rapport PDF, score IA, recommandations personnalisées</p>
          <p className="price">499€ HT</p>
          <button onClick={() => navigate("/paiement-48h")}>Choisir</button>
        </div>
        <div className="card">
          <h4>Audit Express – 24h</h4>
          <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
          <p className="price">699€ HT</p>
          <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
        </div>
      </div>
    </section>
  );
}

function Temoiniages() {
  return (
    <section className="section temoignages" id="temoignages">
      <h3>⭐️ Témoignages</h3>
      <div className="testimonials-slider">
        {TESTIMONIALS.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <div className="testimonial-text">{t.text}</div>
            <div className="testimonial-name">{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section faq" id="faq">
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
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} VELNOR — Cybersécurité nouvelle génération
      </span>
      <div className="footer-links">
        <a href="/mentions-legales">Mentions légales</a>
        <a href="mailto:contact@velnor.com">Contact</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="velnor-landing-premium">
      <Navbar />
      <Hero />
      <Fonctionnement />
      <Offres />
      <Temoiniages />
      <FAQSection />
      <Footer />
    </div>
  );
}
