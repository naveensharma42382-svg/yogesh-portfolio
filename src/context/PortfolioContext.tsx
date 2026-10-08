import React, { createContext, useContext, useState, useEffect } from 'react';
import { ProfileData, PortfolioItem, ServiceItem, Milestone, Testimonial } from '../types/portfolio';
import {
  INITIAL_PROFILE,
  INITIAL_PORTFOLIO,
  INITIAL_SERVICES,
  INITIAL_MILESTONES,
  INITIAL_TESTIMONIALS,
} from '../data/initialData';

interface PortfolioContextType {
  profile: ProfileData;
  portfolio: PortfolioItem[];
  services: ServiceItem[];
  milestones: Milestone[];
  testimonials: Testimonial[];
  isAdminOpen: boolean;
  selectedProject: PortfolioItem | null;
  updateProfile: (updated: Partial<ProfileData>) => void;
  updateAvatar: (newUrl: string) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  updatePortfolioItem: (item: PortfolioItem) => void;
  deletePortfolioItem: (id: string) => void;
  resetToDefaults: () => void;
  openAdmin: () => void;
  closeAdmin: () => void;
  openProjectModal: (project: PortfolioItem) => void;
  closeProjectModal: () => void;
}

const STORAGE_KEYS = {
  PROFILE: 'yogesh_portfolio_profile_v2',
  PROJECTS: 'yogesh_portfolio_projects_v2',
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.avatarUrl?.includes('yogesh_sharma_portrait_')) {
          parsed.avatarUrl = '';
        }
        if (!parsed.contactEmail || parsed.contactEmail.includes('connect@yogeshsharma')) {
          parsed.contactEmail = 'tipstoup@gmail.com';
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_PROFILE;
  });

  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_PORTFOLIO;
  });

  const [services] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [milestones] = useState<Milestone[]>(INITIAL_MILESTONES);
  const [testimonials] = useState<Testimonial[]>(INITIAL_TESTIMONIALS);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(portfolio));
    } catch {
      // ignore
    }
  }, [portfolio]);

  const updateProfile = (updated: Partial<ProfileData>) => {
    setProfile((prev) => ({
      ...prev,
      ...updated,
      stats: {
        ...prev.stats,
        ...(updated.stats || {}),
      },
      socials: {
        ...prev.socials,
        ...(updated.socials || {}),
      },
    }));
  };

  const updateAvatar = (newUrl: string) => {
    setProfile((prev) => ({
      ...prev,
      avatarUrl: newUrl,
    }));
  };

  const addPortfolioItem = (item: PortfolioItem) => {
    setPortfolio((prev) => [item, ...prev]);
  };

  const updatePortfolioItem = (item: PortfolioItem) => {
    setPortfolio((prev) => prev.map((p) => (p.id === item.id ? item : p)));
  };

  const deletePortfolioItem = (id: string) => {
    setPortfolio((prev) => prev.filter((p) => p.id !== id));
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    setProfile(INITIAL_PROFILE);
    setPortfolio(INITIAL_PORTFOLIO);
  };

  return (
    <PortfolioContext.Provider
      value={{
        profile,
        portfolio,
        services,
        milestones,
        testimonials,
        isAdminOpen,
        selectedProject,
        updateProfile,
        updateAvatar,
        addPortfolioItem,
        updatePortfolioItem,
        deletePortfolioItem,
        resetToDefaults,
        openAdmin: () => setIsAdminOpen(true),
        closeAdmin: () => setIsAdminOpen(false),
        openProjectModal: (proj) => setSelectedProject(proj),
        closeProjectModal: () => setSelectedProject(null),
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
