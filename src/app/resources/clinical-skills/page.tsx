'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, ResponsiveGrid, ResponsiveText, ResponsiveHeading, ResponsiveSpacer } from '@/components/ui/responsive-container';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity, 
  Eye, 
  Hand, 
  CheckCircle,
  Play,
  BookOpen,
  Clock,
  Star,
  ArrowRight,
  Target,
  Zap,
  Shield
} from 'lucide-react';
import Link from 'next/link';

export default function ClinicalSkillsPage() {
  const skills = [
    {
      icon: Stethoscope,
      title: "Cardiovascular Assessment",
      description: "Master heart and blood vessel examination techniques",
      level: "Intermediate",
      duration: "4 weeks",
      color: "from-red-500 to-red-600",
      features: ["Heart sounds", "Pulse assessment", "Blood pressure", "ECG interpretation"]
    },
    {
      icon: Brain,
      title: "Neurological Examination",
      description: "Comprehensive nervous system assessment protocols",
      level: "Advanced",
      duration: "6 weeks",
      color: "from-blue-500 to-blue-600",
      features: ["Cranial nerves", "Reflexes", "Motor function", "Sensory testing"]
    },
    {
      icon: Activity,
      title: "Musculoskeletal Assessment",
      description: "Joint and muscle evaluation techniques",
      level: "Beginner",
      duration: "3 weeks",
      color: "from-green-500 to-green-600",
      features: ["Range of motion", "Manual muscle testing", "Joint stability", "Pain assessment"]
    },
    {
      icon: Eye,
      title: "Visual Assessment",
      description: "Eye and vision examination methods",
      level: "Intermediate",
      duration: "2 weeks",
      color: "from-purple-500 to-purple-600",
      features: ["Visual acuity", "Eye movements", "Pupil response", "Visual fields"]
    },
    {
      icon: Hand,
      title: "Manual Therapy Techniques",
      description: "Hands-on treatment and manipulation skills",
      level: "Advanced",
      duration: "8 weeks",
      color: "from-orange-500 to-orange-600",
      features: ["Massage techniques", "Joint mobilization", "Soft tissue work", "Trigger point therapy"]
    },
    {
      icon: Heart,
      title: "Respiratory Assessment",
      description: "Lung and breathing evaluation methods",
      level: "Intermediate",
      duration: "3 weeks",
      color: "from-cyan-500 to-cyan-600",
      features: ["Breath sounds", "Chest expansion", "Respiratory rate", "Oxygen saturation"]
    }
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
          
          <ResponsiveContainer className="relative py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Clinical Skills Training
              </h1>
              
              <ResponsiveText size="lg" className="text-blue-100 max-w-3xl mx-auto">
                Master essential clinical assessment and treatment techniques through hands-on learning modules
              </ResponsiveText>
              
              {/* Medical Disclaimer */}
              <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-3 sm:p-4 mt-4 mx-4">
                <ResponsiveText size="sm" className="text-amber-100 text-center">
                  <strong>Medical Disclaimer:</strong> This content is for educational purposes only. 
                  It is not a substitute for professional medical training or clinical supervision.
                </ResponsiveText>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Skills Grid */}
        <section className="py-12 sm:py-16 md:py-20">
          <ResponsiveContainer>
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Clinical Skills Modules
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Essential Assessment Techniques
              </h2>
              <ResponsiveText size="lg" className="text-muted-foreground max-w-3xl mx-auto">
                Learn from structured modules designed by experienced healthcare professionals
              </ResponsiveText>
            </div>
            
            <ResponsiveGrid cols={{ xs: 1, sm: 2, lg: 3 }} className="gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`bg-gradient-to-r ${skill.color} text-white border-0 px-3 py-1 text-xs font-medium`}>
                        {skill.level}
                      </Badge>
                      <Badge variant="secondary" className="px-2 py-1 text-xs">
                        {skill.duration}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white`}>
                        <skill.icon className="h-6 w-6" />
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.8</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {skill.title}
                    </CardTitle>
                    
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Key Topics:</h4>
                      <ul className="space-y-1">
                        {skill.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{skill.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Interactive</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 group-hover:shadow-lg transition-all duration-300" asChild>
                      <Link href="/courses">
                        <Play className="mr-2 h-4 w-4" />
                        Start Module
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </ResponsiveGrid>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <ResponsiveContainer>
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
                Ready to Master Clinical Skills?
              </h2>
              <ResponsiveText size="lg" className="text-muted-foreground max-w-2xl mx-auto">
                Join thousands of healthcare students who have improved their clinical skills with our structured learning modules
              </ResponsiveText>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/courses">
                  <Button size="lg" className="btn-healthcare text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    Explore All Courses
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="btn-healthcare-outline text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                    Get Support
                  </Button>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
      
      <Footer />
    </>
  );
}