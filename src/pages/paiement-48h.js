// src/pages/paiement-48h.js
import React, { useState } from "react";
import "../styles/Paiement.css";

const Paiement48h = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showForm, setShowForm] = useState(true);
  
  // Données du formulaire
  const [formData, setFormData] = useState({
    url: '',
    email: '',
    nom: '',
    entreprise: ''
  });

  // Validation URL simple
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return url.startsWith('http://') || url.startsWith('https://');
    } catch {
      return false;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.url.trim()) {
      setErrorMsg("L'URL du site est obligatoire");
      return;
    }
    
    if (!isValidUrl(formData.url)) {
      setErrorMsg("URL invalide. Utilisez le format: https://votre-site.com");
      return;
    }
    
    if (!formData.email.trim()) {
      setErrorMsg("L'email est obligatoire");
      return;
    }
    
    if (!formData.nom.trim()) {
      setErrorMsg("Le nom est obligatoire");
      return;
    }

    // Masquer le formulaire et lancer le paiement
    setShowForm(false);
    handleCheckout();
  };

  const handleCheckout = async () => {
    setLoading(true);
    setErrorMsg(null);
    
    try {
      const response = await fetch("https://api.velnor.fr/create-checkout-session-48h", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData) // ⭐ MAINTENANT ON ENVOIE LES DONNÉES
      });
      
      const resText = await response.text();
      
      if (!response.ok) {
        throw new Error("Erreur backend : " + resText);
      }
      
      const data = JSON.parse(resText);
      
      if (!data.url) throw new Error("URL de redirection manquante");
      
      window.location.href = data.url;
      
    } catch (err) {
      console.error("Paiement48h erreur :", err);
      setErrorMsg(err.message);
      setLoading(false);
      setShowForm(true); // Remontre le formulaire en cas d'erreur
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errorMsg) setErrorMsg(null);
  };

  if (!showForm && loading) {
    return (
      <div className="paiement-page">
        <div className="paiement-container">
          <h2>Redirection vers Stripe...</h2>
          <div className="loading-spinner"></div>
          <p style={{color: 'var(--color-text-secondary)', marginTop: '1rem'}}>
            Vous allez être redirigé vers le paiement sécurisé
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="paiement-page">
      <div className="paiement-container">
        <h2>Audit Cybersécurité – 48h</h2>
        <div className="price-badge">499€ HT</div>
        
        <form onSubmit={handleFormSubmit} className="paiement-form">
          <div className="form-group">
            <label>Site à auditer *</label>
            <input
              type="url"
              placeholder="https://votre-site.com"
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Email de contact *</label>
            <input
              type="email"
              placeholder="votre@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Nom complet *</label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.nom}
              onChange={(e) => handleInputChange('nom', e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Entreprise</label>
            <input
              type="text"
              placeholder="Nom de votre entreprise (optionnel)"
              value={formData.entreprise}
              onChange={(e) => handleInputChange('entreprise', e.target.value)}
              className="form-input"
            />
          </div>

          <button
            type="submit"
            className={`btn-payer ${loading ? "loading" : ""}`}
            disabled={loading}
          >
            {loading ? "Redirection…" : "Payer 499€ HT et Démarrer l'Audit"}
          </button>
        </form>

        {errorMsg && <p className="paiement-error">{errorMsg}</p>}
        
        <div className="security-info">
          <p>🔒 Paiement sécurisé par Stripe</p>
          <p>📧 Rapport PDF livré par email sous 48h</p>
          <p>💯 Satisfait ou remboursé</p>
        </div>
      </div>
    </div>
  );
};

export default Paiement48h;