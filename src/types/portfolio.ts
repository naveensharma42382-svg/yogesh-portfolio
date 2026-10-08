export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'video-editing' | 'social-media' | 'digital-marketing' | 'branding';
  categoryLabel: string;
  thumbnail: string;
  aspectRatio: '16:9' | '9:16' | '4:3';
  summary: string;
  metrics: {
    label: string;
    value: string;
  }[];
  challenge: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  popular?: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  result: string;
}

export interface ProfileData {
  name: string;
  tagline: string;
  location: string;
  avatarUrl: string;
  bioIntro: string;
  bioFull: string;
  stats: {
    youtubeSubscribers: string;
    contentGrowth: string;
    viewsGenerated: string;
    videosProduced: string;
    clientSatisfaction: string;
  };
  contactEmail: string;
  whatsappNumber: string;
  socials: {
    youtube: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
}
