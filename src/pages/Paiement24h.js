import React from "react";
import "../styles/Paiement.css";

const Paiement24h = () => {
  const handlePaiement = async () => {
    try {
      const response = await fetch("https://velnor-backend.onrender.com/create-checkout-session-24h", {
        method: "POST",
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur de paiement.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="paiement-container">
      <div className="paiement-card">
        <h2 className="titre-paiement">Audit Express IA – 24h</h2>
        <p className="prix">699 € HT</p>
        <ul className="liste-options">
          <li>⚡ Traitement prioritaire</li>
          <li>📄 Rapport PDF + Badge de Sécurité</li>
          <li>📬 Livraison garantie sous 24h</li>
        </ul>
        <button className="btn-stripe" onClick={handlePaiement}>
          Payer avec Stripe
        </button>
      </div>
    </div>
  );
};

export default Paiement24h;
