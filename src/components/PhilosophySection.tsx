import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Disc, Clock, Flame, Play, Pause, Volume2, Sparkles, ShieldAlert } from 'lucide-react';
import { SITE_DATA } from '../lib/contentData';
import { playGuitarRiffSound } from './AudioEngine';

export const PhilosophySection: React.FC = () => {
  const { sectionTag, headline, subheadline, quote, essay, mementos } = SITE_DATA.philosophy;
  const soundtrack = SITE_DATA.soundtrack;

  const [isPlayingTrack, setIsPlayingTrack] = useState(false);

  const toggleSoundtrack = () => {
    setIsPlayingTrack(!isPlayingTrack);
    playGuitarRiffSound();
  };

  return (
    <section id="philosophy" className="relative py-32 bg-[#09090b] text-[#f3f2ee] border-t border-neutral-900 overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9e1b1b]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#ef4444] tracking-widest uppercase mb-3">
              <Sparkles className="w-4 h-4 text-[#ef4444]" />
              <span>{sectionTag}</span>
            </div>
            <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#f3f2ee] uppercase leading-none">
              {headline}
            </h2>
          </div>

          <div className="font-tech text-xs tracking-widest text-neutral-400 text-right space-y-1">
            <div className="text-white font-semibold">LIFE IS FRAGILE // CATCH THE MOMENTS</div>
            <div className="text-neutral-500">MEMENTO VIVERE</div>
            <div className="text-[#ef4444]">BARBER // VOICE // ROAD</div>
          </div>
        </div>

        {/* Philosophy Main Editorial 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Quote & Main Essay */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 border-l-4 border-[#ef4444] bg-neutral-950/80 border-t border-r border-b border-neutral-850 shadow-2xl relative">
              <span className="font-tech text-[10px] text-[#ef4444] uppercase tracking-widest block mb-2">
                CORE EXISTENTIAL STATEMENT
              </span>
              <p className="font-display text-2xl sm:text-3xl text-white uppercase leading-snug">
                {quote}
              </p>
            </div>

            <div className="space-y-6 text-neutral-300 font-sans text-base sm:text-lg font-light leading-relaxed">
              {essay.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Featured Metallica Road Soundtrack Module with Audio Provision Note */}
          <div className="lg:col-span-5 bg-black/90 border border-neutral-800 p-8 space-y-6 shadow-2xl relative group">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase flex items-center gap-2">
                <Disc className="w-4 h-4 animate-spin text-[#ef4444]" /> {soundtrack.sectionTag}
              </span>
              <span className="font-tech text-[10px] text-neutral-500">GARAGE INC.</span>
            </div>

            <div>
              <h3 className="font-display text-3xl text-white uppercase">{soundtrack.songTitle}</h3>
              <span className="font-tech text-xs text-neutral-400 block mt-1">{soundtrack.artist}</span>
            </div>

            <p className="text-neutral-400 font-sans text-xs sm:text-sm italic leading-relaxed border-l-2 border-neutral-700 pl-3">
              {soundtrack.lyricQuote}
            </p>

            <p className="text-neutral-400 font-sans text-xs leading-relaxed">
              {soundtrack.description}
            </p>

            {/* Interactive Audio Trigger */}
            <button
              onClick={toggleSoundtrack}
              data-cursor="PLAY TURN THE PAGE"
              className="w-full py-4 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(158,27,27,0.4)]"
            >
              {isPlayingTrack ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlayingTrack ? 'PAUSE SOUNDTRACK' : 'PLAY TURN THE PAGE SOUNDSCAPE'}</span>
            </button>

            {/* Legal Audio Provision Notice */}
            <div className="pt-2 border-t border-neutral-850 font-tech text-[9px] text-neutral-500 leading-tight flex items-start gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-neutral-600 shrink-0 mt-0.5" />
              <span>
                AUDIO COMPLIANCE PROVISION: Background audio references (including Metallica's "Turn The Page" homage) are generated and synthesized procedurally for demonstration purposes. All artist trademarks belong to their respective copyright owners.
              </span>
            </div>
          </div>
        </div>

        {/* Three Memento Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mementos.map((m, idx) => (
            <div
              key={idx}
              className="p-8 border border-neutral-850 bg-neutral-950/80 hover:border-[#ef4444] transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#ef4444]/30 pointer-events-none group-hover:border-[#ef4444] transition-colors" />

              <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase block mb-2">
                {m.tag}
              </span>

              <h4 className="font-display text-2xl text-white uppercase mb-3 group-hover:text-[#ef4444] transition-colors">
                {m.title}
              </h4>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
