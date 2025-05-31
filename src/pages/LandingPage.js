// src/pages/LandingPage.js
import React, { useEffect, useRef, useState } from 'react';
import {
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
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
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const miniCtaRef = useRef(null);
  const funcRef = useRef(null);
  const techRef = useRef(null);
  const offersRef = useRef(null);
  const testiRef = useRef(null);
  const faqRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Gestion de l'affichage du loader
  useEffect(() => {
    // Simule un court délai de chargement (ici 1s), vous pouvez remplacer par un vrai check d'API si besoin
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => setLoading(false),
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // SEO & meta tags
    document.title = 'VELNOR – IA CyberSécurité Premium & Futuriste';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        "VELNOR : audits cybersécurité pilotés par IA, rapport PDF premium, score de sécurité détaillé, livré en 24h ou 48h."
      );
    }

    // Animation Hero au chargement
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      delay: 1.1,
    });

    // Glow oscillant pour le titre
    gsap.to(heroTitleRef.current, {
      textShadow:
        '0 0 32px var(--blue-main), 0 0 16px var(--purple-main)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 2.5,
      delay: 1.6,
    });

    // Pulse pour le mini-CTA
    gsap.fromTo(
      miniCtaRef.current,
      { boxShadow: '0 0 16px var(--blue-main)' },
      {
        boxShadow: '0 0 32px var(--purple-main)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 4,
        delay: 2.5,
      }
    );

    // Animation scroll pour les sections
    const animateSection = (el) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    };

    animateSection(funcRef.current);
    animateSection(techRef.current);
    animateSection(offersRef.current);
    animateSection(testiRef.current);
    animateSection(faqRef.current);
  }, []);

  // Smooth scroll et fermeture du menu mobile
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
      {/* ====== LOADER ====== */}
      {loading && (
        <div ref={loaderRef} className="loader-overlay">
          <div className="loader-spinner" aria-label="Chargement"></div>
        </div>
      )}

      <GalaxyParticles />

      {/* ================= NAVBAR ================= */}
      <nav
        className="velnor-navbar"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="velnor-logo">VELNOR</div>
        <div className={`velnor-menu ${menuOpen ? 'open' : ''}`}>
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="Aller à l’accueil"
          >
            Accueil
          </a>
          <a
            href="#fonctionnement"
            onClick={(e) => handleNavClick(e, '#fonctionnement')}
            aria-label="Aller à Fonctionnement"
          >
            Fonctionnement
          </a>
          <a
            href="#technologie"
            onClick={(e) => handleNavClick(e, '#technologie')}
            aria-label="Aller à Technologie"
          >
            Technologie
          </a>
          <a
            href="#offres"
            onClick={(e) => handleNavClick(e, '#offres')}
            aria-label="Aller à Offres"
          >
            Offres
          </a>
          <a
            href="#temoignages"
            onClick={(e) => handleNavClick(e, '#temoignages')}
            aria-label="Aller à Témoignages"
          >
            Témoignages
          </a>
          <a
            href="#faq"
            onClick={(e) => handleNavClick(e, '#faq')}
            aria-label="Aller à FAQ"
          >
            FAQ
          </a>
          <button
            className="admin-btn"
            onClick={() => window.location.href = '/admin-login'}
            aria-label="Aller à la page d’administration"
          >
            Admin
          </button>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      <main>
        {/* ================= HERO ================= */}
        <section
          id="hero"
          className="hero"
          ref={heroRef}
          role="banner"
          aria-label="Section d’introduction"
        >
          <div className="hero-content">
            <h1
              className="hero-title"
              ref={heroTitleRef}
              aria-label="L’IA qui audite votre cybersécurité"
            >
              L’IA qui audite<br />
              votre cybersécurité
            </h1>
            <p className="hero-subtitle">
              Audits automatisés &bull; Rapport PDF complet &bull; Badge de confiance.
              <br />
              Livraison en 24h ou 48h.
            </p>
            <button
              className="cta-btn"
              onClick={() => document.querySelector('#offres')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Demander un audit IA"
            >
              Demander un audit IA
            </button>
          </div>

          {/* ===== MINI-CTA (sous-hero, position fixed en bas) ===== */}
          <button
            className="mini-cta"
            ref={miniCtaRef}
            onClick={() => document.querySelector('#fonctionnement')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Voir comment ça fonctionne"
          >
            Comment ça fonctionne ?
          </button>
        </section>

        {/* ================ FONCTIONNEMENT ================ */}
        <section
          id="fonctionnement"
          className="section fonctionnement"
          ref={funcRef}
          role="region"
          aria-labelledby="fonctionnement-title"
        >
          <h2 id="fonctionnement-title" className="section-title">
            Fonctionnement
            <div className="underline"></div>
          </h2>
          <div className="steps-container">
            <div className="step-card">
              <FaShieldAlt className="step-icon" aria-hidden="true" />
              <p>Entrez l’URL de votre site</p>
            </div>
            <div className="step-card">
              <FaRocket className="step-icon" aria-hidden="true" />
              <p>L’IA scanne & identifie les failles</p>
            </div>
            <div className="step-card">
              <FaStar className="step-icon" aria-hidden="true" />
              <p>Recevez un PDF premium en 24h ou 48h</p>
            </div>
          </div>
        </section>

        {/* ================ TECHNOLOGIE ================ */}
        <section
          id="technologie"
          className="section technologie"
          ref={techRef}
          role="region"
          aria-labelledby="technologie-title"
        >
          <h2 id="technologie-title" className="section-title">
            Technologie
            <div className="underline"></div>
          </h2>
          <div className="tech-container">
            <div className="tech-card">
              <GiSpaceship className="tech-icon" aria-hidden="true" />
              <h3>Analyse AI</h3>
              <p>Algorithmes de deep learning pour détecter les vulnérabilités.</p>
            </div>
            <div className="tech-card">
              <MdSecurity className="tech-icon" aria-hidden="true" />
              <h3>Scannage avancé</h3>
              <p>Détection statique & dynamique de points faibles.</p>
            </div>
            <div className="tech-card">
              <FaChartBar className="tech-icon" aria-hidden="true" />
              <h3>Rapport détaillé</h3>
              <p>Visualisation graphique, score de sécurité et recommandations.</p>
            </div>
          </div>
        </section>

        {/* ================ OFFRES ================ */}
        <section
          id="offres"
          className="section offres"
          ref={offersRef}
          role="region"
          aria-labelledby="offres-title"
        >
          <h2 id="offres-title" className="section-title">
            Offres
            <div className="underline"></div>
          </h2>
          <div className="offers-container">
            <div className="offer-card encadre-blue">
              <h3>Audit IA – 48h</h3>
              <p className="offer-price">499&nbsp;€&nbsp;HT</p>
              <ul className="offer-features">
                <li>
                  <AiOutlineFilePdf className="bullet-icon" aria-hidden="true" />
                  <span>Rapport PDF complet</span>
                </li>
                <li>
                  <BsLightningFill className="bullet-icon" aria-hidden="true" />
                  <span>Livraison garantie 48h</span>
                </li>
                <li>
                  <FiMail className="bullet-icon" aria-hidden="true" />
                  <span>Envoi autom. par e-mail</span>
                </li>
              </ul>
              <button
                className="offer-btn"
                onClick={() => window.location.href = '/paiement-48h'}
                aria-label="Choisir Audit IA 48h"
              >
                Choisir
              </button>
            </div>
            <div className="offer-card encadre-purple">
              <h3>Audit Express – 24h</h3>
              <p className="offer-price">699&nbsp;€&nbsp;HT</p>
              <ul className="offer-features">
                <li>
                  <BsLightningFill className="bullet-icon" aria-hidden="true" />
                  <span>Traitement prioritaire</span>
                </li>
                <li>
                  <AiOutlineFilePdf className="bullet-icon" aria-hidden="true" />
                  <span>Rapport & Badge sécurité</span>
                </li>
                <li>
                  <FiMail className="bullet-icon" aria-hidden="true" />
                  <span>Livraison garantie 24h</span>
                </li>
              </ul>
              <button
                className="offer-btn"
                onClick={() => window.location.href = '/paiement-24h'}
                aria-label="Choisir Audit Express 24h"
              >
                Choisir
              </button>
            </div>
          </div>
        </section>

        {/* ================ TÉMOIGNAGES ================ */}
        <section
          id="temoignages"
          className="section temoignages"
          ref={testiRef}
          role="region"
          aria-labelledby="temoignages-title"
        >
          <h2 id="temoignages-title" className="section-title">
            Témoignages
            <div className="underline"></div>
          </h2>
          <div className="testi-container">
            <div className="testi-card">
              <p className="testi-text">
                “Velnor m’a permis de sécuriser mon business en un temps record, avec un rapport limpide.”
              </p>
              <p className="testi-author">— Paul D., CTO Startup SaaS</p>
            </div>
            <div className="testi-card">
              <p className="testi-text">
                “Audit premium, retour en 24h, recommandations actionnables. Vraiment pro.”
              </p>
              <p className="testi-author">— Sarah K., Freelance Web</p>
            </div>
            <div className="testi-card">
              <p className="testi-text">
                “Le rapport PDF est digne d’un cabinet de cybersécurité à 2000 €. Bluffant.”
              </p>
              <p className="testi-author">— Entreprise Turing (PME)</p>
            </div>
          </div>
        </section>

        {/* ================ FAQ ================ */}
        <section
          id="faq"
          className="section faq"
          ref={faqRef}
          role="region"
          aria-labelledby="faq-title"
        >
          <h2 id="faq-title" className="section-title">
            FAQ
            <div className="underline"></div>
          </h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary>Qu’est-ce qu’un audit IA ?</summary>
              <p>
                Un audit piloté par IA analyse automatiquement votre site, détecte points faibles
                et génère un rapport PDF détaillé pour vos équipes techniques.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quelle différence entre 24h et 48h ?</summary>
              <p>
                L’offre 24h inclut un badge sécurité premium & un traitement prioritaire. L’offre 48h reste
                complète mais sans badge et délai plus long.
              </p>
            </details>
            <details className="faq-item">
              <summary>Puis-je accéder à un historique des audits ?</summary>
              <p>
                Oui, via votre espace client (backend), vous retrouverez tous vos audits, rapports et badges générés.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer" role="contentinfo">
        <p>© 2025 Velnor – All rights reserved.</p>
        <div className="footer-links">
          <a href="/mentions-legales" aria-label="Mentions légales">Mentions légales</a>
          <span> | </span>
          <a href="/privacy" aria-label="Politique de confidentialité">Politique de confidentialité</a>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
