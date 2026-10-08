import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = usePortfolio();

  return (
    <section className="py-24 relative overflow-hidden bg-[#07050d] border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
              CLIENT TRUST & PROOF
            </h2>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WHAT COLLABORATORS SAY <br />
            <span className="purple-gradient-text">ABOUT THE CREATIVE OUTPUT.</span>
          </h3>
          <p className="mt-4 text-slate-300 text-base max-w-2xl">
            Real outcomes from startup founders, high-growth creators, and direct-to-consumer brands who partnered with Yogesh Sharma.
          </p>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel rounded-2xl p-7 border border-purple-500/15 hover:border-purple-400/30 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-purple-500/40 mb-4" />
                <p className="text-sm text-slate-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-purple-900/30">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>

                {/* Attributable Outcome */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-1 rounded border border-purple-800/40 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Result: {t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
