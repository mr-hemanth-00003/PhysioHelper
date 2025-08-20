
import { getArticle, incrementArticleViews } from '@/services/articles';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Calendar, Clock, User, TrendingUp, BookOpen, Share2 } from 'lucide-react';
import { Article } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  if (!id) {
    notFound();
  }

  const article = await getArticle(id);
  
  if (!article) {
    notFound();
  }

  // Increment views
  await incrementArticleViews(id);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Professional Top Bar */}
      <div className="bg-muted/30 border-b border-border/50">
        <div className="container max-w-7xl py-2">
          <p className="text-center text-sm text-muted-foreground">
            This content is intended for healthcare professionals and wellness practitioners
          </p>
        </div>
      </div>

      <main className="container max-w-7xl py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-primary transition-colors">Articles</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{article.title}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Article Header */}
            <div className="space-y-6">
              {/* Category Badge */}
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1">
                  {article.featured ? 'Featured Article' : 'Professional Guide'}
                </Badge>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">
                  {new Date(article.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground">
                {article.title}
              </h1>

              {/* Article Meta */}
              <div className="flex items-center justify-between py-4 border-y border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={article.author.avatarUrl} alt={article.author.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold">
                        {article.author.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{article.author.name}</p>
                      <p className="text-sm text-muted-foreground">Healthcare Professional</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>{article.views || 0} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                data-ai-hint={article.imageHint}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              
              {/* Image Overlay Info */}
              <div className="absolute bottom-4 left-4 glass rounded-xl p-3">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Featured Image</div>
                <div className="text-sm font-medium text-foreground">Professional Healthcare Content</div>
              </div>
            </div>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
              {/* Excerpt */}
              <div className="bg-muted/30 border-l-4 border-primary p-6 rounded-r-xl mb-8">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "{article.excerpt}"
                </p>
              </div>

              {/* Main Content */}
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                {article.content}
              </ReactMarkdown>
            </article>

            {/* Article Footer */}
            <div className="border-t border-border/50 pt-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share Article
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <BookOpen className="h-4 w-4" />
                    Save to Library
                  </Button>
                </div>
                
                <Button asChild className="btn-enhanced">
                  <Link href="/articles">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Articles
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Author Profile Card */}
            <div className="bg-card/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-foreground">About the Author</h3>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-16 w-16 border-2 border-primary/20">
                  <AvatarImage src={article.author.avatarUrl} alt={article.author.name} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold text-lg">
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{article.author.name}</p>
                  <p className="text-sm text-muted-foreground">Healthcare Professional</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Experienced healthcare practitioner with expertise in physiotherapy and wellness. 
                Dedicated to providing practical guidance for better health outcomes.
              </p>
            </div>

            {/* Article Stats */}
            <div className="bg-card/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Article Insights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Reading Time</span>
                  <span className="font-semibold text-foreground">5 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Views</span>
                  <span className="font-semibold text-foreground">{article.views || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Published</span>
                  <span className="font-semibold text-foreground">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Related Topics */}
            <div className="bg-card/50 border border-border/50 rounded-2xl p-6 backdrop-blur-sm">
              <h3 className="font-semibold text-lg mb-4 text-foreground">Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Physiotherapy</Badge>
                <Badge variant="outline" className="text-xs">Wellness</Badge>
                <Badge variant="outline" className="text-xs">Injury Prevention</Badge>
                <Badge variant="outline" className="text-xs">Recovery</Badge>
                <Badge variant="outline" className="text-xs">Healthcare</Badge>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <p className="text-sm text-muted-foreground">
                  Get the latest healthcare insights and professional guidance delivered to your inbox.
                </p>
                <Button className="w-full btn-enhanced">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
