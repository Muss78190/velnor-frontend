import React from "react";
import "../styles/Paiement.css";

const Paiement48h = () => {
  const handlePayment = async () => {
    try {
      const res = await fetch("https://your-backend-domain.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price_id: "price_1RPNM8IbmxThmcuLS9Rr7nZT" }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erreur de redirection vers Stripe.");
      }
    } catch (error) {
      console.error("Erreur paiement :", error);
      alert("Erreur de paiement.");
    }
  };

  return (
    <div className="paiement-page">
      <h1>Audit Express IA – 48h</h1>
      <p className="price">499 € HT</p>
      <ul>
        <li>⏱️ Livraison garantie sous 48h</li>
        <li>🧠 Rapport PDF + Badge de Sécurité</li>
        <li>📩 Envoi par email automatisé</li>
      </ul>
      <button onClick={handlePayment}>Payer avec Stripe</button>
    </div>
  );
};

export default Paiement48h;