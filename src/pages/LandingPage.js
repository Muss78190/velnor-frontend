import React from "react";
import "../styles/LandingPage.css";

const NAV_LINKS = [
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#technologie", label: "Technologie" },
  { href: "#offres", label: "Offres" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
];

const testimonies = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Marc L.",
    company: "CyberCorp",
    quote: "Un audit IA bluffant, rapport clair et actionnable. Je recommande à 200% !"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah P.",
    company: "FinTechPro",
    quote: "Service premium, résultat pro et hyper rapide. Merci VELNOR !"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Julien C.",
    company: "WebSafe",
    quote: "L’IA a trouvé des failles que nos experts avaient ratées. Impressionnant."
  }
];

const FAQ = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible." },
  { q: "Les rapports sont-ils confidentiels ?", a: "Oui, chaque audit est traité en toute confidentialité et sécurité." }
];

function Navbar() {
  return (
    <nav className="velnor-navbar">
      <div className="velnor-logo">VELNOR</div>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li>
          <a href="/admin">
            <button className="cta-btn">Admin</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="velnor-hero">
      <h1 className="neon-glow">VELNOR</h1>
      <h2>
        L’IA de cybersécurité <span className="highlight">premium pour votre entreprise</span>
      </h2>
      <p>
        Protégez vos actifs avec un audit IA nouvelle génération.<br />
        Rapport détaillé, score sécurité, plan d’action – en 24h ou 48h.
      </p>
      <a href="#offres">
        <button className="cta-main">Demander un audit IA</button>
      </a>
    </section>
  );
}

function Fonctionnement() {
  return (
    <section className="section" id="fonctionnement">
      <h3>🛠 Fonctionnement</h3>
      <div className="steps">
        <div className="step">1️⃣ Entrez l’URL de votre site</div>
        <div className="step">2️⃣ L’IA analyse, scanne et identifie les failles</div>
        <div className="step">3️⃣ Recevez un PDF stratégique en 24h ou 48h</div>
      </div>
    </section>
  );
}

function Technologie() {
  return (
    <section className="section" id="technologie">
      <h3>🧠 Technologie VELNOR</h3>
      <ul className="features">
        <li>✅ Détection XSS, SQLi, .env, ports ouverts</li>
        <li>📄 Rapport PDF pro généré par IA</li>
        <li>🛡️ Score sécurité + Badge IA</li>
        <li>⚡ Livraison garantie en 24h/48h</li>
      </ul>
    </section>
  );
}

function Offres() {
  return (
    <section className="section" id="offres">
      <h3>💼 Nos Offres</h3>
      <div className="pricing-cards">
        <div className="card">
          <h4>Audit IA – 48h</h4>
          <p>Rapport PDF, score IA, recommandations</p>
          <p className="price">499€ HT</p>
          <a href="/paiement-48h">
            <button>Choisir</button>
          </a>
        </div>
        <div className="card">
          <h4>Audit Express – 24h</h4>
          <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
          <p className="price">699€ HT</p>
          <a href="/paiement-24h">
            <button>Choisir</button>
          </a>
        </div>
      </div>
    </section>
  );
}

function Temoinages() {
  return (
    <section className="section" id="temoignages">
      <h3>✨ Témoignages</h3>
      <div className="testimony-slider">
        {testimonies.map((t, i) => (
          <div className="testimony-card" key={i}>
            <img src={t.avatar} alt={t.name} className="testimony-avatar" />
            <blockquote>{t.quote}</blockquote>
            <div className="testimony-author">
              <span>{t.name}</span> · <span>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
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
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span>© {new Date().getFullYear()} VELNOR — Cybersécurité premium</span>
        <span className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="mailto:contact@velnor.fr">Contact</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="velnor-app">
      <div className="galaxy-bg"></div>
      <Navbar />
      <Hero />
      <Fonctionnement />
      <Technologie />
      <Offres />
      <Temoinages />
      <FAQSection />
      <Footer />
    </div>
  );
}
