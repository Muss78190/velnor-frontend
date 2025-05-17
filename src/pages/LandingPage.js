import React, { useEffect } from "react";
import "../styles/LandingPage.css";
import { FaRocket, FaShieldAlt, FaBrain, FaClock } from "react-icons/fa";

const LandingPage = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          Entrez dans une nouvelle ère. VELNOR détecte toutes les failles critiques de votre site web grâce à une IA d’élite. Rapport livré sous 24h ou 48h.
        </p>
        <a href="#offres" className="cta-main">🚀 Je veux un audit IA</a>
      </section>

      <section className="features-section reveal" id="fonctionnement">
        <h3>Pourquoi choisir VELNOR ?</h3>
        <div className="features">
          <div><FaBrain /><p>IA Évolutive Ultra-Précise</p></div>
          <div><FaClock /><p>Rapport livré en 24h ou 48h</p></div>
          <div><FaShieldAlt /><p>Badge Sécurité Offert</p></div>
          <div><FaRocket /><p>Design & Rapport Premium</p></div>
        </div>
      </section>

      <section className="offers-section reveal" id="offres">
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

      <section className="testimonials-section reveal" id="temoignages">
        <h3>Ils nous ont fait confiance</h3>
        <div className="testimonials">
          <blockquote>
            <p>“VELNOR a identifié plusieurs failles critiques. Rapport clair, livrable rapide, top qualité.”</p>
            <footer>— Sophie, WebGuard</footer>
          </blockquote>
          <blockquote>
            <p>“Le rapport était visuellement incroyable. L'IA a même trouvé des failles que je ne connaissais pas.”</p>
            <footer>— Yanis, CTO NovaTech</footer>
          </blockquote>
        </div>
      </section>

      <section className="faq-section reveal" id="faq">
        <h3>FAQ</h3>
        <div className="faq-item">
          <h4>Quels types de failles sont détectées ?</h4>
          <p>Ports ouverts, CMS vulnérables, headers, fichiers JS, chemins sensibles, failles CVE, etc.</p>
        </div>
        <div className="faq-item">
          <h4>À qui s’adresse ce service ?</h4>
          <p>À toute entreprise ou entrepreneur souhaitant sécuriser son site web sans expertise technique.</p>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <h3>Une question ?</h3>
        <p>Écrivez-nous à <a href="mailto:contact@velnor.fr">contact@velnor.fr</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
