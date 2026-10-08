import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles, TrendingUp, Layers, Video } from 'lucide-react';
import { PortfolioItem } from '../types/portfolio';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#0d091e] border border-purple-500/30 rounded-2xl shadow-2xl purple-glow overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-purple-900/40 bg-[#090614]">
          <div>
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
              {project.categoryLabel} · Client: {project.client}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Main Visual Asset Showcase */}
          <div className="relative rounded-xl overflow-hidden bg-black border border-purple-900/40">
            <img
              src={project.thumbnail}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[420px] object-cover mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            
            {/* Quick badge */}
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono bg-purple-950/90 text-purple-200 rounded-lg border border-purple-500/40 backdrop-blur-md">
                Production by Yogesh Sharma
              </span>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 sm:p-4 rounded-xl bg-purple-950/30 border border-purple-800/30 text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                  {m.value}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Challenge & Solution Case Study */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#090614] border border-purple-900/40 space-y-2">
              <h4 className="text-xs font-bold font-mono tracking-wider text-rose-300 uppercase">
                THE CHALLENGE & BOTTLENECK
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#090614] border border-purple-900/40 space-y-2">
              <h4 className="text-xs font-bold font-mono tracking-wider text-purple-300 uppercase">
                THE CREATIVE STRATEGY & SOLUTION
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Tools */}
          <div className="pt-2 border-t border-purple-900/30 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                PROJECT DELIVERABLES:
              </p>
              <div className="space-y-1.5">
                {project.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                SOFTWARE & GEAR USED:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/60 text-purple-200 border border-purple-800/40"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-purple-900/40 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Want similar results for your upcoming campaign or channel?
            </span>
            <a
              href="#connect"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all shadow-md"
            >
              Start A Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
