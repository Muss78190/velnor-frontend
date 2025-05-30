import React, { useEffect } from 'react';
import '../styles/landingpage.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray('.section').forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className="landing-wrapper">
      <nav className="navbar">
        <div className="logo">VELNOR</div>
        <ul>
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#offres">Offres</a></li>
          <li><a href="#technologie">Technologie</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <button className="admin-btn" onClick={() => navigate('/admin')}>Admin</button>
          </li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Explorez l’IA de demain</h1>
          <p>Des audits cybersécurité automatisés, rapides et intelligents</p>
          <button className="cta-btn" onClick={() => navigate('/paiement24')}>Demander un audit IA</button>
        </div>
        <div className="hero-visual" />
      </header>

      <section className="section" id="fonctionnement">
        <h2>Fonctionnement</h2>
        <div className="steps">
          <div className="step">1. Demande d’audit</div>
          <div className="step">2. Analyse IA</div>
          <div className="step">3. Rapport PDF personnalisé</div>
        </div>
      </section>

      <section className="section" id="offres">
        <h2>Nos Offres</h2>
        <div className="cards">
          <div className="card">
            <h3>Audit 24H</h3>
            <p className="price">49€</p>
            <button onClick={() => navigate('/paiement24')}>Choisir cette offre</button>
          </div>
          <div className="card">
            <h3>Audit 48H</h3>
            <p className="price">39€</p>
            <button onClick={() => navigate('/paiement48')}>Choisir cette offre</button>
          </div>
        </div>
      </section>

      <section className="section" id="technologie">
        <h2>Technologie IA</h2>
        <p>Notre moteur d’analyse s’appuie sur des modèles d’intelligence artificielle avancés, spécialisés en cybersécurité.</p>
        <ul className="tech-icons">
          <li>🔍 Analyse avancée</li>
          <li>🛡️ Détection de failles</li>
          <li>📄 Rapport PDF automatique</li>
        </ul>
      </section>

      <section className="section" id="faq">
        <h2>FAQ</h2>
        <details className="faq-item">
          <summary>Que contient le rapport d’audit ?</summary>
          <p>Un score de sécurité, une liste de failles, et des recommandations détaillées générées par notre IA.</p>
        </details>
        <details className="faq-item">
          <summary>Comment est généré le rapport ?</summary>
          <p>Grâce à une IA propriétaire entraînée sur des millions de données cybersécurité et audit web.</p>
        </details>
      </section>

      <footer className="footer">
        <p>© 2025 VELNOR. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#offres">Offres</a>
          <a href="#faq">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
