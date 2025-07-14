// src/pages/MentionsLegales.js
import React from 'react';
import '../styles/LegalPages.css';

const MentionsLegales = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Mentions Légales</h1>

        <section>
          <h2>1. Éditeur du Site</h2>
          <p>
            <strong>Site web :</strong> velnor.fr<br />
            <strong>Éditeur :</strong> Mustapha Benlahcen<br />
            <strong>Email :</strong> contact@velnor.fr<br />
            <strong>Activité :</strong> Audit cybersécurité automatisé
          </p>
        </section>

        <section>
          <h2>2. Hébergement</h2>
          <p>
            <strong>Site web :</strong><br />
            Vercel Inc.<br />
            San Francisco, États-Unis<br />
            Site : vercel.com
          </p>
          
          <p>
            <strong>Services backend :</strong><br />
            Scaleway SAS<br />
            8 rue de la Ville l'Évêque<br />
            75008 Paris, France<br />
            Site : scaleway.com
          </p>
        </section>

        <section>
          <h2>3. Propriété Intellectuelle</h2>
          <p>
            Le site velnor.fr et ses contenus sont protégés par le droit d'auteur. 
            Toute reproduction sans autorisation est interdite.
          </p>
        </section>

        <section>
          <h2>4. Données Personnelles</h2>
          <p>
            Le traitement des données est décrit dans notre 
            <a href="/privacy"> Politique de Confidentialité</a>.
          </p>
        </section>

        <section>
          <h2>5. Responsabilité</h2>
          <p>
            <strong>Limitation de responsabilité :</strong> L'éditeur s'efforce 
            d'assurer l'exactitude des informations mais ne peut garantir 
            l'absence d'erreurs. L'utilisation du site se fait aux risques 
            et périls de l'utilisateur.
          </p>
        </section>

        <section>
          <h2>6. Cookies</h2>
          <p>
            Ce site utilise uniquement des cookies techniques nécessaires 
            au fonctionnement. Aucun tracking publicitaire.
          </p>
        </section>

        <section>
          <h2>7. Liens Externes</h2>
          <p>
            Le site peut contenir des liens vers d'autres sites. 
            L'éditeur n'est pas responsable de leur contenu.
          </p>
        </section>

        <section>
          <h2>8. Droit Applicable</h2>
          <p>
            Site soumis au droit français. Tribunaux français compétents 
            pour tout litige.
          </p>
        </section>

        <section>
          <h2>9. Contact</h2>
          <p>
            Questions relatives aux mentions légales :<br />
            Email : <a href="mailto:assistance.velnor@outlook.fr">assistance.velnor@outlook.fr</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegales;