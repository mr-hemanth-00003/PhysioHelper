import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/lib/mock-data';
import { MoveRight } from 'lucide-react';

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link href="#" className="group">
      <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-card">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.imageHint}
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          </div>
        </CardHeader>
        <CardContent className="p-6 flex-grow flex flex-col">
          <Badge variant="secondary" className="mb-3 self-start">{article.category}</Badge>
          <CardTitle className="text-xl font-bold leading-snug font-headline group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
          <p className="mt-3 text-muted-foreground text-sm line-clamp-3 flex-grow">
            {article.excerpt}
          </p>
           <div className="flex items-center gap-2 mt-4 font-semibold text-primary text-sm">
            Read More <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-2 bg-card">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-background ring-1 ring-border">
              <AvatarImage src={article.author.avatarUrl} alt={article.author.name} />
              <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{article.author.name}</p>
              <p className="text-xs text-muted-foreground">{article.date}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
