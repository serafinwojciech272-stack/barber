import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, ShieldCheck, Flame, Compass, Wrench } from 'lucide-react';
import { ASSETS } from '../lib/constants';
import { playRazorSound } from './AudioEngine';

export const BarberSection: React.FC = () => {
  const tools = [
    {
      num: '01',
      title: 'JAPOŃSKA STAL I TRADYCYJNA BRZYTWA',
      desc: 'Praca na ostro. Wykorzystanie japońskich nożyczek i tradycyjnej brzytwy na wymienne ostrza.',
      icon: Scissors,
    },
    {
      num: '02',
      title: 'PAS SKÓRZANY (LEATHER STROP)',
      desc: 'Polerowanie ostrza brzytwy na naturalnym pasie bydlęcym przed każdym strzyżeniem.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'GORĄCY KOMPRES I OLEJEK',
      desc: 'Rytuał parowy zmiękczający zarost, zapachy tytoń, wosk i skóra.',
      icon: Flame,
    },
  ];

  const toolContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const toolItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="barber" className="relative py-32 bg-[#101013] border-t border-neutral-900 overflow-hidden">
      {/* Industrial Steel Grid Texture Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:20px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#ef4444] tracking-widest uppercase mb-3">
              <Wrench className="w-4 h-4 text-[#ef4444]" />
              <span>SECTION // 01 // INDUSTRIAL CRAFT</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-[#f3f2ee] uppercase leading-none">
              THE BARBER
            </h2>
          </div>

          <div className="font-tech text-right text-xs tracking-widest text-neutral-400 space-y-1">
            <div className="text-white font-semibold">PRECISION. CHARACTER. CRAFT.</div>
            <div className="text-neutral-500">BEARD & HAIR ARCHITECTURE</div>
            <div className="text-[#ef4444]">NO FADS // RAW ESSENCE</div>
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Portrait Editorial Column using Reference Photo */}
          <div className="lg:col-span-7 relative group overflow-hidden border border-neutral-800 bg-neutral-900">
            <div className="relative h-[480px] sm:h-[620px] w-full overflow-hidden">
              <img
                src={ASSETS.heroImage}
                alt="Piotr Miąsik - portret rzemieślnika i motocyklisty"
                className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101013] via-transparent to-transparent opacity-90" />
            </div>

            <div className="p-8 relative bg-neutral-900/90 border-t border-neutral-800">
              <div className="flex items-center justify-between font-tech text-xs text-neutral-400 mb-2">
                <span>PORTRAIT // CRAFTSMAN AT WORK</span>
                <span className="text-[#ef4444]">PIOTR MIĄSIK</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-white tracking-wide uppercase mb-3">
                "STRZYŻENIE TO NIE USŁUGA. TO RYTUAŁ TOŻSAMOŚCI."
              </h3>
              <p className="text-neutral-400 text-sm font-sans leading-relaxed">
                Każde cięcie brzytwą wymaga czystej intuicji i opanowania ruchu. Prawdziwe fryzjerstwo
                męskie nie goni za jednosezonowymi trendami. Chodzi o dopasowanie kształtu do charakteru
                człowieka, struktury jego kości i jego stylu życia.
              </p>
            </div>
          </div>

          {/* Right Editorial Column - Sequential Tool Reveals */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {/* Craft Tools Photo Card */}
            <div className="border border-neutral-800 bg-neutral-900 overflow-hidden group relative">
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src="/images/barber_craft_tools.jpg"
                  alt="Narzędzia barberskie - brzytwa i nożyce"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-neutral-950/40" />
                <span className="absolute top-4 left-4 font-tech text-[10px] tracking-widest bg-black/80 text-white px-2.5 py-1 border border-neutral-700">
                  TOOLSET // STEEL & BRASS
                </span>
                <button
                  onClick={playRazorSound}
                  data-cursor="RAZOR SOUND"
                  className="absolute bottom-4 right-4 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white px-3 py-1.5 font-tech text-[10px] tracking-widest uppercase flex items-center gap-1.5 transition-colors shadow-lg"
                >
                  <Scissors className="w-3 h-3" /> TEST RAZOR SOUND
                </button>
              </div>
            </div>

            {/* Sequential Tool Principles List */}
            <motion.div
              variants={toolContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 space-y-6"
            >
              <h4 className="font-tech text-xs tracking-widest text-[#ef4444] uppercase border-b border-neutral-800 pb-2">
                INDUSTRIAL TOOLSET & RITUALS
              </h4>

              <div className="space-y-4 font-sans text-xs sm:text-sm text-neutral-300">
                {tools.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <motion.div
                      key={tool.num}
                      variants={toolItemVariants}
                      className="flex items-start gap-3 border-b border-neutral-850 pb-3 last:border-b-0"
                    >
                      <span className="font-tech text-[#ef4444] font-bold text-sm">{tool.num}</span>
                      <div>
                        <strong className="text-white flex items-center gap-2 font-display text-base uppercase">
                          <ToolIcon className="w-3.5 h-3.5 text-[#ef4444]" />
                          {tool.title}
                        </strong>
                        <p className="text-xs text-neutral-400 mt-1 leading-relaxed">{tool.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
