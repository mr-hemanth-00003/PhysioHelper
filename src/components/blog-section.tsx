
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog-card';
import type { Article } from '@/lib/types';

interface BlogSectionProps {
  allArticles: Article[];
  categories: string[];
}

export function BlogSection({ allArticles, categories }: BlogSectionProps) {
  const [filter, setFilter] = useState('All');

  const filteredArticles = allArticles.filter(
    (article) => filter === 'All' || article.category === filter
  );

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? 'default' : 'outline'}
            onClick={() => setFilter(category)}
            className="rounded-full px-6"
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
