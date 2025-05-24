import React from "react";

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

const TEMOIGNAGES = [
  {
    name: "Paul, CTO",
    avis: "Velnor nous a permis de détecter en 48h des failles critiques, service ultra pro et rapide."
  },
  {
    name: "Nadia, Fondatrice SaaS",
    avis: "Le rapport PDF IA, c’est ce qui m’a rassurée pour mon lancement. Indispensable."
  },
  {
    name: "Ali, CEO PME",
    avis: "Un vrai audit de cybersécurité premium, j’ai reçu mon score de sécurité + badge IA en 24h."
  }
];

export default function LandingPage() {
  return (
    <div className="velnor-bg">
      {/* NAVBAR */}
      <nav className="velnor-navbar">
        <div className="velnor-logo">🛡️ VELNOR</div>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.href}><a href={link.href}>{link.label}</a></li>
          ))}
          <li>
            <a href="#offres"><button className="cta-btn">Audit IA</button></a>
          </li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="velnor-hero">
        <h1><span className="velnor-glow">VELNOR</span></h1>
        <h2>L’IA de cybersécurité <span className="subtitle">premium pour votre entreprise</span></h2>
        <p>
          Protégez vos actifs avec un audit IA nouvelle génération.<br />
          Rapport détaillé, score sécurité, plan d’action – en 24h ou 48h.
        </p>
        <a href="#offres"><button className="cta-main">Demander un audit IA</button></a>
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
        <h3>✨ Ils ont choisi VELNOR</h3>
        <div className="temoignages-list">
          {TEMOIGNAGES.map((t, i) => (
            <div className="temoignage" key={i}>
              <div className="avis">"{t.avis}"</div>
              <div className="auteur">— {t.name}</div>
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
