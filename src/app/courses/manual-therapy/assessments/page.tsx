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
  Hand, ArrowLeft
} from 'lucide-react';

export default function ManualTherapyAssessmentsPage() {
  const assessments = [
    {
      id: "module-1-quiz",
      title: "Manual Therapy Fundamentals Quiz",
      description: "Test your understanding of basic principles and safety protocols",
      type: "Quiz",
      duration: "20 minutes",
      questions: 25,
      passingScore: 70,
      attempts: 3,
      status: "available",
      topics: ["Basic principles", "Safety protocols", "Indications", "Contraindications"],
      href: "/courses/manual-therapy/assessments/fundamentals-quiz"
    },
    {
      id: "module-2-practical",
      title: "Joint Mobilization Practical",
      description: "Demonstrate joint mobilization techniques and assessment skills",
      type: "Practical",
      duration: "40 minutes",
      questions: 20,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Joint assessment", "Mobilization techniques", "Treatment progression"],
      href: "/courses/manual-therapy/assessments/joint-mobilization"
    },
    {
      id: "module-3-assessment",
      title: "Soft Tissue Techniques Assessment",
      description: "Evaluate your knowledge of massage and soft tissue manipulation",
      type: "Assessment",
      duration: "30 minutes",
      questions: 22,
      passingScore: 75,
      attempts: 3,
      status: "available",
      topics: ["Massage techniques", "Myofascial release", "Trigger point therapy"],
      href: "/courses/manual-therapy/assessments/soft-tissue"
    },
    {
      id: "module-4-exam",
      title: "Manipulation Skills Exam",
      description: "Comprehensive examination of high-velocity manipulation techniques",
      type: "Exam",
      duration: "60 minutes",
      questions: 40,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Manipulation principles", "Spinal techniques", "Safety protocols"],
      href: "/courses/manual-therapy/assessments/manipulation-skills"
    },
    {
      id: "module-5-case-study",
      title: "Assessment & Diagnosis Case Study",
      description: "Analyze patient cases and develop treatment plans",
      type: "Case Study",
      duration: "45 minutes",
      questions: 30,
      passingScore: 75,
      attempts: 2,
      status: "available",
      topics: ["Patient assessment", "Diagnostic reasoning", "Treatment planning"],
      href: "/courses/manual-therapy/assessments/assessment-diagnosis"
    },
    {
      id: "module-6-final",
      title: "Clinical Integration Final Exam",
      description: "Final examination covering all manual therapy principles",
      type: "Final",
      duration: "90 minutes",
      questions: 60,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Clinical applications", "Case studies", "Professional practice"],
      href: "/courses/manual-therapy/assessments/clinical-integration"
    },
    {
      id: "comprehensive-final",
      title: "Comprehensive Final Assessment",
      description: "Final assessment covering all course modules and clinical applications",
      type: "Final",
      duration: "120 minutes",
      questions: 80,
      passingScore: 80,
      attempts: 1,
      status: "locked",
      topics: ["All course topics", "Clinical integration", "Problem solving"],
      href: "/courses/manual-therapy/assessments/comprehensive-final"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-red-500/10 via-red-600/10 to-red-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Link href="/courses/manual-therapy">
                <Button variant="outline" size="sm" className="mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Course
                </Button>
              </Link>
            </div>
            
            <Badge className="bg-red-100 text-red-800 border-red-200 px-4 py-2 text-sm font-medium">
              Manual Therapy Course
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="text-foreground">Clinical Skills</span>
              <br />
              <span className="text-red-600">Assessments</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstrate your mastery of manual therapy techniques through comprehensive 
              assessments, practical examinations, and real-world case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Assessment Statistics */}
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center p-6">
              <div className="text-2xl font-bold text-red-600">{assessmentStats.totalAssessments}</div>
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
                  
                  <CardTitle className="text-xl font-bold group-hover:text-red-600 transition-colors">
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
                      <span>{assessment.passingScore}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>{assessment.attempts} attempts</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {assessment.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {assessment.status === 'locked' ? (
                    <Button 
                      className="w-full bg-gray-400 cursor-not-allowed border-0"
                      disabled
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Complete Prerequisites
                    </Button>
                  ) : (
                    <Link href={assessment.href}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white border-0 group-hover:shadow-lg transition-all duration-300">
                        <Play className="mr-2 h-4 w-4" />
                        Start Assessment
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your assessment and begin demonstrating your manual therapy skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses/manual-therapy">
                <Button variant="outline" size="lg" className="px-8 py-3">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Back to Course
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
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
