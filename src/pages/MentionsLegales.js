import React from "react";

const MentionsLegales = () => {
  return (
    <div style={{ padding: "60px 40px", maxWidth: "900px", margin: "0 auto", fontFamily: "Segoe UI" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "30px" }}>Mentions Légales</h1>

      <p><strong>Nom de l'entreprise :</strong> VIREON</p>
      <p><strong>Responsable de publication :</strong> Mustapha Ben</p>
      <p><strong>Adresse e-mail :</strong> assistance.vireon@outlook.fr</p>
      <p><strong>Hébergement :</strong> Scaleway - 8 rue de la Ville l'Évêque, 75008 Paris</p>
      <p><strong>Numéro SIRET :</strong> à compléter si besoin</p>
      <p><strong>Conditions d’utilisation :</strong> L’utilisation du site vireon.io implique l’acceptation pleine et entière des conditions générales d’utilisation décrites ici. Ces conditions sont susceptibles d’être modifiées ou complétées à tout moment.</p>
      <p><strong>Propriété intellectuelle :</strong> Tous les contenus présents sur ce site (textes, images, logos, etc.) sont la propriété exclusive de VIREON. Toute reproduction est interdite sans autorisation préalable.</p>
      <p><strong>Collecte des données :</strong> Les informations recueillies sont utilisées uniquement dans le cadre du service d’audit et ne sont jamais revendues. Conformément à la loi RGPD, vous pouvez demander la suppression de vos données.</p>

      <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "#666" }}>© {new Date().getFullYear()} VIREON – Tous droits réservés</p>
    </div>
  );
};

export default MentionsLegales;
