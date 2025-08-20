
'use client';

import { useState, useEffect } from 'react';
import { getArticles } from '@/services/articles';
import type { Article } from '@/lib/types';
import Link from 'next/link';
import { Search, Filter, TrendingUp, Clock, Eye, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/header';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      setLoading(true);
      const articles = await getArticles();
      setAllArticles(articles);
      setFilteredArticles(articles); // Initially show all
      setLoading(false);
    }
    fetchArticles();
  }, []);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerCaseQuery) ||
          article.content.toLowerCase().includes(lowerCaseQuery) ||
          article.excerpt.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(allArticles);
    }
  }, [query, allArticles]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-secondary/20"></div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-ping"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary-light rounded-full animate-ping delay-700"></div>
          </div>

          <div className="container max-w-4xl relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                <Search className="h-4 w-4" />
                Smart Search
              </div>
              <h1 className="text-5xl md:text-6xl font-bold font-headline mb-6">
                <span className="gradient-text">Find</span> What You Need
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Search through our comprehensive library of physiotherapy articles, 
                wellness tips, and expert advice to find exactly what you're looking for.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative mb-16">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
              <Input
                placeholder="Search by title, content, or topic..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-16 pr-6 h-16 text-lg bg-card/50 border border-border/50 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50 rounded-2xl backdrop-blur-sm"
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">AI Enhanced</span>
              </div>
            </div>

            {/* Search Stats */}
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{filteredArticles.length}</div>
                <div className="text-sm text-muted-foreground">Results Found</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{allArticles.length}</div>
                <div className="text-sm text-muted-foreground">Total Articles</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-light">Real-time</div>
                <div className="text-sm text-muted-foreground">Search</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-background"></div>
          <div className="container max-w-6xl relative z-10">
            <div className="space-y-8">
              {loading ? (
                // Loading Skeletons
                Array.from({ length: 3 }).map((_, i) => <ArticleSkeleton key={i} />)
              ) : filteredArticles.length > 0 ? (
                // Search Results
                filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="block rounded-3xl border border-border/30 bg-card/50 text-card-foreground shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:border-primary/30 hover:bg-card/70"
                  >
                    <div className="flex items-start gap-6 p-8">
                      {/* Article Image */}
                      <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden">
                        <Image 
                          src={article.imageUrl} 
                          alt={article.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                          data-ai-hint={article.imageHint} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Featured Badge */}
                        {article.featured && (
                          <div className="absolute top-3 left-3 glass rounded-full px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                            Featured
                          </div>
                        )}
                      </div>
                      
                      {/* Article Content */}
                      <div className="flex-1 space-y-4">
                        <div>
                          <h2 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors duration-300 mb-3">
                            {article.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed line-clamp-3">
                            {article.excerpt}
                          </p>
                        </div>
                        
                        {/* Article Meta */}
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{article.author.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{new Date(article.date).toLocaleDateString('en-US')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4" />
                            <span>{article.views || 0} views</span>
                          </div>
                        </div>
                        
                        {/* Read More */}
                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:text-primary-light transition-colors duration-300">
                          <span>Read Full Article</span>
                          <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                // No Results
                <div className="text-center py-20">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-headline mb-4">No Results Found</h3>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Try adjusting your search terms or browse our categories to find what you're looking for.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/articles" 
                      className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:from-primary-light hover:to-primary transition-all duration-300 shadow-enhanced"
                    >
                      Browse All Articles
                    </Link>
                    <Link 
                      href="/resources" 
                      className="px-6 py-3 border border-primary/30 text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300"
                    >
                      Explore Resources
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ArticleSkeleton() {
  return (
    <div className="rounded-3xl border border-border/30 bg-card/50 flex items-start gap-6 p-8">
      <Skeleton className="h-48 w-48 md:h-56 md:w-56 rounded-2xl" />
      <div className="flex-1 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-2/3" />
        <div className="flex items-center gap-6">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}
