import React, { useState } from 'react';
import { 
  Video, 
  Share2, 
  TrendingUp, 
  Compass, 
  Check, 
  ArrowRight, 
  Calculator, 
  Clock, 
  Zap, 
  Sparkles 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ServicesSection: React.FC = () => {
  const { services } = usePortfolio();

  // Interactive Scope Estimator State
  const [selectedServiceId, setSelectedServiceId] = useState<string>('video-editing');
  const [volume, setVolume] = useState<'starter' | 'growth' | 'scale'>('growth');
  const [turnaround, setTurnaround] = useState<'standard' | 'express'>('standard');

  const volumeDetails = {
    starter: {
      label: 'Starter Sprint',
      deliverables: '4 High-Retention Reels or 2 Long-Form Videos/mo',
      idealFor: 'Emerging creators or early-stage brands testing new formats',
      timeline: 'Turnaround within 48-72 hours',
    },
    growth: {
      label: 'Growth Accelerator',
      deliverables: '10 High-Retention Reels + 4 Long-Form YouTube Cuts + Script Hooks',
      idealFor: 'Growing brands & creators actively scaling organic reach',
      timeline: 'Turnaround within 36-48 hours',
    },
    scale: {
      label: 'Full Omnichannel Scale',
      deliverables: '20+ Multi-Platform Short Cuts + Full Meta Ads Creative Suite + Strategy',
      idealFor: 'Established businesses & serious personal brands demanding maximum volume',
      timeline: 'Priority dedicated workflow with 24-36h turnarounds',
    },
  };

  const serviceIcons = {
    'video-editing': <Video className="w-5 h-5 text-purple-400" />,
    'social-media': <Share2 className="w-5 h-5 text-purple-400" />,
    'digital-marketing': <TrendingUp className="w-5 h-5 text-purple-400" />,
    'content-strategy': <Compass className="w-5 h-5 text-purple-400" />,
  };

  const handleBookScope = () => {
    const connectSection = document.getElementById('connect');
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#090614]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
              SERVICES & SOLUTIONS
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERED FOR AUDIENCE RETENTION <br />
            <span className="purple-gradient-text">& MEASURABLE BRAND GROWTH.</span>
          </h3>
          <p className="mt-4 text-slate-300 text-base max-w-2xl">
            Whether you need scroll-stopping short-form edits, a complete YouTube production pipeline, or targeted digital marketing campaigns, every package is tailored for commercial outcomes.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className={`glass-panel rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                service.popular
                  ? 'border-purple-500/40 shadow-xl purple-glow-sm bg-purple-950/20'
                  : 'border-purple-500/15 hover:border-purple-400/30'
              }`}
            >
              <div>
                {/* Header: Editorial numbering + Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm text-purple-400 font-bold">
                    {service.number}
                  </span>
                  {service.popular && (
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-purple-200 uppercase px-2.5 py-0.5 rounded-full bg-purple-900/50 border border-purple-500/40">
                      Most Requested
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2.5 mb-2">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    {service.title}
                  </h4>
                </div>

                <p className="text-xs font-medium text-purple-300 mb-4 font-mono">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Key Deliverables:
                  </p>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-5 border-t border-purple-900/30 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#connect"
                  className="text-xs font-bold uppercase tracking-wider text-purple-300 hover:text-white flex items-center gap-1 transition-colors group"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Scope & Retainer Estimator */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-purple-500/30 purple-glow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-purple-900/40">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold tracking-wider uppercase mb-1">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE SCOPE ESTIMATOR</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-white">
                Customize Your Creative Scope
              </h4>
              <p className="text-sm text-slate-400 mt-1">
                Select your service requirements to view the recommended production tier.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#0d091e] p-1.5 rounded-xl border border-purple-800/40">
              <span className="text-xs text-slate-400 px-2 font-mono">Pace:</span>
              <button
                onClick={() => setTurnaround('standard')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  turnaround === 'standard'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard (48h)
              </button>
              <button
                onClick={() => setTurnaround('express')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 ${
                  turnaround === 'express'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Zap className="w-3 h-3 text-yellow-300" />
                <span>Priority (24h)</span>
              </button>
            </div>
          </div>

          {/* Interactive Form Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            
            {/* Step 1: Select Service Pillar */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                1. Select Service Pillar
              </label>
              <div className="space-y-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                      selectedServiceId === s.id
                        ? 'bg-purple-600/20 border-purple-400 text-white shadow-inner'
                        : 'bg-[#0d091e] border-purple-900/30 text-slate-300 hover:border-purple-700/50'
                    }`}
                  >
                    <p className="font-bold text-white">{s.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5 truncate">{s.subtitle}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Volume Tier */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                2. Select Volume Tier
              </label>
              <div className="space-y-2">
                {(['starter', 'growth', 'scale'] as const).map((tierKey) => {
                  const details = volumeDetails[tierKey];
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setVolume(tierKey)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-all ${
                        volume === tierKey
                          ? 'bg-purple-600/20 border-purple-400 text-white shadow-inner'
                          : 'bg-[#0d091e] border-purple-900/30 text-slate-300 hover:border-purple-700/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white capitalize">{details.label}</span>
                        {tierKey === 'growth' && (
                          <span className="text-[10px] text-purple-300 font-mono px-1.5 py-0.5 rounded bg-purple-900/40">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{details.idealFor}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Scope Summary & Request */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                3. Scope Summary & Timeline
              </label>
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/30 space-y-4">
                <div>
                  <span className="text-[11px] font-mono text-purple-300 uppercase">Estimated Deliverables</span>
                  <p className="text-sm font-semibold text-white mt-1 leading-snug">
                    {volumeDetails[volume].deliverables}
                  </p>
                </div>

                <div className="pt-2 border-t border-purple-800/30">
                  <span className="text-[11px] font-mono text-purple-300 uppercase">Timeline & Delivery</span>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>
                      {turnaround === 'express'
                        ? 'Priority 24-36h Delivery Guarantee'
                        : volumeDetails[volume].timeline}
                    </span>
                  </p>
                </div>

                <div className="pt-2 border-t border-purple-800/30">
                  <p className="text-[11px] text-slate-400">
                    Transparent, custom quotes based on asset complexity and duration.
                  </p>
                </div>

                <button
                  onClick={handleBookScope}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Request Proposal For This Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
