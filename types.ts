
export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroImage: string;
    service1Title: string;
    service1Desc: string;
    service2Title: string;
    service2Desc: string;
    service3Title: string;
    service3Desc: string;
  };
  about: {
    title: string;
    description: string;
    team: TeamMember[];
  };
  gallery: {
    images: string[];
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
    lat: number;
    lng: number;
  };
  settings: {
    adminCode: string;
    backgroundMusicUrl: string;
    musicEnabled: boolean;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface AppContextType {
  content: SiteContent;
  isAdmin: boolean;
  updateContent: (path: string, value: any) => void;
  toggleAdmin: (code: string) => boolean;
  logout: () => void;
  improveText: (text: string) => Promise<string>;
}
