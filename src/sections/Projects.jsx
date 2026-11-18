import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Globe, GraduationCap, Sparkles, Filter, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CreativePointSection from '../components/CreativePointSection';
import { nplusProjects, creativePointData, unifiedMentorProjects } from '../data/projects';

export default function Projects() {
  const [activeGroup, setActiveGroup] = useState('all'); // 'all' | 'nplus' | 'creative' | 'unified'

  const companyFilters = [
    { id: 'all', label: 'All Organizations', count: nplusProjects.length + unifiedMentorProjects.length + ' + 30 Sites' },
    { id: 'nplus', label: 'Nplus Technologies', count: `${nplusProjects.length} Projects` },
    { id: 'creative', label: 'Creative Point', count: '30+ Websites' },
    { id: 'unified', label: 'Unified Mentor', count: `${unifiedMentorProjects.length} Projects` },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 04. COMPLETE PROJECT SHOWCASE"
          title="PRODUCTION SYSTEMS &"
          highlight="ENGINEERED APPLICATIONS"
          subtitle="A comprehensive record of 11 full-stack applications and 30+ commercial websites engineered across mobility, food ordering, business operations, and analytics."
        />

        {/* Company Organization Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {companyFilters.map((tab) => {
            const isActive = activeGroup === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveGroup(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#756BFF] to-[#00D4FF] text-white shadow-[0_0_20px_-3px_rgba(0,212,255,0.5)] border border-transparent'
                    : 'bg-[#111827]/80 text-[#A1A1AA] hover:text-[#F8FAFC] border border-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-[#A1A1AA]'}`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-16">
          
          {/* =========================================================================
              GROUP 1: NPLUS TECHNOLOGIES (7 Projects)
              ========================================================================= */}
          {(activeGroup === 'all' || activeGroup === 'nplus') && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC]">
                        Nplus Technologies
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Full Stack Developer
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                      June 2025 – Present (1 Year 2 Months) • 7 Production Applications
                    </p>
                  </div>
                </div>
              </div>

              {/* 7 Nplus Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nplusProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              GROUP 2: CREATIVE POINT (30+ Websites Developed)
              ========================================================================= */}
          {(activeGroup === 'all' || activeGroup === 'creative') && (
            <div className="space-y-6">
              <CreativePointSection />
            </div>
          )}

          {/* =========================================================================
              GROUP 3: UNIFIED MENTOR PRIVATE LIMITED (4 Internship Projects)
              ========================================================================= */}
          {(activeGroup === 'all' || activeGroup === 'unified') && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC]">
                        Unified Mentor Private Limited
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                        Full Stack Developer Intern
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                      December 2024 – May 2025 (6 Months) • 4 Full-Stack Projects
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Unified Mentor Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {unifiedMentorProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
