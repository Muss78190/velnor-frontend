// src/pages/paiement-48h.js
import React, { useState } from "react";
import "../styles/Paiement.css";

const Paiement48h = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch(
        "https://velnor-backend.onrender.com/create-checkout-session-48h",
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
      console.error("Paiement48h erreur :", err);
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="paiement-page">
      <div className="paiement-container">
        <h2>Paiement Audit – 48 h (499 € HT)</h2>
        <button
          className={`btn-payer ${loading ? "loading" : ""}`}
          onClick={handleCheckout}
          disabled={loading}
        >
          {loading ? "Redirection…" : "Payer 499 € HT (48 h)"}
        </button>
        {errorMsg && <p className="paiement-error">{errorMsg}</p>}
      </div>
    </div>
  );
};

export default Paiement48h;
