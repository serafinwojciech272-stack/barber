import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Maximize2, X, MapPin, Calendar, Film } from 'lucide-react';
import { SITE_DATA, Moment } from '../lib/contentData';

export const MomentsSection: React.FC = () => {
  const { sectionTag, headline, momentsList } = SITE_DATA.moments;
  const [filter, setFilter] = useState<'ALL' | 'BARBER' | 'MACHINE' | 'VOICE' | 'ROAD'>('ALL');
  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null);

  const filteredMoments = filter === 'ALL' ? momentsList : momentsList.filter((m) => m.category === filter);

  return (
    <section id="moments" className="relative py-32 bg-[#0c0c0e] border-t border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#9e1b1b] tracking-widest uppercase mb-3">
              <span>{sectionTag}</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-[#f3f2ee] uppercase leading-none">
              {headline}
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 font-tech text-xs tracking-widest border border-neutral-800 bg-black/80 p-1">
            {(['ALL', 'BARBER', 'MACHINE', 'VOICE', 'ROAD'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-cursor={`FILTER ${cat}`}
                className={`px-3 py-1.5 transition-all ${
                  filter === cat ? 'bg-[#9e1b1b] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredMoments.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedMoment(item)}
                data-cursor="VIEW PHOTO"
                className="group relative border border-neutral-850 bg-neutral-950 overflow-hidden cursor-pointer shadow-lg"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Top Category Tag */}
                  <span className="absolute top-3 left-3 font-tech text-[9px] bg-black/80 text-white px-2 py-0.5 border border-neutral-700">
                    {item.category}
                  </span>

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 bg-neutral-900 border-t border-neutral-800">
                  <h3 className="font-display text-base text-white truncate uppercase">{item.title}</h3>
                  <div className="flex items-center justify-between font-tech text-[10px] text-neutral-500 mt-1">
                    <span>{item.location}</span>
                    <span className="text-[#9e1b1b]">{item.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMoment && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-5xl w-full bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl relative"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 p-4 font-tech text-xs text-neutral-400 bg-black/80">
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-[#9e1b1b]" /> {selectedMoment.category} // {selectedMoment.id.toUpperCase()}
                </span>
                <button
                  onClick={() => setSelectedMoment(null)}
                  className="px-3 py-1 bg-neutral-800 hover:bg-[#9e1b1b] text-white transition-colors"
                >
                  CLOSE [X]
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 bg-black flex items-center justify-center max-h-[70vh] overflow-hidden">
                  <img
                    src={selectedMoment.src}
                    alt={selectedMoment.title}
                    className="max-h-[70vh] w-full object-contain filter contrast-125"
                  />
                </div>

                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-neutral-950">
                  <div>
                    <span className="font-tech text-xs text-[#9e1b1b] uppercase block mb-1">ANALOG PHOTO ARCHIVE</span>
                    <h3 className="font-display text-2xl text-white uppercase mb-3">{selectedMoment.title}</h3>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed">{selectedMoment.caption}</p>
                  </div>

                  <div className="space-y-3 font-tech text-xs border-t border-neutral-800 pt-4 text-neutral-400">
                    <div>
                      <span className="text-neutral-600 block text-[10px]">LOKALIZACJA</span>
                      <span className="text-white flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#9e1b1b]" /> {selectedMoment.location}
                      </span>
                    </div>

                    <div>
                      <span className="text-neutral-600 block text-[10px]">DATA WYKONANIA</span>
                      <span className="text-white flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#9e1b1b]" /> {selectedMoment.date}
                      </span>
                    </div>

                    <div>
                      <span className="text-neutral-600 block text-[10px]">EXIF DATA</span>
                      <span className="text-neutral-300 font-mono text-[11px]">{selectedMoment.exif}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
