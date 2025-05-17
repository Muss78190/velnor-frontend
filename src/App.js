import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Paiement48h from "./pages/Paiement48h";
import Paiement24h from "./pages/Paiement24h";
import AdminLogin from "./pages/AdminLogin";
import AdminPayments from "./pages/AdminPayments";
import SuccessPage from "./pages/SuccessPage";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/paiement-48h" element={<Paiement48h />} />
        <Route path="/paiement-24h" element={<Paiement24h />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPayments />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </Router>
  );
}

export default App;
