import React from 'react';
import { ArrowUp, Heart, Settings, Youtube, Instagram, Linkedin, Twitter } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Footer: React.FC = () => {
  const { profile, openAdmin } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05030a] border-t border-purple-900/30 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purple-900/20">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-xl font-extrabold tracking-tight text-white hover:text-purple-300 transition-colors inline-block"
            >
              YOGESH SHARMA
            </a>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed">
              Content Creator, Digital Marketer, and Video Editor based in Jaipur, Rajasthan. Turning ideas into high-retention visual content and measurable audience growth.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 flex items-center justify-center transition-colors"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-950/60 hover:bg-purple-900 text-slate-300 hover:text-white border border-purple-800/40 flex items-center justify-center transition-colors"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold font-mono tracking-wider text-purple-300 uppercase">
              NAVIGATION
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Story</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services & Retainers</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Selected Case Studies</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Journey & Milestones</a>
              </li>
              <li>
                <a href="#connect" className="hover:text-white transition-colors">Contact & Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold font-mono tracking-wider text-purple-300 uppercase">
              EXPERTISE & DOMAINS
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                Short-Form Reels
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                YouTube Long-Form
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                Meta Ad Campaigns
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                High-CTR Thumbnails
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                Viral Hook Architecture
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0b0818] border border-purple-900/40 text-slate-300">
                Jaipur, Rajasthan
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Yogesh Sharma. All rights reserved. Crafted with care in Jaipur, India.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={openAdmin}
              className="flex items-center gap-1.5 text-slate-500 hover:text-purple-300 transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Admin Dashboard</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-purple-950/40 hover:bg-purple-900 text-slate-400 hover:text-white border border-purple-800/30 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
