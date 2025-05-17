import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="velnor-landing">
      <div className="background-overlay"></div>

      {/* HEADER */}
      <header className="velnor-header">
        <img src="/velnor-logo.png" alt="Logo VELNOR" className="logo-banner" />
        <h1 className="brand-title">VELNOR</h1>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#offres">Offres</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="/admin-login" className="admin-btn">Admin</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>🔐 L’Audit IA le plus avancé du marché</h2>
        <p>
          Notre intelligence artificielle détecte toutes les failles critiques de votre site web
          grâce à une IA d’élite. Rapport livré sous 24h ou 48h.
        </p>
        <a href="#offres" className="cta-button">🚀 Je veux un audit IA</a>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="fonctionnement" id="fonctionnement">
        <h3>🔎 Comment fonctionne VELNOR ?</h3>
        <div className="steps">
          <div><span>1️⃣</span><p>Commande de l’audit</p></div>
          <div><span>2️⃣</span><p>Scan IA ultra précis</p></div>
          <div><span>3️⃣</span><p>Réception du rapport PDF</p></div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="offres" id="offres">
        <h3>💼 Nos Offres</h3>
        <div className="cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p className="price">499 € HT</p>
            <ul>
              <li>✔ Rapport complet</li>
              <li>✔ Score de sécurité</li>
              <li>✔ Recommandations IA</li>
              <li>🚚 Livraison en 48h</li>
            </ul>
            <a href="/paiement-48h">Commander</a>
          </div>
          <div className="card highlight">
            <h4>Audit Express – 24h</h4>
            <p className="price">699 € HT</p>
            <ul>
              <li>⚡ Priorité immédiate</li>
              <li>✔ Rapport complet + Badge</li>
              <li>🚀 Livraison en 24h</li>
            </ul>
            <a href="/paiement-24h">Commander</a>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES */}
      <section className="temoignages" id="temoignages">
        <h3>💬 Témoignages</h3>
        <div className="slider">
          <div className="slide">
            <p>“Rapport pro, IA bluffante. On recommande VELNOR !”</p>
            <span>— Sophie, WebGuard</span>
          </div>
          <div className="slide">
            <p>“On a corrigé 7 failles critiques. Merci pour la rapidité !”</p>
            <span>— Yanis, CTO NovaTech</span>
          </div>
        </div>
      </section>

      {/* BLOC CONFIANCE */}
      <section className="confiance">
        <h3>🔒 Sécurité & Crédibilité</h3>
        <p>Chaque audit inclut un badge de sécurité à afficher sur votre site.</p>
        <img src="/badge-securite.png" alt="Badge Sécurité VELNOR" className="badge" />
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <h3>❓ Questions Fréquentes</h3>
        <div className="faq-item">
          <h4>Quels types de failles sont détectées ?</h4>
          <p>Ports ouverts, services, CMS, JS, headers, fichiers exposés, et plus.</p>
        </div>
        <div className="faq-item">
          <h4>À qui est destiné l’audit ?</h4>
          <p>Entreprises, startups, agences, indépendants… tout site web peut être audité.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h3>📩 Une question ?</h3>
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
