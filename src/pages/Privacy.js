// src/pages/Privacy.js
import React from 'react';
import '../styles/LegalPages.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Politique de Confidentialité</h1>
        <p><em>Dernière mise à jour : 12 juillet 2025</em></p>

        <section>
          <h2>1. Éditeur</h2>
          <p>
            Site édité par : Mustapha Benlahcen<br />
            Email : contact@velnor.fr
          </p>
        </section>

        <section>
          <h2>2. Données Collectées</h2>
          <p>Nous collectons uniquement les données nécessaires au service :</p>
          <ul>
            <li>URL du site à auditer</li>
            <li>Email de contact</li>
            <li>Nom et entreprise</li>
            <li>Données de paiement (via Stripe)</li>
          </ul>
        </section>

        <section>
          <h2>3. Utilisation des Données</h2>
          <ul>
            <li>Réalisation de l'audit cybersécurité</li>
            <li>Livraison du rapport PDF</li>
            <li>Traitement du paiement</li>
            <li>Support client</li>
          </ul>
        </section>

        <section>
          <h2>4. Conservation</h2>
          <ul>
            <li><strong>Rapports PDF :</strong> Supprimés automatiquement après 7 jours</li>
            <li><strong>Données de contact :</strong> Conservées jusqu'à demande de suppression</li>
            <li><strong>Données de paiement :</strong> Gérées exclusivement par Stripe</li>
          </ul>
        </section>

        <section>
          <h2>5. Vos Droits (RGPD)</h2>
          <p>Vous pouvez :</p>
          <ul>
            <li>Accéder à vos données</li>
            <li>Les rectifier ou les supprimer</li>
            <li>Vous opposer à leur traitement</li>
            <li>Demander leur portabilité</li>
          </ul>
          <p>Contact : <a href="mailto:contact@velnor.fr">contact@velnor.fr</a></p>
        </section>

        <section>
          <h2>6. Sécurité</h2>
          <ul>
            <li>Chiffrement HTTPS</li>
            <li>Paiements sécurisés via Stripe</li>
            <li>Suppression automatique des données temporaires</li>
            <li>Accès restreint aux données</li>
          </ul>
        </section>

        <section>
          <h2>7. Partenaires</h2>
          <ul>
            <li><strong>Stripe :</strong> Traitement des paiements (certifié PCI DSS)</li>
            <li><strong>Scaleway :</strong> Hébergement (France)</li>
            <li><strong>Vercel :</strong> Hébergement site web</li>
          </ul>
        </section>

        <section>
          <h2>8. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires 
            au fonctionnement. Aucun cookie de tracking.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            Questions sur cette politique :<br />
            Email : <a href="mailto:assistance.velnor@outlook.fr">assistance.velnor@outlook.fr</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;