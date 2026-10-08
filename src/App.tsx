import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveReelConsole } from './components/InteractiveReelConsole';
import { PortfolioSection } from './components/PortfolioSection';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConnectSection } from './components/ConnectSection';
import { Footer } from './components/Footer';
import { AdminModal } from './components/AdminModal';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-[#07050d] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
        {/* Sticky 3-zone navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <InteractiveReelConsole />
          <PortfolioSection />
          <ExperienceSection />
          <TestimonialsSection />
          <ConnectSection />
        </main>

        {/* Agency Footer */}
        <Footer />

        {/* Replaceable Profile Avatar & Portfolio Admin Modal */}
        <AdminModal />
      </div>
    </PortfolioProvider>
  );
}
