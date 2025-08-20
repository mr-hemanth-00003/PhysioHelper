
"use client";

import { BlogCard } from './blog-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Article } from '@/lib/types';
import { 
  BookOpen, 
  ArrowRight, 
  TrendingUp,
  Star,
  Clock,
  Users
} from 'lucide-react';

interface BlogSectionProps {
  articles: Article[];
  title?: string;
  subtitle?: string;
  featured?: boolean;
  limit?: number;
  showViewAll?: boolean;
  className?: string;
}

export function BlogSection({ 
  articles, 
  title = "Latest Articles", 
  subtitle = "Stay informed with our latest healthcare insights and expert guidance",
  featured = false,
  limit,
  showViewAll = true,
  className = ""
}: BlogSectionProps) {
  const displayArticles = limit ? articles.slice(0, limit) : articles;
  const featuredArticles = featured ? displayArticles.filter(article => article.featured) : displayArticles;

  if (articles.length === 0) {
    return (
      <section className={`py-16 ${className}`}>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
              <BookOpen className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-headline font-bold text-foreground">
                No Articles Yet
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                We're working on bringing you the latest healthcare insights. 
                Check back soon for expert articles and professional guidance.
              </p>
            </div>
            <Button className="btn-healthcare">
              <TrendingUp className="mr-2 h-4 w-4" />
              Explore Resources
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 ${className}`}>
      <div className="container max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4 mr-2" />
            Healthcare Insights
          </Badge>
          
          <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Featured Article (if applicable) */}
        {featured && featuredArticles.length > 0 && (
          <div className="mb-12 animate-fade-in-up">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                      <Star className="h-3 w-3 mr-1" />
                      Featured Article
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {new Date(featuredArticles[0].date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-headline font-bold leading-tight">
                    {featuredArticles[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {featuredArticles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>By {featuredArticles[0].author.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  
                  <Button className="btn-healthcare">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={featuredArticles[0].imageUrl}
                      alt={featuredArticles[0].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">
                        {featuredArticles[0].views || 0}
                      </div>
                      <div className="text-xs text-muted-foreground">views</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard 
                article={article} 
                featured={article.featured}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && articles.length > (limit || 0) && (
          <div className="text-center mt-12 animate-fade-in-up">
            <Button 
              variant="outline" 
              size="lg" 
              className="btn-healthcare-outline text-lg px-8 py-4"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
