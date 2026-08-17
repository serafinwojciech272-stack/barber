import React from 'react';

export const FilmGrain: React.FC = () => {
  return (
    <>
      {/* CSS Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />
      
      {/* Scanlines Overlay for retro technical vibe */}
      <div className="fixed inset-0 scanlines pointer-events-none z-[90] opacity-15" aria-hidden="true" />
      
      {/* Vignette */}
      <div className="fixed inset-0 vignette-overlay pointer-events-none z-[80]" aria-hidden="true" />
    </>
  );
};
