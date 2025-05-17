import React, { useEffect } from "react";
import "../styles/LandingPage.css";
import { FaRocket, FaShieldAlt, FaBrain, FaClock, FaLock } from "react-icons/fa";

const LandingPage = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const onScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="velnor-landing">
      <div className="animated-bg"></div>

      <header className="velnor-header">
        <div className="header-left">
          <img src="/velnor-logo.png" alt="VELNOR Logo" className="logo-banner" />
          <h1 className="site-title">VELNOR</h1>
        </div>
        <nav>
          <a href="#fonctionnement">Fonctionnement</a>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#offres">Offres</a>
          <a href="#temoignages">Avis</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2 className="hero-title">L’intelligence qui vous protège</h2>
        <p className="hero-subtitle">
          VELNOR est une IA de cybersécurité autonome capable d’auditer votre site web, détecter toutes les failles critiques, et vous livrer un rapport professionnel en moins de 48h.
        </p>
        <a href="#offres" className="cta-main">🚀 Demander un audit IA</a>
      </section>

      <section className="intro-section reveal">
        <h3>Bienvenue dans l’ère de la cybersécurité intelligente</h3>
        <p>
          Vous n’avez pas besoin d’être un expert pour sécuriser votre site. VELNOR vous apporte l’analyse d’un hacker éthique de haut niveau, sans efforts techniques. Un simple clic, un rapport stratégique, une sécurité renforcée.
        </p>
      </section>

      <section className="steps-section reveal" id="fonctionnement">
        <h3>Fonctionnement</h3>
        <div className="steps">
          <div className="step">
            <FaLock />
            <p><strong>1. Vous entrez votre URL</strong><br />aucune installation requise</p>
          </div>
          <div className="step">
            <FaBrain />
            <p><strong>2. L’IA analyse votre site</strong><br />comme un expert pentester</p>
          </div>
          <div className="step">
            <FaRocket />
            <p><strong>3. Vous recevez un PDF</strong><br />complet, clair, livré en 24h/48h</p>
          </div>
        </div>
      </section>

      <section className="features-section reveal" id="fonctionnalites">
        <h3>Fonctionnalités IA</h3>
        <div className="features">
          <div><FaShieldAlt /><p>Détection CVE, CMS, ports</p></div>
          <div><FaClock /><p>Audit livré en 24h ou 48h</p></div>
          <div><FaBrain /><p>Rapport intelligent & lisible</p></div>
          <div><FaRocket /><p>Badge de sécurité offert</p></div>
        </div>
      </section>

      <section className="offers-section reveal" id="offres">
        <h3>Nos Offres</h3>
        <div className="offers">
          <div className="offer">
            <h4>Audit IA – 48h</h4>
            <p className="price">499 € HT</p>
            <ul>
              <li>Rapport PDF complet</li>
              <li>Score IA et recommandations</li>
              <li>Livraison garantie sous 48h</li>
            </ul>
            <a href="/paiement-48h" className="btn-offer">Commander</a>
          </div>
          <div className="offer">
            <h4>Audit Express – 24h</h4>
            <p className="price">699 € HT</p>
            <ul>
              <li>Traitement prioritaire</li>
              <li>Rapport + Badge Sécurité</li>
              <li>Livraison garantie sous 24h</li>
            </ul>
            <a href="/paiement-24h" className="btn-offer">Commander</a>
          </div>
        </div>
      </section>

      <section className="testimonials-section reveal" id="temoignages">
        <h3>Ils nous font confiance</h3>
        <div className="testimonials">
          <blockquote>
            <p>“VELNOR a repéré 7 failles critiques. Rapport ultra clair. Livraison en 24h top chrono.”</p>
            <footer>— Sophie, WebGuard</footer>
          </blockquote>
          <blockquote>
            <p>“On a été bluffés par la clarté du rapport et la puissance de l’IA. C’est devenu un réflexe avant tout lancement.”</p>
            <footer>— Yanis, CTO NovaTech</footer>
          </blockquote>
        </div>
      </section>

      <section className="faq-section reveal" id="faq">
        <h3>FAQ</h3>
        <div className="faq-item">
          <h4>Quels types de failles sont détectées ?</h4>
          <p>CMS vulnérables, ports ouverts, headers, JS, chemins, fichiers exposés, CVE, etc.</p>
        </div>
        <div className="faq-item">
          <h4>Est-ce que je dois installer quelque chose ?</h4>
          <p>Non. Tout est 100% en ligne. Vous entrez votre URL, et le rapport arrive par email.</p>
        </div>
      </section>

      <section className="contact-section reveal" id="contact">
        <h3>Contact</h3>
        <p>Une question ? Écrivez-nous à <a href="mailto:contact@velnor.fr">contact@velnor.fr</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <a href="/mentions-legales">Mentions légales</a>
      </footer>
    </div>
  );
};

export default LandingPage;
