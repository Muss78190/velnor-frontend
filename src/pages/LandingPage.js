import React, { useEffect } from "react";
import "../styles/LandingPage.css";

const NAV_LINKS = [
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#technologie", label: "Technologie" },
  { href: "#offres", label: "Offres" },
  { href: "#testimonials", label: "Témoignages" },
  { href: "#faq", label: "FAQ" }
];

const FAQ = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible." },
  { q: "Les rapports sont-ils confidentiels ?", a: "Oui, chaque audit est traité en toute confidentialité et sécurité." }
];

const TESTIMONIALS = [
  {
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
    name: "Yassine B.",
    role: "CTO, Arctica",
    quote: "Rapport IA ultra pro, livré en moins de 24h, clair et actionnable. VELNOR est devenu notre allié cybersécurité !"
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    name: "Sophie M.",
    role: "Fondatrice, Shoplify",
    quote: "L’audit VELNOR nous a évité une faille critique avant un gros lancement. C’est bluffant !"
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Khaled T.",
    role: "Indépendant",
    quote: "Simple, rapide, sérieux. J’ai eu un PDF détaillé et toutes les recommandations en 48h !"
  }
];

const SECTION_IDS = ["fonctionnement", "technologie", "offres", "testimonials", "faq"];

function LandingPage() {
  useEffect(() => {
    // Apparition au scroll (section .appear)
    const handleScroll = () => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && !el.classList.contains("appear")) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 120) {
            el.classList.add("appear");
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="velnor-landing">
      <div className="galaxy-bg"></div>
      <nav className="velnor-navbar">
        <div className="velnor-logo">
          <span role="img" aria-label="shield">🛡️</span> <span className="velnor-logo-txt">VELNOR</span>
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

      {/* HERO */}
      <section className="velnor-hero appear">
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

      {/* FONCTIONNEMENT */}
      <section className="section" id="fonctionnement">
        <h3>🛠 Fonctionnement</h3>
        <div className="steps">
          <div className="step"><span role="img" aria-label="1">1️⃣</span> Entrez l’URL de votre site</div>
          <div className="step"><span role="img" aria-label="2">2️⃣</span> L’IA analyse, scanne et identifie les failles</div>
          <div className="step"><span role="img" aria-label="3">3️⃣</span> Recevez un PDF stratégique en 24h ou 48h</div>
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
            <button className="cta-btn">Choisir</button>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
            <p className="price">699€ HT</p>
            <button className="cta-btn">Choisir</button>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="section testimonials" id="testimonials">
        <h3>✨ Témoignages Premium</h3>
        <div className="testi-slider">
          {TESTIMONIALS.map((item, i) => (
            <div className="testi-card" key={i}>
              <img src={item.avatar} alt={item.name} className="testi-avatar"/>
              <blockquote>“{item.quote}”</blockquote>
              <span className="testi-name">{item.name} <span className="testi-role">{item.role}</span></span>
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
        <div className="footer-content">
          <div>
            <span>© {new Date().getFullYear()} <strong>VELNOR</strong> — Cybersécurité premium</span>
            <span className="footer-sep">|</span>
            <a href="/mentions-legales">Mentions légales</a>
            <span className="footer-sep">|</span>
            <a href="mailto:contact@velnor.fr">Contact</a>
          </div>
          <div className="footer-socials">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
