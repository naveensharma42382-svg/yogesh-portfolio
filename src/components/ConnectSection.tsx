import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare, 
  Check, 
  Copy, 
  Clock, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Sparkles, 
  PhoneCall 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ConnectSection: React.FC = () => {
  const { profile } = usePortfolio();
  const [copied, setCopied] = useState(false);
  const [currentTimeJaipur, setCurrentTimeJaipur] = useState('');

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('video-editing');
  const [budget, setBudget] = useState('moderate');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTimeJaipur(new Intl.DateTimeFormat('en-IN', options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Yogesh! I checked your portfolio website and would like to discuss a project with you regarding ${service}.`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-[#090614]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
              LET'S WORK TOGETHER
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            READY TO CREATE CONTENT <br />
            <span className="purple-gradient-text">THAT COMMANDS ATTENTION?</span>
          </h3>
          <p className="mt-4 text-slate-300 text-base max-w-2xl">
            Whether you have a specific reel campaign in mind, need full-time YouTube video editing, or want to audit your social media growth strategy, let's connect.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/20 space-y-6">
              
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                  DIRECT INBOX
                </span>
                <div className="flex items-center justify-between mt-2 p-3 bg-purple-950/40 rounded-xl border border-purple-800/40">
                  <a
                    href={`mailto:${profile.contactEmail}`}
                    className="text-sm font-semibold text-white hover:text-purple-300 transition-colors select-all truncate mr-2 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{profile.contactEmail}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div>
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
                  INSTANT MESSAGING
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat Directly On WhatsApp</span>
                </a>
              </div>

              {/* Location & Local Time in Jaipur */}
              <div className="pt-4 border-t border-purple-900/30 space-y-3">
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 text-xs">
                  <Clock className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Local Time (Jaipur, IST): </span>
                  <span className="font-mono text-purple-300 font-semibold">{currentTimeJaipur || '17:54 IST'}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-purple-900/30">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  CONNECT ON SOCIAL CHANNELS:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={profile.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
                    title="YouTube (5,800+ subs)"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
                    title="X / Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-purple-500/25">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-white">
                    Proposal Request Received!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {name || 'there'}. Yogesh Sharma will review your requirements and respond within 24 hours with an actionable roadmap.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-white bg-purple-950/60 border border-purple-800/40 rounded-xl"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma or Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d091e] border border-purple-900/40 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0d091e] border border-purple-900/40 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d091e] border border-purple-900/40 text-sm text-white focus:outline-none focus:border-purple-400"
                      >
                        <option value="video-editing">High-Retention Video Editing</option>
                        <option value="short-form-reels">Short-Form Reels / Shorts Package</option>
                        <option value="youtube-long-form">YouTube Long-Form Production</option>
                        <option value="social-media-growth">Social Media Strategy & Growth</option>
                        <option value="digital-marketing">Digital Marketing & Paid Campaigns</option>
                        <option value="full-creative-retainer">Full Creative Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                        Estimated Budget Scale
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0d091e] border border-purple-900/40 text-sm text-white focus:outline-none focus:border-purple-400"
                      >
                        <option value="starter">Starter / Single Project</option>
                        <option value="moderate">Monthly Retainer (Standard)</option>
                        <option value="growth">Omnichannel Scale (High Volume)</option>
                        <option value="custom">Custom Commercial Enterprise</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-1.5">
                      Project Details & Vision
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your channel or brand, current bottlenecks, desired timeline, or reference links..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0d091e] border border-purple-900/40 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-xl shadow-purple-900/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {submitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Guaranteed response within 24 hours. No obligation.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
