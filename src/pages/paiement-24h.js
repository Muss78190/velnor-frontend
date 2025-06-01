// Paiement24h.js
import React, { useState } from "react";
import "../styles/Paiement.css";

const Paiement24h = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      // 1) Appelez votre backend FastAPI pour créer la session Stripe 24 h
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/create-checkout-session-24h`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Erreur lors de la création de session Stripe");
      }

      const { url } = await response.json();
      // 2) Redirigez l'utilisateur vers l'URL de checkout retournée par Stripe
      window.location.href = url;
    } catch (err) {
      console.error("Paiement24h erreur :", err);
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="paiement-container">
      <h2>Paiement Audit – 24 h (499 € HT)</h2>
      <button
        className="btn-payer"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? "Redirection…" : "Payer 499 € HT (24 h)"}
      </button>
      {errorMsg && <p className="paiement-error">{errorMsg}</p>}
    </div>
  );
};

export default Paiement24h;
