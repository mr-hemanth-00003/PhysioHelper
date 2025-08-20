'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
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
  Activity,
  Move,
  UserCheck
} from 'lucide-react';

export default function RehabilitationProtocolPage() {
  const protocolCategories = [
    {
      title: "Neurological Rehabilitation",
      icon: Brain,
      description: "Protocols for stroke, spinal cord injury, and neurological conditions",
      protocols: ["Gait Training", "Balance Exercises", "Coordination Drills", "Sensory Re-education"],
      difficulty: "Advanced",
      duration: "4-5 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Musculoskeletal Rehabilitation",
      icon: Move,
      description: "Protocols for orthopedic injuries, post-surgery recovery, and chronic pain",
      protocols: ["Joint Mobilization", "Strengthening Programs", "Range of Motion", "Pain Management"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cardiopulmonary Rehabilitation",
      icon: Heart,
      description: "Protocols for heart and lung conditions, post-surgery recovery",
      protocols: ["Breathing Exercises", "Endurance Training", "Chest Physiotherapy", "Aerobic Conditioning"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Sports Rehabilitation",
      icon: Zap,
      description: "Protocols for athletes, sports injuries, and performance enhancement",
      protocols: ["Injury Prevention", "Return to Sport", "Performance Training", "Recovery Protocols"],
      difficulty: "Advanced",
      duration: "4-5 hours",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Pediatric Rehabilitation",
      icon: Users,
      description: "Protocols for children with developmental delays and conditions",
      protocols: ["Developmental Milestones", "Play-Based Therapy", "Family Education", "School Integration"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Geriatric Rehabilitation",
      icon: UserCheck,
      description: "Protocols for elderly patients, fall prevention, and mobility",
      protocols: ["Fall Prevention", "Mobility Training", "Strength Maintenance", "Balance Programs"],
      difficulty: "Intermediate",
      duration: "3-4 hours",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const assessmentTechniques = [
    {
      name: "Functional Assessment",
      description: "Evaluate patient's ability to perform daily activities and functional tasks",
      keyPoints: ["ADL assessment", "Functional mobility", "Task analysis", "Safety evaluation"],
      tips: ["Use standardized tools", "Observe in natural environment", "Document limitations", "Consider safety factors"],
      commonMistakes: ["Rushing assessment", "Missing key activities", "Poor documentation", "Ignoring safety concerns"]
    },
    {
      name: "Range of Motion Testing",
      description: "Measure joint flexibility and movement limitations systematically",
      keyPoints: ["Goniometric measurement", "Active vs passive ROM", "End feel assessment", "Documentation"],
      tips: ["Use proper technique", "Compare bilaterally", "Document end feel", "Consider pain response"],
      commonMistakes: ["Incorrect positioning", "Poor measurement technique", "Missing documentation", "Ignoring pain"]
    },
    {
      name: "Strength Assessment",
      description: "Evaluate muscle strength using manual muscle testing and functional tests",
      keyPoints: ["Manual muscle testing", "Grading system", "Functional testing", "Documentation"],
      tips: ["Use standardized grading", "Test in proper position", "Consider substitutions", "Document accurately"],
      commonMistakes: ["Poor positioning", "Inconsistent grading", "Missing substitutions", "Incomplete documentation"]
    }
  ];

  const practicalExercises = [
    {
      title: "Protocol Implementation",
      description: "Practice implementing rehabilitation protocols step-by-step",
      duration: "60 minutes",
      materials: ["Protocol guidelines", "Partner", "Assessment forms", "Progress tracking tools"],
      steps: [
        "Review protocol guidelines",
        "Assess patient baseline",
        "Implement treatment plan",
        "Monitor progress"
      ]
    },
    {
      title: "Assessment Practice",
      description: "Develop proficiency in various assessment techniques",
      duration: "90 minutes",
      materials: ["Assessment tools", "Partner", "Documentation forms", "Video recording"],
      steps: [
        "Set up assessment environment",
        "Practice assessment techniques",
        "Record findings accurately",
        "Review and improve"
      ]
    },
    {
      title: "Treatment Progression",
      description: "Learn to progress treatment plans based on patient response",
      duration: "75 minutes",
      materials: ["Treatment protocols", "Progress charts", "Outcome measures", "Case scenarios"],
      steps: [
        "Review current progress",
        "Assess readiness for progression",
        "Modify treatment plan",
        "Document changes"
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
                <FileText className="h-4 w-4 mr-2" />
                Rehabilitation Protocols
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Master Comprehensive
                <span className="gradient-text block">Rehabilitation Protocols</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Learn evidence-based rehabilitation protocols for various conditions through 
                structured learning, practical exercises, and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Protocols
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
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Protocols</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">25+</div>
                <p className="text-muted-foreground">Assessment Tools</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold font-headline gradient-text mb-2">6</div>
                <p className="text-muted-foreground">Specialty Areas</p>
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

        {/* Protocol Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Rehabilitation
                <span className="gradient-text block">Protocol Areas</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage of rehabilitation protocols organized by specialty area and complexity level.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {protocolCategories.map((category, index) => (
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
                      <p className="text-xs font-semibold text-foreground">Key Protocols:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.protocols.map((protocol) => (
                          <Badge key={protocol} variant="secondary" className="text-xs px-2 py-1">
                            {protocol}
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
                Master the fundamental assessment techniques that form the foundation of rehabilitation practice.
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
                Practical exercises to develop and refine your rehabilitation protocol skills through structured practice.
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
                Ready to Master
                <span className="gradient-text block">Rehabilitation Protocols?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Join thousands of physiotherapy students who are already mastering rehabilitation protocols 
                and building confidence for their professional practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Start Learning
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
