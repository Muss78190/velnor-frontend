import React from "react";
import "../styles/paiement.css";

const Paiement24h = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("https://velnor-backend.onrender.com/create-checkout-session/24h", {
        method: "POST",
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur de paiement.");
      }
    } catch (error) {
      alert("Erreur serveur.");
      console.error(error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Audit Express IA – 24h</h2>
      <p className="price">699 € HT</p>
      <ul>
        <li>🚀 Livraison garantie sous 24h</li>
        <li>🧠 Rapport PDF + Badge de Sécurité</li>
        <li>📩 Envoi par email automatisé</li>
      </ul>
      <button className="btn-pay" onClick={handlePayment}>
        Payer avec Stripe
      </button>
    </div>
  );
};

export default Paiement24h;
