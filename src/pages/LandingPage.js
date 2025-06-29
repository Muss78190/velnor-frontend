

export default VelnorLanding;import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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
  GiQuantumTunnel,
  GiHologram,
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import * as THREE from 'three';
import '../styles/LandingPage.css';

// Enregistrer les plugins GSAP
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, DrawSVGPlugin);

// Configuration globale
const CONFIG = {
  particleCount: 350,
  connectionDistance: 150,
  mouseForce: 0.0005,
  quantumStateChangeDistance: 80,
  matrixCharCount: 100,
  starFieldCount: 200,
  animationFPS: 60,
  scrollSmoothness: 1.2,
  glowIntensity: 1.5,
  hologramOpacity: 0.4,
};

const VelnorLanding = () => {
  // ================= STATES AVANCÉS =================
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [deviceType, setDeviceType] = useState('desktop');
  const [isQuantumMode, setIsQuantumMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // ================= REFS SYSTÈME =================
  const loaderRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null);
  const particleCanvasRef = useRef(null);
  const matrixCanvasRef = useRef(null);
  const threeCanvasRef = useRef(null);
  const glowOrbRef = useRef(null);
  const cursorTrailRef = useRef([]);
  const scrollIndicatorRef = useRef(null);
  const navRef = useRef(null);
  const quantumFieldRef = useRef(null);
  const hologramRef = useRef(null);
  
  // Refs pour toutes les sections
  const sectionsRefs = {
    func: useRef(null),
    tech: useRef(null),
    offers: useRef(null),
    testi: useRef(null),
    faq: useRef(null),
    stats: useRef(null),
    partners: useRef(null),
    footer: useRef(null),
  };

  // ================= DÉTECTION DEVICE =================
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) setDeviceType('mobile');
      else if (width < 1024) setDeviceType('tablet');
      else setDeviceType('desktop');
    };
    
    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // ================= SYSTÈME DE LOADING QUANTIQUE =================
  useEffect(() => {
    const loadingSequence = async () => {
      // Simulation de chargement avec étapes
      const steps = [
        { progress: 20, text: "Initialisation du noyau quantique..." },
        { progress: 40, text: "Chargement des algorithmes IA..." },
        { progress: 60, text: "Calibrage des systèmes de sécurité..." },
        { progress: 80, text: "Synchronisation avec le réseau..." },
        { progress: 100, text: "Activation complète..." }
      ];

      for (let step of steps) {
        await new Promise(resolve => {
          gsap.to({}, {
            duration: 0.5,
            onUpdate: function() {
              setLoadingProgress(prev => {
                const newProgress = prev + (step.progress - prev) * 0.1;
                return Math.min(newProgress, step.progress);
              });
            },
            onComplete: resolve
          });
        });
      }

      // Animation de sortie épique
      setTimeout(() => {
        const tl = gsap.timeline();
        
        tl.to(loaderRef.current, {
          scale: 1.1,
          duration: 0.3,
          ease: 'power2.in'
        })
        .to(loaderRef.current, {
          scale: 0,
          opacity: 0,
          rotationY: 720,
          rotationX: 360,
          duration: 1.2,
          ease: 'expo.inOut',
          onComplete: () => setLoading(false)
        })
        .to('.quantum-loader-container > *', {
          y: -50,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.8');
      }, 300);
    };

    loadingSequence();
  }, []);

  // ================= SYSTÈME THREE.JS RÉVOLUTIONNAIRE =================
  useEffect(() => {
    if (loading || deviceType === 'mobile') return;

    const canvas = threeCanvasRef.current;
    if (!canvas) return;

    // Configuration Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Position caméra
    camera.position.z = 30;
    
    // ================= CRÉATION HOLOGRAMME QUANTIQUE =================
    const createQuantumHologram = () => {
      const geometry = new THREE.IcosahedronGeometry(8, 1);
      const material = new THREE.MeshPhongMaterial({
        color: 0x2bc0ff,
        emissive: 0x2bc0ff,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      });
      
      const hologram = new THREE.Mesh(geometry, material);
      
      // Création des anneaux orbitaux
      const rings = [];
      for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.TorusGeometry(10 + i * 3, 0.3, 16, 100);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: i === 0 ? 0x2bc0ff : i === 1 ? 0xa94aff : 0xff6b6b,
          transparent: true,
          opacity: 0.4,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.rotation.x = Math.random() * Math.PI;
        ring.rotation.y = Math.random() * Math.PI;
        rings.push(ring);
        scene.add(ring);
      }
      
      // Particules orbitales
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 500;
      const positions = new Float32Array(particlesCount * 3);
      
      for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 50;
      }
      
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0x2bc0ff,
        size: 0.1,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      
      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);
      
      return { hologram, rings, particles };
    };
    
    const { hologram, rings, particles } = createQuantumHologram();
    scene.add(hologram);
    
    // Lumières dynamiques
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const pointLight1 = new THREE.PointLight(0x2bc0ff, 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(0xa94aff, 2, 100);
    pointLight2.position.set(-20, -20, -20);
    scene.add(pointLight2);
    
    // ================= ANIMATION LOOP =================
    const clock = new THREE.Clock();
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Rotation hologramme
      hologram.rotation.x = elapsedTime * 0.5;
      hologram.rotation.y = elapsedTime * 0.3;
      
      // Animation des anneaux
      rings.forEach((ring, index) => {
        ring.rotation.x += 0.01 * (index + 1);
        ring.rotation.y += 0.005 * (index + 1);
        ring.rotation.z += 0.003 * (index + 1);
      });
      
      // Mouvement des particules
      const particlePositions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particlePositions.length; i += 3) {
        particlePositions[i + 1] += Math.sin(elapsedTime + i) * 0.01;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      // Effet de respiration sur l'hologramme
      hologram.scale.setScalar(1 + Math.sin(elapsedTime * 2) * 0.1);
      
      // Rotation des lumières
      pointLight1.position.x = Math.sin(elapsedTime) * 30;
      pointLight1.position.z = Math.cos(elapsedTime) * 30;
      
      pointLight2.position.x = Math.cos(elapsedTime) * 30;
      pointLight2.position.z = Math.sin(elapsedTime) * 30;
      
      // Interaction avec la souris
      const targetX = mousePos.x * 0.001;
      const targetY = -mousePos.y * 0.001;
      
      hologram.rotation.x += 0.05 * (targetY - hologram.rotation.x);
      hologram.rotation.y += 0.05 * (targetX - hologram.rotation.y);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Gestion du resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [loading, mousePos, deviceType]);

  // ================= SYSTÈME PARTICULES QUANTIQUES AVANCÉ =================
  useEffect(() => {
    if (loading) return;

    const canvas = particleCanvasRef.current;
    const matrixCanvas = matrixCanvasRef.current;
    if (!canvas || !matrixCanvas) return;

    const ctx = canvas.getContext('2d');
    const matrixCtx = matrixCanvas.getContext('2d');
    
    // Configuration adaptive
    const resizeCanvases = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width;
      canvas.height = height;
      matrixCanvas.width = width;
      matrixCanvas.height = height;
      
      // Ajuster le nombre de particules selon la taille d'écran
      const baseCount = deviceType === 'mobile' ? 100 : deviceType === 'tablet' ? 200 : CONFIG.particleCount;
      return Math.min(baseCount, Math.floor(width * 0.15));
    };

    let particleCount = resizeCanvases();
    window.addEventListener('resize', () => {
      particleCount = resizeCanvases();
    });

    // ================= CLASSE PARTICULE QUANTIQUE ULTIME =================
    class UltraQuantumParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.age = Math.random() * 100;
        this.energy = Math.random() * 0.5 + 0.5;
        this.quantumState = Math.random() > 0.5 ? 1 : -1;
        this.frequency = Math.random() * 0.1 + 0.05;
        this.amplitude = Math.random() * 50 + 20;
        this.phase = Math.random() * Math.PI * 2;
        this.orbitRadius = Math.random() * 100 + 50;
        this.orbitSpeed = (Math.random() - 0.5) * 0.02;
        this.glowIntensity = Math.random() * 0.5 + 0.5;
        this.connectionStrength = Math.random() * 0.5 + 0.5;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = Math.random() * 2 + 0.5;
        this.size = Math.random() * 6 + 2;
        this.baseSize = this.size;
        
        // Palette de couleurs étendue
        const colors = [
          '43, 192, 255',  // Bleu quantique
          '169, 74, 255',  // Violet profond
          '255, 107, 107', // Rouge énergie
          '76, 217, 100',  // Vert matrix
          '255, 204, 0',   // Or stellaire
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.pulse = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        this.rotation = 0;
        this.trail = [];
        this.maxTrailLength = Math.floor(Math.random() * 10 + 5);
        this.connections = [];
        this.waveOffset = Math.random() * Math.PI * 2;
      }

      update() {
        // Physique avancée
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.frequency;
        this.rotation += this.rotationSpeed;
        this.age++;
        this.waveOffset += 0.02;

        // Mouvement ondulatoire complexe
        const waveX = Math.sin(this.waveOffset + this.phase) * this.amplitude * 0.5;
        const waveY = Math.cos(this.waveOffset * 0.7 + this.phase) * this.amplitude * 0.3;
        
        this.x += waveX * 0.01;
        this.y += waveY * 0.01;

        // Attraction magnétique avancée
        const dx = mousePos.x - this.x;
        const dy = mousePos.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 300) {
          const force = (300 - distance) / 300;
          const attraction = force * CONFIG.mouseForce * this.energy;
          
          // Effet de vortex quantique
          const angle = Math.atan2(dy, dx);
          const vortexAngle = angle + Math.PI * 0.5 * force;
          
          this.vx += Math.cos(vortexAngle) * attraction;
          this.vy += Math.sin(vortexAngle) * attraction;
          
          // Changement d'état quantique
          if (distance < CONFIG.quantumStateChangeDistance && Math.random() > 0.95) {
            this.quantumState *= -1;
            this.energy = Math.min(1, this.energy + 0.2);
            this.glowIntensity = Math.min(1, this.glowIntensity + 0.3);
            
            // Effet de burst quantique
            this.createQuantumBurst();
          }
        }

        // Champ de force cosmique
        const cosmicX = Math.sin(this.y * 0.005 + Date.now() * 0.0001) * 0.05;
        const cosmicY = Math.cos(this.x * 0.005 + Date.now() * 0.0001) * 0.03;
        
        this.vx += cosmicX;
        this.vy += cosmicY;

        // Limitation de vitesse avec effet relativiste
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        const maxSpeed = 5;
        if (speed > maxSpeed) {
          const scale = maxSpeed / speed;
          this.vx *= scale;
          this.vy *= scale;
        }

        // Pulsation quantique complexe
        const pulseFactor = Math.sin(this.pulse) * 0.3 + 
                          Math.sin(this.pulse * 2) * 0.2 + 
                          Math.sin(this.pulse * 3) * 0.1 + 0.7;
        this.size = this.baseSize * pulseFactor * this.energy;

        // Gestion du trail amélioré
        this.trail.push({ 
          x: this.x, 
          y: this.y, 
          age: 0,
          size: this.size,
          energy: this.energy
        });
        
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }
        
        this.trail.forEach(point => {
          point.age++;
          point.energy *= 0.95;
        });

        // Dissipation d'énergie
        this.energy *= 0.998;
        this.glowIntensity *= 0.995;

        // Reset conditions améliorées
        if (this.y > canvas.height + 100 || 
            this.x < -100 || 
            this.x > canvas.width + 100 || 
            this.energy < 0.1) {
          this.reset();
        }
      }

      createQuantumBurst() {
        // Effet visuel de burst quantique (à implémenter dans le draw)
        this.burstAnimation = {
          radius: 0,
          maxRadius: 50,
          opacity: 1,
          color: this.color
        };
      }

      draw() {
        const alpha = this.energy * 0.9 * this.glowIntensity;
        
        // Dessiner le trail avec effet de distorsion
        this.trail.forEach((point, index) => {
          const trailProgress = index / this.trail.length;
          const trailAlpha = alpha * trailProgress * 0.5 * point.energy;
          const trailSize = point.size * trailProgress * 0.7;
          
          // Effet de distorsion temporelle
          const distortion = Math.sin(Date.now() * 0.001 + index * 0.5) * 2;
          
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          
          // Gradient pour le trail
          const trailGradient = ctx.createRadialGradient(
            point.x + distortion, point.y, 0,
            point.x + distortion, point.y, trailSize * 2
          );
          trailGradient.addColorStop(0, `rgba(${this.color}, ${trailAlpha})`);
          trailGradient.addColorStop(0.5, `rgba(${this.color}, ${trailAlpha * 0.5})`);
          trailGradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(point.x + distortion, point.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = trailGradient;
          ctx.fill();
          
          ctx.restore();
        });

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Effet de halo quantique multi-couches
        for (let i = 3; i > 0; i--) {
          const haloSize = this.size * (2 + i * 0.5);
          const haloAlpha = alpha * 0.1 / i;
          
          const haloGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, haloSize);
          haloGradient.addColorStop(0, `rgba(${this.color}, ${haloAlpha})`);
          haloGradient.addColorStop(0.5, `rgba(${this.color}, ${haloAlpha * 0.5})`);
          haloGradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(0, 0, haloSize, 0, Math.PI * 2);
          ctx.fillStyle = haloGradient;
          ctx.fill();
        }
        
        // Particule principale avec effet holographique
        ctx.globalCompositeOperation = 'screen';
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(0.3, `rgba(${this.color}, ${alpha})`);
        gradient.addColorStop(0.7, `rgba(${this.color}, ${alpha * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.shadowBlur = 30;
        ctx.shadowColor = `rgba(${this.color}, ${alpha})`;
        ctx.fill();
        
        // Noyau énergétique
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.fill();
        
        // Anneaux quantiques
        if (this.quantumState > 0) {
          ctx.strokeStyle = `rgba(${this.color}, ${alpha * 0.3})`;
          ctx.lineWidth = 1;
          
          for (let i = 1; i <= 3; i++) {
            ctx.beginPath();
            ctx.arc(0, 0, this.size * (1.5 + i * 0.5), 0, Math.PI * 2);
            ctx.stroke();
          }
        }

        // Effet de scintillement énergétique
        if (Math.random() > 0.98) {
          const sparkSize = this.size * 2;
          const sparkGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkSize);
          sparkGradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
          sparkGradient.addColorStop(0.5, `rgba(${this.color}, ${alpha * 0.5})`);
          sparkGradient.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(0, 0, sparkSize, 0, Math.PI * 2);
          ctx.fillStyle = sparkGradient;
          ctx.fill();
        }
        
        // Animation de burst quantique
        if (this.burstAnimation) {
          ctx.globalCompositeOperation = 'screen';
          this.burstAnimation.radius += 2;
          this.burstAnimation.opacity -= 0.02;
          
          if (this.burstAnimation.opacity > 0) {
            ctx.strokeStyle = `rgba(${this.burstAnimation.color}, ${this.burstAnimation.opacity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, this.burstAnimation.radius, 0, Math.PI * 2);
            ctx.stroke();
          } else {
            this.burstAnimation = null;
          }
        }
        
        ctx.restore();
      }
    }

    // ================= MATRICE DIGITALE AVANCÉE =================
    class AdvancedMatrixChar {
      constructor() {
        this.reset();
        this.colorScheme = Math.random() > 0.5 ? 'blue' : 'purple';
      }

      reset() {
        this.x = Math.random() * matrixCanvas.width;
        this.y = Math.random() * matrixCanvas.height - matrixCanvas.height;
        this.chars = this.generateCharSequence();
        this.charIndex = 0;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.speed = Math.random() * 3 + 1;
        this.life = Math.random() * 300 + 200;
        this.age = 0;
        this.glitchProbability = Math.random() * 0.1;
        this.fontSize = Math.random() * 6 + 12;
      }

      generateCharSequence() {
        const sequences = [
          // Caractères Matrix classiques
          Array.from({length: 10}, () => String.fromCharCode(0x30A0 + Math.random() * 96)),
          // Binaire
          Array.from({length: 8}, () => Math.random() > 0.5 ? '1' : '0'),
          // Hexadécimal
          Array.from({length: 6}, () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]),
          // Symboles tech
          ['<', '/', '>', '{', '}', '[', ']', '(', ')', ';'],
          // Mots clés
          ['AI', 'QUANTUM', 'SECURE', 'SCAN', 'PROTECT', 'ANALYZE'],
        ];
        
        return sequences[Math.floor(Math.random() * sequences.length)];
      }

      update() {
        this.y += this.speed;
        this.age++;
        this.opacity *= 0.997;
        
        // Changement de caractère
        if (this.age % 5 === 0) {
          this.charIndex = (this.charIndex + 1) % this.chars.length;
        }
        
        // Effet de glitch
        if (Math.random() < this.glitchProbability) {
          this.chars = this.generateCharSequence();
          this.opacity = Math.min(1, this.opacity + 0.3);
        }

        if (this.y > matrixCanvas.height || this.age > this.life || this.opacity < 0.01) {
          this.reset();
        }
      }

      draw() {
        const char = this.chars[this.charIndex];
        const color = this.colorScheme === 'blue' ? '43, 192, 255' : '169, 74, 255';
        
        matrixCtx.font = `${this.fontSize}px "Fira Code", monospace`;
        matrixCtx.fillStyle = `rgba(${color}, ${this.opacity})`;
        matrixCtx.shadowBlur = 10;
        matrixCtx.shadowColor = `rgba(${color}, ${this.opacity * 0.5})`;
        
        // Effet de distorsion
        const distortionX = Math.sin(this.age * 0.1) * 2;
        matrixCtx.fillText(char, this.x + distortionX, this.y);
        
        // Trail lumineux
        if (this.opacity > 0.3) {
          matrixCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
          matrixCtx.fillText(char, this.x + distortionX, this.y - this.fontSize);
        }
      }
    }

    // ================= SYSTÈME DE CHAMP DE FORCE =================
    class ForceField {
      constructor() {
        this.nodes = [];
        this.connections = [];
        this.initializeField();
      }

      initializeField() {
        const nodeCount = 20;
        for (let i = 0; i < nodeCount; i++) {
          this.nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            energy: Math.random() * 0.5 + 0.5,
            radius: Math.random() * 30 + 20,
          });
        }
      }

      update() {
        // Mise à jour des nœuds
        this.nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          
          // Rebond aux bords
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
          
          // Attraction vers la souris
          const dx = mousePos.x - node.x;
          const dy = mousePos.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            node.vx += dx * 0.00001;
            node.vy += dy * 0.00001;
          }
          
          // Pulsation énergétique
          node.energy = 0.5 + Math.sin(Date.now() * 0.001) * 0.3;
        });

        // Mise à jour des connexions
        this.connections = [];
        for (let i = 0; i < this.nodes.length; i++) {
          for (let j = i + 1; j < this.nodes.length; j++) {
            const dx = this.nodes[i].x - this.nodes[j].x;
            const dy = this.nodes[i].y - this.nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 150) {
              this.connections.push({
                from: this.nodes[i],
                to: this.nodes[j],
                strength: (150 - dist) / 150
              });
            }
          }
        }
      }

      draw() {
        // Dessiner les connexions
        this.connections.forEach(conn => {
          const gradient = ctx.createLinearGradient(
            conn.from.x, conn.from.y,
            conn.to.x, conn.to.y
          );
          gradient.addColorStop(0, `rgba(43, 192, 255, ${conn.strength * 0.2})`);
          gradient.addColorStop(0.5, `rgba(169, 74, 255, ${conn.strength * 0.3})`);
          gradient.addColorStop(1, `rgba(43, 192, 255, ${conn.strength * 0.2})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = conn.strength * 2;
          ctx.beginPath();
          ctx.moveTo(conn.from.x, conn.from.y);
          ctx.lineTo(conn.to.x, conn.to.y);
          ctx.stroke();
        });

        // Dessiner les nœuds
        this.nodes.forEach(node => {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius
          );
          gradient.addColorStop(0, `rgba(255, 255, 255, ${node.energy * 0.8})`);
          gradient.addColorStop(0.5, `rgba(43, 192, 255, ${node.energy * 0.4})`);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Initialisation des systèmes
    const particles = [];
    const matrixChars = [];
    const forceField = new ForceField();

    // Création des particules
    for (let i = 0; i < particleCount; i++) {
      particles.push(new UltraQuantumParticle());
    }

    // Création de la matrice
    for (let i = 0; i < CONFIG.matrixCharCount; i++) {
      matrixChars.push(new AdvancedMatrixChar());
    }

    // ================= BOUCLE D'ANIMATION OPTIMISÉE =================
    let animationId;
    let lastTime = 0;
    const frameInterval = 1000 / CONFIG.animationFPS;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= frameInterval) {
        // Clear des canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        // Mise à jour et rendu du champ de force
        forceField.update();
        forceField.draw();
        
        // Mise à jour et rendu des particules
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });

        // Connexions quantiques entre particules
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONFIG.connectionDistance) {
              const opacity = (CONFIG.connectionDistance - distance) / CONFIG.connectionDistance * 0.2;
              
              // Création de connexions énergétiques
              const gradient = ctx.createLinearGradient(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
              );
              
              gradient.addColorStop(0, `rgba(${particles[i].color}, ${opacity * particles[i].energy})`);
              gradient.addColorStop(0.5, `rgba(169, 74, 255, ${opacity * 1.5})`);
              gradient.addColorStop(1, `rgba(${particles[j].color}, ${opacity * particles[j].energy})`);
              
              ctx.strokeStyle = gradient;
              ctx.lineWidth = Math.min(2, opacity * 10);
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              
              // Courbe de Bézier pour connexion organique
              const cpx = (particles[i].x + particles[j].x) / 2 + Math.sin(currentTime * 0.001) * 20;
              const cpy = (particles[i].y + particles[j].y) / 2 + Math.cos(currentTime * 0.001) * 20;
              ctx.quadraticCurveTo(cpx, cpy, particles[j].x, particles[j].y);
              
              ctx.stroke();
              
              // Échange d'énergie quantique
              if (distance < 50 && particles[i].quantumState !== particles[j].quantumState) {
                const energyTransfer = 0.01;
                particles[i].energy = Math.min(1, particles[i].energy + energyTransfer);
                particles[j].energy = Math.min(1, particles[j].energy + energyTransfer);
              }
            }
          }
        }

        // Mise à jour et rendu de la matrice
        matrixChars.forEach(char => {
          char.update();
          char.draw();
        });

        // Effet de vague quantique globale
        const waveTime = currentTime * 0.0005;
        const waveGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        waveGradient.addColorStop(0, `rgba(43, 192, 255, ${Math.sin(waveTime) * 0.05 + 0.05})`);
        waveGradient.addColorStop(0.5, `rgba(169, 74, 255, ${Math.cos(waveTime) * 0.05 + 0.05})`);
        waveGradient.addColorStop(1, `rgba(255, 107, 107, ${Math.sin(waveTime * 1.5) * 0.05 + 0.05})`);
        
        ctx.fillStyle = waveGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvases);
    };
  }, [loading, mousePos, deviceType]);

  // ================= SYSTÈME DE CURSEUR QUANTIQUE =================
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Mise à jour de l'orbe lumineux
      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          x: e.clientX - 15,
          y: e.clientY - 15,
          duration: 0.2,
          ease: 'power2.out'
        });
      }

      // Création de multiples trails
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const trail = document.createElement('div');
          trail.className = 'cursor-quantum-trail';
          trail.style.left = (e.clientX + (Math.random() - 0.5) * 20) + 'px';
          trail.style.top = (e.clientY + (Math.random() - 0.5) * 20) + 'px';
          trail.style.width = Math.random() * 6 + 2 + 'px';
          trail.style.height = trail.style.width;
          document.body.appendChild(trail);
          
          // Animation du trail
          gsap.to(trail, {
            scale: 0,
            opacity: 0,
            x: (Math.random() - 0.5) * 100,
            y: (Math.random() - 0.5) * 100,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              if (trail.parentNode) {
                trail.parentNode.removeChild(trail);
              }
            }
          });
        }, i * 50);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // ================= SCROLL PROGRESS TRACKER =================
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Mise à jour de la section active
      const sections = ['hero', 'fonctionnement', 'technologie', 'offres', 'temoignages', 'faq'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ================= ANIMATIONS GSAP RÉVOLUTIONNAIRES =================
  useEffect(() => {
    if (loading) return;

    // Configuration de base
    gsap.config({ nullTargetWarn: false });
    ScrollTrigger.config({ limitCallbacks: true });

    // ================= ANIMATION HERO CINÉMATOGRAPHIQUE =================
    const heroTimeline = gsap.timeline({ delay: 0.5 });
    
    heroTimeline
      .fromTo(heroRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 100,
          rotationX: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotationX: 0,
          duration: 2,
          ease: 'expo.out'
        }
      )
      .fromTo('.hero-badge',
        {
          opacity: 0,
          y: -30,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)'
        },
        '-=1.5'
      )
      .fromTo('.quantum-title .title-line',
        {
          opacity: 0,
          y: 50,
          rotationY: -15,
          transformOrigin: 'left center'
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out'
        },
        '-=1'
      )
      .fromTo('.quantum-subtitle',
        {
          opacity: 0,
          y: 30,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      .fromTo('.quantum-description',
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 0.9,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        },
        '-=0.5'
      )
      .fromTo('.quantum-cta-btn',
        {
          opacity: 0,
          scale: 0.8,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'elastic.out(1, 0.5)'
        },
        '-=0.5'
      )
      .fromTo('.cta-stats',
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        },
        '-=0.3');

    // Animation continue du titre avec effet holographique
    gsap.to(heroTitleRef.current, {
      textShadow: `
        0 0 30px var(--blue-main),
        0 0 60px var(--purple-main),
        0 0 90px var(--blue-main),
        0 0 120px var(--purple-main)
      `,
      scale: 1.02,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 4,
    });

    // ================= ANIMATIONS DE SCROLL AVANCÉES =================
    const createScrollAnimation = (target, options = {}) => {
      const defaults = {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      };
      
      const settings = { ...defaults, ...options };
      
      gsap.fromTo(target,
        {
          y: settings.y,
          opacity: settings.opacity,
          ...settings.from
        },
        {
          y: 0,
          opacity: 1,
          duration: settings.duration,
          ease: settings.ease,
          scrollTrigger: {
            trigger: target,
            start: settings.start,
            end: settings.end,
            toggleActions: settings.toggleActions,
            scrub: settings.scrub || false
          },
          ...settings.to
        }
      );
    };

    // Animations pour chaque section
    Object.values(sectionsRefs).forEach((ref, index) => {
      if (ref.current) {
        createScrollAnimation(ref.current, {
          y: 80,
          delay: index * 0.1,
          from: {
            rotationY: index % 2 === 0 ? -10 : 10,
            transformPerspective: 1000
          }
        });
      }
    });

    // ================= ANIMATIONS DE CARTES QUANTIQUES =================
    gsap.utils.toArray('.quantum-card').forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(card,
        {
          opacity: 0,
          y: 60,
          scale: 0.9,
          rotationY: -20
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1.2,
          delay: index * 0.15,
          ease: 'power3.out'
        }
      );

      // Hover effects
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          boxShadow: '0 40px 100px rgba(43, 192, 255, 0.3)',
          duration: 0.4,
          ease: 'power2.out'
        });
        
        // Animation de l'icône
        const icon = card.querySelector('.process-icon, .tech-icon');
        if (icon) {
          gsap.to(icon, {
            rotation: 360,
            scale: 1.2,
            duration: 0.8,
            ease: 'power2.inOut'
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          duration: 0.4,
          ease: 'power2.out'
        });
        
        const icon = card.querySelector('.process-icon, .tech-icon');
        if (icon) {
          gsap.to(icon, {
            rotation: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power2.inOut'
          });
        }
      });
    });

    // ================= ANIMATION DES LIGNES DE CONNEXION =================
    const connectionPaths = document.querySelectorAll('.quantum-path');
    connectionPaths.forEach((path, index) => {
      const length = path.getTotalLength();
      
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length
      });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        delay: index * 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: path,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // ================= ANIMATION DES STATISTIQUES =================
    const animateStats = () => {
      gsap.utils.toArray('.stat-number').forEach(stat => {
        const value = stat.textContent;
        const isPercentage = value.includes('%');
        const isDecimal = value.includes('.');
        const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
        
        gsap.fromTo(stat,
          {
            textContent: 0
          },
          {
            textContent: numericValue,
            duration: 2.5,
            ease: 'power2.out',
            snap: isDecimal ? { textContent: 0.1 } : { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            onUpdate: function() {
              const current = this.targets()[0].textContent;
              if (isPercentage) {
                stat.textContent = parseFloat(current).toFixed(isDecimal ? 1 : 0) + '%';
              } else if (value.includes('M')) {
                stat.textContent = parseFloat(current).toFixed(1) + 'M+';
              } else if (value.includes('TB')) {
                stat.textContent = parseFloat(current).toFixed(1) + 'TB/s';
              } else {
                stat.textContent = Math.floor(current).toLocaleString();
              }
            }
          }
        );
      });
    };

    animateStats();

    // ================= PARALLAX EFFECTS =================
    gsap.utils.toArray('.parallax-element').forEach(element => {
      const speed = element.dataset.speed || 0.5;
      
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    });

    // ================= ANIMATION NAVBAR =================
    let lastScrollY = 0;
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      onUpdate: (self) => {
        const scrollY = self.scroll();
        
        if (scrollY > lastScrollY && scrollY > 100) {
          // Scrolling down
          gsap.to(navRef.current, {
            y: -100,
            duration: 0.3,
            ease: 'power2.inOut'
          });
        } else {
          // Scrolling up
          gsap.to(navRef.current, {
            y: 0,
            duration: 0.3,
            ease: 'power2.inOut'
          });
        }
        
        // Changement de style de la navbar
        if (scrollY > 50) {
          navRef.current?.classList.add('scrolled');
        } else {
          navRef.current?.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
      }
    });

    // ================= FLOATING ELEMENTS =================
    gsap.utils.toArray('.floating-element').forEach((element, index) => {
      gsap.to(element, {
        y: -20,
        rotation: 3,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [loading]);

  // ================= NAVIGATION HANDLERS =================
  const handleNavClick = useCallback((e, anchor) => {
    e.preventDefault();
    const target = document.querySelector(anchor);
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      
      gsap.to(window, {
        scrollTo: {
          y: targetPosition,
          autoKill: true
        },
        duration: 1.5,
        ease: 'power3.inOut'
      });
    }
    setMenuOpen(false);
  }, []);

  const handleCTAClick = useCallback(() => {
    // Animation du bouton
    const button = document.querySelector('.quantum-cta-btn');
    
    gsap.timeline()
      .to(button, {
        scale: 0.95,
        duration: 0.1
      })
      .to(button, {
        scale: 1.05,
        duration: 0.1
      })
      .to(button, {
        scale: 1,
        duration: 0.1,
        onComplete: () => {
          const offersSection = document.querySelector('#offres');
          if (offersSection) {
            offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
  }, []);

  // ================= MODE QUANTIQUE =================
  const toggleQuantumMode = useCallback(() => {
    setIsQuantumMode(prev => !prev);
    
    if (!isQuantumMode) {
      document.body.classList.add('quantum-mode');
      
      // Effet de transition quantique
      gsap.timeline()
        .to('body', {
          backgroundColor: '#000',
          duration: 0.5
        })
        .to('.quantum-particles, .quantum-matrix', {
          opacity: 1,
          duration: 0.5
        }, '-=0.3');
    } else {
      document.body.classList.remove('quantum-mode');
      
      gsap.timeline()
        .to('body', {
          backgroundColor: '#010116',
          duration: 0.5
        })
        .to('.quantum-particles, .quantum-matrix', {
          opacity: 0.5,
          duration: 0.5
        }, '-=0.3');
    }
  }, [isQuantumMode]);

  // ================= RENDER =================
  return (
    <>
      {/* ================= LOADER QUANTIQUE RÉVOLUTIONNAIRE ================= */}
      {loading && (
        <div ref={loaderRef} className="quantum-loader">
          <div className="quantum-loader-container">
            <div className="quantum-spinner">
              <div className="quantum-ring ring-1"></div>
              <div className="quantum-ring ring-2"></div>
              <div className="quantum-ring ring-3"></div>
              <div className="quantum-core"></div>
              <div className="quantum-particles-loader"></div>
            </div>
            <div className="quantum-text">VELNOR</div>
            <div className="quantum-subtitle">Initialisation du Système IA Quantique...</div>
            <div className="quantum-progress">
              <div 
                className="quantum-progress-bar"
                style={{ width: `${loadingProgress}%` }}
              >
                <div className="progress-glow"></div>
              </div>
            </div>
            <div className="quantum-percentage">{Math.floor(loadingProgress)}%</div>
            <div className="loading-status">
              {loadingProgress < 30 && "Chargement des algorithmes quantiques..."}
              {loadingProgress >= 30 && loadingProgress < 60 && "Calibrage des systèmes de sécurité..."}
              {loadingProgress >= 60 && loadingProgress < 90 && "Synchronisation avec le réseau neuronal..."}
              {loadingProgress >= 90 && "Activation imminente..."}
            </div>
          </div>
        </div>
      )}

      {/* ================= EFFETS VISUELS ================= */}
      <div ref={glowOrbRef} className="quantum-cursor-orb"></div>
      <canvas ref={particleCanvasRef} className="quantum-particles"></canvas>
      <canvas ref={matrixCanvasRef} className="quantum-matrix"></canvas>
      <canvas ref={threeCanvasRef} className="three-canvas"></canvas>
      
      {/* ================= BARRE DE PROGRESSION ================= */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* ================= NAVBAR QUANTIQUE ================= */}
      <nav ref={navRef} className="quantum-navbar">
        <div className="navbar-content">
          <div className="quantum-logo floating-element">
            <span className="logo-text">VELNOR</span>
            <div className="logo-glow"></div>
            <div className="logo-particles"></div>
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
                <div className="nav-link-glow"></div>
                <div className="nav-link-particles"></div>
              </a>
            ))}
            
            <button 
              className="quantum-admin-btn floating-element"
              onClick={() => window.location.href = '/admin'}
            >
              <FaCog className="admin-icon" />
              <span>Admin</span>
              <div className="btn-quantum-glow"></div>
            </button>
            
            <button
              className="quantum-mode-toggle"
              onClick={toggleQuantumMode}
            >
              <BiAtom className={`mode-icon ${isQuantumMode ? 'active' : ''}`} />
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
        {/* ================= HERO SECTION QUANTIQUE ================= */}
        <section id="hero" className="quantum-hero" ref={heroRef}>
          <div className="hero-quantum-bg">
            <div className="quantum-wave wave-1"></div>
            <div className="quantum-wave wave-2"></div>
            <div className="quantum-wave wave-3"></div>
            <div className="quantum-grid"></div>
            <div className="quantum-stars"></div>
          </div>
          
          <div className="hero-content">
            <div className="hero-badge floating-element">
              <BsLightning className="badge-icon" />
              <span>IA Révolutionnaire</span>
              <div className="badge-glow"></div>
            </div>
            
            <h1 className="quantum-title" ref={heroTitleRef}>
              <span className="title-line">
                <span className="title-word">L'Intelligence</span>
                <span className="title-word">Artificielle</span>
              </span>
              <span className="title-line highlight">
                <span className="title-word">qui</span>
                <span className="title-word">révolutionne</span>
              </span>
              <span className="title-line">
                <span className="title-word">votre</span>
                <span className="title-word">cybersécurité</span>
              </span>
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
              de confiance certifiés. L'avenir de la cybersécurité, aujourd'hui.
            </p>

            <div className="quantum-cta-container">
              <button className="quantum-cta-btn main-cta" onClick={handleCTAClick}>
                <div className="btn-bg"></div>
                <GiArtificialIntelligence className="cta-icon" />
                <span>Lancer Audit Quantique</span>
                <div className="cta-quantum-trail"></div>
                <div className="btn-particles"></div>
              </button>
              
              <div className="cta-stats">
                <div className="stat-item">
                  <IoMdPulse className="stat-icon-animated" />
                  <span className="stat-number">2.3M+</span>
                  <span className="stat-label">Menaces Détectées</span>
                </div>
                <div className="stat-item">
                  <GiQuantumTunnel className="stat-icon-animated" />
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
            
            <div className="hero-scroll-indicator" ref={scrollIndicatorRef}>
              <FaChevronDown className="scroll-arrow" />
              <span>Découvrir</span>
            </div>
          </div>
          
          <div className="hero-hologram">
            <div className="hologram-container" ref={hologramRef}>
              <div className="hologram-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
              <div className="hologram-core">
                <GiArtificialIntelligence />
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATISTIQUES GLOBALES ================= */}
        <section className="quantum-stats-banner" ref={sectionsRefs.stats}>
          <div className="stats-container">
            <div className="stats-grid">
              {[
                { icon: GiRadarSweep, value: "847K", label: "Sites Analysés", color: "blue" },
                { icon: BsShieldCheck, value: "99.97%", label: "Détection", color: "purple" },
                { icon: IoMdFlash, value: "2.3TB/s", label: "Vitesse Traitement", color: "green" },
                { icon: FaAward, value: "ISO 27001", label: "Certifié", color: "gold" }
              ].map((stat, index) => (
                <div key={index} className="global-stat-item" data-color={stat.color}>
                  <div className="stat-icon-container">
                    <stat.icon className="stat-icon" />
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="stat-content">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                  <div className="stat-bg-effect"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PROCESSUS QUANTIQUE ================= */}
        <section id="fonctionnement" className="quantum-section" ref={sectionsRefs.func}>
          <div className="section-header">
            <div className="section-badge">
              <GiCircuitry />
              <span>Processus</span>
            </div>
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
                icon: GiRadarSweep,
                title: "Scan Quantique",
                description: "L'IA analyse votre site avec une précision moléculaire, détectant les moindres anomalies",
                features: ["Analyse en temps réel", "Scan multi-dimensionnel", "Détection prédictive"],
                metrics: { speed: "<1s", accuracy: "99.9%", depth: "∞" },
                color: "blue",
                animation: "radar"
              },
              {
                icon: GiArtificialIntelligence,
                title: "Analyse Prédictive",
                description: "Détection des vulnérabilités futures grâce à nos algorithmes quantiques",
                features: ["Machine Learning avancé", "Prédiction temporelle", "Analyse comportementale"],
                metrics: { patterns: "847M", precision: "99.97%", prediction: "30j" },
                color: "purple",
                animation: "brain"
              },
              {
                icon: GiHologram,
                title: "Rapport Holographique",
                description: "PDF ultra-détaillé avec visualisations 3D et recommandations personnalisées",
                features: ["Rapport interactif", "Visualisations 3D", "Plan d'action détaillé"],
                metrics: { pages: "50+", graphs: "3D", delivery: "24h" },
                color: "green",
                animation: "hologram"
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`quantum-process-card quantum-card color-${step.color}`}
                data-animation={step.animation}
              >
                <div className="process-card-bg">
                  <div className="bg-pattern"></div>
                  <div className="bg-glow"></div>
                </div>
                
                <div className="process-card-header">
                  <div className="process-icon-container">
                    <step.icon className="process-icon" />
                    <div className="icon-quantum-ring"></div>
                    <div className="icon-particles"></div>
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
                
                <div className="process-metrics">
                  {Object.entries(step.metrics).map(([key, value]) => (
                    <div key={key} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>

                <div className="card-quantum-effects">
                  <div className="quantum-glow"></div>
                  <div className="quantum-particles"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="quantum-connection-visualization">
            <svg className="connection-svg" viewBox="0 0 1200 300">
              <defs>
                <linearGradient id="quantumGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--blue-main)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="var(--purple-main)" stopOpacity="1" />
                  <stop offset="100%" stopColor="var(--green-accent)" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <path
                d="M 100 150 Q 300 50 600 150 Q 900 250 1100 150"
                stroke="url(#quantumGradient1)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                className="quantum-path main-path"
              />
              
              <circle cx="100" cy="150" r="8" fill="var(--blue-main)" className="path-node" />
              <circle cx="600" cy="150" r="8" fill="var(--purple-main)" className="path-node" />
              <circle cx="1100" cy="150" r="8" fill="var(--green-accent)" className="path-node" />
              
              {/* Particules animées le long du chemin */}
              <circle r="4" fill="#fff" className="path-particle">
                <animateMotion dur="4s" repeatCount="indefinite">
                  <mpath href="#motionPath" />
                </animateMotion>
              </circle>
            </svg>
          </div>
        </section>

        {/* ================= TECHNOLOGIE RÉVOLUTIONNAIRE ================= */}
        <section id="technologie" className="quantum-section tech-section" ref={sectionsRefs.tech}>
          <div className="section-bg-effects">
            <div className="tech-grid-bg"></div>
            <div className="tech-particles"></div>
          </div>
          
          <div className="section-header">
            <div className="section-badge">
              <GiProcessor />
              <span>Technologies</span>
            </div>
            <h2 className="quantum-section-title">
              <span>Arsenal</span>
              <span className="title-accent">Technologique</span>
            </h2>
            <p className="section-subtitle">
              Technologies de pointe fusionnées pour une cybersécurité révolutionnaire
            </p>
          </div>

          <div className="quantum-tech-showcase">
            <div className="tech-main-display">
              <div className="holographic-display">
                <div className="holo-content">
                  <GiQuantumTunnel className="holo-icon" />
                  <div className="holo-rings">
                    <div className="holo-ring ring-1"></div>
                    <div className="holo-ring ring-2"></div>
                    <div className="holo-ring ring-3"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="quantum-tech-grid">
              {[
                {
                  icon: GiArtificialIntelligence,
                  title: "IA Quantique",
                  description: "Réseaux de neurones quantiques pour une analyse prédictive révolutionnaire",
                  features: ["Deep Learning Avancé", "Analyse Comportementale", "Prédiction Temporelle"],
                  stats: { neurons: "1.2B", layers: "847", accuracy: "99.97%" },
                  color: "purple",
                  intensity: "high"
                },
                {
                  icon: MdSecurity,
                  title: "Bouclier Adaptatif",
                  description: "Système de défense auto-évolutif qui s'adapte aux nouvelles menaces",
                  features: ["Protection Temps Réel", "Auto-apprentissage", "Réponse Instantanée"],
                  stats: { response: "0.3ms", adaptation: "∞", coverage: "100%" },
                  color: "blue",
                  intensity: "medium"
                },
                {
                  icon: FaChartBar,
                  title: "Analytics 4D",
                  description: "Visualisation multi-dimensionnelle des données de sécurité",
                  features: ["Graphiques Holographiques", "Métriques Prédictives", "Tableaux de Bord IA"],
                  stats: { dimensions: "4D", datapoints: "10M/s", viz: "∞" },
                  color: "green",
                  intensity: "high"
                },
                {
                  icon: BsLightning,
                  title: "Traitement Éclair",
                  description: "Analyse ultra-rapide grâce à l'informatique quantique",
                  features: ["Vitesse Lumière", "Parallélisation Massive", "Optimisation Continue"],
                  stats: { speed: "2.3TB/s", cores: "1024", optimization: "99.9%" },
                  color: "yellow",
                  intensity: "extreme"
                },
                {
                  icon: GiCrystalGrowth,
                  title: "Auto-Évolution",
                  description: "Système qui apprend et évolue continuellement",
                  features: ["Apprentissage Continu", "Mutation Algorithmique", "Adaptation Dynamique"],
                  stats: { evolution: "24/7", patterns: "∞", growth: "+15%/j" },
                  color: "purple",
                  intensity: "medium"
                },
                {
                  icon: BiDna,
                  title: "ADN Digital",
                  description: "Empreinte numérique unique pour chaque infrastructure",
                  features: ["Signature Unique", "Traçabilité Complète", "Identification Instantanée"],
                  stats: { uniqueness: "100%", tracking: "∞", id: "0.1ms" },
                  color: "blue",
                  intensity: "high"
                }
              ].map((tech, index) => (
                <div
                  key={index}
                  className={`quantum-tech-card quantum-card color-${tech.color} intensity-${tech.intensity}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="tech-card-background">
                    <div className="tech-pattern"></div>
                    <div className="tech-circuits"></div>
                    <div className="tech-glow-effect"></div>
                  </div>

                  <div className="tech-card-header">
                    <div className="tech-icon-sphere">
                      <tech.icon className="tech-icon" />
                      <div className="sphere-ring ring-1"></div>
                      <div className="sphere-ring ring-2"></div>
                      <div className="sphere-ring ring-3"></div>
                      <div className="icon-particles">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="particle"></div>
                        ))}
                      </div>
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
                    
                    <div className="tech-stats">
                      {Object.entries(tech.stats).map(([key, value]) => (
                        <div key={key} className="tech-stat">
                          <span className="stat-key">{key}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="tech-quantum-field"></div>
                  <div className="tech-hover-effect">
                    <div className="hover-particles"></div>
                    <div className="hover-glow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-integration-display">
            <h3 className="integration-title">Intégrations Technologiques</h3>
            <div className="integration-grid">
              {[
                { name: "OWASP ZAP", icon: FaShieldAlt, status: "active" },
                { name: "Nmap", icon: FaNetworkWired, status: "active" },
                { name: "FastAPI", icon: FaRocket, status: "active" },
                { name: "TensorFlow", icon: FaBrain, status: "active" },
                { name: "Stripe", icon: FaLock, status: "secure" },
                { name: "AWS Shield", icon: BsShieldCheck, status: "protected" }
              ].map((integration, index) => (
                <div key={index} className={`integration-item ${integration.status}`}>
                  <integration.icon className="integration-icon" />
                  <span className="integration-name">{integration.name}</span>
                  <div className="integration-status"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OFFRES QUANTIQUES ================= */}
        <section id="offres" className="quantum-section offers-section" ref={sectionsRefs.offers}>
          <div className="section-header">
            <div className="section-badge">
              <FaCertificate />
              <span>Offres</span>
            </div>
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
                id: "starter",
                name: "Audit Quantique 48h",
                subtitle: "Protection Professionnelle",
                price: "499",
                originalPrice: "699",
                currency: "€ HT",
                duration: "48 heures",
                features: [
                  { name: "Scan IA Complet", included: true, premium: false, description: "Analyse approfondie de votre infrastructure" },
                  { name: "Rapport PDF Ultra-Détaillé", included: true, premium: false, description: "50+ pages d'analyses et recommandations" },
                  { name: "Détection 500+ Vulnérabilités", included: true, premium: false, description: "Base de données constamment mise à jour" },
                  { name: "Support Email Standard", included: true, premium: false, description: "Réponse sous 24h" },
                  { name: "Garantie Livraison 48h", included: true, premium: false, description: "Ou remboursé" },
                  { name: "Badge de Confiance Premium", included: false, premium: true },
                  { name: "Support Prioritaire 24/7", included: false, premium: true },
                  { name: "Analyse Prédictive Avancée", included: false, premium: true }
                ],
                badge: null,
                gradient: "linear-gradient(135deg, var(--blue-main), var(--purple-main))",
                popular: false,
                savings: "200€",
                icon: BsShieldCheck
              },
              {
                id: "premium",
                name: "Audit Quantique 24h",
                subtitle: "Protection Elite",
                price: "699",
                originalPrice: "999",
                currency: "€ HT",
                duration: "24 heures",
                features: [
                  { name: "Scan IA Quantique Avancé", included: true, premium: true, description: "Technologie de pointe avec IA prédictive" },
                  { name: "Rapport Holographique PDF", included: true, premium: true, description: "100+ pages avec visualisations 3D" },
                  { name: "Détection 1000+ Vulnérabilités", included: true, premium: true, description: "Incluant zero-days et menaces émergentes" },
                  { name: "Badge de Confiance Premium", included: true, premium: true, description: "Certification reconnue mondialement" },
                  { name: "Support Prioritaire 24/7", included: true, premium: true, description: "Ligne directe avec nos experts" },
                  { name: "Analyse Prédictive IA", included: true, premium: true, description: "Anticipation des menaces futures" },
                  { name: "Consultation Personnalisée", included: true, premium: true, description: "1h avec un expert cybersécurité" },
                  { name: "Mises à jour Temps Réel", included: true, premium: true, description: "Alertes instantanées des nouvelles menaces" }
                ],
                badge: "POPULAIRE",
                gradient: "linear-gradient(135deg, var(--purple-main), #ff6b6b, var(--blue-main))",
                popular: true,
                savings: "300€",
                bestValue: true,
                icon: GiQuantumTunnel
              }
            ].map((offer, index) => (
              <div
                key={offer.id}
                className={`quantum-offer-card ${offer.popular ? 'popular' : ''} ${selectedPlan === offer.id ? 'selected' : ''}`}
                onClick={() => setSelectedPlan(offer.id)}
              >
                {offer.badge && (
                  <div className="offer-badge">
                    <span>{offer.badge}</span>
                    <div className="badge-glow"></div>
                    <div className="badge-particles"></div>
                  </div>
                )}

                {offer.bestValue && (
                  <div className="best-value-banner">
                    <FaStar /> Meilleur Rapport Qualité/Prix
                  </div>
                )}

                <div className="offer-header">
                  <div className="offer-icon-container">
                    <offer.icon className="offer-icon" />
                    <div className="icon-rings">
                      <div className="ring"></div>
                      <div className="ring"></div>
                    </div>
                  </div>
                  <h3 className="offer-name">{offer.name}</h3>
                  <p className="offer-subtitle">{offer.subtitle}</p>
                </div>

                <div className="offer-pricing">
                  <div className="price-display">
                    <span className="price-currency">{offer.currency.split(' ')[1]}</span>
                    <span className="price-main">{offer.price}</span>
                    <span className="price-currency">{offer.currency.split(' ')[0]}</span>
                  </div>
                  <div className="price-details">
                    <div className="price-original">
                      <span className="strike">Au lieu de {offer.originalPrice}€</span>
                      <span className="savings">Économisez {offer.savings}</span>
                    </div>
                    <div className="price-duration">
                      <IoMdFlash className="duration-icon" />
                      Livraison garantie en {offer.duration}
                    </div>
                  </div>
                </div>

                <div className="offer-features">
                  {offer.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className={`feature-item ${feature.included ? 'included' : 'excluded'} ${feature.premium ? 'premium' : ''}`}
                    >
                      <div className="feature-icon">
                        {feature.included ? <FaCheckCircle /> : <FaTimes />}
                      </div>
                      <div className="feature-content">
                        <span className="feature-text">{feature.name}</span>
                        {feature.description && feature.included && (
                          <span className="feature-description">{feature.description}</span>
                        )}
                      </div>
                      {feature.premium && feature.included && (
                        <div className="premium-badge">PRO</div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="offer-cta-section">
                  <button 
                    className={`quantum-offer-btn ${offer.popular ? 'popular' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/checkout?plan=${offer.id}`;
                    }}
                  >
                    <span>Sélectionner ce Plan</span>
                    <FaArrowRight className="btn-icon" />
                    <div className="btn-quantum-effect"></div>
                  </button>
                  
                  {offer.popular && (
                    <div className="offer-guarantee">
                      <FaLock className="guarantee-icon" />
                      <span>Satisfait ou Remboursé 30j</span>
                    </div>
                  )}
                </div>

                <div className="offer-quantum-effects">
                  <div className="offer-glow" style={{ background: offer.gradient }}></div>
                  <div className="offer-particles"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="offers-comparison">
            <button className="comparison-btn">
              <FaChartBar />
              Comparer les offres en détail
            </button>
          </div>

          <div className="offers-trust-indicators">
            <div className="trust-item">
              <FaLock className="trust-icon" />
              <span>Paiement 100% Sécurisé</span>
            </div>
            <div className="trust-item">
              <FaShieldAlt className="trust-icon" />
              <span>Garantie Satisfaction</span>
            </div>
            <div className="trust-item">
              <FaCertificate className="trust-icon" />
              <span>Certifié ISO 27001</span>
            </div>
          </div>
        </section>

        {/* ================= TÉMOIGNAGES CLIENTS ================= */}
        <section id="temoignages" className="quantum-section testimonials-section" ref={sectionsRefs.testi}>
          <div className="section-header">
            <div className="section-badge">
              <FaStar />
              <span>Témoignages</span>
            </div>
            <h2 className="quantum-section-title">
              <span>Retours</span>
              <span className="title-accent">Clients</span>
            </h2>
            <p className="section-subtitle">
              Découvrez pourquoi les leaders technologiques nous font confiance
            </p>
          </div>

          <div className="quantum-testimonials-container">
            <div className="testimonials-main">
              <div className="quantum-testimonials-grid">
                {[
                  {
                    id: 1,
                    text: "VELNOR a révolutionné notre approche cybersécurité. L'IA quantique a détecté des vulnérabilités que nos équipes n'avaient jamais vues. Le rapport est d'une précision chirurgicale.",
                    author: "Alexandre Chen",
                    position: "CTO",
                    company: "TechNova",
                    companyType: "Licorne SaaS 🦄",
                    rating: 5,
                    avatar: "🚀",
                    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    metrics: { vulnerabilities: "-87%", roi: "+340%", time: "24h" },
                    verified: true
                  },
                  {
                    id: 2,
                    text: "Incroyable ! En 24h, j'ai reçu un audit qui m'aurait coûté 10x plus cher ailleurs. La qualité du rapport PDF est digne d'un cabinet international. Recommandations ultra-précises.",
                    author: "Sarah Martinez",
                    position: "Lead Developer",
                    company: "Freelance",
                    companyType: "Développeuse Full-Stack",
                    rating: 5,
                    avatar: "💎",
                    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                    metrics: { cost: "-90%", quality: "AAA", speed: "24h" },
                    verified: true
                  },
                  {
                    id: 3,
                    text: "L'analyse prédictive de VELNOR nous a permis d'anticiper une cyberattaque majeure. Leur IA quantique a littéralement sauvé notre entreprise. Investissement le plus rentable de l'année.",
                    author: "Marcus Weber",
                    position: "CISO",
                    company: "SecureFlow",
                    companyType: "Fintech • 50M€ levés",
                    rating: 5,
                    avatar: "🛡️",
                    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                    metrics: { threats: "3 avoided", saved: "2.3M€", uptime: "100%" },
                    verified: true
                  },
                  {
                    id: 4,
                    text: "Le badge de confiance VELNOR a augmenté notre taux de conversion de 34%. Nos clients font davantage confiance à notre plateforme. ROI immédiat et mesurable.",
                    author: "Lisa Thompson",
                    position: "CMO",
                    company: "GrowthLabs",
                    companyType: "Agence Marketing Digital",
                    rating: 5,
                    avatar: "⭐",
                    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    metrics: { conversion: "+34%", trust: "+89%", revenue: "+125K€" },
                    verified: true
                  },
                  {
                    id: 5,
                    text: "Support exceptionnel ! L'équipe VELNOR nous a accompagnés tout au long du processus. Les recommandations sont claires, actionnables et ont transformé notre sécurité.",
                    author: "David Kim",
                    position: "DevOps Lead",
                    company: "CloudTech",
                    companyType: "Infrastructure Cloud",
                    rating: 5,
                    avatar: "☁️",
                    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                    metrics: { incidents: "-95%", compliance: "100%", efficiency: "+60%" },
                    verified: true
                  },
                  {
                    id: 6,
                    text: "VELNOR est devenu notre partenaire sécurité stratégique. Leurs audits réguliers nous maintiennent à la pointe. La technologie quantique fait vraiment la différence.",
                    author: "Emma Laurent",
                    position: "CEO",
                    company: "DataVault",
                    companyType: "Stockage Sécurisé",
                    rating: 5,
                    avatar: "🔐",
                    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                    metrics: { security: "A++", audits: "12/an", growth: "+200%" },
                    verified: true
                  }
                ].map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="quantum-testimonial-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="testimonial-background" style={{ background: testimonial.gradient }}></div>
                    
                    <div className="testimonial-header">
                      <div className="author-avatar">{testimonial.avatar}</div>
                      <div className="header-content">
                        <div className="rating-stars">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FaStar key={i} className="star" />
                          ))}
                        </div>
                        {testimonial.verified && (
                          <div className="verified-badge">
                            <FaCheckCircle />
                            <span>Vérifié</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="testimonial-content">
                      <div className="quote-mark">"</div>
                      <p className="testimonial-text">{testimonial.text}</p>
                    </div>

                    <div className="testimonial-metrics">
                      {Object.entries(testimonial.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <span className="metric-value">{value}</span>
                          <span className="metric-key">{key}</span>
                        </div>
                      ))}
                    </div>

                    <div className="testimonial-footer">
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.author}</h4>
                        <p className="author-position">{testimonial.position}</p>
                        <span className="author-company">
                          {testimonial.company} • <em>{testimonial.companyType}</em>
                        </span>
                      </div>
                    </div>

                    <div className="testimonial-quantum-effects">
                      <div className="testimonial-glow"></div>
                      <div className="testimonial-particles"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="testimonials-stats-summary">
              <h3 className="summary-title">Nos Clients en Chiffres</h3>
              <div className="stats-grid">
                <div className="summary-stat">
                  <div className="stat-icon-wrap">
                    <FaStar className="stat-icon" />
                  </div>
                  <span className="stat-number">4.9/5</span>
                  <span className="stat-label">Note Moyenne</span>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon-wrap">
                    <FaShieldAlt className="stat-icon" />
                  </div>
                  <span className="stat-number">2,847</span>
                  <span className="stat-label">Clients Protégés</span>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon-wrap">
                    <BsGraphUp className="stat-icon" />
                  </div>
                  <span className="stat-number">99.2%</span>
                  <span className="stat-label">Taux Satisfaction</span>
                </div>
                <div className="summary-stat">
                  <div className="stat-icon-wrap">
                    <FaAward className="stat-icon" />
                  </div>
                  <span className="stat-number">127</span>
                  <span className="stat-label">Awards Gagnés</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-cta">
            <p>Rejoignez des milliers d'entreprises qui font confiance à VELNOR</p>
            <button className="quantum-cta-btn secondary">
              <span>Voir Plus de Témoignages</span>
              <FaArrowRight />
            </button>
          </div>
        </section>

        {/* ================= PARTENAIRES ET CERTIFICATIONS ================= */}
        <section className="quantum-section partners-section" ref={sectionsRefs.partners}>
          <div className="section-header">
            <h3 className="partners-title">Ils Nous Font Confiance</h3>
          </div>
          
          <div className="partners-showcase">
            <div className="partners-marquee">
              <div className="marquee-content">
                {[...Array(2)].map((_, groupIndex) => (
                  <div key={groupIndex} className="marquee-group">
                    {[
                      { name: "TechCorp", logo: "🏢" },
                      { name: "SecureBank", logo: "🏦" },
                      { name: "DataFlow", logo: "📊" },
                      { name: "CloudNine", logo: "☁️" },
                      { name: "CyberShield", logo: "🛡️" },
                      { name: "QuantumLabs", logo: "⚛️" },
                      { name: "NeuralNet", logo: "🧠" },
                      { name: "BlockSecure", logo: "🔐" }
                    ].map((partner, index) => (
                      <div key={`${groupIndex}-${index}`} className="partner-item">
                        <span className="partner-logo">{partner.logo}</span>
                        <span className="partner-name">{partner.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="certifications-grid">
              {[
                { name: "ISO 27001", icon: FaCertificate, description: "Sécurité de l'information" },
                { name: "SOC 2", icon: FaShieldAlt, description: "Conformité et contrôles" },
                { name: "GDPR", icon: FaLock, description: "Protection des données" },
                { name: "PCI DSS", icon: BsShieldCheck, description: "Sécurité des paiements" }
              ].map((cert, index) => (
                <div key={index} className="certification-badge">
                  <cert.icon className="cert-icon" />
                  <h4>{cert.name}</h4>
                  <p>{cert.description}</p>
                  <div className="cert-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ QUANTIQUE ================= */}
        <section id="faq" className="quantum-section faq-section" ref={sectionsRefs.faq}>
          <div className="section-header">
            <div className="section-badge">
              <FaQuoteLeft />
              <span>FAQ</span>
            </div>
            <h2 className="quantum-section-title">
              <span>Questions</span>
              <span className="title-accent">Fréquentes</span>
            </h2>
            <p className="section-subtitle">
              Tout ce que vous devez savoir sur notre technologie révolutionnaire
            </p>
          </div>

          <div className="quantum-faq-container">
            <div className="faq-categories">
              {['Technologie', 'Offres', 'Sécurité', 'Support'].map((category, index) => (
                <button
                  key={index}
                  className={`category-btn ${index === 0 ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="faq-items">
              {[
                {
                  id: 1,
                  question: "Qu'est-ce qui rend votre IA 'quantique' ?",
                  answer: "Notre IA utilise des algorithmes inspirés de l'informatique quantique pour analyser simultanément des millions de patterns de sécurité. Cette approche révolutionnaire permet une précision de détection de 99.97% et une analyse prédictive des menaces futures. Nous combinons deep learning, réseaux de neurones et principes quantiques pour une protection sans précédent.",
                  icon: GiArtificialIntelligence,
                  category: "Technologie",
                  details: ["Algorithmes quantiques", "Analyse multi-dimensionnelle", "Prédiction temporelle"]
                },
                {
                  id: 2,
                  question: "Quelle est la différence entre les plans 24h et 48h ?",
                  answer: "Le plan 24h inclut notre analyse quantique avancée avec IA prédictive, un rapport holographique de 100+ pages, le badge de confiance premium, et un support prioritaire 24/7. Le plan 48h offre un excellent rapport qualité-prix avec toutes les fonctionnalités essentielles. Les deux incluent notre garantie satisfaction.",
                  icon: FaRocket,
                  category: "Offres",
                  comparison: {
                    "24h": ["IA Quantique Avancée", "Rapport 100+ pages", "Support 24/7", "Badge Premium"],
                    "48h": ["IA Standard", "Rapport 50+ pages", "Support Email", "Badge Standard"]
                  }
                },
                {
                  id: 3,
                  question: "Comment garantissez-vous la sécurité de nos données ?",
                  answer: "Sécurité zéro-trust avec chiffrement AES-256 de bout en bout. Vos données sont analysées dans des environnements isolés et automatiquement supprimées après livraison. Nous sommes certifiés ISO 27001, SOC 2, et GDPR compliant. Aucune donnée n'est stockée après l'audit.",
                  icon: FaLock,
                  category: "Sécurité",
                  certifications: ["ISO 27001", "SOC 2", "GDPR", "PCI DSS"]
                },
                {
                  id: 4,
                  question: "Vos audits sont-ils conformes aux standards internationaux ?",
                  answer: "Absolument. Nos audits respectent et dépassent les standards OWASP Top 10, ISO 27001, NIST Cybersecurity Framework, et CIS Controls. Notre IA est certifiée pour l'analyse de systèmes critiques et utilisée par des entreprises Fortune 500. Chaque rapport inclut une mapping de conformité détaillé.",
                  icon: FaCertificate,
                  category: "Sécurité",
                  standards: ["OWASP", "ISO 27001", "NIST", "CIS", "PCI DSS"]
                },
                {
                  id: 5,
                  question: "Que se passe-t-il si vous dépassez les délais ?",
                  answer: "Remboursement intégral automatique + audit gratuit. Notre IA maintient un taux de livraison de 99.8% dans les délais. En cas de retard exceptionnel, vous êtes remboursé ET recevez votre audit gratuitement. C'est notre garantie absolue.",
                  icon: BsLightning,
                  category: "Support",
                  guarantee: ["Remboursement 100%", "Audit offert", "Compensation +50%"]
                },
                {
                  id: 6,
                  question: "Comment fonctionne le badge de confiance VELNOR ?",
                  answer: "Le badge VELNOR est une certification dynamique qui affiche en temps réel le niveau de sécurité de votre site. Il inclut un QR code vérifiable, une note de sécurité A-F, et la date du dernier audit. Les visiteurs peuvent cliquer pour voir le rapport détaillé, augmentant ainsi la confiance et les conversions.",
                  icon: FaAward,
                  category: "Technologie",
                  features: ["Mise à jour temps réel", "QR code sécurisé", "Rapport accessible", "API intégrée"]
                }
              ].map((faq) => (
                <div
                  key={faq.id}
                  className={`quantum-faq-item ${expandedFAQ === faq.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                >
                  <div className="faq-question">
                    <div className="question-content">
                      <div className="question-icon">
                        <faq.icon />
                      </div>
                      <div className="question-text">
                        <span className="question-category">{faq.category}</span>
                        <h3>{faq.question}</h3>
                      </div>
                    </div>
                    <div className="question-toggle">
                      {expandedFAQ === faq.id ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>
                  
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                    
                    {faq.details && (
                      <ul className="answer-details">
                        {faq.details.map((detail, index) => (
                          <li key={index}>
                            <FaCheckCircle className="detail-icon" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {faq.comparison && (
                      <div className="comparison-table">
                        {Object.entries(faq.comparison).map(([plan, features]) => (
                          <div key={plan} className="comparison-column">
                            <h4>Plan {plan}</h4>
                            {features.map((feature, index) => (
                              <div key={index} className="comparison-feature">
                                <FaCheckCircle />
                                {feature}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {faq.certifications && (
                      <div className="certifications-list">
                        {faq.certifications.map((cert, index) => (
                          <span key={index} className="cert-badge">
                            <FaCertificate />
                            {cert}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="faq-glow-effect"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="faq-cta">
            <div className="faq-cta-content">
              <h3>Vous avez d'autres questions ?</h3>
              <p>Notre équipe d'experts est disponible 24/7 pour vous accompagner</p>
              <div className="cta-buttons">
                <button className="quantum-support-btn">
                  <BiPulse className="btn-icon" />
                  <span>Chat en Direct</span>
                </button>
                <button className="quantum-demo-btn">
                  <GiHologram className="btn-icon" />
                  <span>Demander une Démo</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="quantum-final-cta">
          <div className="final-cta-bg">
            <div className="cta-particles"></div>
            <div className="cta-waves"></div>
          </div>
          
          <div className="final-cta-content">
            <h2 className="cta-title">
              Prêt à Révolutionner Votre Cybersécurité ?
            </h2>
            <p className="cta-subtitle">
              Rejoignez des milliers d'entreprises qui font confiance à VELNOR
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <FaRocket />
                <span>Démarrage Immédiat</span>
              </div>
              <div className="cta-feature">
                <FaShieldAlt />
                <span>Protection Garantie</span>
              </div>
              <div className="cta-feature">
                <FaLock />
                <span>Satisfait ou Remboursé</span>
              </div>
            </div>
            
            <button className="quantum-mega-cta" onClick={handleCTAClick}>
              <div className="mega-cta-bg"></div>
              <GiQuantumTunnel className="mega-icon" />
              <span>Commencer Mon Audit Quantique</span>
              <div className="mega-cta-particles"></div>
            </button>
            
            <p className="cta-guarantee">
              <FaCheckCircle /> Aucune carte de crédit requise • 
              <FaCheckCircle /> Résultats en 24h • 
              <FaCheckCircle /> Support expert inclus
            </p>
          </div>
        </section>
      </main>

      {/* ================= FOOTER QUANTIQUE ================= */}
      <footer className="quantum-footer" ref={sectionsRefs.footer}>
        <div className="footer-quantum-bg">
          <div className="footer-wave wave-1"></div>
          <div className="footer-wave wave-2"></div>
          <div className="footer-particles"></div>
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
                <div className="footer-stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Protection Active</span>
                </div>
              </div>
              
              <div className="footer-certifications">
                <div className="cert-badge">
                  <FaCertificate />
                  ISO 27001
                </div>
                <div className="cert-badge">
                  <FaShieldAlt />
                  SOC 2
                </div>
                <div className="cert-badge">
                  <FaLock />
                  GDPR
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4>Produit</h4>
                <a href="#fonctionnement">
                  <FaCode /> Fonctionnement
                </a>
                <a href="#technologie">
                  <GiProcessor /> Technologie
                </a>
                <a href="#offres">
                  <FaRocket /> Plans & Tarifs
                </a>
                <a href="/demo">
                  <GiHologram /> Démo Interactive
                </a>
                <a href="/api">
                  <FaDatabase /> API Développeurs
                </a>
              </div>
              
              <div className="footer-column">
                <h4>Entreprise</h4>
                <a href="/about">À Propos</a>
                <a href="/careers">Carrières <span className="badge-new">On recrute!</span></a>
                <a href="/partners">Partenaires</a>
                <a href="/press">Presse</a>
                <a href="/blog">Blog Tech</a>
              </div>
              
              <div className="footer-column">
                <h4>Support</h4>
                <a href="/help">
                  <BiPulse /> Centre d'Aide
                </a>
                <a href="/contact">Contact</a>
                <a href="/status">
                  <span className="status-indicator"></span> Statut Système
                </a>
                <a href="/changelog">Changelog</a>
                <a href="/community">Communauté</a>
              </div>
              
              <div className="footer-column">
                <h4>Légal</h4>
                <a href="/privacy">Confidentialité</a>
                <a href="/terms">Conditions</a>
                <a href="/security">Sécurité</a>
                <a href="/compliance">Conformité</a>
                <a href="/cookies">Cookies</a>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <h3>Restez à la Pointe de la Cybersécurité</h3>
            <p>Recevez nos analyses et conseils d'experts chaque semaine</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                <span>S'inscrire</span>
                <FaArrowRight />
              </button>
            </form>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © 2025 VELNOR. Tous droits réservés. 
                Propulsé par l'IA Quantique • 
                Fabriqué avec <span className="heart">❤️</span> à Paris
              </p>
            </div>
            
            <div className="footer-social">
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">𝕏</span>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">in</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">⚡</span>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <span className="social-icon">▶</span>
                </a>
              </div>
            </div>
            
            <div className="footer-badges">
              <img src="/badge-security.svg" alt="Security First" />
              <img src="/badge-ai.svg" alt="AI Powered" />
              <img src="/badge-trusted.svg" alt="Trusted by 1000+" />
            </div>
          </div>
        </div>
      </footer>

      {/* ================= ÉLÉMENTS UI SUPPLÉMENTAIRES ================= */}
      <div className="quantum-ui-elements">
        {/* Bouton retour en haut */}
        <button 
          className={`scroll-to-top ${scrollProgress > 20 ? 'visible' : ''}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowRight />
        </button>
        
        {/* Indicateur de section active */}
        <div className="section-indicator">
          <div className="indicator-track">
            {['hero', 'fonctionnement', 'technologie', 'offres', 'temoignages', 'faq'].map((section) => (
              <div 
                key={section}
                className={`indicator-dot ${activeSection === section ? 'active' : ''}`}
                onClick={() => {
                  const element = document.getElementById(section);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};