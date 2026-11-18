import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle, University } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 05. ACADEMIC FOUNDATION"
          title="COMPUTER SCIENCE &"
          highlight="ACADEMIC CREDENTIALS"
          subtitle="Rigorous foundations in computer science theory, algorithms, software engineering principles, and databases."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#111827]/90 via-[#0D1220]/90 to-[#111827]/90 border border-white/10 p-7 sm:p-10 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(117,107,255,0.2)] group hover:border-[#00D4FF]/40 transition-colors"
        >
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00D4FF]/20 to-transparent pointer-events-none rounded-bl-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#756BFF]/20 to-transparent pointer-events-none rounded-tr-3xl" />

          <div className="relative z-10">
            
            {/* Header Badge & Duration */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-xs font-semibold text-[#00D4FF]">
                <GraduationCap className="w-4 h-4" />
                <span>Undergraduate Degree</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] bg-white/5 px-3 py-1.5 rounded-lg">
                <Calendar className="w-3.5 h-3.5 text-[#756BFF]" />
                <span>{education.duration}</span>
              </div>
            </div>

            {/* Degree Title & Institution */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight group-hover:text-[#00D4FF] transition-colors mb-2">
              {education.degree}
            </h3>

            <div className="space-y-1 mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-[#CBD5E1]">
                {education.institution}
              </h4>
              <p className="text-sm text-[#756BFF] font-medium flex items-center gap-1.5">
                <University className="w-4 h-4" />
                <span>Affiliated with {education.university}</span>
              </p>
            </div>

            {/* Academic Highlights */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <h5 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider">
                CORE CURRICULUM & PRINCIPLES
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Object-Oriented Programming & Principles",
                  "Data Structures & Algorithmic Foundations",
                  "Database Management & Relational Architecture",
                  "Modern Web Development Methodologies",
                  "Software Engineering Lifecycle & Debugging",
                  "Operating Systems & Network Architecture"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
