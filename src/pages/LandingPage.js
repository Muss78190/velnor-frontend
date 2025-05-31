import React, { useEffect } from 'react';
import '../styles/landingpage.css';
import GalaxyParticles from './GalaxyParticles';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  useEffect(() => {
    gsap.from(".hero", {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.utils.toArray(".section").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="landing-wrapper">
      <GalaxyParticles />
      <nav className="navbar">
        <div className="logo">VELNOR</div>
        <ul className="nav-links">
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#technologie">Technologie</a></li>
          <li><a href="#offres">Offres</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a className="admin-btn" href="/adminlogin">Admin</a>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Explorez l’IA de demain</h1>
          <p>Des audits cybersécurité automatisés, rapides et intelligents</p>
          <a className="cta-btn" href="#offres">Demander un audit IA</a>
        </div>
      </header>

      <section id="fonctionnement" className="section fonctionnement">
        <h2>Fonctionnement ⚙️</h2>
        <div className="steps">
          <div className="step">1. Entrez l’URL de votre site</div>
          <div className="step">2. L’IA scanne et identifie les failles</div>
          <div className="step">3. Recevez un PDF premium en 24h ou 48h</div>
        </div>
      </section>

      <section id="technologie" className="section technologie">
        <h2>Technologie IA 🤖</h2>
        <p>Notre moteur d’audit utilise des algorithmes propriétaires combinés à l’IA pour détecter les vulnérabilités en profondeur et fournir des recommandations exploitables immédiatement.</p>
      </section>

      <section id="offres" className="section offres">
        <h2>Offres</h2>
        <div className="cards">
          <div className="card">
            <h3>Audit IA – 48h</h3>
            <p>499€ HT<br/>Rapport complet, score IA, recommandations personnalisées</p>
            <a href="/paiement-48h" className="btn-offre">Choisir</a>
          </div>
          <div className="card">
            <h3>Audit Express – 24h</h3>
            <p>699€ HT<br/>Audit prioritaire, badge sécurité, livraison rapide</p>
            <a href="/paiement-24h" className="btn-offre">Choisir</a>
          </div>
        </div>
      </section>

      <footer className="section footer">
        <p>© 2025 VELNOR — L’IA de cybersécurité d’élite.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
