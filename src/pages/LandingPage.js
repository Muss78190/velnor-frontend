// src/pages/LandingPage.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiCog } from 'react-icons/hi';
import { FaRocket, FaShieldAlt, FaChartLine, FaStar } from 'react-icons/fa';
import { MdSecurity, MdTimeline } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalaxyParticles from './GalaxyParticles';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  // Références aux sections pour GSAP
  const sectionsRef = useRef([]);
  const heroRef = useRef(null);
  const buttonRef = useRef(null);

  sectionsRef.current = [];
  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animation du Hero (texte + bouton)
    gsap.fromTo(
      heroRef.current.querySelector('h1'),
      { autoAlpha: 0, y: 60 },
      { duration: 1.2, autoAlpha: 1, y: 0, ease: 'power3.out', delay: 0.3 }
    );
    gsap.fromTo(
      heroRef.current.querySelector('p'),
      { autoAlpha: 0, y: 40 },
      { duration: 1, autoAlpha: 1, y: 0, ease: 'power3.out', delay: 0.6 }
    );
    gsap.fromTo(
      buttonRef.current,
      { autoAlpha: 0, scale: 0.8 },
      {
        duration: 1,
        autoAlpha: 1,
        scale: 1,
        ease: 'elastic.out(1, 0.4)',
        delay: 0.9,
      }
    );

    // Animation au scroll pour chaque section
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 80 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Fond “Galaxy Particles” */}
      <GalaxyParticles />

      {/* Overlay nuageux très subtile */}
      <div className="overlay"></div>

      <div className="velnor-landing">
        {/* ===== NAVBAR ===== */}
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
          <Link to="/admin" className="admin-btn-navbar">Admin</Link>
        </nav>

        {/* ===== HERO ===== */}
        <section className="hero" id="hero" ref={heroRef}>
          <div className="hero-content">
            <h1>L’IA qui audite votre cybersécurité</h1>
            <p>Audit automatisé, rapport PDF complet, badge de confiance. En 24h ou 48h.</p>
            <Link to="/paiement-24h">
              <button className="cta-btn" ref={buttonRef}>Demander un audit IA</button>
            </Link>
          </div>
        </section>

        {/* ===== SECTION FONCTIONNEMENT ===== */}
        <section className="section fonctionnement" id="fonctionnement" ref={addToRefs}>
          <h2>Fonctionnement</h2>
          <div className="steps">
            <div className="step">
              <MdSecurity className="step-icon" />
              <div className="step-text">
                <strong>1. Entrez l’URL de votre site</strong>
              </div>
            </div>
            <div className="step">
              <MdTimeline className="step-icon" />
              <div className="step-text">
                <strong>2. L’IA scanne et détecte les failles</strong>
              </div>
            </div>
            <div className="step">
              <FaStar className="step-icon" />
              <div className="step-text">
                <strong>3. Recevez un PDF premium en 24h ou 48h</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION TECHNOLOGIE ===== */}
        <section className="section technologie" id="technologie" ref={addToRefs}>
          <h2>Technologie</h2>
          <div className="tech-cards">
            <div className="tech-card">
              <FaRocket className="tech-icon" />
              <h4>Analyse AI</h4>
              <p>Deep learning qui scanne chaque ligne de code et détecte les vulnérabilités.</p>
            </div>
            <div className="tech-card">
              <FaShieldAlt className="tech-icon" />
              <h4>Scannage Avancé</h4>
              <p>Analyse statique & dynamique, tests de pénétration automatisés.</p>
            </div>
            <div className="tech-card">
              <FaChartLine className="tech-icon" />
              <h4>Rapport Détaillé</h4>
              <p>Visualisation graphique, score de sécurité, recommandations personnalisées.</p>
            </div>
          </div>
        </section>

        {/* ===== SECTION OFFRES ===== */}
        <section className="section offres" id="offres" ref={addToRefs}>
          <h2>Offres</h2>
          <div className="pricing-cards">
            <div className="card">
              <h4>Audit IA – 48h</h4>
              <p className="price">499€ HT</p>
              <ul className="features">
                <li>📄 Rapport PDF complet</li>
                <li>⚡ Livraison assurée en 48h</li>
                <li>📬 Envoi direct par e-mail</li>
              </ul>
              <Link to="/paiement-48h">
                <button className="card-btn">Choisir</button>
              </Link>
            </div>
            <div className="card popular">
              <h4>Audit Express – 24h</h4>
              <p className="price">699€ HT</p>
              <ul className="features">
                <li>⚡ Traitement prioritaire</li>
                <li>📄 Rapport + Badge sécurité premium</li>
                <li>📬 Livraison en 24h garantie</li>
              </ul>
              <Link to="/paiement-24h">
                <button className="card-btn">Choisir</button>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== SECTION TÉMOIGNAGES ===== */}
        <section className="section temoignages" id="temoignages" ref={addToRefs}>
          <h2>Témoignages</h2>
          <div className="testimonials-slider">
            <div className="testimonial-card">
              <p className="testimonial-text">
                “Velnor m'a permis de sécuriser mon business en un temps record, avec un rapport limpide.”
              </p>
              <p className="testimonial-name">– Paul D., CTO Startup SaaS</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                “Audit premium, retour en 24h, recommandations actionnables. Vraiment pro.”
              </p>
              <p className="testimonial-name">– Sarah K., Freelance Web</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                “Le rapport PDF est digne d’un cabinet à €2000. Bluffant.”
              </p>
              <p className="testimonial-name">– Entreprise Turing (PME)</p>
            </div>
          </div>
        </section>

        {/* ===== SECTION FAQ ===== */}
        <section className="section faq" id="faq" ref={addToRefs}>
          <h2>FAQ</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>Qu’est-ce qu’un audit IA ?</summary>
              <p>
                Notre IA scanne automatiquement la sécurité de votre site, identifie les failles critiques et vous fournit un rapport détaillé, avec plan d’actions.
              </p>
            </details>
            <details className="faq-item">
              <summary>Quelle différence entre 24h et 48h ?</summary>
              <p>
                Le forfait 24h inclut un badge « Sécurité Premium » et un traitement prioritaire. Le forfait 48h est complet, sans badge Premium.
              </p>
            </details>
            <details className="faq-item">
              <summary>Puis-je voir mes anciens audits ?</summary>
              <p>
                Oui, connectez-vous à l’espace Admin pour consulter votre historique d’audits, les scores et télécharger vos anciens rapports.
              </p>
            </details>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer" ref={addToRefs}>
          <p>© {new Date().getFullYear()} VELNOR. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions Légales</a>·
            <a href="#">Contact</a>·
            <a href="#">Politique de confidentialité</a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
