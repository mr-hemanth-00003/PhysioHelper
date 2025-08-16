
'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { getArticles } from '@/services/articles';
import type { Article } from '@/lib/types';
import Link from 'next/link';
import { FileText, Search } from 'lucide-react';

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState('');
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      async function fetchArticles() {
        setLoading(true);
        const articles = await getArticles();
        setAllArticles(articles);
        setLoading(false);
      }
      fetchArticles();
    }
  }, [open]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = allArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerCaseQuery) ||
          article.content.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles([]);
    }
  }, [query, allArticles]);

  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setQuery('');
    }
    onOpenChange(isOpen);
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <div className="flex flex-col gap-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                    placeholder="Search articles..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                />
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
            {loading && (
                <div className="text-center text-muted-foreground p-4">Loading articles...</div>
            )}
            {!loading && query && filteredArticles.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                    <p className="font-semibold">No results found for "{query}"</p>
                    <p className="text-sm">Try searching for something else.</p>
                </div>
            )}
            {!loading && !query && (
                <div className="text-center text-muted-foreground p-8">
                    <p className="font-semibold">Search the Blog</p>
                    <p className="text-sm">Find articles about physiotherapy, wellness, and more.</p>
                </div>
            )}
            {filteredArticles.length > 0 && (
              <div className="space-y-2 p-1">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/article/${article.id}`}
                    onClick={() => onOpenChange(false)}
                    className="block p-3 rounded-lg hover:bg-muted"
                  >
                    <div className="flex items-start gap-3">
                         <FileText className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                         <div>
                            <h4 className="font-semibold">{article.title}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {article.excerpt}
                            </p>
                        </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
