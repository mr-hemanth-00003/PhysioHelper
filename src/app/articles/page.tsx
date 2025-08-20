
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BlogSection } from '@/components/blog-section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Eye,
  Heart,
  Calendar,
  Globe,
  Zap,
  CheckCircle,
  GraduationCap,
  BookOpenCheck,
  Microscope,
  ClipboardList
} from 'lucide-react';
import { getArticles } from '@/services/articles';
import Link from 'next/link';

export default async function ArticlesPage() {
  const articles = await getArticles();

  const categories = [
    { name: 'Clinical Skills', count: articles.filter(a => a.title.toLowerCase().includes('clinical') || a.title.toLowerCase().includes('skills')).length, color: 'from-blue-500 to-blue-600' },

    { name: 'Assessment Techniques', count: articles.filter(a => a.title.toLowerCase().includes('assessment') || a.title.toLowerCase().includes('evaluation')).length, color: 'from-green-500 to-green-600' },
    { name: 'Treatment Protocols', count: articles.filter(a => a.title.toLowerCase().includes('treatment') || a.title.toLowerCase().includes('protocol')).length, color: 'from-orange-500 to-orange-600' },
    { name: 'Anatomy & Physiology', count: articles.filter(a => a.title.toLowerCase().includes('anatomy') || a.title.toLowerCase().includes('physiology')).length, color: 'from-red-500 to-red-600' },
    { name: 'Exam Preparation', count: articles.filter(a => a.title.toLowerCase().includes('exam') || a.title.toLowerCase().includes('preparation')).length, color: 'from-indigo-500 to-indigo-600' }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const latestArticles = articles.slice(0, 6);
  const popularArticles = articles.sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 3);

  const stats = [
    { number: articles.length.toString(), label: 'Learning Resources', icon: BookOpen },
    { number: featuredArticles.length.toString(), label: 'Featured Content', icon: Star },
            { number: 'Advanced', label: 'Clinical Practice', icon: Users },

  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
        <div className="relative container max-w-7xl mx-auto px-4 py-20 lg:py-24">
          <div className="text-center space-y-8 animate-fade-in-up">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium">
              <BookOpen className="h-4 w-4 mr-2" />
              Student Learning Hub
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-headline font-bold leading-tight">
              Comprehensive Learning
              <span className="gradient-text block">Resources</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Access practical articles, clinical case studies, practical skills guides, 
              and exam preparation materials designed specifically for physiotherapy students.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-healthcare text-lg px-8 py-4">
                <Search className="mr-2 h-5 w-5" />
                Search Resources
              </Button>
              <Button size="lg" variant="outline" className="btn-healthcare-outline text-lg px-8 py-4">
                <Filter className="mr-2 h-5 w-5" />
                Browse Categories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-headline font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in-up">
              <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 text-sm font-medium mb-4">
                <Star className="h-4 w-4 mr-2" />
                Featured Learning Content
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
                Essential Study Materials
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our most valuable learning resources, carefully selected by physiotherapy educators and professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.slice(0, 2).map((article, index) => (
                <div 
                  key={article.id} 
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20 hover:border-primary/30 transition-colors duration-300">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-headline font-bold leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>By {article.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>5 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="h-4 w-4" />
                          <span>{article.views || 0} views</span>
                        </div>
                      </div>
                      
                      <Button asChild className="btn-healthcare">
                        <Link href={`/article/${article.id}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-medium mb-4">
              <Filter className="h-4 w-4 mr-2" />
              Browse by Topic
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
              Explore Learning Topics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find resources organized by physiotherapy topics to quickly access the information you need for your studies.
              </p>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div 
                key={category.name} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.count} resources available
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="btn-healthcare-outline"
                      >
                        Explore
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
                ))}
            </div>
          </div>
        </section>

      {/* Latest Articles */}
      <section className="py-20 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="bg-success/10 text-success border-success/20 px-4 py-2 text-sm font-medium mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Fresh Learning Content
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
              Latest Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay up-to-date with the most recent learning materials and clinical insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <div 
                key={article.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                        New
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-foreground leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>{article.author.name}</span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="btn-healthcare-outline"
                        asChild
                      >
                        <Link href={`/article/${article.id}`}>
                          Read
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in-up">
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-healthcare-outline text-lg px-8 py-4"
            >
              View All Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-headline font-bold">
                Stay Informed with
                <span className="gradient-text block">Latest Learning Updates</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get the latest case studies, practical guides, exam prep materials, 
                and study tips delivered directly to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your student email"
                className="flex-1 px-4 py-3 bg-white/80 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
              />
              <Button className="btn-healthcare whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Weekly updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Student-focused content</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
