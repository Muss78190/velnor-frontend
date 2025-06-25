// src/pages/AdminPayments.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminPayments.css";

const AdminPayments = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [taskId, setTaskId] = useState(null);
  
  // 🆕 États pour la progression
  const [currentPhase, setCurrentPhase] = useState("");
  const [progress, setProgress] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(0);
  
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth !== "ok") {
      navigate("/admin");
    }
  }, [navigate]);

  // 🆕 Timer pour le temps écoulé
  useEffect(() => {
    let interval;
    if (loading && taskId) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [loading, taskId]);

  // 🆕 Phases d'analyse avec estimations
  const getPhaseInfo = (elapsed) => {
    if (elapsed < 30) {
      return {
        phase: "🔍 Phase 1: Validation et reconnaissance réseau",
        progress: Math.min((elapsed / 30) * 25, 25),
        estimated: "2-3 minutes restantes"
      };
    } else if (elapsed < 180) {
      return {
        phase: "🕷️ Phase 2: Scan exhaustif des ports (1-65535)",
        progress: 25 + Math.min(((elapsed - 30) / 150) * 40, 40),
        estimated: `${Math.max(180 - elapsed, 0)}s restantes`
      };
    } else if (elapsed < 240) {
      return {
        phase: "🧠 Phase 3: Analyse IA des vulnérabilités",
        progress: 65 + Math.min(((elapsed - 180) / 60) * 20, 20),
        estimated: "1-2 minutes restantes"
      };
    } else if (elapsed < 300) {
      return {
        phase: "📊 Phase 4: Calcul du score et génération PDF",
        progress: 85 + Math.min(((elapsed - 240) / 60) * 10, 10),
        estimated: "Finalisation..."
      };
    } else {
      return {
        phase: "⚡ Phase 5: Finalisation et sauvegarde",
        progress: Math.min(95 + ((elapsed - 300) / 60) * 5, 99),
        estimated: "Presque terminé..."
      };
    }
  };

  // 🆕 Mise à jour des infos de progression
  useEffect(() => {
    if (loading && taskId) {
      const phaseInfo = getPhaseInfo(timeElapsed);
      setCurrentPhase(phaseInfo.phase);
      setProgress(phaseInfo.progress);
      setEstimatedTime(phaseInfo.estimated);
    }
  }, [timeElapsed, loading, taskId]);

  // 🆕 Polling pour récupérer le résultat
  const pollResult = async (taskId) => {
    const maxAttempts = 120; // 10 minutes max (5s * 120)
    let attempts = 0;

    const poll = async () => {
      try {
        const res = await fetch(`https://api.velnor.fr/scan-result/${taskId}`);
        const data = await res.json();

        if (data.status === "completed" || data.status === "failed") {
          // Analyse terminée
          setLoading(false);
          setProgress(100);
          setCurrentPhase("✅ Analyse terminée !");
          
          if (data.status === "completed") {
            setResult(data);
            setError("");
          } else {
            setError(data.error || "L'analyse a échoué");
            setResult(null);
          }
          return;
        }

        if (data.status === "en_cours") {
          // Continuer le polling
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(poll, 5000); // Vérifier toutes les 5 secondes
          } else {
            // Timeout
            setLoading(false);
            setError("L'analyse prend trop de temps. Veuillez réessayer.");
          }
          return;
        }

        // Statut inconnu
        setLoading(false);
        setError("Statut d'analyse inconnu");

      } catch (err) {
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 5000);
        } else {
          setLoading(false);
          setError("Erreur lors de la récupération du résultat");
        }
      }
    };

    // Démarrer le polling après 10 secondes
    setTimeout(poll, 10000);
  };

  const lancerAudit = async () => {
    if (!url) return;

    // Reset des états
    setLoading(true);
    setError("");
    setResult(null);
    setTaskId(null);
    setTimeElapsed(0);
    setProgress(0);
    setCurrentPhase("🚀 Initialisation de l'analyse...");

    try {
      const res = await fetch("https://api.velnor.fr/scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (res.ok && data.status === "en_cours") {
        setTaskId(data.task_id);
        setCurrentPhase("🔍 Phase 1: Validation et reconnaissance réseau");
        
        // Démarrer le polling
        pollResult(data.task_id);
      } else {
        setLoading(false);
        setError(data.message || data.detail || "Erreur lors du lancement");
      }
    } catch (err) {
      setLoading(false);
      setError("Erreur réseau ou serveur.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/admin");
  };

  // 🆕 Formatage du temps
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 🆕 Fonction pour télécharger le PDF
  const downloadPDF = () => {
    if (result && result.pdf) {
      // Utiliser la nouvelle route de téléchargement
      const downloadUrl = `https://api.velnor.fr${result.pdf}`;
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">🧠 Audit IA • VELNOR</h1>
        <button className="admin-logout-btn" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>

      <div className="admin-input-box">
        <input
          type="text"
          placeholder="https://monsite.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          aria-label="URL du site à auditer"
          disabled={loading}
        />
        <button onClick={lancerAudit} disabled={loading || !url}>
          {loading ? "⚡ Analyse en cours..." : "🚀 Lancer l'audit"}
        </button>
      </div>

      {/* 🆕 AFFICHAGE DE LA PROGRESSION */}
      {loading && taskId && (
        <div className="progress-container">
          <div className="progress-header">
            <h3>🔥 Analyse IA en cours</h3>
            <div className="progress-stats">
              <span className="time-elapsed">⏱️ {formatTime(timeElapsed)}</span>
              <span className="task-id">ID: {taskId}</span>
            </div>
          </div>
          
          <div className="current-phase">
            <p>{currentPhase}</p>
            <small>{estimatedTime}</small>
          </div>
          
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="progress-text">{Math.round(progress)}%</span>
          </div>

          <div className="analysis-info">
            <div className="info-item">
              <span className="info-label">🎯 Cible:</span>
              <span className="info-value">{url}</span>
            </div>
            <div className="info-item">
              <span className="info-label">🧠 Moteur:</span>
              <span className="info-value">VELNOR APE-X™ v3.0</span>
            </div>
            <div className="info-item">
              <span className="info-label">🔍 Mode:</span>
              <span className="info-value">Scan exhaustif (65,535 ports)</span>
            </div>
          </div>
        </div>
      )}

      {error && <p className="admin-error">❌ {error}</p>}

      {result && !loading && (
        <div className="admin-result">
          <div className="result-header">
            <h2>✅ Analyse terminée</h2>
            <div className="result-meta">
              <span>⏱️ Durée: {formatTime(timeElapsed)}</span>
              <span>🆔 Task ID: {taskId}</span>
            </div>
          </div>

          <div className="admin-section score-section">
            <div className="score-display">
              <div className="score-circle">
                <span className="score-number">{result.score}</span>
                <span className="score-total">/100</span>
              </div>
              <div className="score-status">
                {result.score < 40 && <span className="status-critical">🔴 CRITIQUE</span>}
                {result.score >= 40 && result.score < 70 && <span className="status-warning">🟠 MOYEN</span>}
                {result.score >= 70 && result.score < 90 && <span className="status-good">🟡 BON</span>}
                {result.score >= 90 && <span className="status-excellent">🟢 EXCELLENT</span>}
              </div>
            </div>
            <div className="score-details">
              <p><strong>🌐 URL analysée:</strong> {result.url || url}</p>
              <p><strong>📄 Résumé:</strong> {result.resume}</p>
            </div>
          </div>

          <div className="admin-section">
            <h3>⚠️ Anomalies détectées ({result.anomalies?.length || 0})</h3>
            {result.anomalies && result.anomalies.length > 0 ? (
              <ul className="anomalies-list">
                {result.anomalies.map((a, i) => (
                  <li key={i} className="anomaly-item">
                    {a.includes('sql') || a.includes('SQL') ? '🚨' : 
                     a.includes('xss') || a.includes('XSS') ? '🚨' : 
                     a.includes('rce') || a.includes('RCE') ? '🚨' : '⚠️'} {a}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-items">✅ Aucune anomalie critique détectée.</p>
            )}
          </div>

          <div className="admin-section">
            <h3>💡 Recommandations IA ({result.recommendations?.length || 0})</h3>
            {result.recommendations && result.recommendations.length > 0 ? (
              <ul className="recommendations-list">
                {result.recommendations.map((r, i) => (
                  <li key={i} className="recommendation-item">
                    {i < 3 ? '🔴' : '🟡'} {r}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-items">✅ Aucune recommandation spécifique.</p>
            )}
          </div>

          {result.pdf && (
            <div className="pdf-download-section">
              <button 
                onClick={downloadPDF}
                className="admin-download-btn"
                aria-label="Télécharger le rapport PDF"
              >
                📥 Télécharger le rapport PDF
              </button>
              <small>Rapport détaillé avec graphiques et métadonnées</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminPayments;