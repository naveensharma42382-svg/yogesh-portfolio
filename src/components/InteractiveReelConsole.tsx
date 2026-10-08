import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Eye, 
  RotateCcw, 
  CheckCircle, 
  Activity, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const InteractiveReelConsole: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [isAudioPreviewOn, setIsAudioPreviewOn] = useState<boolean>(true);

  const stages = [
    {
      time: '0.0s – 2.5s',
      title: 'The Visual & Audio Disruption (The Hook)',
      retentionScore: '96% Retained',
      description: 'First 2.5 seconds eliminate swipe desire using unexpected question framing, immediate macro zoom, and high-frequency sound impact.',
      techniques: [
        'Macro lens visual punch-in',
        'Sub-bass impact on second 0.2',
        'High-contrast kinetic bold subtitles',
      ],
      clientImpact: 'Eliminates 80% of standard immediate drop-off',
    },
    {
      time: '2.5s – 12.0s',
      title: 'The Narrative Acceleration & Pattern Interrupt',
      retentionScore: '89% Retained',
      description: 'Delivering the first core insight within 10 seconds. Pacing cuts every 1.4 seconds with B-roll popups and graphic callouts so the viewer never feels a lull.',
      techniques: [
        'B-roll transition every 1.2 to 1.8 seconds',
        'Subtle whoosh sound design on text animations',
        'Visual split-screen evidence and stats',
      ],
      clientImpact: 'Maintains high dopamine loop and focus',
    },
    {
      time: '12.0s – 22.0s',
      title: 'The Deep Value & Solution Demonstration',
      retentionScore: '84% Retained',
      description: 'Practical actionable takeaway or product spotlight. Cinematic color grading draws attention directly to the hero subject with soft vignette.',
      techniques: [
        'Cinematic purple & teal contrast grading',
        'Audio ducking to spotlight vocal clarity',
        'Dynamic zoom creeping slowly inward',
      ],
      clientImpact: 'Establishes authority and trust with prospective buyers',
    },
    {
      time: '22.0s – 30.0s',
      title: 'The Seamless Loop & Frictionless CTA',
      retentionScore: '81% Retained (Average Loop Rate 1.3x)',
      description: 'The final sentence smoothly blends back into the opening sentence, triggering natural infinite replays and algorithmic favor on Instagram & TikTok.',
      techniques: [
        'Seamless loop sentence construction',
        'Minimalist endcard with clear single CTA',
        'Comment trigger prompt in the final frame',
      ],
      clientImpact: 'Doubles algorithmic share velocity & organic push',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-[#07050d] border-y border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono font-medium mb-3">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>VIRAL RETENTION ARCHITECTURE</span>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            How I Edit For <span className="purple-gradient-text">Maximum Watch Time</span>
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A look under the hood: why Yogesh Sharma edits produce high retention scores and repeat loops instead of passive scrolling.
          </p>
        </div>

        {/* Interactive Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] p-3 bg-gradient-to-b from-purple-800/40 via-purple-950/40 to-black border-2 border-purple-500/40 shadow-2xl purple-glow relative flex flex-col justify-between overflow-hidden">
              
              {/* Phone Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-neutral-800 rounded-full" />
              </div>

              {/* Inside Phone Screen */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/portfolio_tech_reel_1791462316019.jpg"
                  alt="Short-form video breakdown"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Overlay Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />

                {/* Live Stage Banner in Phone */}
                <div className="absolute top-8 left-3 right-3 bg-black/70 backdrop-blur-md p-2 rounded-xl border border-purple-500/30">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-purple-300 font-bold">{stages[activeStage].time}</span>
                    <span className="text-emerald-400 font-medium">{stages[activeStage].retentionScore}</span>
                  </div>
                  <p className="text-xs font-semibold text-white mt-1 truncate">
                    {stages[activeStage].title}
                  </p>
                </div>

                {/* Interactive Audio Toggle */}
                <div className="absolute bottom-4 left-3 right-3 flex items-center justify-between">
                  <button
                    onClick={() => setIsAudioPreviewOn(!isAudioPreviewOn)}
                    className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 hover:bg-purple-600 transition-colors"
                    aria-label="Toggle sound preview indicator"
                  >
                    {isAudioPreviewOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </button>

                  <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-purple-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-300">Retention: 89%</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Stage Selectors & Breakdown */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="text-xs font-bold tracking-wider text-purple-300 font-mono uppercase mb-2">
              SELECT TIMELINE SEGMENT TO INSPECT:
            </div>

            <div className="space-y-3">
              {stages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                      isActive
                        ? 'bg-purple-950/40 border-purple-400/60 shadow-lg purple-glow-sm'
                        : 'bg-[#0d091e]/60 border-purple-900/30 hover:border-purple-700/50 hover:bg-[#0d091e]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                          isActive ? 'bg-purple-600 text-white' : 'bg-purple-950 text-purple-400 border border-purple-800/40'
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-[11px] font-mono text-purple-300 block">{stage.time}</span>
                          <h4 className="text-sm sm:text-base font-bold text-white">{stage.title}</h4>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/30">
                        {stage.retentionScore}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-4 pt-4 border-t border-purple-900/40 space-y-3 text-xs">
                        <p className="text-slate-300 leading-relaxed">
                          {stage.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {stage.techniques.map((tech, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-2 text-slate-300">
                              <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 text-[11px] text-purple-200 font-medium flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          <span>Outcome: {stage.clientImpact}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Prompt */}
            <div className="pt-4 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Want this exact retention structure applied to your brand's content?
              </span>
              <a
                href="#connect"
                className="text-xs font-bold text-purple-300 hover:text-white uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span>Book A Production Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
