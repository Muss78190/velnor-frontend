import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="velnor-landing">
      {/* Animation de fond */}
      <div className="background-animation"></div>

      {/* HEADER */}
      <header className="velnor-header">
        <img src="/velnor-logo.png" alt="VELNOR Logo" className="logo-banner" />
        <h1 className="site-title">VELNOR</h1>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#offres">Offres</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="/admin-login" className="admin-button">Admin</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <h2>🔐 L’Audit IA le plus avancé du marché</h2>
        <p>Notre intelligence artificielle analyse toutes les failles de votre site, génère un rapport PDF professionnel et stratégique livré en 24h ou 48h.</p>
        <a href="#offres" className="cta-main">🚀 Je veux un audit IA</a>
      </section>

      {/* POURQUOI VELNOR */}
      <section className="features-section" id="fonctionnement">
        <h3>Pourquoi choisir VELNOR ?</h3>
        <div className="features">
          <div><span>🤖</span><p>Audit IA ultra-précis</p></div>
          <div><span>⚡</span><p>Livraison 24h ou 48h</p></div>
          <div><span>📄</span><p>Rapport PDF stratégique</p></div>
          <div><span>🎖</span><p>Badge Sécurité Inclus</p></div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="offers-section" id="offres">
        <h3>Nos Offres</h3>
        <div className="offers">
          <div className="offer">
            <h4>Audit IA – 48h</h4>
            <p className="price">499 € HT</p>
            <ul>
              <li>Rapport complet PDF</li>
              <li>Score de sécurité IA</li>
              <li>Recommandations stratégiques</li>
              <li>Livraison en 48h</li>
            </ul>
            <a href="/paiement-48h" className="btn-offer">Commander</a>
          </div>
          <div className="offer">
            <h4>Audit Express – 24h</h4>
            <p className="price">699 € HT</p>
            <ul>
              <li>Traitement prioritaire</li>
              <li>Rapport PDF complet + Badge</li>
              <li>Livraison en 24h</li>
            </ul>
            <a href="/paiement-24h" className="btn-offer">Commander</a>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="testimonials-section" id="temoignages">
        <h3>Témoignages Clients</h3>
        <div className="testimonials">
          <blockquote>
            <p>“VELNOR a trouvé 6 failles critiques en moins de 48h. On a pu corriger tout de suite.”</p>
            <footer>— Sophie, WebGuard</footer>
          </blockquote>
          <blockquote>
            <p>“Le rapport est classe, utile, et précis. L’IA nous a bluffés.”</p>
            <footer>— Yanis, CTO NovaTech</footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section" id="faq">
        <h3>FAQ</h3>
        <div className="faq-item">
          <h4>Quels types de failles l’IA détecte ?</h4>
          <p>Ports, fichiers sensibles, CMS, JS, headers, chemins exposés et +.</p>
        </div>
        <div className="faq-item">
          <h4>Est-ce que le rapport est compréhensible ?</h4>
          <p>Oui. Il est clair, structuré, illustré et accessible même aux non-techs.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <h3>Une question ?</h3>
        <p>Écrivez-nous à <a href="mailto:contact@velnor.fr">contact@velnor.fr</a></p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} VELNOR — Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
