import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Calendar, Send, Check, MapPin, Mail, Phone, Flame } from 'lucide-react';
import { SITE_DATA } from '../lib/contentData';

interface FinalTransitionProps {
  onOpenBooking: () => void;
}

export const FinalTransition: React.FC<FinalTransitionProps> = ({ onOpenBooking }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#060608] text-[#f3f2ee] border-t border-neutral-900 overflow-hidden">
      {/* 1. Dramatic Full-Bleed Road Transition: THE ROAD CONTINUES */}
      <div className="py-36 relative border-b border-neutral-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#060608] to-[#060608] text-center overflow-hidden">
        {/* Subtle Background Road Image Overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <img
            src="/images/polish_road_bieszczady.jpg"
            alt="Polska szosa"
            className="w-full h-full object-cover filter grayscale contrast-150"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-[#060608]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 font-tech text-xs text-[#ef4444] tracking-widest uppercase">
              <Flame className="w-4 h-4 text-[#ef4444] animate-bounce" />
              <span>ROAD MOVIE CONTINUOUS TRANSIT</span>
            </div>

            {/* Prominent Required Text: THE ROAD CONTINUES */}
            <h2 className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tight uppercase text-white leading-none drop-shadow-[0_0_35px_rgba(239,68,68,0.3)]">
              THE ROAD CONTINUES.
            </h2>

            <p className="max-w-2xl mx-auto text-neutral-400 font-sans text-base sm:text-xl font-light leading-relaxed">
              Droga się nie kończy. Barbering, rockowy głos i przelot po polskich szosach trwają dalej.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenBooking}
                data-cursor="BOOK / CONTACT"
                className="w-full sm:w-auto px-8 py-4 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_25px_rgba(239,68,68,0.4)]"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK APPOINTMENT / CONTACT</span>
              </button>

              <a
                href="#hero"
                data-cursor="BACK TO TOP"
                className="w-full sm:w-auto px-8 py-4 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 text-neutral-300 font-tech text-xs tracking-widest uppercase transition-colors text-center"
              >
                BACK TO START [↑]
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Footer Details & Colophon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-neutral-900 pb-16">
          {/* Column 1: Newsletter */}
          <div className="lg:col-span-6 space-y-4">
            <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase block">
              POLISH ROAD TRIP JOURNAL
            </span>
            <h3 className="font-display text-2xl text-white uppercase">SUBSKRYBUJ DZIENNIK TRASY</h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Otrzymuj wpisy z tras po Polsce, zapowiedzi koncertów rockowych i nowe kady fotograficzne bezpośrednio na e-mail. Zero spamu.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="TWÓJ ADRES E-MAIL..."
                className="bg-neutral-900 border border-neutral-800 px-4 py-3 text-xs font-tech text-white placeholder-neutral-600 focus:outline-none focus:border-[#ef4444] flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-neutral-800 hover:bg-[#9e1b1b] text-white font-tech text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                {subscribed ? <Check className="w-4 h-4 text-emerald-400" /> : <Send className="w-4 h-4" />}
                <span>{subscribed ? 'DODANO Do DZIENNIKA' : 'DOŁĄCZ'}</span>
              </button>
            </form>
          </div>

          {/* Column 2: Quick Information */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 font-tech text-xs text-neutral-400">
            <div>
              <span className="text-white block font-display text-lg mb-3">LOKALIZACJE</span>
              <ul className="space-y-2 text-neutral-500">
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ef4444]" /> WARSZTAT BARBERSKI // KATOWICE
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ef4444]" /> TRASY POLSKA // HONDA SHADOW 1100 CCM
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#ef4444]" /> SCENA ROCKOWA // KRAKÓW / WARSZAWA
                </li>
              </ul>
            </div>

            <div>
              <span className="text-white block font-display text-lg mb-3">KONTAKT</span>
              <ul className="space-y-2 text-neutral-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ef4444]" /> {SITE_DATA.contact.email}
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#ef4444]" /> {SITE_DATA.contact.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-tech text-[11px] text-neutral-600 gap-4">
          <div>
            © {new Date().getFullYear()} PIOTR MIĄSIK // BARBER • VOICE • ROAD. ALL RIGHTS RESERVED.
          </div>
          <div>
            HONDA SHADOW 1100 CCM (1987 CUSTOM) // CINEMATIC DIGITAL EXPERIENCE
          </div>
        </div>
      </div>
    </footer>
  );
};
