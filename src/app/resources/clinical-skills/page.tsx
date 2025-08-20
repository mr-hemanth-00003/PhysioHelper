'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ClipboardList, 
  BookOpen, 
  Video, 
  Download, 
  Users, 
  Award, 
  TrendingUp,
  Heart,
  Brain,
  Bone,
  Eye,
  Zap,
  Target,
  Clock,
  Play,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  GraduationCap,
  Microscope,
  Dumbbell,
  Activity
} from 'lucide-react';

export default function ClinicalSkillsPage() {
  const skillCategories = [
    {
      title: "Patient Assessment",
      icon: ClipboardList,
      description: "Comprehensive patient evaluation and history taking",
      skills: ["Subjective Assessment", "Objective Assessment", "Clinical Reasoning", "Differential Diagnosis"],
      difficulty: "Intermediate",
      duration: "2-3 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Physical Examination",
      icon: Activity,
      description: "Hands-on examination techniques and palpation skills",
      skills: ["Range of Motion", "Manual Muscle Testing", "Special Tests", "Palpation Skills"],
      difficulty: "Advanced",
      duration: "3-4 hours",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Treatment Techniques",
      icon: Dumbbell,
      description: "Therapeutic interventions and manual therapy skills",
      skills: ["Manual Therapy", "Exercise Prescription", "Modalities", "Patient Education"],
      difficulty: "Advanced",
      duration: "4-5 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Clinical Documentation",
      icon: BookOpen,
      description: "Professional documentation and record keeping",
      skills: ["SOAP Notes", "Progress Reports", "Discharge Planning", "Legal Documentation"],
      difficulty: "Beginner",
      duration: "1-2 hours",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const assessmentTechniques = [
    {
      name: "Subjective Assessment",
      description: "Patient interview and history taking",
      keyPoints: ["Chief complaint", "History of present illness", "Past medical history", "Social history"],
      tips: ["Use open-ended questions", "Listen actively", "Document accurately", "Show empathy"],
      commonMistakes: ["Rushing the interview", "Missing red flags", "Poor documentation", "Lack of follow-up questions"]
    },
    {
      name: "Objective Assessment",
      description: "Physical examination and clinical testing",
      keyPoints: ["Observation", "Palpation", "Range of motion", "Special tests"],
      tips: ["Systematic approach", "Compare bilaterally", "Document findings", "Consider contraindications"],
      commonMistakes: ["Incomplete examination", "Missing key tests", "Poor technique", "Inadequate documentation"]
    },
    {
      name: "Clinical Reasoning",
      description: "Problem-solving and decision-making process",
      keyPoints: ["Pattern recognition", "Hypothesis generation", "Clinical decision making", "Clinical reasoning"],
      tips: ["Think systematically", "Consider differentials", "Use clinical reasoning", "Reflect on decisions"],
      commonMistakes: ["Jumping to conclusions", "Ignoring evidence", "Poor reasoning", "Lack of reflection"]
    }
  ];

  const practicalExercises = [
    {
      title: "Palpation Skills",
      description: "Develop tactile sensitivity and anatomical knowledge",
      duration: "45 minutes",
      materials: ["Anatomical models", "Partner", "Blindfold", "Feedback sheet"],
      steps: [
        "Practice on anatomical models",
        "Partner exercises with feedback",
        "Blindfolded identification",
        "Document findings"
      ]
    },
    {
      title: "Range of Motion Assessment",
      description: "Learn standardized ROM measurement techniques",
      duration: "60 minutes",
      materials: ["Goniometer", "Partner", "Measurement forms", "Video camera"],
      steps: [
        "Learn goniometer positioning",
        "Practice on partner",
        "Record measurements",
        "Compare with norms"
      ]
    },
    {
      title: "Manual Muscle Testing",
      description: "Master MMT grading and techniques",
      duration: "90 minutes",
      materials: ["Partner", "Resistance bands", "MMT manual", "Grading forms"],
      steps: [
        "Review grading system",
        "Practice positioning",
        "Apply resistance",
        "Grade accurately"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500/10 via-green-500/10 to-blue-600/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 px-4 py-2 mb-6 animate-fade-in">
                <ClipboardList className="h-4 w-4 mr-2" />
                Clinical Skills
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Essential
                <span className="gradient-text block">Clinical Skills</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Develop the practical skills and clinical reasoning abilities needed for 
                competent physiotherapy practice through hands-on learning and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <Video className="h-5 w-5 mr-2" />
                  Watch Tutorials
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Resources
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">25+</div>
                <p className="text-muted-foreground">Clinical Skills</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Video Tutorials</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">3.2K+</div>
                <p className="text-muted-foreground">Students Trained</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">Advanced</div>
                <p className="text-muted-foreground">Practice</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skill Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Core Clinical
                <span className="gradient-text block">Skill Areas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage of essential clinical skills organized by competency level and practice area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <Card key={category.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {category.difficulty}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {category.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Key Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs px-2 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Learn {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Assessment Techniques */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Assessment
                <span className="gradient-text block">Techniques</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Master the fundamental assessment techniques that form the foundation of clinical practice.
              </p>
            </div>
            
            <div className="space-y-6">
              {assessmentTechniques.map((technique, index) => (
                <Card key={technique.name} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <CardTitle className="text-2xl font-headline flex items-center gap-3">
                      {technique.name}
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Essential
                      </Badge>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {technique.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Target className="h-4 w-4 text-primary" />
                            Key Points
                          </h4>
                          <ul className="space-y-2">
                            {technique.keyPoints.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Lightbulb className="h-4 w-4 text-warning" />
                            Pro Tips
                          </h4>
                          <ul className="space-y-2">
                            {technique.tips.map((tip) => (
                              <li key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <Info className="h-4 w-4 text-info mt-0.5 flex-shrink-0" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-warning" />
                            Common Mistakes
                          </h4>
                          <ul className="space-y-2">
                            {technique.commonMistakes.map((mistake) => (
                              <li key={mistake} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                                {mistake}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Exercises */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Hands-On
                <span className="gradient-text block">Practice</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical exercises to develop and refine your clinical skills through structured practice.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practicalExercises.map((exercise, index) => (
                <Card key={exercise.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exercise.duration}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-headline">{exercise.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {exercise.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Materials Needed:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exercise.materials.map((material) => (
                          <Badge key={material} variant="secondary" className="text-xs px-2 py-1">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm">Practice Steps:</h4>
                      <ol className="space-y-2 text-sm text-muted-foreground">
                        {exercise.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <Play className="h-4 w-4 mr-2" />
                      Start Exercise
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 to-green-500/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Ready to Develop Your
                <span className="gradient-text block">Clinical Skills?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of physiotherapy students who are already mastering essential clinical skills 
                and building confidence for their professional practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <Video className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Users className="h-5 w-5 mr-2" />
                  Join Practice Group
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
