import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Database, Download, Layers, Sparkles, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import MagneticButton from '../components/MagneticButton';
import CyberHeroScene from '../components/CyberHeroScene';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 85;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const floatingBadges = [
    { label: 'React.js', icon: Code2, color: '#00D4FF', position: 'top-12 -left-6 sm:top-16 sm:left-4' },
    { label: 'Node.js', icon: Cpu, color: '#10B981', position: 'bottom-20 -left-4 sm:bottom-24 sm:left-2' },
    { label: 'MongoDB', icon: Database, color: '#8B5CF6', position: 'top-20 -right-4 sm:top-24 sm:right-6' },
    { label: 'TypeScript', icon: Layers, color: '#38BDF8', position: 'bottom-24 -right-6 sm:bottom-28 sm:right-4' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Typography & Info */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            
            {/* Status Indicator Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111827]/80 border border-[#756BFF]/30 text-xs font-semibold tracking-wider text-[#A1A1AA] backdrop-blur-md shadow-[0_0_20px_-5px_rgba(117,107,255,0.3)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[#00D4FF] font-mono">//</span>
              <span className="text-[#F8FAFC]">FULL STACK DEVELOPER</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span className="hidden sm:inline text-[#A1A1AA]">1.5+ Years Experience</span>
            </motion.div>

            {/* Main Name Typography */}
            <div className="space-y-1 sm:space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] uppercase"
              >
                <span className="block text-[#F8FAFC]">
                  AZHAGUMALAI
                </span>
                <span className="block text-gradient-electric mt-1">
                  KRISHNAN
                </span>
              </motion.h1>

              {/* Title Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="pt-2 flex items-center gap-3"
              >
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#00D4FF] to-[#756BFF]" />
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-[0.2em] text-[#00D4FF] uppercase">
                  FULL STACK DEVELOPER
                </span>
              </motion.div>
            </div>

            {/* Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base sm:text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed font-normal"
            >
              "Building modern, scalable and interactive digital experiences through creative frontend engineering and powerful backend solutions."
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-lg"
            >
              <div className="p-3 rounded-xl bg-[#111827]/60 border border-white/5 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-[#00D4FF]">1.5+</div>
                <div className="text-xs text-[#A1A1AA] font-medium">Years Experience</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111827]/60 border border-white/5 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-extrabold text-[#756BFF]">MERN</div>
                <div className="text-xs text-[#A1A1AA] font-medium">Full Stack Core</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111827]/60 border border-white/5 backdrop-blur-sm col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-[#A1A1AA] font-medium">Responsive UI</div>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              {/* Primary CTA */}
              <MagneticButton
                onClick={() => scrollTo('projects')}
                variant="primary"
                className="w-full sm:w-auto"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-4 h-4 -rotate-90 group-hover:rotate-0 transition-transform" />
              </MagneticButton>

              {/* Secondary CTA */}
              <MagneticButton
                onClick={() => scrollTo('contact')}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                <span>LET'S CONNECT</span>
              </MagneticButton>

              {/* Resume CTA */}
              <MagneticButton
                href={personalInfo.resumePath}
                download="Azhagumalai_Krishnan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Cyber Core */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full h-full relative"
            >
              {/* 3D Scene */}
              <CyberHeroScene />

              {/* Floating Technology Pills */}
              {floatingBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + idx * 0.15 }}
                    className={`absolute ${badge.position} z-20 hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827]/90 border border-white/10 backdrop-blur-md shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7)] animate-float`}
                    style={{ animationDelay: `${idx * 1.5}s` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: badge.color }} />
                    <span className="text-xs font-semibold text-[#F8FAFC] tracking-wide">
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col items-center justify-center gap-2 cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-[11px] font-medium tracking-[0.25em] text-[#A1A1AA] uppercase flex items-center gap-2">
            SCROLL TO EXPLORE
          </span>
          <div className="w-5 h-9 rounded-full border-2 border-[#756BFF]/40 flex items-start justify-center p-1 shadow-[0_0_15px_-3px_rgba(117,107,255,0.4)]">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
