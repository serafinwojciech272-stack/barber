import React, { useEffect, useState } from 'react';

export const CinematicEffectsOverlay: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Dynamic Anamorphic Light Leak Sweep reacting to Mouse Position */}
      <div
        className="fixed inset-0 pointer-events-none z-[88] opacity-30 mix-blend-screen transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(239, 68, 68, 0.15) 0%, rgba(245, 158, 11, 0.05) 30%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* 2. Top-Right Lens Flare Streak */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#ef4444]/20 via-amber-500/5 to-transparent blur-3xl pointer-events-none z-[87] animate-[pulse_6s_ease-in-out_infinite]" aria-hidden="true" />
    </>
  );
};
