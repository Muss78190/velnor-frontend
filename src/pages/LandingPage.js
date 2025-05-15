import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const faq = [
    {
      question: "Comment fonctionne l’audit IA ?",
      answer:
        "Notre IA simule les comportements d’un hacker éthique et détecte toutes les failles potentielles. Elle analyse les ports, headers, chemins sensibles, CMS, JS dangereux, fichiers exposés, etc."
    },
    {
      question: "Que contient le rapport ?",
      answer:
        "Un PDF complet avec la note de sécurité, les vulnérabilités trouvées, les recommandations IA, et les technologies détectées."
    },
    {
      question: "Est-ce que mon site est en danger ?",
      answer:
        "Même les sites connus ont des failles. Un audit régulier est indispensable pour éviter les piratages et protéger vos données."
    }
  ];

  const avisClients = [
    {
      nom: "Sophie M.",
      message:
        "Rapide, clair, très pro. L’audit nous a aidés à corriger 3 failles critiques dès la première semaine.",
      societe: "CEO – WebGuard"
    },
    {
      nom: "Yanis T.",
      message:
        "Une IA qui fait le travail d’un pentester expérimenté, et en 24h ? Bluffant. Rapport très complet.",
      societe: "CTO – NovaTech"
    },
    {
      nom: "Julie L.",
      message:
        "Merci VIREON ! Votre audit nous a évité un gros incident. L’équipe a adoré le format du rapport PDF.",
      societe: "Responsable Sécu – MondoTV"
    }
  ];

  return (
    <div className="landing">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🧠 VIREON</div>
        <ul className="nav-links">
          <li><a href="#fonctionnement">Fonctionnement</a></li>
          <li><a href="#tarifs">Offres</a></li>
          <li><a href="#avis">Témoignages</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="/admin-login" className="cta-nav">Admin</a>
      </nav>

      {/* HERO SECTION – VERSION ÉPURÉE CENTRÉE */}
<header className="hero-centered">
  <h1>
    🔍 Obtenez un <span className="highlight">audit IA cybersécurité</span><br />
    livré en <span className="highlight">24h ou 48h</span>
  </h1>
  <p>
    Notre intelligence artificielle simule un hacker éthique : elle identifie les failles, ports ouverts, headers manquants,
    chemins sensibles et technologies exposées.<br />
    Recevez un <strong>rapport PDF clair, stratégique et professionnel</strong> pour sécuriser votre site efficacement.
  </p>
  <a href="#tarifs" className="hero-btn">🚀 Je veux un audit IA</a>
</header>


      {/* POURQUOI NOUS */}
      <section className="why-us">
        <h2>Pourquoi choisir VIREON ?</h2>
        <div className="features">
          <div><span>🧠</span><p>Analyse IA complète</p></div>
          <div><span>📄</span><p>Rapport PDF stratégique</p></div>
          <div><span>⚡</span><p>Livraison 24h ou 48h</p></div>
          <div><span>🔒</span><p>Badge de sécurité offert</p></div>
        </div>
      </section>

      {/* FONCTIONNEMENT */}
      <section id="fonctionnement">
        <h2>Comment ça marche ?</h2>
        <div className="steps">
          <div><h3>1</h3><p>Vous commandez votre audit</p></div>
          <div><h3>2</h3><p>L’IA scanne votre site et détecte les failles</p></div>
          <div><h3>3</h3><p>Vous recevez un rapport complet en PDF</p></div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs">
        <h2>Nos Offres</h2>
        <div className="pricing-cards">
          <div className="offer-card">
            <h3>Audit IA – 48h</h3>
            <h2>499 € HT</h2>
            <ul>
              <li>✅ Rapport IA PDF</li>
              <li>✅ Score de sécurité</li>
              <li>✅ Livraison en 48h</li>
            </ul>
            <a href="/paiement-48h" className="btn-main">Je commande</a>
          </div>
          <div className="offer-card">
            <h3>Audit Express – 24h</h3>
            <h2>699 € HT</h2>
            <ul>
              <li>⚡ Traitement prioritaire</li>
              <li>✅ Rapport IA + badge offert</li>
              <li>✅ Livraison en 24h</li>
            </ul>
            <a href="/paiement-24h" className="btn-main">Je commande</a>
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
      <section id="avis">
        <h2>Ce que disent nos clients</h2>
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

      {/* BADGE */}
      <section className="badge-section">
        <h3>🔰 Badge de sécurité offert</h3>
        <p>Nous vous offrons un badge à afficher sur votre site après l’audit IA.</p>
        <img src="https://cdn-icons-png.flaticon.com/512/10471/10471210.png" alt="Badge sécurité" />
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2>❓ Questions Fréquentes</h2>
        <div className="faq-list">
          {faq.map((f, i) => (
            <div key={i} className="faq-item">
              <h4>{f.question}</h4>
              <p>{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <h2>📬 Contact</h2>
        <p>Besoin d’aide ? Écrivez-nous à <a href="mailto:assistance.vireon@outlook.fr">assistance.vireon@outlook.fr</a></p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© {new Date().getFullYear()} VIREON – Tous droits réservés</p>
        <p><a href="/mentions-legales">Mentions légales</a></p>
      </footer>
    </div>
  );
};

export default LandingPage;
