
export interface Article {
  id: string;
  title: string;
  category: string;
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
}

export const categories = ["All", "Rehabilitation", "Wellness", "Injury Prevention", "Nutrition"];
