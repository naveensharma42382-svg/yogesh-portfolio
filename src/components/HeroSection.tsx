import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  TrendingUp, 
  Eye, 
  Youtube, 
  Instagram, 
  Sparkles, 
  Layers, 
  BarChart3, 
  Sliders, 
  CheckCircle2, 
  Volume2, 
  Scissors, 
  ArrowRight,
  Video
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const HeroSection: React.FC = () => {
  const { profile } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'timeline' | 'analytics' | 'reels'>('timeline');
  const [isPlaying, setIsPlaying] = useState(true);
  const [timelineProgress, setTimelineProgress] = useState(42);

  // Auto-advance playhead when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTimelineProgress((prev) => (prev >= 98 ? 2 : prev + 1.2));
    }, 120);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient purple glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-700/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(192, 132, 252, 0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-7">
            
            {/* Supporting Headline / Kicker */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-purple-300 uppercase">
                DIGITAL MARKETING • SOCIAL MEDIA • VIDEO EDITING • CONTENT CREATION
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              I CREATE CONTENT <br />
              <span className="purple-gradient-text">THAT GETS ATTENTION.</span>
            </h1>

            {/* Professional Introduction */}
            <div className="space-y-3 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-normal text-slate-200">
                Hi, I'm <strong className="text-white font-semibold">Yogesh Sharma</strong> — a content creator and aspiring digital marketer focused on creating useful, engaging and attention-grabbing digital content.
              </p>
              <p className="text-slate-400 text-sm sm:text-base">
                I help brands, businesses and creators turn ideas into engaging content through creative video editing, social media marketing, content strategy and digital marketing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-purple-600 hover:bg-purple-500 rounded-xl shadow-xl shadow-purple-900/40 hover:shadow-purple-700/50 transition-all active:scale-[0.98] flex items-center gap-2.5"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#connect"
                className="px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-purple-200 hover:text-white bg-white/5 hover:bg-white/10 border border-purple-500/25 hover:border-purple-400/50 rounded-xl backdrop-blur-md transition-all active:scale-[0.98]"
              >
                LET'S CONNECT
              </a>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="pt-6 border-t border-purple-900/30 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {profile.stats.youtubeSubscribers}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">YouTube Subscribers</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {profile.stats.viewsGenerated}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Total Organic Views</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-purple-300 font-mono tabular-nums">
                  {profile.stats.contentGrowth}
                </p>
                <p className="text-xs text-slate-400 font-medium mt-0.5">Content Growth</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Creative Workspace Visual */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-indigo-500/10 rounded-3xl blur-2xl transform scale-95" />

            {/* Main Interactive Workspace Container */}
            <div className="relative glass-panel rounded-2xl p-5 shadow-2xl purple-glow border border-purple-500/25">
              
              {/* Workspace Header & Interactive Tab Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono font-medium text-purple-300">
                    CREATIVE ENGINE · 4K 60FPS
                  </span>
                </div>

                <div className="flex items-center bg-purple-950/60 p-1 rounded-lg border border-purple-800/40 text-xs">
                  <button
                    onClick={() => setActiveTab('timeline')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'timeline'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Timeline
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'analytics'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab('reels')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeTab === 'reels'
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Reels
                  </button>
                </div>
              </div>

              {/* Tab 1: Video Editing Timeline Visual */}
              {activeTab === 'timeline' && (
                <div className="pt-4 space-y-4">
                  {/* Video Monitor / Preview Window */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-purple-900/40 group">
                    <img
                      src="/src/assets/images/hero_creative_workspace_1791462304483.jpg"
                      alt="Creative Studio Setup"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    
                    {/* Floating HUD Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-purple-900/90 text-purple-200 rounded border border-purple-500/30 backdrop-blur-md">
                        REC 00:04:18:22
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-indigo-900/90 text-indigo-200 rounded border border-indigo-500/30">
                        LUT: VIOLET_CINEMA
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 rounded-lg bg-purple-600/90 text-white hover:bg-purple-500 transition-colors backdrop-blur-md"
                        aria-label={isPlaying ? 'Pause timeline preview' : 'Play timeline preview'}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <div className="text-[11px] font-mono text-slate-300">
                        Hook Retained: <span className="text-purple-300 font-bold">89.4%</span>
                      </div>
                    </div>
                  </div>

                  {/* Multi-Track Timeline */}
                  <div className="bg-[#0b0718] p-3 rounded-xl border border-purple-900/40 space-y-2">
                    {/* Time Ruler & Playhead */}
                    <div className="relative h-4 flex items-center text-[10px] font-mono text-slate-500 px-1 border-b border-purple-900/30">
                      <span>00:00</span>
                      <span className="ml-auto">00:30</span>
                      {/* Scrubbable Playhead */}
                      <div 
                        className="absolute top-0 bottom-0 w-0.5 bg-purple-400 z-10 transition-all duration-100"
                        style={{ left: `${timelineProgress}%` }}
                      >
                        <div className="w-2.5 h-2.5 -ml-1 bg-purple-400 rounded-full shadow-lg shadow-purple-500" />
                      </div>
                    </div>

                    {/* Track 1: Video A-Roll (4K Raw) */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-12 text-[10px] font-mono text-slate-400">V1 VIDEO</span>
                      <div className="flex-1 h-6 bg-purple-950/70 rounded border border-purple-800/40 flex items-center px-2 gap-1 overflow-hidden">
                        <div className="h-full bg-purple-700/60 rounded px-2 flex items-center text-[10px] font-mono text-purple-200 truncate">
                          A-Roll_Hook_Jaipur.mov
                        </div>
                        <div className="h-full bg-purple-600/50 rounded px-2 flex items-center text-[10px] font-mono text-purple-200 truncate">
                          Story_Cut_02
                        </div>
                      </div>
                    </div>

                    {/* Track 2: B-Roll & Motion Graphics */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-12 text-[10px] font-mono text-slate-400">V2 B-ROLL</span>
                      <div className="flex-1 h-6 bg-indigo-950/60 rounded border border-indigo-800/40 flex items-center px-1 gap-1">
                        <div className="h-4/5 bg-indigo-600/70 rounded px-2 flex items-center text-[10px] font-mono text-indigo-200">
                          Kinetic_Text_Hook
                        </div>
                        <div className="h-4/5 bg-indigo-500/70 rounded px-2 flex items-center text-[10px] font-mono text-indigo-100">
                          Macro_Gadget_Cut
                        </div>
                      </div>
                    </div>

                    {/* Track 3: Audio & Sound Effects Waveform */}
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-12 text-[10px] font-mono text-slate-400">A1 AUDIO</span>
                      <div className="flex-1 h-6 bg-slate-900 rounded border border-purple-900/30 flex items-center px-2 relative overflow-hidden">
                        <div className="flex items-end gap-1 h-4 w-full opacity-80">
                          {[30, 60, 90, 40, 80, 100, 75, 45, 95, 80, 60, 40, 70, 85, 90, 50, 65, 80, 100, 70].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-1 bg-purple-400 rounded-full" 
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Growth & Analytics Engine */}
              {activeTab === 'analytics' && (
                <div className="pt-4 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30">
                      <div className="flex items-center justify-between text-slate-400 text-xs">
                        <span>Avg Retention</span>
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <p className="text-xl font-bold font-mono text-white mt-1">76.4%</p>
                      <span className="text-[10px] text-emerald-400 font-medium">+24% vs standard format</span>
                    </div>

                    <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30">
                      <div className="flex items-center justify-between text-slate-400 text-xs">
                        <span>Click-Through (CTR)</span>
                        <Eye className="w-3.5 h-3.5 text-purple-400" />
                      </div>
                      <p className="text-xl font-bold font-mono text-white mt-1">11.8%</p>
                      <span className="text-[10px] text-purple-300 font-medium">Top 5% YouTube Benchmark</span>
                    </div>
                  </div>

                  {/* Growth Graph Simulation */}
                  <div className="p-4 bg-[#0c081a] rounded-xl border border-purple-900/30">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-semibold text-white">Viewer Retention Velocity</span>
                      <span className="text-purple-300 font-mono text-[11px]">Jaipur & Global Audience</span>
                    </div>

                    <div className="h-28 flex items-end gap-2 pt-2 border-b border-purple-900/40 pb-1">
                      {[25, 40, 48, 65, 78, 85, 92, 110, 130, 155, 175, 198].map((val, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className="w-full bg-gradient-to-t from-purple-800 to-purple-400 rounded-t"
                            style={{ height: `${(val / 200) * 100}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                      <span>M1 Foundation</span>
                      <span>M6 Acceleration</span>
                      <span>M18 Scaling</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Reels & Short-Form Showcase */}
              {activeTab === 'reels' && (
                <div className="pt-4 grid grid-cols-2 gap-3 items-center">
                  <div className="aspect-[9/16] rounded-xl overflow-hidden relative border border-purple-500/30 bg-slate-950">
                    <img
                      src="/src/assets/images/portfolio_tech_reel_1791462316019.jpg"
                      alt="Viral Short-Form Reel"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-left">
                      <span className="text-[10px] font-mono text-purple-300 block">620K Views</span>
                      <p className="text-xs font-semibold text-white truncate">NexaTech Audio Review</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-left">
                    <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30">
                      <span className="text-[11px] font-mono text-purple-300 block">HOOK MECHANIC</span>
                      <p className="text-xs text-slate-200 mt-0.5">Micro-pauses + kinetic sound sync stop the swipe in 1.2s</p>
                    </div>

                    <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30">
                      <span className="text-[11px] font-mono text-purple-300 block">SOUND DESIGN</span>
                      <p className="text-xs text-slate-200 mt-0.5">Bass risers and punch whooshes on every topic shift</p>
                    </div>

                    <div className="p-3 bg-purple-950/40 rounded-xl border border-purple-800/30">
                      <span className="text-[11px] font-mono text-purple-300 block">AUDIENCE CONVERSION</span>
                      <p className="text-xs text-slate-200 mt-0.5">Direct CTA seamlessly embedded in narrative loop</p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Floating Glassmorphism Stat Badges (Requested in prompt) */}
            
            {/* Stat Card 1: 5,800+ YouTube Subscribers */}
            <div className="absolute -top-6 -left-6 sm:-left-8 glass-panel rounded-xl p-3 sm:p-4 purple-glow-sm shadow-xl flex items-center gap-3 border border-purple-400/30 z-20 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-lg bg-red-600/20 text-red-400 flex items-center justify-center border border-red-500/30">
                <Youtube className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-white font-mono tabular-nums leading-none">
                  {profile.stats.youtubeSubscribers}
                </p>
                <p className="text-[11px] text-slate-300 font-medium mt-1">YouTube Subscribers</p>
              </div>
            </div>

            {/* Stat Card 2: 1.5 YEARS Content Growth */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel rounded-xl p-3 sm:p-4 purple-glow-sm shadow-xl flex items-center gap-3 border border-purple-400/30 z-20 backdrop-blur-xl">
              <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-300 flex items-center justify-center border border-purple-500/30">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-lg sm:text-xl font-extrabold text-white font-mono tabular-nums leading-none">
                  {profile.stats.contentGrowth}
                </p>
                <p className="text-[11px] text-slate-300 font-medium mt-1">Content Growth</p>
              </div>
            </div>

            {/* Stat Card 3: DIGITAL MARKETING + VIDEO EDITING */}
            <div className="absolute -bottom-8 -right-4 sm:-right-6 glass-panel rounded-xl p-3 sm:p-4 purple-glow-sm shadow-xl border border-purple-400/30 z-20 backdrop-blur-xl hidden sm:block">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-extrabold tracking-wider text-purple-200 uppercase">
                  DIGITAL MARKETING + VIDEO EDITING
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Jaipur, Rajasthan · Global Reach</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
