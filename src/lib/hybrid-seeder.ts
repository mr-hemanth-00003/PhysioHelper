import HybridDatabaseService, { DatabaseUser, DatabaseDrug, DatabaseBook, DatabaseCourse, DatabaseAssessment } from './hybrid-database';

// Sample data for seeding
export const sampleUsers: Omit<DatabaseUser, 'createdAt' | 'lastActive'>[] = [
  {
    id: 'admin-user-1',
    email: 'admin@physiohelper.com',
    name: 'Admin User',
    role: 'admin',
    status: 'active',
    profile: {
      institution: 'PhysioHelper University',
      specialization: 'Platform Administration'
    }
  },
  {
    id: 'teacher-user-1',
    email: 'teacher@physiohelper.com',
    name: 'Dr. Sarah Johnson',
    role: 'teacher',
    status: 'active',
    profile: {
      institution: 'University of Physiotherapy',
      specialization: 'Orthopedic Physiotherapy'
    }
  },
  {
    id: 'student-user-1',
    email: 'student@physiohelper.com',
    name: 'John Doe',
    role: 'student',
    status: 'active',
    profile: {
      institution: 'PhysioHelper University',
      specialization: 'General Physiotherapy'
    }
  }
];

export const sampleDrugs: Omit<DatabaseDrug, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Paracetamol',
    genericName: 'Acetaminophen',
    category: 'Analgesic',
    subcategory: 'Non-opioid',
    description: 'Pain reliever and fever reducer',
    indications: ['Pain relief', 'Fever reduction'],
    contraindications: ['Liver disease', 'Alcohol abuse'],
    sideEffects: ['Nausea', 'Liver damage in high doses'],
    dosage: '500-1000mg every 4-6 hours',
    interactions: ['Warfarin', 'Alcohol'],
    status: 'active',
    createdBy: 'admin-user-1'
  },
  {
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    category: 'NSAID',
    subcategory: 'Anti-inflammatory',
    description: 'Non-steroidal anti-inflammatory drug',
    indications: ['Pain relief', 'Inflammation reduction', 'Fever'],
    contraindications: ['Stomach ulcers', 'Kidney disease'],
    sideEffects: ['Stomach upset', 'Increased bleeding risk'],
    dosage: '200-400mg every 4-6 hours',
    interactions: ['Blood thinners', 'ACE inhibitors'],
    status: 'active',
    createdBy: 'admin-user-1'
  },
  {
    name: 'Diclofenac',
    genericName: 'Diclofenac sodium',
    category: 'NSAID',
    subcategory: 'Anti-inflammatory',
    description: 'Strong anti-inflammatory medication',
    indications: ['Arthritis pain', 'Muscle pain', 'Inflammation'],
    contraindications: ['Heart disease', 'Stomach ulcers'],
    sideEffects: ['Stomach irritation', 'Dizziness'],
    dosage: '50mg twice daily',
    interactions: ['Blood pressure medications', 'Diuretics'],
    status: 'active',
    createdBy: 'admin-user-1'
  }
];

export const sampleBooks: Omit<DatabaseBook, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Anatomy & Physiology for Physiotherapists',
    author: 'Dr. Robert Johnson',
    year: 2024,
    category: 'Anatomy',
    academicYear: 'first-year',
    description: 'Comprehensive guide to human anatomy and physiology',
    fileUrl: 'https://example.com/anatomy-physio-2024.pdf',
    fileSize: 2048576,
    status: 'published',
    tags: ['anatomy', 'physiology', 'first-year'],
    createdBy: 'admin-user-1',
    downloads: 150,
    views: 300
  },
  {
    title: 'Pathology Fundamentals',
    author: 'Dr. Maria Garcia',
    year: 2024,
    category: 'Pathology',
    academicYear: 'second-year',
    description: 'Essential pathology concepts for physiotherapy students',
    fileUrl: 'https://example.com/pathology-fundamentals.pdf',
    fileSize: 1536000,
    status: 'published',
    tags: ['pathology', 'second-year', 'fundamentals'],
    createdBy: 'admin-user-1',
    downloads: 120,
    views: 250
  },
  {
    title: 'Exercise Therapy Principles',
    author: 'Dr. James Wilson',
    year: 2024,
    category: 'Exercise Therapy',
    academicYear: 'second-year',
    description: 'Core principles of therapeutic exercise',
    fileUrl: 'https://example.com/exercise-therapy.pdf',
    fileSize: 1792000,
    status: 'published',
    tags: ['exercise therapy', 'second-year', 'principles'],
    createdBy: 'admin-user-1',
    downloads: 180,
    views: 400
  }
];

export const sampleCourses: Omit<DatabaseCourse, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Manual Therapy Fundamentals',
    description: 'Comprehensive manual therapy course for beginners',
    modules: 12,
    duration: 48,
    difficulty: 'beginner',
    status: 'active',
    enrolledStudents: 45,
    completionRate: 78.5,
    createdBy: 'teacher-user-1'
  },
  {
    title: 'Advanced Assessment Techniques',
    description: 'Advanced clinical assessment methods',
    modules: 8,
    duration: 32,
    difficulty: 'advanced',
    status: 'active',
    enrolledStudents: 28,
    completionRate: 65.2,
    createdBy: 'teacher-user-1'
  },
  {
    title: 'Biomechanics in Practice',
    description: 'Practical application of biomechanical principles',
    modules: 10,
    duration: 40,
    difficulty: 'intermediate',
    status: 'active',
    enrolledStudents: 35,
    completionRate: 82.1,
    createdBy: 'teacher-user-1'
  }
];

export const sampleAssessments: Omit<DatabaseAssessment, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Anatomy Quiz 1',
    type: 'quiz',
    difficulty: 'beginner',
    questions: 20,
    timeLimit: 30,
    passingScore: 70,
    status: 'active',
    createdBy: 'teacher-user-1'
  },
  {
    title: 'Manual Therapy Practical',
    type: 'practical',
    difficulty: 'intermediate',
    questions: 15,
    timeLimit: 45,
    passingScore: 75,
    status: 'active',
    createdBy: 'teacher-user-1'
  },
  {
    title: 'Biomechanics Final Exam',
    type: 'exam',
    difficulty: 'advanced',
    questions: 50,
    timeLimit: 120,
    passingScore: 80,
    status: 'active',
    createdBy: 'teacher-user-1'
  }
];

// Seeding functions
export async function seedDatabase() {
  try {
    console.log('Initializing database...');
    await HybridDatabaseService.initializeDatabase();
    
    console.log('Seeding users...');
    for (const user of sampleUsers) {
      await HybridDatabaseService.createUser(user);
    }
    
    console.log('Seeding drugs...');
    for (const drug of sampleDrugs) {
      await HybridDatabaseService.createDrug(drug);
    }
    
    console.log('Seeding books...');
    for (const book of sampleBooks) {
      await HybridDatabaseService.createBook(book);
    }
    
    console.log('Seeding courses...');
    for (const course of sampleCourses) {
      await HybridDatabaseService.createCourse(course);
    }
    
    console.log('Seeding assessments...');
    for (const assessment of sampleAssessments) {
      await HybridDatabaseService.createAssessment(assessment);
    }
    
    console.log('Database seeded successfully!');
    return true;
  } catch (error) {
    console.error('Failed to seed database:', error);
    throw error;
  }
}

export async function clearDatabase() {
  try {
    const client = await HybridDatabaseService.getConnection();
    
    // Clear all data (in reverse order due to foreign key constraints)
    await client.query('DELETE FROM analytics');
    await client.query('DELETE FROM assessments');
    await client.query('DELETE FROM courses');
    await client.query('DELETE FROM books');
    await client.query('DELETE FROM drugs');
    await client.query('DELETE FROM users');
    
    client.release();
    console.log('Database cleared successfully!');
    return true;
  } catch (error) {
    console.error('Failed to clear database:', error);
    throw error;
  }
}

export async function isDatabaseEmpty(): Promise<boolean> {
  try {
    const stats = await HybridDatabaseService.getDashboardStats();
    return (
      stats.total_users === 0 &&
      stats.total_drugs === 0 &&
      stats.total_books === 0 &&
      stats.total_courses === 0 &&
      stats.total_assessments === 0
    );
  } catch (error) {
    console.error('Failed to check database status:', error);
    return true; // Assume empty if we can't check
  }
}

export async function getDatabaseStats() {
  try {
    const stats = await HybridDatabaseService.getDashboardStats();
    return {
      users: stats.total_users || 0,
      drugs: stats.total_drugs || 0,
      books: stats.total_books || 0,
      courses: stats.total_courses || 0,
      assessments: stats.total_assessments || 0
    };
  } catch (error) {
    console.error('Failed to get database stats:', error);
    return {
      users: 0,
      drugs: 0,
      books: 0,
      courses: 0,
      assessments: 0
    };
  }
}

export default {
  seedDatabase,
  clearDatabase,
  isDatabaseEmpty,
  getDatabaseStats,
  sampleUsers,
  sampleDrugs,
  sampleBooks,
  sampleCourses,
  sampleAssessments
};
