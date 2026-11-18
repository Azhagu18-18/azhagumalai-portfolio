import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Track clickable hover
    const handleMouseOver = (e) => {
      const target = e.target.closest('button, a, input, textarea, [data-cursor="pointer"], .interactive');
      setIsHovered(!!target);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    if (isTouch) return;
    let animationFrameId;

    const render = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${trailing.x - (isHovered ? 24 : 14)}px, ${trailing.y - (isHovered ? 24 : 14)}px, 0)`,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          border: isHovered ? '1.5px solid rgba(0, 212, 255, 0.8)' : '1px solid rgba(117, 107, 255, 0.4)',
          background: isHovered ? 'rgba(0, 212, 255, 0.08)' : 'rgba(117, 107, 255, 0.03)',
          boxShadow: isHovered ? '0 0 15px rgba(0, 212, 255, 0.4)' : 'none',
        }}
      />
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#00D4FF]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          boxShadow: '0 0 10px #00D4FF, 0 0 20px #756BFF',
        }}
      />
    </>
  );
}
