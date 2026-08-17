import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2, Film } from 'lucide-react';

interface CinematicIntroOverlayProps {
  onStartExperience: () => void;
}

export const CinematicIntroOverlay: React.FC<CinematicIntroOverlayProps> = ({ onStartExperience }) => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStart = () => {
    setHasStarted(true);
    onStartExperience();
  };

  return (
    <AnimatePresence>
      {!hasStarted && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050507] flex flex-col items-center justify-between p-8 sm:p-12 text-center text-[#f3f2ee] select-none"
        >
          {/* Top Tagline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 font-tech text-xs tracking-widest text-[#ef4444]"
          >
            <Film className="w-4 h-4 text-[#ef4444]" />
            <span>INTERACTIVE ROAD MOVIE // DOCUMENTARY DIGITAL EXPERIENCE</span>
          </motion.div>

          {/* Main Display: PIOTR MIĄSIK BARBER ROAD TRIP PRESS PLAY */}
          <div className="my-auto max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-4"
            >
              <span className="font-tech text-xs text-neutral-500 tracking-widest block uppercase">
                HONDA SHADOW 1100 CCM // 1987 CUSTOM BUILD
              </span>
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-9xl tracking-tight uppercase text-white leading-none">
                PIOTR MIĄSIK
              </h1>
              <span className="font-display text-2xl sm:text-4xl text-[#ef4444] tracking-wider block uppercase">
                BARBER ROAD TRIP
              </span>
            </motion.div>

            {/* Press Play Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="pt-4 flex flex-col items-center gap-4"
            >
              <button
                onClick={handleStart}
                data-cursor="PRESS PLAY"
                className="group relative px-10 py-5 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-sm tracking-widest uppercase transition-all duration-300 flex items-center gap-4 shadow-[0_0_35px_rgba(239,68,68,0.5)] hover:scale-105"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <span>PRESS PLAY</span>
              </button>

              <div className="flex items-center gap-2 font-tech text-xs text-neutral-500 tracking-wider">
                <Volume2 className="w-3.5 h-3.5 text-[#ef4444] animate-pulse" />
                <span>AUDIO WILL FADE IN SMOOTHLY // TURN THE PAGE ROAD SOUNDTRACK</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Colophon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-6 font-tech text-[10px] text-neutral-600 tracking-widest uppercase"
          >
            <span>BARBER CULTURE</span>
            <span>•</span>
            <span>MOTORCYCLE CULTURE</span>
            <span>•</span>
            <span>ROCK MUSIC</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
