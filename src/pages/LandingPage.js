import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="velnor-landing">
      <div className="animated-bg"></div>

      <header className="velnor-header">
        <div className="header-left">
          <img src="/velnor-logo.png" alt="VELNOR Logo" className="logo-banner" />
          <h1 className="site-title">VELNOR</h1>
        </div>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#offres">Offres</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="/admin-login" className="admin-button">Admin</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2 className="hero-title">Audit IA Cybersécurité<br />Ultra-Puissant</h2>
        <p className="hero-subtitle">
          VELNOR détecte toutes les failles de votre site web comme un expert pentester. Rapport PDF livré sous 48h ou 24h.
        </p>
        <a href="#offres" className="cta-main">🧠 Je veux un audit</a>
      </section>

      <section className="features-section" id="fonctionnement">
        <h3>Pourquoi choisir VELNOR ?</h3>
        <div className="features">
          <div><span>🤖</span><p>Analyse IA ultra-puissante</p></div>
          <div><span>⚡</span><p>Livraison express 24h/48h</p></div>
          <div><span>📄</span><p>Rapport PDF stratégique</p></div>
          <div><span>🎖</span><p>Badge de sécurité offert</p></div>
        </div>
      </section>

      <section className="offers-section" id="offres">
        <h3>Nos Offres</h3>
        <div className="offers">
          <div className="offer">
            <h4>Audit IA – 48h</h4>
            <p className="price">499 € HT</p>
            <ul>
              <li>Rapport PDF complet</li>
              <li>Score IA et recommandations</li>
              <li>Livraison garantie sous 48h</li>
            </ul>
            <a href="/paiement-48h" className="btn-offer">Commander</a>
          </div>
          <div className="offer">
            <h4>Audit Express – 24h</h4>
            <p className="price">699 € HT</p>
            <ul>
              <li>Traitement prioritaire</li>
              <li>Rapport + Badge Sécurité</li>
              <li>Livraison sous 24h</li>
            </ul>
            <a href="/paiement-24h" className="btn-offer">Commander</a>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="temoignages">
        <h3>Témoignages Clients</h3>
        <div className="testimonials">
          <blockquote>
            <p>“VELNOR a repéré 7 failles critiques. Rapport clair, livraison rapide.”</p>
            <footer>— Sophie, WebGuard</footer>
          </blockquote>
          <blockquote>
            <p>“Le rapport est professionnel, utile et bien présenté. IA très efficace.”</p>
            <footer>— Yanis, CTO NovaTech</footer>
          </blockquote>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h3>FAQ</h3>
        <div className="faq-item">
          <h4>Quels types de failles sont détectées ?</h4>
          <p>Ports ouverts, fichiers sensibles, CMS, JS, headers, chemins vulnérables et +.</p>
        </div>
        <div className="faq-item">
          <h4>Le rapport est-il compréhensible ?</h4>
          <p>Oui, il est clair, bien structuré et accessible même aux non-techniciens.</p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h3>Une question ?</h3>
        <p>Écrivez-nous à <a href="mailto:assistance.velnor@outlook.fr">assistance.velnor@outlook.fr</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
