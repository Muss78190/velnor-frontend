// src/pages/Help.js
import React from 'react';
import '../styles/LegalPages.css';

const Help = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Centre d'Aide</h1>

        <section>
          <h2>Questions Fréquentes</h2>
          
          <div className="faq-item">
            <h3>Qu'est-ce que VELNOR ?</h3>
            <p>
              VELNOR est un service d'audit cybersécurité automatisé qui analyse 
              votre site web et génère un rapport PDF détaillé en 24-48h.
            </p>
          </div>

          <div className="faq-item">
            <h3>Comment fonctionne l'audit ?</h3>
            <p>
              Vous fournissez l'URL de votre site, nous l'analysons avec notre 
              intelligence artificielle, et vous recevez un rapport complet par email.
            </p>
          </div>

          <div className="faq-item">
            <h3>Quelle est la différence entre les offres ?</h3>
            <p>
              • <strong>48h (499€) :</strong> Audit complet livré sous 48h ouvrées<br />
              • <strong>24h (699€) :</strong> Même audit livré sous 24h ouvrées
            </p>
          </div>

          <div className="faq-item">
            <h3>L'audit va-t-il affecter mon site ?</h3>
            <p>
              Non, notre audit est entièrement passif. Nous analysons uniquement 
              les éléments publiquement accessibles sans affecter le fonctionnement.
            </p>
          </div>

          <div className="faq-item">
            <h3>Que contient le rapport ?</h3>
            <p>
              Le rapport PDF contient : score de sécurité, vulnérabilités détectées, 
              niveau de risque, et recommandations de correction détaillées.
            </p>
          </div>

          <div className="faq-item">
            <h3>Quels sites peuvent être audités ?</h3>
            <p>
              Tous les sites web accessibles publiquement via HTTP ou HTTPS. 
              Compatible avec tous les CMS (WordPress, Shopify, etc.).
            </p>
          </div>

          <div className="faq-item">
            <h3>Comment se déroule le paiement ?</h3>
            <p>
              Paiement sécurisé par carte bancaire via Stripe. 
              Paiement intégral à la commande, aucun abonnement.
            </p>
          </div>

          <div className="faq-item">
            <h3>Puis-je avoir une facture ?</h3>
            <p>
              Oui, une facture est automatiquement envoyée par email 
              après confirmation du paiement.
            </p>
          </div>
        </section>

        <section>
          <h2>Besoin d'Aide ?</h2>
          <div className="contact-support">
            <p>
              <strong>Email :</strong> <a href="mailto:support@velnor.fr">support@velnor.fr</a><br />
              <strong>Réponse :</strong> Sous 24h ouvrées<br />
              <strong>Horaires :</strong> Lundi-Vendredi 9h-18h
            </p>
          </div>
        </section>

        <section>
          <h2>Problème Technique ?</h2>
          <p>
            Si vous rencontrez un problème :
          </p>
          <ul>
            <li>Vérifiez que votre URL est correcte (avec http:// ou https://)</li>
            <li>Assurez-vous que votre site est accessible publiquement</li>
            <li>Contactez notre support avec l'URL concernée</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Help;