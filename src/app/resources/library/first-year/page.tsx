'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Search,
  Calendar,
  GraduationCap,
  Filter,
  Download,
  Eye,
  Star,
  Clock,
  ArrowRight,
  Library,
  BookOpenCheck,
  Award,
  Target,
  Heart,
  Brain,
  Dumbbell,
  Stethoscope,
  Microscope,
  ClipboardList,
  Activity,
  BookMarked,
  Users,
  CheckCircle,
  Play,
  Bookmark,
  Share2,
  TrendingUp,
  ThumbsUp,
  Lightbulb,
  Globe,
  Zap
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FirstYearPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");

  const subjects = [
    { id: "all", name: "All Subjects", icon: BookOpen, count: 45 },
    { id: "anatomy", name: "Anatomy", icon: Heart, count: 12 },
    { id: "physiology", name: "Physiology", icon: Brain, count: 10 },
    { id: "biochemistry", name: "Biochemistry", icon: Microscope, count: 8 },
    { id: "sociology", name: "Sociology", icon: Users, count: 5 },
    { id: "nursing", name: "Basic Nursing", icon: Stethoscope, count: 6 },
    { id: "english", name: "English", icon: BookMarked, count: 2 },
    { id: "intro", name: "Introduction to Physiotherapy", icon: ClipboardList, count: 2 }
  ];

  const featuredBooks = [
    {
      title: "Gray's Anatomy for Students",
      author: "Richard Drake, A. Wayne Vogl, Adam W. M. Mitchell",
      edition: "5th Edition",
      year: "2024",
      subject: "Anatomy",
      description: "The most comprehensive and student-friendly anatomy textbook, featuring over 1,000 illustrations and clinical correlations.",
      difficulty: "Intermediate",
      pages: 1152,
      rating: 4.9,
      views: 3456,
      downloads: 2891,
      icon: Heart,
      color: "from-red-500 to-red-600",
      isNew: true,
      isPopular: true,
      isFeatured: true
    },
    {
      title: "Guyton and Hall Textbook of Medical Physiology",
      author: "John E. Hall, Michael E. Hall",
      edition: "14th Edition",
      year: "2023",
      subject: "Physiology",
      description: "Comprehensive physiology textbook covering all major body systems with clinical correlations and case studies.",
      difficulty: "Intermediate",
      pages: 1152,
      rating: 4.8,
      views: 2891,
      downloads: 2345,
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      isNew: false,
      isPopular: true,
      isFeatured: true
    },
    {
      title: "Lehninger Principles of Biochemistry",
      author: "David L. Nelson, Michael M. Cox",
      edition: "8th Edition",
      year: "2023",
      subject: "Biochemistry",
      description: "Comprehensive biochemistry textbook covering molecular biology, metabolism, and clinical applications.",
      difficulty: "Advanced",
      pages: 1328,
      rating: 4.7,
      views: 2156,
      downloads: 1876,
      icon: Microscope,
      color: "from-purple-500 to-purple-600",
      isNew: false,
      isPopular: true,
      isFeatured: true
    }
  ];

  const allBooks = [
    ...featuredBooks,
    {
      title: "Clinical Anatomy by Regions",
      author: "Richard S. Snell",
      edition: "10th Edition",
      year: "2024",
      subject: "Anatomy",
      description: "Regional approach to anatomy with clinical correlations and case studies.",
      difficulty: "Intermediate",
      pages: 768,
      rating: 4.6,
      views: 1567,
      downloads: 1234,
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      isNew: true,
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Vander's Human Physiology",
      author: "Eric P. Widmaier, Hershel Raff, Kevin T. Strang",
      edition: "16th Edition",
      year: "2023",
      subject: "Physiology",
      description: "Student-friendly physiology textbook with clear explanations and clinical examples.",
      difficulty: "Intermediate",
      pages: 800,
      rating: 4.5,
      views: 987,
      downloads: 765,
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      isNew: false,
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Harper's Illustrated Biochemistry",
      author: "Robert K. Murray, David A. Bender, Kathleen M. Botham",
      edition: "31st Edition",
      year: "2022",
      subject: "Biochemistry",
      description: "Illustrated biochemistry textbook with clinical correlations and medical applications.",
      difficulty: "Advanced",
      pages: 704,
      rating: 4.4,
      views: 2345,
      downloads: 1987,
      icon: Microscope,
      color: "from-green-500 to-green-600",
      isNew: false,
      isPopular: false,
      isFeatured: false
    }
  ];

  const filteredBooks = selectedSubject === "all" 
    ? allBooks 
    : allBooks.filter(book => book.subject.toLowerCase().includes(selectedSubject));

  const searchedBooks = searchQuery 
    ? filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.subject.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBooks;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-green-500/60 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-emerald-500/70 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-teal-500/50 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 px-3 sm:px-4 py-2 mb-4 sm:mb-6 animate-fade-in text-xs sm:text-sm">
                <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                First Year BPT
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 sm:mb-6 leading-tight">
                First Year
                <span className="gradient-text block">BPT Resources</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Foundation subjects and introduction to physiotherapy principles. Access comprehensive textbooks, 
                study guides, and resources for your first year of physiotherapy education.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for books, authors, subjects, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-500 ease-out text-sm sm:text-base shadow-lg"
                />
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <span>45+ Books</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-emerald-500" />
                  <span>8 Subjects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-teal-500" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subject Filter */}
        <section className="py-8 sm:py-12 bg-white/50 border-b border-border/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {subjects.map((subject) => (
                <Button
                  key={subject.id}
                  variant={selectedSubject === subject.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedSubject(subject.id)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                >
                  <subject.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                  {subject.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {subject.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Books */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Featured
                <span className="gradient-text block">Books</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Essential textbooks recommended for first-year BPT students.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {featuredBooks.map((book, index) => (
                <Card key={book.title} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${book.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${book.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <book.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {book.isNew && (
                          <Badge className="bg-green-500 text-white text-xs">New</Badge>
                        )}
                        {book.isPopular && (
                          <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                        )}
                        {book.isFeatured && (
                          <Badge className="bg-blue-500 text-white text-xs">Featured</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-headline group-hover:text-green-600 transition-colors duration-300">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {book.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Book Meta */}
                    <div className="space-y-3">
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Author:</span>
                        <span className="text-muted-foreground ml-2">{book.author}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Subject:</span>
                        <span className="text-muted-foreground ml-2">{book.subject}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Edition:</span>
                        <span className="text-muted-foreground ml-2">{book.edition}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Year:</span>
                        <span className="text-muted-foreground ml-2">{book.year}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-foreground">Pages:</span>
                        <span className="text-muted-foreground ml-2">{book.pages}</span>
                      </div>
                    </div>

                    {/* Resource Meta */}
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {book.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {book.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {book.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {book.downloads.toLocaleString()}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Read Book
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Books */}
        <section className="py-12 sm:py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                All First Year
                <span className="gradient-text block">Books</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Complete collection of first-year BPT textbooks and study materials.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {searchedBooks.map((book, index) => (
                <Card key={book.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${book.color}`}></div>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-10 h-10 bg-gradient-to-br ${book.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <book.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex gap-1">
                        {book.isNew && (
                          <Badge className="bg-green-500 text-white text-xs">New</Badge>
                        )}
                        {book.isPopular && (
                          <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-base font-headline group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                      {book.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    {/* Book Meta */}
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-semibold text-foreground">Author:</span>
                        <span className="text-muted-foreground ml-1 line-clamp-1">{book.author}</span>
                      </div>
                      <div className="flex gap-4">
                        <span className="font-semibold text-foreground">{book.subject}</span>
                        <span className="text-muted-foreground">{book.year}</span>
                      </div>
                    </div>

                    {/* Resource Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {book.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {book.views.toLocaleString()}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Read Book
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results Message */}
            {searchedBooks.length === 0 && (
              <Card className="text-center py-16">
                <CardContent>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">No books found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Try adjusting your search criteria or browse by subject to discover relevant books.
                  </p>
                  <Button onClick={() => { setSearchQuery(''); setSelectedSubject('all'); }} variant="outline">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Navigation to Other Years */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Explore Other
                <span className="gradient-text block">Academic Years</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Continue your journey through the BPT program with resources for all academic years.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <Link href="/resources/library/second-year">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer">
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpenCheck className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-headline group-hover:text-blue-600 transition-colors duration-300">
                      Second Year BPT
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Core physiotherapy subjects and therapeutic techniques
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/resources/library/third-year">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Stethoscope className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-headline group-hover:text-purple-600 transition-colors duration-300">
                      Third Year BPT
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Clinical subjects and specialized physiotherapy areas
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/resources/library/fourth-year">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-headline group-hover:text-orange-600 transition-colors duration-300">
                      Fourth Year BPT
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Specialized physiotherapy practice and clinical applications
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>

              <Link href="/resources/library/internship">
                <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden cursor-pointer">
                  <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-headline group-hover:text-indigo-600 transition-colors duration-300">
                      Internship
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      Compulsory rotatory internship resources and guides
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
