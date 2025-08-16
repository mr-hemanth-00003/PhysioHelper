
'use server';

import { db } from '@/lib/firebase';
import { Article } from '@/lib/types';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
} from 'firebase/firestore';

const articlesCollection = collection(db, 'articles');

export async function getArticles(options: { featured?: boolean, limit?: number } = {}): Promise<Article[]> {
  try {
    const q = query(articlesCollection, orderBy('date', 'desc'));
    const snapshot = await getDocs(q);
    let articles = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Article));

    if (options.featured) {
        articles = articles.filter(a => a.featured);
    }
    if (options.limit) {
        articles = articles.slice(0, options.limit)
    }

    return articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function getArticle(id: string): Promise<Article | null> {
  try {
    const docRef = doc(db, 'articles', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Article;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function createArticle(articleData: Omit<Article, 'id' | 'date'>) {
    try {
        const newArticle = {
            ...articleData,
            date: new Date().toISOString().split('T')[0], // Set current date
            author: { // Example author, you might want to make this dynamic
                name: 'Dr. Emily Carter',
                avatarUrl: 'https://placehold.co/40x40.png',
            }
        };
        const docRef = await addDoc(articlesCollection, newArticle);
        return docRef.id;
    } catch (error) {
        console.error("Error creating article: ", error);
        throw new Error("Failed to create article.");
    }
}

export async function updateArticle(id: string, articleData: Partial<Omit<Article, 'id'>>) {
    try {
        const docRef = doc(db, 'articles', id);
        await updateDoc(docRef, articleData);
    } catch (error) {
        console.error("Error updating article: ", error);
        throw new Error("Failed to update article.");
    }
}

export async function deleteArticle(id: string) {
    try {
        const docRef = doc(db, 'articles', id);
        await deleteDoc(docRef);
    } catch (error) {
        console.error("Error deleting article: ", error);
        throw new Error("Failed to delete article.");
    }
}
