import FirestoreService, { 
  FirestoreUser, 
  FirestoreDrug, 
  FirestoreBook, 
  FirestoreCourse, 
  FirestoreAssessment,
  FirestoreAnalytics 
} from './firestore-admin';
import { Timestamp } from 'firebase/firestore';

// Sample data for seeding the database
export const sampleUsers: Omit<FirestoreUser, 'id' | 'createdAt' | 'lastActive'>[] = [
  {
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'student',
    status: 'active',
    profile: {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      phone: '+1-555-0123',
      institution: 'University of Physiotherapy',
      specialization: 'Orthopedic Physiotherapy'
    }
  },
  {
    email: 'jane.smith@example.com',
    name: 'Jane Smith',
    role: 'teacher',
    status: 'active',
    profile: {
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      phone: '+1-555-0124',
      institution: 'University of Physiotherapy',
      specialization: 'Neurological Physiotherapy'
    }
  },
  {
    email: 'admin@physiohelper.com',
    name: 'Admin User',
    role: 'admin',
    status: 'active',
    profile: {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      phone: '+1-555-0125',
      institution: 'PhysioHelper',
      specialization: 'System Administration'
    }
  },
  {
    email: 'mike.wilson@example.com',
    name: 'Mike Wilson',
    role: 'student',
    status: 'active',
    profile: {
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      phone: '+1-555-0126',
      institution: 'University of Physiotherapy',
      specialization: 'Sports Physiotherapy'
    }
  },
  {
    email: 'sarah.johnson@example.com',
    name: 'Sarah Johnson',
    role: 'teacher',
    status: 'active',
    profile: {
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      phone: '+1-555-0127',
      institution: 'University of Physiotherapy',
      specialization: 'Cardiorespiratory Physiotherapy'
    }
  }
];

export const sampleDrugs: Omit<FirestoreDrug, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    name: 'Paracetamol',
    genericName: 'Acetaminophen',
    category: 'Analgesic',
    subcategory: 'Non-opioid',
    description: 'A pain reliever and fever reducer used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers.',
    indications: ['Pain relief', 'Fever reduction'],
    contraindications: ['Liver disease', 'Alcoholism'],
    sideEffects: ['Nausea', 'Stomach upset', 'Liver problems'],
    dosage: '500-1000mg every 4-6 hours as needed',
    interactions: ['Warfarin', 'Alcohol'],
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  },
  {
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    category: 'Anti-inflammatory',
    subcategory: 'NSAID',
    description: 'A nonsteroidal anti-inflammatory drug used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.',
    indications: ['Pain relief', 'Inflammation reduction', 'Fever reduction'],
    contraindications: ['Stomach ulcers', 'Kidney disease', 'Heart disease'],
    sideEffects: ['Stomach upset', 'Dizziness', 'Headache'],
    dosage: '200-400mg every 4-6 hours as needed',
    interactions: ['Aspirin', 'Blood thinners'],
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  },
  {
    name: 'Amoxicillin',
    genericName: 'Amoxicillin',
    category: 'Antibiotic',
    subcategory: 'Penicillin',
    description: 'A penicillin antibiotic that fights bacteria in the body. It is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
    indications: ['Bacterial infections', 'Respiratory infections', 'Urinary tract infections'],
    contraindications: ['Penicillin allergy', 'Mononucleosis'],
    sideEffects: ['Diarrhea', 'Nausea', 'Rash'],
    dosage: '250-500mg three times daily',
    interactions: ['Birth control pills', 'Methotrexate'],
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  }
];

export const sampleBooks: Omit<FirestoreBook, 'id' | 'createdAt' | 'updatedAt' | 'downloads' | 'views'>[] = [
  {
    title: 'Anatomy & Physiology for Physiotherapists',
    author: 'Dr. Robert Johnson',
    year: 2024,
    category: 'Anatomy',
    academicYear: 'first-year',
    description: 'Comprehensive guide to human anatomy and physiology specifically designed for physiotherapy students.',
    fileUrl: 'https://example.com/books/anatomy-physiology-2024.pdf',
    fileSize: 25.6, // MB
    status: 'published',
    tags: ['anatomy', 'physiology', 'first-year', 'foundation'],
    createdBy: 'admin@physiohelper.com'
  },
  {
    title: 'Biomechanics and Kinesiology',
    author: 'Dr. Sarah Williams',
    year: 2024,
    category: 'Biomechanics',
    academicYear: 'second-year',
    description: 'Advanced study of human movement mechanics and the application of biomechanical principles in physiotherapy.',
    fileUrl: 'https://example.com/books/biomechanics-2024.pdf',
    fileSize: 18.9, // MB
    status: 'published',
    tags: ['biomechanics', 'kinesiology', 'second-year', 'movement'],
    createdBy: 'admin@physiohelper.com'
  },
  {
    title: 'Clinical Practice in Physiotherapy',
    author: 'Dr. Michael Brown',
    year: 2023,
    category: 'Clinical Practice',
    academicYear: 'third-year',
    description: 'Practical guide to clinical assessment and treatment techniques used in modern physiotherapy practice.',
    fileUrl: 'https://example.com/books/clinical-practice-2023.pdf',
    fileSize: 32.1, // MB
    status: 'published',
    tags: ['clinical', 'practice', 'third-year', 'assessment'],
    createdBy: 'admin@physiohelper.com'
  }
];

export const sampleCourses: Omit<FirestoreCourse, 'id' | 'createdAt' | 'updatedAt' | 'enrolledStudents' | 'completionRate'>[] = [
  {
    title: 'Anatomy & Physiology',
    description: 'Comprehensive course covering human anatomy and physiology fundamentals essential for physiotherapy practice.',
    modules: 8,
    duration: 120, // hours
    difficulty: 'beginner',
    status: 'active',
    createdBy: 'admin@physiohelper.com',
    tags: ['anatomy', 'physiology', 'foundation'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    title: 'Biomechanics',
    description: 'Study of human movement mechanics and the application of biomechanical principles in physiotherapy.',
    modules: 6,
    duration: 90, // hours
    difficulty: 'intermediate',
    status: 'active',
    createdBy: 'admin@physiohelper.com',
    tags: ['biomechanics', 'kinesiology', 'movement'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    title: 'Manual Therapy',
    description: 'Advanced techniques in manual therapy including joint mobilization, manipulation, and soft tissue techniques.',
    modules: 5,
    duration: 75, // hours
    difficulty: 'advanced',
    status: 'active',
    createdBy: 'admin@physiohelper.com',
    tags: ['manual-therapy', 'techniques', 'hands-on'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    title: 'Assessment Techniques',
    description: 'Comprehensive assessment methods and clinical reasoning in physiotherapy practice.',
    modules: 7,
    duration: 105, // hours
    difficulty: 'intermediate',
    status: 'active',
    createdBy: 'admin@physiohelper.com',
    tags: ['assessment', 'clinical-reasoning', 'diagnosis'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  },
  {
    title: 'Therapeutic Exercise',
    description: 'Design and implementation of therapeutic exercise programs for various patient populations.',
    modules: 6,
    duration: 90, // hours
    difficulty: 'intermediate',
    status: 'active',
    createdBy: 'admin@physiohelper.com',
    tags: ['exercise', 'therapy', 'rehabilitation'],
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
];

export const sampleAssessments: Omit<FirestoreAssessment, 'id' | 'createdAt' | 'updatedAt' | 'totalAttempts' | 'averageScore'>[] = [
  {
    title: 'Anatomy Quiz 1',
    courseId: 'course-1',
    courseName: 'Anatomy & Physiology',
    description: 'Basic anatomy quiz covering skeletal and muscular systems.',
    questions: 25,
    timeLimit: 30, // minutes
    passingScore: 70,
    attempts: 3,
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  },
  {
    title: 'Biomechanics Test',
    courseId: 'course-2',
    courseName: 'Biomechanics',
    description: 'Comprehensive test on biomechanical principles and applications.',
    questions: 30,
    timeLimit: 45, // minutes
    passingScore: 75,
    attempts: 2,
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  },
  {
    title: 'Clinical Skills Assessment',
    courseId: 'course-3',
    courseName: 'Manual Therapy',
    description: 'Practical assessment of manual therapy techniques and skills.',
    questions: 20,
    timeLimit: 60, // minutes
    passingScore: 80,
    attempts: 1,
    status: 'active',
    createdBy: 'admin@physiohelper.com'
  }
];

export const sampleAnalytics: Omit<FirestoreAnalytics, 'id'>[] = [
  {
    date: Timestamp.now(),
    totalUsers: 1247,
    activeUsers: 892,
    newUsers: 156,
    totalCourses: 12,
    totalAssessments: 89,
    totalBooks: 156,
    totalDrugs: 2847,
    courseCompletions: 234,
    assessmentAttempts: 567,
    bookDownloads: 1234,
    drugSearches: 5678
  }
];

// Function to seed the database
export async function seedDatabase() {
  try {
    console.log('Starting database seeding...');

    // Seed Users
    console.log('Seeding users...');
    for (const userData of sampleUsers) {
      await FirestoreService.createUser(userData);
    }

    // Seed Drugs
    console.log('Seeding drugs...');
    for (const drugData of sampleDrugs) {
      await FirestoreService.createDrug(drugData);
    }

    // Seed Books
    console.log('Seeding books...');
    for (const bookData of sampleBooks) {
      await FirestoreService.createBook(bookData);
    }

    // Seed Courses
    console.log('Seeding courses...');
    for (const courseData of sampleCourses) {
      await FirestoreService.createCourse(courseData);
    }

    // Seed Assessments
    console.log('Seeding assessments...');
    for (const assessmentData of sampleAssessments) {
      await FirestoreService.createAssessment(assessmentData);
    }

    // Seed Analytics
    console.log('Seeding analytics...');
    for (const analyticsData of sampleAnalytics) {
      // Note: Analytics collection might need to be created manually
      console.log('Analytics data ready for manual insertion');
    }

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
}

// Function to clear the database (use with caution!)
export async function clearDatabase() {
  try {
    console.log('Starting database clearing...');
    
    // Get all documents from each collection
    const [users, drugs, books, courses, assessments] = await Promise.all([
      FirestoreService.getUsers(1000),
      FirestoreService.getDrugs(1000),
      FirestoreService.getBooks(1000),
      FirestoreService.getCourses(1000),
      FirestoreService.getAssessments(1000)
    ]);

    // Delete all documents
    const deletePromises = [
      ...users.map(user => FirestoreService.deleteUser(user.id)),
      ...drugs.map(drug => FirestoreService.deleteDrug(drug.id)),
      ...books.map(book => FirestoreService.deleteBook(book.id)),
      ...courses.map(course => FirestoreService.deleteCourse(course.id)),
      ...assessments.map(assessment => FirestoreService.deleteAssessment(assessment.id))
    ];

    await Promise.all(deletePromises);
    console.log('Database cleared successfully!');
  } catch (error) {
    console.error('Error clearing database:', error);
    throw error;
  }
}

// Function to check if database is empty
export async function isDatabaseEmpty(): Promise<boolean> {
  try {
    const [users, drugs, books, courses, assessments] = await Promise.all([
      FirestoreService.getUsers(1),
      FirestoreService.getDrugs(1),
      FirestoreService.getBooks(1),
      FirestoreService.getCourses(1),
      FirestoreService.getAssessments(1)
    ]);

    return users.length === 0 && drugs.length === 0 && books.length === 0 && 
           courses.length === 0 && assessments.length === 0;
  } catch (error) {
    console.error('Error checking database status:', error);
    return true; // Assume empty if error
  }
}

// Function to get database statistics
export async function getDatabaseStats(): Promise<{
  users: number;
  drugs: number;
  books: number;
  courses: number;
  assessments: number;
}> {
  try {
    const [users, drugs, books, courses, assessments] = await Promise.all([
      FirestoreService.getUsers(1000),
      FirestoreService.getDrugs(1000),
      FirestoreService.getBooks(1000),
      FirestoreService.getCourses(1000),
      FirestoreService.getAssessments(1000)
    ]);

    return {
      users: users.length,
      drugs: drugs.length,
      books: books.length,
      courses: courses.length,
      assessments: assessments.length
    };
  } catch (error) {
    console.error('Error getting database stats:', error);
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
  sampleAssessments,
  sampleAnalytics
};
