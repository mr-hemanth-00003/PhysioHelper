
'use server';

import { Article } from '@/lib/types';

// Mock data for build time and fallback
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Introduction to Manual Therapy',
    excerpt: 'Learn the fundamentals of manual therapy techniques and their clinical applications.',
    content: 'Manual therapy is a hands-on approach used by physiotherapists to diagnose and treat musculoskeletal conditions...',
    author: {
      name: 'Dr. Sarah Johnson',
      avatarUrl: '/team/member-1.jpg'
    },
    imageUrl: '/team/member-1.jpg',
    imageHint: 'Manual therapy demonstration',
    date: '2024-01-15',
    featured: true,
    views: 1250
  },
  {
    id: '2',
    title: 'Assessment Techniques in Physiotherapy',
    excerpt: 'Comprehensive guide to clinical assessment methods and evaluation protocols.',
    content: 'Clinical assessment is the cornerstone of effective physiotherapy practice...',
    author: {
      name: 'Dr. Michael Chen',
      avatarUrl: '/team/member-2.jpg'
    },
    imageUrl: '/team/member-2.jpg',
    imageHint: 'Assessment techniques',
    date: '2024-01-10',
    featured: true,
    views: 980
  },
  {
    id: '3',
    title: 'Exercise Prescription for Rehabilitation',
    excerpt: 'Evidence-based approaches to designing therapeutic exercise programs.',
    content: 'Therapeutic exercise is essential for restoring function and preventing further injury...',
    author: {
      name: 'Dr. Emily Davis',
      avatarUrl: '/team/member-1.jpg'
    },
    imageUrl: '/team/member-1.jpg',
    imageHint: 'Exercise prescription',
    date: '2024-01-05',
    featured: false,
    views: 750
  }
];

export async function getArticles(options: { featured?: boolean, limit?: number } = {}): Promise<Article[]> {
  try {
    // During build time or when Firebase is not available, use mock data
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
      let articles = [...mockArticles];

      if (options.featured) {
        articles = articles.filter(a => a.featured);
      }
      if (options.limit) {
        articles = articles.slice(0, options.limit);
      }

      return articles;
    }

    // Try to use Firebase if available
    try {
      const { db } = await import('@/lib/firebase');
      const { collection, getDocs, query, orderBy } = await import('firebase/firestore');
      
      const articlesCollection = collection(db, 'articles');
      const q = query(articlesCollection, orderBy('date', 'desc'));
      const snapshot = await getDocs(q);
      let articles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));

      if (options.featured) {
        articles = articles.filter(a => a.featured);
      }
      if (options.limit) {
        articles = articles.slice(0, options.limit);
      }

      return articles;
    } catch (firebaseError) {
      console.warn('Firebase not available, using mock data:', firebaseError);
      // Fallback to mock data if Firebase fails
      let articles = [...mockArticles];

      if (options.featured) {
        articles = articles.filter(a => a.featured);
      }
      if (options.limit) {
        articles = articles.slice(0, options.limit);
      }

      return articles;
    }
  } catch (error) {
    console.error('Error fetching articles:', error);
    // Return mock data as final fallback
    let articles = [...mockArticles];

    if (options.featured) {
      articles = articles.filter(a => a.featured);
    }
    if (options.limit) {
      articles = articles.slice(0, options.limit);
    }

    return articles;
  }
}

export async function getArticle(id: string): Promise<Article | null> {
  try {
    // During build time or when Firebase is not available, use mock data
    if (typeof window === 'undefined' || process.env.NODE_ENV === 'production') {
      return mockArticles.find(article => article.id === id) || null;
    }

    // Try to use Firebase if available
    try {
      const { db } = await import('@/lib/firebase');
      const { doc, getDoc } = await import('firebase/firestore');
      
      const docRef = doc(db, 'articles', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Article;
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (firebaseError) {
      console.warn('Firebase not available, using mock data:', firebaseError);
      // Fallback to mock data if Firebase fails
      return mockArticles.find(article => article.id === id) || null;
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    // Return mock data as final fallback
    return mockArticles.find(article => article.id === id) || null;
  }
}

export async function createArticle(articleData: Omit<Article, 'id' | 'date'>) {
    try {
        // During build time, just return a mock ID
        if (typeof window === 'undefined') {
            return 'mock-article-id';
        }

        // Try to use Firebase if available
        try {
            const { db } = await import('@/lib/firebase');
            const { collection, addDoc } = await import('firebase/firestore');
            
            const articlesCollection = collection(db, 'articles');
            const newArticle = {
                ...articleData,
                date: new Date().toISOString().split('T')[0],
                views: 0,
                author: {
                    name: 'Dr. Emily Carter',
                    avatarUrl: 'https://placehold.co/40x40.png',
                }
            };
            const docRef = await addDoc(articlesCollection, newArticle);
            return docRef.id;
        } catch (firebaseError) {
            console.warn('Firebase not available:', firebaseError);
            throw new Error('Firebase not available for creating articles');
        }
    } catch (error) {
        console.error("Error creating article: ", error);
        throw new Error("Failed to create article.");
    }
}

export async function updateArticle(id: string, articleData: Partial<Omit<Article, 'id'>>) {
    try {
        // During build time, do nothing
        if (typeof window === 'undefined') {
            return;
        }

        // Try to use Firebase if available
        try {
            const { db } = await import('@/lib/firebase');
            const { doc, updateDoc } = await import('firebase/firestore');
            
            const docRef = doc(db, 'articles', id);
            await updateDoc(docRef, articleData);
        } catch (firebaseError) {
            console.warn('Firebase not available:', firebaseError);
            throw new Error('Firebase not available for updating articles');
        }
    } catch (error) {
        console.error("Error updating article: ", error);
        throw new Error("Failed to update article.");
    }
}

export async function deleteArticle(id: string) {
    try {
        // During build time, do nothing
        if (typeof window === 'undefined') {
            return;
        }

        // Try to use Firebase if available
        try {
            const { db } = await import('@/lib/firebase');
            const { doc, deleteDoc } = await import('firebase/firestore');
            
            const docRef = doc(db, 'articles', id);
            await deleteDoc(docRef);
        } catch (firebaseError) {
            console.warn('Firebase not available:', firebaseError);
            throw new Error('Firebase not available for deleting articles');
        }
    } catch (error) {
        console.error("Error deleting article:", error);
        throw new Error("Failed to delete article.");
    }
}

export async function incrementArticleViews(id: string) {
    try {
        // During build time, do nothing
        if (typeof window === 'undefined') {
            return;
        }

        // Try to use Firebase if available
        try {
            const { db } = await import('@/lib/firebase');
            const { doc, updateDoc, increment } = await import('firebase/firestore');
            
            const docRef = doc(db, 'articles', id);
            await updateDoc(docRef, {
                views: increment(1)
            });
        } catch (firebaseError) {
            console.warn('Firebase not available:', firebaseError);
            // Do nothing if Firebase is not available
        }
    } catch (error) {
        console.error("Error incrementing article views:", error);
        // Do nothing if there's an error
    }
}
