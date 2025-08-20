import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Dumbbell, 
  Users, 
  Award, 
  Star, 
  ArrowRight,
  Play,
  CheckCircle,
  Shield,
  Zap,
  BookOpen,
  Activity,
  Target,
  Lightbulb,
  Globe,
  GraduationCap,
  BookOpenCheck,
  Microscope,
  ClipboardList
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: BookOpenCheck,
      title: "Clinical Case Studies",
      description: "Real patient cases with detailed assessment and treatment protocols",
      color: "from-blue-500 to-blue-600",
      features: ["Patient history analysis", "Assessment techniques", "Treatment planning"]
    },

    {
      icon: ClipboardList,
      title: "Practical Skills Lab",
      description: "Step-by-step guides for physiotherapy techniques and exercises",
      color: "from-green-500 to-green-600",
      features: ["Hands-on techniques", "Exercise protocols", "Assessment tools"]
    },
    {
      icon: GraduationCap,
      title: "Exam Preparation",
      description: "Comprehensive study materials and practice questions",
      color: "from-red-500 to-red-600",
      features: ["Study guides", "Practice exams", "Clinical scenarios"]
    }
  ];

  const stats = [
    { number: "Advanced", label: "Clinical Practice", icon: Users },
    { number: "Interactive", label: "Learning Tools", icon: BookOpen },
    { number: "Professional", label: "Skill Development", icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
        
        {/* Nano Animation Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-primary/60 rounded-full animate-pulse-slow animate-fade-in" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-secondary/70 rounded-full animate-pulse-slow animate-fade-in" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse-slow animate-fade-in" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse-slow animate-fade-in" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 right-1/6 w-1 h-1 bg-secondary/60 rounded-full animate-pulse-slow animate-fade-in" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Subtle Lighting Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 animate-fade-in"></div>
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-b from-primary/10 to-transparent blur-3xl transform -translate-x-1/2 animate-fade-in" style={{animationDelay: '0.3s'}}></div>
        
        <div className="relative container max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium animate-fade-in animate-pulse-glow" style={{animationDelay: '0.2s'}}>
                🎓 Your Physiotherapy Learning Journey
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
                <span className="animate-fade-in block" style={{animationDelay: '0.4s'}}>Master Physiotherapy</span>
                <span className="gradient-text block animate-fade-in animate-shimmer" style={{animationDelay: '0.6s'}}>Like a Pro</span>
                </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{animationDelay: '0.8s'}}>
                The ultimate learning platform for physiotherapy students. Access clinical case studies, 
                practical skills training, and exam preparation resources.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '1s'}}>
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4 animate-pulse-glow animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce-slow" />
                </Button>
                <Button size="lg" variant="outline" className="btn-healthcare-outline text-lg px-8 py-4 hover:animate-pulse-glow animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                  </Button>
              </div>
              
              <div className="flex items-center gap-8 text-sm text-muted-foreground animate-fade-in" style={{animationDelay: '1.6s'}}>
                <div className="flex items-center gap-2 hover:animate-bounce-slow transition-all duration-300 animate-fade-in-left" style={{animationDelay: '1.8s'}}>
                  <CheckCircle className="h-5 w-5 text-success animate-pulse-slow" />
                  <span>Free Student Access</span>
                </div>
                <div className="flex items-center gap-2 hover:animate-bounce-slow transition-all duration-300 animate-fade-in-right" style={{animationDelay: '2s'}}>
                  <CheckCircle className="h-5 w-5 text-success animate-pulse-slow" style={{animationDelay: '0.5s'}} />
                  <span>Professional Skill Development</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="relative z-10 animate-float-slow animate-fade-in-up" style={{animationDelay: '0.8s'}}>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-xl border border-primary/20 shadow-healthcare-lg animate-pulse-glow animate-fade-in" style={{animationDelay: '1s'}}>
                  <div className="bg-white/90 rounded-2xl p-6 shadow-lg animate-fade-in" style={{animationDelay: '1.2s'}}>
                    <div className="flex items-center gap-4 mb-6 animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center animate-pulse-glow animate-fade-in" style={{animationDelay: '1.6s'}}>
                        <GraduationCap className="h-6 w-6 text-white animate-bounce-slow" />
                      </div>
                      <div className="animate-fade-in" style={{animationDelay: '1.8s'}}>
                        <h3 className="font-semibold text-foreground">Student Learning Hub</h3>
                        <p className="text-sm text-muted-foreground">Your study companion</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg animate-pulse-slow animate-fade-in-up" style={{animationDelay: '2s'}}>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">Loading clinical case studies...</span>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg animate-pulse-slow animate-fade-in-up" style={{animationDelay: '2.2s'}}>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                        <span className="text-sm text-muted-foreground">Preparing study materials</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-xl animate-float animate-pulse-glow animate-fade-in" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary/20 to-blue-500/20 rounded-full blur-xl animate-float animate-pulse-glow animate-fade-in" style={{animationDelay: '2.5s'}}></div>
              </div>
            </div>
          </div>
        </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 relative overflow-hidden">
        {/* Nano Animation Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/50 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-0.5 h-0.5 bg-accent/60 rounded-full animate-pulse-slow" style={{animationDelay: '0.8s'}}></div>
        </div>
        
        {/* Subtle Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up group hover:animate-bounce-slow transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  <stat.icon className="h-8 w-8 text-white animate-bounce-slow" style={{animationDelay: `${index * 0.2}s`}} />
                </div>
                <div className="text-3xl lg:text-4xl font-headline font-bold gradient-text mb-2 animate-shimmer">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium group-hover:text-primary transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Nano Animation Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-primary/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-1/6 w-0.5 h-0.5 bg-secondary/40 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-primary/50 rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        {/* Subtle Lighting */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-transparent"></div>
        
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 text-sm font-medium mb-4 animate-pulse-glow">
              Our Services
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-headline font-bold mb-6">
              Comprehensive Healthcare
              <span className="gradient-text block animate-shimmer">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From assessment to recovery, we provide end-to-end healthcare support 
              using cutting-edge technology and proven practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="healthcare-card healthcare-card-hover group animate-fade-in-up hover:animate-pulse-glow transition-all duration-500" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                    <service.icon className="h-8 w-8 text-white animate-bounce-slow" style={{animationDelay: `${index * 0.2}s`}} />
                  </div>
                  <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm group-hover:text-primary transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-success animate-pulse-slow flex-shrink-0" style={{animationDelay: `${featureIndex * 0.1}s`}} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-healthcare-outline group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:animate-pulse-glow">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>




      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden">
        {/* Nano Animation Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-0.5 h-0.5 bg-secondary/50 rounded-full animate-pulse-slow" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse-slow" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute top-2/3 right-1/4 w-0.5 h-0.5 bg-primary/60 rounded-full animate-pulse-slow" style={{animationDelay: '1.8s'}}></div>
        </div>
        
        {/* Enhanced Lighting Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-primary/3"></div>
        <div className="absolute top-0 left-1/2 w-80 h-80 bg-gradient-to-b from-secondary/8 to-transparent blur-3xl transform -translate-x-1/2"></div>
        
        <div className="container max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <h2 className="text-3xl lg:text-5xl font-headline font-bold">
              Ready to Transform
              <span className="gradient-text block animate-shimmer">Your Health?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join thousands of users who have already improved their health and wellness 
              with our AI-powered healthcare platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-healthcare text-lg px-8 py-4 animate-pulse-glow">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce-slow" />
              </Button>
              <Button size="lg" variant="outline" className="btn-healthcare-outline text-lg px-8 py-4 hover:animate-pulse-glow">
                Schedule Consultation
                </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 hover:animate-bounce-slow transition-all duration-300">
                <CheckCircle className="h-4 w-4 text-success animate-pulse-slow" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 hover:animate-bounce-slow transition-all duration-300">
                <CheckCircle className="h-4 w-4 text-success animate-pulse-slow" style={{animationDelay: '0.5s'}} />
                <span>Free initial assessment</span>
              </div>
              <div className="flex items-center gap-2 hover:animate-bounce-slow transition-all duration-300">
                <CheckCircle className="h-4 w-4 text-success animate-pulse-slow" style={{animationDelay: '1s'}} />
                <span>Cancel anytime</span>
              </div>
            </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
