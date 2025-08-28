'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Bot, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Brain, 
  Stethoscope, 
  Heart, 
  Dumbbell,
  BookOpen,
  Users,
  Zap,
  Lightbulb,
  Target,
  Activity,
  Clock,
  Star
} from 'lucide-react';

export default function AIAssistantPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI Physiotherapy Assistant. I can help you with:\n\n• Clinical assessment guidance\n• Exercise protocol recommendations\n• Anatomy and physiology questions\n• Case study analysis\n• Study material explanations\n\nHow can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('assessment') || input.includes('evaluate')) {
      return 'For patient assessment, I recommend following the SOAP framework:\n\n• Subjective: Patient history and symptoms\n• Objective: Physical examination findings\n• Assessment: Clinical impression and diagnosis\n• Plan: Treatment goals and interventions\n\nWould you like me to elaborate on any specific component?';
    }
    
    if (input.includes('exercise') || input.includes('rehabilitation')) {
      return 'Exercise prescription should follow the FITT principle:\n\n• Frequency: How often (e.g., 3x/week)\n• Intensity: How hard (e.g., moderate effort)\n• Time: How long (e.g., 30 minutes)\n• Type: What kind (e.g., strengthening, flexibility)\n\nWhat type of exercise are you looking for?';
    }
    
    if (input.includes('anatomy') || input.includes('physiology')) {
      return 'I can help explain anatomical structures and physiological processes. For example:\n\n• Musculoskeletal system: Bones, muscles, joints\n• Nervous system: Brain, spinal cord, nerves\n• Cardiovascular system: Heart, blood vessels\n\nWhat specific area would you like to learn about?';
    }
    
    if (input.includes('case study') || input.includes('patient')) {
      return 'Case studies are excellent learning tools! I can help you analyze:\n\n• Patient presentation and history\n• Clinical findings and assessment\n• Differential diagnosis\n• Treatment planning\n• Outcome evaluation\n\nDo you have a specific case you\'d like to discuss?';
    }
    
    return 'Thank you for your question! I\'m here to help with your physiotherapy studies. I can assist with clinical assessments, exercise protocols, anatomy questions, case studies, and more. Feel free to ask anything specific!';
  };

  const features = [
    {
      icon: Brain,
      title: 'Clinical Assessment',
      description: 'Get guidance on patient evaluation techniques and assessment protocols',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Dumbbell,
      title: 'Exercise Protocols',
      description: 'Access evidence-based exercise recommendations and rehabilitation programs',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Anatomy Support',
      description: 'Learn about human anatomy and physiology with interactive explanations',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BookOpen,
      title: 'Case Studies',
      description: 'Analyze real patient cases and clinical scenarios',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="responsive-container py-8 sm:py-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                AI Physiotherapy Assistant
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Your intelligent study companion for physiotherapy education. Get instant answers, 
                clinical guidance, and personalized learning support.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="responsive-container py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Chat Interface */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Bot className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">AI Chat Assistant</CardTitle>
                  <Sparkles className="h-5 w-5 text-yellow-500" />
                </div>
                <CardDescription>
                  Ask me anything about physiotherapy, clinical practice, or your studies
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <div className="whitespace-pre-line text-sm">{message.content}</div>
                        <div className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-muted text-foreground px-4 py-3 rounded-2xl">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me about physiotherapy..."
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage} 
                      disabled={!inputMessage.trim() || isLoading}
                      className="px-6"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="responsive-container py-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose AI Assistant?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get instant access to physiotherapy knowledge, clinical guidance, and study support
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Answers</h3>
              <p className="text-sm text-muted-foreground">Get immediate responses to your questions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Learning</h3>
              <p className="text-sm text-muted-foreground">AI-powered explanations and examples</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized</h3>
              <p className="text-sm text-muted-foreground">Tailored to your learning needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Available</h3>
              <p className="text-sm text-muted-foreground">Study support whenever you need it</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
