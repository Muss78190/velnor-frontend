import React from "react";
import "../styles/Paiement.css";

const Paiement24h = () => {
  const handlePayment = async () => {
    try {
      const res = await fetch("https://your-backend-domain.com/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price_id: "price_1RPNODIbmxThmcuLyqMDzhWG" }),
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
      <h1>Audit Express IA – 24h</h1>
      <p className="price">699 € HT</p>
      <ul>
        <li>⏱️ Livraison garantie sous 24h</li>
        <li>🧠 Rapport PDF + Badge de Sécurité</li>
        <li>📩 Envoi par email automatisé</li>
      </ul>
      <button onClick={handlePayment}>Payer avec Stripe</button>
    </div>
  );
};

export default Paiement24h;