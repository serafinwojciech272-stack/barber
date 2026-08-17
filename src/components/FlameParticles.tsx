import React, { useEffect, useRef } from 'react';

export const FlameParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle system for floating embers/flame sparks
    interface Ember {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      color: string;
    }

    const embers: Ember[] = [];
    const maxEmbers = 45;

    const createEmber = (): Ember => {
      const colors = [
        'rgba(239, 68, 68, ',   // Crimson Red
        'rgba(249, 115, 22, ',  // Flame Orange
        'rgba(245, 158, 11, ',  // Golden Amber
        'rgba(185, 28, 28, ',   // Deep Red
      ];
      return {
        x: Math.random() * width,
        y: height + Math.random() * 20,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: -(Math.random() * 1.5 + 0.5),
        opacity: Math.random() * 0.8 + 0.2,
        fadeSpeed: Math.random() * 0.005 + 0.002,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    for (let i = 0; i < maxEmbers; i++) {
      const ember = createEmber();
      ember.y = Math.random() * height;
      embers.push(ember);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.x += e.speedX;
        e.y += e.speedY;
        e.opacity -= e.fadeSpeed;

        if (e.opacity <= 0 || e.y < -10) {
          embers[i] = createEmber();
        }

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fillStyle = `${e.color}${e.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#ef4444';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[85] opacity-60 mix-blend-screen"
      aria-hidden="true"
    />
  );
};
