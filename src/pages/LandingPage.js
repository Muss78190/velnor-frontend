import React from "react";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="velnor-landing">
      <div className="galaxy-background" />

      {/* SECTION 1 - HERO */}
      <section className="section hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>🛡️ VELNOR</h1>
          <h2>L’IA de cybersécurité<br /><span>venue d'une autre dimension</span></h2>
          <p>
            Auditez votre site web grâce à une intelligence artificielle conçue pour détecter les failles critiques, 
            générer des rapports stratégiques et vous livrer un badge de sécurité en 24h ou 48h.
          </p>
          <button onClick={() => navigate("/paiement-24h")}>
            🚀 Lancer un audit IA
          </button>
        </motion.div>
      </section>

      {/* SECTION 2 - COMMENT ÇA MARCHE */}
      <section className="section how-it-works" id="fonctionnement">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🛠 Fonctionnement
        </motion.h3>
        <div className="steps">
          <div className="step">1️⃣ Entrez l’URL de votre site</div>
          <div className="step">2️⃣ L’IA analyse, scanne et identifie les failles</div>
          <div className="step">3️⃣ Vous recevez un PDF stratégique en 24h ou 48h</div>
        </div>
      </section>

      {/* SECTION 3 - TECHNOLOGIE */}
      <section className="section tech" id="technologie">
        <motion.h3
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🧠 Technologie VELNOR
        </motion.h3>
        <ul className="features">
          <li>✅ Détection de XSS, SQLi, .env, ports ouverts</li>
          <li>📄 Rapport PDF professionnel généré par APEX™</li>
          <li>🛡️ Score de sécurité + Badge IA certifié</li>
          <li>⚡ Livraison garantie en 24h ou 48h</li>
        </ul>
      </section>

      {/* SECTION 4 - OFFRES */}
      <section className="section pricing" id="offres">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💼 Nos Offres
        </motion.h3>
        <div className="pricing-cards">
          <div className="card">
            <h4>Audit IA – 48h</h4>
            <p>Rapport PDF complet, score IA, recommandations</p>
            <p className="price">499€ HT</p>
            <button onClick={() => navigate("/paiement48h")}>Choisir</button>
          </div>
          <div className="card">
            <h4>Audit Express – 24h</h4>
            <p>Analyse prioritaire, badge sécurité, livraison rapide</p>
            <p className="price">699€ HT</p>
            <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
          </div>
        </div>
      </section>

      {/* SECTION 5 - FOOTER */}
      <footer className="footer" id="footer">
        <p>© {new Date().getFullYear()} VELNOR — Propulsé par l’IA galactique</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
