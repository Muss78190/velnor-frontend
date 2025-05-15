import React from "react";
import "../styles/SuccessPage.css";

const SuccessPage = () => {
  return (
    <div className="success-container">
      <h1>Merci pour votre confiance !</h1>
      <p>Votre paiement a bien été reçu.</p>
      <p>Notre IA commence immédiatement l’analyse de votre site.</p>
      <p>Vous recevrez votre rapport par email sous 24h ou 48h selon l’offre choisie.</p>
      <a href="/" className="btn-retour">Retour à l'accueil</a>
    </div>
  );
};

export default SuccessPage;
