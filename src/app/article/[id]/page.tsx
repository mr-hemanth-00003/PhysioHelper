
import { getArticle } from '@/services/articles';
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
import { ArrowLeft } from 'lucide-react';

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <article className="container max-w-4xl py-12 md:py-20">
            <div className="mb-8">
                <Button variant="outline" asChild>
                    <Link href="/#articles">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Articles
                    </Link>
                </Button>
            </div>
          <div className="mx-auto space-y-6 text-center">
            <h1 className="text-4xl font-bold font-headline md:text-5xl">
              {article.title}
            </h1>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={article.author.avatarUrl} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{article.author.name}</p>
                  <p className="text-xs text-muted-foreground">{new Date(article.date).toLocaleDateString('en-US')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative my-8 h-96 w-full overflow-hidden rounded-2xl shadow-xl">
             <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              data-ai-hint={article.imageHint}
            />
          </div>
          
          <div className="prose prose-lg mx-auto max-w-full dark:prose-invert prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80">
             <p className="lead">{article.excerpt}</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
