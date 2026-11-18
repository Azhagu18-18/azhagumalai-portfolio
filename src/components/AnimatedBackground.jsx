import React, { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convert to percentage for smooth gradient center placement
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070A12]">
      {/* Dynamic Mouse Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out opacity-40 md:opacity-60"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}% ${mousePos.y}%, rgba(117, 107, 255, 0.12), rgba(0, 212, 255, 0.05) 40%, transparent 80%)`,
        }}
      />

      {/* Atmospheric Fixed Glow Orbs */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-br from-[#756BFF]/15 to-[#8B5CF6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-[#00D4FF]/12 to-[#4F46E5]/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[20%] w-[60vw] h-[40vw] max-w-[800px] max-h-[500px] rounded-full bg-gradient-to-t from-[#8B5CF6]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Subtle Precision Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.25]" />
      
      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#070A12]/40 to-[#070A12]/90 pointer-events-none" />
    </div>
  );
}
