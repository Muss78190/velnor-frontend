// src/pages/LandingPage.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HiCog } from 'react-icons/hi';
import { FaRocket, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { MdSecurity, MdTimeline, MdStar } from 'react-icons/md';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalaxyParticles from './GalaxyParticles';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  // On ajoute chaque section au ref array
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animation d’apparition (opacity et translateY) pour chaque section
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1.1,
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
    <div className="velnor-landing">
      {/* Fond Etoiles */}
      <GalaxyParticles />

      {/* NAVBAR */}
      <nav className="velnor-navbar">
        <div className="velnor-logo">VELNOR</div>
        <ul className="velnor-menu">
          <li>
            <a href="#fonctionnement">Fonctionnement</a>
          </li>
          <li>
            <a href="#technologie">Technologie</a>
          </li>
          <li>
            <a href="#offres">Offres</a>
          </li>
          <li>
            <a href="#temoignages">Témoignages</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
        <Link to="/admin" className="admin-btn-navbar">
          Admin
        </Link>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-content" ref={addToRefs}>
          <h1>L’IA qui audite votre cybersécurité</h1>
          <p>Audit automatisé, rapport PDF complet, badge de confiance. En 24h ou 48h.</p>
          <Link to="/paiement-24h">
            <button className="cta-btn">Demander un audit IA</button>
          </Link>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section className="section fonctionnement" id="fonctionnement" ref={addToRefs}>
        <h2>Fonctionnement</h2>
        <div className="steps">
          <div className="step">
            <MdSecurity className="step-icon" />
            <span>1. Entrez l’URL de votre site</span>
          </div>
          <div className="step">
            <MdTimeline className="step-icon" />
            <span>2. L’IA scanne et identifie les failles</span>
          </div>
          <div className="step">
            <MdStar className="step-icon" />
            <span>3. Recevez un PDF premium en 24h ou 48h</span>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIE */}
      <section className="section technologie" id="technologie" ref={addToRefs}>
        <h2>Technologie</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <FaRocket className="tech-icon" />
            <h4>Analyse AI</h4>
            <p>Algorithmes de deep learning pour déceler les vulnérabilités.</p>
          </div>
          <div className="tech-card">
            <FaShieldAlt className="tech-icon" />
            <h4>Scannage avancé</h4>
            <p>Détection statique et dynamique de points faibles.</p>
          </div>
          <div className="tech-card">
            <FaChartLine className="tech-icon" />
            <h4>Rapport détaillé</h4>
            <p>Visualisation graphique, score de sécurité et recommandations.</p>
          </div>
        </div>
      </section>

      {/* OFFRES */}
      <section className="section offres" id="offres" ref={addToRefs}>
        <h2>Offres</h2>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p className="price">499€ HT</p>
            <ul className="features">
              <li>📄 Rapport PDF complet</li>
              <li>⚡ Livraison garantie 48h</li>
              <li>📬 Envoi automatique par e-mail</li>
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
              <li>📄 Rapport + Badge sécurité</li>
              <li>📬 Livraison garantie 24h</li>
            </ul>
            <Link to="/paiement-24h">
              <button className="card-btn">Choisir</button>
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
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

      {/* FAQ */}
      <section className="section faq" id="faq" ref={addToRefs}>
        <h2>FAQ</h2>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Qu’est-ce qu’un audit IA ?</summary>
            <p>Notre IA analyse automatiquement la sécurité de votre site web et produit un rapport personnalisé.</p>
          </details>
          <details className="faq-item">
            <summary>Quelle différence entre 24h et 48h ?</summary>
            <p>La version 24h inclut un badge sécurité premium et traitement prioritaire. La 48h est standard.</p>
          </details>
          <details className="faq-item">
            <summary>Puis-je accéder à un historique des audits ?</summary>
            <p>Oui, dans l’espace Admin, vous trouverez l’historique complet et les résultats passés.</p>
          </details>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" ref={addToRefs}>
        <p>© {new Date().getFullYear()} VELNOR. Tous droits réservés.</p>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions Légales</a>·
          <a href="#">Contact</a>·
          <a href="#">Politique de confidentialité</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
