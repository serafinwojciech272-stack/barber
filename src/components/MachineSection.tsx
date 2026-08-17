import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Info, Wrench, Shield, Compass, Volume2 } from 'lucide-react';
import { SITE_DATA, Hotspot } from '../lib/contentData';
import { playEngineRevSound } from './AudioEngine';

export const MachineSection: React.FC = () => {
  const { sectionTag, headline, modelTitle, subtitle, mainImage, hotspots } = SITE_DATA.machine;
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);

  const handleHotspotClick = (hs: Hotspot) => {
    setSelectedHotspot(hs);
    playEngineRevSound();
  };

  return (
    <section id="machine" className="relative py-32 bg-[#0c0c0e] border-t border-neutral-900 overflow-hidden select-none">
      {/* Background Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#ef4444] tracking-widest uppercase mb-3">
              <span>{sectionTag}</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-[#f3f2ee] uppercase leading-none">
              {headline}
            </h2>
          </div>

          <div className="font-tech text-xs tracking-widest text-neutral-400 text-right space-y-1">
            <div className="text-white font-semibold">{modelTitle}</div>
            <div className="text-neutral-500">{subtitle}</div>
            <div className="text-[#ef4444]">CLICK HOTSPOTS TO INSPECT V-TWIN</div>
          </div>
        </div>

        {/* Machine Main Interactive Stage */}
        <div className="relative border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl">
          {/* Main Visual Image */}
          <div className="relative w-full h-[500px] sm:h-[650px] overflow-hidden">
            <img
              src={mainImage}
              alt="Honda Shadow 1987 silnik V-Twin motocykl Piotra Miąsika"
              className="w-full h-full object-cover object-center filter contrast-125 brightness-90 animate-[zoomSlow_25s_ease-in-out_infinite_alternate]"
            />

            {/* Dark Vignette and Technical Overlay Lines */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-[#0c0c0e]/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e]/80 via-transparent to-[#0c0c0e]/80" />

            {/* Title Overlay Banner */}
            <div className="absolute top-6 left-6 right-6 flex flex-wrap items-center justify-between pointer-events-none">
              <div className="bg-black/80 backdrop-blur-md border border-neutral-800 px-4 py-2 text-left">
                <span className="font-tech text-[10px] text-[#ef4444] tracking-widest block">SPECIFICATION // 1987 CUSTOM</span>
                <span className="font-display text-xl sm:text-2xl text-white tracking-wide">{modelTitle}</span>
              </div>

              <div className="hidden sm:flex items-center gap-3 bg-black/80 backdrop-blur-md border border-neutral-800 px-4 py-2 font-tech text-xs text-neutral-400">
                <Flame className="w-4 h-4 text-[#ef4444] animate-bounce" />
                <span>CHŁODZENIE CIECZĄ // WAŁ KARDANA</span>
              </div>
            </div>

            {/* Technical Hotspot Pins */}
            {hotspots.map((hs) => (
              <div
                key={hs.id}
                style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <button
                  onClick={() => handleHotspotClick(hs)}
                  data-cursor={`INSPECT ${hs.number}`}
                  className={`group relative flex items-center justify-center w-9 h-9 rounded-full transition-transform duration-300 ${
                    selectedHotspot?.id === hs.id
                      ? 'bg-[#ef4444] text-white scale-125 shadow-[0_0_25px_rgba(239,68,68,0.8)]'
                      : 'bg-black/80 border border-[#ef4444] text-[#f3f2ee] hover:scale-110 shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  }`}
                  aria-label={`Inspect ${hs.name}`}
                >
                  <span className="absolute inset-0 rounded-full border border-[#ef4444] animate-ping opacity-75" />
                  <span className="font-tech text-xs font-bold">{hs.number}</span>

                  {/* Hover Label */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-11 whitespace-nowrap font-tech text-[10px] bg-black/90 text-white px-2.5 py-1 border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                    {hs.name}
                  </span>
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Technical Bar */}
          <div className="p-6 bg-neutral-900/90 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-4 font-tech text-xs text-neutral-400">
            <div>
              <span className="text-neutral-600 block text-[10px]">MODEL YEAR</span>
              <span className="text-white font-semibold">1987 (CUSTOM BUILD)</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-[10px]">ENGINE TYPE</span>
              <span className="text-white font-semibold">1100 CCM V-TWIN</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-[10px]">FINAL DRIVE</span>
              <span className="text-white font-semibold">SHAFT DRIVE (KARDAN)</span>
            </div>
            <div>
              <span className="text-neutral-600 block text-[10px]">TERRAIN RECORD</span>
              <span className="text-[#ef4444] font-semibold">POLSKIE SZOSY & BEZDROŻA</span>
            </div>
          </div>
        </div>

        {/* Hotspot Inspector Modal / Drawer */}
        <AnimatePresence>
          {selectedHotspot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-6 border border-[#ef4444] bg-neutral-900 p-6 sm:p-8 relative shadow-2xl"
            >
              <div className="flex items-start justify-between border-b border-neutral-800 pb-4 mb-4">
                <div>
                  <span className="font-tech text-xs text-[#ef4444] tracking-widest block uppercase">
                    INSPECTOR DETAIL // {selectedHotspot.number}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase">
                    {selectedHotspot.name}
                  </h3>
                  <span className="font-tech text-xs text-neutral-400">{selectedHotspot.subtitle}</span>
                </div>

                <button
                  onClick={() => setSelectedHotspot(null)}
                  className="px-3 py-1 bg-neutral-800 hover:bg-[#ef4444] text-neutral-300 hover:text-white font-tech text-xs tracking-widest transition-colors"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-neutral-300">
                <div className="lg:col-span-2 space-y-3 font-sans">
                  <p className="leading-relaxed">{selectedHotspot.desc}</p>
                </div>

                <div className="bg-black/60 border border-neutral-800 p-4 font-tech text-xs text-neutral-400 space-y-2">
                  <span className="text-[#ef4444] block font-bold">TECHNICAL NOTE:</span>
                  <p className="text-white">{selectedHotspot.techSpec}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
