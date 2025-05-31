// src/pages/LandingPage.js
import React, { useEffect, useRef } from 'react';
import { FaShieldAlt, FaRocket, FaChartBar, FaStar } from 'react-icons/fa';
import { GiSpaceship } from 'react-icons/gi';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { MdSecurity } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalaxyParticles from './GalaxyParticles';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const funcRef = useRef(null);
  const techRef = useRef(null);
  const offersRef = useRef(null);
  const testiRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const animateSection = (element) => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    };

    animateSection(heroRef.current);
    animateSection(funcRef.current);
    animateSection(techRef.current);
    animateSection(offersRef.current);
    animateSection(testiRef.current);
    animateSection(faqRef.current);
  }, []);

  return (
    <>
      <GalaxyParticles />
      <nav className="velnor-navbar">
        <div className="velnor-logo">VELNOR</div>
        <ul className="velnor-menu">
          <li><a href="#hero">Accueil</a></li>
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#technologie">Technologie</a></li>
          <li><a href="#offres">Offres</a></li>
          <li><a href="#temoignages">Témoignages</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <button className="admin-btn" onClick={() => window.location.href = '/admin-login'}>
          Admin
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">L’IA qui audite votre cybersécurité</h1>
          <p className="hero-subtitle">
            Audits automatisés, rapport PDF complet, badge de confiance. En 24h ou 48h.
          </p>
          <button className="cta-btn" onClick={() => window.location.href = '#offres'}>
            Demander un audit IA
          </button>
        </div>
      </section>

      {/* ================ FONCTIONNEMENT ================ */}
      <section id="fonctionnement" className="section fonctionnement" ref={funcRef}>
        <h2 className="section-title">Fonctionnement</h2>
        <div className="steps-container">
          <div className="step-card">
            <FaShieldAlt className="step-icon" />
            <span>1. Entrez l’URL de votre site</span>
          </div>
          <div className="step-card">
            <FaRocket className="step-icon" />
            <span>2. L’IA scanne et identifie les failles</span>
          </div>
          <div className="step-card">
            <FaStar className="step-icon" />
            <span>3. Recevez un PDF premium en 24h ou 48h</span>
          </div>
        </div>
      </section>

      {/* ================ TECHNOLOGIE ================ */}
      <section id="technologie" className="section technologie" ref={techRef}>
        <h2 className="section-title">Technologie</h2>
        <div className="tech-container">
          <div className="tech-card">
            <GiSpaceship className="tech-icon" />
            <h3>Analyse AI</h3>
            <p>Algorithmes de deep learning pour détecter les vulnérabilités.</p>
          </div>
          <div className="tech-card">
            <MdSecurity className="tech-icon" />
            <h3>Scannage avancé</h3>
            <p>Détection statique & dynamique de points faibles.</p>
          </div>
          <div className="tech-card">
            <FaChartBar className="tech-icon" />
            <h3>Rapport détaillé</h3>
            <p>Visualisation graphique, score de sécurité et recommandations.</p>
          </div>
        </div>
      </section>

      {/* ================= OFFRES ================ */}
      <section id="offres" className="section offres" ref={offersRef}>
        <h2 className="section-title">Offres</h2>
        <div className="offers-container">
          <div className="offer-card">
            <h3>Audit IA – 48h</h3>
            <p className="offer-price">499 € HT</p>
            <ul className="offer-features">
              <li><AiOutlineFilePdf className="bullet-icon" /> Rapport PDF complet</li>
              <li><BsLightningFill className="bullet-icon" /> Livraison garantie 48h</li>
              <li><FiMail className="bullet-icon" /> Envoi automatique par e-mail</li>
            </ul>
            <button className="offer-btn" onClick={() => window.location.href = '/paiement-48h'}>
              Choisir
            </button>
          </div>
          <div className="offer-card active">
            <h3>Audit Express – 24h</h3>
            <p className="offer-price">699 € HT</p>
            <ul className="offer-features">
              <li><BsLightningFill className="bullet-icon" /> Traitement prioritaire</li>
              <li><AiOutlineFilePdf className="bullet-icon" /> Rapport + Badge sécurité</li>
              <li><FiMail className="bullet-icon" /> Livraison garantie 24h</li>
            </ul>
            <button className="offer-btn" onClick={() => window.location.href = '/paiement-24h'}>
              Choisir
            </button>
          </div>
        </div>
      </section>

      {/* ================ TÉMOIGNAGES ================ */}
      <section id="temoignages" className="section temoignages" ref={testiRef}>
        <h2 className="section-title">Témoignages</h2>
        <div className="testi-container">
          <div className="testi-card">
            <p className="testi-text">“Velnor m'a permis de sécuriser mon business en un temps record, avec un rapport limpide.”</p>
            <p className="testi-author">— Paul D., CTO Startup SaaS</p>
          </div>
          <div className="testi-card">
            <p className="testi-text">“Audit premium, retour en 24h, des recommandations actionnables. Vraiment pro.”</p>
            <p className="testi-author">— Sarah K., Freelance Web</p>
          </div>
          <div className="testi-card">
            <p className="testi-text">“Le rapport PDF est digne d’un cabinet de cybersécurité à 2000 €. Bluffant.”</p>
            <p className="testi-author">— Entreprise Turing (PME)</p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================ */}
      <section id="faq" className="section faq" ref={faqRef}>
        <h2 className="section-title">FAQ</h2>
        <div className="faq-container">
          <details className="faq-item">
            <summary>Qu’est-ce qu’un audit IA ?</summary>
            <p>Un audit piloté par IA consiste à analyser automatiquement votre site/webapp, détecter les points faibles puis générer un rapport PDF détaillé.</p>
          </details>
          <details className="faq-item">
            <summary>Quelle différence entre 24h et 48h ?</summary>
            <p>L’offre 24h inclut un badge sécurité premium et un traitement prioritaire. L’offre 48h reste très complet mais sans badge et délai plus long.</p>
          </details>
          <details className="faq-item">
            <summary>Puis-je accéder à un historique des audits ?</summary>
            <p>Oui, via votre espace client (Backend) vous retrouverez tous vos audits, rapports et badges générés.</p>
          </details>
        </div>
      </section>

      {/* ================ FOOTER ================ */}
      <footer className="footer">
        <p>© 2025 Velnor – All rights reserved.</p>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>|
          <a href="/privacy">Politique de confidentialité</a>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
