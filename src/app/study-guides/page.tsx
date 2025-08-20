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
  Users, 
  Award, 
  TrendingUp,
  Target,
  Clock,
  Play,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  GraduationCap,
  Brain,
  FileText,
  Eye,
  Zap,
  Download,
  Bookmark,
  Share2,
  Filter,
  SortAsc,
  Database,
  Globe,
  Shield,
  Activity,
  Layers,
  MapPin,
  BarChart3,
  Calculator,
  TestTube,
  ClipboardCheck,
  ArrowRight,
  Star,
  Calendar,
  BookOpenCheck,
  User,
  Heart,
  Bone,
  Dumbbell,
  Microscope,
  Stethoscope,
  CheckSquare,
  List,
  BookMarked,
  PenTool
} from 'lucide-react';

export default function StudyGuidesPage() {
  const guideCategories = [
    {
      title: "Exam Preparation",
      icon: CheckSquare,
      description: "Comprehensive guides for licensing exams and assessments",
      guideCount: 28,
      difficulty: "Advanced",
      duration: "40-60 hours",
      color: "from-blue-500 to-blue-600",
      topics: ["Licensing Exams", "Board Certification", "Clinical Assessments", "Practice Tests"]
    },
    {
      title: "Core Subjects",
      icon: BookOpen,
      description: "Essential physiotherapy knowledge and fundamentals",
      guideCount: 35,
      difficulty: "Intermediate",
      duration: "30-50 hours",
      color: "from-green-500 to-green-600",
      topics: ["Anatomy & Physiology", "Biomechanics", "Pathology", "Pharmacology"]
    },
    {
      title: "Clinical Skills",
      icon: Stethoscope,
      description: "Practical assessment and treatment techniques",
      guideCount: 42,
      difficulty: "Intermediate",
      duration: "25-40 hours",
      color: "from-purple-500 to-purple-600",
      topics: ["Assessment Techniques", "Manual Therapy", "Exercise Prescription", "Patient Education"]
    },
    {
      title: "Specialized Areas",
      icon: Microscope,
      description: "Advanced topics and specialized practice areas",
      guideCount: 25,
      difficulty: "Advanced",
      duration: "35-55 hours",
      color: "from-orange-500 to-orange-600",
      topics: ["Neurological", "Cardiorespiratory", "Pediatric", "Geriatric"]
    },

    {
      title: "Professional Practice",
      icon: GraduationCap,
      description: "Ethics, communication, and professional development",
      guideCount: 20,
      difficulty: "Beginner",
      duration: "20-35 hours",
      color: "from-indigo-500 to-indigo-600",
      topics: ["Ethics", "Communication", "Documentation", "Leadership"]
    }
  ];

  const featuredGuides = [
    {
      title: "Complete Physiotherapy Licensing Exam Guide",
      category: "Exam Preparation",
      difficulty: "Advanced",
      duration: "60 hours",
      format: "Digital + Print",
      description: "Comprehensive preparation for physiotherapy licensing exams with practice questions, study strategies, and detailed explanations.",
      features: ["Practice Questions", "Study Strategies", "Detailed Explanations", "Progress Tracking"],
      rating: 4.9,
      users: 2847,
      lastUpdated: "2024-01-15"
    },
    {
      title: "Clinical Assessment Mastery Guide",
      category: "Clinical Skills",
      difficulty: "Intermediate",
      duration: "40 hours",
      format: "Interactive PDF + Videos",
      description: "Master essential clinical assessment techniques with step-by-step instructions, video demonstrations, and practice scenarios.",
      features: ["Step-by-Step Instructions", "Video Demonstrations", "Practice Scenarios", "Assessment Tools"],
      rating: 4.8,
      users: 2156,
      lastUpdated: "2024-01-10"
    },

  ];

  const studyResources = [
    {
      title: "Flashcard Collections",
      type: "Study Aids",
      format: "Digital + Print",
      cards: "2000+",
      topics: ["Anatomy", "Pathology", "Assessment", "Treatment"],
      description: "Comprehensive flashcard sets for quick review and memorization of key concepts."
    },
    {
      title: "Practice Question Banks",
      type: "Assessment Tools",
      format: "Online Platform",
      questions: "5000+",
      topics: ["Multiple Choice", "Case Studies", "Clinical Scenarios", "Exam Style"],
      description: "Extensive question banks with detailed explanations and performance analytics."
    },
    {
      title: "Study Schedules",
      type: "Planning Tools",
      format: "Templates + Apps",
      duration: "Customizable",
      topics: ["Daily Planning", "Weekly Goals", "Exam Countdown", "Progress Tracking"],
      description: "Structured study schedules and planning tools to optimize your learning."
    },
    {
      title: "Mind Maps & Diagrams",
      type: "Visual Learning",
      format: "Digital + Print",
      diagrams: "150+",
      topics: ["Concept Maps", "Flow Charts", "Anatomical Diagrams", "Process Maps"],
      description: "Visual learning aids to help understand complex concepts and relationships."
    }
  ];

  const learningTips = [
    {
      title: "Active Learning Strategies",
      icon: Brain,
      description: "Engage with material through practice, teaching others, and applying concepts to real scenarios.",
      tips: ["Practice with real cases", "Teach concepts to peers", "Use spaced repetition", "Apply knowledge practically"]
    },
    {
      title: "Time Management",
      icon: Clock,
      description: "Optimize your study time with effective planning and prioritization techniques.",
      tips: ["Create study schedules", "Use Pomodoro technique", "Prioritize difficult topics", "Take regular breaks"]
    },
    {
      title: "Memory Techniques",
      icon: Lightbulb,
      description: "Use proven memory techniques to retain information more effectively.",
      tips: ["Mnemonics and acronyms", "Visual associations", "Story-based learning", "Regular review sessions"]
    },
    {
      title: "Exam Preparation",
      icon: Target,
      description: "Strategies specifically designed for exam success and performance optimization.",
      tips: ["Practice under exam conditions", "Review past papers", "Focus on weak areas", "Build confidence gradually"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 px-4 py-2 mb-6 animate-fade-in">
                <BookOpen className="h-4 w-4 mr-2" />
                Study Guides
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Your
                <span className="gradient-text block">Physiotherapy Studies</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive study guides, exam preparation materials, and practical learning resources 
                designed to help you excel in your physiotherapy education and career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Guides
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-white/50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-headline mb-4">
                Find
                <span className="gradient-text block">Study Materials</span>
              </h2>
              <p className="text-muted-foreground">
                Search for specific topics, exam preparation materials, or study resources.
              </p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for topics, exam prep, or specific study materials..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 btn-healthcare">
                Search
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </Button>
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by Difficulty
              </Button>
            </div>
          </div>
        </section>

        {/* Guide Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Study Guide
                <span className="gradient-text block">Categories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage of all essential physiotherapy topics organized by learning level and practical application.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guideCategories.map((category, index) => (
                <Card key={category.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {category.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {category.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        {category.guideCount} guides
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {category.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs px-2 py-1">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Browse {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Featured
                <span className="gradient-text block">Study Guides</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start with these comprehensive guides designed to accelerate your learning and practical skills development.
              </p>
            </div>
            
            <div className="space-y-8">
              {featuredGuides.map((guide, index) => (
                <Card key={guide.title} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {guide.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {guide.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {guide.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-headline mb-3">{guide.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            {guide.format}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Updated {new Date(guide.lastUpdated).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {guide.users} users
                          </span>
                          <span className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            {guide.rating}/5.0
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button variant="outline" size="sm" className="btn-healthcare-outline">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="btn-healthcare-outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {guide.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full btn-healthcare">
                        <Play className="h-4 w-4 mr-2" />
                        Access Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Study Resources */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Additional
                <span className="gradient-text block">Study Resources</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your learning with these supplementary study tools and resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studyResources.map((resource, index) => (
                <Card key={resource.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {resource.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {resource.format}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-headline">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>{resource.cards || resource.questions || resource.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{resource.topics?.length} topics</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Coverage:</h4>
                      <div className="flex flex-wrap gap-2">
                        {resource.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs px-2 py-1">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-healthcare-outline">
                      <Download className="h-4 w-4 mr-2" />
                      Access Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Tips */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Study
                <span className="gradient-text block">Tips & Strategies</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven strategies and techniques to maximize your learning effectiveness and exam success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningTips.map((tip, index) => (
                <Card key={tip.title} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                        <tip.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-headline">{tip.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {tip.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tipItem}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 to-blue-500/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Excel in Your
                <span className="gradient-text block">Physiotherapy Studies?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access comprehensive study guides, exam preparation materials, and practical learning resources 
                designed to help you succeed in your physiotherapy education and career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Users className="h-5 w-5 mr-2" />
                  Join Study Group
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
