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
  ChevronRight, Video, FileText, TestTube, Award, Hand, ArrowLeft
} from 'lucide-react';

export default function ManualTherapyPage() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Manual Therapy",
      description: "Fundamental principles and history of manual therapy techniques",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "History and evolution of manual therapy",
        "Basic principles and philosophy",
        "Indications and contraindications",
        "Safety considerations",
        "Professional standards"
      ]
    },
    {
      id: 2,
      title: "Joint Mobilization Techniques",
      description: "Assessment and treatment of joint mobility and restrictions",
      duration: "3 weeks",
      lessons: 12,
      topics: [
        "Joint assessment techniques",
        "Mobilization grades and techniques",
        "Spinal mobilization",
        "Peripheral joint mobilization",
        "Treatment progression"
      ]
    },
    {
      id: 3,
      title: "Soft Tissue Techniques",
      description: "Massage, myofascial release, and soft tissue manipulation",
      duration: "2 weeks",
      lessons: 10,
      topics: [
        "Massage techniques",
        "Myofascial release",
        "Trigger point therapy",
        "Cross-fiber friction",
        "Soft tissue assessment"
      ]
    },
    {
      id: 4,
      title: "Manipulation Skills",
      description: "High-velocity, low-amplitude thrust techniques",
      duration: "3 weeks",
      lessons: 14,
      topics: [
        "Manipulation principles",
        "Spinal manipulation",
        "Peripheral manipulation",
        "Safety protocols",
        "Clinical decision making"
      ]
    },
    {
      id: 5,
      title: "Assessment and Diagnosis",
      description: "Comprehensive assessment for manual therapy treatment",
      duration: "2 weeks",
      lessons: 9,
      topics: [
        "Subjective assessment",
        "Objective examination",
        "Special tests",
        "Diagnostic reasoning",
        "Treatment planning"
      ]
    },
    {
      id: 6,
      title: "Clinical Applications",
      description: "Applying manual therapy in clinical practice",
      duration: "3 weeks",
      lessons: 15,
      topics: [
        "Case studies",
        "Treatment protocols",
        "Outcome measures",
        "Documentation",
        "Professional practice"
      ]
    }
  ];

  const resources = [
    {
      type: "Video Demonstrations",
      count: 28,
      icon: Video,
      description: "Step-by-step technique demonstrations"
    },
    {
      type: "Clinical Guidelines",
      count: 18,
      icon: FileText,
      description: "Evidence-based practice guidelines"
    },
    {
      type: "Assessment Tools",
      count: 22,
      icon: TestTube,
      description: "Clinical assessment and outcome measures"
    },
    {
      type: "Case Studies",
      count: 35,
      icon: Brain,
      description: "Real-world clinical scenarios"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-red-600/10 to-red-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1 text-sm font-medium">
                Clinical Skills Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="text-foreground">Manual</span>
                <br />
                <span className="text-red-600">Therapy</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master hands-on techniques for musculoskeletal conditions. Learn joint mobilization, 
                soft tissue techniques, and manipulation skills essential for physiotherapy practice.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>12 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>6 modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>890 students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.9/5</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/manual-therapy/assessments">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
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
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                <Hand className="h-24 w-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-300" />
                    <span>Hands-on techniques</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-300" />
                    <span>Clinical applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-300" />
                    <span>Safety protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-300" />
                    <span>Evidence-based practice</span>
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
              Comprehensive coverage of manual therapy principles and clinical applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-red-100 text-red-800 border-red-200 px-3 py-1 text-xs font-medium">
                      Module {module.id}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-red-600 transition-colors">
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
                    <Button variant="ghost" size="sm" className="group-hover:text-red-600">
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-red-600 font-medium">
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
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive learning materials designed to enhance your manual therapy skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{resource.type}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">{resource.count}</p>
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
                By the end of this course, you'll have comprehensive manual therapy skills 
                and clinical reasoning abilities for musculoskeletal conditions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Manual Therapy Skills</h4>
                    <p className="text-muted-foreground">Master joint mobilization, soft tissue techniques, and manipulation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Clinical Assessment</h4>
                    <p className="text-muted-foreground">Develop comprehensive assessment and diagnostic skills</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Safety and Ethics</h4>
                    <p className="text-muted-foreground">Understand safety protocols and professional standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground">Clinical Integration</h4>
                    <p className="text-muted-foreground">Apply manual therapy in clinical practice settings</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <Award className="h-16 w-16 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4">Course Completion</h3>
              <div className="space-y-4 text-center">
                <div className="text-3xl font-bold">Certificate of Completion</div>
                <p className="text-red-100">Earn a professional certificate upon successful completion</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-sm text-red-100 mb-2">Progress</div>
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
