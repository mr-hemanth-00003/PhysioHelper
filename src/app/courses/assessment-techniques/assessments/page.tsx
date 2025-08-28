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
  ChevronRight, Video, FileText, TestTube, Award, Clipboard,
  Timer, AlertCircle, CheckCircle2, XCircle, BarChart3, Lock,
  ArrowLeft, ClipboardList, TrendingUp
} from 'lucide-react';

export default function AssessmentTechniquesAssessmentsPage() {
  const assessments = [
    {
      id: "subjective-quiz",
      title: "Subjective Assessment Quiz",
      description: "Test your knowledge of history taking and subjective examination techniques",
      duration: "30 minutes",
      questions: 25,
      difficulty: "Intermediate",
      type: "Quiz",
      status: "available",
      icon: ClipboardList,
      href: "#"
    },
    {
      id: "objective-practical",
      title: "Objective Assessment Practical",
      description: "Hands-on practice with physical examination and assessment procedures",
      duration: "45 minutes",
      questions: 20,
      difficulty: "Advanced",
      type: "Practical",
      status: "available",
      icon: Activity,
      href: "#"
    },
    {
      id: "special-tests",
      title: "Special Tests & Procedures",
      description: "Comprehensive assessment of special orthopedic and neurological tests",
      duration: "40 minutes",
      questions: 30,
      difficulty: "Advanced",
      type: "Assessment",
      status: "available",
      icon: Target,
      href: "#"
    },
    {
      id: "outcome-measures",
      title: "Outcome Measures & Scales",
      description: "Understanding and application of standardized outcome measures",
      duration: "35 minutes",
      questions: 22,
      difficulty: "Intermediate",
      type: "Assessment",
      status: "available",
      icon: TrendingUp,
      href: "#"
    },
    {
      id: "clinical-reasoning",
      title: "Clinical Reasoning & Diagnosis",
      description: "Case-based scenarios to develop clinical reasoning skills",
      duration: "50 minutes",
      questions: 28,
      difficulty: "Advanced",
      type: "Case Study",
      status: "available",
      icon: Brain,
      href: "#"
    },
    {
      id: "documentation",
      title: "Assessment Documentation",
      description: "Best practices for documenting assessment findings and clinical notes",
      duration: "25 minutes",
      questions: 18,
      difficulty: "Intermediate",
      type: "Assessment",
      status: "available",
      icon: FileText,
      href: "#"
    },
    {
      id: "comprehensive-final",
      title: "Comprehensive Final Assessment",
      description: "Complete assessment covering all aspects of clinical evaluation",
      duration: "90 minutes",
      questions: 50,
      difficulty: "Advanced",
      type: "Exam",
      status: "locked",
      icon: Award,
      href: "#"
    }
  ];

  const assessmentStats = {
    totalAssessments: 7,
    completed: 0,
    inProgress: 0,
    available: 6,
    locked: 1,
    averageScore: 0,
    timeSpent: "0 hours"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-purple-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Link href="/courses/assessment-techniques">
                <Button variant="outline" size="sm" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Course
                </Button>
              </Link>
            </div>
            
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium">
              Assessment & Evaluation Course
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="text-foreground">Clinical Skills</span>
              <br />
              <span className="text-purple-600">Assessments</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Test your knowledge and skills through comprehensive assessments, practical examinations, 
              and real-world case studies. Track your progress and identify areas for improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Statistics */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-purple-600">{assessmentStats.totalAssessments}</div>
              <div className="text-sm text-muted-foreground">Total Assessments</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-green-600">{assessmentStats.completed}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-blue-600">{assessmentStats.averageScore}%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </Card>
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-orange-600">{assessmentStats.timeSpent}</div>
              <div className="text-sm text-muted-foreground">Time Spent</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Grid */}
      <section className="py-16 sm:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-headline font-bold mb-4">
              Course Assessments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete assessments to demonstrate your understanding and earn course completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessments.map((assessment) => (
              <Card key={assessment.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${
                      assessment.type === 'Quiz' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                      assessment.type === 'Practical' ? 'bg-green-100 text-green-800 border-green-200' :
                      assessment.type === 'Case Study' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                      assessment.type === 'Assessment' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                      assessment.type === 'Exam' ? 'bg-red-100 text-red-800 border-red-200' :
                      assessment.type === 'Practice' ? 'bg-indigo-100 text-indigo-800 border-indigo-200' :
                      'bg-gray-100 text-gray-800 border-gray-200'
                    } px-3 py-1 text-xs font-medium`}>
                      {assessment.type}
                    </Badge>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      {assessment.status === 'locked' ? 'Locked' : 'Available'}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                    {assessment.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {assessment.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4" />
                      <span>{assessment.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TestTube className="h-4 w-4" />
                      <span>{assessment.questions} Qs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4" />
                      <span>{assessment.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Available</span>
                    </div>
                  </div>
                  
                  <Link href={assessment.href}>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-0 group-hover:shadow-lg transition-all duration-300">
                      <Play className="mr-2 h-4 w-4" />
                      Start Assessment
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 bg-gradient-to-r from-purple-50 to-indigo-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your assessment and begin demonstrating your clinical assessment skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses/assessment-techniques">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Back to Course
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  View All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
