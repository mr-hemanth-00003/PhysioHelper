import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { Pool, PoolClient } from 'pg';

// Firebase configuration for authentication only
let app: any = null;
let auth: any = null;

// Only initialize Firebase if environment variables are available
if (typeof window === 'undefined' && process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
  }
}

// Neon PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Database table schemas
const CREATE_TABLES_SQL = `
  -- Users table (extends Firebase Auth)
  CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'student' CHECK (role IN ('student', 'teacher', 'admin')),
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    profile JSONB
  );

  -- Drugs table
  CREATE TABLE IF NOT EXISTS drugs (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    generic_name VARCHAR(255),
    category VARCHAR(100) NOT NULL,
    subcategory VARCHAR(100),
    description TEXT,
    indications TEXT[],
    contraindications TEXT[],
    side_effects TEXT[],
    dosage TEXT,
    interactions TEXT[],
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'pending')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) REFERENCES users(id)
  );

  -- Books table
  CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year INTEGER NOT NULL,
    category VARCHAR(100) NOT NULL,
    academic_year VARCHAR(50) NOT NULL CHECK (academic_year IN ('first-year', 'second-year', 'third-year', 'fourth-year', 'internship')),
    description TEXT,
    file_url TEXT,
    file_size BIGINT,
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('published', 'draft', 'archived')),
    tags TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) REFERENCES users(id),
    downloads INTEGER DEFAULT 0,
    views INTEGER DEFAULT 0
  );

  -- Courses table
  CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    modules INTEGER DEFAULT 1,
    duration INTEGER DEFAULT 1, -- in hours
    difficulty VARCHAR(50) DEFAULT 'beginner' CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('active', 'inactive', 'draft')),
    enrolled_students INTEGER DEFAULT 0,
    completion_rate DECIMAL(5,2) DEFAULT 0.0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) REFERENCES users(id)
  );

  -- Assessments table
  CREATE TABLE IF NOT EXISTS assessments (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('quiz', 'exam', 'practical', 'case-study')),
    difficulty VARCHAR(50) DEFAULT 'beginner' CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')),
    questions INTEGER DEFAULT 1,
    time_limit INTEGER DEFAULT 30, -- in minutes
    passing_score INTEGER DEFAULT 70,
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('active', 'inactive', 'draft')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) REFERENCES users(id)
  );

  -- Analytics table
  CREATE TABLE IF NOT EXISTS analytics (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    resource_type VARCHAR(50),
    resource_id INTEGER,
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Create indexes for better performance
  CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
  CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
  CREATE INDEX IF NOT EXISTS idx_drugs_category ON drugs(category);
  CREATE INDEX IF NOT EXISTS idx_drugs_name ON drugs(name);
  CREATE INDEX IF NOT EXISTS idx_books_academic_year ON books(academic_year);
  CREATE INDEX IF NOT EXISTS idx_books_category ON books(category);
  CREATE INDEX IF NOT EXISTS idx_courses_difficulty ON courses(difficulty);
  CREATE INDEX IF NOT EXISTS idx_assessments_type ON assessments(type);
  CREATE INDEX IF NOT EXISTS idx_analytics_user_id ON analytics(user_id);
  CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);
`;

export interface DatabaseUser {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: Date;
  lastActive: Date;
  profile?: {
    avatar?: string;
    phone?: string;
    institution?: string;
    specialization?: string;
  };
}

export interface DatabaseDrug {
  id: number;
  name: string;
  genericName?: string;
  category: string;
  subcategory?: string;
  description?: string;
  indications?: string[];
  contraindications?: string[];
  sideEffects?: string[];
  dosage?: string;
  interactions?: string[];
  status: 'active' | 'inactive' | 'pending';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface DatabaseBook {
  id: number;
  title: string;
  author: string;
  year: number;
  category: string;
  academicYear: 'first-year' | 'second-year' | 'third-year' | 'fourth-year' | 'internship';
  description?: string;
  fileUrl?: string;
  fileSize?: number;
  status: 'published' | 'draft' | 'archived';
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  downloads: number;
  views: number;
}

export interface DatabaseCourse {
  id: number;
  title: string;
  description?: string;
  modules: number;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'active' | 'inactive' | 'draft';
  enrolledStudents: number;
  completionRate: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export interface DatabaseAssessment {
  id: number;
  title: string;
  type: 'quiz' | 'exam' | 'practical' | 'case-study';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: number;
  timeLimit: number;
  passingScore: number;
  status: 'active' | 'inactive' | 'draft';
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export class HybridDatabaseService {
  // Firebase Authentication Methods
  static async signIn(email: string, password: string) {
    if (!auth) {
      throw new Error('Firebase not initialized. Please check your configuration.');
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw new Error(`Authentication failed: ${error}`);
    }
  }

  static async signUp(email: string, password: string, name: string) {
    if (!auth) {
      throw new Error('Firebase not initialized. Please check your configuration.');
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Create user profile in PostgreSQL
      await this.createUser({
        id: user.uid,
        email: user.email!,
        name,
        role: 'student',
        status: 'active'
      });
      
      return user;
    } catch (error) {
      throw new Error(`Registration failed: ${error}`);
    }
  }

  static async signOut() {
    if (!auth) {
      throw new Error('Firebase not initialized. Please check your configuration.');
    }
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(`Sign out failed: ${error}`);
    }
  }

  static onAuthStateChanged(callback: (user: User | null) => void) {
    if (!auth) {
      console.warn('Firebase not initialized. Auth state change listener not available.');
      return () => {}; // Return empty cleanup function
    }
    return onAuthStateChanged(auth, callback);
  }

  static getCurrentUser(): User | null {
    if (!auth) return null;
    return auth.currentUser;
  }

  // Database Initialization
  static async initializeDatabase() {
    try {
      const client = await pool.connect();
      await client.query(CREATE_TABLES_SQL);
      client.release();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }

  // User Management
  static async createUser(userData: Omit<DatabaseUser, 'createdAt' | 'lastActive'>) {
    const client = await pool.connect();
    try {
      const query = `
        INSERT INTO users (id, email, name, role, status, profile)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
      `;
      const values = [userData.id, userData.email, userData.name, userData.role, userData.status, userData.profile];
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getUsers(limit: number = 50): Promise<DatabaseUser[]> {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM users ORDER BY created_at DESC LIMIT $1`;
      const result = await client.query(query, [limit]);
      return result.rows.map(row => ({
        ...row,
        createdAt: row.created_at,
        lastActive: row.last_active
      }));
    } finally {
      client.release();
    }
  }

  static async getUser(id: string): Promise<DatabaseUser | null> {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM users WHERE id = $1`;
      const result = await client.query(query, [id]);
      if (result.rows.length === 0) return null;
      
      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.created_at,
        lastActive: row.last_active
      };
    } finally {
      client.release();
    }
  }

  static async updateUser(id: string, updates: Partial<DatabaseUser>) {
    const client = await pool.connect();
    try {
      const setClause = Object.keys(updates)
        .filter(key => key !== 'id' && key !== 'createdAt')
        .map((key, index) => `${key.replace(/([A-Z])/g, '_$1').toLowerCase()} = $${index + 2}`)
        .join(', ');
      
      const query = `UPDATE users SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE id = $1 RETURNING *`;
      const values = [id, ...Object.values(updates).filter((_, index) => Object.keys(updates)[index] !== 'id' && Object.keys(updates)[index] !== 'createdAt')];
      
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  // Drug Management
  static async createDrug(drugData: Omit<DatabaseDrug, 'id' | 'createdAt' | 'updatedAt'>) {
    const client = await pool.connect();
    try {
      const query = `
        INSERT INTO drugs (name, generic_name, category, subcategory, description, indications, contraindications, side_effects, dosage, interactions, status, created_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        RETURNING *
      `;
      const values = [
        drugData.name, drugData.genericName, drugData.category, drugData.subcategory,
        drugData.description, drugData.indications, drugData.contraindications,
        drugData.sideEffects, drugData.dosage, drugData.interactions,
        drugData.status, drugData.createdBy
      ];
      const result = await client.query(query, values);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getDrugs(limit: number = 50): Promise<DatabaseDrug[]> {
    const client = await pool.connect();
    try {
      const query = `SELECT * FROM drugs ORDER BY name ASC LIMIT $1`;
      const result = await client.query(query, [limit]);
      return result.rows.map(row => ({
        ...row,
        genericName: row.generic_name,
        subcategory: row.subcategory,
        sideEffects: row.side_effects,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        createdBy: row.created_by
      }));
    } finally {
      client.release();
    }
  }

  static async searchDrugs(query: string, limit: number = 20): Promise<DatabaseDrug[]> {
    const client = await pool.connect();
    try {
      const searchQuery = `
        SELECT * FROM drugs 
        WHERE name ILIKE $1 OR generic_name ILIKE $1 OR category ILIKE $1
        ORDER BY name ASC 
        LIMIT $2
      `;
      const result = await client.query(searchQuery, [`%${query}%`, limit]);
      return result.rows.map(row => ({
        ...row,
        genericName: row.generic_name,
        subcategory: row.subcategory,
        sideEffects: row.side_effects,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        createdBy: row.created_by
      }));
    } finally {
      client.release();
    }
  }

  // Book Management
  static async createBook(book: Omit<DatabaseBook, 'id' | 'createdAt' | 'updatedAt'>): Promise<DatabaseBook> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO books (title, author, description, category, academic_year, year, file_url, file_size, downloads, views, status, tags)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
         RETURNING *`,
        [book.title, book.author, book.description, book.category, book.academicYear, book.year, book.fileUrl, book.fileSize, book.downloads, book.views, book.status, book.tags]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getBooksByYear(academicYear: string): Promise<DatabaseBook[]> {
    const client = await pool.connect();
    try {
      let query = 'SELECT * FROM books';
      let params: string[] = [];
      
      if (academicYear !== 'all') {
        query += ' WHERE academic_year = $1';
        params = [academicYear];
      }
      
      query += ' ORDER BY created_at DESC';
      const result = await client.query(query, params);
      return result.rows;
    } finally {
      client.release();
    }
  }

  // Course Management
  static async createCourse(course: Omit<DatabaseCourse, 'id' | 'createdAt' | 'updatedAt'>): Promise<DatabaseCourse> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO courses (title, description, difficulty, modules, duration, enrolled_students, completion_rate, status, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
         RETURNING *`,
        [course.title, course.description, course.difficulty, course.modules, course.duration, course.enrolledStudents, course.completionRate, course.status, course.createdBy]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getCourses(limit: number = 100): Promise<DatabaseCourse[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM courses ORDER BY created_at DESC LIMIT $1',
        [limit]
      );
      return result.rows;
    } finally {
      client.release();
    }
  }

  // Assessment Management
  static async createAssessment(assessment: Omit<DatabaseAssessment, 'id' | 'createdAt' | 'updatedAt'>): Promise<DatabaseAssessment> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO assessments (title, type, difficulty, questions, time_limit, passing_score, status, created_by)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING *`,
        [assessment.title, assessment.type, assessment.difficulty, assessment.questions, assessment.timeLimit, assessment.passingScore, assessment.status, assessment.createdBy]
      );
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  static async getAssessments(limit: number = 100): Promise<DatabaseAssessment[]> {
    const client = await pool.connect();
    try {
      const result = await client.query(
        'SELECT * FROM assessments ORDER BY created_at DESC LIMIT $1',
        [limit]
      );
      return result.rows;
    } finally {
      client.release();
    }
  }

  // Dashboard Statistics
  static async getDashboardStats() {
    const client = await pool.connect();
    try {
      const statsQuery = `
        SELECT 
          (SELECT COUNT(*) FROM users) as total_users,
          (SELECT COUNT(*) FROM users WHERE status = 'active') as active_users,
          (SELECT COUNT(*) FROM drugs) as total_drugs,
          (SELECT COUNT(*) FROM books) as total_books,
          (SELECT COUNT(*) FROM courses) as total_courses,
          (SELECT COUNT(*) FROM assessments) as total_assessments
      `;
      
      const result = await client.query(statsQuery);
      return result.rows[0];
    } finally {
      client.release();
    }
  }

  // Get database connection
  static async getConnection() {
    return await pool.connect();
  }

  // Close database connection
  static async close() {
    await pool.end();
  }
}

export default HybridDatabaseService;
