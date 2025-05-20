import React from "react";
import "../styles/Paiement.css";

const Paiement48h = () => {
  const handlePayment = async () => {
    try {
      const response = await fetch("https://velnor-backend.onrender.com/create-checkout-session/48h", {
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
      <h2>Audit IA – 48h</h2>
      <p className="price">499 € HT</p>
      <ul>
        <li>📄 Rapport PDF complet</li>
        <li>⚡ Livraison garantie sous 48h</li>
        <li>📩 Envoi automatique par mail</li>
      </ul>
      <button className="btn-pay" onClick={handlePayment}>
        Payer avec Stripe
      </button>
    </div>
  );
};

export default Paiement48h;
