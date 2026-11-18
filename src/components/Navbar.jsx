import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'bg-[#0D1220]/80 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(117,107,255,0.2)]'
              : 'bg-[#0D1220]/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#756BFF] via-[#00D4FF] to-[#8B5CF6] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_-2px_rgba(0,212,255,0.5)]">
              <div className="w-full h-full bg-[#0D1220] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#756BFF] text-sm tracking-wider">
                  AK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
                AZHAGUMALAI K.
              </span>
              <span className="text-[10px] font-medium text-[#A1A1AA] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                FULL STACK DEV
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-[#111827]/60 p-1.5 rounded-xl border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#F8FAFC] font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-[#756BFF]/30 to-[#00D4FF]/20 rounded-lg border border-[#00D4FF]/40 shadow-[0_0_15px_-3px_rgba(0,212,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.resumePath}
              download="Azhagumalai_Krishnan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#756BFF] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#00D4FF] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(117,107,255,0.6)] hover:shadow-[0_0_25px_-2px_rgba(0,212,255,0.6)] active:scale-95 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Azhagumalai_Krishnan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center justify-center p-2 rounded-xl text-white bg-[#756BFF]/30 border border-[#756BFF]/50"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4 text-[#00D4FF]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F8FAFC] hover:bg-white/10 hover:text-[#00D4FF] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto"
          >
            <div className="bg-[#0D1220]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(117,107,255,0.2)]">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-[#756BFF]/25 to-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30 font-semibold'
                          : 'text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />}
                    </a>
                  );
                })}

                <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={personalInfo.resumePath}
                    download="Azhagumalai_Krishnan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#756BFF] to-[#8B5CF6] shadow-[0_0_20px_-3px_rgba(117,107,255,0.6)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Official Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
