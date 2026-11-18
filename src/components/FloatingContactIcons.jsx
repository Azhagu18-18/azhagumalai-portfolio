import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function FloatingContactIcons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const emailSubject = encodeURIComponent("Let's Discuss a Project – Azhagumalai Krishnan");
  const emailBody = encodeURIComponent(
    "Hello Azhagumalai,\n\nI visited your portfolio and would like to connect with you regarding a potential project or opportunity.\n\nI would love to discuss further details.\n\nBest regards,"
  );
  const mailtoUrl = `mailto:malaiazhagu750@gmail.com?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    "Hello Azhagumalai! I visited your portfolio and would like to connect with you regarding a project or professional opportunity."
  );
  const whatsappUrl = `https://wa.me/919361939076?text=${whatsappMessage}`;

  return (
    <>
      {/* =========================================================================
          LEFT SIDE — FIXED EMAIL ICON
          ========================================================================= */}
      <aside
        aria-label="Contact Azhagumalai Krishnan via Email"
        className="fixed left-3 sm:left-6 top-[55%] -translate-y-1/2 z-40 pointer-events-auto"
      >
        <div className="relative group">
          <a
            href={mailtoUrl}
            aria-label="Send Me an Email (malaiazhagu750@gmail.com)"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1220]/85 border border-[#756BFF]/40 hover:border-[#00D4FF] backdrop-blur-xl flex items-center justify-center text-[#00D4FF] hover:text-white transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_0_20px_-3px_rgba(117,107,255,0.35)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]"
          >
            <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
          </a>

          {/* Accessible Tooltip (Right-aligned relative to Left icon) */}
          <div
            role="tooltip"
            className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-white/10 text-xs font-semibold text-[#F8FAFC] tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 shadow-[0_10px_20px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            Send Me an Email
            {/* Tooltip pointer */}
            <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#111827]" />
          </div>
        </div>
      </aside>

      {/* =========================================================================
          RIGHT SIDE — FIXED CALL, WHATSAPP & BACK TO TOP ICONS
          ========================================================================= */}
      <aside
        aria-label="Quick Communication and Navigation"
        className="fixed right-3 sm:right-6 top-[55%] -translate-y-1/2 z-40 flex flex-col items-center gap-3 sm:gap-3.5 pointer-events-auto"
      >
        {/* 1. CALL ICON */}
        <div className="relative group">
          <a
            href="tel:+919361939076"
            aria-label="Call Me at +91 9361939076"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1220]/85 border border-[#756BFF]/40 hover:border-[#00D4FF] backdrop-blur-xl flex items-center justify-center text-[#756BFF] hover:text-[#00D4FF] transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_0_20px_-3px_rgba(117,107,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]"
          >
            <FaPhoneAlt className="w-4 h-4 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
          </a>

          {/* Accessible Tooltip (Left-aligned relative to Right icon) */}
          <div
            role="tooltip"
            className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-white/10 text-xs font-semibold text-[#F8FAFC] tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 shadow-[0_10px_20px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            Call Me
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111827]" />
          </div>
        </div>

        {/* 2. WHATSAPP ICON */}
        <div className="relative group">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Azhagumalai Krishnan"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1220]/85 border border-emerald-500/40 hover:border-[#25D366] backdrop-blur-xl flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366]/20 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_0_20px_-3px_rgba(37,211,102,0.35)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12]"
          >
            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
          </a>

          {/* Accessible Tooltip */}
          <div
            role="tooltip"
            className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-white/10 text-xs font-semibold text-[#F8FAFC] tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 shadow-[0_10px_20px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            Chat on WhatsApp
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111827]" />
          </div>
        </div>

        {/* 3. BACK TO TOP ICON (Visible on scroll) */}
        <div
          className={`relative group transition-all duration-300 ${
            showBackToTop
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <button
            onClick={scrollToTop}
            aria-label="Back to Top of Page"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#0D1220]/85 border border-white/10 hover:border-[#00D4FF] backdrop-blur-xl flex items-center justify-center text-[#CBD5E1] hover:text-[#00D4FF] transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7)] hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070A12] cursor-pointer"
          >
            <FaArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
          </button>

          {/* Accessible Tooltip */}
          <div
            role="tooltip"
            className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 rounded-lg bg-[#111827]/95 border border-white/10 text-xs font-semibold text-[#F8FAFC] tracking-wide whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 shadow-[0_10px_20px_rgba(0,0,0,0.8)] backdrop-blur-md"
          >
            Back to Top
            <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#111827]" />
          </div>
        </div>
      </aside>
    </>
  );
}
