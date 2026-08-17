import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Compass, Scissors, Film, Image as ImageIcon, Volume2, VolumeX, Flame } from 'lucide-react';
import { ASSETS } from '../lib/constants';
import { playEngineRevSound } from './AudioEngine';

interface HeroProps {
  onFollowRoad: () => void;
  onMeetBarber: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onFollowRoad, onMeetBarber }) => {
  const [heroMode, setHeroMode] = useState<'video' | 'photo'>('video');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [isEngineRevving, setIsEngineRevving] = useState(false);

  const nameText = "PIOTR MIĄSIK";

  const handleIgnitionRev = () => {
    setIsEngineRevving(true);
    playEngineRevSound();
    setTimeout(() => setIsEngineRevving(false), 2000);
  };

  // Stagger variants for sequential letter animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 90, opacity: 0, filter: 'blur(8px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.7 },
    },
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080808] select-none">
      {/* Background Hero Stage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroMode === 'video' ? (
          <div className="w-full h-full relative">
            <video
              autoPlay
              loop
              muted={isVideoMuted}
              playsInline
              src={ASSETS.heroVideo}
              className="w-full h-full object-cover filter contrast-125 brightness-75 grayscale-[15%] scale-105 animate-[zoomSlow_25s_ease-in-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-[#080808]/80" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#ef4444]/15 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-95" />
          </div>
        ) : (
          <motion.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="w-full h-full relative"
          >
            <img
              src={ASSETS.heroImage}
              alt="Piotr Miąsik przy Hondzie Shadow 1100 CCM 1987"
              className="w-full h-full object-cover object-center filter grayscale-[15%] contrast-125 brightness-80 animate-[zoomSlow_25s_ease-in-out_infinite_alternate]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-[#080808]/80" />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#ef4444]/15 via-amber-500/5 to-transparent blur-3xl pointer-events-none" />
          </motion.div>
        )}
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 w-full text-center sm:text-left flex flex-col justify-between min-h-screen">
        {/* Top Header Tag & Controls */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-neutral-850 pb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 font-tech text-xs text-neutral-400 tracking-widest"
          >
            <span className="inline-block w-2 h-2 bg-[#ef4444] animate-ping" />
            <span className="text-[#f2efe9]">DIGITAL PORTRAIT // ROAD MOVIE EXPERIENCE</span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-400">HONDA SHADOW 1100 CCM (1987)</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-neutral-800 p-1 font-tech text-[10px] tracking-widest"
          >
            <button
              onClick={() => setHeroMode('video')}
              data-cursor="PLAY VIDEO"
              className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors ${
                heroMode === 'video' ? 'bg-[#9e1b1b] text-white shadow-[0_0_12px_rgba(239,68,68,0.4)]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Film className="w-3 h-3" /> CINEMATIC REEL
            </button>

            <button
              onClick={() => setHeroMode('photo')}
              data-cursor="VIEW PORTRAIT"
              className={`px-3 py-1.5 flex items-center gap-1.5 transition-colors ${
                heroMode === 'photo' ? 'bg-[#9e1b1b] text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" /> PORTRAIT
            </button>

            <button
              onClick={handleIgnitionRev}
              data-cursor="REV ENGINE"
              className={`px-3 py-1.5 flex items-center gap-1.5 border border-[#ef4444]/60 transition-all ${
                isEngineRevving ? 'bg-[#ef4444] text-white scale-105 shadow-[0_0_20px_rgba(239,68,68,0.8)]' : 'bg-black/60 text-neutral-300 hover:text-white hover:border-[#ef4444]'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 text-[#ef4444] ${isEngineRevving ? 'animate-bounce text-white' : ''}`} />
              <span>{isEngineRevving ? 'REV 1100 CCM!' : 'IGNITION'}</span>
            </button>

            {heroMode === 'video' && (
              <button
                onClick={() => setIsVideoMuted(!isVideoMuted)}
                title={isVideoMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
                className="px-2 py-1.5 text-neutral-400 hover:text-white border-l border-neutral-800 transition-colors"
              >
                {isVideoMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3 text-[#ef4444]" />}
              </button>
            )}
          </motion.div>
        </div>

        {/* Central Display Typography */}
        <div className="my-auto py-8 flex flex-col justify-center">
          {/* Main Headline: PIOTR MIĄSIK */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] tracking-tighter uppercase leading-[0.85] text-[#f2efe9] flex flex-wrap justify-center sm:justify-start"
          >
            {nameText.split('').map((char, index) => (
              <motion.span key={index} variants={letterVariants} className={char === ' ' ? 'mr-6' : ''}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle: BARBER, VOCALIST, RIDER */}
          <div className="overflow-hidden my-6">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-base sm:text-2xl md:text-3xl font-tech tracking-widest text-[#f2efe9] uppercase"
            >
              <span className="text-[#ef4444] font-bold drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">BARBER</span>
              <span className="text-neutral-600">,</span>
              <span className="text-neutral-200">VOCALIST</span>
              <span className="text-neutral-600">,</span>
              <span className="text-neutral-300">RIDER</span>
            </motion.div>
          </div>

          {/* Small Helper Tag: ROAD / MUSIC / CRAFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-tech text-xs sm:text-sm tracking-[0.25em] text-[#a3a099] uppercase mb-10 flex items-center justify-center sm:justify-start gap-3"
          >
            <span className="w-6 h-[1px] bg-[#ef4444]" />
            <span>ROAD / MUSIC / CRAFT</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center sm:justify-start"
          >
            <button
              onClick={onFollowRoad}
              data-cursor="DIARY"
              className="w-full sm:w-auto px-8 py-4 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_25px_rgba(158,27,27,0.5)]"
            >
              <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
              <span>FOLLOW THE ROAD</span>
            </button>

            <button
              onClick={onMeetBarber}
              data-cursor="BARBER"
              className="w-full sm:w-auto px-8 py-4 bg-black/60 backdrop-blur-md border border-neutral-700 hover:border-[#f2efe9] hover:bg-neutral-900 text-[#f2efe9] font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              <Scissors className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span>MEET THE BARBER</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Hero Bar / Scroll Indicator: SCROLL TO RIDE ↓ */}
        <div className="pb-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-850 pt-6">
          <div className="flex items-center gap-6 font-tech text-[11px] text-[#a3a099] tracking-wider">
            <span className="flex items-center gap-2">
              <Flame className="w-3.5 h-3.5 text-[#ef4444] animate-pulse" />
              HONDA SHADOW 1100 CCM / 1987 CUSTOM
            </span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="hidden sm:inline">OFFICIAL DOCUMENTARY FOOTAGE</span>
          </div>

          <a
            href="#intro"
            data-cursor="SCROLL"
            className="flex items-center gap-2 font-tech text-xs text-[#a3a099] hover:text-white transition-colors group"
          >
            <span className="tracking-widest uppercase">SCROLL TO RIDE</span>
            <ArrowDown className="w-4 h-4 text-[#ef4444] group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
