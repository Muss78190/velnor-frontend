import React, { useEffect, useRef, useState, useCallback } from 'react';
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
} from 'react-icons/fa';
import { GiSpaceship, GiArtificialIntelligence } from 'react-icons/gi';
import { MdSecurity, MdSpeed } from 'react-icons/md';
import { BsShieldCheck, BsLightning } from 'react-icons/bs';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

const VelnorLanding = () => {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loadingProgress, setLoadingProgress] = useState(0);
  
  // Refs pour les animations
  const loaderRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const matrixCanvasRef = useRef(null);
  const glowOrbRef = useRef(null);
  const cursorTrailRef = useRef([]);

  // Refs pour les sections
  const funcRef = useRef(null);
  const techRef = useRef(null);
  const offersRef = useRef(null);
  const testiRef = useRef(null);
  const faqRef = useRef(null);

  // ================= SYSTÈME DE LOADING RÉVOLUTIONNAIRE =================
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          gsap.to(loaderRef.current, {
            opacity: 0,
            scale: 0.8,
            rotationY: 180,
            duration: 1.2,
            ease: 'power2.inOut',
            onComplete: () => setLoading(false),
          });
        }, 500);
      }
      setLoadingProgress(progress);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // ================= SYSTÈME PARTICULES QUANTIQUES =================
  useEffect(() => {
    if (loading) return;

    const canvas = particleCanvasRef.current;
    const matrixCanvas = matrixCanvasRef.current;
    if (!canvas || !matrixCanvas) return;

    const ctx = canvas.getContext('2d');
    const matrixCtx = matrixCanvas.getContext('2d');
    const particles = [];
    const matrixChars = [];

    // Configuration responsive
    const resizeCanvases = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width;
      canvas.height = height;
      matrixCanvas.width = width;
      matrixCanvas.height = height;
    };

    resizeCanvases();
    window.addEventListener('resize', resizeCanvases);

    // ================= PARTICULES QUANTIQUES AVANCÉES =================
    class QuantumParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.age = Math.random() * 100;
        this.energy = Math.random() * 0.5 + 0.5;
        this.quantumState = Math.random() > 0.5 ? 1 : -1;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.vx = (Math.random() - 0.5) * 1.2;
        this.vy = Math.random() * 1.5 + 0.4;
        this.size = Math.random() * 4 + 1;
        this.baseSize = this.size;
        this.color = Math.random() > 0.7 ? '43, 192, 255' : '169, 74, 255';
        this.pulse = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.03;
        this.rotation = 0;
        this.trail = [];
        this.connections = [];
      }

      update() {
        // Mouvement de base
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.04;
        this.rotation += this.rotationSpeed;
        this.age++;

        // Attraction magnétique avancée vers le curseur
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          const attraction = force * 0.0003 * this.energy;
          this.vx += dx * attraction;
          this.vy += dy * attraction;
          
          // Effet quantique - changement d'état
          if (distance < 50) {
            this.quantumState *= -1;
            this.energy = Math.min(1, this.energy + 0.1);
          }
        }

        // Effet de vague cosmique
        this.vx += Math.sin(this.y * 0.008 + Date.now() * 0.001) * 0.03;
        this.vy += Math.cos(this.x * 0.008 + Date.now() * 0.001) * 0.02;

        // Pulsation quantique
        const pulseFactor = Math.sin(this.pulse) * 0.5 + 0.8;
        this.size = this.baseSize * pulseFactor * this.energy;

        // Trail pour effet de comète
        this.trail.push({ x: this.x, y: this.y, age: 0 });
        if (this.trail.length > 8) this.trail.shift();
        this.trail.forEach(point => point.age++);

        // Reset si sort de l'écran
        if (this.y > canvas.height + 50 || this.x < -50 || this.x > canvas.width + 50) {
          this.reset();
        }
      }

      draw() {
        const alpha = this.energy * 0.9;
        
        // Dessiner le trail
        this.trail.forEach((point, index) => {
          const trailAlpha = alpha * (1 - point.age / 8) * 0.4;
          const trailSize = this.size * (1 - point.age / 8) * 0.5;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color}, ${trailAlpha})`;
          ctx.fill();
        });

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Particule principale avec effet holographique
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 2);
        gradient.addColorStop(0, `rgba(${this.color}, ${alpha})`);
        gradient.addColorStop(0.7, `rgba(${this.color}, ${alpha * 0.3})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${this.color}, ${alpha})`;
        ctx.fill();
        
        // Anneau quantique externe
        if (this.quantumState > 0) {
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${this.color}, ${alpha * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Effet de scintillement
        if (Math.random() > 0.95) {
          ctx.beginPath();
          ctx.arc(0, 0, this.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
          ctx.fill();
        }
        
        ctx.restore();
      }
    }

    // ================= MATRICE DIGITALE =================
    class MatrixChar {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * matrixCanvas.width;
        this.y = Math.random() * matrixCanvas.height;
        this.char = String.fromCharCode(0x30A0 + Math.random() * 96);
        this.opacity = Math.random() * 0.5 + 0.1;
        this.speed = Math.random() * 2 + 0.5;
        this.life = Math.random() * 200 + 100;
        this.age = 0;
      }

      update() {
        this.y += this.speed;
        this.age++;
        this.opacity *= 0.995;

        if (this.y > matrixCanvas.height || this.age > this.life || this.opacity < 0.01) {
          this.reset();
        }
      }

      draw() {
        matrixCtx.font = '14px "Courier New", monospace';
        matrixCtx.fillStyle = `rgba(43, 192, 255, ${this.opacity})`;
        matrixCtx.fillText(this.char, this.x, this.y);
      }
    }

    // Initialiser les particules
    const particleCount = Math.min(250, Math.floor(canvas.width * 0.15));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new QuantumParticle());
    }

    // Initialiser la matrice
    for (let i = 0; i < 50; i++) {
      matrixChars.push(new MatrixChar());
    }

    // ================= BOUCLE D'ANIMATION OPTIMISÉE =================
    let animationId;
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      if (currentTime - lastTime >= frameInterval) {
        // Clear canvases
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        // Update et draw particules
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Update et draw matrice
        matrixChars.forEach(char => {
          char.update();
          char.draw();
        });

        // Connexions quantiques entre particules
        for (let i = 0; i < particles.length; i += 3) {
          for (let j = i + 3; j < particles.length; j += 3) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              const opacity = (150 - distance) / 150 * 0.1;
              const gradient = ctx.createLinearGradient(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
              );
              gradient.addColorStop(0, `rgba(43, 192, 255, ${opacity})`);
              gradient.addColorStop(0.5, `rgba(169, 74, 255, ${opacity * 1.5})`);
              gradient.addColorStop(1, `rgba(43, 192, 255, ${opacity})`);
              
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        lastTime = currentTime;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvases);
    };
  }, [loading, mousePos]);

  // ================= TRACKING CURSEUR AVANCÉ =================
  useEffect(() => {
    const handleMouseMove = useCallback((e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Créer orbe lumineux qui suit le curseur
      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      // Effet de trail quantique
      const trail = document.createElement('div');
      trail.className = 'cursor-quantum-trail';
      trail.style.left = e.clientX + 'px';
      trail.style.top = e.clientY + 'px';
      document.body.appendChild(trail);
      
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 1000);
    }, []);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ================= ANIMATIONS GSAP RÉVOLUTIONNAIRES =================
  useEffect(() => {
    if (loading) return;

    // Configuration SEO
    document.title = 'VELNOR – IA Cybersécurité Révolutionnaire | Audit Quantique';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'VELNOR révolutionne la cybersécurité avec une IA quantique. Audits automatisés, rapports PDF ultra-détaillés, badges de confiance. Livraison garantie 24h/48h.'
      );
    }

    // ================= ANIMATION HERO ÉPIQUE =================
    const tl = gsap.timeline();
    
    tl.fromTo(heroRef.current, 
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotationX: 45
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationX: 0,
        duration: 1.8, 
        ease: 'power3.out'
      }
    );

    // Effet de glow pulsant révolutionnaire sur le titre
    gsap.to(heroTitleRef.current, {
      textShadow: '0 0 30px var(--blue-main), 0 0 60px var(--purple-main), 0 0 90px var(--blue-main)',
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 3,
      delay: 2,
    });

    // ================= ANIMATIONS SCROLL RÉVOLUTIONNAIRES =================
    const createAdvancedScrollAnimation = (element, direction = 'up', delay = 0) => {
      const yStart = direction === 'up' ? 80 : -80;
      const xStart = direction === 'up' ? -30 : 30;
      const rotationStart = direction === 'up' ? 10 : -10;
      
      gsap.fromTo(element, 
        { 
          y: yStart,
          x: xStart,
          opacity: 0, 
          rotationY: rotationStart,
          scale: 0.9,
          filter: 'blur(10px)'
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.5,
          delay: delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    };

    // Animer toutes les sections avec des effets uniques
    if (funcRef.current) createAdvancedScrollAnimation(funcRef.current, 'up', 0);
    if (techRef.current) createAdvancedScrollAnimation(techRef.current, 'down', 0.1);
    if (offersRef.current) createAdvancedScrollAnimation(offersRef.current, 'up', 0.2);
    if (testiRef.current) createAdvancedScrollAnimation(testiRef.current, 'down', 0.3);
    if (faqRef.current) createAdvancedScrollAnimation(faqRef.current, 'up', 0.4);

    // ================= ANIMATIONS HOVER QUANTIQUES =================
    const setupQuantumHover = (selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            y: -20,
            scale: 1.08,
            rotationY: 5,
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
            filter: 'brightness(1.1) saturate(1.2)',
            duration: 0.5,
            ease: 'power2.out'
          });
        });
        
        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            y: 0,
            scale: 1,
            rotationY: 0,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            filter: 'brightness(1) saturate(1)',
            duration: 0.5,
            ease: 'power2.out'
          });
        });
      });
    };

    // Appliquer les animations hover
    setupQuantumHover('.quantum-card');
    setupQuantumHover('.offer-card');
    setupQuantumHover('.testimonial-card');

    // ================= ANIMATION CONTINUE DES ÉLÉMENTS =================
    gsap.to('.floating-element', {
      y: -10,
      rotation: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 4,
      stagger: 0.5
    });

  }, [loading]);

  // ================= NAVIGATION SMOOTH QUANTIQUE =================
  const handleNavClick = useCallback((e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: target, offsetY: 100 },
        ease: 'power3.inOut'
      });
    }
    setMenuOpen(false);
  }, []);

  const handleCTAClick = () => {
    // Effet de pulsation avant navigation
    gsap.to('.cta-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => handleNavClick(null, '#offres')
    });
  };

  return (
    <>
      {/* ================= LOADER RÉVOLUTIONNAIRE ================= */}
      {loading && (
        <div ref={loaderRef} className="quantum-loader">
          <div className="quantum-loader-container">
            <div className="quantum-spinner">
              <div className="quantum-ring ring-1"></div>
              <div className="quantum-ring ring-2"></div>
              <div className="quantum-ring ring-3"></div>
              <div className="quantum-core"></div>
            </div>
            <div className="quantum-text">VELNOR</div>
            <div className="quantum-subtitle">Initialisation Système IA Quantique...</div>
            <div className="quantum-progress">
              <div 
                className="quantum-progress-bar"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="quantum-percentage">{Math.floor(loadingProgress)}%</div>
          </div>
        </div>
      )}

      {/* ================= ORBE CURSEUR QUANTIQUE ================= */}
      <div ref={glowOrbRef} className="quantum-cursor-orb"></div>

      {/* ================= CANVAS SYSTÈMES ================= */}
      <canvas ref={particleCanvasRef} className="quantum-particles"></canvas>
      <canvas ref={matrixCanvasRef} className="quantum-matrix"></canvas>

      {/* ================= NAVBAR RÉVOLUTIONNAIRE ================= */}
      <nav className="quantum-navbar">
        <div className="navbar-content">
          <div className="quantum-logo floating-element">
            <span className="logo-text">VELNOR</span>
            <div className="logo-glow"></div>
          </div>
          
          <div className={`quantum-menu ${menuOpen ? 'open' : ''}`}>
            {[
              { name: 'Accueil', id: 'hero' },
              { name: 'Processus', id: 'fonctionnement' },
              { name: 'Technologie', id: 'technologie' },
              { name: 'Offres', id: 'offres' },
              { name: 'Témoignages', id: 'temoignages' },
              { name: 'FAQ', id: 'faq' }
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, `#${item.id}`)}
                className="quantum-nav-link"
              >
                <span>{item.name}</span>
                <div className="nav-link-glow"></div>
              </a>
            ))}
            
            <button className="quantum-admin-btn floating-element">
              <FaCog className="admin-icon" />
              <span>Admin</span>
              <div className="btn-quantum-glow"></div>
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
        {/* ================= HERO RÉVOLUTIONNAIRE ================= */}
        <section id="hero" className="quantum-hero" ref={heroRef}>
          <div className="hero-quantum-bg">
            <div className="quantum-wave wave-1"></div>
            <div className="quantum-wave wave-2"></div>
            <div className="quantum-wave wave-3"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-badge floating-element">
              <BsLightning className="badge-icon" />
              <span>IA Révolutionnaire</span>
            </div>
            
            <h1 className="quantum-title" ref={heroTitleRef}>
              <span className="title-line">L'Intelligence Artificielle</span>
              <span className="title-line highlight">qui révolutionne</span>
              <span className="title-line">votre cybersécurité</span>
            </h1>
            
            <p className="quantum-subtitle">
              Technologie quantique • Analyse prédictive • Rapport holographique
              <br />
              <strong className="delivery-highlight">Livraison Ultra-Rapide 24h-48h</strong>
            </p>

            <p className="quantum-description">
              VELNOR déploie une Intelligence Artificielle de nouvelle génération 
              qui analyse votre infrastructure avec une précision quantique. 
              Notre système révolutionnaire détecte les menaces invisibles, 
              génère des rapports PDF ultra-détaillés et délivre des badges 
              de confiance certifiés. L'avenir de la cybersécurité, aujourd'hui.
            </p>

            <div className="quantum-cta-container">
              <button className="quantum-cta-btn" onClick={handleCTAClick}>
                <GiArtificialIntelligence className="cta-icon" />
                <span>Lancer Audit Quantique</span>
                <div className="cta-quantum-trail"></div>
              </button>
              
              <div className="cta-stats">
                <div className="stat-item">
                  <span className="stat-number">2.3M+</span>
                  <span className="stat-label">Menaces Détectées</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Précision IA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGIE RÉVOLUTIONNAIRE ================= */}
        <section id="technologie" className="quantum-section tech-section" ref={techRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Arsenal</span>
              <span className="title-accent">Technologique</span>
            </h2>
            <p className="section-subtitle">
              Technologies de pointe fusionnées pour une cybersécurité révolutionnaire
            </p>
          </div>

          <div className="quantum-tech-grid">
            {[
              {
                icon: GiArtificialIntelligence,
                title: "IA Quantique",
                description: "Réseaux de neurones quantiques pour une analyse prédictive révolutionnaire",
                features: ["Deep Learning Avancé", "Analyse Comportementale", "Prédiction Temporelle"],
                color: "purple",
                intensity: "high"
              },
              {
                icon: MdSecurity,
                title: "Bouclier Adaptatif",
                description: "Système de défense auto-évolutif qui s'adapte aux nouvelles menaces",
                features: ["Protection Temps Réel", "Auto-apprentissage", "Réponse Instantanée"],
                color: "blue",
                intensity: "medium"
              },
              {
                icon: FaChartBar,
                title: "Analytics 4D",
                description: "Visualisation multi-dimensionnelle des données de sécurité",
                features: ["Graphiques Holographiques", "Métriques Prédictives", "Tableaux de Bord IA"],
                color: "purple",
                intensity: "high"
              },
              {
                icon: BsLightning,
                title: "Traitement Éclair",
                description: "Analyse ultra-rapide grâce à l'informatique quantique",
                features: ["Vitesse Lumière", "Parallélisation Massive", "Optimisation Continue"],
                color: "blue",
                intensity: "medium"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className={`quantum-tech-card quantum-card color-${tech.color} intensity-${tech.intensity}`}
              >
                <div className="tech-card-background">
                  <div className="tech-pattern"></div>
                  <div className="tech-circuits"></div>
                </div>

                <div className="tech-card-header">
                  <div className="tech-icon-sphere">
                    <tech.icon className="tech-icon" />
                    <div className="sphere-ring ring-1"></div>
                    <div className="sphere-ring ring-2"></div>
                    <div className="sphere-ring ring-3"></div>
                  </div>
                </div>

                <div className="tech-card-content">
                  <h3 className="tech-title">{tech.title}</h3>
                  <p className="tech-description">{tech.description}</p>
                  
                  <div className="tech-features">
                    {tech.features.map((feature, fIndex) => (
                      <div key={fIndex} className="tech-feature">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-quantum-field"></div>
              </div>
            ))}
          </div>

          <div className="tech-stats-banner">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <span className="stat-number">2.3TB/s</span>
                <span className="stat-label">Vitesse de Traitement</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🧠</div>
              <div className="stat-content">
                <span className="stat-number">847M</span>
                <span className="stat-label">Patterns Analysés</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🛡️</div>
              <div className="stat-content">
                <span className="stat-number">99.97%</span>
                <span className="stat-label">Taux de Détection</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OFFRES RÉVOLUTIONNAIRES ================= */}
        <section id="offres" className="quantum-section offers-section" ref={offersRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Plans</span>
              <span className="title-accent">Quantiques</span>
            </h2>
            <p className="section-subtitle">
              Choisissez votre niveau de protection cybersécurité révolutionnaire
            </p>
          </div>

          <div className="quantum-offers-container">
            {[
              {
                name: "Audit Quantique 48h",
                subtitle: "Protection Professionnelle",
                price: "499",
                originalPrice: "699",
                currency: "€ HT",
                duration: "48 heures",
                features: [
                  { name: "Scan IA Complet", included: true, premium: false },
                  { name: "Rapport PDF Ultra-Détaillé", included: true, premium: false },
                  { name: "Détection 500+ Vulnérabilités", included: true, premium: false },
                  { name: "Support Email Standard", included: true, premium: false },
                  { name: "Garantie Livraison 48h", included: true, premium: false },
                  { name: "Badge de Confiance Premium", included: false, premium: true },
                  { name: "Support Prioritaire 24/7", included: false, premium: true }
                ],
                badge: null,
                gradient: "linear-gradient(135deg, var(--blue-main), var(--purple-main))",
                popular: false
              },
              {
                name: "Audit Quantique 24h",
                subtitle: "Protection Elite",
                price: "699",
                originalPrice: "999",
                currency: "€ HT",
                duration: "24 heures",
                features: [
                  { name: "Scan IA Quantique Avancé", included: true, premium: true },
                  { name: "Rapport Holographique PDF", included: true, premium: true },
                  { name: "Détection 1000+ Vulnérabilités", included: true, premium: true },
                  { name: "Badge de Confiance Premium", included: true, premium: true },
                  { name: "Support Prioritaire 24/7", included: true, premium: true },
                  { name: "Analyse Prédictive IA", included: true, premium: true },
                  { name: "Consultation Personnalisée", included: true, premium: true }
                ],
                badge: "POPULAIRE",
                gradient: "linear-gradient(135deg, var(--purple-main), #ff6b6b, var(--blue-main))",
                popular: true
              }
            ].map((offer, index) => (
              <div
                key={index}
                className={`quantum-offer-card ${offer.popular ? 'popular' : ''}`}
              >
                {offer.badge && (
                  <div className="offer-badge">
                    <span>{offer.badge}</span>
                    <div className="badge-glow"></div>
                  </div>
                )}

                <div className="offer-header">
                  <div className="offer-icon">
                    <BsShieldCheck />
                  </div>
                  <h3 className="offer-name">{offer.name}</h3>
                  <p className="offer-subtitle">{offer.subtitle}</p>
                </div>

                <div className="offer-pricing">
                  <div className="price-container">
                    <span className="price-main">{offer.price}</span>
                    <span className="price-currency">{offer.currency}</span>
                  </div>
                  <div className="price-original">
                    <span>Au lieu de {offer.originalPrice}€</span>
                  </div>
                  <div className="price-duration">
                    Livraison garantie en {offer.duration}
                  </div>
                </div>

                <div className="offer-features">
                  {offer.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className={`feature-item ${feature.included ? 'included' : 'excluded'} ${feature.premium ? 'premium' : ''}`}
                    >
                      <div className="feature-icon">
                        {feature.included ? '✓' : '✗'}
                      </div>
                      <span className="feature-text">{feature.name}</span>
                      {feature.premium && <div className="premium-badge">PRO</div>}
                    </div>
                  ))}
                </div>

                <button 
                  className={`quantum-offer-btn ${offer.popular ? 'popular' : ''}`}
                  onClick={() => window.location.href = `/paiement-${offer.duration.split(' ')[0]}h`}
                >
                  <span>Sélectionner ce Plan</span>
                  <FaRocket className="btn-icon" />
                  <div className="btn-quantum-effect"></div>
                </button>

                <div className="offer-quantum-glow" style={{ background: offer.gradient }}></div>
              </div>
            ))}
          </div>

          <div className="offers-guarantee">
            <div className="guarantee-content">
              <FaLock className="guarantee-icon" />
              <div className="guarantee-text">
                <h4>Garantie Satisfaction 100%</h4>
                <p>Remboursement intégral si vous n'êtes pas entièrement satisfait</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TÉMOIGNAGES RÉVOLUTIONNAIRES ================= */}
        <section id="temoignages" className="quantum-section testimonials-section" ref={testiRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Retours</span>
              <span className="title-accent">Clients</span>
            </h2>
            <p className="section-subtitle">
              Découvrez pourquoi les leaders technologiques nous font confiance
            </p>
          </div>

          <div className="quantum-testimonials-grid">
            {[
              {
                text: "VELNOR a révolutionné notre approche cybersécurité. L'IA quantique a détecté des vulnérabilités que nos équipes n'avaient jamais vues. Le rapport est d'une précision chirurgicale.",
                author: "Alexandre Chen",
                position: "CTO • TechNova",
                company: "Licorne SaaS 🦄",
                rating: 5,
                avatar: "🚀",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              },
              {
                text: "Incroyable ! En 24h, j'ai reçu un audit qui m'aurait coûté 10x plus cher ailleurs. La qualité du rapport PDF est digne d'un cabinet international. Recommandations ultra-précises.",
                author: "Sarah Martinez",
                position: "Lead Developer • Freelance",
                company: "Développeuse Full-Stack",
                rating: 5,
                avatar: "💎",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              },
              {
                text: "L'analyse prédictive de VELNOR nous a permis d'anticiper une cyberattaque majeure. Leur IA quantique a littéralement sauvé notre entreprise. Investissement le plus rentable de l'année.",
                author: "Marcus Weber",
                position: "CISO • SecureFlow",
                company: "Fintech • 50M€ levés",
                rating: 5,
                avatar: "🛡️",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              },
              {
                text: "Le badge de confiance VELNOR a augmenté notre taux de conversion de 34%. Nos clients font davantage confiance à notre plateforme. ROI immédiat et mesurable.",
                author: "Lisa Thompson",
                position: "CMO • GrowthLabs",
                company: "Agence Marketing Digital",
                rating: 5,
                avatar: "⭐",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="quantum-testimonial-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-background" style={{ background: testimonial.gradient }}></div>
                
                <div className="testimonial-header">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="rating-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <span className="author-company">{testimonial.company}</span>
                  </div>
                </div>

                <div className="testimonial-quantum-glow"></div>
              </div>
            ))}
          </div>

          <div className="testimonials-stats">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Note Moyenne</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2,847</span>
                <span className="stat-label">Clients Satisfaits</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.2%</span>
                <span className="stat-label">Recommandations</span>
              </div>
            </div>
          </div>
        </section>
{/* ================= PROCESSUS QUANTIQUE ================= */}
        <section id="fonctionnement" className="quantum-section" ref={funcRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Processus</span>
              <span className="title-accent">Révolutionnaire</span>
            </h2>
            <p className="section-subtitle">
              Notre IA quantique analyse votre infrastructure en 3 étapes ultra-avancées
            </p>
          </div>

          <div className="quantum-process-container">
            {[
              {
                icon: FaShieldAlt,
                title: "Scan Quantique",
                description: "L'IA analyse votre site avec une précision moléculaire",
                color: "blue",
                delay: 0
              },
              {
                icon: GiArtificialIntelligence,
                title: "Analyse Prédictive",
                description: "Détection des vulnérabilités futures avec 99.9% de précision",
                color: "purple",
                delay: 0.2
              },
              {
                icon: FaShieldAlt,
                title: "Rapport Holographique",
                description: "PDF ultra-détaillé avec recommandations personnalisées",
                color: "blue",
                delay: 0.4
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`quantum-process-card quantum-card color-${step.color}`}
                style={{ animationDelay: `${step.delay}s` }}
              >
                <div className="process-card-header">
                  <div className="process-icon-container">
                    <step.icon className="process-icon" />
                    <div className="icon-quantum-ring"></div>
                  </div>
                  <div className="process-number">0{index + 1}</div>
                </div>
                
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                
                <div className="process-metrics">
                  <div className="metric">
                    <span className="metric-value">
                      {index === 0 ? '<1s' : index === 1 ? '99.9%' : '24h'}
                    </span>
                    <span className="metric-label">
                      {index === 0 ? 'Vitesse' : index === 1 ? 'Précision' : 'Livraison'}
                    </span>
                  </div>
                </div>

                <div className="card-quantum-glow"></div>
              </div>
            ))}
          </div>

          <div className="quantum-connection-lines">
            <svg className="connection-svg" viewBox="0 0 800 200">
              <path
                d="M 100 100 Q 250 50 400 100 Q 550 150 700 100"
                stroke="url(#quantumGradient)"
                strokeWidth="2"
                fill="none"
                className="quantum-path"
              />
              <defs>
                <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue-main)" />
                  <stop offset="50%" stopColor="var(--purple-main)" />
                  <stop offset="100%" stopColor="var(--blue-main)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* ================= TECHNOLOGIE RÉVOLUTIONNAIRE ================= */}
        <section id="technologie" className="quantum-section tech-section" ref={techRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Arsenal</span>
              <span className="title-accent">Technologique</span>
            </h2>
            <p className="section-subtitle">
              Technologies de pointe fusionnées pour une cybersécurité révolutionnaire
            </p>
          </div>

          <div className="quantum-tech-grid">
            {[
              {
                icon: GiArtificialIntelligence,
                title: "IA Quantique",
                description: "Réseaux de neurones quantiques pour une analyse prédictive révolutionnaire",
                features: ["Deep Learning Avancé", "Analyse Comportementale", "Prédiction Temporelle"],
                color: "purple",
                intensity: "high"
              },
              {
                icon: MdSecurity,
                title: "Bouclier Adaptatif",
                description: "Système de défense auto-évolutif qui s'adapte aux nouvelles menaces",
                features: ["Protection Temps Réel", "Auto-apprentissage", "Réponse Instantanée"],
                color: "blue",
                intensity: "medium"
              },
              {
                icon: FaChartBar,
                title: "Analytics 4D",
                description: "Visualisation multi-dimensionnelle des données de sécurité",
                features: ["Graphiques Holographiques", "Métriques Prédictives", "Tableaux de Bord IA"],
                color: "purple",
                intensity: "high"
              },
              {
                icon: FaRocket,
                title: "Traitement Éclair",
                description: "Analyse ultra-rapide grâce à l'informatique quantique",
                features: ["Vitesse Lumière", "Parallélisation Massive", "Optimisation Continue"],
                color: "blue",
                intensity: "medium"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className={`quantum-tech-card quantum-card color-${tech.color} intensity-${tech.intensity}`}
              >
                <div className="tech-card-background">
                  <div className="tech-pattern"></div>
                  <div className="tech-circuits"></div>
                </div>

                <div className="tech-card-header">
                  <div className="tech-icon-sphere">
                    <tech.icon className="tech-icon" />
                    <div className="sphere-ring ring-1"></div>
                    <div className="sphere-ring ring-2"></div>
                    <div className="sphere-ring ring-3"></div>
                  </div>
                </div>

                <div className="tech-card-content">
                  <h3 className="tech-title">{tech.title}</h3>
                  <p className="tech-description">{tech.description}</p>
                  
                  <div className="tech-features">
                    {tech.features.map((feature, fIndex) => (
                      <div key={fIndex} className="tech-feature">
                        <div className="feature-dot"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-quantum-field"></div>
              </div>
            ))}
          </div>

          <div className="tech-stats-banner">
            <div className="stat-item">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <span className="stat-number">2.3TB/s</span>
                <span className="stat-label">Vitesse de Traitement</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🧠</div>
              <div className="stat-content">
                <span className="stat-number">847M</span>
                <span className="stat-label">Patterns Analysés</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🛡️</div>
              <div className="stat-content">
                <span className="stat-number">99.97%</span>
                <span className="stat-label">Taux de Détection</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OFFRES RÉVOLUTIONNAIRES ================= */}
        <section id="offres" className="quantum-section offers-section" ref={offersRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Plans</span>
              <span className="title-accent">Quantiques</span>
            </h2>
            <p className="section-subtitle">
              Choisissez votre niveau de protection cybersécurité révolutionnaire
            </p>
          </div>

          <div className="quantum-offers-container">
            {[
              {
                name: "Audit Quantique 48h",
                subtitle: "Protection Professionnelle",
                price: "499",
                originalPrice: "699",
                currency: "€ HT",
                duration: "48 heures",
                features: [
                  { name: "Scan IA Complet", included: true, premium: false },
                  { name: "Rapport PDF Ultra-Détaillé", included: true, premium: false },
                  { name: "Détection 500+ Vulnérabilités", included: true, premium: false },
                  { name: "Support Email Standard", included: true, premium: false },
                  { name: "Garantie Livraison 48h", included: true, premium: false },
                  { name: "Badge de Confiance Premium", included: false, premium: true },
                  { name: "Support Prioritaire 24/7", included: false, premium: true }
                ],
                badge: null,
                gradient: "linear-gradient(135deg, var(--blue-main), var(--purple-main))",
                popular: false
              },
              {
                name: "Audit Quantique 24h",
                subtitle: "Protection Elite",
                price: "699",
                originalPrice: "999",
                currency: "€ HT",
                duration: "24 heures",
                features: [
                  { name: "Scan IA Quantique Avancé", included: true, premium: true },
                  { name: "Rapport Holographique PDF", included: true, premium: true },
                  { name: "Détection 1000+ Vulnérabilités", included: true, premium: true },
                  { name: "Badge de Confiance Premium", included: true, premium: true },
                  { name: "Support Prioritaire 24/7", included: true, premium: true },
                  { name: "Analyse Prédictive IA", included: true, premium: true },
                  { name: "Consultation Personnalisée", included: true, premium: true }
                ],
                badge: "POPULAIRE",
                gradient: "linear-gradient(135deg, var(--purple-main), #ff6b6b, var(--blue-main))",
                popular: true
              }
            ].map((offer, index) => (
              <div
                key={index}
                className={`quantum-offer-card ${offer.popular ? 'popular' : ''}`}
              >
                {offer.badge && (
                  <div className="offer-badge">
                    <span>{offer.badge}</span>
                    <div className="badge-glow"></div>
                  </div>
                )}

                <div className="offer-header">
                  <div className="offer-icon">
                    <FaShieldAlt />
                  </div>
                  <h3 className="offer-name">{offer.name}</h3>
                  <p className="offer-subtitle">{offer.subtitle}</p>
                </div>

                <div className="offer-pricing">
                  <div className="price-container">
                    <span className="price-main">{offer.price}</span>
                    <span className="price-currency">{offer.currency}</span>
                  </div>
                  <div className="price-original">
                    <span>Au lieu de {offer.originalPrice}€</span>
                  </div>
                  <div className="price-duration">
                    Livraison garantie en {offer.duration}
                  </div>
                </div>

                <div className="offer-features">
                  {offer.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className={`feature-item ${feature.included ? 'included' : 'excluded'} ${feature.premium ? 'premium' : ''}`}
                    >
                      <div className="feature-icon">
                        {feature.included ? '✓' : '✗'}
                      </div>
                      <span className="feature-text">{feature.name}</span>
                      {feature.premium && <div className="premium-badge">PRO</div>}
                    </div>
                  ))}
                </div>

                <button 
                  className={`quantum-offer-btn ${offer.popular ? 'popular' : ''}`}
                  onClick={() => window.location.href = `/paiement-${offer.duration.split(' ')[0]}h`}
                >
                  <span>Sélectionner ce Plan</span>
                  <FaRocket className="btn-icon" />
                  <div className="btn-quantum-effect"></div>
                </button>

                <div className="offer-quantum-glow" style={{ background: offer.gradient }}></div>
              </div>
            ))}
          </div>

          <div className="offers-guarantee">
            <div className="guarantee-content">
              <FaLock className="guarantee-icon" />
              <div className="guarantee-text">
                <h4>Garantie Satisfaction 100%</h4>
                <p>Remboursement intégral si vous n'êtes pas entièrement satisfait</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TÉMOIGNAGES RÉVOLUTIONNAIRES ================= */}
        <section id="temoignages" className="quantum-section testimonials-section" ref={testiRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Retours</span>
              <span className="title-accent">Clients</span>
            </h2>
            <p className="section-subtitle">
              Découvrez pourquoi les leaders technologiques nous font confiance
            </p>
          </div>

          <div className="quantum-testimonials-grid">
            {[
              {
                text: "VELNOR a révolutionné notre approche cybersécurité. L'IA quantique a détecté des vulnérabilités que nos équipes n'avaient jamais vues. Le rapport est d'une précision chirurgicale.",
                author: "Alexandre Chen",
                position: "CTO • TechNova",
                company: "Licorne SaaS 🦄",
                rating: 5,
                avatar: "🚀",
                gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
              },
              {
                text: "Incroyable ! En 24h, j'ai reçu un audit qui m'aurait coûté 10x plus cher ailleurs. La qualité du rapport PDF est digne d'un cabinet international. Recommandations ultra-précises.",
                author: "Sarah Martinez",
                position: "Lead Developer • Freelance",
                company: "Développeuse Full-Stack",
                rating: 5,
                avatar: "💎",
                gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              },
              {
                text: "L'analyse prédictive de VELNOR nous a permis d'anticiper une cyberattaque majeure. Leur IA quantique a littéralement sauvé notre entreprise. Investissement le plus rentable de l'année.",
                author: "Marcus Weber",
                position: "CISO • SecureFlow",
                company: "Fintech • 50M€ levés",
                rating: 5,
                avatar: "🛡️",
                gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
              },
              {
                text: "Le badge de confiance VELNOR a augmenté notre taux de conversion de 34%. Nos clients font davantage confiance à notre plateforme. ROI immédiat et mesurable.",
                author: "Lisa Thompson",
                position: "CMO • GrowthLabs",
                company: "Agence Marketing Digital",
                rating: 5,
                avatar: "⭐",
                gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="quantum-testimonial-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="testimonial-background" style={{ background: testimonial.gradient }}></div>
                
                <div className="testimonial-header">
                  <div className="author-avatar">{testimonial.avatar}</div>
                  <div className="rating-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="star" />
                    ))}
                  </div>
                </div>

                <div className="testimonial-content">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <span className="author-company">{testimonial.company}</span>
                  </div>
                </div>

                <div className="testimonial-quantum-glow"></div>
              </div>
            ))}
          </div>

          <div className="testimonials-stats">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Note Moyenne</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2,847</span>
                <span className="stat-label">Clients Satisfaits</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">99.2%</span>
                <span className="stat-label">Recommandations</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FAQ RÉVOLUTIONNAIRE ================= */}
        <section id="faq" className="quantum-section faq-section" ref={faqRef}>
          <div className="section-header">
            <h2 className="quantum-section-title">
              <span>Questions</span>
              <span className="title-accent">Fréquentes</span>
            </h2>
            <p className="section-subtitle">
              Tout ce que vous devez savoir sur notre technologie révolutionnaire
            </p>
          </div>

          <div className="quantum-faq-container">
            {[
              {
                question: "Qu'est-ce qui rend votre IA 'quantique' ?",
                answer: "Notre IA utilise des algorithmes inspirés de l'informatique quantique pour analyser simultanément des millions de patterns de sécurité. Cette approche révolutionnaire permet une précision de détection de 99.97% et une analyse prédictive des menaces futures.",
                icon: GiArtificialIntelligence,
                category: "Technologie"
              },
              {
                question: "Quelle est la différence entre les plans 24h et 48h ?",
                answer: "Le plan 24h inclut notre analyse quantique avancée, un rapport holographique, le badge de confiance premium et un support prioritaire 24/7. Le plan 48h offre un excellent rapport qualité-prix avec toutes les fonctionnalités essentielles de sécurité.",
                icon: FaRocket,
                category: "Offres"
              },
              {
                question: "Vos audits sont-ils conformes aux standards internationaux ?",
                answer: "Absolument. Nos audits respectent et dépassent les standards OWASP, ISO 27001, NIST, et GDPR. Notre IA est certifiée pour l'analyse de systèmes critiques et utilisée par des entreprises Fortune 500.",
                icon: FaShieldAlt,
                category: "Sécurité"
              },
              {
                question: "Comment garantissez-vous la confidentialité de nos données ?",
                answer: "Sécurité zéro-trust : vos données sont chiffrées end-to-end, analysées dans des environnements isolés, et automatiquement supprimées après livraison. Nous ne stockons aucune information sensible et respectons les réglementations les plus strictes.",
                icon: FaLock,
                category: "Confidentialité"
              },
              {
                question: "Que se passe-t-il si vous dépassez les délais annoncés ?",
                answer: "Remboursement intégral automatique + audit gratuit de rattrapage. Notre IA quantique maintient un taux de livraison dans les temps de 99.8%. En cas de retard exceptionnel, vous êtes intégralement compensé.",
                icon: FaRocket,
                category: "Garanties"
              }
            ].map((faq, index) => (
              <details key={index} className="quantum-faq-item">
                <summary className="faq-question">
                  <div className="question-content">
                    <div className="question-icon">
                      <faq.icon />
                    </div>
                    <div className="question-text">
                      <span className="question-category">{faq.category}</span>
                      <h3>{faq.question}</h3>
                    </div>
                  </div>
                  <div className="question-arrow">
                    <div className="arrow-line"></div>
                    <div className="arrow-line"></div>
                  </div>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="faq-cta">
            <div className="faq-cta-content">
              <h3>Vous avez d'autres questions ?</h3>
              <p>Notre équipe d'experts est disponible 24/7 pour vous accompagner</p>
              <button className="quantum-support-btn">
                <span>Contacter le Support</span>
                <div className="btn-glow"></div>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FOOTER RÉVOLUTIONNAIRE ================= */}
      <footer className="quantum-footer">
        <div className="footer-quantum-bg">
          <div className="footer-wave"></div>
        </div>
        
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">VELNOR</span>
                <div className="logo-quantum-glow"></div>
              </div>
              <p className="footer-tagline">
                L'avenir de la cybersécurité, alimenté par l'intelligence quantique
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="stat-number">2.3M+</span>
                  <span className="stat-label">Menaces Détectées</span>
                </div>
                <div className="footer-stat">
                  <span className="stat-number">99.97%</span>
                  <span className="stat-label">Précision IA</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Produit</h4>
                <a href="#fonctionnement">Fonctionnement</a>
                <a href="#technologie">Technologie</a>
                <a href="#offres">Plans & Tarifs</a>
                <a href="/demo">Démo Interactive</a>
              </div>
              <div className="footer-column">
                <h4>Entreprise</h4>
                <a href="/about">À Propos</a>
                <a href="/careers">Carrières</a>
                <a href="/partners">Partenaires</a>
                <a href="/press">Presse</a>
              </div>
              <div className="footer-column">
                <h4>Support</h4>
                <a href="/help">Centre d'Aide</a>
                <a href="/contact">Contact</a>
                <a href="/status">Statut Système</a>
                <a href="/api">Documentation API</a>
              </div>
              <div className="footer-column">
                <h4>Légal</h4>
                <a href="/privacy">Confidentialité</a>
                <a href="/terms">Conditions</a>
                <a href="/security">Sécurité</a>
                <a href="/compliance">Conformité</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>© 2025 VELNOR. Tous droits réservés. Propulsé par l'IA Quantique.</p>
            </div>
            <div className="footer-social">
              <div className="social-links">
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">📸</a>
                <a href="#" className="social-link">🎬</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default VelnorLanding;