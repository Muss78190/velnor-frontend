// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/LegalPages.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple redirection vers email - pas de stockage de données
    const subject = encodeURIComponent(formData.sujet);
    const body = encodeURIComponent(`Nom: ${formData.nom}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@velnor.fr?subject=${subject}&body=${body}`;
  };

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Contact</h1>
        
        <div className="contact-info">
          <h2>Informations de Contact</h2>
          <div className="contact-details">
            <p><strong>VELNOR</strong></p>
            <p>Email: contact@velnor.fr</p>
            <p>Service client : Lundi-Vendredi 9h-18h</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Nous Contacter</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom complet *</label>
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Sujet *</label>
              <select
                value={formData.sujet}
                onChange={(e) => setFormData({...formData, sujet: e.target.value})}
                required
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="Question technique">Question technique</option>
                <option value="Information commerciale">Information commerciale</option>
                <option value="Support">Support</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Message *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Envoyer le Message
            </button>
          </form>
        </div>

        <div className="response-time">
          <h3>Temps de Réponse</h3>
          <p>• Questions techniques : 24h ouvrées</p>
          <p>• Informations commerciales : 4h ouvrées</p>
          <p>• Support : 8h ouvrées</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;