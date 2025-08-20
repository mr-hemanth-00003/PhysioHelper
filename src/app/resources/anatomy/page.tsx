'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
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
  Bone,
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
  MapPin
} from 'lucide-react';

export default function AnatomyPage() {
  const bodySystems = [
    {
      title: "Musculoskeletal System",
      icon: Bone,
      description: "Bones, joints, muscles, and connective tissues",
      topics: ["Skeletal Anatomy", "Joint Structure", "Muscle Function", "Biomechanics"],
      difficulty: "Intermediate",
      duration: "4-5 hours",
      color: "from-blue-500 to-blue-600",
      clinicalRelevance: "Movement assessment, injury diagnosis, rehabilitation planning"
    },
    {
      title: "Nervous System",
      icon: Brain,
      description: "Brain, spinal cord, and peripheral nerves",
      topics: ["Neuroanatomy", "Neural Pathways", "Motor Control", "Sensory Systems"],
      difficulty: "Advanced",
      duration: "5-6 hours",
      color: "from-purple-500 to-purple-600",
      clinicalRelevance: "Neurological assessment, stroke rehabilitation, balance training"
    },
    {
      title: "Cardiovascular System",
      icon: Heart,
      description: "Heart, blood vessels, and circulation",
      topics: ["Cardiac Anatomy", "Vascular System", "Blood Flow", "Cardiac Output"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-red-500 to-red-600",
      clinicalRelevance: "Cardiac rehabilitation, exercise prescription, vital signs monitoring"
    },
    {
      title: "Respiratory System",
      icon: Activity,
      description: "Lungs, airways, and breathing mechanics",
      topics: ["Pulmonary Anatomy", "Ventilation", "Gas Exchange", "Respiratory Muscles"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-green-500 to-green-600",
      clinicalRelevance: "Pulmonary rehabilitation, breathing exercises, chest physiotherapy"
    },
    {
      title: "Integumentary System",
      icon: Layers,
      description: "Skin, hair, nails, and sensory receptors",
      topics: ["Skin Structure", "Wound Healing", "Sensory Receptors", "Thermoregulation"],
      difficulty: "Beginner",
      duration: "2-3 hours",
      color: "from-orange-500 to-orange-600",
      clinicalRelevance: "Wound care, pressure ulcer prevention, sensory assessment"
    },
    {
      title: "Endocrine System",
      icon: Zap,
      description: "Hormones and metabolic regulation",
      topics: ["Hormone Function", "Metabolic Control", "Growth Factors", "Stress Response"],
      difficulty: "Advanced",
      duration: "3-4 hours",
      color: "from-indigo-500 to-indigo-600",
      clinicalRelevance: "Diabetes management, metabolic disorders, stress-related conditions"
    }
  ];

  const interactiveModules = [
    {
      title: "3D Human Body Explorer",
      type: "Interactive 3D Model",
      duration: "60 minutes",
      difficulty: "Beginner",
      description: "Explore the human body in 3D with interactive models of all major systems. Rotate, zoom, and dissect virtual anatomy.",
      features: ["3D Models", "Interactive Labels", "Layer Views", "Quiz Mode"],
      rating: 4.9,
      users: 2847
    },
    {
      title: "Anatomy Quiz Master",
      type: "Assessment Tool",
      duration: "45 minutes",
      difficulty: "Intermediate",
      description: "Test your knowledge with comprehensive quizzes covering all body systems. Track progress and identify areas for improvement.",
      features: ["Multiple Choice", "Image Recognition", "Progress Tracking", "Performance Analytics"],
      rating: 4.7,
      users: 1956
    },
    {
      title: "Clinical Case Studies",
      type: "Problem-Based Learning",
      duration: "90 minutes",
      difficulty: "Advanced",
      description: "Apply your anatomical knowledge to real clinical scenarios. Solve patient cases through interactive problem-solving.",
      features: ["Case Scenarios", "Interactive Diagnosis", "Treatment Planning", "Peer Discussion"],
      rating: 4.8,
      users: 1234
    }
  ];

  const studyResources = [
    {
      title: "Comprehensive Anatomy Atlas",
      type: "Digital Textbook",
      format: "PDF + Interactive",
      pages: "450+",
      images: "1200+",
      topics: ["All Body Systems", "Clinical Correlations", "Pathological Changes", "Treatment Implications"]
    },
    {
      title: "Anatomy Video Library",
      type: "Video Collection",
      format: "HD Videos",
      duration: "25+ hours",
      topics: ["Dissection Videos", "Clinical Procedures", "Patient Assessment", "Rehabilitation Techniques"]
    },
    {
      title: "Flashcard Collection",
      type: "Study Cards",
      format: "Digital + Print",
              cards: "Comprehensive",
      topics: ["Bone Markings", "Muscle Origins/Insertions", "Nerve Pathways", "Blood Supply"]
    },
    {
      title: "Clinical Assessment Guide",
      type: "Practical Manual",
      format: "Interactive PDF",
      sections: "15+",
      topics: ["Palpation Techniques", "Range of Motion", "Manual Muscle Testing", "Special Tests"]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-500/10 via-blue-500/10 to-green-500/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-red-500/10 text-red-600 border-red-500/20 px-4 py-2 mb-6 animate-fade-in">
                <Heart className="h-4 w-4 mr-2" />
                Anatomy & Physiology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Human
                <span className="gradient-text block">Anatomy & Physiology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive learning resources covering all body systems with interactive 3D models, 
                clinical correlations, and practical applications for physiotherapy practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Atlas
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
                Explore
                <span className="gradient-text block">Body Systems</span>
              </h2>
              <p className="text-muted-foreground">
                Search for specific anatomical structures, body systems, or clinical topics.
              </p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for muscles, bones, nerves, organs, or body systems..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 btn-healthcare">
                Search
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter by System
              </Button>
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by Difficulty
              </Button>
            </div>
          </div>
        </section>

        {/* Body Systems */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Human Body
                <span className="gradient-text block">Systems</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage of all major body systems with clinical relevance for physiotherapy practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bodySystems.map((system, index) => (
                <Card key={system.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${system.color} rounded-xl flex items-center justify-center`}>
                        <system.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {system.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {system.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-headline">{system.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {system.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {system.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs px-2 py-1">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Clinical Relevance:</p>
                      <p className="text-xs text-muted-foreground">{system.clinicalRelevance}</p>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Study {system.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Modules */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Interactive
                <span className="gradient-text block">Learning Modules</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Engage with anatomy through interactive 3D models, quizzes, and clinical case studies.
              </p>
            </div>
            
            <div className="space-y-8">
              {interactiveModules.map((module, index) => (
                <Card key={module.title} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {module.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {module.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {module.duration}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl font-headline mb-3">{module.title}</CardTitle>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {module.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {module.users} users
                          </span>
                          <span className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            {module.rating}/5.0
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
                          {module.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full btn-healthcare">
                        <Play className="h-4 w-4 mr-2" />
                        Launch Module
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
                Comprehensive
                <span className="gradient-text block">Study Resources</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access a wide range of study materials to support your anatomy and physiology learning.
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
                        <BookOpen className="h-4 w-4" />
                        <span>{resource.pages || resource.duration || resource.cards || resource.sections}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        <span>{resource.images || resource.topics?.length || resource.duration || resource.topics?.length}</span>
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
        <section className="py-20 bg-gradient-to-br from-red-500/10 to-blue-500/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Master
                <span className="gradient-text block">Human Anatomy?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Build a solid foundation in anatomy and physiology with our comprehensive resources, 
                interactive learning tools, and clinical applications.
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
