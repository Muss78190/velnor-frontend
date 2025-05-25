import React from "react";
import { useNavigate } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import "../styles/LandingPage.css";

const offres = [
  {
    title: "Audit IA – 48h",
    description: "Rapport PDF, score IA, recommandations personnalisées",
    price: "499€ HT",
    link: "/paiement-48"
  },
  {
    title: "Audit Express – 24h",
    description: "Analyse prioritaire, badge sécurité, livraison rapide",
    price: "699€ HT",
    link: "/paiement-24"
  }
];

const steps = [
  {
    label: "Entrez l’URL de votre site",
    icon: "1"
  },
  {
    label: "L’IA scanne, analyse et identifie les failles",
    icon: "2"
  },
  {
    label: "Recevez un PDF premium en 24h ou 48h",
    icon: "3"
  }
];

const testimonials = [
  {
    text: "Velnor m'a permis de sécuriser mon business en un temps record, avec un rapport limpide.",
    author: "Paul D. – CTO startup SaaS"
  },
  {
    text: "Audit premium, retour en 24h, des recommandations actionnables. Vraiment pro.",
    author: "Sarah K. – Freelance Web"
  },
  {
    text: "Le rapport PDF est digne d’un cabinet de cybersécurité à 2000€, bluffant.",
    author: "Entreprise Turing – PME"
  }
];

export default function LandingPage() {
  const navigate = useNavigate();

  // Navigation liens (smooth)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="velnor-landing-premium">
      {/* NAVBAR */}
      <nav className="velnor-navbar">
        <div className="velnor-title" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} style={{ cursor: "pointer" }}>
          VELNOR
        </div>
        <ul>
          <li><a href="#fonctionnement" onClick={e => {e.preventDefault(); scrollToSection("fonctionnement")}}>Fonctionnement</a></li>
          <li><a href="#offres" onClick={e => {e.preventDefault(); scrollToSection("offres")}}>Offres</a></li>
          <li><a href="#temoignages" onClick={e => {e.preventDefault(); scrollToSection("temoignages")}}>Témoignages</a></li>
          <li><a href="#faq" onClick={e => {e.preventDefault(); scrollToSection("faq")}}>FAQ</a></li>
        </ul>
        <button className="admin-btn-navbar" onClick={() => navigate("/adminlogin")}>
          Admin
        </button>
      </nav>

      {/* HERO */}
      <section className="velnor-hero">
        <FadeInSection>
          <h1>VELNOR</h1>
          <h2>
            L’IA de cybersécurité
            <span className="subtitle-glow"> premium et futuriste</span>
          </h2>
          <p>
            Sécurisez votre site avec une IA d’élite. Rapport détaillé, score sécurité, plan d’action — livré en 24h ou 48h.
          </p>
          <button
            className="cta-main"
            onClick={() => scrollToSection("offres")}
          >
            Demander un audit IA
          </button>
        </FadeInSection>
      </section>

      {/* SECTION Fonctionnement */}
      <section className="section fonctionnement" id="fonctionnement">
        <FadeInSection>
          <h2 style={{fontWeight: 800, color: "#232445", fontSize: "2.1rem", marginBottom: "24px"}}>
            Fonctionnement <span role="img" aria-label="gear">⚙️</span>
          </h2>
          <div className="steps">
            {steps.map((step, i) => (
              <div className="step" key={i}>
                <span className="step-number">{step.icon}</span>
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION Offres */}
      <section className="section offres" id="offres">
        <FadeInSection>
          <h2 style={{fontWeight: 800, color: "#232445", fontSize: "2.1rem", marginBottom: "26px"}}>
            Nos Offres <span role="img" aria-label="rocket">🚀</span>
          </h2>
          <div className="pricing-cards">
            {offres.map((o, i) => (
              <div className="card" key={i}>
                <h4>{o.title}</h4>
                <div style={{color: "#34415a", fontSize: "1.05rem", fontWeight: 500, marginBottom: 14}}>{o.description}</div>
                <div className="price">{o.price}</div>
                <button onClick={() => navigate(o.link)}>Choisir</button>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION Témoignages */}
      <section className="section temoignages" id="temoignages">
        <FadeInSection>
          <h2 style={{fontWeight: 800, color: "#232445", fontSize: "2.1rem", marginBottom: "28px"}}>
            Témoignages Premium <span role="img" aria-label="star">⭐</span>
          </h2>
          <div className="testimonials-slider">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-text">{t.text}</div>
                <div className="testimonial-name">{t.author}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* SECTION FAQ */}
      <section className="section" id="faq">
        <FadeInSection>
          <h2 style={{fontWeight: 800, color: "#232445", fontSize: "2.1rem", marginBottom: "28px"}}>
            FAQ <span role="img" aria-label="question">❓</span>
          </h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Comment fonctionne l’audit IA de VELNOR ?</summary>
              <p>Notre IA scanne automatiquement votre site, détecte les failles majeures et vous remet un rapport complet, clair et actionnable.</p>
            </details>
            <details className="faq-item">
              <summary>Quels types de sites sont compatibles ?</summary>
              <p>Tous les sites web professionnels, SaaS, e-commerce, landing pages, etc. Si doute, contactez-nous !</p>
            </details>
            <details className="faq-item">
              <summary>Quel est le délai de livraison du rapport ?</summary>
              <p>En 24h (offre express) ou 48h (offre standard), rapport PDF envoyé automatiquement par mail.</p>
            </details>
            <details className="faq-item">
              <summary>Un humain vérifie-t-il le rapport ?</summary>
              <p>Oui, chaque audit IA est validé par un expert cybersécurité avant envoi.</p>
            </details>
          </div>
        </FadeInSection>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          © {new Date().getFullYear()} VELNOR. Tous droits réservés.
        </div>
        <div className="footer-links">
          <a href="mailto:assistance.velnor@outlook.fr">Contact</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#offres" onClick={e => {e.preventDefault(); scrollToSection("offres")}}>Offres</a>
          <a href="#faq" onClick={e => {e.preventDefault(); scrollToSection("faq")}}>FAQ</a>
        </div>
      </footer>
    </div>
  );
}
