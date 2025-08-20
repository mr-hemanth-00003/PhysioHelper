
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  Star, 
  Bookmark, 
  Share2,
  ArrowRight,
  GraduationCap,
  BookOpenCheck,
  Microscope,
  ClipboardList,
  Heart as HeartIcon
} from 'lucide-react';
import Link from 'next/link';
import { Article } from '@/lib/types';

interface BlogCardProps {
  article: Article;
  featured?: boolean;
  className?: string;
}

export function BlogCard({ article, featured = false, className = '' }: BlogCardProps) {
  const readingTime = Math.ceil((article.content?.length || 0) / 200); // Rough estimate: 200 words per minute
  const rating = 5; // Default rating since it's not in the Article type

  return (
    <Card className={`healthcare-card healthcare-card-hover group ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            {featured && (
              <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </Badge>
            )}
            <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
              <BookOpenCheck className="h-3 w-3 mr-1" />
              Learning Resource
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{new Date(article.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
        </div>
        
        <CardTitle className="text-xl font-headline leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {article.title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
          {article.excerpt}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Article Stats */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>{article.views || 0} views</span>
            </div>
          </div>
          
          {/* Star Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`h-4 w-4 ${
                  star <= rating
                    ? 'text-yellow-400 fill-current' 
                    : 'text-muted-foreground'
                }`} 
              />
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl">
          <Avatar className="w-12 h-12">
            <AvatarImage src={article.author.avatarUrl} alt={article.author.name} />
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-semibold">
              {article.author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="font-semibold text-foreground">{article.author.name}</div>
            <div className="text-sm text-muted-foreground">
              Physiotherapy Educator
            </div>
          </div>
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
            <GraduationCap className="h-3 w-3 mr-1" />
            Expert
          </Badge>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 btn-healthcare-outline"
            asChild
          >
            <Link href={`/article/${article.id}`}>
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
          
          <Button 
            size="sm" 
            variant="ghost" 
            className="text-muted-foreground hover:text-primary hover:bg-primary/10"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
