
'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { categories, Article } from '@/lib/types';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useRouter, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getArticle } from '@/services/articles';
import { Skeleton } from '@/components/ui/skeleton';
import { useFormState } from 'react-dom';
import { updateExistingArticle } from './actions';
import { SubmitButton } from './submit-button';

const initialState = {
    message: "",
    errors: null,
}

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  
  const updateArticleWithId = updateExistingArticle.bind(null, params.id);
  const [state, formAction] = useFormState(updateArticleWithId, initialState);

  useEffect(() => {
      const fetchArticle = async () => {
          setLoading(true);
          const fetchedArticle = await getArticle(params.id);
          if (fetchedArticle) {
              setArticle(fetchedArticle);
          } else {
              notFound();
          }
          setLoading(false);
      }
      fetchArticle();
  }, [params.id])

  useEffect(() => {
    if (state.message) {
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
    <form action={formAction} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Article</h1>
        <p className="text-muted-foreground">
          Make changes to your existing blog post.
        </p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" defaultValue={article.title} />
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
                defaultValue={article.content}
                rows={15}
              />
              {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category" defaultValue={article.category}>
                    <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                    {categories.filter(c => c !== "All").map((category) => (
                        <SelectItem key={category} value={category}>
                        {category}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                {state.errors?.category && <p className="text-sm font-medium text-destructive">{state.errors.category[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image-url">Image URL</Label>
                    <Input id="image-url" name="imageUrl" defaultValue={article.imageUrl} />
                    {state.errors?.imageUrl && <p className="text-sm font-medium text-destructive">{state.errors.imageUrl[0]}</p>}
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link href="/admin/articles">Cancel</Link>
        </Button>
        <SubmitButton />
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
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-10 w-full" />
                        </div>
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

