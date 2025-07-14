// src/pages/Terms.js
import React from 'react';
import '../styles/LegalPages.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Conditions d'Utilisation</h1>
        <p><em>Dernière mise à jour : 12 juillet 2025</em></p>

        <section>
          <h2>1. Service</h2>
          <p>
            VELNOR propose un service d'audit cybersécurité automatisé 
            pour sites web, avec génération de rapport PDF.
          </p>
        </section>

        <section>
          <h2>2. Éditeur</h2>
          <p>
            Mustapha Benlahcen<br />
            Email : contact@velnor.fr
          </p>
        </section>

        <section>
          <h2>3. Prestations</h2>
          <ul>
            <li><strong>Audit 48h :</strong> 499€ HT - Livraison sous 48h ouvrées</li>
            <li><strong>Audit 24h :</strong> 699€ HT - Livraison sous 24h ouvrées</li>
          </ul>
          <p>Prix incluent : analyse complète + rapport PDF détaillé.</p>
        </section>

        <section>
          <h2>4. Paiement</h2>
          <ul>
            <li>Paiement intégral à la commande</li>
            <li>Paiement sécurisé via Stripe</li>
            <li>Aucun abonnement ou frais cachés</li>
          </ul>
        </section>

        <section>
          <h2>5. Obligations Client</h2>
          <ul>
            <li>Fournir une URL valide et accessible</li>
            <li>Être autorisé à faire auditer le site</li>
            <li>Fournir des informations exactes</li>
          </ul>
        </section>

        <section>
          <h2>6. Livraison</h2>
          <ul>
            <li>Rapport PDF envoyé par email</li>
            <li>Délais respectés sauf cas de force majeure</li>
            <li>Une seule livraison par commande</li>
          </ul>
        </section>

        <section>
          <h2>7. Limites du Service</h2>
          <p>
            <strong>Important :</strong> L'audit VELNOR est un outil d'analyse automatisé. 
            Il ne constitue pas :
          </p>
          <ul>
            <li>Une garantie d'absence de vulnérabilités</li>
            <li>Un conseil juridique ou de conformité</li>
            <li>Une certification de sécurité officielle</li>
          </ul>
          <p>
            <strong>Le client reste seul responsable de la sécurité de son site.</strong>
          </p>
        </section>

        <section>
          <h2>8. Limitation de Responsabilité</h2>
          <p>
            <strong>IMPORTANT :</strong> La responsabilité de VELNOR est strictement limitée :
          </p>
          <ul>
            <li>Au montant payé par le client</li>
            <li>Aux seuls dommages directs</li>
            <li>En cas de faute prouvée uniquement</li>
          </ul>
          <p>
            <strong>VELNOR ne saurait être tenu responsable :</strong>
          </p>
          <ul>
            <li>De dommages indirects ou immatériels</li>
            <li>De pertes de données ou d'exploitation</li>
            <li>D'utilisation malveillante des informations du rapport</li>
            <li>De failles non détectées par l'audit</li>
          </ul>
        </section>

        <section>
          <h2>9. Propriété du Rapport</h2>
          <ul>
            <li>Le rapport appartient au client après paiement</li>
            <li>Usage strictement interne recommandé</li>
            <li>Interdiction de revente ou redistribution</li>
          </ul>
        </section>

        <section>
          <h2>10. Rétractation</h2>
          <p>
            Droit de rétractation de 14 jours, sauf si le service 
            a été entièrement exécuté avec accord exprès du client.
          </p>
        </section>

        <section>
          <h2>11. Modification</h2>
          <p>
            Ces conditions peuvent être modifiées. Les clients seront 
            informés des changements importants.
          </p>
        </section>

        <section>
          <h2>12. Droit Applicable</h2>
          <p>
            Conditions régies par le droit français. 
            Tribunaux français compétents.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>
          <p>
            Questions : <a href="mailto:assistance.velnor@outlook.fr">assistance.velnor@outlook.fr</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;