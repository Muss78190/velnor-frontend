import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/LandingPage.css";

// Import de toutes les pages existantes
import LandingPage from "./pages/LandingPage";
import LandingPageAudit from "./pages/LandingPageAudit";
import AdminLogin from "./pages/AdminLogin";
import AdminPayments from "./pages/AdminPayments";
import MentionsLegales from "./pages/MentionsLegales";
import Paiement24h from "./pages/paiement-24h";
import Paiement48h from "./pages/paiement-48h";
import Cancel from "./pages/cancel";
import Success from "./pages/success";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Audit, si c'est une landing spéciale */}
        <Route path="/audit" element={<LandingPageAudit />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/payments" element={<AdminPayments />} />

        {/* Paiement */}
        <Route path="/paiement-24h" element={<Paiement24h />} />
        <Route path="/paiement-48h" element={<Paiement48h />} />

        {/* Pages spéciales */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />

        {/* 404 : tu peux ajouter une page NotFound si tu veux */}
      </Routes>
    </Router>
  );
}

export default App;
