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
  ChevronRight, Video, FileText, TestTube, Award, ArrowLeft, Clipboard
} from 'lucide-react';

export default function AssessmentTechniquesPage() {
  const modules = [
    {
      id: 1,
      title: "Subjective Assessment",
      description: "Patient history taking and subjective examination techniques",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Patient interview skills",
        "Pain assessment",
        "Functional history",
        "Social and work history",
        "Red flag screening"
      ]
    },
    {
      id: 2,
      title: "Objective Examination",
      description: "Physical examination and clinical testing procedures",
      duration: "3 weeks",
      lessons: 12,
      topics: [
        "Observation and inspection",
        "Palpation techniques",
        "Range of motion testing",
        "Muscle strength testing",
        "Neurological examination"
      ]
    },
    {
      id: 3,
      title: "Special Tests",
      description: "Clinical tests for specific conditions and pathologies",
      duration: "2 weeks",
      lessons: 10,
      topics: [
        "Orthopedic special tests",
        "Neurological tests",
        "Cardiovascular tests",
        "Respiratory tests",
        "Test reliability and validity"
      ]
    },
    {
      id: 4,
      title: "Outcome Measures",
      description: "Standardized assessment tools and measurement scales",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Pain scales",
        "Functional assessment tools",
        "Quality of life measures",
        "Patient-reported outcomes",
        "Psychometric properties"
      ]
    },
    {
      id: 5,
      title: "Clinical Reasoning",
      description: "Developing clinical decision-making and diagnostic skills",
      duration: "2 weeks",
      lessons: 9,
      topics: [
        "Hypothesis generation",
        "Clinical pattern recognition",
        "Differential diagnosis",
        "Evidence-based practice",
        "Clinical reasoning models"
      ]
    },
    {
      id: 6,
      title: "Documentation",
      description: "Clinical note writing and record keeping",
      duration: "1 week",
      lessons: 6,
      topics: [
        "SOAP note format",
        "Legal documentation",
        "Electronic health records",
        "Communication skills",
        "Professional writing"
      ]
    },
    {
      id: 7,
      title: "Assessment Integration",
      description: "Combining assessment findings for comprehensive evaluation",
      duration: "2 weeks",
      lessons: 10,
      topics: [
        "Data synthesis",
        "Problem identification",
        "Goal setting",
        "Treatment planning",
        "Case studies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-purple-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-sm font-medium">
                Clinical Skills Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="text-foreground">Assessment &</span>
                <br />
                <span className="text-purple-600">Evaluation</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master the art of clinical assessment and evaluation. Learn comprehensive examination 
                techniques, special tests, and clinical reasoning skills essential for physiotherapy practice.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>8 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>7 modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>1,100 students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/assessment-techniques/assessments">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                    <Play className="mr-2 h-5 w-5" />
                    View Assessments
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
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
                <Clipboard className="h-24 w-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Clinical examination skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Special test procedures</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Clinical reasoning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-purple-300" />
                    <span>Documentation skills</span>
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
              Comprehensive coverage of assessment techniques and clinical evaluation methods
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-3 py-1 text-xs font-medium">
                      Module {module.id}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
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
                    <Button variant="ghost" size="sm" className="group-hover:text-purple-600">
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-purple-600 font-medium">
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

      <Footer />
    </div>
  );
}
