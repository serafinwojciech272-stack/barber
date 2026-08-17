import React from 'react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../lib/contentData';

export const IntroManifesto: React.FC = () => {
  const { tag, paragraphs } = SITE_DATA.intro;

  const triadItems = [
    {
      title: 'BARBER.',
      subtitle: 'PRECYZJA & RYTUAŁ',
      link: '#barber',
      desc: 'Ostrze brzytwy, klasyczne formy fryzjerskie, anatomia głowy i męski spokój. Rzemiosło bez drogi na skróty.',
    },
    {
      title: 'VOCALIST.',
      subtitle: 'GŁOS & PRZESTER',
      link: '#voice',
      desc: 'Niski wokal rockowy, lampowe przestery i czysta sceniczna moc w dymnych klubach.',
    },
    {
      title: 'RIDER.',
      subtitle: 'MASZYNA & ASFALT',
      link: '#machine',
      desc: 'Honda Shadow 1100 CCM z 1987 roku. Wolność i pokonywanie tysięcy kilometrów po polskich szosach.',
    },
  ];

  return (
    <section id="intro" className="relative py-28 bg-[#080808] border-t border-neutral-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline */}
        <div className="flex items-center gap-3 font-tech text-xs text-[#ef4444] tracking-widest uppercase mb-12">
          <span className="w-8 h-[1px] bg-[#ef4444]" />
          <span>{tag} // THREE ESSENTIAL DIMENSIONS</span>
        </div>

        {/* Three Huge Typographic Elements (BARBER. VOCALIST. RIDER.) - NO CARDS */}
        <div className="space-y-12 sm:space-y-16 border-b border-neutral-900 pb-20">
          {triadItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(item.link);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              data-cursor={`EXPLORE ${item.title}`}
              className="group block text-left transition-all cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tighter uppercase leading-[0.85] text-[#a3a099] group-hover:text-[#f2efe9] transition-colors duration-500">
                  <span className="text-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity mr-4 font-tech text-3xl sm:text-5xl align-middle">
                    //
                  </span>
                  {item.title}
                </h2>

                <div className="lg:max-w-md space-y-2">
                  <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase block">
                    0{idx + 1} // {item.subtitle}
                  </span>
                  <p className="text-sm text-[#a3a099] font-sans leading-relaxed group-hover:text-white transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Story Introduction Paragraphs */}
        <div className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 font-tech text-xs text-[#ef4444] tracking-widest uppercase space-y-2">
            <span>THE MAN BEHIND THE CHAIR</span>
            <h3 className="font-display text-3xl text-white">PIOTR MIĄSIK</h3>
            <span className="text-neutral-500 block">KRAKÓW / KATOWICE / TRASY POLSKA</span>
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#a3a099] text-base sm:text-xl font-sans font-light leading-relaxed">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
