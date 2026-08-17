import React, { useState } from 'react';
import { FilmGrain } from './components/FilmGrain';
import { CustomCursor } from './components/CustomCursor';
import { FlameParticles } from './components/FlameParticles';
import { CinematicEffectsOverlay } from './components/CinematicEffectsOverlay';
import { CinematicIntroOverlay } from './components/CinematicIntroOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroManifesto } from './components/IntroManifesto';
import { BarberSection } from './components/BarberSection';
import { MachineSection } from './components/MachineSection';
import { VoiceSection } from './components/VoiceSection';
import { RoadDiarySection } from './components/RoadDiarySection';
import { MomentsSection } from './components/MomentsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ThreeWorldsPanels } from './components/ThreeWorldsPanels';
import { FinalTransition } from './components/FinalTransition';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioMode, setAudioMode] = useState<'vtwin' | 'vinyl' | 'highway'>('vtwin');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartExperience = () => {
    setAudioPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#f2efe9] selection:bg-[#9e1b1b] selection:text-white relative overflow-x-hidden">
      {/* 1. First Entry Press Play Cinematic Intro Screen */}
      <CinematicIntroOverlay onStartExperience={handleStartExperience} />

      {/* 2. Anamorphic Lens Flare & Light Leak Dynamic Overlay */}
      <CinematicEffectsOverlay />

      {/* 3. Floating Flame Embers Particle Effect */}
      <FlameParticles />

      {/* 4. Hollywood Style Minimalist Custom Cursor */}
      <CustomCursor />

      {/* 5. Background Analog Film Grain Overlay */}
      <FilmGrain />

      {/* 6. Sticky Navigation */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        audioPlaying={audioPlaying}
        toggleAudio={() => setAudioPlaying(!audioPlaying)}
        audioMode={audioMode}
        setAudioMode={setAudioMode}
      />

      {/* 7. Hero Section: Piotr Miąsik & Honda Shadow 1100 CCM */}
      <Hero
        onFollowRoad={() => scrollToSection('#diary')}
        onMeetBarber={() => scrollToSection('#barber')}
      />

      {/* 8. Intro Manifesto: ONE MAN. THREE WORLDS (BARBER / VOICE / ROAD) */}
      <IntroManifesto />

      {/* 9. Barber Section */}
      <BarberSection />

      {/* 10. Machine Section: HONDA SHADOW 1100 CCM (1987) */}
      <MachineSection />

      {/* 11. Voice Section: LISTEN / WATCH / LIVE */}
      <VoiceSection />

      {/* 12. Philosophical Section: O PRZEMIJANIU I CHWILACH + METALLICA SOUNDTRACK */}
      <PhilosophySection />

      {/* 13. Road Diary Section: POLISH ROAD TRIP & ANIMATED ROUTE */}
      <RoadDiarySection />

      {/* 14. Moments Gallery */}
      <MomentsSection />

      {/* 15. Three Worlds Expandable Panels: 01 BARBER, 02 MUSIC, 03 ROAD */}
      <ThreeWorldsPanels />

      {/* 16. Final Transition Banner (THE ROAD CONTINUES) & Footer */}
      <FinalTransition onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 17. Booking & Contact Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
