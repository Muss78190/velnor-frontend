// src/pages/LandingPage.js
import React, { useEffect, useRef } from 'react';
import '../styles/LandingPage.css';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import GalaxyCanvas from '../components/GalaxyCanvas';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  'hero', 'fonctionnement', 'technologie', 'offres', 'faq'
];

const faq = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et d’autres vulnérabilités critiques." },
  { q: "Mon site est-il compatible ?", a: "Tout site accessible publiquement (WordPress, Laravel, Node, etc.) est compatible." },
  { q: "Les rapports sont-ils confidentiels ?", a: "Oui, chaque audit est traité en toute confidentialité et sécurité." }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const setSectionRef = (el, idx) => {
    sectionsRef.current[idx] = el;
  };

  return (
    <div className="velnor-landing">
      <GalaxyCanvas />
      <nav className="navbar">
        <div className="logo">🛡️ VELNOR</div>
        <div className="nav-links">
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#technologie">Technologie</a>
          <a href="#offres">Offres</a>
          <a href="#faq">FAQ</a>
          <a href="/audit" className="nav-cta">Audit IA</a>
        </div>
        <button className="admin-btn" onClick={() => navigate('/admin')}>Admin</button>
      </nav>
      {/* HERO */}
      <section ref={(el) => setSectionRef(el, 0)} className="section hero">
        <div className="hero-content">
          <h1>
            <span className="velnor-glow">VELNOR</span>
          </h1>
          <h2>L’IA de cybersécurité <br /><span className="subtitle">venue d'une autre dimension</span></h2>
          <p>
            Auditez votre site grâce à une IA conçue pour détecter les failles critiques et vous livrer un rapport stratégique en 24h ou 48h.
          </p>
          <button className="cta-btn" onClick={() => navigate('/paiement-24h')}>🚀 Lancer un audit IA</button>
        </div>
      </section>
      {/* Fonctionnement */}
      <section ref={(el) => setSectionRef(el, 1)} id="fonctionnement" className="section fonctionnement">
        <h3>🛠 Fonctionnement</h3>
        <div className="steps">
          <div className="step">1️⃣ Entrez l’URL de votre site</div>
          <div className="step">2️⃣ L’IA analyse, scanne et identifie les failles</div>
          <div className="step">3️⃣ Recevez un PDF stratégique en 24h ou 48h</div>
        </div>
      </section>
      {/* Technologie */}
      <section ref={(el) => setSectionRef(el, 2)} id="technologie" className="section technologie">
        <h3>🧠 Technologie VELNOR</h3>
        <ul className="features">
          <li>✅ Détection XSS, SQLi, .env, ports ouverts</li>
          <li>📄 Rapport PDF pro généré par APEX™</li>
          <li>🛡️ Score sécurité + Badge IA</li>
          <li>⚡ Livraison garantie en 24h/48h</li>
        </ul>
      </section>
      {/* Offres */}
      <section ref={(el) => setSectionRef(el, 3)} id="offres" className="section offres">
        <h3>💼 Nos Offres</h3>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p>Rapport PDF, score IA, recommandations</p>
            <p className="price">499€ HT</p>
            <button onClick={() => navigate('/paiement-48h')}>Choisir</button>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
            <p className="price">699€ HT</p>
            <button onClick={() => navigate('/paiement-24h')}>Choisir</button>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section ref={(el) => setSectionRef(el, 4)} id="faq" className="section faq">
        <h3>❓ FAQ</h3>
        <div className="faq-list">
          {faq.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} VELNOR — Cybersécurité Galactique</span>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
