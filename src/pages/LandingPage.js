import React from "react";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="stars-bg" />

      <header className="landing-header">
        <motion.h1
          className="logo"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          🛡️ VELNOR
        </motion.h1>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#fonctions">Fonctionnalités</a>
          <a href="#offres">Offres</a>
          <a href="#footer">Contact</a>
          <button onClick={() => navigate("/admin")} className="admin-btn">Admin</button>
        </nav>
      </header>

      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2>IA Galactique de Cybersécurité</h2>
          <p>
            VELNOR audite votre site comme un satellite d’élite : détection, analyse, rapport PDF pro livré en 24h ou 48h.
          </p>
          <button onClick={() => navigate("/paiement-24h")}>
            🚀 Lancer un audit IA
          </button>
        </motion.div>
      </section>

      <section className="scroll-section" id="fonctionnement">
        <motion.h3
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🛠 Comment ça marche
        </motion.h3>
        <ol>
          <li>1. Vous entrez l’URL de votre site</li>
          <li>2. L’IA VELNOR scanne et analyse les failles</li>
          <li>3. Vous recevez un rapport PDF pro avec score et recommandations</li>
        </ol>
      </section>

      <section className="scroll-section" id="fonctions">
        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          🧠 Fonctionnalités Avancées
        </motion.h3>
        <ul>
          <li>🔍 Détection de XSS, SQLi, .env, ports ouverts</li>
          <li>📄 Rapport PDF personnalisé généré par IA</li>
          <li>🛡️ Badge IA & score de sécurité</li>
          <li>⚡ Livraison garantie en 24h ou 48h</li>
        </ul>
      </section>

      <section className="scroll-section" id="offres">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          💼 Nos Offres
        </motion.h3>
        <div className="offres">
          <div className="offre-card">
            <h4>Audit IA – 48h</h4>
            <p>Audit complet + Rapport PDF pro + Score</p>
            <p className="prix">499€ HT</p>
            <button onClick={() => navigate("/paiement48h")}>Choisir</button>
          </div>
          <div className="offre-card">
            <h4>Audit Express – 24h</h4>
            <p>Audit prioritaire + Badge IA + Livraison rapide</p>
            <p className="prix">699€ HT</p>
            <button onClick={() => navigate("/paiement-24h")}>Choisir</button>
          </div>
        </div>
      </section>

      <footer id="footer" className="landing-footer">
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
