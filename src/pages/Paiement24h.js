import React from "react";

const Paiement24h = () => {
  const handlePaiementStripe = async () => {
    try {
      const res = await fetch("http://localhost:8000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: "price_1RNvZMGKcfACuIK9e8bAFSpk" }) // ID 24h
      });

      const data = await res.json(); // ✅ lecture de la vraie URL
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Pas d'URL Stripe retournée :", data);
      }
    } catch (err) {
      console.error("Erreur Stripe :", err);
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "100px 20px" }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        background: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        textAlign: "center"
      }}>
        <h1>Audit Express – Livraison 24h</h1>
        <p>Bénéficiez d’un audit prioritaire avec livraison en 24h maximum.</p>
        <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
          <li>⚡ Traitement prioritaire</li>
          <li>✅ Rapport PDF IA + Badge offert</li>
          <li>✅ Livraison garantie en 24h</li>
        </ul>
        <hr style={{ margin: "20px 0" }} />
        <h2 style={{ fontSize: "2rem", color: "#3366ff" }}>699 € HT</h2>
        <p>Paiement 100% sécurisé via Stripe</p>
        <button onClick={handlePaiementStripe} style={{
          background: "#3366ff",
          color: "white",
          padding: "14px 28px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px"
        }}>
          Payer maintenant
        </button>
      </div>
    </div>
  );
};

export default Paiement24h;
