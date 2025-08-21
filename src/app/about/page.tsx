
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Zap,
  Shield,
  Lightbulb,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users2,
  BookOpenCheck,
  Microscope,
  ClipboardList
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Every decision we make prioritizes the learning experience and success of physiotherapy students.",
      color: "from-red-500 to-pink-500"
    },

    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously explore new technologies and methods to enhance learning outcomes.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Building connections between physiotherapy students and professionals worldwide.",
      color: "from-green-500 to-teal-500"
    }
  ];



  const team = [
    {
      name: "Dr.Surya",
      role: "Founder",
      expertise: "Physiotherapy, Clinical Practice",
      experience: "2+ years",
      avatar: "/team/member-1.jpg",
      description: "Leading physiotherapist with extensive experience in clinical practice and patient care."
    },
    {
      name: "B.Anand",
      role: "Developer",
      expertise: "UI/UX Enthusastic",
      experience: "2+ years",
      avatar: "/team/member-2.jpg",
      description: ""
    }
  ];



  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 sm:px-4 py-2 mb-4 sm:mb-6 animate-fade-in text-xs sm:text-sm">
                <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                About PhysioHelper
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mb-4 sm:mb-6 leading-tight">
                Empowering the Next Generation of
                <span className="gradient-text block">Physiotherapists</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                We're on a mission to revolutionize physiotherapy education through innovative technology, 
                practical content, and a global community of learners and professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button size="lg" className="btn-healthcare text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Explore Our Platform
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Join Our Community
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 md:py-20 bg-white/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
              {/* Mission */}
              <div className="space-y-4 sm:space-y-6 animate-fade-in-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-headline">Our Mission</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To provide physiotherapy students worldwide with comprehensive, practical learning resources 
                  that bridge the gap between theoretical knowledge and clinical practice, ensuring every student 
                  has the tools they need to excel in their profession.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Accessible education for all</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Practical learning content</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Practical clinical skills development</span>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="space-y-4 sm:space-y-6 animate-fade-in-right">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-headline">Our Vision</h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  To become the world's leading platform for physiotherapy education, fostering a global community 
                  where students, educators, and professionals collaborate to advance the field and improve 
                  patient care outcomes worldwide.
                </p>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Global learning community</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Innovation in healthcare education</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success flex-shrink-0" />
                    <span className="text-sm sm:text-base text-muted-foreground">Excellence in patient care</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Our Core
                <span className="gradient-text block">Values</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                These fundamental principles guide everything we do and shape the learning experience we provide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={value.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                      <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-headline">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Team */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-3 sm:mb-4">
                Meet Our
                <span className="gradient-text block">Expert Team</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Dedicated professionals committed to advancing physiotherapy education and student success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <Card key={member.name} data-member={member.name} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden mx-auto mb-4 border-4 border-gradient-to-br from-primary/20 to-secondary/20 relative">
                      <img 
                        src={member.avatar} 
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hidden">
                        <Users className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-headline">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold text-sm sm:text-base">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-3 sm:space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{member.expertise}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-muted-foreground">{member.experience}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline mb-4 sm:mb-6">
                Ready to Start Your
                <span className="gradient-text block">Physiotherapy Journey?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                Join thousands of students who are already advancing their careers with our comprehensive 
                learning platform and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button size="lg" className="btn-healthcare text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Contact Our Team
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
