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
  BookMarked,
  GraduationCap,
  Filter,
  Download,
  Eye,
  Star,
  Clock,
  Users,
  ArrowRight,
  Library,
  BookOpenCheck,
  Award,
  Target,
  Lightbulb,
  Globe,
  Zap,
  CheckCircle,
  Play,
  Bookmark,
  Share2,
  TrendingUp,
  ThumbsUp,
  Heart,
  Brain,
  Dumbbell,
  Stethoscope,
  Microscope,
  ClipboardList,
  Activity
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const years = [
    { id: "all", name: "All Years", count: 200 },
    { id: "2024", name: "2024", count: 23 },
    { id: "2023", name: "2023", count: 31 },
    { id: "2022", name: "2022", count: 28 },
    { id: "2021", name: "2021", count: 25 },
    { id: "2020", name: "2020", count: 22 },
    { id: "2019", name: "2019", count: 20 },
    { id: "2018", name: "2018", count: 18 },
    { id: "2017", name: "2017", count: 15 },
    { id: "2016", name: "2016", count: 12 },
    { id: "2015", name: "2015", count: 10 },
    { id: "2014", name: "2014", count: 8 },
    { id: "2013", name: "2013", count: 7 },
    { id: "2012", name: "2012", count: 6 },
    { id: "2011", name: "2011", count: 5 },
    { id: "2010", name: "2010", count: 4 }
  ];

     const categories = [
     { id: "all", name: "All Categories", icon: BookOpen, count: 200 },
     { id: "anatomy", name: "Anatomy & Physiology", icon: Heart, count: 35 },
     { id: "clinical", name: "Clinical Skills", icon: ClipboardList, count: 45 },
     { id: "rehab", name: "Rehabilitation", icon: Dumbbell, count: 32 },
     { id: "neurology", name: "Neurology", icon: Brain, count: 25 },
     { id: "sports", name: "Sports Medicine", icon: Activity, count: 28 },
     { id: "research", name: "Research & Evidence", icon: Microscope, count: 20 },
     { id: "exams", name: "Exam Preparation", icon: GraduationCap, count: 15 }
   ];

  const featuredBooks = [
    {
      title: "Gray's Anatomy for Students",
      author: "Richard Drake, A. Wayne Vogl, Adam W. M. Mitchell",
      edition: "5th Edition",
      year: "2024",
      category: "Anatomy & Physiology",
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
      title: "Clinical Assessment in Physiotherapy",
      author: "Lynn S. Lippert",
      edition: "3rd Edition",
      year: "2023",
      category: "Clinical Skills",
      description: "Comprehensive guide to physiotherapy assessment techniques with case studies and clinical reasoning frameworks.",
      difficulty: "Advanced",
      pages: 856,
      rating: 4.8,
      views: 2891,
      downloads: 2345,
      icon: ClipboardList,
      color: "from-blue-500 to-blue-600",
      isNew: false,
      isPopular: true,
      isFeatured: true
    },
    {
      title: "Neurological Rehabilitation",
      author: "Darcy A. Umphred, Rolando T. Lazaro",
      edition: "7th Edition",
      year: "2023",
      category: "Neurology",
      description: "Evidence-based approaches to neurological rehabilitation with treatment protocols and outcome measures.",
      difficulty: "Advanced",
      pages: 1248,
      rating: 4.7,
      views: 2156,
      downloads: 1876,
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      isNew: false,
      isPopular: true,
      isFeatured: true
    }
  ];

  const allBooks = [
    ...featuredBooks,
    {
      title: "Sports Rehabilitation and Injury Prevention",
      author: "William E. Prentice",
      edition: "6th Edition",
      year: "2024",
      category: "Sports Medicine",
      description: "Comprehensive guide to sports injury management and rehabilitation protocols.",
      difficulty: "Intermediate",
      pages: 768,
      rating: 4.6,
      views: 1567,
      downloads: 1234,
      icon: Activity,
      color: "from-orange-500 to-orange-600",
      isNew: true,
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Evidence-Based Practice in Physiotherapy",
      author: "Elizabeth Dean, Robert Herbert",
      edition: "4th Edition",
      year: "2023",
      category: "Research & Evidence",
      description: "Guide to implementing evidence-based practice in clinical physiotherapy settings.",
      difficulty: "Advanced",
      pages: 432,
      rating: 4.5,
      views: 987,
      downloads: 765,
      icon: Microscope,
      color: "from-indigo-500 to-indigo-600",
      isNew: false,
      isPopular: false,
      isFeatured: false
    },
    {
      title: "Board Review for Physical Therapists",
      author: "Susan B. O'Sullivan, Thomas J. Schmitz",
      edition: "8th Edition",
      year: "2022",
      category: "Exam Preparation",
      description: "Comprehensive review for physical therapy board examinations with practice questions.",
      difficulty: "Advanced",
      pages: 1156,
      rating: 4.4,
      views: 2345,
      downloads: 1987,
      icon: GraduationCap,
      color: "from-green-500 to-green-600",
      isNew: false,
      isPopular: false,
      isFeatured: false
    }
  ];

  const filteredBooks = selectedYear === "all" && selectedCategory === "all"
    ? allBooks
    : allBooks.filter(book => {
        const yearMatch = selectedYear === "all" || book.year === selectedYear;
        const categoryMatch = selectedCategory === "all" || book.category === categories.find(cat => cat.id === selectedCategory)?.name;
        return yearMatch && categoryMatch;
      });

  const searchedBooks = searchQuery 
    ? filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredBooks;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-primary/60 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-secondary/70 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 sm:px-4 py-2 mb-4 sm:mb-6 animate-fade-in text-xs sm:text-sm">
                <Library className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Digital Library
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 sm:mb-6 leading-tight">
                Comprehensive
                <span className="gradient-text block">Book Library</span>
              </h1>
              
                             <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                 Access our extensive collection of physiotherapy textbooks, reference materials, and study resources 
                 organized by academic year (2010-2024) and category. Stay updated with the latest editions and evidence-based content.
               </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for books, authors, topics, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-500 ease-out text-sm sm:text-base shadow-lg"
                />
              </div>

              {/* Quick Stats */}
                             <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                 <div className="flex items-center gap-2">
                   <BookOpen className="h-4 w-4 text-primary" />
                   <span>200+ Books</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-secondary" />
                   <span>2010-2024</span>
                 </div>
                 <div className="flex items-center gap-2">
                   <Star className="h-4 w-4 text-accent" />
                   <span>4.8/5 Rating</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 sm:py-12 bg-white/50 border-b border-border/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-center mb-4">Filter by Year</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {years.map((year) => (
                  <Button
                    key={year.id}
                    variant={selectedYear === year.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedYear(year.id)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    {year.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {year.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-center mb-4">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm"
                  >
                    <category.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
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
                Our most popular and highly-rated textbooks that students and professionals rely on.
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
                    <CardTitle className="text-lg sm:text-xl font-headline group-hover:text-primary transition-colors duration-300">
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
                      <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
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

                 {/* BPT Academic Structure */}
         <section className="py-12 sm:py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
           <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12 sm:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                 BPT Academic
                 <span className="gradient-text block">Structure</span>
               </h2>
               <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                 Complete curriculum breakdown for Bachelor of Physiotherapy program with subject-wise book recommendations.
               </p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
               {/* First Year BPT */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                 <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <GraduationCap className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-green-500 text-white text-xs">Year 1</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     First Year BPT
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Foundation subjects and introduction to physiotherapy principles
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-3">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Anatomy</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Physiology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Biochemistry</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Sociology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Basic Nursing</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">English</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span className="font-medium">Introduction to Physiotherapy</span>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     View Books
                   </Button>
                 </CardContent>
               </Card>

               {/* Second Year BPT */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                 <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <BookOpenCheck className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-blue-500 text-white text-xs">Year 2</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     Second Year BPT
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Core physiotherapy subjects and therapeutic techniques
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-3">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Pathology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Microbiology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Pharmacology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Exercise Therapy</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Electrotherapy</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Biomechanics & Kinesiology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                       <span className="font-medium">Psychology</span>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     View Books
                   </Button>
                 </CardContent>
               </Card>

               {/* Third Year BPT */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                 <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <Stethoscope className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-purple-500 text-white text-xs">Year 3</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     Third Year BPT
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Clinical subjects and specialized physiotherapy areas
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-3">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">General Medicine</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">General Surgery</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Orthopaedics</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Neurology & Neurosurgery</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Community Medicine</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Physical Agents & Electrotherapy (Advanced)</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Research Methodology & Biostatistics</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                       <span className="font-medium">Clinical Education (Part I)</span>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     View Books
                   </Button>
                 </CardContent>
               </Card>

               {/* Fourth Year BPT */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                 <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <Heart className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-orange-500 text-white text-xs">Year 4</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     Fourth Year BPT
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Specialized physiotherapy practice and clinical applications
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-3">
                   <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Cardiopulmonary Sciences</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Physiotherapy in Orthopaedics</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Physiotherapy in Neurology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Physiotherapy in Cardio-Respiratory Conditions</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Community-Based Rehabilitation</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Ethics & Administration</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                       <span className="font-medium">Clinical Education (Part II)</span>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     View Books
                   </Button>
                 </CardContent>
               </Card>

               {/* Internship */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                 <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <Users className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-indigo-500 text-white text-xs">Internship</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     Compulsory Rotatory Internship
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Duration: 6-12 months (varies by university)
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-3">
                   <div className="space-y-2">
                     <div className="text-sm font-medium text-foreground mb-2">Postings in:</div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">Orthopaedics</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">Neurology</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">Cardio-Respiratory</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">Community Health</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">General Medicine & Surgery</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">ICU</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm">
                       <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                       <span className="font-medium">Pediatrics</span>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     View Books
                   </Button>
                 </CardContent>
               </Card>

               {/* Total Program Overview */}
               <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden lg:col-span-2 xl:col-span-1">
                 <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
                 <CardHeader className="pb-4">
                   <div className="flex items-start justify-between mb-3">
                     <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                       <Award className="h-6 w-6 text-white" />
                     </div>
                     <Badge className="bg-emerald-500 text-white text-xs">Program</Badge>
                   </div>
                   <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">
                     Complete BPT Program
                   </CardTitle>
                   <CardDescription className="text-sm text-muted-foreground">
                     Comprehensive overview of the entire Bachelor of Physiotherapy curriculum
                   </CardDescription>
                 </CardHeader>
                 
                 <CardContent className="space-y-4">
                   <div className="grid grid-cols-2 gap-4 text-sm">
                     <div className="text-center p-3 bg-emerald-50 rounded-lg">
                       <div className="font-semibold text-emerald-600">4</div>
                       <div className="text-muted-foreground">Academic Years</div>
                     </div>
                     <div className="text-center p-3 bg-teal-50 rounded-lg">
                       <div className="font-semibold text-teal-600">6-12</div>
                       <div className="text-muted-foreground">Months Internship</div>
                     </div>
                     <div className="text-center p-3 bg-emerald-50 rounded-lg">
                       <div className="font-semibold text-emerald-600">35+</div>
                       <div className="text-muted-foreground">Subjects</div>
                     </div>
                     <div className="text-center p-3 bg-teal-50 rounded-lg">
                       <div className="font-semibold text-teal-600">200+</div>
                       <div className="text-muted-foreground">Books Available</div>
                     </div>
                   </div>
                   
                   <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-sm">
                     <BookOpen className="h-4 w-4 mr-2" />
                     Browse All Books
                   </Button>
                 </CardContent>
               </Card>
             </div>
           </div>
         </section>

         {/* All Books */}
         <section className="py-12 sm:py-16">
           <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12 sm:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                 All
                 <span className="gradient-text block">Books</span>
               </h2>
               <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                 Browse our complete collection of physiotherapy textbooks and reference materials.
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
                    <CardTitle className="text-base font-headline group-hover:text-primary transition-colors duration-300 line-clamp-2">
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
                        <span className="font-semibold text-foreground">{book.edition}</span>
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
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-sm">
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
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">No books found</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Try adjusting your search criteria or browse by year and category to discover relevant books.
                  </p>
                  <Button onClick={() => { setSearchQuery(''); setSelectedYear('all'); setSelectedCategory('all'); }} variant="outline">
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
