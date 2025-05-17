import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const faq = [
    {
      question: "Comment fonctionne l’audit IA ?",
      answer:
        "Notre IA simule un hacker éthique et détecte les failles de votre site. Elle analyse ports, CMS, fichiers sensibles, JS, headers, et plus encore."
    },
    {
      question: "Que contient le rapport PDF ?",
      answer:
        "Un rapport classe et professionnel avec le score de sécurité, les vulnérabilités détectées, les recommandations IA, et les technologies analysées."
    },
    {
      question: "Pourquoi faire un audit régulier ?",
      answer:
        "Même les grands sites sont vulnérables. Un audit préventif évite les fuites de données, protège vos clients et votre réputation."
    }
  ];

  const avisClients = [
    {
      nom: "Sophie M.",
      message:
        "Rapport très pro, l’équipe a pu corriger plusieurs failles rapidement. On recommande VELNOR !",
      societe: "CEO – WebGuard"
    },
    {
      nom: "Yanis T.",
      message:
        "L’audit IA nous a bluffés. Délai respecté, rapport clair, interface stylée.",
      societe: "CTO – NovaTech"
    },
    {
      nom: "Julie L.",
      message:
        "On a reçu le rapport en moins de 24h. Super utile pour rassurer nos clients.",
      societe: "Responsable Sécu – MondoTV"
    }
  ];

  return (
    <div className="landing">

      {/* HEADER AVEC LOGO */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '20px',
        backgroundColor: '#0b0b0e',
        borderBottom: '1px solid #1a1a1a'
      }}>
        <img src="/velnor-logo.png" alt="VELNOR Logo" style={{ height: '50px' }} />
        <h1 style={{ color: '#ff0040', fontSize: '1.8rem', margin: 0 }}>VELNOR</h1>
      </header>

      {/* NAVBAR */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#tarifs">Offres</a></li>
          <li><a href="#avis">Témoignages</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/admin-login" className="cta-nav">Admin</a>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero-text">
          <h1>Audit IA Cybersécurité Ultra-Puissant</h1>
          <p>
            VELNOR détecte toutes les failles de votre site web comme un expert pentester. Rapport PDF livré sous 48h ou 24h.
          </p>
          <a href="#tarifs" className="btn-main">🚀 Je veux un audit</a>
        </div>
      </header>

      {/* POURQUOI NOUS */}
      <section className="why-us">
        <h2>Pourquoi choisir VELNOR ?</h2>
        <div className="features">
          <div><span>🤖</span><p>Analyse IA avancée</p></div>
          <div><span>📄</span><p>Rapport PDF stratégique</p></div>
          <div><span>⚡</span><p>Livraison express</p></div>
          <div><span>🔐</span><p>Badge sécurité offert</p></div>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section id="fonctionnement">
        <h2>Comment ça marche ?</h2>
        <div className="steps">
          <div><h3>1</h3><p>Vous commandez votre audit</p></div>
          <div><h3>2</h3><p>L’IA scanne votre site</p></div>
          <div><h3>3</h3><p>Vous recevez le rapport PDF</p></div>
        </div>
      </section>

      {/* OFFRES */}
      <section id="tarifs">
        <h2>Nos Offres</h2>
        <div className="pricing-cards">
          <div className="offer-card">
            <h3>Audit IA – 48h</h3>
            <h2>499 € HT</h2>
            <ul>
              <li>✅ Rapport complet</li>
              <li>✅ Score & Recommandations</li>
              <li>⏱ Livraison en 48h</li>
            </ul>
            <a href="/paiement-48h" className="btn-main">Je commande</a>
          </div>
          <div className="offer-card">
            <h3>Audit Express – 24h</h3>
            <h2>699 € HT</h2>
            <ul>
              <li>🚀 Traitement prioritaire</li>
              <li>✅ Rapport + Badge</li>
              <li>⚡ Livraison en 24h</li>
            </ul>
            <a href="/paiement-24h" className="btn-main">Je commande</a>
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section id="avis">
        <h2>Témoignages</h2>
        <div className="testimonial-cards">
          {avisClients.map((avis, i) => (
            <div key={i} className="testimonial">
              <p>“{avis.message}”</p>
              <strong>{avis.nom}</strong>
              <span>{avis.societe}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>FAQ – Questions Fréquentes</h2>
        <div className="faq-list">
          {faq.map((item, i) => (
            <div key={i} className="faq-item">
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Une question ? Écrivez-nous à <a href="mailto:contact@velnor.fr">contact@velnor.fr</a></p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} VELNOR – Tous droits réservés</p>
        <p><a href="/mentions-legales">Mentions légales</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
