import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Settings } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Navbar: React.FC = () => {
  const { openAdmin } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PORTFOLIO', href: '#portfolio' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONNECT', href: '#connect' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090614]/90 backdrop-blur-xl border-b border-purple-500/15 py-3 shadow-2xl shadow-purple-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#home"
            className="text-lg md:text-xl font-extrabold tracking-tight text-white hover:text-purple-300 transition-colors font-heavitas"
          >
            YOGESH SHARMA
          </a>

          {/* Zone 2: 4-6 text navigation links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action & admin quick trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openAdmin}
              title="Open Portfolio Admin Dashboard"
              aria-label="Admin settings"
              className="p-2 text-slate-400 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg transition-colors border border-transparent hover:border-purple-800/30"
            >
              <Settings className="w-4 h-4" />
            </button>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-wide uppercase text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-purple-900/30 hover:shadow-purple-700/40 transition-all whitespace-nowrap active:scale-[0.98]"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={openAdmin}
              title="Admin Settings"
              className="p-2 text-slate-400 hover:text-purple-300 rounded-lg"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#090614]/95 backdrop-blur-2xl border-b border-purple-500/20 px-6 py-6 transition-all shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-wider text-slate-200 hover:text-purple-300 py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-purple-900/30">
              <a
                href="#connect"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold tracking-wide uppercase text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-lg shadow-purple-900/40"
              >
                <span>LET'S WORK TOGETHER</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
