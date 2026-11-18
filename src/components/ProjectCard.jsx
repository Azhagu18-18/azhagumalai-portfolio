import React, { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Activity,
  Cpu,
  Car,
  Utensils,
  Building2,
  CheckSquare,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

function ProjectVisual({ id, accent = '#00D4FF', badge }) {
  // Bespoke abstract futuristic UI representation for each project
  const getIcon = () => {
    if (id.includes('food')) return <Utensils className="w-4 h-4 text-[#FF6B6B]" />;
    if (id.includes('taxi') || id.includes('23-cabs') || id.includes('navn') || id.includes('xmoveon')) {
      return <Car className="w-4 h-4 text-[#00D4FF]" />;
    }
    if (id.includes('ckc') || id.includes('vyd')) {
      return <Building2 className="w-4 h-4 text-[#8B5CF6]" />;
    }
    if (id.includes('todo')) return <CheckSquare className="w-4 h-4 text-[#38BDF8]" />;
    if (id.includes('expense')) return <TrendingUp className="w-4 h-4 text-[#10B981]" />;
    if (id.includes('student')) return <GraduationCap className="w-4 h-4 text-[#F59E0B]" />;
    return <Layers className="w-4 h-4 text-[#00D4FF]" />;
  };

  return (
    <div className="w-full h-36 sm:h-40 rounded-xl bg-gradient-to-br from-[#0D1220] via-[#111827] to-[#070A12] p-4 relative overflow-hidden flex flex-col justify-between border border-white/5">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: `${accent}15`, border: `1px solid ${accent}30` }}
          >
            {getIcon()}
          </div>
          <div>
            <div className="text-xs font-bold text-[#F8FAFC] tracking-wide">{badge || 'Production App'}</div>
            <div className="text-[10px] text-[#A1A1AA] font-mono">React • Node • Express • MongoDB</div>
          </div>
        </div>
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-sm"
          style={{ backgroundColor: `${accent}15`, color: accent, border: `1px solid ${accent}30` }}
        >
          LIVE SYSTEM
        </span>
      </div>

      <div className="relative z-10 p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono">
        <span className="text-[#A1A1AA] flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>REST API / DB Workflow</span>
        </span>
        <span className="text-emerald-400 font-semibold">Active Pipeline</span>
      </div>

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top right, ${accent}15 0%, transparent 70%)`
        }}
      />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-2xl bg-[#111827]/85 border border-white/10 hover:border-[#00D4FF]/40 p-5 sm:p-6 backdrop-blur-md transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),0_0_20px_-5px_rgba(117,107,255,0.2)] flex flex-col justify-between group">
      <div>
        {/* Abstract Visual Header */}
        <div className="mb-4">
          <ProjectVisual id={project.id} accent={project.accent} badge={project.badge} />
        </div>

        {/* Company & Category Label */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-[11px] font-mono text-[#00D4FF] uppercase tracking-wider">
            {project.company}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A1A1AA]">
            {project.badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
          {project.title}
        </h3>
        <h4 className="text-xs font-semibold text-[#756BFF] mb-3">
          {project.subtitle}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Expandable Key Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:text-white transition-colors cursor-pointer py-1"
            >
              <span>{isExpanded ? 'Hide Key Responsibilities' : `Key Responsibilities (${project.responsibilities.length})`}</span>
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {isExpanded && (
              <div className="mt-3 p-3.5 rounded-xl bg-[#0D1220]/90 border border-white/5 space-y-2 text-xs text-[#CBD5E1]">
                {project.responsibilities.map((resp, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{resp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Technologies & Status */}
      <div className="pt-4 border-t border-white/5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#0D1220] border border-white/5 text-[#A1A1AA]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Verified Production Delivery
          </span>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#00D4FF] hover:underline flex items-center gap-1"
            >
              <span>View</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
