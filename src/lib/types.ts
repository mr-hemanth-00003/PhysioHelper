
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  imageUrl: string;
  imageHint: string;
  date: string;
  featured?: boolean;
  views?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  keywords: string;
  contactEmail: string;
  contactPhone: string;
  officeAddress: string;
}
