import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects, internshipProjects } from '../data/projects';

export default function Projects() {
  const [filter, setFilter] = useState('all'); // 'all' | 'featured' | 'internship'

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 04. FEATURED WORK"
          title="PRODUCTION SYSTEMS &"
          highlight="SOFTWARE PROJECTS"
          subtitle="Real-world web applications engineered across mobility, food ordering, business logistics, and task management."
        />

        {/* Filter Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 sm:mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
              filter === 'all'
                ? 'bg-gradient-to-r from-[#756BFF] to-[#00D4FF] text-white shadow-[0_0_20px_-3px_rgba(0,212,255,0.5)] border border-transparent'
                : 'bg-[#111827]/70 text-[#A1A1AA] hover:text-[#F8FAFC] border border-white/5'
            }`}
          >
            All Work ({featuredProjects.length + internshipProjects.length})
          </button>
          <button
            onClick={() => setFilter('featured')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
              filter === 'featured'
                ? 'bg-gradient-to-r from-[#756BFF] to-[#00D4FF] text-white shadow-[0_0_20px_-3px_rgba(0,212,255,0.5)] border border-transparent'
                : 'bg-[#111827]/70 text-[#A1A1AA] hover:text-[#F8FAFC] border border-white/5'
            }`}
          >
            Featured Platforms ({featuredProjects.length})
          </button>
          <button
            onClick={() => setFilter('internship')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
              filter === 'internship'
                ? 'bg-gradient-to-r from-[#756BFF] to-[#00D4FF] text-white shadow-[0_0_20px_-3px_rgba(0,212,255,0.5)] border border-transparent'
                : 'bg-[#111827]/70 text-[#A1A1AA] hover:text-[#F8FAFC] border border-white/5'
            }`}
          >
            Internship Systems ({internshipProjects.length})
          </button>
        </div>

        {/* Featured Projects Grid */}
        {(filter === 'all' || filter === 'featured') && (
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#00D4FF]" />
              <h3 className="text-lg font-bold text-[#F8FAFC] tracking-wide uppercase">
                Featured Production Applications
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Internship Projects Grid */}
        {(filter === 'all' || filter === 'internship') && (
          <div>
            <div className="flex items-center gap-2 mb-6 pt-4">
              <GraduationCap className="w-4 h-4 text-[#756BFF]" />
              <h3 className="text-lg font-bold text-[#F8FAFC] tracking-wide uppercase">
                Internship & Foundation Applications
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {internshipProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 3} isFeatured={false} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
