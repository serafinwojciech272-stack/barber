import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { AudioEngineController } from './AudioEngine';

interface NavbarProps {
  onOpenBooking: () => void;
  audioPlaying: boolean;
  toggleAudio: () => void;
  audioMode: 'vtwin' | 'vinyl' | 'highway';
  setAudioMode: (mode: 'vtwin' | 'vinyl' | 'highway') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  audioPlaying,
  toggleAudio,
  audioMode,
  setAudioMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Requested Navigation Menu Items: STORY, CRAFT, VOICE, ROAD, ARCHIVE, CONTACT
  const navLinks = [
    { label: 'STORY', href: '#intro' },
    { label: 'CRAFT', href: '#barber' },
    { label: 'VOICE', href: '#voice' },
    { label: 'ROAD', href: '#diary' },
    { label: 'ARCHIVE', href: '#moments' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-neutral-900 py-3.5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-left"
          data-cursor="HOME"
        >
          <div className="w-8 h-8 border border-neutral-800 bg-[#111111] flex items-center justify-center font-display font-bold text-sm tracking-widest text-[#f2efe9] group-hover:border-[#9e1b1b] transition-colors">
            PM
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-wider text-[#f2efe9] group-hover:text-[#ef4444] transition-colors leading-none">
              PIOTR MIĄSIK
            </span>
            <span className="font-tech text-[9px] tracking-widest text-[#a3a099] mt-0.5">
              BARBER • VOCALIST • RIDER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-tech text-xs tracking-widest">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              data-cursor={link.label}
              className="relative py-1 text-[#a3a099] hover:text-[#f2efe9] transition-colors group"
            >
              <span className="text-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity mr-1">//</span>
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#ef4444] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Controls: Audio & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <AudioEngineController
            isPlaying={audioPlaying}
            onToggle={toggleAudio}
            mode={audioMode}
            setMode={setAudioMode}
          />

          <button
            onClick={onOpenBooking}
            data-cursor="BOOK / CONTACT"
            className="px-4 py-2 bg-[#111111] border border-neutral-800 hover:border-[#ef4444] hover:bg-[#9e1b1b] text-neutral-200 hover:text-white font-tech text-xs tracking-widest transition-all duration-300 flex items-center gap-2 group"
          >
            <Calendar className="w-3.5 h-3.5 text-[#ef4444] group-hover:text-white transition-colors" />
            <span>BOOK / CONTACT</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <AudioEngineController
            isPlaying={audioPlaying}
            onToggle={toggleAudio}
            mode={audioMode}
            setMode={setAudioMode}
          />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-neutral-800 bg-[#111111] text-neutral-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] z-50 bg-[#080808]/98 border-t border-neutral-900 p-8 backdrop-blur-2xl animate-fadeIn flex flex-col justify-between">
          <div className="flex flex-col gap-6 font-display text-4xl sm:text-5xl tracking-tight uppercase text-left pt-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between text-neutral-300 hover:text-white border-b border-neutral-900 pb-4 group"
              >
                <span className="group-hover:text-[#ef4444] transition-colors">{link.label}</span>
                <span className="font-tech text-xs text-[#ef4444]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pb-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-[#9e1b1b] text-white font-tech text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK APPOINTMENT / CONTACT</span>
            </button>
            <div className="text-center font-tech text-[10px] text-neutral-600 uppercase tracking-widest">
              PIOTR MIĄSIK // BARBER • VOCALIST • RIDER
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
