import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest('button, a, input, [role="button"], .cursor-interactive');
        const textAttr = interactiveEl?.getAttribute('data-cursor');
        
        if (interactiveEl) {
          setIsHovered(true);
          setCursorText(textAttr || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block rounded-full border border-[#9e1b1b]/80 mix-blend-difference ${
          isHovered ? 'w-12 h-12 -translate-x-6 -translate-y-6 bg-[#9e1b1b]/20 border-[#9e1b1b]' : 'w-8 h-8 -translate-x-4 -translate-y-4'
        } ${isMouseDown ? 'scale-75' : 'scale-100'}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(${isHovered ? '-24px, -24px' : '-16px, -16px'})`,
        }}
      />

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 bg-[#f3f2ee] rounded-full hidden md:block mix-blend-difference -translate-x-1 -translate-y-1 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-4px, -4px)`,
        }}
      />

      {/* Custom Cursor Floating Label */}
      {cursorText && (
        <div
          className="fixed top-0 left-0 pointer-events-none z-[9999] font-tech text-[10px] uppercase tracking-widest bg-black/90 text-white px-2 py-0.5 border border-[#9e1b1b] hidden md:block whitespace-nowrap shadow-xl"
          style={{
            transform: `translate3d(${position.x + 16}px, ${position.y + 16}px, 0)`,
          }}
        >
          {cursorText}
        </div>
      )}
    </>
  );
};
