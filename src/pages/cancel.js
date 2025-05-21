
import React from "react";
import "../styles/SuccessCancel.css";

const Cancel = () => {
  return (
    <div className="status-page">
      <div className="status-box cancel">
        <h1>❌ Paiement annulé</h1>
        <p>Votre paiement a été annulé. Vous pouvez réessayer à tout moment.</p>
        <a href="/" className="btn-return">Retour à l'accueil</a>
      </div>
    </div>
  );
};

export default Cancel;
