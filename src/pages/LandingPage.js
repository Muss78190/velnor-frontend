// ================= OFFERS SECTION - VERSION CORRIGÉE =================
// Remplace UNIQUEMENT cette section dans ton LandingPage.js (vers ligne 580-650)

const OffersSection = ({ selectedPlan, setSelectedPlan }) => {
  const [offersRef, isVisible] = useIntersectionObserver();

  const offers = [
    {
      id: "starter",
      name: "Audit Quantique 48h",
      price: "499",
      route: "/paiement-48h", // ⭐ AJOUTÉ
      features: [
        { name: "Scan IA Complet", included: true },
        { name: "Rapport PDF Ultra-Détaillé", included: true },
        { name: "Détection 500+ Vulnérabilités", included: true },
        { name: "Support Email Standard", included: true },
        { name: "Garantie Livraison 48h", included: true }
      ],
      icon: BsShieldCheck
    },
    {
      id: "premium",
      name: "Audit Quantique 24h",
      price: "699",
      route: "/paiement-24h", // ⭐ AJOUTÉ
      features: [
        { name: "Scan IA Quantique Avancé", included: true },
        { name: "Rapport Holographique PDF", included: true },
        { name: "Détection 1000+ Vulnérabilités", included: true },
        { name: "Badge de Confiance Premium", included: true },
        { name: "Support Prioritaire 24/7", included: true }
      ],
      popular: true,
      icon: GiAtom
    }
  ];

  return (
    <section id="offres" className="quantum-section offers-section" ref={offersRef}>
      <div className="section-header">
        <div className="section-badge">
          <FaCertificate />
          <span>Offres</span>
        </div>
        <h2 className="quantum-section-title">
          <span>Plans</span>
          <span className="title-accent">Quantiques</span>
        </h2>
      </div>

      <div className={`quantum-offers-container ${isVisible ? 'animate-in' : ''}`}>
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`quantum-offer-card ${offer.popular ? 'popular' : ''} ${selectedPlan === offer.id ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(offer.id)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {offer.popular && (
              <div className="offer-badge">
                <span>POPULAIRE</span>
              </div>
            )}

            <div className="offer-header">
              <div className="offer-icon-container">
                <offer.icon className="offer-icon" />
              </div>
              <h3 className="offer-name">{offer.name}</h3>
            </div>

            <div className="offer-pricing">
              <span className="price-main">{offer.price}</span>
              <span className="price-currency">€ HT</span>
            </div>

            <div className="offer-features">
              {offer.features.map((feature, fIndex) => (
                <div key={fIndex} className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span className="feature-text">{feature.name}</span>
                </div>
              ))}
            </div>

            <button 
              className={`quantum-offer-btn ${offer.popular ? 'popular' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                window.location.href = offer.route; // ⭐ CHANGÉ DE `/checkout?plan=${offer.id}` vers `offer.route`
              }}
            >
              <span>Sélectionner ce Plan</span>
              <FaArrowRight className="btn-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};


export default VelnorLanding;