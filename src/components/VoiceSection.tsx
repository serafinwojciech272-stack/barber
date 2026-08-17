import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Disc, Mic, Tv, Calendar, MapPin, Volume2, SkipForward, SkipBack, X, Radio } from 'lucide-react';
import { ASSETS } from '../lib/constants';
import { playGuitarRiffSound } from './AudioEngine';

interface Track {
  id: string;
  title: string;
  duration: string;
  genre: string;
  description: string;
  bpm: string;
}

export const VoiceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'LISTEN' | 'WATCH' | 'LIVE'>('LISTEN');
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const tracks: Track[] = [
    {
      id: '01',
      title: 'TURN THE PAGE (METALLICA STYLE ROAD ANTHEM)',
      duration: '05:42',
      genre: 'HEAVY ROCK / HIGHWAY SOUNDTRACK',
      description: 'Ironiczny, wolno narastający hymn motocyklistów na trasie. Potężny przester gitarowy i surowy, pełny wokal.',
      bpm: '82 BPM',
    },
    {
      id: '02',
      title: 'RIDER ON THE EDGE (1100 CCM)',
      duration: '04:18',
      genre: 'HEAVY ROCK / DESERT ROAD',
      description: 'Surowy, niski wokal połączony z przesterowanym riffem gitarowym i basowym dudnieniem 1100 CCM. Utwór inspirowany nocnymi przelotami po trasie A4.',
      bpm: '124 BPM',
    },
    {
      id: '03',
      title: 'SHADOW V-TWIN (ACOUSTIC DEMO)',
      duration: '03:45',
      genre: 'ACOUSTIC ROCK / BLUES',
      description: 'Akustyczna opowieść o wolności, zapachu benzyny i braku celu podróży. Nagrano na żywo na prostej taśmie analogowej.',
      bpm: '98 BPM',
    },
    {
      id: '04',
      title: 'COLD ASPHALT & RAZOR EDGE',
      duration: '05:02',
      genre: 'HARD ROCK / BACKSTAGE',
      description: 'Energiczny, dymny numer koncertowy z mocną sekcją rytmiczną i gitarowym solówkowym uderzeniem.',
      bpm: '138 BPM',
    },
  ];

  const liveDates = [
    {
      date: '24 PAŹDZIERNIKA',
      city: 'KRAKÓW',
      venue: 'UNDERGROUND ROCK BAR',
      status: 'BILETY W SPRZEDAŻY',
    },
    {
      date: '12 LISTOPADA',
      city: 'KATOWICE',
      venue: 'INDUSTRIAL STAGE WORKSHOP',
      status: 'OSTATNIE MIEJSCA',
    },
    {
      date: '02 GRUDNIA',
      city: 'WARSZAWA',
      venue: 'MOTORCYCLE & ROCK CLUB',
      status: 'WKRÓTCE',
    },
    {
      date: '18 GRUDNIA',
      city: 'GDAŃSK',
      venue: 'SHIPYARD BACKSTAGE',
      status: 'WKRÓTCE',
    },
  ];

  const currentTrack = tracks[currentTrackIndex];

  const handleTrackToggle = () => {
    setIsPlayingTrack(!isPlayingTrack);
    playGuitarRiffSound();
  };

  return (
    <section id="voice" className="relative py-32 bg-[#09090b] border-t border-neutral-900 overflow-hidden">
      {/* Concert Stage Atmosphere Background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-35">
        <img
          src="/images/voice_stage_performance.jpg"
          alt="Koncert rockowy wokalisty"
          className="w-full h-full object-cover object-center filter contrast-150 grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-[#09090b]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-800 pb-8 gap-6">
          <div>
            <div className="flex items-center gap-2 font-tech text-xs text-[#ef4444] tracking-widest uppercase mb-3">
              <Mic className="w-4 h-4 text-[#ef4444] animate-pulse" />
              <span>SECTION // 03 // STAGE & SOUNDSCAPE</span>
            </div>
            <h2 className="font-display font-bold text-6xl sm:text-8xl lg:text-9xl tracking-tighter text-[#f3f2ee] uppercase leading-none">
              THE VOICE
            </h2>
          </div>

          {/* Module Switcher Tabs */}
          <div className="flex items-center gap-2 font-tech text-xs tracking-widest border border-neutral-800 bg-black/80 p-1">
            <button
              onClick={() => setActiveTab('LISTEN')}
              data-cursor="LISTEN"
              className={`px-4 py-2.5 flex items-center gap-2 transition-all ${
                activeTab === 'LISTEN' ? 'bg-[#9e1b1b] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Disc className="w-3.5 h-3.5" /> LISTEN
            </button>
            <button
              onClick={() => setActiveTab('WATCH')}
              data-cursor="WATCH"
              className={`px-4 py-2.5 flex items-center gap-2 transition-all ${
                activeTab === 'WATCH' ? 'bg-[#9e1b1b] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Tv className="w-3.5 h-3.5" /> WATCH
            </button>
            <button
              onClick={() => setActiveTab('LIVE')}
              data-cursor="LIVE DATES"
              className={`px-4 py-2.5 flex items-center gap-2 transition-all ${
                activeTab === 'LIVE' ? 'bg-[#9e1b1b] text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" /> LIVE DATES
            </button>
          </div>
        </div>

        {/* Tab 1: LISTEN - Custom Audio Player with Large Waveform */}
        {activeTab === 'LISTEN' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Player Display */}
            <div className="lg:col-span-7 border border-neutral-800 bg-black/90 p-6 sm:p-10 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6 font-tech text-xs text-neutral-400">
                <span className="flex items-center gap-2 text-[#ef4444]">
                  <Radio className="w-4 h-4 animate-pulse" /> LIVE STAGE EQUALIZER
                </span>
                <span className="text-[#ef4444] font-bold">{currentTrack.bpm}</span>
              </div>

              {/* Track Title & Artist */}
              <div className="mb-6">
                <span className="font-tech text-xs text-neutral-500 uppercase block mb-1">
                  TRACK {currentTrack.id} // {currentTrack.genre}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl text-white tracking-wide uppercase">
                  {currentTrack.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                  {currentTrack.description}
                </p>
              </div>

              {/* Large Dynamic Audio Waveform Visualizer */}
              <div className="h-28 bg-neutral-950 border border-neutral-850 my-6 p-4 flex items-end justify-between gap-1 overflow-hidden relative">
                {Array.from({ length: 48 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1 sm:w-1.5 transition-all duration-300 rounded-t ${
                      isPlayingTrack ? 'bg-[#ef4444] shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-neutral-800'
                    }`}
                    style={{
                      height: isPlayingTrack
                        ? `${Math.floor(Math.random() * 85) + 15}%`
                        : `${(idx % 6) * 12 + 10}%`,
                    }}
                  />
                ))}
              </div>

              {/* Playback Controls */}
              <div className="flex items-center justify-between border-t border-neutral-800 pt-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setCurrentTrackIndex((prev) => (prev > 0 ? prev - 1 : tracks.length - 1))}
                    className="p-2 border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                    aria-label="Previous track"
                  >
                    <SkipBack className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleTrackToggle}
                    data-cursor={isPlayingTrack ? 'PAUSE' : 'PLAY'}
                    className="px-6 py-3 bg-[#9e1b1b] hover:bg-[#b91c1c] text-white font-tech text-xs tracking-widest uppercase transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(158,27,27,0.5)]"
                  >
                    {isPlayingTrack ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isPlayingTrack ? 'PAUSE TRACK' : 'PLAY TRACK'}</span>
                  </button>

                  <button
                    onClick={() => setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)}
                    className="p-2 border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                    aria-label="Next track"
                  >
                    <SkipForward className="w-4 h-4" />
                  </button>
                </div>

                <div className="font-tech text-xs text-neutral-400">
                  {currentTrack.duration}
                </div>
              </div>
            </div>

            {/* Track List Playlist */}
            <div className="lg:col-span-5 border border-neutral-800 bg-neutral-950 p-6 space-y-4">
              <h4 className="font-tech text-xs text-[#ef4444] tracking-widest uppercase border-b border-neutral-800 pb-3">
                SELECT TRACK FROM REPERTOIRE
              </h4>

              <div className="space-y-2">
                {tracks.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setIsPlayingTrack(true);
                      playGuitarRiffSound();
                    }}
                    data-cursor={`SELECT ${t.id}`}
                    className={`w-full p-4 border text-left transition-all flex items-center justify-between ${
                      currentTrackIndex === idx
                        ? 'border-[#ef4444] bg-[#9e1b1b]/20 text-white'
                        : 'border-neutral-900 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-tech text-xs text-[#ef4444]">{t.id}</span>
                      <div>
                        <span className="font-display text-base block leading-none">{t.title}</span>
                        <span className="font-tech text-[10px] text-neutral-500">{t.genre}</span>
                      </div>
                    </div>
                    <span className="font-tech text-xs">{t.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: WATCH - Native Video Player */}
        {activeTab === 'WATCH' && (
          <div className="border border-neutral-800 bg-black/90 p-6 sm:p-10 relative overflow-hidden shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-6 text-center mb-8">
              <span className="font-tech text-xs text-[#ef4444] tracking-widest uppercase block">
                OFFICIAL DOCUMENTARY FILM // HIGHWAY & STAGE
              </span>
              <h3 className="font-display text-4xl sm:text-6xl text-white tracking-wide uppercase">
                "THE ROAD & THE RAZOR — DOCUMENTARY"
              </h3>
              <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed">
                Oficjalny film dokumentalny ukazujący dzień z życia Piotra Miąsika: pracę w zakładzie barberskim,
                przelot po polskich trasach na Hondzie Shadow z 1987 roku oraz surowe brzmienie na scenie rockowej.
              </p>
            </div>

            {/* Embedded Native Video Player */}
            <div className="relative border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl max-w-5xl mx-auto rounded-none">
              <video
                controls
                controlsList="nodownload"
                poster={ASSETS.heroImage}
                src={ASSETS.heroVideo}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between font-tech text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-ping" />
                  PIOTR MIĄSIK // OFFICIAL ROAD FILM 1987
                </span>
                <span>HD 1080P // CINEMATIC AUDIO</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: LIVE DATES */}
        {activeTab === 'LIVE' && (
          <div className="border border-neutral-800 bg-black/90 p-6 sm:p-10 space-y-6">
            <h3 className="font-display text-2xl text-white tracking-wide uppercase border-b border-neutral-800 pb-4">
              NADCHODZĄCE WYSTĄPIENIA & SESSION ROAD TRIPS
            </h3>

            <div className="divide-y divide-neutral-800">
              {liveDates.map((item, idx) => (
                <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="font-tech text-xs bg-[#9e1b1b] text-white px-3 py-2 text-center shrink-0">
                      {item.date}
                    </div>
                    <div>
                      <h4 className="font-display text-2xl text-white">{item.city}</h4>
                      <p className="font-tech text-xs text-neutral-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#ef4444]" /> {item.venue}
                      </p>
                    </div>
                  </div>

                  <span className="font-tech text-xs tracking-widest text-neutral-400 border border-neutral-800 px-4 py-2 self-start sm:self-auto">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="max-w-4xl w-full bg-neutral-900 border border-neutral-800 p-6 relative">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4 font-tech text-xs text-neutral-400">
              <span>DOCUMENTARY FILM // PIOTR MIĄSIK</span>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-white hover:text-[#ef4444] font-bold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video bg-black flex items-center justify-center relative overflow-hidden border border-neutral-800">
              <video
                controls
                autoPlay
                src={ASSETS.heroVideo}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
