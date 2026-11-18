import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Globe, Wrench, Sparkles, Filter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';
import { skillCategories } from '../data/skills';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'cms', label: 'CMS' },
    { id: 'tools', label: 'Tools' },
  ];

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 02. TECHNICAL SKILLS"
          title="PRODUCTION TECH STACK &"
          highlight="ENGINEERING TOOLKIT"
          subtitle="Real-world technologies and frameworks utilized across production systems, REST API architectures, and dynamic web interfaces."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {filterTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 backdrop-blur-md cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#756BFF] to-[#00D4FF] text-white shadow-[0_0_20px_-3px_rgba(0,212,255,0.5)] border border-transparent'
                    : 'bg-[#111827]/70 text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-[#172033] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              className={category.id === 'frontend' && activeTab === 'all' ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <SkillCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-4 rounded-xl bg-[#0D1220]/60 border border-white/5 text-center max-w-2xl mx-auto backdrop-blur-sm"
        >
          <p className="text-xs text-[#A1A1AA] font-mono">
            <span className="text-[#00D4FF] font-semibold">NOTE:</span> All listed skills represent verified technologies extracted directly from production work experience and verified technical deliverables.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
