import React from 'react';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const emailSubject = encodeURIComponent("Let's Discuss a Project – Azhagumalai Krishnan");
  const emailBody = encodeURIComponent(
    "Hello Azhagumalai,\n\nI visited your portfolio and would like to connect with you regarding a potential project or opportunity.\n\nI would love to discuss further details.\n\nBest regards,"
  );
  const mailtoUrl = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;

  const whatsappMessage = encodeURIComponent(
    "Hello Azhagumalai! I visited your portfolio and would like to connect with you regarding a project or professional opportunity."
  );
  const whatsappUrl = `https://wa.me/919361939076?text=${whatsappMessage}`;

  return (
    <footer className="relative bg-[#070A12] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#756BFF] via-[#00D4FF] to-[#8B5CF6] p-[1.5px] shadow-[0_0_20px_-3px_rgba(0,212,255,0.6)]">
                <div className="w-full h-full bg-[#0D1220] rounded-[10px] flex items-center justify-center">
                  <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#756BFF] text-sm">
                    AK
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#F8FAFC] tracking-wider uppercase">
                  {personalInfo.name}
                </h3>
                <span className="text-xs font-semibold text-[#00D4FF] tracking-widest uppercase block">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Engineering modern, responsive web experiences with React, Node.js, Express, and MongoDB. Focused on performance, architecture, and intuitive design.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D4FF] hover:bg-[#00D4FF]/10 text-[#A1A1AA] hover:text-[#00D4FF] flex items-center justify-center transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={mailtoUrl}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#756BFF] hover:bg-[#756BFF]/10 text-[#A1A1AA] hover:text-[#756BFF] flex items-center justify-center transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-400/10 text-[#A1A1AA] hover:text-emerald-400 flex items-center justify-center transition-all duration-300"
                aria-label="Phone"
              >
                <FaPhoneAlt className="w-3.5 h-3.5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#A1A1AA] hover:text-[#25D366] flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC]">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#756BFF]" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Direct Communication */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A1A1AA]">
              <div>
                <span className="block text-[10px] uppercase text-[#64748B]">Email</span>
                <a href={mailtoUrl} className="text-[#F8FAFC] hover:text-[#00D4FF] transition-colors font-mono">
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <span className="block text-[10px] uppercase text-[#64748B]">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-[#F8FAFC] hover:text-[#00D4FF] transition-colors font-mono">
                  {personalInfo.formattedPhone}
                </a>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded bg-[#10B981]/10 text-emerald-400 border border-[#10B981]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Status: Available
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <p className="flex items-center gap-1">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#F8FAFC] border border-white/10 hover:border-[#00D4FF] transition-all cursor-pointer group"
          >
            <span className="text-xs font-medium">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00D4FF] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
