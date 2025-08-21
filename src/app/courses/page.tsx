import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { 
  BookOpen, Brain, Heart, Bone, Activity, Users, Clock, Star,
  Play, CheckCircle, ArrowRight, GraduationCap, Stethoscope,
  Dumbbell, Microscope, Target, Zap, Shield, Lightbulb, Globe
} from 'lucide-react';

export default function CoursesPage() {
  const courses = [
    {
      id: "anatomy-physiology",
      title: "Anatomy & Physiology",
      description: "Comprehensive study of human body structure and function",
      duration: "12 weeks",
      level: "Beginner",
      modules: 8,
      rating: 4.8,
      students: 1250,
      icon: Brain,
      color: "from-blue-500 to-blue-600",
      category: "Foundation"
    },
    {
      id: "biomechanics",
      title: "Biomechanics & Kinesiology",
      description: "Study of movement mechanics and human motion analysis",
      duration: "10 weeks",
      level: "Intermediate",
      modules: 6,
      rating: 4.7,
      students: 980,
      icon: Activity,
      color: "from-green-500 to-green-600",
      category: "Foundation"
    },
    {
      id: "assessment-techniques",
      title: "Assessment & Evaluation",
      description: "Clinical assessment methods and diagnostic techniques",
      duration: "8 weeks",
      level: "Intermediate",
      modules: 7,
      rating: 4.9,
      students: 1100,
      icon: Stethoscope,
      color: "from-purple-500 to-purple-600",
      category: "Clinical Skills"
    },
    {
      id: "therapeutic-exercise",
      title: "Therapeutic Exercise",
      description: "Exercise prescription and rehabilitation protocols",
      duration: "14 weeks",
      level: "Intermediate",
      modules: 10,
      rating: 4.8,
      students: 1350,
      icon: Dumbbell,
      color: "from-orange-500 to-orange-600",
      category: "Clinical Skills"
    },
    {
      id: "manual-therapy",
      title: "Manual Therapy",
      description: "Hands-on techniques for musculoskeletal conditions",
      duration: "12 weeks",
      level: "Advanced",
      modules: 9,
      rating: 4.9,
      students: 890,
      icon: Users,
      color: "from-red-500 to-red-600",
      category: "Clinical Skills"
    }
  ];

  const categories = [
    {
      name: "Foundation",
      description: "Essential knowledge for physiotherapy practice",
      count: 2
    },
    {
      name: "Clinical Skills",
      description: "Practical skills and clinical applications",
      count: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-indigo-600/10 to-purple-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              Learning Platform
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="text-foreground">Master</span>
              <br />
              <span className="text-blue-600">Physiotherapy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive courses designed by leading physiotherapy educators. 
              From foundational concepts to advanced clinical skills.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>{courses.length} Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>5,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Course Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our structured learning paths designed for different skill levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-blue-600">{category.count} Courses</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              All Courses
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive curriculum designed for physiotherapy students and professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`bg-gradient-to-r ${course.color} text-white border-0 px-3 py-1 text-xs font-medium`}>
                      {course.category}
                    </Badge>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${course.color} text-white`}>
                      <course.icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.modules} modules</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  
                  <Link href={`/courses/${course.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 group-hover:shadow-lg transition-all duration-300">
                      <Play className="mr-2 h-4 w-4" />
                      Start Course
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Join thousands of physiotherapy students and professionals advancing their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                <GraduationCap className="mr-2 h-5 w-5" />
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
