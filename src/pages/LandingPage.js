import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="velnor-landing">
      {/* Navbar */}
      <nav className="velnor-navbar">
        <div className="velnor-logo">VELNOR</div>
        <ul>
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#technologie">Technologie</a></li>
          <li><a href="#offres">Offres</a></li>
          <li><a href="#temoignages">Témoignages</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><Link to="/admin" className="admin-btn-navbar">Admin</Link></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>VELNOR</h1>
        <h2>L’IA de cybersécurité <span className="gradient-text">premium et futuriste</span></h2>
        <p>Sécurisez votre site avec une IA d’élite. Rapport détaillé, score sécurité, plan d’action — livré en 24h ou 48h.</p>
        <a href="#offres" className="cta-main">Demander un audit IA</a>
      </section>

      {/* Fonctionnement */}
      <section id="fonctionnement" className="fonctionnement section">
        <h3>Fonctionnement</h3>
        <div className="steps">
          <div className="step">1. Entrez l’URL de votre site</div>
          <div className="step">2. L’IA scanne et identifie les failles</div>
          <div className="step">3. Recevez un PDF premium en 24h ou 48h</div>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="offres section">
        <h3>Offres</h3>
        <div className="cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p className="price">499€ HT</p>
            <ul>
              <li>Rapport PDF complet</li>
              <li>Score IA, recommandations</li>
              <li>Livraison sous 48h</li>
            </ul>
            <Link to="/paiement-48h" className="card-btn">Choisir</Link>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p className="price">699€ HT</p>
            <ul>
              <li>Audit prioritaire</li>
              <li>Badge sécurité premium</li>
              <li>Livraison sous 24h</li>
            </ul>
            <Link to="/paiement-24h" className="card-btn">Choisir</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 VELNOR. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
