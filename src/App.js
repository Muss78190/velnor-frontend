import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuditPage from "./pages/AuditPage";
import AdminPage from "./pages/AdminPage";
// Ajoute ici tes autres pages si besoin

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/audit" element={<AuditPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* Ajoute tes autres routes ici */}
      </Routes>
    </Router>
  );
}

export default App;
