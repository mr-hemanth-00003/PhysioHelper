import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, Brain, Heart, Bone, Activity, Users, Clock, Star,
  Play, CheckCircle, ArrowRight, GraduationCap, Stethoscope,
  Dumbbell, Microscope, Target, Zap, Shield, Lightbulb, Globe,
  ChevronRight, Video, FileText, TestTube, Award, Clipboard,
  Timer, AlertCircle, CheckCircle2, XCircle, BarChart3, Lock
} from 'lucide-react';

export default function TherapeuticExerciseAssessmentsPage() {
  const assessments = [
    {
      id: "module-1-quiz",
      title: "Exercise Fundamentals Quiz",
      description: "Test your understanding of basic exercise principles and movement patterns",
      type: "Quiz",
      duration: "20 minutes",
      questions: 25,
      passingScore: 70,
      attempts: 3,
      status: "available",
      topics: ["Exercise principles", "Movement patterns", "Safety considerations", "Patient education"]
    },
    {
      id: "module-2-practical",
      title: "ROM Exercises Practical",
      description: "Demonstrate range of motion exercise techniques and progression",
      type: "Practical",
      duration: "35 minutes",
      questions: 20,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Active ROM", "Passive ROM", "Stretching", "Joint mobilization"]
    },
    {
      id: "module-3-assessment",
      title: "Strengthening Exercises Assessment",
      description: "Evaluate your knowledge of progressive resistance training",
      type: "Assessment",
      duration: "30 minutes",
      questions: 22,
      passingScore: 75,
      attempts: 3,
      status: "available",
      topics: ["Isometric exercises", "Isotonic exercises", "Resistance training", "Progression strategies"]
    },
    {
      id: "module-4-case-study",
      title: "Balance & Coordination Case Study",
      description: "Analyze patient cases and design balance training programs",
      type: "Case Study",
      duration: "50 minutes",
      questions: 30,
      passingScore: 75,
      attempts: 2,
      status: "available",
      topics: ["Static balance", "Dynamic balance", "Coordination", "Fall prevention"]
    },
    {
      id: "module-5-practical",
      title: "Functional Training Practical",
      description: "Demonstrate task-specific exercise design and implementation",
      type: "Practical",
      duration: "40 minutes",
      questions: 18,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["ADL training", "Work-specific exercises", "Sports rehabilitation", "Goal setting"]
    },
    {
      id: "module-6-exam",
      title: "Cardiorespiratory Training Exam",
      description: "Comprehensive examination of endurance and cardiovascular conditioning",
      type: "Exam",
      duration: "45 minutes",
      questions: 35,
      passingScore: 75,
      attempts: 2,
      status: "available",
      topics: ["Aerobic training", "Interval training", "Circuit training", "Safety protocols"]
    },
    {
      id: "module-7-assessment",
      title: "Exercise Progression Assessment",
      description: "Test your understanding of systematic exercise advancement",
      type: "Assessment",
      duration: "25 minutes",
      questions: 20,
      passingScore: 70,
      attempts: 3,
      status: "available",
      topics: ["Progression principles", "Exercise modification", "Intensity adjustment", "Recovery planning"]
    },
    {
      id: "module-8-case-study",
      title: "Special Populations Case Study",
      description: "Design exercise programs for specific patient groups",
      type: "Case Study",
      duration: "60 minutes",
      questions: 35,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Geriatric patients", "Pediatric patients", "Neurological conditions", "Cardiac patients"]
    },
    {
      id: "module-9-practice",
      title: "Home Exercise Programs Practice",
      description: "Practice designing effective home-based exercise routines",
      type: "Practice",
      duration: "30 minutes",
      questions: 15,
      passingScore: 80,
      attempts: 3,
      status: "available",
      topics: ["Program design", "Patient instruction", "Safety guidelines", "Compliance strategies"]
    },
    {
      id: "module-10-exam",
      title: "Clinical Integration Final Exam",
      description: "Final examination covering all therapeutic exercise principles",
      type: "Final",
      duration: "75 minutes",
      questions: 50,
      passingScore: 80,
      attempts: 2,
      status: "available",
      topics: ["Case studies", "Clinical reasoning", "Outcome measures", "Professional practice"]
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
      topics: ["All course topics", "Clinical integration", "Problem solving", "Professional practice"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-orange-600/10 to-orange-700/10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center space-y-6">
            <Badge className="bg-orange-100 text-orange-800 border-orange-200 px-4 py-2 text-sm font-medium">
              Therapeutic Exercise Course
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              <span className="text-foreground">Exercise & Rehabilitation</span>
              <br />
              <span className="text-orange-600">Assessments</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Demonstrate your mastery of therapeutic exercise principles through comprehensive 
              assessments, practical examinations, and real-world case studies.
            </p>
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
                  
                  <CardTitle className="text-xl font-bold group-hover:text-orange-600 transition-colors">
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
                  
                  <Button 
                    className={`w-full ${
                      assessment.status === 'locked' 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-orange-600 hover:bg-orange-700 text-white'
                    } border-0 group-hover:shadow-lg transition-all duration-300`}
                    disabled={assessment.status === 'locked'}
                  >
                    {assessment.status === 'locked' ? (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Complete Prerequisites
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Start Assessment
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
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
