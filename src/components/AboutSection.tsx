import React from 'react';
import { 
  MapPin, 
  Sparkles, 
  Camera, 
  Video, 
  TrendingUp, 
  CheckCircle2, 
  Edit3, 
  Layers, 
  Award, 
  Terminal,
  Zap
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const AboutSection: React.FC = () => {
  const { profile, openAdmin } = usePortfolio();

  const toolStack = [
    { name: 'Adobe Premiere Pro', category: 'Video Editing', level: 'Mastery' },
    { name: 'DaVinci Resolve', category: 'Color & Grading', level: 'Advanced' },
    { name: 'After Effects', category: 'Motion Graphics', level: 'Proficient' },
    { name: 'Meta Ads Manager', category: 'Paid Marketing', level: 'Advanced' },
    { name: 'CapCut Pro', category: 'Short-Form Reels', level: 'Mastery' },
    { name: 'Photoshop', category: 'High-CTR Thumbnails', level: 'Advanced' },
    { name: 'Google Analytics 4', category: 'Performance', level: 'Proficient' },
    { name: 'Notion Systems', category: 'Content Systems', level: 'Advanced' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#07050d]">
      {/* Subtle purple ambient gradient */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
              ABOUT ME
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CREATIVE THINKING. <br className="hidden sm:inline" />
            <span className="purple-gradient-text">DIGITAL SKILLS. REAL-WORLD LEARNING.</span>
          </h3>
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Card & Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative glass-panel rounded-2xl p-4 sm:p-6 border border-purple-500/20 group">
              {/* Photo Frame */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#180f2d] via-[#100a20] to-[#080512] border border-purple-500/30 flex items-center justify-center group/card">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={profile.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if URL is invalid or deleted
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover/card:scale-102 transition-transform duration-500"
                  />
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
                    {/* Background ambient radial glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18)_0%,transparent_70%)] pointer-events-none" />
                    
                    {/* Subtle aesthetic grid */}
                    <div 
                      className="absolute inset-0 opacity-[0.06] pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(rgba(216, 180, 254, 0.5) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px',
                      }}
                    />

                    {/* Bold Modern Monogram */}
                    <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-purple-900/60 via-purple-700/30 to-indigo-600/20 border border-purple-400/40 flex items-center justify-center shadow-2xl purple-glow-sm mb-4">
                      <span className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white font-heavitas bg-gradient-to-b from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
                        YS
                      </span>
                    </div>

                    <p className="relative z-10 text-xs font-mono tracking-widest text-purple-300 uppercase font-semibold">
                      YOGESH SHARMA · JAIPUR
                    </p>
                    <p className="relative z-10 text-[11px] text-slate-400 mt-1 max-w-[220px]">
                      Creator & Marketer Portfolio
                    </p>

                    {/* Upload prompt button */}
                    <button
                      onClick={openAdmin}
                      className="relative z-10 mt-4 px-4 py-2 rounded-xl bg-purple-600/80 hover:bg-purple-600 text-white text-xs font-bold tracking-wide transition-all shadow-lg shadow-purple-950/60 flex items-center gap-1.5 active:scale-95"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Upload Your Photo</span>
                    </button>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Admin Quick Edit Trigger (top right) */}
                <button
                  onClick={openAdmin}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-black/70 hover:bg-purple-600/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-85 hover:opacity-100 flex items-center gap-1.5 text-xs z-20"
                  title="Upload or change photo via Admin Dashboard"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-medium">Upload Photo</span>
                </button>

                {/* Profile Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left z-20">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                    {profile.name}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-purple-300 mt-0.5">
                    {profile.tagline}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              {/* Status / Availability Bar */}
              <div className="mt-4 pt-4 border-t border-purple-900/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-slate-300 font-medium">Available for Creative Projects</span>
                </div>
                <span className="text-purple-300 font-mono text-[11px]">Jaipur, RJ (IST)</span>
              </div>
            </div>

            {/* Quick Proof Box */}
            <div className="glass-panel rounded-2xl p-5 border border-purple-500/15 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-bold tracking-wider text-purple-200 uppercase">
                  CREATIVE PHILOSOPHY
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed italic">
                "Attention is the currency of the digital age. Good editing isn't just cutting footage — it's curating emotion, pacing rhythm, and giving viewers a reason to care every single second."
              </p>
            </div>
          </div>

          {/* Right Column: Bio, Journey & Tool Matrix */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Detailed Bio Prose */}
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <p className="text-lg text-white font-medium">
                I am a multidisciplinary creator rooted in Jaipur, Rajasthan, operating at the intersection of cinematic video production, short-form viral engineering, and performance digital marketing.
              </p>
              <p>
                Over the past 1.5 years, I built and scaled my own content ecosystem from zero to <strong>5,800+ engaged YouTube subscribers</strong> and generated more than <strong>1.8 million organic video views</strong>. This real-world journey taught me what actually moves the needle in modern algorithms: not expensive vanity equipment, but clear storytelling, sharp hooks, and psychological audience retention.
              </p>
              <p>
                Today, I collaborate with brands, startup founders, agencies, and independent creators to turn their ideas into scroll-stopping video assets, high-converting social campaigns, and scalable digital marketing funnels.
              </p>
            </div>

            {/* Core Capabilities Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                  <Video className="w-4 h-4" />
                  <span>Cinematic Storytelling</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Deep understanding of visual rhythm, sound design dynamics, and retention engineering to maximize watch time.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/30">
                <div className="flex items-center gap-2 text-purple-300 font-semibold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>Performance Marketing</span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Data-backed audience targeting on Meta Ads, hook A/B split testing, and conversion-focused copy frameworks.
                </p>
              </div>
            </div>

            {/* Technical Tool Stack Matrix */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                  PRODUCTION & MARKETING TOOLSTACK
                </h4>
                <span className="text-xs text-purple-400 font-mono">Constantly Upgraded</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {toolStack.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3 rounded-lg bg-[#0b0817] border border-purple-900/30 hover:border-purple-500/40 transition-colors"
                  >
                    <p className="text-xs font-semibold text-white truncate">{tool.name}</p>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                      <span>{tool.category}</span>
                      <span className="text-purple-300 font-mono">{tool.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-lg shadow-purple-950/50"
              >
                <span>EXPLORE SERVICES</span>
                <Zap className="w-3.5 h-3.5" />
              </a>
              <a
                href="#experience"
                className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
              >
                VIEW MILESTONES →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
