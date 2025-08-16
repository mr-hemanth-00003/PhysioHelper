
"use client";

import { useState } from 'react';
import { BlogCard } from '@/components/blog-card';
import type { Article } from '@/lib/types';

interface BlogSectionProps {
  allArticles: Article[];
}

export function BlogSection({ allArticles }: BlogSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {allArticles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
}
