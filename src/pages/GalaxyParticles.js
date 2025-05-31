// src/pages/GalaxyParticles.js
import React, { useRef, useEffect } from 'react';

const GalaxyParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let starsArray = [];
    let animationFrameId;

    // Ajuste la taille du canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Création d’étoiles aléatoires
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.1;
        this.alpha = Math.random() * 0.6 + 0.2; // luminosité
        this.speed = Math.random() * 0.02 + 0.01;
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
          this.alpha = Math.random() * 0.6 + 0.2;
          this.speed = Math.random() * 0.02 + 0.01;
        }
      }
    }

    // Générer un certain nombre d’étoiles
    const initStars = () => {
      starsArray = [];
      const numberOfStars = Math.floor((canvas.width * canvas.height) / 8000); 
      for (let i = 0; i < numberOfStars; i++) {
        starsArray.push(new Star());
      }
    };
    initStars();

    // Boucle d’animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      starsArray.forEach((star) => {
        star.update();
        star.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
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
      }}
    />
  );
};

export default GalaxyParticles;
