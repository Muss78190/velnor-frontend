import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/LandingPage.css";
import GalaxyParticles from "../components/GalaxyParticles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = ["hero", "fonctionnement", "technologie", "offres", "faq", "footer"];

const faq = [
  { q: "Comment fonctionne l’audit IA ?", a: "Notre IA analyse votre site, détecte les failles, et génère un rapport complet sous 24h ou 48h." },
  { q: "Quels types de failles sont détectées ?", a: "XSS, SQLi, .env, ports ouverts, et autres failles critiques." },
  { q: "Mon site est-il compatible ?", a: "Oui, tous les sites web accessibles publiquement sont compatibles." },
  { q: "Est-ce confidentiel ?", a: "Oui, chaque audit est traité de façon sécurisée et confidentielle." }
];

const LandingPage = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const setRef = (el, index) => (sectionsRef.current[index] = el);

  return (
    <div className="velnor-landing">
      <GalaxyParticles />
      <nav className="velnor-navbar">
        <div className="velnor-title">VELNOR</div>
        <ul>
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#technologie">Technologie</a></li>
          <li><a href="#offres">Offres</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><button className="admin-btn-navbar" onClick={() => navigate("/admin")}>Admin</button></li>
        </ul>
      </nav>

      <section ref={(el) => setRef(el, 0)} className="velnor-hero">
        <h1>VELNOR</h1>
        <h2>L’IA de cybersécurité <span className="subtitle-glow">venue d’une autre galaxie</span></h2>
        <p>Auditez votre site avec une IA avancée et recevez un rapport professionnel sous 24h ou 48h.</p>
        <a href="#offres"><button className="cta-main">Demander un audit IA</button></a>
      </section>

      <section ref={(el) => setRef(el, 1)} id="fonctionnement" className="section fonctionnement">
        <h3>🛠 Fonctionnement</h3>
        <div className="steps">
          <div className="step">1️⃣ Entrez l’URL de votre site</div>
          <div className="step">2️⃣ L’IA scanne et identifie les failles</div>
          <div className="step">3️⃣ Recevez un PDF stratégique</div>
        </div>
      </section>

      <section ref={(el) => setRef(el, 2)} id="technologie" className="section technologie">
        <h3>🧠 Technologie IA</h3>
        <ul className="features">
          <li>🔎 Détection XSS, SQLi, .env, ports ouverts</li>
          <li>📄 Rapport PDF généré par IA</li>
          <li>🛡️ Score de sécurité + Badge IA</li>
          <li>🚀 Livraison express garantie</li>
        </ul>
      </section>

      <section ref={(el) => setRef(el, 3)} id="offres" className="section offres">
        <h3>💼 Nos Offres</h3>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p>Analyse approfondie + Rapport PDF</p>
            <p className="price">499€ HT</p>
            <button onClick={() => navigate("/paiement-48h")}>Choisir</button>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p>Analyse prioritaire + Badge IA</p>
            <p className="price">699€ HT</p>
            <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
          </div>
        </div>
      </section>

      <section ref={(el) => setRef(el, 4)} id="faq" className="section faq">
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

      <footer ref={(el) => setRef(el, 5)} className="footer">
        <span>© {new Date().getFullYear()} VELNOR — Cybersécurité de demain</span>
        <div className="footer-links">
          <a href="/mentions-legales">Mentions légales</a>
          <a href="#offres">Offres</a>
          <a href="#faq">FAQ</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
