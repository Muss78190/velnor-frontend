// src/pages/LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import { FaShieldAlt, FaRocket, FaStar, FaBars, FaTimes } from 'react-icons/fa';
import { GiSpaceship } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import { FaChartBar } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsLightningFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Animation du Hero au chargement
    gsap.from(heroRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: 'power3.out',
    });

    // Animation scroll pour les sections
    const animateSection = (el, delay = 0) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    };

    animateSection(funcRef.current, 0.1);
    animateSection(techRef.current, 0.1);
    animateSection(offersRef.current, 0.1);
    animateSection(testiRef.current, 0.1);
    animateSection(faqRef.current, 0.1);
  }, []);

  // Gestion du click sur un lien du menu (fermeture en mobile)
  const handleNavClick = (e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <GalaxyParticles />

      {/* ========= NAVBAR ========= */}
      <nav className="velnor-navbar">
        <div className="velnor-logo">VELNOR</div>
        <div
          className={`velnor-menu ${menuOpen ? 'open' : ''}`}
        >
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Accueil</a>
          <a href="#fonctionnement" onClick={(e) => handleNavClick(e, '#fonctionnement')}>Fonctionnement</a>
          <a href="#technologie" onClick={(e) => handleNavClick(e, '#technologie')}>Technologie</a>
          <a href="#offres" onClick={(e) => handleNavClick(e, '#offres')}>Offres</a>
          <a href="#temoignages" onClick={(e) => handleNavClick(e, '#temoignages')}>Témoignages</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
          <button className="admin-btn" onClick={() => window.location.href = '/admin-login'}>
            Admin
          </button>
        </div>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* ========= HERO ========= */}
      <section id="hero" className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1 className="hero-title">
            L’IA qui audite<br />
            votre cybersécurité
          </h1>
          <p className="hero-subtitle">
            Audits automatisés &nbsp;&bull;&nbsp; Rapport PDF complet &nbsp;&bull;&nbsp; Badge de confiance.<br />
            Livraison en 24h ou 48h.
          </p>
          <button className="cta-btn" onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}>
            Demander un audit IA
          </button>
        </div>
      </section>

      {/* ====== FONCTIONNEMENT ====== */}
      <section id="fonctionnement" className="section fonctionnement" ref={funcRef}>
        <h2 className="section-title">
          Fonctionnement
          <div className="underline"></div>
        </h2>
        <div className="steps-container">
          <div className="step-card">
            <FaShieldAlt className="step-icon" />
            <p>Entrez l’URL de votre site</p>
          </div>
          <div className="step-card">
            <FaRocket className="step-icon" />
            <p>L’IA scanne & identifie les failles</p>
          </div>
          <div className="step-card">
            <FaStar className="step-icon" />
            <p>Recevez un PDF premium en 24h ou 48h</p>
          </div>
        </div>
      </section>

      {/* ====== TECHNOLOGIE ====== */}
      <section id="technologie" className="section technologie" ref={techRef}>
        <h2 className="section-title">
          Technologie
          <div className="underline"></div>
        </h2>
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

      {/* ====== OFFRES ====== */}
      <section id="offres" className="section offres" ref={offersRef}>
        <h2 className="section-title">
          Offres
          <div className="underline"></div>
        </h2>
        <div className="offers-container">
          <div className="offer-card">
            <h3>Audit IA – 48h</h3>
            <p className="offer-price">499 € HT</p>
            <ul className="offer-features">
              <li><AiOutlineFilePdf className="bullet-icon" /> Rapport PDF complet</li>
              <li><BsLightningFill className="bullet-icon" /> Livraison garantie 48h</li>
              <li><FiMail className="bullet-icon" /> Envoi autom. par e-mail</li>
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
              <li><AiOutlineFilePdf className="bullet-icon" /> Rapport & Badge sécurité</li>
              <li><FiMail className="bullet-icon" /> Livraison garantie 24h</li>
            </ul>
            <button className="offer-btn" onClick={() => window.location.href = '/paiement-24h'}>
              Choisir
            </button>
          </div>
        </div>
      </section>

      {/* ====== TÉMOIGNAGES ====== */}
      <section id="temoignages" className="section temoignages" ref={testiRef}>
        <h2 className="section-title">
          Témoignages
          <div className="underline"></div>
        </h2>
        <div className="testi-container">
          <div className="testi-card">
            <p className="testi-text">“Velnor m’a permis de sécuriser mon business en un temps record, avec un rapport limpide.”</p>
            <p className="testi-author">— Paul D., CTO Startup SaaS</p>
          </div>
          <div className="testi-card">
            <p className="testi-text">“Audit premium, retour en 24h, recommandations actionnables. Vraiment pro.”</p>
            <p className="testi-author">— Sarah K., Freelance Web</p>
          </div>
          <div className="testi-card">
            <p className="testi-text">“Le rapport PDF est digne d’un cabinet de cybersécurité à 2000 €. Bluffant.”</p>
            <p className="testi-author">— Entreprise Turing (PME)</p>
          </div>
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section id="faq" className="section faq" ref={faqRef}>
        <h2 className="section-title">
          FAQ
          <div className="underline"></div>
        </h2>
        <div className="faq-container">
          <details className="faq-item">
            <summary>Qu’est-ce qu’un audit IA&nbsp;?</summary>
            <p>
              Un audit piloté par IA analyse automatiquement votre site, détecte points faibles
              et génère un rapport PDF détaillé pour vos équipes techniques.
            </p>
          </details>
          <details className="faq-item">
            <summary>Quelle différence entre 24h et 48h&nbsp;?</summary>
            <p>
              L’offre 24h inclut un badge sécurité premium & un traitement prioritaire. L’offre 48h reste
              complète mais sans badge et délai plus long.
            </p>
          </details>
          <details className="faq-item">
            <summary>Puis-je accéder à un historique des audits&nbsp;?</summary>
            <p>
              Oui, via votre espace client (backend), vous retrouverez tous vos audits, rapports et badges générés.
            </p>
          </details>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="footer">
        <p>© 2025 Velnor – All rights reserved.</p>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <span> | </span>
          <a href="/privacy">Politique de confidentialité</a>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
