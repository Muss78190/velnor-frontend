import React, { useEffect } from "react";
import "../styles/LandingPage.css";
import GalaxyParticles from "./GalaxyParticles";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="landing-container">
      <GalaxyParticles />

      <nav className="navbar">
        <div className="nav-left">
          <h1 className="velnor-title">VELNOR</h1>
        </div>
        <div className="nav-right">
          <button onClick={() => navigate("/adminlogin")} className="admin-btn">
            Admin
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h2 className="hero-title">L’IA qui audite votre cybersécurité</h2>
          <p className="hero-subtitle">
            Audit automatisé, rapport PDF complet, badge de confiance. En 24h ou 48h.
          </p>
          <button className="cta-button" onClick={() => document.getElementById("offres").scrollIntoView({ behavior: "smooth" })}>
            Demander un audit IA
          </button>
        </div>
      </header>

      <section className="section fonctionnement">
        <h2>Fonctionnement</h2>
        <div className="steps">
          <div className="step">🧠 Vous envoyez votre nom de domaine</div>
          <div className="step">🤖 Notre IA analyse vos failles</div>
          <div className="step">📄 Vous recevez un rapport PDF complet</div>
        </div>
      </section>

      <section className="section technologie">
        <h2>Technologie IA</h2>
        <p>
          Propulsé par une IA entraînée sur des milliers de scénarios de cybersécurité. Audit précis, fiable, rapide.
        </p>
      </section>

      <section className="section offres" id="offres">
        <h2>Nos Offres</h2>
        <div className="cards">
          <div className="card">
            <h3>Audit IA – 48h</h3>
            <p>499 € HT</p>
            <ul>
              <li>📄 Rapport PDF complet</li>
              <li>⚡ Livraison garantie sous 48h</li>
              <li>📬 Envoi automatique par mail</li>
            </ul>
            <button onClick={() => navigate("/paiement-48h")}>Choisir</button>
          </div>

          <div className="card">
            <h3>Audit Express IA – 24h</h3>
            <p>699 € HT</p>
            <ul>
              <li>⚡ Traitement prioritaire</li>
              <li>📄 Rapport + Badge Sécurité</li>
              <li>📬 Livraison garantie sous 24h</li>
            </ul>
            <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
          </div>
        </div>
      </section>

      <section className="section footer">
        <p>© 2025 VELNOR. Tous droits réservés. | Contact : support@velnor.com</p>
      </section>
    </div>
  );
};

export default LandingPage;
