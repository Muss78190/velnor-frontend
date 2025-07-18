import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import {
  FaShieldAlt,
  FaRocket,
  FaStar,
  FaBars,
  FaTimes,
  FaChartBar,
  FaEye,
  FaCog,
  FaLock,
  FaCode,
  FaDatabase,
  FaNetworkWired,
  FaBrain,
  FaAtom,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaPlus,
  FaMinus,
  FaCertificate,
  FaAward,
  FaChevronDown,
} from 'react-icons/fa';
import { 
  GiSpaceship, 
  GiArtificialIntelligence,
  GiCircuitry,
  GiCrystalGrowth,
  GiLaserSparks,
  GiAtom,
  GiCrystalBall,
  GiTechnoHeart,
  GiProcessor,
  GiRadarSweep,
} from 'react-icons/gi';
import { 
  MdSecurity, 
  MdSpeed,
  MdAutoGraph,
  MdOutlineAnalytics,
  Md3dRotation,
  MdOutlineScience,
  MdElectricBolt,
  MdRadar,
} from 'react-icons/md';
import { 
  BsShieldCheck, 
  BsLightning,
  BsGraphUp,
  BsCloudLightning,
  BsCpuFill,
  BsHexagon,
  BsTriangle,
} from 'react-icons/bs';
import { 
  BiAtom,
  BiPulse,
  BiDna,
  BiCube,
  BiPlanet,
} from 'react-icons/bi';
import { 
  IoMdPulse,
  IoMdGlobe,
  IoMdFlash,
} from 'react-icons/io';

// ================= CONFIGURATION OPTIMISÉE =================
const CONFIG = {
  animationThreshold: 0.1,
  scrollSmoothness: 1.2,
  intersectionOptions: {
    threshold: 0.1,
    rootMargin: '50px'
  }
};

// ================= HOOK D'INTERSECTION OBSERVER =================
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(element);
        }
      },
      { ...CONFIG.intersectionOptions, ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isIntersecting];
};

const VelnorLanding = () => {
  // ================= STATES =================
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // ================= REFS =================
  const navRef = useRef(null);
  const heroRef = useRef(null);

  // ================= LOADING EFFECT =================
  useEffect(() => {
    // Simulation de chargement rapide
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // ================= SCROLL EFFECTS =================
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Navbar scroll effect
      if (navRef.current) {
        if (window.pageYOffset > 50) {
          navRef.current.classList.add('scrolled');
        } else {
          navRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ================= NAVIGATION =================
  const handleNavClick = useCallback((e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  }, []);

  const handleCTAClick = useCallback(() => {
    const offersSection = document.querySelector('#offres');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  // ================= LOADER SIMPLE =================
  if (loading) {
    return (
      <div className="quantum-loader-simple">
        <div className="loader-content">
          <div className="loader-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-core"></div>
          </div>
          <div className="loader-text">VELNOR</div>
          <div className="loader-subtitle">Initialisation...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ================= PROGRESS BAR ================= */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav ref={navRef} className="quantum-navbar">
        <div className="navbar-content">
          <div className="quantum-logo">
            <span className="logo-text">VELNOR</span>
          </div>
          
          <div className={`quantum-menu ${menuOpen ? 'open' : ''}`}>
            {[
              { name: 'Accueil', id: 'hero', icon: FaRocket },
              { name: 'Processus', id: 'fonctionnement', icon: GiCircuitry },
              { name: 'Technologie', id: 'technologie', icon: GiArtificialIntelligence },
              { name: 'Offres', id: 'offres', icon: FaShieldAlt },
              { name: 'Témoignages', id: 'temoignages', icon: FaStar },
              { name: 'FAQ', id: 'faq', icon: FaQuoteLeft }
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, `#${item.id}`)}
                className={`quantum-nav-link ${activeSection === item.id ? 'active' : ''}`}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </a>
            ))}
            
            <button 
              className="quantum-admin-btn"
              onClick={() => window.location.href = '/admin'}
            >
              <FaCog className="admin-icon" />
              <span>Admin</span>
            </button>
          </div>

          <button
            className="quantum-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
            <div className={`burger-line ${menuOpen ? 'open' : ''}`}></div>
          </button>
        </div>
      </nav>

      <main className="quantum-main">
        {/* ================= HERO SECTION ================= */}
        <HeroSection onCTAClick={handleCTAClick} />

        {/* ================= STATS BANNER ================= */}
        <StatsBanner />

        {/* ================= PROCESSUS ================= */}
        <ProcessSection />

        {/* ================= TECHNOLOGIE ================= */}
        <TechSection />

        {/* ================= OFFRES ================= */}
        <OffersSection selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />

        {/* ================= TÉMOIGNAGES ================= */}
        <TestimonialsSection />

        {/* ================= FAQ ================= */}
        <FAQSection expandedFAQ={expandedFAQ} setExpandedFAQ={setExpandedFAQ} />

        {/* ================= CTA FINAL ================= */}
        <FinalCTA onCTAClick={handleCTAClick} />
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
};

// ================= HERO SECTION =================
const HeroSection = ({ onCTAClick }) => {
  const [heroRef, isVisible] = useIntersectionObserver();

  return (
    <section id="hero" className="quantum-hero" ref={heroRef}>
      <div className="hero-quantum-bg">
        <div className="quantum-grid"></div>
      </div>
      
      <div className={`hero-content ${isVisible ? 'animate-in' : ''}`}>
        <div className="hero-badge">
          <BsLightning className="badge-icon" />
          <span>IA Révolutionnaire</span>
        </div>
        
        <h1 className="quantum-title">
          <span className="title-line">L'Intelligence Artificielle</span>
          <span className="title-line highlight">qui révolutionne</span>
          <span className="title-line">votre cybersécurité</span>
        </h1>
        
        <p className="quantum-subtitle">
          <span className="subtitle-tech">Technologie quantique</span>
          <span className="subtitle-separator">•</span>
          <span className="subtitle-tech">Analyse prédictive</span>
          <span className="subtitle-separator">•</span>
          <span className="subtitle-tech">Rapport holographique</span>
          <br />
          <strong className="delivery-highlight">
            <MdElectricBolt className="highlight-icon" />
            Livraison Ultra-Rapide 24h-48h
          </strong>
        </p>

        <p className="quantum-description">
          VELNOR déploie une <span className="text-glow">Intelligence Artificielle</span> de nouvelle génération 
          qui analyse votre infrastructure avec une <span className="text-glow">précision quantique</span>. 
          Notre système révolutionnaire détecte les menaces invisibles, 
          génère des <span className="text-glow">rapports PDF ultra-détaillés</span> et délivre des badges 
          de confiance certifiés.
        </p>

        <div className="quantum-cta-container">
          <button className="quantum-cta-btn main-cta" onClick={onCTAClick}>
            <GiArtificialIntelligence className="cta-icon" />
            <span>Lancer Audit Quantique</span>
            <div className="btn-glow"></div>
          </button>
          
          <div className="cta-stats">
            <div className="stat-item">
              <IoMdPulse className="stat-icon-animated" />
              <span className="stat-number">2.3M+</span>
              <span className="stat-label">Menaces Détectées</span>
            </div>
            <div className="stat-item">
              <GiAtom className="stat-icon-animated" />
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Précision IA</span>
            </div>
            <div className="stat-item">
              <MdRadar className="stat-icon-animated" />
              <span className="stat-number">0.3s</span>
              <span className="stat-label">Temps Réponse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ================= STATS BANNER =================
const StatsBanner = () => {
  const [statsRef, isVisible] = useIntersectionObserver();

  return (
    <section className="quantum-stats-banner" ref={statsRef}>
      <div className="stats-container">
        <div className={`stats-grid ${isVisible ? 'animate-in' : ''}`}>
          {[
            { icon: GiRadarSweep, value: "847K", label: "Sites Analysés", color: "blue" },
            { icon: BsShieldCheck, value: "99.97%", label: "Détection", color: "purple" },
            { icon: IoMdFlash, value: "2.3TB/s", label: "Vitesse Traitement", color: "green" },
            { icon: FaAward, value: "ISO 27001", label: "Certifié", color: "gold" }
          ].map((stat, index) => (
            <div key={index} className="global-stat-item" data-color={stat.color}>
              <div className="stat-icon-container">
                <stat.icon className="stat-icon" />
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ================= PROCESS SECTION =================
const ProcessSection = () => {
  const [processRef, isVisible] = useIntersectionObserver();

  const steps = [
    {
      icon: GiRadarSweep,
      title: "Scan Quantique",
      description: "L'IA analyse votre site avec une précision moléculaire, détectant les moindres anomalies",
      features: ["Analyse en temps réel", "Scan multi-dimensionnel", "Détection prédictive"],
      color: "blue"
    },
    {
      icon: GiArtificialIntelligence,
      title: "Analyse Prédictive",
      description: "Détection des vulnérabilités futures grâce à nos algorithmes quantiques",
      features: ["Machine Learning avancé", "Prédiction temporelle", "Analyse comportementale"],
      color: "purple"
    },
    {
      icon: GiCrystalBall,
      title: "Rapport Holographique",
      description: "PDF ultra-détaillé avec visualisations 3D et recommandations personnalisées",
      features: ["Rapport interactif", "Visualisations 3D", "Plan d'action détaillé"],
      color: "green"
    }
  ];

  return (
    <section id="fonctionnement" className="quantum-section" ref={processRef}>
      <div className="section-header">
        <div className="section-badge">
          <GiCircuitry />
          <span>Processus</span>
        </div>
        <h2 className="quantum-section-title">
          <span>Processus</span>
          <span className="title-accent">Révolutionnaire</span>
        </h2>
      </div>

      <div className={`quantum-process-container ${isVisible ? 'animate-in' : ''}`}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`quantum-process-card quantum-card color-${step.color}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="process-card-header">
              <div className="process-icon-container">
                <step.icon className="process-icon" />
              </div>
              <div className="process-number">0{index + 1}</div>
            </div>
            
            <h3 className="process-title">{step.title}</h3>
            <p className="process-description">{step.description}</p>
            
            <div className="process-features">
              {step.features.map((feature, fIndex) => (
                <div key={fIndex} className="feature-item">
                  <FaCheckCircle className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= TECH SECTION =================
const TechSection = () => {
  const [techRef, isVisible] = useIntersectionObserver();

  const technologies = [
    {
      icon: GiArtificialIntelligence,
      title: "IA Quantique",
      description: "Réseaux de neurones quantiques pour une analyse prédictive révolutionnaire",
      color: "purple"
    },
    {
      icon: MdSecurity,
      title: "Bouclier Adaptatif",
      description: "Système de défense auto-évolutif qui s'adapte aux nouvelles menaces",
      color: "blue"
    },
    {
      icon: FaChartBar,
      title: "Analytics 4D",
      description: "Visualisation multi-dimensionnelle des données de sécurité",
      color: "green"
    },
    {
      icon: BsLightning,
      title: "Traitement Éclair",
      description: "Analyse ultra-rapide grâce à l'informatique quantique",
      color: "yellow"
    },
    {
      icon: GiCrystalGrowth,
      title: "Auto-Évolution",
      description: "Système qui apprend et évolue continuellement",
      color: "purple"
    },
    {
      icon: BiDna,
      title: "ADN Digital",
      description: "Empreinte numérique unique pour chaque infrastructure",
      color: "blue"
    }
  ];

  return (
    <section id="technologie" className="quantum-section tech-section" ref={techRef}>
      <div className="section-header">
        <div className="section-badge">
          <GiProcessor />
          <span>Technologies</span>
        </div>
        <h2 className="quantum-section-title">
          <span>Arsenal</span>
          <span className="title-accent">Technologique</span>
        </h2>
      </div>

      <div className={`quantum-tech-grid ${isVisible ? 'animate-in' : ''}`}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`quantum-tech-card quantum-card color-${tech.color}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tech-card-header">
              <div className="tech-icon-sphere">
                <tech.icon className="tech-icon" />
              </div>
            </div>

            <div className="tech-card-content">
              <h3 className="tech-title">{tech.title}</h3>
              <p className="tech-description">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= OFFERS SECTION - VERSION CORRIGÉE =================
const OffersSection = ({ selectedPlan, setSelectedPlan }) => {
  const [offersRef, isVisible] = useIntersectionObserver();

  const offers = [
    {
      id: "starter",
      name: "Audit Quantique 48h",
      price: "1499",
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
      price: "1999",
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

// ================= TESTIMONIALS SECTION =================
const TestimonialsSection = () => {
  const [testimonialsRef, isVisible] = useIntersectionObserver();

  const testimonials = [
    {
      text: "VELNOR a révolutionné notre approche cybersécurité. L'IA quantique a détecté des vulnérabilités que nos équipes n'avaient jamais vues.",
      author: "Alexandre Chen",
      position: "CTO",
      company: "TechNova",
      rating: 5
    },
    {
      text: "En 24h, j'ai reçu un audit qui m'aurait coûté 10x plus cher ailleurs. La qualité du rapport PDF est digne d'un cabinet international.",
      author: "Sarah Martinez",
      position: "Lead Developer",
      company: "Freelance",
      rating: 5
    },
    {
      text: "Le badge de confiance VELNOR a augmenté notre taux de conversion de 34%. Investissement le plus rentable de l'année.",
      author: "Marcus Weber",
      position: "CISO",
      company: "SecureFlow",
      rating: 5
    }
  ];

  return (
    <section id="temoignages" className="quantum-section testimonials-section" ref={testimonialsRef}>
      <div className="section-header">
        <div className="section-badge">
          <FaStar />
          <span>Témoignages</span>
        </div>
        <h2 className="quantum-section-title">
          <span>Retours</span>
          <span className="title-accent">Clients</span>
        </h2>
      </div>

      <div className={`quantum-testimonials-grid ${isVisible ? 'animate-in' : ''}`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="quantum-testimonial-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="testimonial-header">
              <div className="rating-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>
            </div>

            <p className="testimonial-text">"{testimonial.text}"</p>

            <div className="testimonial-author">
              <h4>{testimonial.author}</h4>
              <p>{testimonial.position} • {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= FAQ SECTION =================
const FAQSection = ({ expandedFAQ, setExpandedFAQ }) => {
  const [faqRef, isVisible] = useIntersectionObserver();

  const faqs = [
    {
      id: 1,
      question: "Qu'est-ce qui rend votre IA 'quantique' ?",
      answer: "Notre IA utilise des algorithmes inspirés de l'informatique quantique pour analyser simultanément des millions de patterns de sécurité. Cette approche révolutionnaire permet une précision de détection de 99.97%.",
      icon: GiArtificialIntelligence
    },
    {
      id: 2,
      question: "Quelle est la différence entre les plans 24h et 48h ?",
      answer: "Le plan 24h inclut notre analyse quantique avancée avec IA prédictive, un rapport holographique de 100+ pages, le badge de confiance premium, et un support prioritaire 24/7.",
      icon: FaRocket
    },
    {
      id: 3,
      question: "Comment garantissez-vous la sécurité de nos données ?",
      answer: "Sécurité zéro-trust avec chiffrement AES-256 de bout en bout. Vos données sont analysées dans des environnements isolés et automatiquement supprimées après livraison.",
      icon: FaLock
    }
  ];

  return (
    <section id="faq" className="quantum-section faq-section" ref={faqRef}>
      <div className="section-header">
        <div className="section-badge">
          <FaQuoteLeft />
          <span>FAQ</span>
        </div>
        <h2 className="quantum-section-title">
          <span>Questions</span>
          <span className="title-accent">Fréquentes</span>
        </h2>
      </div>

      <div className={`quantum-faq-container ${isVisible ? 'animate-in' : ''}`}>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`quantum-faq-item ${expandedFAQ === faq.id ? 'expanded' : ''}`}
            onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="faq-question">
              <div className="question-content">
                <faq.icon className="question-icon" />
                <h3>{faq.question}</h3>
              </div>
              <div className="question-toggle">
                {expandedFAQ === faq.id ? <FaMinus /> : <FaPlus />}
              </div>
            </div>
            
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ================= FINAL CTA =================
const FinalCTA = ({ onCTAClick }) => {
  const [ctaRef, isVisible] = useIntersectionObserver();

  return (
    <section className="quantum-final-cta" ref={ctaRef}>
      <div className={`final-cta-content ${isVisible ? 'animate-in' : ''}`}>
        <h2 className="cta-title">
          Prêt à Révolutionner Votre Cybersécurité ?
        </h2>
        <p className="cta-subtitle">
          Rejoignez des milliers d'entreprises qui font confiance à VELNOR
        </p>
        
        <button className="quantum-mega-cta" onClick={onCTAClick}>
          <GiAtom className="mega-icon" />
          <span>Commencer Mon Audit Quantique</span>
        </button>
      </div>
    </section>
  );
};

// ================= FOOTER =================
const Footer = () => {
  return (
    <footer className="quantum-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-text">VELNOR</span>
            </div>
            <p className="footer-tagline">
              L'avenir de la cybersécurité, alimenté par l'intelligence quantique
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Produit</h4>
              <a href="#fonctionnement">Fonctionnement</a>
              <a href="#technologie">Technologie</a>
              <a href="#offres">Plans & Tarifs</a>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <a href="/help">Centre d'Aide</a>
              <a href="/contact">Contact</a>
              <a href="/status">Statut Système</a>
            </div>
            
            <div className="footer-column">
              <h4>Légal</h4>
              <a href="/privacy">Confidentialité</a>
              <a href="/terms">Conditions</a>
              <a href="/security">Sécurité</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 VELNOR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default VelnorLanding;