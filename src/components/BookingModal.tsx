import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Scissors, Disc, Compass, Check, Phone, Mail, User } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [serviceType, setServiceType] = useState<'BARBER' | 'MUSIC' | 'ROAD'>('BARBER');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-2xl w-full bg-neutral-900 border border-neutral-800 p-6 sm:p-8 relative shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div>
            <span className="font-tech text-xs text-[#9e1b1b] tracking-widest uppercase block">
              DIRECT CONTACT & BOOKING
            </span>
            <h3 className="font-display text-2xl text-white uppercase">REZERWACJA / SPOTKANIE</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 bg-neutral-800 hover:bg-[#9e1b1b] text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#9e1b1b] text-white flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="font-display text-3xl text-white uppercase">ZGŁOSZENIE PRZYJĘTE</h4>
            <p className="text-neutral-400 font-sans text-sm max-w-md mx-auto leading-relaxed">
              Dziękujemy za kontakt. Piotr odezwie się bezpośrednio, aby potwierdzić termin.
            </p>
            <button
              onClick={() => {
                setSubscribed(false);
                onClose();
              }}
              className="px-6 py-3 bg-[#9e1b1b] text-white font-tech text-xs tracking-widest uppercase"
            >
              ZAMKNIJ OKNO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type Selector */}
            <div>
              <label className="font-tech text-xs text-neutral-400 block mb-2 uppercase">WYBIERZ OBSZAR:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setServiceType('BARBER')}
                  className={`p-3 border font-tech text-xs tracking-widest flex items-center justify-center gap-2 transition-colors ${
                    serviceType === 'BARBER' ? 'border-[#9e1b1b] bg-[#9e1b1b]/20 text-white' : 'border-neutral-800 bg-black/60 text-neutral-400'
                  }`}
                >
                  <Scissors className="w-4 h-4 text-[#9e1b1b]" /> BARBER
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('MUSIC')}
                  className={`p-3 border font-tech text-xs tracking-widest flex items-center justify-center gap-2 transition-colors ${
                    serviceType === 'MUSIC' ? 'border-[#9e1b1b] bg-[#9e1b1b]/20 text-white' : 'border-neutral-800 bg-black/60 text-neutral-400'
                  }`}
                >
                  <Disc className="w-4 h-4 text-[#9e1b1b]" /> MUZYKA
                </button>
                <button
                  type="button"
                  onClick={() => setServiceType('ROAD')}
                  className={`p-3 border font-tech text-xs tracking-widest flex items-center justify-center gap-2 transition-colors ${
                    serviceType === 'ROAD' ? 'border-[#9e1b1b] bg-[#9e1b1b]/20 text-white' : 'border-neutral-800 bg-black/60 text-neutral-400'
                  }`}
                >
                  <Compass className="w-4 h-4 text-[#9e1b1b]" /> TRASA
                </button>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-tech text-xs text-neutral-400 block mb-1 uppercase">IMIĘ I NAZWISKO</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/60 border border-neutral-800 p-3 text-xs font-tech text-white focus:border-[#9e1b1b] focus:outline-none"
                  placeholder="JAN KOWALSKI"
                />
              </div>

              <div>
                <label className="font-tech text-xs text-neutral-400 block mb-1 uppercase">NUMER TELEFONU</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-black/60 border border-neutral-800 p-3 text-xs font-tech text-white focus:border-[#9e1b1b] focus:outline-none"
                  placeholder="+48 600 000 000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-tech text-xs text-neutral-400 block mb-1 uppercase">E-MAIL</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/60 border border-neutral-800 p-3 text-xs font-tech text-white focus:border-[#9e1b1b] focus:outline-none"
                  placeholder="JAN@DOMAIN.PL"
                />
              </div>

              <div>
                <label className="font-tech text-xs text-neutral-400 block mb-1 uppercase">PROPONOWANY TERMIN</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-black/60 border border-neutral-800 p-3 text-xs font-tech text-white focus:border-[#9e1b1b] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-tech text-xs text-neutral-400 block mb-1 uppercase">UWAGI / OPIS ZGŁOSZENIA</label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-black/60 border border-neutral-800 p-3 text-xs font-tech text-white focus:border-[#9e1b1b] focus:outline-none"
                placeholder="Napisz kilka słów na temat rezerwacji lub współpracy..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-xs tracking-widest uppercase transition-colors"
            >
              WYŚLIJ ZGŁOSZENIE
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};
