import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import FloatingContactIcons from './components/FloatingContactIcons';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import { useScrollSpy } from './hooks/useScrollSpy';

const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const activeSection = useScrollSpy(sectionIds, 150);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070A12] text-[#F8FAFC] selection:bg-[#756BFF]/30 selection:text-[#00D4FF]">
      {/* High-End Agency Custom Cursor */}
      <CustomCursor />

      {/* Atmospheric Animated Background & Lighting */}
      <AnimatedBackground />

      {/* Fixed Floating Contact Icons (Left: Email | Right: Call, WhatsApp, Back to Top) */}
      <FloatingContactIcons />

      {/* Futuristic Floating Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Futuristic Footer */}
      <Footer />
    </div>
  );
}
