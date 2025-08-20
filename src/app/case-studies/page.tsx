'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ClipboardList, 
  Search, 
  BookOpen, 
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
  Stethoscope
} from 'lucide-react';

export default function CaseStudiesPage() {
  const caseCategories = [
    {
      title: "Neurological Cases",
      icon: Brain,
      description: "Stroke, spinal cord injury, and neurological disorders",
      caseCount: 25,
      difficulty: "Advanced",
      duration: "45-60 min",
      color: "from-blue-500 to-blue-600",
      topics: ["Stroke Rehabilitation", "Spinal Cord Injury", "Multiple Sclerosis", "Parkinson's Disease"]
    },
    {
      title: "Musculoskeletal Cases",
      icon: Bone,
      description: "Orthopedic injuries, joint problems, and sports injuries",
      caseCount: 35,
      difficulty: "Intermediate",
      duration: "30-45 min",
      color: "from-green-500 to-green-600",
      topics: ["Low Back Pain", "Knee Injuries", "Shoulder Problems", "Sports Rehabilitation"]
    },
    {
      title: "Cardiorespiratory Cases",
      icon: Heart,
      description: "Cardiac rehabilitation and respiratory conditions",
      caseCount: 20,
      difficulty: "Intermediate",
      duration: "40-55 min",
      color: "from-red-500 to-red-600",
      topics: ["Cardiac Rehabilitation", "COPD", "Pulmonary Rehabilitation", "Post-Surgical Care"]
    },
    {
      title: "Pediatric Cases",
      icon: User,
      description: "Child development and pediatric conditions",
      caseCount: 18,
      difficulty: "Advanced",
      duration: "35-50 min",
      color: "from-purple-500 to-purple-600",
      topics: ["Developmental Delay", "Cerebral Palsy", "Muscular Dystrophy", "Postural Problems"]
    },
    {
      title: "Geriatric Cases",
      icon: GraduationCap,
      description: "Aging-related conditions and functional decline",
      caseCount: 22,
      difficulty: "Intermediate",
      duration: "35-50 min",
      color: "from-orange-500 to-orange-600",
      topics: ["Falls Prevention", "Osteoarthritis", "Balance Problems", "Functional Decline"]
    },
    {
      title: "Women's Health",
      icon: Activity,
      description: "Pregnancy, postpartum, and women's health conditions",
      caseCount: 15,
      difficulty: "Intermediate",
      duration: "30-45 min",
      color: "from-pink-500 to-pink-600",
      topics: ["Pregnancy Care", "Postpartum Rehabilitation", "Pelvic Floor", "Incontinence"]
    }
  ];

  const featuredCases = [
    {
      title: "Acute Stroke Rehabilitation",
      category: "Neurological",
      difficulty: "Advanced",
      duration: "60 minutes",
      patientAge: "68 years",
      diagnosis: "Left MCA ischemic stroke",
      description: "A 68-year-old patient presents with right hemiparesis and aphasia following a left middle cerebral artery stroke. Develop a comprehensive rehabilitation plan.",
      learningObjectives: ["Assessment strategies", "Goal setting", "Intervention planning", "Outcome measurement"],
      rating: 4.9,
      completions: 1247
    },
    {
      title: "Chronic Low Back Pain",
      category: "Musculoskeletal",
      difficulty: "Intermediate",
      duration: "45 minutes",
      patientAge: "45 years",
      diagnosis: "Chronic mechanical low back pain",
      description: "A 45-year-old office worker with 2-year history of low back pain. Create a multimodal treatment approach.",
      learningObjectives: ["Pain assessment", "Biomechanical analysis", "Exercise prescription", "Self-management"],
      rating: 4.7,
      completions: 1896
    },
    {
      title: "Post-Cardiac Surgery Rehabilitation",
      category: "Cardiorespiratory",
      difficulty: "Intermediate",
      duration: "50 minutes",
      patientAge: "62 years",
      diagnosis: "Post-CABG surgery",
      description: "A 62-year-old patient 3 days post-coronary artery bypass graft surgery. Plan early mobilization and progression.",
      learningObjectives: ["Cardiac assessment", "Exercise progression", "Risk management", "Discharge planning"],
      rating: 4.8,
      completions: 1567
    }
  ];

  const caseStudyFormat = [
    {
      title: "Interactive Case Studies",
      type: "Digital Learning",
      duration: "30-60 minutes",
      difficulty: "Variable",
      description: "Step-by-step interactive cases with decision points, immediate feedback, and branching scenarios based on your choices.",
      features: ["Decision Points", "Immediate Feedback", "Branching Scenarios", "Progress Tracking"],
      rating: 4.9,
      users: 2847
    },
    {
      title: "Video Case Presentations",
      type: "Multimedia Learning",
      duration: "20-40 minutes",
      difficulty: "Variable",
      description: "Real patient videos with expert commentary, clinical reasoning demonstrations, and treatment progression.",
      features: ["Patient Videos", "Expert Commentary", "Clinical Reasoning", "Treatment Progression"],
      rating: 4.8,
      users: 2156
    },
    {
      title: "Written Case Reports",
      type: "Text-Based Learning",
      duration: "15-30 minutes",
      difficulty: "Variable",
      description: "Detailed written case studies with comprehensive patient information, assessment findings, and treatment plans.",
      features: ["Detailed Information", "Assessment Data", "Treatment Plans", "Outcome Measures"],
      rating: 4.7,
      users: 1897
    }
  ];

  const learningResources = [
    {
      title: "Case Study Workbook",
      type: "Digital Textbook",
      format: "PDF + Interactive",
      pages: "200+",
      topics: ["Case Analysis", "Clinical Reasoning", "Treatment Planning", "Outcome Evaluation"]
    },
    {
      title: "Clinical Reasoning Workshop",
      type: "Interactive Course",
      format: "Online Modules",
      duration: "6 hours",
      topics: ["Problem Solving", "Decision Making", "Clinical Reasoning", "Clinical Judgment"]
    },
    {
      title: "Patient Assessment Videos",
      type: "Video Collection",
      format: "HD Videos",
      duration: "15+ hours",
      topics: ["Assessment Techniques", "Clinical Skills", "Patient Interaction", "Documentation"]
    },
    {
      title: "Treatment Planning Guide",
      type: "Practical Manual",
      format: "Interactive PDF",
      sections: "12+",
      topics: ["Goal Setting", "Intervention Selection", "Progression Planning", "Outcome Measurement"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500/10 via-green-500/10 to-purple-500/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 px-4 py-2 mb-6 animate-fade-in">
                <ClipboardList className="h-4 w-4 mr-2" />
                Clinical Case Studies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Clinical
                <span className="gradient-text block">Reasoning Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Develop your clinical reasoning and decision-making skills through real patient case studies, 
                interactive scenarios, and expert-guided learning experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Cases
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
                <span className="gradient-text block">Case Studies</span>
              </h2>
              <p className="text-muted-foreground">
                Search for specific conditions, patient types, or clinical scenarios to practice your skills.
              </p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for conditions, patient types, or clinical scenarios..."
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

        {/* Case Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Case Study
                <span className="gradient-text block">Categories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore case studies across different clinical specialties and patient populations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseCategories.map((category, index) => (
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
                        {category.caseCount} cases
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

        {/* Featured Cases */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Featured
                <span className="gradient-text block">Case Studies</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start with these popular case studies to develop your clinical reasoning skills.
              </p>
            </div>
            
            <div className="space-y-8">
              {featuredCases.map((caseStudy, index) => (
                <Card key={caseStudy.title} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {caseStudy.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {caseStudy.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {caseStudy.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-headline mb-3">{caseStudy.title}</CardTitle>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            {caseStudy.patientAge}
                          </span>
                          <span className="flex items-center gap-2">
                            <Stethoscope className="h-4 w-4" />
                            {caseStudy.diagnosis}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {caseStudy.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {caseStudy.completions} completions
                          </span>
                          <span className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            {caseStudy.rating}/5.0
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
                        <h4 className="font-semibold text-foreground mb-2">Learning Objectives:</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.learningObjectives.map((objective) => (
                            <Badge key={objective} variant="secondary" className="text-xs">
                              {objective}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full btn-healthcare">
                        <Play className="h-4 w-4 mr-2" />
                        Start Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Format */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Learning
                <span className="gradient-text block">Formats</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from different learning formats to suit your study preferences and learning style.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudyFormat.map((format, index) => (
                <Card key={format.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {format.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {format.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-headline">{format.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {format.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {format.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {format.users} users
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {format.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs px-2 py-1">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{format.rating}/5.0 rating</span>
                    </div>
                    
                    <Button className="w-full btn-healthcare-outline">
                      <Play className="h-4 w-4 mr-2" />
                      Try Format
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Additional
                <span className="gradient-text block">Learning Resources</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access comprehensive materials to support your case study learning and clinical reasoning development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {learningResources.map((resource, index) => (
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
                        <BookOpen className="h-4 w-4" />
                        <span>{resource.pages || resource.duration || resource.sections}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>{resource.topics?.length} topics</span>
                      </div>
                    </div>
                    
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Develop Your
                <span className="gradient-text block">Clinical Skills?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Practice clinical reasoning, decision-making, and treatment planning through 
                real patient case studies and interactive learning experiences.
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
