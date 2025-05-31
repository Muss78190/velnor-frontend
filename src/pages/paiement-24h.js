// src/pages/paiement-24h.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/payment.css';

const Paiement24h = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous déclenchez votre logique de paiement (ex : appel API Stripe, etc.)
    // Pour la démo, on redirige vers la page de succès
    history.push('/success');
  };

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h2>Audit Express – 24 h</h2>
        <p className="payment-price">699&nbsp;€&nbsp;HT</p>
        <ul className="payment-features">
          <li>⚡ Traitement prioritaire</li>
          <li>📄 Rapport & Badge sécurité</li>
          <li>✉ Livraison garantie 24 h</li>
        </ul>
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Votre e-mail professionnel</label>
          <input
            type="email"
            id="email"
            placeholder="exemple@entreprise.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
          />
          <button type="submit" className="payment-btn">
            Payer maintenant
          </button>
        </form>
        <button
          className="payment-back"
          onClick={() => history.push('/')}
          aria-label="Retour à l’accueil"
        >
          ← Retour
        </button>
      </div>
    </section>
  );
};

export default Paiement24h;
