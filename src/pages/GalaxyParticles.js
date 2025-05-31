// src/pages/GalaxyParticles.js
import React, { useRef, useEffect } from 'react';

const GalaxyParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationId;

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe pour une étoile
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.2; 
        this.alpha = Math.random() * 0.5 + 0.3; // densité
        this.speed = Math.random() * 0.03 + 0.01; // réduit pour plus de subtilité
      }
      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
      }
      update() {
        this.y -= this.speed;
        if (this.y < 0) {
          this.x = Math.random() * canvas.width;
          this.y = canvas.height;
          this.radius = Math.random() * 1.2;
          this.alpha = Math.random() * 0.5 + 0.3;
          this.speed = Math.random() * 0.03 + 0.01;
        }
      }
    }

    // Initialise les étoiles
    const initStars = () => {
      stars = [];
      const num = Math.floor((canvas.width * canvas.height) / 10000);
      for (let i = 0; i < num; i++) {
        stars.push(new Star());
      }
    };
    initStars();

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.update();
        star.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default GalaxyParticles;
