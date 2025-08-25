// Client-side admin service for the admin panel
// This avoids importing server-side packages like 'pg' in client components

export interface AdminStats {
  totalUsers: number;
  totalDrugs: number;
  totalBooks: number;
  totalAssessments: number;
  activeUsers: number;
  newUsersThisMonth: number;
  totalCourses: number;
  totalResources: number;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  lastActive: string;
}

export interface AdminDrug {
  id: string;
  name: string;
  genericName?: string;
  category: string;
  subcategory?: string;
  status: 'active' | 'inactive' | 'pending';
}

export interface AdminBook {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
  academicYear: string;
  status: 'published' | 'draft' | 'archived';
  downloads: number;
  views: number;
}

export interface AdminCourse {
  id: string;
  title: string;
  description?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  modules: number;
  duration: number;
  enrolledStudents: number;
  completionRate: number;
  status: 'active' | 'draft' | 'archived';
}

export interface AdminAssessment {
  id: string;
  title: string;
  type: 'quiz' | 'exam' | 'practical' | 'case-study';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questions: number;
  timeLimit: number;
  passingScore: number;
  status: 'active' | 'draft' | 'archived';
}

// Mock data for development
const mockUsers: AdminUser[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'student',
    status: 'active',
    createdAt: '2024-01-15T10:00:00Z',
    lastActive: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'teacher',
    status: 'active',
    createdAt: '2024-01-10T09:00:00Z',
    lastActive: '2024-01-20T16:45:00Z'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@physiohelper.com',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-01T00:00:00Z',
    lastActive: '2024-01-20T17:00:00Z'
  }
];

const mockDrugs: AdminDrug[] = [
  {
    id: '1',
    name: 'Ibuprofen',
    genericName: 'Ibuprofen',
    category: 'NSAID',
    subcategory: 'Analgesic',
    status: 'active'
  },
  {
    id: '2',
    name: 'Paracetamol',
    genericName: 'Acetaminophen',
    category: 'Analgesic',
    subcategory: 'Antipyretic',
    status: 'active'
  },
  {
    id: '3',
    name: 'Amoxicillin',
    genericName: 'Amoxicillin',
    category: 'Antibiotic',
    subcategory: 'Penicillin',
    status: 'active'
  }
];

const mockBooks: AdminBook[] = [
  {
    id: '1',
    title: 'Anatomy & Physiology Fundamentals',
    author: 'Dr. Sarah Johnson',
    year: 2024,
    category: 'Textbook',
    academicYear: 'first-year',
    status: 'published',
    downloads: 156,
    views: 342
  },
  {
    id: '2',
    title: 'Clinical Assessment Techniques',
    author: 'Prof. Michael Chen',
    year: 2023,
    category: 'Reference',
    academicYear: 'second-year',
    status: 'published',
    downloads: 89,
    views: 201
  },
  {
    id: '3',
    title: 'Advanced Physiotherapy Methods',
    author: 'Dr. Emily Rodriguez',
    year: 2024,
    category: 'Textbook',
    academicYear: 'third-year',
    status: 'published',
    downloads: 67,
    views: 134
  }
];

const mockCourses: AdminCourse[] = [
  {
    id: '1',
    title: 'Introduction to Physiotherapy',
    description: 'Basic concepts and principles of physiotherapy',
    difficulty: 'beginner',
    modules: 8,
    duration: 24,
    enrolledStudents: 45,
    completionRate: 78,
    status: 'active'
  },
  {
    id: '2',
    title: 'Advanced Assessment Techniques',
    description: 'Comprehensive assessment methods and tools',
    difficulty: 'intermediate',
    modules: 12,
    duration: 36,
    enrolledStudents: 32,
    completionRate: 65,
    status: 'active'
  },
  {
    id: '3',
    title: 'Specialized Treatment Protocols',
    description: 'Advanced treatment methods for specific conditions',
    difficulty: 'advanced',
    modules: 15,
    duration: 48,
    enrolledStudents: 18,
    completionRate: 42,
    status: 'active'
  }
];

const mockAssessments: AdminAssessment[] = [
  {
    id: '1',
    title: 'Basic Anatomy Quiz',
    type: 'quiz',
    difficulty: 'beginner',
    questions: 20,
    timeLimit: 30,
    passingScore: 70,
    status: 'active'
  },
  {
    id: '2',
    title: 'Clinical Skills Assessment',
    type: 'practical',
    difficulty: 'intermediate',
    questions: 15,
    timeLimit: 60,
    passingScore: 80,
    status: 'active'
  },
  {
    id: '3',
    title: 'Advanced Case Study Exam',
    type: 'case-study',
    difficulty: 'advanced',
    questions: 25,
    timeLimit: 90,
    passingScore: 75,
    status: 'active'
  }
];

export class AdminClientService {
  // Simulate API calls with delays
  private static delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async getDashboardStats(): Promise<AdminStats> {
    await this.delay(500); // Simulate network delay
    return {
      totalUsers: mockUsers.length,
      totalDrugs: mockDrugs.length,
      totalBooks: mockBooks.length,
      totalAssessments: mockAssessments.length,
      activeUsers: mockUsers.filter(u => u.status === 'active').length,
      newUsersThisMonth: 2,
      totalCourses: mockCourses.length,
      totalResources: mockBooks.length + mockCourses.length
    };
  }

  static async getUsers(limit: number = 100): Promise<AdminUser[]> {
    await this.delay(300);
    return mockUsers.slice(0, limit);
  }

  static async getDrugs(limit: number = 100): Promise<AdminDrug[]> {
    await this.delay(300);
    return mockDrugs.slice(0, limit);
  }

  static async getBooks(limit: number = 100): Promise<AdminBook[]> {
    await this.delay(300);
    return mockBooks.slice(0, limit);
  }

  static async getCourses(limit: number = 100): Promise<AdminCourse[]> {
    await this.delay(300);
    return mockCourses.slice(0, limit);
  }

  static async getAssessments(limit: number = 100): Promise<AdminAssessment[]> {
    await this.delay(300);
    return mockAssessments.slice(0, limit);
  }

  static async seedDatabase(): Promise<void> {
    await this.delay(1000);
    // In a real implementation, this would call the server API
    console.log('Database seeded successfully (mock)');
  }

  static async clearDatabase(): Promise<void> {
    await this.delay(800);
    // In a real implementation, this would call the server API
    console.log('Database cleared successfully (mock)');
  }
}
