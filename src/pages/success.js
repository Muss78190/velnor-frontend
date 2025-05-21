
import React from "react";
import "../styles/SuccessCancel.css";

const Success = () => {
  return (
    <div className="status-page">
      <div className="status-box success">
        <h1>🎉 Paiement réussi</h1>
        <p>Merci pour votre commande. Votre audit sera traité dans les délais indiqués.</p>
        <a href="/" className="btn-return">Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default Success;
