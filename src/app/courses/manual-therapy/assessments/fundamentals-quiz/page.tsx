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
  Hand, ArrowLeft, Save, Eye, CheckCircle2 as CheckCircleIcon
} from 'lucide-react';

export default function FundamentalsQuizPage() {
  const questions = [
    {
      id: 1,
      question: "Which of the following is NOT a basic principle of manual therapy?",
      options: [
        "Patient safety and comfort",
        "Evidence-based practice",
        "Aggressive manipulation without assessment",
        "Individualized treatment approach"
      ],
      correctAnswer: 2,
      explanation: "Aggressive manipulation without proper assessment violates the fundamental principle of patient safety."
    },
    {
      id: 2,
      question: "What is the primary purpose of red flag screening in manual therapy?",
      options: [
        "To increase treatment costs",
        "To identify serious pathology requiring medical attention",
        "To prolong treatment sessions",
        "To reduce patient satisfaction"
      ],
      correctAnswer: 1,
      explanation: "Red flag screening is essential to identify signs and symptoms that may indicate serious underlying pathology."
    },
    {
      id: 3,
      question: "Which of the following is an absolute contraindication for manual therapy?",
      options: [
        "Mild muscle soreness",
        "Recent fracture",
        "Minor joint stiffness",
        "Muscle tightness"
      ],
      correctAnswer: 1,
      explanation: "Recent fractures are an absolute contraindication for manual therapy as they can cause further damage."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 sm:py-20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Link href="/courses/manual-therapy/assessments">
              <Button variant="outline" size="sm" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Assessments
              </Button>
            </Link>
            
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
              Quiz Assessment
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl font-headline font-bold">
              Manual Therapy Fundamentals Quiz
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your understanding of basic manual therapy principles, safety protocols, 
              and professional standards. This quiz contains 3 sample questions.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
              <h3 className="font-semibold text-blue-800 mb-3">Quiz Details</h3>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex justify-between">
                  <span>Questions:</span>
                  <span>3</span>
                </div>
                <div className="flex justify-between">
                  <span>Time Limit:</span>
                  <span>10 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Passing Score:</span>
                  <span>70%</span>
                </div>
                <div className="flex justify-between">
                  <span>Attempts:</span>
                  <span>3</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Start Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="text-sm text-muted-foreground">
                <p>This is a sample assessment page. In a full implementation,</p>
                <p>students would be able to take the actual quiz with working navigation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
