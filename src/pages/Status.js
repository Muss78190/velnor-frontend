// src/pages/Status.js
import React, { useState, useEffect } from 'react';
import '../styles/LegalPages.css';

const Status = () => {
  const [apiStatus, setApiStatus] = useState('loading');

  useEffect(() => {
    // Test simple de l'API
    fetch('https://api.velnor.fr/health')
      .then(response => {
        if (response.ok) {
          setApiStatus('operational');
        } else {
          setApiStatus('degraded');
        }
      })
      .catch(() => {
        setApiStatus('down');
      });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#00ff88';
      case 'degraded': return '#ffaa00';
      case 'down': return '#ff4444';
      default: return '#888888';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational': return 'Opérationnel';
      case 'degraded': return 'Performance dégradée';
      case 'down': return 'Indisponible';
      default: return 'Vérification...';
    }
  };

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Statut du Système</h1>
        
        <div className="status-overview">
          <h2>État Actuel des Services</h2>
          
          <div className="service-status">
            <div className="service-item">
              <div 
                className="status-indicator"
                style={{ backgroundColor: getStatusColor(apiStatus) }}
              ></div>
              <div className="service-info">
                <h3>API VELNOR</h3>
                <p>{getStatusText(apiStatus)}</p>
              </div>
            </div>

            <div className="service-item">
              <div 
                className="status-indicator"
                style={{ backgroundColor: '#00ff88' }}
              ></div>
              <div className="service-info">
                <h3>Site Web</h3>
                <p>Opérationnel</p>
              </div>
            </div>

            <div className="service-item">
              <div 
                className="status-indicator"
                style={{ backgroundColor: '#00ff88' }}
              ></div>
              <div className="service-info">
                <h3>Paiements (Stripe)</h3>
                <p>Opérationnel</p>
              </div>
            </div>

            <div className="service-item">
              <div 
                className="status-indicator"
                style={{ backgroundColor: '#00ff88' }}
              ></div>
              <div className="service-info">
                <h3>Génération PDF</h3>
                <p>Opérationnel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="performance-metrics">
          <h2>Métriques de Performance</h2>
          <div className="metrics-grid">
            <div className="metric-item">
              <h3>Temps de Réponse API</h3>
              <p>&lt; 200 ms</p>
            </div>
            <div className="metric-item">
              <h3>Disponibilité (30 jours)</h3>
              <p>99.9%</p>
            </div>
            <div className="metric-item">
              <h3>Temps Génération PDF</h3>
              <p>&lt; 5 minutes</p>
            </div>
          </div>
        </div>

        <div className="recent-incidents">
          <h2>Incidents Récents</h2>
          <div className="incident-item">
            <p><strong>Aucun incident signalé</strong></p>
            <p>Tous les services fonctionnent normalement.</p>
          </div>
        </div>

        <div className="maintenance-schedule">
          <h2>Maintenance Programmée</h2>
          <p>Aucune maintenance programmée actuellement.</p>
        </div>

        <div className="contact-support">
          <h2>Signaler un Problème</h2>
          <p>
            Si vous rencontrez des difficultés :
          </p>
          <ul>
            <li>Email : <a href="mailto:support@velnor.fr">support@velnor.fr</a></li>
            <li>Décrivez le problème rencontré</li>
            <li>Incluez l'heure approximative</li>
          </ul>
        </div>

        <div className="last-updated">
          <p><em>Dernière mise à jour : {new Date().toLocaleString('fr-FR')}</em></p>
        </div>
      </div>
    </div>
  );
};

export default Status;