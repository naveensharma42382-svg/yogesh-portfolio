import React, { useState } from 'react';
import { Play, ArrowUpRight, Filter, Layers, Plus } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { ProjectModal } from './ProjectModal';
import { PortfolioItem } from '../types/portfolio';

export const PortfolioSection: React.FC = () => {
  const { portfolio, selectedProject, openProjectModal, closeProjectModal, openAdmin } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'video-editing', label: 'Video Editing & Reels' },
    { id: 'digital-marketing', label: 'Digital Marketing & Ads' },
    { id: 'social-media', label: 'Social Media & YouTube' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? portfolio
    : portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-[#07050d]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <h2 className="text-xs sm:text-sm font-bold tracking-widest text-purple-300 uppercase">
                SELECTED WORKS & CASE STUDIES
              </h2>
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              PROVEN RESULTS. <br className="hidden sm:inline" />
              <span className="purple-gradient-text">HIGH-IMPACT VISUAL CRAFT.</span>
            </h3>
          </div>

          {/* Interactive Filter Tabs (Permitted by Section 1.A) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0e0a1f] rounded-xl border border-purple-800/30 overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-purple-950/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            // Determine bento column span based on project aspect ratio / index
            const isWide = project.aspectRatio === '16:9';
            const isReel = project.aspectRatio === '9:16';
            const colSpan = isWide ? 'lg:col-span-8' : isReel ? 'lg:col-span-4' : 'lg:col-span-6';

            return (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className={`${colSpan} group cursor-pointer glass-panel rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                {/* Media Container */}
                <div className={`relative overflow-hidden bg-slate-950 ${
                  isReel ? 'aspect-[9/16] max-h-[460px]' : 'aspect-video'
                }`}>
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Top Right Inspect Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Primary Metrics Highlight Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-white bg-purple-900/80 px-2.5 py-1 rounded border border-purple-500/30 backdrop-blur-md">
                        {project.metrics[0].label}: {project.metrics[0].value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content Footer: Anti-Slop Unboxed Metadata */}
                <div className="p-6 space-y-3 bg-[#0a0715]">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-400">Client: {project.client}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs border-t border-purple-900/30">
                    <span className="text-slate-400 font-medium">Click to view full case study</span>
                    <span className="text-purple-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Explore Details →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl glass-panel border border-purple-500/20 max-w-lg mx-auto">
            <p className="text-slate-300 text-sm">No projects currently under this filter.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="mt-4 px-4 py-2 text-xs font-bold text-white bg-purple-600 rounded-lg"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* Portfolio Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400">
            Have a custom format or private client NDA showcase you'd like to inspect?{' '}
            <a href="#connect" className="text-purple-300 hover:text-white underline font-semibold">
              Request Full Portfolio Reel
            </a>
          </p>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal project={selectedProject} onClose={closeProjectModal} />
    </section>
  );
};
