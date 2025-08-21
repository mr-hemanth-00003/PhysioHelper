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

export default function BiomechanicsPage() {
  const modules = [
    {
      id: 1,
      title: "Introduction to Biomechanics",
      description: "Fundamental principles of mechanics and their application to human movement",
      duration: "2 weeks",
      lessons: 6,
      topics: [
        "Basic mechanics principles",
        "Force and motion",
        "Newton's laws",
        "Units and measurements",
        "Biomechanical analysis methods"
      ]
    },
    {
      id: 2,
      title: "Joint Mechanics",
      description: "Understanding joint structure, function, and movement patterns",
      duration: "3 weeks",
      lessons: 10,
      topics: [
        "Joint classification",
        "Range of motion",
        "Joint stability",
        "Ligament function",
        "Cartilage mechanics"
      ]
    },
    {
      id: 3,
      title: "Muscle Mechanics",
      description: "Muscle function, force production, and contraction mechanics",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Muscle architecture",
        "Force-velocity relationship",
        "Length-tension relationship",
        "Muscle recruitment",
        "Fatigue mechanisms"
      ]
    },
    {
      id: 4,
      title: "Gait Analysis",
      description: "Walking and running mechanics, gait cycle analysis",
      duration: "2 weeks",
      lessons: 9,
      topics: [
        "Gait cycle phases",
        "Kinematics analysis",
        "Kinetics analysis",
        "Gait deviations",
        "Clinical applications"
      ]
    },
    {
      id: 5,
      title: "Sports Biomechanics",
      description: "Biomechanical analysis of sports movements and performance",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Throwing mechanics",
        "Jumping mechanics",
        "Running mechanics",
        "Equipment analysis",
        "Performance optimization"
      ]
    },
    {
      id: 6,
      title: "Clinical Applications",
      description: "Applying biomechanical principles to clinical practice",
      duration: "3 weeks",
      lessons: 12,
      topics: [
        "Movement assessment",
        "Exercise prescription",
        "Injury prevention",
        "Rehabilitation protocols",
        "Case studies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500/10 via-green-600/10 to-green-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-sm font-medium">
                Foundation Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="text-foreground">Biomechanics &</span>
                <br />
                <span className="text-green-600">Kinesiology</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master the science of human movement. Learn how forces, motion, and mechanics 
                influence human performance and rehabilitation outcomes.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>10 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>6 modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>980 students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.7/5</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/biomechanics/modules">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
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
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <Activity className="h-24 w-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Movement analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>3D motion capture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Clinical applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Performance optimization</span>
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
              Comprehensive coverage of biomechanical principles and their clinical applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-green-100 text-green-800 border-green-200 px-3 py-1 text-xs font-medium">
                      Module {module.id}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-green-600 transition-colors">
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
                    <Button variant="ghost" size="sm" className="group-hover:text-green-600">
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-green-600 font-medium">
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
