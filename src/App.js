// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/LandingPage.css"; // CSS global

import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/AdminLogin";
import AdminPayments from "./pages/AdminPayments";
import MentionsLegales from "./pages/MentionsLegales";
import Paiement24h from "./pages/paiement-24h";
import Paiement48h from "./pages/paiement-48h";
import Cancel from "./pages/cancel";
import Success from "./pages/success";

// 🚨 Manquaient :
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Help from "./pages/Help";
import Status from "./pages/Status";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/status" element={<Status />} />
        <Route path="/" element={<LandingPage />} />

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
      </Routes>
    </Router>
  );
}

export default App;
