import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import { personalInfo } from '../data/personalInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // 'submitted' | 'error' | null
  const [validationErrors, setValidationErrors] = useState({});

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim()) errors.message = 'Please enter your message';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Functional mailto fallback without fake database success
      const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      
      // Inform user honestly and launch mailto
      setFormStatus('launched');
      window.location.href = mailtoUrl;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (validationErrors[e.target.name]) {
      setValidationErrors({ ...validationErrors, [e.target.name]: null });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          tag="// 06. INITIATE CONNECTION"
          title="HAVE A PROJECT IN MIND?"
          highlight=""
          subtitle="Let's connect and turn great ideas into meaningful digital experiences."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                Direct Contacts
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Reach out for full-time engineering roles, frontend or backend projects, or collaborative development inquiries.
              </p>
            </div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#00D4FF]/40 backdrop-blur-md transition-all group"
            >
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 flex-1 min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/25 flex items-center justify-center text-[#00D4FF] group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-[#A1A1AA] uppercase">Email Address</div>
                    <div className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Phone Card (Click-to-Call) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#756BFF]/40 backdrop-blur-md transition-all group"
            >
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#756BFF]/10 border border-[#756BFF]/25 flex items-center justify-center text-[#756BFF] group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#A1A1AA] uppercase">Phone & WhatsApp</div>
                    <div className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-[#00D4FF] transition-colors">
                      {personalInfo.formattedPhone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#00D4FF] px-2.5 py-1 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20">
                  Call Now
                </span>
              </a>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl bg-[#111827]/80 border border-white/10 hover:border-[#0A66C2]/50 backdrop-blur-md transition-all group"
            >
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center text-[#38BDF8] group-hover:scale-105 transition-transform shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#A1A1AA] uppercase">Professional Profile</div>
                    <div className="text-sm sm:text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                      Azhagumalai Krishnan
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#38BDF8] transition-colors" />
              </a>
            </motion.div>

            {/* Availability Box */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 via-[#0D1220] to-[#111827] border border-emerald-500/20 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-xs text-[#CBD5E1]">
                Actively available for Full Stack, Frontend & Backend engineering roles.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-7 sm:p-9 rounded-3xl bg-[#111827]/90 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#00D4FF]" />
                <h3 className="text-xl font-bold text-[#F8FAFC]">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 uppercase tracking-wider font-mono">
                      Your Name <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D1220] border text-[#F8FAFC] text-sm placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#00D4FF] transition-all ${
                        validationErrors.name ? 'border-rose-500' : 'border-white/10 focus:border-[#00D4FF]'
                      }`}
                    />
                    {validationErrors.name && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {validationErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 uppercase tracking-wider font-mono">
                      Your Email <span className="text-[#00D4FF]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0D1220] border text-[#F8FAFC] text-sm placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#00D4FF] transition-all ${
                        validationErrors.email ? 'border-rose-500' : 'border-white/10 focus:border-[#00D4FF]'
                      }`}
                    />
                    {validationErrors.email && (
                      <span className="text-[11px] text-rose-400 mt-1 block">
                        {validationErrors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 uppercase tracking-wider font-mono">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full Stack Developer Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-[#0D1220] border border-white/10 focus:border-[#00D4FF] text-[#F8FAFC] text-sm placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#00D4FF] transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5 uppercase tracking-wider font-mono">
                    Message <span className="text-[#00D4FF]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, timeline, or engineering opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#0D1220] border text-[#F8FAFC] text-sm placeholder-[#64748B] focus:outline-none focus:ring-1 focus:ring-[#00D4FF] transition-all resize-none ${
                      validationErrors.message ? 'border-rose-500' : 'border-white/10 focus:border-[#00D4FF]'
                    }`}
                  />
                  {validationErrors.message && (
                    <span className="text-[11px] text-rose-400 mt-1 block">
                      {validationErrors.message}
                    </span>
                  )}
                </div>

                {/* Form feedback status message */}
                {formStatus === 'launched' && (
                  <div className="p-3.5 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-xs text-[#00D4FF] flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>
                      Drafted in your default email client. If it did not launch automatically, write directly to <a href={`mailto:${personalInfo.email}`} className="underline font-bold text-white">{personalInfo.email}</a>.
                    </span>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </form>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
