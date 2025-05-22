// src/pages/LandingPage.js
import React, { useEffect, useRef, Suspense } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalaxyCanvas from '../components/GalaxyCanvas';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 60 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
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
    <>
      <Helmet>
        <title>VELNOR — Audit IA Cybersécurité</title>
        <meta
          name="description"
          content="VELNOR audite votre site web en 24h/48h grâce à une IA galactique de cybersécurité."
        />
      </Helmet>

      <div className="velnor-landing">
        {/* Fond 3D galaxie */}
        <Suspense fallback={null}>
          <GalaxyCanvas />
        </Suspense>

        {/* HEADER */}
        <header className="landing-header">
          <div className="logo">🛡️ VELNOR</div>
          <nav>
            <Link to="#fonctionnement">Fonctionnement</Link>
            <Link to="#technologie">Technologie</Link>
            <Link to="#offres">Offres</Link>
            <Link to="#faq">FAQ</Link>
            <Link to="/audit">Audit IA</Link>
            <button onClick={() => navigate('/admin')} className="admin-btn">Admin</button>
          </nav>
        </header>

        {/* HERO */}
        <section className="section hero" ref={(el) => setSectionRef(el, 0)}>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1>🛡️ VELNOR</h1>
            <h2>
              L’IA de cybersécurité<br />
              <span>venue d'une autre dimension</span>
            </h2>
            <p>
              Auditez votre site grâce à une IA conçue pour détecter les failles critiques
              et vous livrer un rapport stratégique en 24h ou 48h.
            </p>
            <button onClick={() => navigate('/paiement-24h')}>🚀 Lancer un audit IA</button>
          </motion.div>
        </section>

        {/* COMMENT ÇA MARCHE */}
        <section className="section how-it-works" id="fonctionnement" ref={(el) => setSectionRef(el, 1)}>
          <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            🛠 Fonctionnement
          </motion.h3>
          <div className="steps">
            {['1️⃣ Entrez l’URL de votre site', '2️⃣ L’IA scanne et identifie les failles', '3️⃣ Recevez un PDF pro en 24h/48h'].map(
              (text, i) => (
                <div key={i} className="step">{text}</div>
              )
            )}
          </div>
        </section>

        {/* TECHNOLOGIE */}
        <section className="section tech" id="technologie" ref={(el) => setSectionRef(el, 2)}>
          <motion.h3 initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            🧠 Technologie VELNOR
          </motion.h3>
          <ul className="features">
            {[
              '✅ Détection XSS, SQLi, .env, ports ouverts',
              '📄 Rapport PDF généré par APEX™',
              '🛡️ Badge IA & score de sécurité',
              '⚡ Livraison garantie 24h ou 48h'
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* OFFRES */}
        <section className="section pricing" id="offres" ref={(el) => setSectionRef(el, 3)}>
          <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            💼 Nos Offres
          </motion.h3>
          <div className="pricing-cards">
            <div className="card">
              <h4>Audit IA – 48h</h4>
              <p>Rapport complet + score IA + recommandations</p>
              <p className="price">499€ HT</p>
              <button onClick={() => navigate('/paiement-48h')}>Choisir</button>
            </div>
            <div className="card">
              <h4>Audit Express – 24h</h4>
              <p>Priorité + badge sécurité + livraison rapide</p>
              <p className="price">699€ HT</p>
              <button onClick={() => navigate('/paiement-24h')}>Choisir</button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq" id="faq" ref={(el) => setSectionRef(el, 4)}>
          <motion.h3 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            ❓ FAQ
          </motion.h3>
          <details><summary>Comment l’IA fonctionne-t-elle ?</summary><p>Notre moteur APEX™ réalise un double scan pour fiabilité maximale.</p></details>
          <details><summary>Vos données sont-elles protégées ?</summary><p>Oui, tout est chiffré et effacé après audit.</p></details>
          <details><summary>Puis-je auditer plusieurs domaines ?</summary><p>Oui, saisissez autant d’URL que nécessaire.</p></details>
        </section>

        {/* FOOTER */}
        <footer className="footer" id="footer">
          <p>© {new Date().getFullYear()} VELNOR — Propulsé par l’IA galactique</p>
          <Link to="/mentions-legales">Mentions légales</Link>
        </footer>
      </div>
    </>
  );
}
