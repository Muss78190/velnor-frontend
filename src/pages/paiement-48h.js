// src/pages/paiement-48h.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/payment.css';

const Paiement48h = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, on déclenche la logique de paiement 48 h
    history.push('/success');
  };

  return (
    <section className="payment-page">
      <div className="payment-container">
        <h2>Audit IA – 48 h</h2>
        <p className="payment-price">499&nbsp;€&nbsp;HT</p>
        <ul className="payment-features">
          <li>📄 Rapport PDF détaillé</li>
          <li>⚡ Livraison garantie 48 h</li>
          <li>✉ Envoi automatique par e-mail</li>
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

export default Paiement48h;
