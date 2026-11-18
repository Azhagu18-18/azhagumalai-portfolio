import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Utensils, 
  Car, 
  Building2, 
  CheckSquare, 
  TrendingUp, 
  GraduationCap, 
  Sparkles,
  Layers,
  Activity
} from 'lucide-react';

function ProjectVisual({ id, theme }) {
  // Tasteful abstract futuristic UI representations that do not falsely represent real screenshots
  if (id === 'food-app') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-[#1E1B4B] via-[#0F172A] to-[#070A12] p-4 relative overflow-hidden flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#FF6B6B]/20 border border-[#FF6B6B]/40 flex items-center justify-center">
              <Utensils className="w-4 h-4 text-[#FF6B6B]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F8FAFC]">Food Ordering HUD</div>
              <div className="text-[10px] text-[#A1A1AA] font-mono">Restaurant & Menu Engine</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            ACTIVE ORDERS
          </span>
        </div>

        {/* Abstract Menu & Order Simulation */}
        <div className="grid grid-cols-3 gap-2 z-10">
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-[10px] text-[#A1A1AA]">Order Status</div>
            <div className="text-xs font-bold text-[#FF6B6B]">In Kitchen</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-[10px] text-[#A1A1AA]">Delivery ETA</div>
            <div className="text-xs font-bold text-[#00D4FF]">18 Mins</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-[10px] text-[#A1A1AA]">Database</div>
            <div className="text-xs font-bold text-emerald-400">MongoDB Sync</div>
          </div>
        </div>

        {/* Background glow and graph lines */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF6B6B]/15 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === '23-cabs-xmoveon') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-[#082F49] via-[#0F172A] to-[#070A12] p-4 relative overflow-hidden flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/20 border border-[#00D4FF]/40 flex items-center justify-center">
              <Car className="w-4 h-4 text-[#00D4FF]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F8FAFC]">Mobility Dispatch Grid</div>
              <div className="text-[10px] text-[#A1A1AA] font-mono">23 Cabs / Xmoveon</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/30">
            FLEET ONLINE
          </span>
        </div>

        {/* Abstract GPS / Telemetry Simulation */}
        <div className="relative z-10 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm space-y-1.5">
          <div className="flex justify-between text-[11px]">
            <span className="text-[#A1A1AA]">Ride Dispatch Status</span>
            <span className="text-emerald-400 font-mono">EN ROUTE</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="w-3/4 h-full bg-gradient-to-r from-[#00D4FF] to-[#756BFF] rounded-full" />
          </div>
          <div className="flex justify-between text-[10px] text-[#A1A1AA] font-mono">
            <span>Pickup: City Terminal</span>
            <span>Driver Assigned: Yes</span>
          </div>
        </div>

        {/* Radial cyan map grid glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#00D4FF]/15 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  if (id === 'ckc-navn-vyd') {
    return (
      <div className="w-full h-48 sm:h-56 rounded-xl bg-gradient-to-br from-[#2E1065] via-[#0F172A] to-[#070A12] p-4 relative overflow-hidden flex flex-col justify-between border border-white/5">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#F8FAFC]">Enterprise Suite</div>
              <div className="text-[10px] text-[#A1A1AA] font-mono">CKC / Navn & Go / VYD</div>
            </div>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
            TYPESCRIPT
          </span>
        </div>

        {/* Operational Metrics Mock */}
        <div className="grid grid-cols-2 gap-2 z-10">
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-[10px] text-[#A1A1AA]">Logistics Pipelines</div>
            <div className="text-xs font-bold text-[#8B5CF6]">Active Flow</div>
          </div>
          <div className="p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
            <div className="text-[10px] text-[#A1A1AA]">Architecture</div>
            <div className="text-xs font-bold text-[#00D4FF]">Modular React</div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#8B5CF6]/15 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Internship Projects
  const getInternshipIcon = () => {
    if (id === 'todo-app') return <CheckSquare className="w-4 h-4 text-[#38BDF8]" />;
    if (id === 'expense-tracker') return <TrendingUp className="w-4 h-4 text-[#10B981]" />;
    return <GraduationCap className="w-4 h-4 text-[#F59E0B]" />;
  };

  return (
    <div className="w-full h-36 rounded-xl bg-[#0D1220] p-4 relative overflow-hidden flex flex-col justify-between border border-white/5">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
            {getInternshipIcon()}
          </div>
          <span className="text-xs font-mono text-[#F8FAFC]">{theme?.badge || 'Project'}</span>
        </div>
        <span className="text-[10px] font-mono text-[#A1A1AA]">MERN ARCHITECTURE</span>
      </div>
      <div className="z-10 flex items-center gap-2 text-xs text-[#CBD5E1]">
        <Activity className="w-3.5 h-3.5 text-[#00D4FF]" />
        <span>CRUD Lifecycle & REST Endpoints</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#756BFF]/10 to-transparent pointer-events-none" />
    </div>
  );
}

export default function ProjectCard({ project, index, isFeatured = true }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -5;
    const rotY = ((x - centerX) / centerX) * 5;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000 h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative h-full rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#00D4FF]/40 p-5 sm:p-6 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(117,107,255,0.2)] flex flex-col justify-between group"
      >
        {/* Dynamic Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.35 : 0,
            background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0, 212, 255, 0.2), rgba(117, 107, 255, 0.1), transparent 70%)`,
          }}
        />

        <div>
          {/* Visual Canvas Representation */}
          <div className="mb-5 overflow-hidden rounded-xl">
            <ProjectVisual id={project.id} theme={project.theme} />
          </div>

          {/* Badge & Category */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-mono text-[#00D4FF] tracking-wider uppercase">
              {project.category} PROJECT
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#A1A1AA]">
              {project.theme?.badge || 'Web Application'}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors mb-1">
            {project.title}
          </h3>
          <h4 className="text-xs sm:text-sm font-medium text-[#756BFF] mb-3">
            {project.subtitle}
          </h4>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed mb-4 font-normal">
            {project.description}
          </p>

          {/* Key Feature Bullets */}
          {project.features && (
            <div className="space-y-1.5 mb-5">
              {project.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#756BFF] shrink-0 mt-1.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & Action Links */}
        <div className="pt-4 border-t border-white/5 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#0D1220] border border-white/5 text-[#A1A1AA]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            {/* View Project button only when a real URL is available */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4FF] hover:underline"
              >
                <span>View Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-[11px] font-mono text-[#64748B] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Enterprise Production System
              </span>
            )}

            {/* GitHub button only when a real repository URL is available */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-[#A1A1AA] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            ) : null}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
