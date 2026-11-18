import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillCard({ category, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt angles
    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative h-full rounded-2xl bg-[#111827]/70 border border-white/10 hover:border-[#756BFF]/50 p-6 sm:p-7 backdrop-blur-md overflow-hidden transition-colors duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group"
      >
        {/* Dynamic Glow Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-out"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0, 212, 255, 0.25), rgba(117, 107, 255, 0.15), transparent 70%)`,
          }}
        />

        {/* Card Header */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-[11px] font-mono uppercase text-[#00D4FF] tracking-wider block mb-1">
              CATEGORY // 0{index + 1}
            </span>
            <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
              {category.title}
            </h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#756BFF]/20 to-[#00D4FF]/20 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <span className="text-sm font-bold text-[#00D4FF]">
              {category.skills.length}
            </span>
          </div>
        </div>

        {/* Category Description */}
        <p className="relative z-10 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
          {category.description}
        </p>

        {/* Skills List */}
        <div className="relative z-10 flex flex-wrap gap-2.5">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-[#0D1220]/80 border border-white/5 hover:border-[#00D4FF]/40 hover:bg-[#172033] transition-all duration-200 group/pill"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] group-hover/pill:shadow-[0_0_8px_#00D4FF]" />
                <span className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">
                  {skill.name}
                </span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-[#A1A1AA] group-hover/pill:text-[#00D4FF] transition-colors">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Illuminated Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#756BFF]/40 to-transparent group-hover:via-[#00D4FF] transition-all duration-500" />
      </div>
    </motion.div>
  );
}
