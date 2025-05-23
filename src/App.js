import React from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="velnor-navbar">
      <div className="velnor-logo"> 
        <span role="img" aria-label="shield">🛡️</span> VELNOR
      </div>
      <ul>
        <li><a href="#fonctionnement">Fonctionnement</a></li>
        <li><a href="#technologie">Technologie</a></li>
        <li><a href="#offres">Offres</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#audit"><button className="cta-btn">Audit IA</button></a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="velnor-hero">
      <h1>
        <span className="neon">VELNOR</span>
      </h1>
      <h2>L’IA de cybersécurité <span className="highlight">venue d’une autre dimension</span></h2>
      <p>
        Auditez votre site grâce à une IA de pointe qui détecte les failles critiques <br />
        et vous livre un rapport stratégique en 24h ou 48h.
      </p>
      <a href="#audit">
        <button className="cta-btn cta-main">Commander un audit IA</button>
      </a>
    </section>
  );
}

function App() {
  return (
    <div className="velnor-app">
      <div className="galaxy-bg"></div>
      <Navbar />
      <Hero />
      {/* Les autres sections arrivent */}
    </div>
  );
}

export default App;
