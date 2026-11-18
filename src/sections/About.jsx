import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Terminal
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  const cards = [
    {
      icon: Layers,
      title: "1.5+ Years Experience",
      subtitle: "Professional & Internship Record",
      desc: "Proven track record delivering production-grade web applications at Nplus Technologies, Creative Point, and Unified Mentor.",
      accent: "#00D4FF",
      border: "rgba(0, 212, 255, 0.25)"
    },
    {
      icon: Code,
      title: "Frontend Engineering",
      subtitle: "React.js & TypeScript UI",
      desc: "Architecting modular component hierarchies, cross-device responsive pages, and high-performance interactive interfaces.",
      accent: "#756BFF",
      border: "rgba(117, 107, 255, 0.25)"
    },
    {
      icon: Server,
      title: "Backend & REST APIs",
      subtitle: "Node.js, Express & JWT",
      desc: "Implementing secure authentication workflows, token authorization, RESTful endpoints, and backend business logic.",
      accent: "#8B5CF6",
      border: "rgba(139, 92, 246, 0.25)"
    },
    {
      icon: Database,
      title: "Database Modeling",
      subtitle: "MongoDB & MySQL Operations",
      desc: "Structuring reliable document schemas, relational tables, CRUD lifecycles, and optimized query operations.",
      accent: "#10B981",
      border: "rgba(16, 185, 129, 0.25)"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 01. ABOUT ME"
          title="ENGINEERING INTUITIVE INTERFACES &"
          highlight="RESILIENT SYSTEMS"
          subtitle="A disciplined full-stack engineer driven by responsive precision, robust server architectures, and clean maintainable code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Narrative Journey */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Terminal Style Header Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-[#0D1220]/80 border border-white/10 p-5 backdrop-blur-md"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-[#A1A1AA] ml-2">developer.identity</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-[#00D4FF] bg-[#00D4FF]/10 px-2 py-0.5 rounded">
                  verified
                </span>
              </div>
              <p className="text-sm font-mono text-[#A1A1AA] leading-relaxed">
                <span className="text-[#00D4FF]">const</span> developer = &#123;<br />
                &nbsp;&nbsp;name: <span className="text-emerald-400">"{personalInfo.name}"</span>,<br />
                &nbsp;&nbsp;role: <span className="text-emerald-400">"{personalInfo.title}"</span>,<br />
                &nbsp;&nbsp;experience: <span className="text-amber-400">"{personalInfo.experienceLabel}"</span>,<br />
                &nbsp;&nbsp;stack: [<span className="text-purple-400">"React"</span>, <span className="text-purple-400">"Node"</span>, <span className="text-purple-400">"Express"</span>, <span className="text-purple-400">"MongoDB"</span>]<br />
                &#125;;
              </p>
            </motion.div>

            {/* Development Journey */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#00D4FF]" />
                <span>My Development Journey</span>
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base font-normal">
                {personalInfo.about.journey}
              </p>
            </motion.div>

            {/* Technical Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#756BFF]" />
                <span>Technical Interests & Focus</span>
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base font-normal">
                {personalInfo.about.interests}
              </p>
            </motion.div>

            {/* Engineering Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>My Engineering Approach</span>
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base font-normal">
                {personalInfo.about.approach}
              </p>
            </motion.div>

            {/* Verification Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {[
                "100% Responsive UI Layouts",
                "RESTful API Integration",
                "JWT Secure Authentication",
                "MongoDB Schema Optimization",
                "Reusable Component Systems",
                "Cross-Browser Compatibility"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#F8FAFC]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#00D4FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Information Cards & Ecosystem */}
          <div className="lg:col-span-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-[#111827]/70 border border-white/10 hover:border-[#00D4FF]/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${card.accent}25 0%, transparent 80%)`,
                        border: `1px solid ${card.border}`
                      }}
                    >
                      <Icon className="w-5 h-5" style={{ color: card.accent }} />
                    </div>
                    <span className="text-[11px] font-semibold text-[#A1A1AA] uppercase tracking-wider block mb-1">
                      {card.subtitle}
                    </span>
                    <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Technology Ecosystem Showcase Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0D1220]/90 to-[#111827]/90 border border-white/10 backdrop-blur-md relative overflow-hidden"
            >
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00D4FF]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                      Core Technology Stack Ecosystem
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#756BFF]">MERN + TypeScript</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { name: 'React.js', color: '#00D4FF' },
                    { name: 'Node.js', color: '#10B981' },
                    { name: 'Express.js', color: '#CBD5E1' },
                    { name: 'MongoDB', color: '#10B981' },
                    { name: 'TypeScript', color: '#38BDF8' },
                    { name: 'JavaScript ES6+', color: '#FACC15' },
                    { name: 'Tailwind CSS', color: '#38BDF8' },
                    { name: 'REST APIs', color: '#8B5CF6' },
                    { name: 'JWT Auth', color: '#EC4899' },
                    { name: 'MySQL', color: '#F97316' },
                    { name: 'PHP', color: '#818CF8' },
                    { name: 'WordPress', color: '#38BDF8' },
                    { name: 'Git & GitHub', color: '#F43F5E' },
                    { name: 'Postman', color: '#FB923C' }
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1F2937]/70 border border-white/5 text-[#F8FAFC] hover:border-[#00D4FF]/40 hover:bg-[#1F2937] transition-colors"
                    >
                      <span className="inline-block w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: tech.color }} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ambient corner glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#756BFF]/15 rounded-full blur-2xl pointer-events-none" />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
