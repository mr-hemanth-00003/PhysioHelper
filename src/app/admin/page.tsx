'use client';

import { useState, useEffect } from 'react';
import { AdminAuth } from '@/components/admin-auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  FileText, 
  Settings, 
  BarChart3, 
  Shield, 
  Database, 
  Activity,
  Plus,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Users2,
  BookOpenCheck,
  GraduationCap,
  Stethoscope,
  Brain,
  Dumbbell,
  Heart,
  Zap,
  Globe,
  Target,
  Lightbulb,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

// Database interfaces
interface DatabaseStats {
  total_users: number;
  total_drugs: number;
  total_books: number;
  total_assessments: number;
  active_users: number;
  total_courses: number;
}

interface DatabaseUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
  last_active: string;
}

interface DatabaseDrug {
  id: string;
  name: string;
  generic_name?: string;
  category: string;
  subcategory?: string;
  status: string;
}

interface DatabaseBook {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
  academic_year: string;
  status: string;
  downloads: number;
  views: number;
}

interface DatabaseCourse {
  id: string;
  title: string;
  description?: string;
  difficulty: string;
  modules: number;
  duration: number;
  enrolled_students: number;
  completion_rate: number;
  status: string;
}

interface DatabaseAssessment {
  id: string;
  title: string;
  type: string;
  difficulty: string;
  questions: number;
  time_limit: number;
  passing_score: number;
  status: string;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Real data state
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDrugs: 0,
    totalBooks: 0,
    totalAssessments: 0,
    activeUsers: 0,
    newUsersThisMonth: 0,
    totalCourses: 0,
    totalResources: 0
  });

  const [users, setUsers] = useState<DatabaseUser[]>([]);
  const [drugs, setDrugs] = useState<DatabaseDrug[]>([]);
  const [books, setBooks] = useState<DatabaseBook[]>([]);
  const [courses, setCourses] = useState<DatabaseCourse[]>([]);
  const [assessments, setAssessments] = useState<DatabaseAssessment[]>([]);

  // Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  useEffect(() => {
    // Check if admin is authenticated
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    }
  }, [isAuthenticated]);

  const fetchAllData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Fetch dashboard statistics
      const statsResponse = await fetch('/api/admin/dashboard');
      if (!statsResponse.ok) throw new Error('Failed to fetch stats');
      const dashboardStats: DatabaseStats = await statsResponse.json();
      
      setStats({
        totalUsers: dashboardStats.total_users || 0,
        totalDrugs: dashboardStats.total_drugs || 0,
        totalBooks: dashboardStats.total_books || 0,
        totalAssessments: dashboardStats.total_assessments || 0,
        activeUsers: dashboardStats.active_users || 0,
        newUsersThisMonth: 0, // Will be calculated separately
        totalCourses: dashboardStats.total_courses || 0,
        totalResources: (dashboardStats.total_books || 0) + (dashboardStats.total_courses || 0)
      });

      // Fetch all data
      const [usersResponse, drugsResponse, booksResponse, coursesResponse, assessmentsResponse] = await Promise.all([
        fetch('/api/admin/users?limit=100'),
        fetch('/api/admin/drugs?limit=100'),
        fetch('/api/admin/books?limit=100'),
        fetch('/api/admin/courses?limit=100'),
        fetch('/api/admin/assessments?limit=100')
      ]);

      if (!usersResponse.ok) throw new Error('Failed to fetch users');
      if (!drugsResponse.ok) throw new Error('Failed to fetch drugs');
      if (!booksResponse.ok) throw new Error('Failed to fetch books');
      if (!coursesResponse.ok) throw new Error('Failed to fetch courses');
      if (!assessmentsResponse.ok) throw new Error('Failed to fetch assessments');

      const [usersData, drugsData, booksData, coursesData, assessmentsData] = await Promise.all([
        usersResponse.json(),
        drugsResponse.json(),
        booksResponse.json(),
        coursesResponse.json(),
        assessmentsResponse.json()
      ]);

      setUsers(usersData);
      setDrugs(drugsData);
      setBooks(booksData);
      setCourses(coursesData);
      setAssessments(assessmentsData);

    } catch (error) {
      console.error('Failed to fetch data:', error);
      setError('Failed to fetch data from database. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeedDatabase = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/admin/seed', { method: 'POST' });
      if (!response.ok) throw new Error('Failed to seed database');
      
      await fetchAllData(); // Refresh data after seeding
      alert('Database seeded successfully!');
    } catch (error) {
      console.error('Failed to seed database:', error);
      setError('Failed to seed database. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearDatabase = async () => {
    if (confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/admin/clear', { method: 'POST' });
        if (!response.ok) throw new Error('Failed to clear database');
        
        await fetchAllData(); // Refresh data after clearing
        alert('Database cleared successfully!');
      } catch (error) {
        console.error('Failed to clear database:', error);
        setError('Failed to clear database. Please check your connection.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleRefreshData = () => {
    fetchAllData();
  };

  // Filter and search functions
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredDrugs = drugs.filter(drug => 
    drug.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    drug.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (drug.generic_name && drug.generic_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAssessments = assessments.filter(assessment => 
    assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assessment.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assessment.difficulty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAuthenticated) {
    return <AdminAuth onAuthSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
              <p className="text-muted-foreground">Manage your PhysioHelper platform</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleRefreshData} disabled={isLoading}>
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh Data
              </Button>
              <Button variant="outline" onClick={handleSeedDatabase} disabled={isLoading}>
                <Database className="h-4 w-4 mr-2" />
                Seed Database
              </Button>
              <Button variant="destructive" onClick={handleClearDatabase} disabled={isLoading}>
                <Trash2 className="h-4 w-4 mr-2" />
                Clear Database
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  localStorage.removeItem('adminAuthenticated');
                  setIsAuthenticated(false);
                }}
              >
                <Shield className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <div className="flex items-center gap-2 text-destructive">
              <AlertCircle className="h-5 w-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="mb-6 p-4 bg-muted/50 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2">
              <RefreshCw className="h-5 w-5 animate-spin" />
              <span>Loading data...</span>
            </div>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="drugs">Drugs</TabsTrigger>
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalUsers}</div>
                  <p className="text-xs text-muted-foreground">
                    {stats.activeUsers} active users
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Drugs</CardTitle>
                  <Stethoscope className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalDrugs}</div>
                  <p className="text-xs text-muted-foreground">
                    Comprehensive medication database
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Books</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalBooks}</div>
                  <p className="text-xs text-muted-foreground">
                    Academic resources available
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.totalCourses}</div>
                  <p className="text-xs text-muted-foreground">
                    Learning modules available
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                  <CardDescription>Common administrative tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button onClick={handleSeedDatabase} disabled={isLoading} className="w-full">
                      <Database className="h-4 w-4 mr-2" />
                      Seed Database
                    </Button>
                    <Button onClick={handleRefreshData} disabled={isLoading} variant="outline" className="w-full">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh Data
                    </Button>
                  </div>
                  <Button onClick={handleClearDatabase} disabled={isLoading} variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Platform health and performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database Connection</span>
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Authentication</span>
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Build Status</span>
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Success
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">User Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="student">Students</SelectItem>
                  <SelectItem value="teacher">Teachers</SelectItem>
                  <SelectItem value="admin">Admins</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {filteredUsers.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No users found</p>
                    <p className="text-sm text-muted-foreground">Try seeding the database or check your connection</p>
                  </CardContent>
                </Card>
              ) : (
                filteredUsers.map((user) => (
                  <Card key={user.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant={user.role === 'admin' ? 'destructive' : user.role === 'teacher' ? 'default' : 'secondary'}>
                                {user.role}
                              </Badge>
                              <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                                {user.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Drugs Tab */}
          <TabsContent value="drugs" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Drug Database</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Drug
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search drugs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="analgesic">Analgesics</SelectItem>
                  <SelectItem value="nsaid">NSAIDs</SelectItem>
                  <SelectItem value="antibiotic">Antibiotics</SelectItem>
                  <SelectItem value="antiviral">Antivirals</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {filteredDrugs.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No drugs found</p>
                    <p className="text-sm text-muted-foreground">Try seeding the database or check your connection</p>
                  </CardContent>
                </Card>
              ) : (
                filteredDrugs.map((drug) => (
                  <Card key={drug.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Stethoscope className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{drug.name}</h3>
                            {drug.generic_name && (
                              <p className="text-sm text-muted-foreground">Generic: {drug.generic_name}</p>
                            )}
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{drug.category}</Badge>
                              {drug.subcategory && (
                                <Badge variant="secondary">{drug.subcategory}</Badge>
                              )}
                              <Badge variant={drug.status === 'active' ? 'default' : 'secondary'}>
                                {drug.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Library Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Book
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search books..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  <SelectItem value="first-year">First Year</SelectItem>
                  <SelectItem value="second-year">Second Year</SelectItem>
                  <SelectItem value="third-year">Third Year</SelectItem>
                  <SelectItem value="fourth-year">Fourth Year</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {filteredBooks.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No books found</p>
                    <p className="text-sm text-muted-foreground">Try seeding the database or check your connection</p>
                  </CardContent>
                </Card>
              ) : (
                filteredBooks.map((book) => (
                  <Card key={book.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{book.title}</h3>
                            <p className="text-sm text-muted-foreground">By {book.author} ({book.year})</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{book.category}</Badge>
                              <Badge variant="secondary">{book.academic_year}</Badge>
                              <Badge variant={book.status === 'published' ? 'default' : 'secondary'}>
                                {book.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Downloads: {book.downloads}</span>
                              <span>Views: {book.views}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Course Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {filteredCourses.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <GraduationCap className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No courses found</p>
                    <p className="text-sm text-muted-foreground">Try seeding the database or check your connection</p>
                  </CardContent>
                </Card>
              ) : (
                filteredCourses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            {course.description && (
                              <p className="text-sm text-muted-foreground">{course.description}</p>
                            )}
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{course.difficulty}</Badge>
                              <Badge variant="secondary">{course.status}</Badge>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Modules: {course.modules}</span>
                              <span>Duration: {course.duration}h</span>
                              <span>Students: {course.enrolled_students}</span>
                              <span>Completion: {course.completion_rate}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Assessments Tab */}
          <TabsContent value="assessments" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Assessment Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Assessment
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search assessments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedFilter} onValueChange={setSelectedFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="quiz">Quizzes</SelectItem>
                  <SelectItem value="exam">Exams</SelectItem>
                  <SelectItem value="practical">Practical</SelectItem>
                  <SelectItem value="case-study">Case Studies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4">
              {filteredAssessments.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground">No assessments found</p>
                    <p className="text-sm text-muted-foreground">Try seeding the database or check your connection</p>
                  </CardContent>
                </Card>
              ) : (
                filteredAssessments.map((assessment) => (
                  <Card key={assessment.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{assessment.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline">{assessment.type}</Badge>
                              <Badge variant="secondary">{assessment.difficulty}</Badge>
                              <Badge variant={assessment.status === 'active' ? 'default' : 'secondary'}>
                                {assessment.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                              <span>Questions: {assessment.questions}</span>
                              <span>Time: {assessment.time_limit}min</span>
                              <span>Passing: {assessment.passing_score}%</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Analytics & Insights</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Overview</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Users</span>
                    <span className="font-semibold">{stats.totalUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Users</span>
                    <span className="font-semibold">{stats.activeUsers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Total Resources</span>
                    <span className="font-semibold">{stats.totalResources}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database Health</span>
                    <Badge variant="default" className="bg-green-500">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Excellent
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest platform updates and changes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Database seeded successfully</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">New users registered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Content updates pending</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* System Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">System Management</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Database Operations</CardTitle>
                  <CardDescription>Manage your database and data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button onClick={handleSeedDatabase} disabled={isLoading} className="w-full">
                    <Database className="h-4 w-4 mr-2" />
                    Seed Database
                  </Button>
                  <Button onClick={handleRefreshData} disabled={isLoading} variant="outline" className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refresh Data
                  </Button>
                  <Button onClick={handleClearDatabase} disabled={isLoading} variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear All Data
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Information</CardTitle>
                  <CardDescription>Platform details and configuration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Platform</span>
                    <span className="font-semibold">PhysioHelper</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Framework</span>
                    <span className="font-semibold">Next.js 15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Database</span>
                    <span className="font-semibold">Neon PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Authentication</span>
                    <span className="font-semibold">Firebase Auth</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
