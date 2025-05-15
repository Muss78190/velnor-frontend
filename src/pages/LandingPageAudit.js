
import React, { useState } from "react";
import "../styles/LandingPageAudit.css";

const LandingPageAudit = () => {
  const [formData, setFormData] = useState({ name: "", email: "", website: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("http://localhost:8000/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.website,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("✅ Demande envoyée avec succès !");
        setFormData({ name: "", email: "", website: "" });
      } else {
        setStatus("❌ Erreur : " + (result.detail || "Impossible d’envoyer."));
      }
    } catch {
      setStatus("❌ Erreur réseau.");
    }
  };

  return (
    <div className="audit-container">
      <h1>🔍 Audit Cybersécurité IA – VIREON</h1>
      <p>Recevez un rapport PDF d’analyse IA en 48h.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Votre email professionnel" value={formData.email} onChange={handleChange} required />
        <input type="text" name="website" placeholder="Site web à auditer" value={formData.website} onChange={handleChange} required />
        <button type="submit">Demander mon audit</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default LandingPageAudit;
