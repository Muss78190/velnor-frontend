import React from "react";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1 className="logo">VELNOR</h1>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#offres">Offres</a>
          <a href="#footer">Contact</a>
          <button onClick={() => navigate("/admin")} className="admin-btn">Admin</button>
        </nav>
      </header>

      <section className="landing-hero">
        <h2>L’IA de cybersécurité<br /><span>qui vous protège</span></h2>
        <p>
          VELNOR est une IA de cybersécurité autonome qui analyse votre site, détecte les failles et vous livre un rapport stratégique sous 24h ou 48h.
        </p>
        <button onClick={() => navigate("/paiement-24h")}>🚀 Demander un audit IA</button>
      </section>

      <section className="landing-section" id="fonctionnement">
        <h3>🛠 Comment ça marche</h3>
        <ol>
          <li>1. Vous entrez votre site web</li>
          <li>2. Notre IA lance un audit complet</li>
          <li>3. Vous recevez un PDF pro avec score et recommandations</li>
        </ol>
      </section>

      <section className="landing-section" id="fonctionnalites">
        <h3>🧠 Fonctionnalités IA</h3>
        <ul>
          <li>✅ Détection de failles critiques</li>
          <li>📄 Génération de rapport PDF personnalisé</li>
          <li>🔐 Recommandations de sécurité automatisées</li>
          <li>⚡️ Livraison rapide (24h ou 48h)</li>
        </ul>
      </section>

      <section className="landing-section" id="offres">
        <h3>💼 Nos Offres</h3>
        <div className="offres">
          <div className="offre">
            <h4>Audit IA – 48h</h4>
            <p>Rapport PDF, score global, recommandations IA</p>
            <p className="prix">499€ HT</p>
            <button onClick={() => navigate("/paiement48h")}>Choisir</button>
          </div>
          <div className="offre">
            <h4>Audit Express – 24h</h4>
            <p>Rapport prioritaire, badge sécurité, IA avancée</p>
            <p className="prix">699€ HT</p>
            <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
          </div>
        </div>
      </section>

      <footer className="landing-footer" id="footer">
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
