
import React from "react";
import "../styles/Paiement.css";

const Paiement48h = () => {
  const handlePaiement = async () => {
    try {
      const response = await fetch("https://velnor-backend.onrender.com/create-checkout-session-48h", {
        method: "POST",
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur lors de la redirection vers Stripe.");
      }
    } catch (error) {
      alert("Erreur de connexion au serveur.");
      console.error(error);
    }
  };

  return (
    <div className="paiement-container">
      <div className="paiement-card">
        <h2 className="titre-paiement">Audit IA – 48h</h2>
        <p className="prix">499 € HT</p>
        <ul className="liste-options">
          <li>📄 Rapport PDF complet</li>
          <li>⚡ Livraison garantie sous 48h</li>
          <li>📬 Envoi automatique par mail</li>
        </ul>
        <button className="btn-stripe" onClick={handlePaiement}>
          Payer avec Stripe
        </button>
      </div>
    </div>
  );
};

export default Paiement48h;
