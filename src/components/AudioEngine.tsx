import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Radio, Flame, Wind, Scissors, Disc, Play, Pause } from 'lucide-react';

// Optional slot for a legally provided audio file URL
export const LEGALLY_PROVIDED_AUDIO_URL = ''; // Place external legal audio stream URL here when available

// Sound FX 1: Heavy 1100 CCM V-Twin Engine Throttle Rev Sound
export const playEngineRevSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const subOsc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc1.type = 'sawtooth';
    osc2.type = 'square';
    subOsc.type = 'triangle';

    osc1.frequency.setValueAtTime(38, now);
    osc1.frequency.exponentialRampToValueAtTime(165, now + 0.7);
    osc1.frequency.exponentialRampToValueAtTime(50, now + 2.0);

    osc2.frequency.setValueAtTime(76, now);
    osc2.frequency.exponentialRampToValueAtTime(330, now + 0.7);
    osc2.frequency.exponentialRampToValueAtTime(100, now + 2.0);

    subOsc.frequency.setValueAtTime(19, now);
    subOsc.frequency.exponentialRampToValueAtTime(82.5, now + 0.7);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(160, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.7);
    filter.frequency.exponentialRampToValueAtTime(220, now + 2.0);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.28, now + 0.2);
    gain.gain.setValueAtTime(0.3, now + 0.7);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 2.2);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    subOsc.start(now);

    osc1.stop(now + 2.2);
    osc2.stop(now + 2.2);
    subOsc.stop(now + 2.2);
  } catch {
    // Fallback
  }
};

// Sound FX 2: Barber Straight Razor Leather Strop Friction Sound
export const playRazorSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    const bufferSize = ctx.sampleRate * 0.3;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(3200, now);
    filter.Q.setValueAtTime(6, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start(now);
  } catch {
    // Fallback
  }
};

// Sound FX 3: Heavy Rock Guitar Distortion Riff
export const playGuitarRiffSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') ctx.resume();

    const now = ctx.currentTime;
    const freqs = [82.41, 123.47, 164.81];

    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const waveShaper = ctx.createWaveShaper();

      const curve = new Float32Array(256);
      for (let i = 0; i < 256; i++) {
        const x = (i * 2) / 256 - 1;
        curve[i] = (3 + 10) * x * 20 * (Math.PI / 180) / (Math.PI + 10 * Math.abs(x));
      }
      waveShaper.curve = curve;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc.connect(waveShaper);
      waveShaper.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.2);
    });
  } catch {
    // Fallback
  }
};

export interface AudioEngineProps {
  isPlaying: boolean;
  onToggle: () => void;
  mode: 'vtwin' | 'vinyl' | 'highway';
  setMode: (mode: 'vtwin' | 'vinyl' | 'highway') => void;
}

export const AudioEngineController: React.FC<AudioEngineProps> = ({
  isPlaying,
  onToggle,
  mode,
  setMode,
}) => {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);
  const audioFileRef = useRef<HTMLAudioElement | null>(null);

  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (isPlaying && !isMuted) {
      if (LEGALLY_PROVIDED_AUDIO_URL) {
        playFileAudio();
      } else {
        startSound(mode);
      }
    } else {
      stopSound();
    }
    return () => {
      stopSound();
    };
  }, [isPlaying, isMuted, mode]);

  const playFileAudio = () => {
    if (!audioFileRef.current) {
      audioFileRef.current = new Audio(LEGALLY_PROVIDED_AUDIO_URL);
      audioFileRef.current.loop = true;
    }
    audioFileRef.current.volume = 0.2;
    audioFileRef.current.play().catch(() => {});
  };

  const startSound = (soundMode: 'vtwin' | 'vinyl' | 'highway') => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      stopSoundNodes();

      const masterGain = ctx.createGain();
      // Smooth audio fade-in over 1.5s
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      if (soundMode === 'vtwin') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'sawtooth';
        osc1.frequency.setValueAtTime(38, ctx.currentTime);

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(76, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(170, ctx.currentTime);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(masterGain);

        osc1.start();
        osc2.start();
        oscillatorRef.current = osc1;
      } else if (soundMode === 'vinyl') {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200, ctx.currentTime);
        filter.Q.setValueAtTime(3, ctx.currentTime);

        whiteNoise.connect(filter);
        filter.connect(masterGain);
        whiteNoise.start();
        noiseNodeRef.current = whiteNoise;
      } else {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * 0.5;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
        noiseNodeRef.current = noise;
      }
    } catch {
      // Fallback
    }
  };

  const stopSoundNodes = () => {
    if (oscillatorRef.current) {
      try { oscillatorRef.current.stop(); } catch {}
      oscillatorRef.current = null;
    }
    if (noiseNodeRef.current) {
      try { noiseNodeRef.current.stop(); } catch {}
      noiseNodeRef.current = null;
    }
  };

  const stopSound = () => {
    stopSoundNodes();
    if (audioFileRef.current) {
      audioFileRef.current.pause();
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.suspend();
      } catch {}
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Sound Control Toggle with Play / Pause / Mute */}
      <div className="flex items-center border border-neutral-800 bg-black/60 p-0.5 font-tech text-xs">
        <button
          onClick={onToggle}
          data-cursor={isPlaying ? 'PAUSE' : 'PLAY'}
          className={`px-2.5 py-1.5 flex items-center gap-2 transition-all ${
            isPlaying && !isMuted
              ? 'bg-[#9e1b1b] text-white shadow-[0_0_12px_rgba(239,68,68,0.4)]'
              : 'text-neutral-400 hover:text-white'
          }`}
          title={isPlaying ? 'Pause Audio' : 'Play Audio'}
        >
          {isPlaying && !isMuted ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              {/* Animated Waveform */}
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 h-3 bg-white animate-[bounce_0.8s_infinite_100ms]" />
                <span className="w-0.5 h-2 bg-white animate-[bounce_0.8s_infinite_300ms]" />
                <span className="w-0.5 h-3.5 bg-white animate-[bounce_0.8s_infinite_200ms]" />
              </div>
              <span className="hidden sm:inline">SOUND ON</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PLAY</span>
            </>
          )}
        </button>

        <button
          onClick={() => setIsMuted(!isMuted)}
          data-cursor={isMuted ? 'UNMUTE' : 'MUTE'}
          className={`px-2 py-1.5 transition-colors border-l border-neutral-800 ${
            isMuted ? 'text-[#ef4444]' : 'text-neutral-400 hover:text-white'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Rev 1100 CCM Engine Button */}
      <button
        onClick={playEngineRevSound}
        data-cursor="REV 1100 CCM"
        className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 bg-[#9e1b1b]/20 hover:bg-[#9e1b1b] text-neutral-200 hover:text-white border border-[#9e1b1b]/60 font-tech text-xs tracking-widest transition-all duration-300 shadow-[0_0_12px_rgba(158,27,27,0.3)]"
        title="Rev Honda Shadow 1100 CCM Engine"
      >
        <Flame className="w-3.5 h-3.5 text-[#ef4444] animate-bounce" />
        <span>REV 1100 CCM</span>
      </button>

      {/* Razor Blade Sound FX Button */}
      <button
        onClick={playRazorSound}
        data-cursor="RAZOR SOUND"
        className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 font-tech text-xs tracking-widest transition-all"
        title="Trigger Razor Leather Strop Sound"
      >
        <Scissors className="w-3 h-3 text-neutral-400" />
        <span>RAZOR FX</span>
      </button>

      {/* Guitar Riff Sound FX Button */}
      <button
        onClick={playGuitarRiffSound}
        data-cursor="ROCK RIFF"
        className="hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 font-tech text-xs tracking-widest transition-all"
        title="Trigger Rock Guitar Power Chord Riff"
      >
        <Disc className="w-3 h-3 text-[#ef4444]" />
        <span>RIFF FX</span>
      </button>
    </div>
  );
};
