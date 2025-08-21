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

export default function TherapeuticExercisePage() {
  const modules = [
    {
      id: 1,
      title: "Exercise Fundamentals",
      description: "Basic principles of therapeutic exercise and movement",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Exercise principles",
        "Movement patterns",
        "Safety considerations",
        "Patient education",
        "Progression principles"
      ]
    },
    {
      id: 2,
      title: "Range of Motion Exercises",
      description: "Techniques to improve joint mobility and flexibility",
      duration: "2 weeks",
      lessons: 10,
      topics: [
        "Active ROM exercises",
        "Passive ROM exercises",
        "Stretching techniques",
        "Joint mobilization",
        "ROM assessment"
      ]
    },
    {
      id: 3,
      title: "Strengthening Exercises",
      description: "Progressive resistance training for muscle development",
      duration: "3 weeks",
      lessons: 12,
      topics: [
        "Isometric exercises",
        "Isotonic exercises",
        "Resistance training",
        "Equipment use",
        "Progression strategies"
      ]
    },
    {
      id: 4,
      title: "Balance and Coordination",
      description: "Exercises to improve balance, stability, and coordination",
      duration: "2 weeks",
      lessons: 9,
      topics: [
        "Static balance",
        "Dynamic balance",
        "Coordination training",
        "Proprioception",
        "Fall prevention"
      ]
    },
    {
      id: 5,
      title: "Functional Training",
      description: "Task-specific exercises for daily activities",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "ADL training",
        "Work-specific exercises",
        "Sports rehabilitation",
        "Functional assessment",
        "Goal setting"
      ]
    },
    {
      id: 6,
      title: "Cardiorespiratory Training",
      description: "Endurance and cardiovascular conditioning",
      duration: "2 weeks",
      lessons: 7,
      topics: [
        "Aerobic training",
        "Interval training",
        "Circuit training",
        "Monitoring vital signs",
        "Safety protocols"
      ]
    },
    {
      id: 7,
      title: "Exercise Progression",
      description: "Systematic advancement of exercise programs",
      duration: "2 weeks",
      lessons: 9,
      topics: [
        "Progression principles",
        "Exercise modification",
        "Intensity adjustment",
        "Recovery planning",
        "Long-term planning"
      ]
    },
    {
      id: 8,
      title: "Special Populations",
      description: "Exercise considerations for specific patient groups",
      duration: "2 weeks",
      lessons: 10,
      topics: [
        "Geriatric patients",
        "Pediatric patients",
        "Neurological conditions",
        "Cardiac patients",
        "Pulmonary patients"
      ]
    },
    {
      id: 9,
      title: "Home Exercise Programs",
      description: "Designing effective home-based exercise routines",
      duration: "2 weeks",
      lessons: 8,
      topics: [
        "Program design",
        "Patient instruction",
        "Safety guidelines",
        "Compliance strategies",
        "Progress monitoring"
      ]
    },
    {
      id: 10,
      title: "Clinical Integration",
      description: "Applying exercise principles in clinical practice",
      duration: "2 weeks",
      lessons: 11,
      topics: [
        "Case studies",
        "Clinical reasoning",
        "Outcome measures",
        "Documentation",
        "Professional practice"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-orange-600/10 to-orange-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-sm font-medium">
                Clinical Skills Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="text-foreground">Therapeutic</span>
                <br />
                <span className="text-orange-600">Exercise</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Master the art of exercise prescription and rehabilitation protocols. Learn to design 
                effective exercise programs that restore function and improve patient outcomes.
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>14 weeks</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>10 modules</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>1,350 students</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>4.8/5</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/courses/therapeutic-exercise/modules">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
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
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <Dumbbell className="h-24 w-24 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">Course Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-300" />
                    <span>Exercise prescription</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-300" />
                    <span>Progression strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-300" />
                    <span>Clinical applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-orange-300" />
                    <span>Home programs</span>
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
              Comprehensive coverage of therapeutic exercise principles and clinical applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Card key={module.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-3 py-1 text-xs font-medium">
                      Module {module.id}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">
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
                    <Button variant="ghost" size="sm" className="group-hover:text-orange-600">
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Key Topics:</h4>
                    <ul className="space-y-1">
                      {module.topics.slice(0, 3).map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                      {module.topics.length > 3 && (
                        <li className="text-sm text-orange-600 font-medium">
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
