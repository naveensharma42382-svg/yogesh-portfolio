import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  Image, 
  Save, 
  RotateCcw, 
  User, 
  BarChart, 
  FolderPlus, 
  Trash2, 
  Check, 
  ShieldCheck,
  Link
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import { PortfolioItem } from '../types/portfolio';

export const AdminModal: React.FC = () => {
  const { 
    isAdminOpen, 
    closeAdmin, 
    profile, 
    updateProfile, 
    updateAvatar, 
    portfolio, 
    addPortfolioItem, 
    deletePortfolioItem,
    resetToDefaults 
  } = usePortfolio();

  const [activeTab, setActiveTab] = useState<'photo' | 'info' | 'stats' | 'projects'>('photo');
  const [photoUrlInput, setPhotoUrlInput] = useState(profile.avatarUrl);
  const [savedFeedback, setSavedFeedback] = useState(false);

  // Form states for profile
  const [name, setName] = useState(profile.name);
  const [tagline, setTagline] = useState(profile.tagline);
  const [location, setLocation] = useState(profile.location);
  const [bioIntro, setBioIntro] = useState(profile.bioIntro);
  const [email, setEmail] = useState(profile.contactEmail);

  // Stats states
  const [youtubeSubs, setYoutubeSubs] = useState(profile.stats.youtubeSubscribers);
  const [contentGrowth, setContentGrowth] = useState(profile.stats.contentGrowth);
  const [viewsGenerated, setViewsGenerated] = useState(profile.stats.viewsGenerated);
  const [videosProduced, setVideosProduced] = useState(profile.stats.videosProduced);

  // New Project State
  const [newTitle, setNewTitle] = useState('');
  const [newClient, setNewClient] = useState('');
  const [newCategory, setNewCategory] = useState<'video-editing' | 'social-media' | 'digital-marketing' | 'branding'>('video-editing');
  const [newSummary, setNewSummary] = useState('');
  const [newMetricVal, setNewMetricVal] = useState('500K+');
  const [newMetricLabel, setNewMetricLabel] = useState('Views Generated');

  if (!isAdminOpen) return null;

  // Handle local image file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUrlInput(reader.result);
          updateAvatar(reader.result);
          triggerSaveFeedback();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhotoUrl = () => {
    if (photoUrlInput.trim()) {
      updateAvatar(photoUrlInput.trim());
      triggerSaveFeedback();
    }
  };

  const handleSaveProfileInfo = () => {
    updateProfile({
      name,
      tagline,
      location,
      bioIntro,
      contactEmail: email,
    });
    triggerSaveFeedback();
  };

  const handleSaveStats = () => {
    updateProfile({
      stats: {
        youtubeSubscribers: youtubeSubs,
        contentGrowth,
        viewsGenerated,
        videosProduced,
        clientSatisfaction: profile.stats.clientSatisfaction,
      },
    });
    triggerSaveFeedback();
  };

  const handleAddNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem: PortfolioItem = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      client: newClient || 'Private Brand',
      category: newCategory,
      categoryLabel: newCategory === 'video-editing' ? 'Video Editing' : newCategory === 'social-media' ? 'Social Media' : 'Digital Marketing',
      thumbnail: photoUrlInput || '/src/assets/images/portfolio_tech_reel_1791462316019.jpg',
      aspectRatio: '16:9',
      summary: newSummary || 'High impact creative production and strategy.',
      metrics: [{ label: newMetricLabel, value: newMetricVal }],
      challenge: 'Scaling organic audience reach in a competitive digital landscape.',
      solution: 'Custom high-retention video pacing and targeted audience campaign.',
      deliverables: ['Custom 4K Video Assets', 'Social Formats', 'Growth Strategy'],
      tools: ['Premiere Pro', 'After Effects'],
    };

    addPortfolioItem(newItem);
    setNewTitle('');
    setNewClient('');
    setNewSummary('');
    triggerSaveFeedback();
  };

  const triggerSaveFeedback = () => {
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#0e0a1f] border border-purple-500/40 rounded-2xl shadow-2xl purple-glow overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-purple-900/40 bg-[#090614] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-950 text-purple-400 border border-purple-800/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Portfolio Admin Dashboard
              </h3>
              <p className="text-xs text-slate-400">
                Manage profile avatar, live metrics, and showcase projects
              </p>
            </div>
          </div>

          <button
            onClick={closeAdmin}
            className="p-2 rounded-xl bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-purple-900/40 bg-[#0b0818] px-4 overflow-x-auto text-xs">
          <button
            onClick={() => setActiveTab('photo')}
            className={`py-3 px-4 font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'photo'
                ? 'border-purple-400 text-white bg-purple-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Profile Photo</span>
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-4 font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'info'
                ? 'border-purple-400 text-white bg-purple-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Profile Details</span>
          </button>

          <button
            onClick={() => setActiveTab('stats')}
            className={`py-3 px-4 font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'stats'
                ? 'border-purple-400 text-white bg-purple-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart className="w-3.5 h-3.5" />
            <span>Growth Stats</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 px-4 font-semibold border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === 'projects'
                ? 'border-purple-400 text-white bg-purple-950/40'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FolderPlus className="w-3.5 h-3.5" />
            <span>Projects ({portfolio.length})</span>
          </button>
        </div>

        {/* Saved Success Toast */}
        {savedFeedback && (
          <div className="bg-emerald-950/80 border-b border-emerald-500/40 px-4 py-2 flex items-center gap-2 text-xs font-medium text-emerald-300">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>Changes successfully saved to your portfolio!</span>
          </div>
        )}

        {/* Tab Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: Profile Photo Replacement (Explicit Requirement) */}
          {activeTab === 'photo' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Replace Profile Photo
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Upload a new photo file from your device or paste an image URL.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Current Avatar Preview */}
                <div className="sm:col-span-4 flex flex-col items-center">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-purple-500/50 shadow-lg bg-[#0e0a1f] flex items-center justify-center">
                    {photoUrlInput || profile.avatarUrl ? (
                      <img
                        src={photoUrlInput || profile.avatarUrl}
                        alt="Avatar Preview"
                        referrerPolicy="no-referrer"
                        onError={() => {
                          setPhotoUrlInput('');
                        }}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center p-4 text-center">
                        <span className="text-3xl font-extrabold text-purple-300 font-heavitas">YS</span>
                        <span className="text-[10px] text-slate-400 mt-1">Monogram Active</span>
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 mt-2 font-mono">Current Live Avatar</span>
                  {(photoUrlInput || profile.avatarUrl) && (
                    <button
                      type="button"
                      onClick={() => {
                        setPhotoUrlInput('');
                        updateAvatar('');
                        triggerSaveFeedback();
                      }}
                      className="mt-2 text-[11px] text-rose-400 hover:text-rose-300 underline"
                    >
                      Remove Photo (Use Monogram)
                    </button>
                  )}
                </div>

                {/* Upload & URL Controls */}
                <div className="sm:col-span-8 space-y-4">
                  {/* File Upload Option */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">
                      Upload Image File
                    </label>
                    <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-purple-500/40 rounded-xl cursor-pointer hover:bg-purple-950/30 transition-colors text-xs text-purple-300 font-medium">
                      <Upload className="w-4 h-4" />
                      <span>Choose local image (PNG, JPG, WebP)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Or URL Input */}
                  <div>
                    <label className="text-xs font-bold text-slate-300 uppercase block mb-1.5">
                      Or Image URL / Cloud Path
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={photoUrlInput}
                        onChange={(e) => setPhotoUrlInput(e.target.value)}
                        placeholder="https://... or /src/assets/..."
                        className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white focus:outline-none focus:border-purple-400"
                      />
                      <button
                        type="button"
                        onClick={handleSavePhotoUrl}
                        className="px-4 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Profile Details */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Tagline</label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Bio Intro</label>
                <textarea
                  rows={3}
                  value={bioIntro}
                  onChange={(e) => setBioIntro(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSaveProfileInfo}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-xl"
                >
                  Save Profile Details
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Growth Stats */}
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">YouTube Subscribers</label>
                  <input
                    type="text"
                    value={youtubeSubs}
                    onChange={(e) => setYoutubeSubs(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Content Growth Time</label>
                  <input
                    type="text"
                    value={contentGrowth}
                    onChange={(e) => setContentGrowth(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Views Generated</label>
                  <input
                    type="text"
                    value={viewsGenerated}
                    onChange={(e) => setViewsGenerated(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white font-mono"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 uppercase block mb-1">Videos Produced</label>
                  <input
                    type="text"
                    value={videosProduced}
                    onChange={(e) => setVideosProduced(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#090614] border border-purple-900/40 text-white font-mono"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleSaveStats}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-xl"
                >
                  Update Growth Metrics
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: Manage Projects */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add Project Form */}
              <form onSubmit={handleAddNewProject} className="p-4 rounded-xl bg-[#090614] border border-purple-900/40 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-purple-300">Add New Portfolio Project</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Project Title"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Client or Channel Name"
                    value={newClient}
                    onChange={(e) => setNewClient(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                  >
                    <option value="video-editing">Video Editing & Reels</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="social-media">Social Media & YouTube</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Key Metric Value (e.g. 850K+)"
                    value={newMetricVal}
                    onChange={(e) => setNewMetricVal(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                  />
                  <input
                    type="text"
                    placeholder="Metric Label (e.g. Views)"
                    value={newMetricLabel}
                    onChange={(e) => setNewMetricLabel(e.target.value)}
                    className="px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Summary of creative output and achievements..."
                  value={newSummary}
                  onChange={(e) => setNewSummary(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#0e0a1f] border border-purple-900/40 text-white"
                />

                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-xl"
                >
                  Add Project To Showcase
                </button>
              </form>

              {/* Current Projects List */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Showcase Projects:</h5>
                {portfolio.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-[#090614] border border-purple-900/30 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">{p.title}</p>
                      <p className="text-[11px] text-slate-400">{p.client} · {p.categoryLabel}</p>
                    </div>
                    <button
                      onClick={() => deletePortfolioItem(p.id)}
                      className="p-1.5 text-rose-400 hover:text-rose-200 hover:bg-rose-950/40 rounded-lg transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer with Reset to Defaults */}
        <div className="p-4 sm:p-5 border-t border-purple-900/40 bg-[#090614] flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm('Reset portfolio data back to initial default showcase?')) {
                resetToDefaults();
                setPhotoUrlInput(profile.avatarUrl);
                triggerSaveFeedback();
              }
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-rose-300 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset To Default Showcase</span>
          </button>

          <button
            onClick={closeAdmin}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 rounded-xl transition-all"
          >
            Done & Close
          </button>
        </div>
      </div>
    </div>
  );
};
