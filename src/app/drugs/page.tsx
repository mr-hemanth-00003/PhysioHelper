'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Pill, 
  Search, 
  AlertTriangle, 
  Info, 
  BookOpen, 
  Heart, 
  Brain,
  Bone,
  Eye,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Filter,
  SortAsc,
  Download,
  Bookmark,
  Share2,
  ExternalLink
} from 'lucide-react';

export default function DrugsPage() {
  const drugCategories = [
    {
      title: "Analgesics",
      icon: Heart,
      description: "Pain relief medications including NSAIDs, opioids, and local anesthetics",
      drugCount: 45,
      color: "from-red-500 to-red-600",
      examples: ["Ibuprofen", "Paracetamol", "Morphine", "Lidocaine"]
    },
    {
      title: "Anti-inflammatory",
      icon: Zap,
      description: "Medications that reduce inflammation and swelling",
      drugCount: 32,
      color: "from-orange-500 to-orange-600",
      examples: ["Diclofenac", "Prednisolone", "Methylprednisolone", "Celecoxib"]
    },
    {
      title: "Muscle Relaxants",
      icon: Bone,
      description: "Drugs that relieve muscle spasms and tension",
      drugCount: 28,
      color: "from-blue-500 to-blue-600",
      examples: ["Baclofen", "Tizanidine", "Methocarbamol", "Cyclobenzaprine"]
    },
    {
      title: "Neurological",
      icon: Brain,
      description: "Medications affecting the nervous system and brain function",
      drugCount: 38,
      color: "from-purple-500 to-purple-600",
      examples: ["Gabapentin", "Pregabalin", "Amitriptyline", "Duloxetine"]
    },
    {
      title: "Cardiovascular",
      icon: Heart,
      description: "Heart and blood pressure medications",
      drugCount: 52,
      color: "from-pink-500 to-pink-600",
      examples: ["Amlodipine", "Lisinopril", "Metoprolol", "Atorvastatin"]
    },
    {
      title: "Respiratory",
      icon: Eye,
      description: "Medications for breathing and lung conditions",
      drugCount: 25,
      color: "from-green-500 to-green-600",
      examples: ["Salbutamol", "Ipratropium", "Budesonide", "Theophylline"]
    }
  ];

  const commonDrugs = [
    {
      name: "Ibuprofen",
      category: "Analgesic",
      class: "NSAID",
      dosage: "200-800mg every 4-6 hours",
      indications: ["Pain relief", "Fever reduction", "Inflammation"],
      contraindications: ["Peptic ulcer", "Kidney disease", "Pregnancy (3rd trimester)"],
      interactions: ["Warfarin", "Aspirin", "ACE inhibitors"],
      sideEffects: ["Stomach upset", "Dizziness", "Rash"],
      monitoring: ["Renal function", "Liver function", "Blood pressure"]
    },
    {
      name: "Paracetamol",
      category: "Analgesic",
      class: "Acetaminophen",
      dosage: "500-1000mg every 4-6 hours",
      indications: ["Pain relief", "Fever reduction"],
      contraindications: ["Liver disease", "Alcohol abuse"],
      interactions: ["Warfarin", "Alcohol", "Other paracetamol products"],
      sideEffects: ["Liver damage (overdose)", "Allergic reactions"],
      monitoring: ["Liver function", "Daily dose limit"]
    },
    {
      name: "Diclofenac",
      category: "Anti-inflammatory",
      class: "NSAID",
      dosage: "25-50mg 2-3 times daily",
      indications: ["Pain relief", "Inflammation", "Arthritis"],
      contraindications: ["Peptic ulcer", "Heart disease", "Kidney disease"],
      interactions: ["Warfarin", "Diuretics", "ACE inhibitors"],
      sideEffects: ["Stomach upset", "Dizziness", "Edema"],
      monitoring: ["Renal function", "Blood pressure", "Cardiac function"]
    }
  ];

  const drugInteractions = [
    {
      drug1: "Warfarin",
      drug2: "NSAIDs",
      severity: "High",
      effect: "Increased bleeding risk",
      mechanism: "NSAIDs inhibit platelet function and can cause gastric irritation",
      recommendation: "Avoid combination, monitor INR closely if necessary"
    },
    {
      drug1: "ACE Inhibitors",
      drug2: "NSAIDs",
      severity: "Moderate",
      effect: "Reduced blood pressure control",
      mechanism: "NSAIDs reduce the antihypertensive effect of ACE inhibitors",
      recommendation: "Monitor blood pressure, consider alternative pain relief"
    },
    {
      drug1: "Diuretics",
      drug2: "NSAIDs",
      severity: "Moderate",
      effect: "Reduced diuretic effectiveness",
      mechanism: "NSAIDs can cause fluid retention and reduce diuretic response",
      recommendation: "Monitor fluid status, consider alternative anti-inflammatory"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-600/10 py-20 md:py-32">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="animate-fade-in-up">
              <Badge className="bg-red-500/10 text-red-600 border-red-500/20 px-4 py-2 mb-6 animate-fade-in">
                <Pill className="h-4 w-4 mr-2" />
                Pharmacology
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6">
                Essential
                <span className="gradient-text block">Drug Knowledge</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
                Comprehensive guide to medications commonly encountered in physiotherapy practice. 
                Learn about drug interactions, side effects, and clinical implications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse Drug Database
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Download className="h-5 w-5 mr-2" />
                  Download Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 bg-white/50">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold font-headline mb-4">
                Search for
                <span className="gradient-text block">Medications</span>
              </h2>
              <p className="text-muted-foreground">
                Find detailed information about specific drugs, interactions, and practical guidelines.
              </p>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for drug names, classes, or conditions..."
                className="pl-12 pr-4 py-4 text-lg border-2 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 btn-healthcare">
                Search
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter by Category
              </Button>
              <Button variant="outline" size="sm" className="btn-healthcare-outline">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by Name
              </Button>
            </div>
          </div>
        </section>

        {/* Drug Categories */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Drug
                <span className="gradient-text block">Categories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore medications by therapeutic category and understand their clinical applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {drugCategories.map((category, index) => (
                <Card key={category.title} className="healthcare-card healthcare-card-hover animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.drugCount} drugs
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Common Examples:</p>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example) => (
                          <Badge key={example} variant="secondary" className="text-xs px-2 py-1">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full btn-healthcare">
                      <BookOpen className="h-4 w-4 mr-2" />
                      View All {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Drugs */}
        <section className="py-20 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Commonly Used
                <span className="gradient-text block">Medications</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Essential information about frequently prescribed drugs in physiotherapy practice.
              </p>
            </div>
            
            <div className="space-y-6">
              {commonDrugs.map((drug, index) => (
                <Card key={drug.name} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-headline flex items-center gap-3">
                          {drug.name}
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {drug.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {drug.class}
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          <strong>Dosage:</strong> {drug.dosage}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="btn-healthcare-outline">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="btn-healthcare-outline">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Info className="h-4 w-4 text-primary" />
                            Indications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {drug.indications.map((indication) => (
                              <Badge key={indication} variant="secondary" className="text-xs">
                                {indication}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-warning" />
                            Contraindications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {drug.contraindications.map((contraindication) => (
                              <Badge key={contraindication} variant="destructive" className="text-xs">
                                {contraindication}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Shield className="h-4 w-4 text-secondary" />
                            Drug Interactions
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {drug.interactions.map((interaction) => (
                              <Badge key={interaction} variant="outline" className="text-xs border-orange-200 text-orange-700">
                                {interaction}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-accent" />
                            Monitoring Required
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {drug.monitoring.map((monitor) => (
                              <Badge key={monitor} variant="outline" className="text-xs border-blue-200 text-blue-700">
                                {monitor}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="font-semibold text-foreground mb-2">Side Effects</h4>
                      <div className="flex flex-wrap gap-2">
                        {drug.sideEffects.map((effect) => (
                          <Badge key={effect} variant="secondary" className="text-xs">
                            {effect}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Drug Interactions */}
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                Important Drug
                <span className="gradient-text block">Interactions</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Understand potential drug interactions and their clinical implications for patient safety.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {drugInteractions.map((interaction, index) => (
                <Card key={`${interaction.drug1}-${interaction.drug2}`} className="healthcare-card animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                          <AlertTriangle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-headline">
                            {interaction.drug1} + {interaction.drug2}
                          </CardTitle>
                          <Badge className={`mt-1 ${
                            interaction.severity === 'High' ? 'bg-destructive/10 text-destructive border-destructive/20' :
                            interaction.severity === 'Moderate' ? 'bg-warning/10 text-warning border-warning/20' :
                            'bg-primary/10 text-primary border-primary/20'
                          }`}>
                            {interaction.severity} Risk
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Effect</h4>
                      <p className="text-sm text-muted-foreground">{interaction.effect}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Mechanism</h4>
                      <p className="text-sm text-muted-foreground">{interaction.mechanism}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recommendation</h4>
                      <p className="text-sm text-muted-foreground">{interaction.recommendation}</p>
                    </div>
                    
                    <Button className="w-full btn-healthcare-outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold font-headline mb-6">
                Stay Informed About
                <span className="gradient-text block">Medications</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Access our comprehensive drug database, stay updated on new medications, 
                and ensure patient safety through proper drug knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Access Full Database
                </Button>
                <Button variant="outline" size="lg" className="btn-healthcare-outline text-lg px-8 py-4">
                  <Users className="h-5 w-5 mr-2" />
                  Join Discussion
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
