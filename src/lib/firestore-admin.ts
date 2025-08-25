import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  startAfter,
  Timestamp,
  writeBatch,
  onSnapshot,
  QuerySnapshot,
  DocumentData
} from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Types for Firestore documents
export interface FirestoreUser {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Timestamp;
  lastActive: Timestamp;
  profile: {
    avatar?: string;
    phone?: string;
    institution?: string;
    specialization?: string;
  };
}

export interface FirestoreDrug {
  id: string;
  name: string;
  genericName?: string;
  category: string;
  subcategory?: string;
  description: string;
  indications: string[];
  contraindications: string[];
  sideEffects: string[];
  dosage: string;
  interactions: string[];
  status: 'active' | 'inactive' | 'pending';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
}

export interface FirestoreBook {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
  academicYear: 'first-year' | 'second-year' | 'third-year' | 'fourth-year' | 'internship';
  description: string;
  fileUrl: string;
  fileSize: number;
  status: 'published' | 'draft' | 'archived';
  tags: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
  downloads: number;
  views: number;
}

export interface FirestoreCourse {
  id: string;
  title: string;
  description: string;
  modules: number;
  duration: number; // in hours
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'active' | 'inactive' | 'draft';
  enrolledStudents: number;
  completionRate: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
  tags: string[];
  thumbnail?: string;
}

export interface FirestoreAssessment {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  description: string;
  questions: number;
  timeLimit: number; // in minutes
  passingScore: number;
  attempts: number;
  status: 'active' | 'inactive' | 'draft';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  createdBy: string;
  totalAttempts: number;
  averageScore: number;
}

export interface FirestoreAnalytics {
  id: string;
  date: Timestamp;
  totalUsers: number;
  activeUsers: number;
  newUsers: number;
  totalCourses: number;
  totalAssessments: number;
  totalBooks: number;
  totalDrugs: number;
  courseCompletions: number;
  assessmentAttempts: number;
  bookDownloads: number;
  drugSearches: number;
}

// Generic CRUD operations
export class FirestoreService {
  // Users
  static async getUsers(limitCount: number = 50): Promise<FirestoreUser[]> {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, orderBy('createdAt', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreUser));
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  static async getUserById(id: string): Promise<FirestoreUser | null> {
    try {
      const userRef = doc(db, 'users', id);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        return { id: userSnap.id, ...userSnap.data() } as FirestoreUser;
      }
      return null;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }

  static async createUser(userData: Omit<FirestoreUser, 'id' | 'createdAt' | 'lastActive'>): Promise<string> {
    try {
      const userRef = collection(db, 'users');
      const newUser = {
        ...userData,
        createdAt: Timestamp.now(),
        lastActive: Timestamp.now()
      };
      const docRef = await addDoc(userRef, newUser);
      return docRef.id;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  static async updateUser(id: string, userData: Partial<FirestoreUser>): Promise<void> {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        ...userData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  static async deleteUser(id: string): Promise<void> {
    try {
      const userRef = doc(db, 'users', id);
      await deleteDoc(userRef);
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  // Drugs
  static async getDrugs(limitCount: number = 50): Promise<FirestoreDrug[]> {
    try {
      const drugsRef = collection(db, 'drugs');
      const q = query(drugsRef, orderBy('name', 'asc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreDrug));
    } catch (error) {
      console.error('Error fetching drugs:', error);
      throw error;
    }
  }

  static async getDrugsByCategory(category: string): Promise<FirestoreDrug[]> {
    try {
      const drugsRef = collection(db, 'drugs');
      const q = query(drugsRef, where('category', '==', category), orderBy('name', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreDrug));
    } catch (error) {
      console.error('Error fetching drugs by category:', error);
      throw error;
    }
  }

  static async createDrug(drugData: Omit<FirestoreDrug, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    try {
      const drugRef = collection(db, 'drugs');
      const newDrug = {
        ...drugData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      const docRef = await addDoc(drugRef, newDrug);
      return docRef.id;
    } catch (error) {
      console.error('Error creating drug:', error);
      throw error;
    }
  }

  static async updateDrug(id: string, drugData: Partial<FirestoreDrug>): Promise<void> {
    try {
      const drugRef = doc(db, 'drugs', id);
      await updateDoc(drugRef, {
        ...drugData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating drug:', error);
      throw error;
    }
  }

  static async deleteDrug(id: string): Promise<void> {
    try {
      const drugRef = doc(db, 'drugs', id);
      await deleteDoc(drugRef);
    } catch (error) {
      console.error('Error deleting drug:', error);
      throw error;
    }
  }

  // Books
  static async getBooks(limitCount: number = 50): Promise<FirestoreBook[]> {
    try {
      const booksRef = collection(db, 'books');
      const q = query(booksRef, orderBy('createdAt', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreBook));
    } catch (error) {
      console.error('Error fetching books:', error);
      throw error;
    }
  }

  static async getBooksByYear(year: number): Promise<FirestoreBook[]> {
    try {
      const booksRef = collection(db, 'books');
      const q = query(booksRef, where('year', '==', year), orderBy('title', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreBook));
    } catch (error) {
      console.error('Error fetching books by year:', error);
      throw error;
    }
  }

  static async getBooksByAcademicYear(academicYear: string): Promise<FirestoreBook[]> {
    try {
      const booksRef = collection(db, 'books');
      const q = query(booksRef, where('academicYear', '==', academicYear), orderBy('title', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreBook));
    } catch (error) {
      console.error('Error fetching books by academic year:', error);
      throw error;
    }
  }

  static async createBook(bookData: Omit<FirestoreBook, 'id' | 'createdAt' | 'updatedAt' | 'downloads' | 'views'>): Promise<string> {
    try {
      const bookRef = collection(db, 'books');
      const newBook = {
        ...bookData,
        downloads: 0,
        views: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      const docRef = await addDoc(bookRef, newBook);
      return docRef.id;
    } catch (error) {
      console.error('Error creating book:', error);
      throw error;
    }
  }

  static async updateBook(id: string, bookData: Partial<FirestoreBook>): Promise<void> {
    try {
      const bookRef = doc(db, 'books', id);
      await updateDoc(bookRef, {
        ...bookData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating book:', error);
      throw error;
    }
  }

  static async deleteBook(id: string): Promise<void> {
    try {
      const bookRef = doc(db, 'books', id);
      await deleteDoc(bookRef);
    } catch (error) {
      console.error('Error deleting book:', error);
      throw error;
    }
  }

  // Courses
  static async getCourses(limitCount: number = 50): Promise<FirestoreCourse[]> {
    try {
      const coursesRef = collection(db, 'courses');
      const q = query(coursesRef, orderBy('createdAt', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreCourse));
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  }

  static async createCourse(courseData: Omit<FirestoreCourse, 'id' | 'createdAt' | 'updatedAt' | 'enrolledStudents' | 'completionRate'>): Promise<string> {
    try {
      const courseRef = collection(db, 'courses');
      const newCourse = {
        ...courseData,
        enrolledStudents: 0,
        completionRate: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      const docRef = await addDoc(courseRef, newCourse);
      return docRef.id;
    } catch (error) {
      console.error('Error creating course:', error);
      throw error;
    }
  }

  static async updateCourse(id: string, courseData: Partial<FirestoreCourse>): Promise<void> {
    try {
      const courseRef = doc(db, 'courses', id);
      await updateDoc(courseRef, {
        ...courseData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating course:', error);
      throw error;
    }
  }

  static async deleteCourse(id: string): Promise<void> {
    try {
      const courseRef = doc(db, 'courses', id);
      await deleteDoc(courseRef);
    } catch (error) {
      console.error('Error deleting course:', error);
      throw error;
    }
  }

  // Assessments
  static async getAssessments(limitCount: number = 50): Promise<FirestoreAssessment[]> {
    try {
      const assessmentsRef = collection(db, 'assessments');
      const q = query(assessmentsRef, orderBy('createdAt', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreAssessment));
    } catch (error) {
      console.error('Error fetching assessments:', error);
      throw error;
    }
  }

  static async getAssessmentsByCourse(courseId: string): Promise<FirestoreAssessment[]> {
    try {
      const assessmentsRef = collection(db, 'assessments');
      const q = query(assessmentsRef, where('courseId', '==', courseId), orderBy('title', 'asc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreAssessment));
    } catch (error) {
      console.error('Error fetching assessments by course:', error);
      throw error;
    }
  }

  static async createAssessment(assessmentData: Omit<FirestoreAssessment, 'id' | 'createdAt' | 'updatedAt' | 'totalAttempts' | 'averageScore'>): Promise<string> {
    try {
      const assessmentRef = collection(db, 'assessments');
      const newAssessment = {
        ...assessmentData,
        totalAttempts: 0,
        averageScore: 0,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };
      const docRef = await addDoc(assessmentRef, newAssessment);
      return docRef.id;
    } catch (error) {
      console.error('Error creating assessment:', error);
      throw error;
    }
  }

  static async updateAssessment(id: string, assessmentData: Partial<FirestoreAssessment>): Promise<void> {
    try {
      const assessmentRef = doc(db, 'assessments', id);
      await updateDoc(assessmentRef, {
        ...assessmentData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating assessment:', error);
      throw error;
    }
  }

  static async deleteAssessment(id: string): Promise<void> {
    try {
      const assessmentRef = doc(db, 'assessments', id);
      await deleteDoc(assessmentRef);
    } catch (error) {
      console.error('Error deleting assessment:', error);
      throw error;
    }
  }

  // Analytics
  static async getAnalytics(limitCount: number = 30): Promise<FirestoreAnalytics[]> {
    try {
      const analyticsRef = collection(db, 'analytics');
      const q = query(analyticsRef, orderBy('date', 'desc'), limit(limitCount));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreAnalytics));
    } catch (error) {
      console.error('Error fetching analytics:', error);
      throw error;
    }
  }

  static async getLatestAnalytics(): Promise<FirestoreAnalytics | null> {
    try {
      const analyticsRef = collection(db, 'analytics');
      const q = query(analyticsRef, orderBy('date', 'desc'), limit(1));
      const snapshot = await getDocs(q);
      if (snapshot.docs.length > 0) {
        return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as FirestoreAnalytics;
      }
      return null;
    } catch (error) {
      console.error('Error fetching latest analytics:', error);
      throw error;
    }
  }

  // Dashboard Statistics
  static async getDashboardStats(): Promise<{
    totalUsers: number;
    totalDrugs: number;
    totalBooks: number;
    totalAssessments: number;
    activeUsers: number;
    newUsersThisMonth: number;
    totalCourses: number;
    totalResources: number;
  }> {
    try {
      const [users, drugs, books, assessments, courses, latestAnalytics] = await Promise.all([
        this.getUsers(1000),
        this.getDrugs(1000),
        this.getBooks(1000),
        this.getAssessments(1000),
        this.getCourses(1000),
        this.getLatestAnalytics()
      ]);

      const now = new Date();
      const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
      const monthStartTimestamp = Timestamp.fromDate(monthStart);

      const newUsersThisMonth = users.filter(user => 
        user.createdAt.toDate() >= monthStart
      ).length;

      const activeUsers = users.filter(user => 
        user.lastActive.toDate() >= new Date(Date.now() - 24 * 60 * 60 * 1000) // Last 24 hours
      ).length;

      return {
        totalUsers: users.length,
        totalDrugs: drugs.length,
        totalBooks: books.length,
        totalAssessments: assessments.length,
        activeUsers,
        newUsersThisMonth,
        totalCourses: courses.length,
        totalResources: books.length + assessments.length + courses.length
      };
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      throw error;
    }
  }

  // Search functionality
  static async searchUsers(searchTerm: string): Promise<FirestoreUser[]> {
    try {
      const users = await this.getUsers(1000);
      return users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching users:', error);
      throw error;
    }
  }

  static async searchDrugs(searchTerm: string): Promise<FirestoreDrug[]> {
    try {
      const drugs = await this.getDrugs(1000);
      return drugs.filter(drug => 
        drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching drugs:', error);
      throw error;
    }
  }

  static async searchBooks(searchTerm: string): Promise<FirestoreBook[]> {
    try {
      const books = await this.getBooks(1000);
      return books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.error('Error searching books:', error);
      throw error;
    }
  }

  // Real-time listeners
  static onUsersSnapshot(callback: (users: FirestoreUser[]) => void): () => void {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, orderBy('createdAt', 'desc'), limit(50));
    
    return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreUser));
      callback(users);
    });
  }

  static onDrugsSnapshot(callback: (drugs: FirestoreDrug[]) => void): () => void {
    const drugsRef = collection(db, 'drugs');
    const q = query(drugsRef, orderBy('name', 'asc'), limit(50));
    
    return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const drugs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreDrug));
      callback(drugs);
    });
  }

  static onBooksSnapshot(callback: (books: FirestoreBook[]) => void): () => void {
    const booksRef = collection(db, 'books');
    const q = query(booksRef, orderBy('createdAt', 'desc'), limit(50));
    
    return onSnapshot(q, (snapshot: QuerySnapshot<DocumentData>) => {
      const books = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FirestoreBook));
      callback(books);
    });
  }

  // Batch operations
  static async batchUpdateUsers(updates: { id: string; data: Partial<FirestoreUser> }[]): Promise<void> {
    try {
      const batch = writeBatch(db);
      
      updates.forEach(({ id, data }) => {
        const userRef = doc(db, 'users', id);
        batch.update(userRef, {
          ...data,
          updatedAt: Timestamp.now()
        });
      });
      
      await batch.commit();
    } catch (error) {
      console.error('Error batch updating users:', error);
      throw error;
    }
  }

  static async batchDeleteUsers(userIds: string[]): Promise<void> {
    try {
      const batch = writeBatch(db);
      
      userIds.forEach(id => {
        const userRef = doc(db, 'users', id);
        batch.delete(userRef);
      });
      
      await batch.commit();
    } catch (error) {
      console.error('Error batch deleting users:', error);
      throw error;
    }
  }
}

export default FirestoreService;
