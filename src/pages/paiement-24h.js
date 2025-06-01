// src/pages/paiement-24h.js
import React, { useState } from "react";
import "../styles/Paiement.css";

const Paiement24h = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(
        "https://velnor-backend.onrender.com/create-checkout-session-24h",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );

      const resText = await response.text();
      if (!response.ok) {
        throw new Error("Erreur backend : " + resText);
      }

      const data = JSON.parse(resText);
      if (!data.url) throw new Error("URL de redirection manquante");
      window.location.href = data.url;
    } catch (err) {
      console.error("Paiement24h erreur :", err);
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="paiement-page">
      <div className="paiement-container">
        <h2>Paiement Audit – 24 h (699 € HT)</h2>
        <button
          className={`btn-payer ${loading ? "loading" : ""}`}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Redirection…" : "Payer 699 € HT (24 h)"}
        </button>
        {errorMsg && <p className="paiement-error">{errorMsg}</p>}
      </div>
    </div>
  );
};

export default Paiement24h;
