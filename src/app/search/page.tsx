
'use client';

import { useState, useEffect } from 'react';
import { getArticles } from '@/services/articles';
import type { Article } from '@/lib/types';
import Link from 'next/link';
import { FileText, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Skeleton } from '@/components/ui/skeleton';

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
        <div className="container max-w-4xl py-12 md:py-20">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold font-headline">Search Articles</h1>
              <p className="text-lg text-muted-foreground mt-2">
                Find what you're looking for in our library of articles.
              </p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search by title or content..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
            <div className="space-y-6">
              {loading ? (
                Array.from({ length: 3 }).map((_, i) => <ArticleSkeleton key={i} />)
              ) : filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    className="block p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <FileText className="h-6 w-6 mt-1 flex-shrink-0 text-primary" />
                      <div>
                        <h2 className="text-xl font-bold font-headline">{article.title}</h2>
                        <p className="text-md text-muted-foreground mt-1 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center text-muted-foreground p-12 border-2 border-dashed rounded-2xl">
                  <p className="font-semibold text-lg">No results found</p>
                  <p>Try a different search term to find what you're looking for.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ArticleSkeleton() {
    return (
        <div className="p-6 rounded-2xl border bg-card flex items-start gap-4">
            <Skeleton className="h-6 w-6 mt-1" />
            <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-2/3" />
            </div>
        </div>
    )
}
