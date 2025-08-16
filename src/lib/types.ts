
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
