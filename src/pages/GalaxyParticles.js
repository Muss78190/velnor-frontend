// src/pages/GalaxyParticles.js
import React, { useRef, useEffect } from 'react';

const GalaxyParticles = () => {
  const canvasRef = useRef(null);
  let ctx;
  let stars = [];
  let width, height;
  let animationId;

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.05; // très lente
      this.vy = (Math.random() - 0.5) * 0.05;
      this.radius = Math.random() * 1.2 + 0.3;
      this.alpha = Math.random() * 0.4 + 0.3;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
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
  }

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    initStars();
    animate();
  };

  const resize = () => {
    const canvas = canvasRef.current;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const initStars = () => {
    stars = [];
    // Ajustez ce facteur pour plus ou moins d’étoiles
    const numStars = Math.floor((width * height) / 15000);
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }
  };

  const connectStars = () => {
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          // plus la distance est élevée, plus la ligne est transparente
          ctx.strokeStyle = `rgba(42, 199, 255, ${0.15 - dist / 800})`;
          ctx.lineWidth = 0.3;
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };

  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      star.update();
      star.draw();
    });

    connectStars();
    animationId = requestAnimationFrame(animate);
  };

  useEffect(() => {
    initCanvas();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
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
