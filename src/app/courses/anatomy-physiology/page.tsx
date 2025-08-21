import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { 
  BookOpen, Brain, Heart, Bone, Activity, Users, Clock, Star,
  Play, CheckCircle, ArrowRight, GraduationCap, Stethoscope,
  Dumbbell, Microscope, Target, Zap, Shield, Lightbulb, Globe,
  ChevronRight, Video, FileText, TestTube, Award, ArrowLeft
} from 'lucide-react';

export default function AnatomyPhysiologyPage() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Human Anatomy",
      description: "Overview of anatomical terminology, body planes, and directional terms",
      duration: "2 weeks",
      lessons: 8,
      completed: false,
      topics: [
        "Anatomical position and directional terms",
        "Body planes and sections",
        "Body cavities and regions",
        "Basic tissue types",
        "Introduction to organ systems"
      ]
    },
    {
      id: 2,
      title: "Musculoskeletal System",
      description: "Study of bones, joints, muscles, and connective tissues",
      duration: "3 weeks",
      lessons: 12,
      completed: false,
      topics: [
        "Bone structure and classification",
        "Joint types and movements",
        "Muscle types and function",
        "Connective tissue components",
        "Upper and lower limb anatomy"
      ]
    },
    {
      id: 3,
      title: "Nervous System",
      description: "Understanding the brain, spinal cord, and peripheral nerves",
      duration: "2 weeks",
      lessons: 10,
      completed: false,
      topics: [
        "Central nervous system structure",
        "Peripheral nervous system",
        "Autonomic nervous system",
        "Cranial nerves",
        "Spinal cord and reflexes"
      ]
    },
    {
      id: 4,
      title: "Cardiovascular System",
      description: "Heart, blood vessels, and circulation physiology",
      duration: "2 weeks",
      lessons: 9,
      completed: false,
      topics: [
        "Heart anatomy and chambers",
        "Blood vessel types",
        "Circulation pathways",
        "Cardiac cycle",
        "Blood pressure regulation"
      ]
    },
    {
      id: 5,
      title: "Respiratory System",
      description: "Lungs, airways, and breathing mechanics",
      duration: "2 weeks",
      lessons: 8,
      completed: false,
      topics: [
        "Respiratory tract anatomy",
        "Lung structure and function",
        "Breathing mechanics",
        "Gas exchange",
        "Respiratory regulation"
      ]
    },
    {
      id: 6,
      title: "Digestive System",
      description: "Gastrointestinal tract and accessory organs",
      duration: "2 weeks",
      lessons: 7,
      completed: false,
      topics: [
        "GI tract structure",
        "Accessory organs",
        "Digestion process",
        "Absorption mechanisms",
        "Metabolic functions"
      ]
    },
    {
      id: 7,
      title: "Endocrine System",
      description: "Hormones and glandular function",
      duration: "1 week",
      lessons: 6,
      completed: false,
      topics: [
        "Major endocrine glands",
        "Hormone types and actions",
        "Feedback mechanisms",
        "Metabolic regulation",
        "Stress response"
      ]
    },
    {
      id: 8,
      title: "Clinical Applications",
      description: "Applying anatomical knowledge to clinical practice",
      duration: "2 weeks",
      lessons: 10,
      completed: false,
      topics: [
        "Clinical assessment techniques",
        "Common pathologies",
        "Diagnostic imaging",
        "Surgical considerations",
        "Case studies"
      ]
    }
  ];

  const resources = [
    {
      type: "Video Lectures",
      count: 24,
      icon: Video,
      description: "Comprehensive video content with 3D models"
    },
    {
      type: "Reading Materials",
      count: 32,
      icon: FileText,
      description: "Detailed textbooks and research papers"
    },
    {
      type: "Interactive Quizzes",
      count: 16,
      icon: TestTube,
      description: "Self-assessment and knowledge checks"
    },
    {
      type: "3D Models",
      count: 45,
      icon: Brain,
      description: "Interactive anatomical models"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-blue-600/10 to-blue-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-sm font-medium">
                Foundation Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="text-foreground">Anatomy &</span>
                <br />
                <span className="text-blue-600">Physiology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master the fundamental structure and function of the human body. This comprehensive course 
                provides essential knowledge for physiotherapy practice through interactive learning and 
                clinical applications.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>12 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>8 modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>1,250 students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/anatomy-physiology/modules">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button size="lg" variant="outline" className="px-8 py-3">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Back to Courses
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <Brain className="h-24 w-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Interactive 3D models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Clinical case studies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Expert-led lectures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Practice assessments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Course Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning path covering all essential aspects of human anatomy and physiology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1 text-xs font-medium">
                      Module {module.id}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-blue-600">
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-blue-600 font-medium">
                          +{module.topics.length - 3} more topics
                        </li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive learning materials designed to enhance your understanding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.type}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{resource.count}</p>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-headline font-bold">
                What You'll Learn
              </h2>
              <p className="text-lg text-muted-foreground">
                By the end of this course, you'll have a comprehensive understanding of human anatomy 
                and physiology, enabling you to apply this knowledge in clinical practice.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Anatomical Knowledge</h4>
                    <p className="text-muted-foreground">Master the structure and organization of all major body systems</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Physiological Understanding</h4>
                    <p className="text-muted-foreground">Comprehend how body systems function and interact</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Clinical Application</h4>
                    <p className="text-muted-foreground">Apply anatomical knowledge to patient assessment and treatment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Critical Thinking</h4>
                    <p className="text-muted-foreground">Develop analytical skills for clinical reasoning</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <Award className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Course Completion</h3>
              <div className="space-y-4 text-center">
                <div className="text-3xl font-bold">Certificate of Completion</div>
                <p className="text-blue-100">Earn a professional certificate upon successful completion</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-blue-100 mb-2">Progress</div>
                  <div className="w-full bg-white/30 rounded-full h-2">
                    <div className="bg-white h-2 rounded-full w-0 transition-all duration-1000"></div>
                  </div>
                  <div className="text-sm text-white mt-2">0% Complete</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
