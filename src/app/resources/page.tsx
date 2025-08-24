'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  Dumbbell, 
  HeartPulse, 
  MoveRight, 
  Search,
  Users,
  Award,
  Brain,
  ClipboardList,
  Microscope,
  GraduationCap,
  BookOpenCheck,
  Stethoscope,
  Activity,
  Target,
  Lightbulb,
  Globe,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  Bookmark,
  Share2,
  Filter,
  TrendingUp,
  Clock,
  Eye,
  ThumbsUp
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

     const categories = [
     { id: "all", name: "All Resources", icon: BookOpen, count: 24 },
     { id: "clinical", name: "Clinical Skills", icon: ClipboardList, count: 8 },
     { id: "anatomy", name: "Anatomy & Physiology", icon: HeartPulse, count: 6 },
     { id: "rehab", name: "Rehabilitation", icon: Dumbbell, count: 5 },
     { id: "exams", name: "Exam Prep", icon: GraduationCap, count: 3 },
     { id: "cases", name: "Case Studies", icon: Microscope, count: 2 },
     { id: "library", name: "Digital Library", icon: Library, count: 200 }
   ];

  const featuredResources = [
    {
      title: "Complete Clinical Assessment Guide",
      description: "Comprehensive guide covering all aspects of physiotherapy assessment including history taking, physical examination, and clinical reasoning.",
      category: "Clinical Skills",
      difficulty: "Intermediate",
      duration: "2-3 hours",
      rating: 4.9,
      views: 1247,
      downloads: 892,
      icon: ClipboardList,
      color: "from-blue-500 to-blue-600",
      href: "/resources/clinical-assessment-guide",
      isNew: true,
      isPopular: true
    },
    {
      title: "Upper Limb Rehabilitation Protocols",
      description: "Evidence-based rehabilitation protocols for shoulder, elbow, wrist, and hand injuries with progressive exercise programs.",
      category: "Rehabilitation",
      difficulty: "Advanced",
      duration: "4-5 hours",
      rating: 4.8,
      views: 2156,
      downloads: 1347,
      icon: Dumbbell,
      color: "from-green-500 to-green-600",
      href: "/resources/upper-limb-rehab",
      isNew: false,
      isPopular: true
    },
    {
      title: "Anatomy 3D Interactive Atlas",
      description: "Interactive 3D models of musculoskeletal system with detailed explanations and clinical correlations.",
      category: "Anatomy & Physiology",
      difficulty: "Beginner",
      duration: "1-2 hours",
      rating: 4.7,
      views: 3421,
      downloads: 2891,
      icon: HeartPulse,
      color: "from-red-500 to-red-600",
      href: "/resources/anatomy-atlas",
      isNew: true,
      isPopular: false
    }
  ];

  const allResources = [
    ...featuredResources,
    {
      title: "Neurological Assessment Techniques",
      description: "Specialized assessment methods for neurological conditions including stroke, spinal cord injury, and multiple sclerosis.",
      category: "Clinical Skills",
      difficulty: "Advanced",
      duration: "3-4 hours",
      rating: 4.6,
      views: 987,
      downloads: 654,
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      href: "/resources/neuro-assessment",
      isNew: false,
      isPopular: false
    },
    {
      title: "Sports Injury Management",
      description: "Comprehensive guide to managing common sports injuries with return-to-play protocols and prevention strategies.",
      category: "Rehabilitation",
      difficulty: "Intermediate",
      duration: "2-3 hours",
      rating: 4.5,
      views: 1567,
      downloads: 1123,
      icon: Activity,
      color: "from-orange-500 to-orange-600",
      href: "/resources/sports-injury",
      isNew: false,
      isPopular: false
    },
    {
      title: "Board Exam Practice Questions",
      description: "500+ practice questions covering all major physiotherapy topics with detailed explanations and rationales.",
      category: "Exam Prep",
      difficulty: "Advanced",
      duration: "5-6 hours",
      rating: 4.4,
      views: 2891,
      downloads: 2345,
      icon: BookOpenCheck,
      color: "from-indigo-500 to-indigo-600",
      href: "/resources/exam-questions",
      isNew: false,
      isPopular: false
    }
  ];

  const filteredResources = selectedCategory === "all" 
    ? allResources 
    : allResources.filter(resource => 
        resource.category.toLowerCase().includes(selectedCategory) ||
        resource.category === categories.find(cat => cat.id === selectedCategory)?.name
      );

  const searchedResources = searchQuery 
    ? filteredResources.filter(resource =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredResources;

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
                <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                Study Resources Hub
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 sm:mb-6 leading-tight">
                Master Physiotherapy with
                <span className="gradient-text block">Premium Resources</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Access comprehensive study materials, clinical guides, and interactive tools designed to accelerate your learning 
                and prepare you for real-world physiotherapy practice.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for clinical skills, anatomy guides, rehab protocols, and more..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 bg-white/80 backdrop-blur-sm border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-500 ease-out text-sm sm:text-base shadow-lg"
                />
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>24+ Resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-secondary" />
                  <span>2,500+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 sm:py-12 bg-white/50 border-b border-border/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </section>

        {/* Featured Resources */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Featured
                <span className="gradient-text block">Resources</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Hand-picked resources that our community finds most valuable for learning and clinical practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {featuredResources.map((resource, index) => (
                <Card key={resource.title} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {resource.isNew && (
                          <Badge className="bg-green-500 text-white text-xs">New</Badge>
                        )}
                        {resource.isPopular && (
                          <Badge className="bg-orange-500 text-white text-xs">Popular</Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-headline group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Resource Meta */}
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {resource.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {resource.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        {resource.downloads.toLocaleString()}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 btn-healthcare text-xs sm:text-sm">
                        <Link href={resource.href}>
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Start Learning
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Bookmark className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Resources Grid */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                All
                <span className="gradient-text block">Resources</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Browse our complete collection of physiotherapy resources organized by category and difficulty level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {searchedResources.map((resource, index) => (
                <Card key={resource.title} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${resource.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <resource.icon className="h-5 w-5 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base sm:text-lg font-headline group-hover:text-primary transition-colors duration-300">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Resource Meta */}
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3" />
                        {resource.difficulty}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {resource.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        {resource.rating}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1 text-xs sm:text-sm">
                        <Link href={resource.href}>
                          <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Bookmark className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {searchedResources.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">No resources found</h3>
                <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-4 sm:mb-6">
                Ready to Accelerate Your
                <span className="gradient-text block">Learning Journey?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Join thousands of physiotherapy students who are already advancing their careers with our comprehensive 
                learning resources and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button size="lg" className="btn-healthcare text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Start Learning Today
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Join Study Group
                </Button>
              </div>
            </div>
          </div>
        {/* Library Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Digital
                <span className="gradient-text block">Library</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Access our comprehensive collection of physiotherapy textbooks and reference materials organized by year.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Library Overview */}
              <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Library className="h-6 w-6 text-white" />
                    </div>
                                         <Badge className="bg-blue-500 text-white text-xs">200+ Books</Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-headline group-hover:text-primary transition-colors duration-300">
                    Comprehensive Book Collection
                  </CardTitle>
                                     <CardDescription className="text-sm text-muted-foreground">
                     Access textbooks from 2010-2024 covering all major physiotherapy topics including anatomy, clinical skills, rehabilitation, and more.
                   </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-600">28</div>
                      <div className="text-muted-foreground">Anatomy Books</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-600">35</div>
                      <div className="text-muted-foreground">Clinical Skills</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-600">25</div>
                      <div className="text-muted-foreground">Rehabilitation</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="font-semibold text-orange-600">22</div>
                      <div className="text-muted-foreground">Sports Medicine</div>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
                    <Link href="/resources/library">
                      <Library className="h-4 w-4 mr-2" />
                      Browse Library
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Featured Books Preview */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Featured Books</h3>
                <div className="space-y-3">
                  <Card className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                          <HeartPulse className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            Gray's Anatomy for Students
                          </h4>
                          <p className="text-xs text-muted-foreground">5th Edition • 2024</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground">4.9</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <ClipboardList className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            Clinical Assessment in Physiotherapy
                          </h4>
                          <p className="text-xs text-muted-foreground">3rd Edition • 2023</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground">4.8</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <Brain className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            Neurological Rehabilitation
                          </h4>
                          <p className="text-xs text-muted-foreground">7th Edition • 2023</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-muted-foreground">4.7</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
