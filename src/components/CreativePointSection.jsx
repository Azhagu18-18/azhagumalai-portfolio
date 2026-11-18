import React from 'react';
import { 
  Globe, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Layout, 
  Monitor, 
  Smartphone, 
  Cpu 
} from 'lucide-react';
import { creativePointData } from '../data/projects';

export default function CreativePointSection() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#111827]/90 via-[#0D1220]/95 to-[#111827]/90 border border-white/10 p-6 sm:p-9 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] relative overflow-hidden">
      
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#756BFF]/15 via-[#00D4FF]/10 to-transparent pointer-events-none rounded-full blur-3xl" />

      <div className="relative z-10 space-y-8">
        
        {/* Top Header & Prominent Animated Statistic */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#756BFF]/15 border border-[#756BFF]/30 text-xs font-semibold text-[#00D4FF]">
              <Globe className="w-3.5 h-3.5" />
              <span>{creativePointData.company} • {creativePointData.role}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              Enterprise Web Portfolio & Production Deployments
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-2xl leading-relaxed">
              {creativePointData.summary}
            </p>
          </div>

          {/* Prominent Milestone Stat Counter */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#0D1220]/90 border border-[#00D4FF]/30 shadow-[0_0_30px_-5px_rgba(0,212,255,0.25)] shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D4FF]/20 to-[#756BFF]/20 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF]">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#756BFF] to-[#8B5CF6]">
                {creativePointData.statistic}
              </div>
              <div className="text-xs font-bold tracking-widest text-[#F8FAFC] uppercase">
                {creativePointData.statisticLabel}
              </div>
              <div className="text-[11px] font-mono text-[#A1A1AA]">
                {creativePointData.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Sectors & Domains Grid */}
        <div>
          <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF]" />
            <span>Website Sectors & Development Scope</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {creativePointData.domains.map((domain, dIdx) => (
              <div
                key={dIdx}
                className="p-4 sm:p-5 rounded-2xl bg-[#0D1220]/80 border border-white/5 hover:border-[#756BFF]/40 transition-colors space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#F8FAFC]">
                      {domain.title}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00D4FF]/10 text-[#00D4FF] font-semibold">
                      {domain.count}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed mb-3">
                    {domain.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {domain.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#CBD5E1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Development Responsibilities */}
        <div className="pt-4 border-t border-white/10">
          <h4 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider mb-3">
            Key Technical Responsibilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {creativePointData.responsibilities.map((resp, rIdx) => (
              <div key={rIdx} className="flex items-start gap-2.5 text-xs text-[#CBD5E1]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{resp}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
