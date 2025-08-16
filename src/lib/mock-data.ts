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

export const articles: Article[] = [
  {
    id: '1',
    title: '5 Stretches to Alleviate Lower Back Pain',
    category: 'Rehabilitation',
    excerpt: 'Discover five simple yet effective stretches that can help relieve lower back pain and improve your overall flexibility. These can be done at home with no special equipment.',
    content: 'Full article content about 5 stretches for lower back pain...',
    author: {
      name: 'Dr. Emily Carter',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'person stretching',
    date: 'October 26, 2023',
    featured: true,
  },
  {
    id: '2',
    title: 'The Role of Hydration in Muscle Recovery',
    category: 'Wellness',
    excerpt: 'Staying hydrated is crucial for more than just quenching thirst. Learn how proper hydration can significantly speed up muscle recovery and enhance performance.',
    content: 'Full article content about hydration...',
    author: {
      name: 'John Davis',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'water bottle',
    date: 'October 24, 2023',
  },
  {
    id: '3',
    title: 'Preventing Common Running Injuries',
    category: 'Injury Prevention',
    excerpt: 'From shin splints to runner\'s knee, we cover the most common running injuries and provide practical tips on how to prevent them from sidelining you.',
    content: 'Full article content about running injuries...',
    author: {
      name: 'Dr. Sarah Lee',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'person running',
    date: 'October 22, 2023',
  },
  {
    id: '4',
    title: 'Top 10 Foods for Optimal Joint Health',
    category: 'Nutrition',
    excerpt: 'Your diet plays a key role in maintaining healthy joints. Explore our list of the top 10 foods that are packed with nutrients to support your joint health.',
    content: 'Full article content about nutrition for joints...',
    author: {
      name: 'Maria Rodriguez, R.D.',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'healthy food',
    date: 'October 20, 2023',
  },
  {
    id: '5',
    title: 'Post-Surgery Rehab: A Guide to a Speedy Recovery',
    category: 'Rehabilitation',
    excerpt: 'Navigating the path to recovery after surgery can be challenging. This guide provides a week-by-week plan to help you get back on your feet faster and safer.',
    content: 'Full article content about post-surgery rehab...',
    author: {
      name: 'Dr. Emily Carter',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'physical therapy',
    date: 'October 18, 2023',
  },
  {
    id: '6',
    title: 'Mindfulness and its Impact on Chronic Pain',
    category: 'Wellness',
    excerpt: 'Chronic pain is not just physical. Learn how mindfulness and meditation techniques can help you manage pain perception and improve your quality of life.',
    content: 'Full article content about mindfulness...',
    author: {
      name: 'Dr. Ben Adams',
      avatarUrl: 'https://placehold.co/40x40.png',
    },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'person meditating',
    date: 'October 15, 2023',
  },
];

export const categories = ["All", "Rehabilitation", "Wellness", "Injury Prevention", "Nutrition"];
