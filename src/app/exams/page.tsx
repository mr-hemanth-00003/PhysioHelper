'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  Target, 
  Award, 
  TrendingUp, 
  Users, 
  Calendar,
  CheckCircle,
  Play,
  Download,
  BarChart3,
  Timer,
  Brain,
  Heart,
  Dumbbell,
  Microscope,
  ClipboardList,
  BookOpenCheck
} from 'lucide-react';

export default function ExamsPage() {
  const examCategories = [
    {
      title: "Clinical Assessment",
      icon: ClipboardList,
      description: "Patient evaluation, diagnosis, and treatment planning",
      examCount: 12,
      difficulty: "Intermediate",
      duration: "45-60 min",
      topics: ["Patient History", "Physical Examination", "Clinical Reasoning", "Differential Diagnosis"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Anatomy & Physiology",
      icon: Heart,
      description: "Comprehensive understanding of human body systems",
      examCount: 18,
      difficulty: "Advanced",
      duration: "60-90 min",
      topics: ["Musculoskeletal", "Neurological", "Cardiovascular", "Respiratory"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Rehabilitation Techniques",
      icon: Dumbbell,
      description: "Exercise protocols and therapeutic interventions",
      examCount: 15,
      difficulty: "Intermediate",
      duration: "45-75 min",
      topics: ["Exercise Prescription", "Manual Therapy", "Modalities", "Patient Education"],
      color: "from-green-500 to-green-600"
    },

    {
      title: "Professional Practice",
      icon: BookOpenCheck,
      description: "Ethics, communication, and professional standards",
      examCount: 8,
      difficulty: "Beginner",
      duration: "30-45 min",
      topics: ["Ethics", "Communication", "Documentation", "Legal Issues"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Specialized Areas",
      icon: Brain,
      description: "Neurological, pediatric, and geriatric physiotherapy",
      examCount: 14,
      difficulty: "Advanced",
      duration: "60-90 min",
      topics: ["Neurological", "Pediatric", "Geriatric", "Sports"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const recentExams = [
    {
      title: "Clinical Assessment - Module 1",
      category: "Clinical Assessment",
      score: 85,
      completed: "2 days ago",
      timeSpent: "52 min",
      questions: 45,
      correct: 38
    },
    {
      title: "Anatomy - Musculoskeletal System",
      category: "Anatomy & Physiology",
      score: 92,
      completed: "1 week ago",
      timeSpent: "78 min",
      questions: 60,
      correct: 55
    },
    {
      title: "Rehabilitation - Exercise Protocols",
      category: "Rehabilitation Techniques",
      score: 78,
      completed: "2 weeks ago",
      timeSpent: "65 min",
      questions: 50,
      correct: 39
    }
  ];

  const upcomingExams = [

    {
      title: "Professional Practice - Ethics & Communication",
      date: "2024-01-20",
      duration: "45 min",
      questions: 35,
      difficulty: "Beginner"
    },
    {
      title: "Specialized Areas - Neurological Assessment",
      date: "2024-01-25",
      duration: "75 min",
      questions: 55,
      difficulty: "Advanced"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6 animate-fade-in">
                <Target className="h-4 w-4 mr-2" />
                Practice Exams
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Your
                <span className="gradient-text block">Physiotherapy Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive practice exams designed to test your knowledge, 
                improve your clinical reasoning, and prepare you for real-world scenarios.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <Play className="h-5 w-5 mr-2" />
                  Start Practice Exam
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Study Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/50">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">Advanced</div>
                <p className="text-muted-foreground">Practice Exams</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">Professional</div>
                <p className="text-muted-foreground">Students</p>
              </div>
                             <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                 <div className="w-16 h-16 bg-gradient-to-br from-accent to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                   <Award className="h-8 w-8 text-white" />
                 </div>
                 <div className="text-3xl font-bold font-headline gradient-text mb-2">Advanced</div>
                 <p className="text-muted-foreground">Practice</p>
               </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">Continuous</div>
                <p className="text-muted-foreground">Improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Choose Your
                <span className="gradient-text block">Exam Category</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select from our comprehensive range of practice exams covering all aspects of physiotherapy practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {examCategories.map((category, index) => (
                <Card key={category.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        {category.examCount} exams
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {category.duration}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Key Topics:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs px-2 py-1">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <Play className="h-4 w-4 mr-2" />
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Performance */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Your Recent
                <span className="gradient-text block">Performance</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track your progress and identify areas for improvement with detailed performance analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Exams */}
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Recent Exam Results
                  </CardTitle>
                  <CardDescription>
                    Your latest practice exam performances
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentExams.map((exam, index) => (
                    <div key={index} className="p-4 border border-border/50 rounded-lg bg-white/50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-sm">{exam.title}</h4>
                        <Badge className={`px-2 py-1 text-xs ${
                          exam.score >= 90 ? 'bg-success/10 text-success' :
                          exam.score >= 80 ? 'bg-primary/10 text-primary' :
                          exam.score >= 70 ? 'bg-warning/10 text-warning' :
                          'bg-destructive/10 text-destructive'
                        }`}>
                          {exam.score}%
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>{exam.category}</span>
                        <span>{exam.completed}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>Score: {exam.correct}/{exam.questions}</span>
                          <span>Time: {exam.timeSpent}</span>
                        </div>
                        <Progress value={exam.score} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Upcoming Exams */}
              <Card className="healthcare-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Upcoming Exams
                  </CardTitle>
                  <CardDescription>
                    Scheduled practice exams and assessments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingExams.map((exam, index) => (
                    <div key={index} className="p-4 border border-border/50 rounded-lg bg-white/50">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-sm">{exam.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {exam.difficulty}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(exam.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Timer className="h-4 w-4" />
                          <span>{exam.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span>{exam.questions} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          <span>{exam.difficulty}</span>
                        </div>
                      </div>
                      <Button className="w-full mt-3 btn-healthcare-outline" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Study Materials
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Test Your
                <span className="gradient-text block">Knowledge?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of physiotherapy students who are already improving their skills 
                and confidence with our comprehensive practice exams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <Play className="h-5 w-5 mr-2" />
                  Start Your First Exam
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
