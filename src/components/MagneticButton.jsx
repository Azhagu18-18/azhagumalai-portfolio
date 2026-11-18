import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  className = '',
  download,
  target,
  rel,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[#756BFF] to-[#8B5CF6] text-white shadow-[0_0_25px_-5px_rgba(117,107,255,0.6)] hover:shadow-[0_0_35px_-2px_rgba(0,212,255,0.7)] hover:border-[#00D4FF] border border-transparent';
      case 'secondary':
        return 'bg-[#111827]/80 text-[#F8FAFC] border border-[#756BFF]/40 hover:border-[#00D4FF] hover:bg-[#172033] shadow-[0_0_15px_-5px_rgba(117,107,255,0.25)]';
      case 'outline':
        return 'bg-transparent text-[#00D4FF] border border-[#00D4FF]/50 hover:bg-[#00D4FF]/10 hover:border-[#00D4FF] shadow-[0_0_20px_-8px_rgba(0,212,255,0.4)]';
      case 'ghost':
        return 'bg-transparent text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-white/5 border border-transparent';
      default:
        return '';
    }
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      download={download}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm transition-colors duration-300 backdrop-blur-md overflow-hidden cursor-pointer ${getVariantStyles()} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Subtle shine reflection */}
      <span className="absolute inset-0 -translate-x-full hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-transform" />
    </Component>
  );
}
