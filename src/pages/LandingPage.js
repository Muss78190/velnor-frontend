import React, { useEffect, useRef, useState } from 'react';
import {
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaBars,
  FaTimes,
  FaChartBar,
} from 'react-icons/fa';
import { GiSpaceship } from 'react-icons/gi';
import { MdSecurity } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalaxyParticles from './GalaxyParticles';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  // Références pour ScrollTrigger
  const heroRef = useRef(null);
  const funcRef = useRef(null);
  const techRef = useRef(null);
  const offersRef = useRef(null);
  const testiRef = useRef(null);
  const faqRef = useRef(null);
  const heroTitleRef = useRef(null);

  // Gestion menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Loader (1s)
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => setLoading(false),
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Animations GSAP + SEO
  useEffect(() => {
    document.title = 'VELNOR – IA Cybersécurité Premium & Futuriste';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'VELNOR : audits IA haut de gamme, rapport PDF détaillé, badge de confiance, livré en 24h ou 48h.'
      );
    }

    // Animation du Hero
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      delay: 1,
    });
    // Effet “pulse” sur le titre
    gsap.to(heroTitleRef.current, {
      textShadow: '0 0 20px var(--blue-main)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 3,
      delay: 2,
    });

    // ScrollTrigger sur chaque section
    const animateSection = (el) => {
      gsap.from(el, {
        y: 30,
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
    if (funcRef.current) animateSection(funcRef.current);
    if (techRef.current) animateSection(techRef.current);
    if (offersRef.current) animateSection(offersRef.current);
    if (testiRef.current) animateSection(testiRef.current);
    if (faqRef.current) animateSection(faqRef.current);
  }, []);

  // Clic sur un lien de nav → scroll smooth + fermeture du menu
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
      {/* ================= LOADER ================= */}
      {loading && (
        <div ref={loaderRef} className="loader-overlay">
          <div className="loader-spinner" aria-label="Chargement"></div>
        </div>
      )}

      {/* ================= FOND PARTICULES ================= */}
      <GalaxyParticles />

      {/* ================= NAVBAR ================= */}
      <nav className="navbar" aria-label="Navigation principale">
        <div className="logo">VELNOR</div>
        <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
            Accueil
          </a>
          <a
            href="#fonctionnement"
            onClick={(e) => handleNavClick(e, '#fonctionnement')}
          >
            Fonctionnement
          </a>
          <a
            href="#technologie"
            onClick={(e) => handleNavClick(e, '#technologie')}
          >
            Technologie
          </a>
          <a href="#offres" onClick={(e) => handleNavClick(e, '#offres')}>
            Offres
          </a>
          <a
            href="#temoignages"
            onClick={(e) => handleNavClick(e, '#temoignages')}
          >
            Témoignages
          </a>
          <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>
            FAQ
          </a>
          <button
            className="admin-btn"
            onClick={() => (window.location.href = '/admin')}
          >
            Admin
          </button>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? (
            <FaTimes aria-hidden="true" />
          ) : (
            <FaBars aria-hidden="true" />
          )}
        </button>
      </nav>

      <main>
        {/* ================= HERO ================= */}
        <section
          id="hero"
          className="hero"
          ref={heroRef}
          role="banner"
          aria-label="Section Accueil"
        >
          <div className="hero-content">
            <h1
              className="hero-title"
              ref={heroTitleRef}
              aria-label="L’IA qui audite votre cybersécurité"
            >
              L’IA qui audite <br />
              votre cybersécurité
            </h1>
            <p className="hero-subtitle">
              Audits automatisés &bull; Rapport PDF détaillé &bull; Badge de
              confiance <br />
              Livraison garantie en <strong>24 h</strong> ou <strong>48 h</strong>
            </p>

            {/* INTRODUCTION COURTE */}
            <p className="hero-intro">
              VELNOR propose un audit full-stack de votre site web avec notre IA
              de pointe : détection automatique des vulnérabilités, génération
              d’un rapport PDF complet et délivrance d’un badge de confiance.
              En 24 h ou 48 h, soyez certain de la sécurité de votre
              infrastructure.
            </p>

            <button
              className="cta-btn"
              onClick={() =>
                document
                  .querySelector('#offres')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Demander un audit IA
            </button>
          </div>
        </section>

        {/* ================= FONCTIONNEMENT ================= */}
        <section
          id="fonctionnement"
          className="section fonctionnement"
          ref={funcRef}
          role="region"
          aria-labelledby="fonctionnement-title"
        >
          <h2 id="fonctionnement-title" className="section-title">
            Fonctionnement
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
              <p>Recevez un PDF premium en 24 h ou 48 h</p>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGIE ================= */}
        <section
          id="technologie"
          className="section technologie"
          ref={techRef}
          role="region"
          aria-labelledby="technologie-title"
        >
          <h2 id="technologie-title" className="section-title">
            Technologie
          </h2>
          <div className="tech-container">
            <div className="tech-card">
              <GiSpaceship className="tech-icon" aria-hidden="true" />
              <h3>Analyse AI</h3>
              <p>Deep learning pour détecter les vulnérabilités.</p>
            </div>
            <div className="tech-card">
              <MdSecurity className="tech-icon" aria-hidden="true" />
              <h3>Scannage avancé</h3>
              <p>Détection statique & dynamique de failles.</p>
            </div>
            <div className="tech-card">
              <FaChartBar className="tech-icon" aria-hidden="true" />
              <h3>Rapport détaillé</h3>
              <p>Score, graphiques & recommandations claires.</p>
            </div>
          </div>
        </section>

        {/* ================= OFFRES ================= */}
        <section
          id="offres"
          className="section offres"
          ref={offersRef}
          role="region"
          aria-labelledby="offres-title"
        >
          <h2 id="offres-title" className="section-title">
            Offres
          </h2>
          <div className="offers-container">
            {/* Carte 48 h */}
            <div className="offer-card">
              <h3>Audit IA – 48 h</h3>
              <div className="price">499 € HT</div>
              <ul className="features">
                <li>Rapport PDF détaillé</li>
                <li>Livraison garantie 48 h</li>
                <li>Envoi automatique par e-mail</li>
              </ul>
              <button
                className="offer-btn"
                onClick={() =>
                  (window.location.href = '/paiement-48h')
                }
              >
                Choisir
              </button>
            </div>

            {/* Carte 24 h */}
            <div className="offer-card">
              <h3>Audit IA – 24 h</h3>
              <div className="price">699 € HT</div>
              <ul className="features">
                <li>Traitement prioritaire</li>
                <li>Rapport & Badge</li>
                <li>Livraison garantie 24 h</li>
              </ul>
              <button
                className="offer-btn"
                onClick={() =>
                  (window.location.href = '/paiement-24h')
                }
              >
                Choisir
              </button>
            </div>
          </div>
        </section>

        {/* ================= TÉMOIGNAGES ================= */}
        <section
          id="temoignages"
          className="section temoignages"
          ref={testiRef}
          role="region"
          aria-labelledby="temoignages-title"
        >
          <h2 id="temoignages-title" className="section-title">
            Témoignages
          </h2>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <p className="testimonial-text">
                “Velnor m’a permis de sécuriser mon business en un temps record,
                avec un rapport limpide.”
              </p>
              <p className="author">— Paul D., CTO Startup SaaS</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                “Audit premium, retour en 24 h, recommandations actionnables.
                Vraiment pro.”
              </p>
              <p className="author">— Sarah K., Freelance Web</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                “Le rapport PDF est digne d’un cabinet de cybersécurité à 2000 €.
                Bluffant.”
              </p>
              <p className="author">— Entreprise Turing (PME)</p>
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section
          id="faq"
          className="section faq"
          ref={faqRef}
          role="region"
          aria-labelledby="faq-title"
        >
          <h2 id="faq-title" className="section-title">
            FAQ
          </h2>
          <div className="faq-container">
            <details className="faq-item">
              <summary>Qu’est-ce qu’un audit IA ?</summary>
              <p>
                Un audit piloté par notre IA analyse automatiquement votre site,
                détecte les vulnérabilités et génère un rapport PDF très détaillé
                pour vos équipes techniques.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quelle différence entre 24 h et 48 h ?</summary>
              <p>
                L’offre 24 h inclut un badge sécurité premium & un traitement
                prioritaire. L’offre 48 h reste complète mais sans badge et un
                délai de livraison légèrement plus long.
              </p>
            </details>
            <details className="faq-item">
              <summary>Puis-je vous faire confiance ?</summary>
              <p>
                Oui, protéger votre infrastructure est notre priorité : notre IA
                scrute chaque faille pour vous garantir la meilleure tranquillité
                d’esprit.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer" role="contentinfo">
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
