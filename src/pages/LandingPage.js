import React, { useState, useEffect, useCallback, memo } from 'react';
import { 
  Shield, 
  Zap, 
  CheckCircle, 
  ChevronDown, 
  ChevronRight,
  Star,
  Menu,
  X,
  Clock,
  Award,
  Users,
  Cpu,
  Lock,
  BarChart3,
  ArrowRight,
  Brain,
  Globe,
  Settings
} from 'lucide-react';

// ================= COMPOSANTS MÉMORISÉS =================
const Icon = memo(({ icon: IconComponent, className = "" }) => (
  <IconComponent className={className} />
));

const Button = memo(({ 
  children, 
  variant = "primary", 
  onClick, 
  className = "",
  icon: IconComponent,
  ...props 
}) => (
  <button
    className={`btn btn-${variant} ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
    {IconComponent && <IconComponent className="btn-icon" />}
  </button>
));

// ================= HEADER =================
const Header = memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#process', label: 'Processus' },
    { href: '#tech', label: 'Technologies' },
    { href: '#offers', label: 'Offres' },
    { href: '#testimonials', label: 'Témoignages' },
    { href: '#faq', label: 'FAQ' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <a href="/" className="logo">
          VELNOR
        </a>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '/admin'}
            icon={Settings}
          >
            Admin
          </Button>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
});

// ================= HERO SECTION =================
const HeroSection = memo(() => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <div className="hero-badge">
          <Zap className="badge-icon" />
          <span>IA & Cybersécurité</span>
        </div>
        
        <h1 className="hero-title">
          L'audit de sécurité
          <span className="text-gradient"> nouvelle génération</span>
        </h1>
        
        <p className="hero-subtitle">
          Détectez et corrigez vos vulnérabilités en 24h grâce à notre IA avancée.
          Rapport détaillé, badge de confiance et protection garantie.
        </p>

        <div className="hero-cta">
          <Button onClick={() => window.location.href = '#offers'} icon={ArrowRight}>
            Commencer l'audit
          </Button>
          <p className="hero-trust">
            <CheckCircle className="trust-icon" />
            <span>2,847 entreprises protégées</span>
          </p>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">99.9%</span>
            <span className="stat-label">Précision</span>
          </div>
          <div className="stat">
            <span className="stat-value">24h</span>
            <span className="stat-label">Livraison</span>
          </div>
          <div className="stat">
            <span className="stat-value">500+</span>
            <span className="stat-label">Vulnérabilités</span>
          </div>
        </div>
      </div>
    </div>
  </section>
));

// ================= PROCESSUS =================
const ProcessSection = memo(() => {
  const steps = [
    {
      icon: Brain,
      title: "Analyse IA",
      description: "Notre IA scanne votre infrastructure en profondeur"
    },
    {
      icon: Shield,
      title: "Détection",
      description: "Identification des vulnérabilités et menaces"
    },
    {
      icon: BarChart3,
      title: "Rapport",
      description: "PDF détaillé avec recommandations personnalisées"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Badge de confiance pour rassurer vos clients"
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Notre Processus</h2>
          <p className="section-subtitle">
            Un audit complet en 4 étapes simples et efficaces
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-number">{index + 1}</div>
              <div className="process-icon">
                <step.icon />
              </div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// ================= TECHNOLOGIES =================
const TechSection = memo(() => {
  const technologies = [
    { name: "OWASP ZAP", icon: Shield },
    { name: "Nmap", icon: Globe },
    { name: "FastAPI", icon: Zap },
    { name: "TensorFlow", icon: Brain },
    { name: "React", icon: Cpu },
    { name: "Stripe", icon: Lock }
  ];

  return (
    <section id="tech" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technologies Utilisées</h2>
          <p className="section-subtitle">
            Les meilleurs outils pour votre sécurité
          </p>
        </div>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <tech.icon className="tech-icon" />
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

// ================= OFFRES =================
const OffersSection = memo(() => {
  const offers = [
    {
      name: "Audit Express",
      price: "499",
      duration: "48h",
      features: [
        "Scan complet IA",
        "Rapport PDF 50+ pages",
        "500+ vulnérabilités",
        "Support email",
        "Badge standard"
      ],
      cta: "Choisir Express"
    },
    {
      name: "Audit Premium",
      price: "699",
      duration: "24h",
      features: [
        "Scan IA avancé",
        "Rapport PDF 100+ pages",
        "1000+ vulnérabilités",
        "Support prioritaire 24/7",
        "Badge premium",
        "Consultation expert 1h"
      ],
      popular: true,
      cta: "Choisir Premium"
    }
  ];

  return (
    <section id="offers" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nos Offres</h2>
          <p className="section-subtitle">
            Choisissez la protection adaptée à vos besoins
          </p>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className={`offer-card ${offer.popular ? 'popular' : ''}`}>
              {offer.popular && <div className="offer-badge">Populaire</div>}
              
              <h3 className="offer-name">{offer.name}</h3>
              <div className="offer-price">
                <span className="price-value">{offer.price}€</span>
                <span className="price-unit">HT</span>
              </div>
              <p className="offer-duration">
                <Clock className="duration-icon" />
                Livraison en {offer.duration}
              </p>

              <ul className="offer-features">
                {offer.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={offer.popular ? "primary" : "secondary"}
                className="offer-cta"
                onClick={() => window.location.href = `/checkout?plan=${index}`}
              >
                {offer.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="offers-trust">
          <Lock className="trust-icon" />
          <span>Paiement sécurisé • Satisfait ou remboursé</span>
        </div>
      </div>
    </section>
  );
});

// ================= TÉMOIGNAGES =================
const TestimonialsSection = memo(() => {
  const testimonials = [
    {
      text: "VELNOR a détecté des vulnérabilités critiques que nous n'avions jamais vues. Le rapport est d'une précision exceptionnelle.",
      author: "Marie Chen",
      position: "CTO, TechStart",
      rating: 5
    },
    {
      text: "En 24h, j'ai reçu un audit complet qui m'aurait coûté 10x plus cher ailleurs. Rapport professionnel et recommandations claires.",
      author: "Thomas Martin",
      position: "Développeur Freelance",
      rating: 5
    },
    {
      text: "Le badge de confiance VELNOR a augmenté notre taux de conversion de 34%. Un investissement rentable dès le premier mois.",
      author: "Sophie Dubois",
      position: "CEO, E-Shop Pro",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Témoignages Clients</h2>
          <p className="section-subtitle">
            Ils nous font confiance pour leur sécurité
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star" />
                ))}
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.position}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat">
            <Users className="stat-icon" />
            <span className="stat-value">2,847</span>
            <span className="stat-label">Clients satisfaits</span>
          </div>
          <div className="stat">
            <Star className="stat-icon" />
            <span className="stat-value">4.9/5</span>
            <span className="stat-label">Note moyenne</span>
          </div>
          <div className="stat">
            <Award className="stat-icon" />
            <span className="stat-value">99.2%</span>
            <span className="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
});

// ================= FAQ =================
const FAQSection = memo(() => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce qui rend votre audit différent ?",
      answer: "Notre IA utilise des algorithmes de pointe pour détecter des vulnérabilités que les scanners traditionnels manquent. Nous offrons un rapport ultra-détaillé avec des recommandations personnalisées et un badge de confiance."
    },
    {
      question: "Quelle est la différence entre les plans 24h et 48h ?",
      answer: "Le plan 24h inclut une analyse plus approfondie, un rapport de 100+ pages, le support prioritaire 24/7 et une consultation avec un expert. Le plan 48h offre toutes les fonctionnalités essentielles à un prix plus accessible."
    },
    {
      question: "Comment garantissez-vous la sécurité de nos données ?",
      answer: "Nous utilisons un chiffrement AES-256 de bout en bout. Vos données sont analysées dans des environnements isolés et automatiquement supprimées après livraison. Nous sommes certifiés ISO 27001 et GDPR compliant."
    },
    {
      question: "Que se passe-t-il si vous dépassez les délais ?",
      answer: "C'est simple : remboursement intégral automatique + vous recevez votre audit gratuitement. Notre taux de livraison dans les délais est de 99.8%."
    },
    {
      question: "Le badge de confiance est-il vraiment efficace ?",
      answer: "Oui ! Nos clients constatent en moyenne une augmentation de 30% de leur taux de conversion. Le badge affiche en temps réel votre niveau de sécurité et rassure vos visiteurs."
    }
  ];

  const toggleFAQ = useCallback((index) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Questions Fréquentes</h2>
          <p className="section-subtitle">
            Tout ce que vous devez savoir sur nos services
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`faq-icon ${openIndex === index ? 'open' : ''}`} />
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Vous avez d'autres questions ?</p>
          <Button variant="secondary" onClick={() => window.location.href = '/contact'}>
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
});

// ================= FOOTER =================
const Footer = memo(() => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-brand">
          <h3 className="footer-logo">VELNOR</h3>
          <p className="footer-tagline">
            L'avenir de la cybersécurité, aujourd'hui.
          </p>
          <div className="footer-badges">
            <span className="badge">ISO 27001</span>
            <span className="badge">GDPR</span>
            <span className="badge">SOC 2</span>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Produit</h4>
            <a href="#process">Fonctionnement</a>
            <a href="#tech">Technologies</a>
            <a href="#offers">Tarifs</a>
            <a href="/api">API</a>
          </div>
          
          <div className="footer-column">
            <h4>Entreprise</h4>
            <a href="/about">À propos</a>
            <a href="/careers">Carrières</a>
            <a href="/blog">Blog</a>
            <a href="/press">Presse</a>
          </div>
          
          <div className="footer-column">
            <h4>Support</h4>
            <a href="/help">Centre d'aide</a>
            <a href="/contact">Contact</a>
            <a href="/status">Statut</a>
            <a href="/changelog">Changelog</a>
          </div>
          
          <div className="footer-column">
            <h4>Légal</h4>
            <a href="/privacy">Confidentialité</a>
            <a href="/terms">CGU</a>
            <a href="/security">Sécurité</a>
            <a href="/cookies">Cookies</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 VELNOR. Tous droits réservés.</p>
        <div className="footer-social">
          <a href="#" aria-label="Twitter">𝕏</a>
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="GitHub">gh</a>
        </div>
      </div>
    </div>
  </footer>
));

// ================= COMPOSANT PRINCIPAL =================
const VelnorLanding = () => {
  // Smooth scroll pour les ancres
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <TechSection />
        <OffersSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default VelnorLanding;