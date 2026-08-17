import React, { useState } from 'react';
import { Scissors, Disc, Compass, ArrowRight } from 'lucide-react';

export const ThreeWorldsPanels: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number>(0);

  const panels = [
    {
      id: '01',
      title: 'BARBERING',
      subtitle: 'PRECISION. CHARACTER. CRAFT.',
      desc: 'Ostrze brzytwy nie wybacza pośpiechu. Fryzjerstwo męskie oparte na tradycyjnych formach, dopasowaniu kształtu do struktury kości i szacunku dla czasu klienta.',
      image: '/images/barber_portrait.jpg',
      icon: Scissors,
      link: '#barber',
    },
    {
      id: '02',
      title: 'ROCK MUSIC',
      subtitle: 'RAW VOCALS & ANALOG AMPLIFIERS',
      desc: 'Głęboki wokal, lampowe wzmacniacze i bezkompromisowe rockowe brzmienie. Scena to miejsce czystej energii i szczerości.',
      image: '/images/voice_stage_performance.jpg',
      icon: Disc,
      link: '#voice',
    },
    {
      id: '03',
      title: 'MOTORCYCLE ROAD',
      subtitle: 'HONDA SHADOW VT700 / 1987',
      desc: 'Dwucylindrowy V-twin z 1987 roku. Setki kilometrów po polskich szosach – od Bieszczad po Bałtyk. Droga jako przestrzeń medytacji.',
      image: '/images/hero_piotr_shadow.jpg',
      icon: Compass,
      link: '#machine',
    },
  ];

  return (
    <section className="relative py-28 bg-[#0c0c0e] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-12">
          <span className="font-tech text-xs text-[#9e1b1b] tracking-widest uppercase">
            THREE WORLDS INTERACTIVE PANELS
          </span>
          <span className="font-tech text-xs text-neutral-500 hidden sm:inline">
            CLICK PANEL TO EXPAND
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {panels.map((p, idx) => {
            const Icon = p.icon;
            const isExpanded = activePanel === idx;

            return (
              <div
                key={p.id}
                onClick={() => setActivePanel(idx)}
                className={`relative border transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between p-8 min-h-[420px] ${
                  isExpanded
                    ? 'border-[#9e1b1b] bg-neutral-900 shadow-2xl scale-[1.02]'
                    : 'border-neutral-850 bg-neutral-950 hover:border-neutral-700'
                }`}
              >
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 hover:opacity-30 transition-opacity">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover filter contrast-125 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Top Panel Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-tech text-xl font-bold text-[#9e1b1b]">{p.id}</span>
                  <Icon className={`w-6 h-6 ${isExpanded ? 'text-[#9e1b1b]' : 'text-neutral-500'}`} />
                </div>

                {/* Bottom Panel Text */}
                <div className="relative z-10 space-y-4">
                  <span className="font-tech text-[10px] text-neutral-400 tracking-widest block uppercase">
                    {p.subtitle}
                  </span>
                  <h3 className="font-display text-4xl text-white uppercase tracking-tight">{p.title}</h3>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed line-clamp-3">{p.desc}</p>

                  <a
                    href={p.link}
                    onClick={(e) => {
                      e.stopPropagation();
                      const target = document.querySelector(p.link);
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 font-tech text-xs text-[#9e1b1b] hover:text-white uppercase tracking-widest pt-2 group"
                  >
                    <span>EXPLORE {p.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
