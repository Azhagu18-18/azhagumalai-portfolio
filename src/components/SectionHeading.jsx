import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  className = ''
}) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {/* Category Pill / Tag */}
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111827]/80 border border-[#756BFF]/30 text-[#00D4FF] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(117,107,255,0.3)]`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span>{tag}</span>
        </motion.div>
      )}

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight"
      >
        {title}{' '}
        {highlight && (
          <span className="text-gradient-electric">
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Cyber accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`h-[2px] w-24 bg-gradient-to-r from-[#00D4FF] via-[#756BFF] to-transparent mt-6 ${isCenter ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
