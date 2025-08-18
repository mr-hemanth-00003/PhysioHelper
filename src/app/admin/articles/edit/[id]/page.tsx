
'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Article } from '@/lib/types';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { notFound } from 'next/navigation';
import { useEffect, useState, useActionState } from 'react';
import { getArticle } from '@/services/articles';
import { Skeleton } from '@/components/ui/skeleton';
import { updateExistingArticle } from './actions';
import { SubmitButton } from './submit-button';
import { AiSuggestions } from '@/app/admin/tools/ai-suggestions';

const initialState = {
    message: "",
    errors: null,
}

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const id = params.id;
  const { toast } = useToast();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  
  const updateArticleWithId = updateExistingArticle.bind(null, id);
  const [state, formAction] = useActionState(updateArticleWithId, initialState);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
      const fetchArticle = async () => {
          setLoading(true);
          const fetchedArticle = await getArticle(id);
          if (fetchedArticle) {
              setArticle(fetchedArticle);
              setTitle(fetchedArticle.title);
              setContent(fetchedArticle.content);
          } else {
              notFound();
          }
          setLoading(false);
      }
      fetchArticle();
  }, [id])

  useEffect(() => {
    if (state.message && (state.message.includes('Success') || state.errors)) {
      toast({
        title: state.message.includes('Success') ? 'Success!' : 'Uh oh!',
        description: state.message,
        variant: state.errors ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);
  
  if (loading) {
      return <EditArticleSkeleton />
  }

  if (!article) {
      return notFound();
  }


  return (
    <form action={formAction}>
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
            <h1 className="text-3xl font-bold">Edit Article</h1>
            <p className="text-muted-foreground">
              Make changes to your existing blog post.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
            <Link href="/admin/articles">Cancel</Link>
            </Button>
            <SubmitButton />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                  {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    defaultValue={article.excerpt}
                    rows={3}
                  />
                  {state.errors?.excerpt && <p className="text-sm font-medium text-destructive">{state.errors.excerpt[0]}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    name="content"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows={15}
                  />
                  {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image-url">Image URL</Label>
                    <Input id="image-url" name="imageUrl" defaultValue={article.imageUrl} />
                    {state.errors?.imageUrl && <p className="text-sm font-medium text-destructive">{state.errors.imageUrl[0]}</p>}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="lg:sticky top-24">
            <AiSuggestions 
                title={title}
                content={content}
                onSuggestion={({suggestedTitle, suggestedContent}) => {
                    if (suggestedTitle) setTitle(suggestedTitle);
                    if (suggestedContent) setContent(suggestedContent);
                }}
            />
        </div>
      </div>
    </form>
  );
}

function EditArticleSkeleton() {
    return (
        <div className="space-y-8">
            <div>
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
            <Card>
                <CardContent className="pt-6 space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-20 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-64 w-full" />
                    </div>
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </CardContent>
            </Card>
            <div className="flex justify-end gap-2">
                 <Skeleton className="h-10 w-24" />
                 <Skeleton className="h-10 w-32" />
            </div>
        </div>
    )
}
