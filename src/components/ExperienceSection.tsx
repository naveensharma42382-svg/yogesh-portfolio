import React from 'react';
import { Calendar, CheckCircle2, Award, TrendingUp, Sparkles, Youtube } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ExperienceSection: React.FC = () => {
  const { milestones, profile } = usePortfolio();

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#090614]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
              EXPERIENCE & MILESTONES
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BUILT ON REAL OUTPUT, <br className="hidden sm:inline" />
            <span className="purple-gradient-text">NOT THEORETICAL PLAYBOOKS.</span>
          </h3>
          <p className="mt-4 text-slate-300 text-base max-w-2xl">
            From the initial 50 videos edited in Jaipur to managing multi-platform content campaigns and 5,800+ subscribers, here is how the craft has grown over 1.5+ years of continuous iteration.
          </p>
        </div>

        {/* Big Proof Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {profile.stats.youtubeSubscribers}
            </p>
            <p className="text-xs text-purple-300 font-medium mt-1">YouTube Subscribers</p>
            <span className="text-[11px] text-slate-500 block mt-0.5">Organic Community</span>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {profile.stats.viewsGenerated}
            </p>
            <p className="text-xs text-purple-300 font-medium mt-1">Total Video Impressions</p>
            <span className="text-[11px] text-slate-500 block mt-0.5">Across Reels & YouTube</span>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {profile.stats.videosProduced}
            </p>
            <p className="text-xs text-purple-300 font-medium mt-1">Videos Produced & Cut</p>
            <span className="text-[11px] text-slate-500 block mt-0.5">Short & Long-form</span>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-purple-500/20 text-center">
            <p className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums">
              {profile.stats.clientSatisfaction}
            </p>
            <p className="text-xs text-purple-300 font-medium mt-1">Client Satisfaction Rate</p>
            <span className="text-[11px] text-slate-500 block mt-0.5">On-Time Deliveries</span>
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-purple-800/40 space-y-12">
          {milestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#090614] border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-900/50">
                <div className="w-2 h-2 rounded-full bg-purple-400 group-hover:scale-125 transition-transform" />
              </div>

              {/* Milestone Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-purple-500/15 group-hover:border-purple-400/30 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-sm font-bold text-purple-400 bg-purple-950/60 px-3 py-1 rounded-lg border border-purple-800/30">
                    {milestone.year}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {milestone.role}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mt-2">
                  {milestone.title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {milestone.description}
                </p>

                {/* Highlights List */}
                <div className="mt-5 pt-4 border-t border-purple-900/30 flex flex-wrap gap-4">
                  {milestone.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
