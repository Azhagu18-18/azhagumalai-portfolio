import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 03. CAREER TIMELINE"
          title="PROFESSIONAL EXPERIENCE &"
          highlight="INDUSTRY RECORD"
          subtitle="A track record of engineering scalable frontend interfaces, REST API solutions, and responsive web products."
        />

        {/* Vertical Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          
          {/* Central / Left Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#00D4FF] via-[#756BFF] to-[#8B5CF6]/20 shadow-[0_0_15px_rgba(0,212,255,0.5)]" />

          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative w-8 h-8 rounded-full bg-[#0D1220] border-2 border-[#00D4FF] shadow-[0_0_15px_#00D4FF] flex items-center justify-center">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#756BFF] animate-pulse" />
                    </div>
                  </div>

                  {/* Spacer for desktop alignment */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12' : 'sm:pl-12'
                    } w-full`}
                  >
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#00D4FF]/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] group">
                      
                      {/* Duration & Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] px-2.5 py-1 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.duration}</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#A1A1AA] uppercase px-2 py-0.5 rounded bg-white/5">
                          {exp.badge}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm sm:text-base font-semibold text-[#756BFF] mb-3">
                        {exp.company}
                      </h4>

                      {/* Brief description */}
                      <p className="text-xs sm:text-sm text-[#A1A1AA] mb-4 leading-relaxed font-normal">
                        {exp.description}
                      </p>

                      {/* Responsibilities bullets */}
                      <ul className="space-y-2 mb-5">
                        {exp.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CBD5E1]">
                            <ChevronRight className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                            <span className="leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-[#0D1220] border border-white/5 text-[#A1A1AA] group-hover:text-[#F8FAFC] transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
