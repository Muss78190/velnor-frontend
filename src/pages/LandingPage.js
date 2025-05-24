import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";

const NAV_LINKS = [
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#technologie", label: "Technologie" },
  { href: "#offres", label: "Offres" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
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
      <div className="velnor-logo">
        <img src="/logo192.png" alt="Logo" className="logo-img" /> VELNOR
      </div>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
        <li>
          <a href="#offres">
            <button className="cta-btn">Audit IA</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="velnor-hero">
      <h1><span className="velnor-glow">VELNOR</span></h1>
      <h2>L’IA de cybersécurité <span className="subtitle">premium pour votre entreprise</span></h2>
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
  const navigate = useNavigate();
  return (
    <section className="section" id="offres">
      <h3>💼 Nos Offres</h3>
      <div className="pricing-cards">
        <div className="card">
          <h4>Audit IA – 48h</h4>
          <p>Rapport PDF, score IA, recommandations</p>
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

// SECTION TEMOIGNAGES EXEMPLE
function Temoignages() {
  // Tu pourras custom plus tard : slider, avatars, logos, etc.
  return (
    <section className="section" id="temoignages">
      <h3>✨ Témoignages</h3>
      <div className="testimonials">
        <div className="testimonial">
          <span className="avatar">👨‍💼</span>
          <p>“Audit VELNOR reçu en 24h : précis, pro, je recommande à 100%.”</p>
          <span className="author">— Julien, CTO SaaS</span>
        </div>
        <div className="testimonial">
          <span className="avatar">👩‍💻</span>
          <p>“La sécurité de notre site a clairement progressé après leur audit IA.”</p>
          <span className="author">— Sarah, Start-up</span>
        </div>
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
      <div className="footer-links">
        <div>© {new Date().getFullYear()} VELNOR — Cybersécurité premium</div>
        <div>
          <a href="/mentions-legales">Mentions légales</a>
          <span>·</span>
          <a href="mailto:contact@velnor.fr">Contact</a>
          <span>·</span>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="app-bg">
      <Navbar />
      <Hero />
      <Fonctionnement />
      <Technologie />
      <Offres />
      <Temoignages />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
