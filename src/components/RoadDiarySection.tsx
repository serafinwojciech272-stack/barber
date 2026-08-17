import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Compass, MapPin, Calendar, Gauge, Flame } from 'lucide-react';
import { SITE_DATA, RouteEntry } from '../lib/contentData';

export const RoadDiarySection: React.FC = () => {
  const { sectionTag, headline, routes } = SITE_DATA.diary;
  const [selectedRoute, setSelectedRoute] = useState<RouteEntry>(routes[0]);

  // Animated Route Path Cities
  const cities = [
    { name: 'BIESZCZADY // LESKO', x: 20, y: 80, stage: '01' },
    { name: 'KRAKÓW // MAŁOPOLSKA', x: 38, y: 65, stage: '02' },
    { name: 'KATOWICE // ŚLĄSK', x: 42, y: 55, stage: '04' },
    { name: 'WARSZAWA // CENTRAL', x: 55, y: 40, stage: '03' },
    { name: 'GDAŃSK // POMORZE', x: 62, y: 22, stage: '03' },
    { name: 'HEL // BALTIC COAST', x: 68, y: 12, stage: '03' },
  ];

  return (
    <section id="diary" className="relative py-32 bg-[#0c0c0e] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
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
            <div className="text-white font-semibold">DZIENNIK TRASY POLSKA</div>
            <div className="text-neutral-500">HONDA SHADOW 1100 CCM (1987)</div>
            <div className="text-[#ef4444]">ANIMATED ROAD MAP // SELECT STAGE</div>
          </div>
        </div>

        {/* Animated Polish Route Map Header Vector */}
        <div className="mb-12 border border-neutral-850 bg-black/80 p-6 relative overflow-hidden hidden md:block">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4 font-tech text-xs text-neutral-400">
            <span className="flex items-center gap-2 text-[#ef4444]">
              <Compass className="w-4 h-4 animate-spin" /> POLISH HIGHWAY ROUTE VECTOR
            </span>
            <span>1100 CCM V-TWIN CONTINUOUS TRANSIT</span>
          </div>

          <div className="relative h-32 w-full flex items-center justify-between px-8">
            {/* SVG Connecting Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path
                d="M 50 64 Q 250 20, 500 64 T 950 64"
                fill="none"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-[dash_20s_linear_infinite]"
              />
            </svg>

            {cities.map((city, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center group cursor-pointer">
                <div className="w-4 h-4 rounded-full bg-[#0c0c0e] border-2 border-[#ef4444] group-hover:scale-125 transition-transform flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#ef4444] rounded-full animate-ping" />
                </div>
                <span className="font-display text-xs text-white uppercase mt-2 group-hover:text-[#ef4444] transition-colors whitespace-nowrap">
                  {city.name.split(' // ')[0]}
                </span>
                <span className="font-tech text-[9px] text-neutral-500">{city.name.split(' // ')[1]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Route Stage Interactive Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Route List Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase block mb-2">
              SELECT POLISH ROAD ROUTE
            </span>

            {routes.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRoute(r)}
                data-cursor={`ROUTE ${r.id}`}
                className={`w-full p-5 text-left border transition-all duration-300 relative group overflow-hidden ${
                  selectedRoute.id === r.id
                    ? 'border-[#ef4444] bg-neutral-900 text-white shadow-[0_0_20px_rgba(239,68,68,0.2)]'
                    : 'border-neutral-850 bg-neutral-950/60 text-neutral-400 hover:border-neutral-700 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between font-tech text-xs text-neutral-500 mb-1">
                  <span>STAGE {r.id}</span>
                  <span className="text-[#ef4444] font-semibold">{r.distance}</span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-white group-hover:text-[#ef4444] transition-colors">
                  {r.name}
                </h3>
                <span className="font-tech text-[10px] text-neutral-500 uppercase block mt-1">
                  {r.region}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Route Stage View */}
          <div className="lg:col-span-8 border border-neutral-800 bg-neutral-900 overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Stage Photo Visual */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden">
              <img
                src={selectedRoute.image}
                alt={selectedRoute.name}
                className="w-full h-full object-cover filter contrast-125 brightness-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-4 py-2 border border-neutral-700 font-tech text-xs text-white">
                <span className="text-[#ef4444] mr-2">//</span>
                {selectedRoute.dateLog}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-3xl sm:text-5xl text-white uppercase tracking-wide bg-black/70 px-4 py-1 border border-neutral-800">
                  {selectedRoute.name}
                </h3>
              </div>
            </div>

            {/* Journal Content & Stats */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 font-tech text-xs border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-neutral-500 block text-[10px]">DYSTANS TRASY</span>
                  <span className="text-white font-semibold text-sm">{selectedRoute.distance}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block text-[10px]">WARUNKI NA DRODZE</span>
                  <span className="text-white font-semibold text-xs">{selectedRoute.asphaltCondition}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-neutral-500 block text-[10px]">MASZYNA</span>
                  <span className="text-[#ef4444] font-semibold text-xs">HONDA SHADOW 1100 CCM (1987)</span>
                </div>
              </div>

              <div>
                <span className="font-tech text-xs text-[#ef4444] uppercase tracking-widest block mb-2">
                  LOGBOOK FIELD ENTRY
                </span>
                <p className="text-neutral-300 font-sans text-base leading-relaxed italic border-l-2 border-[#ef4444] pl-4">
                  "{selectedRoute.journalEntry}"
                </p>
              </div>

              {/* Highlights */}
              <div>
                <span className="font-tech text-[10px] text-neutral-500 uppercase tracking-widest block mb-2">
                  KLUCZOWE PUNKTY NA TRASIE
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedRoute.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-black/60 border border-neutral-800 font-tech text-xs text-neutral-300 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-[#ef4444]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
