import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingPageAudit from "./pages/LandingPageAudit";
import Paiement24h from "./pages/paiement-24h";
import Paiement48h from "./pages/paiement48h";
import SuccessPage from "./pages/success";
import CancelPage from "./pages/cancel";
import AdminPayments from "./pages/AdminPayments";
import MentionsLegales from "./pages/MentionsLegales";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/audit" element={<LandingPageAudit />} />
        <Route path="/paiement-24h" element={<Paiement24h />} />
        <Route path="/paiement-48h" element={<Paiement48h />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/admin" element={<AdminPayments />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </Router>
  );
}

export default App;
