
'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { createNewArticle } from './actions';
import { useToast } from '@/hooks/use-toast';
import { SubmitButton } from './submit-button';
import { AiSuggestions } from '@/app/admin/tools/ai-suggestions';

const initialState = {
    message: "",
    errors: null,
}

export default function NewArticlePage() {
  const [state, formAction] = useFormState(createNewArticle, initialState);
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  useEffect(() => {
      if (state.message) {
          toast({
              title: state.errors ? "Uh oh!" : "Success!",
              description: state.message,
              variant: state.errors ? "destructive" : "default"
          });
      }
  }, [state, toast]);


  return (
    <form action={formAction}>
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
            <h1 className="text-3xl font-bold">New Article</h1>
            <p className="text-muted-foreground">
            Fill out the form below to create a new blog post.
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
        <div className='lg:col-span-2 space-y-8'>
            <Card>
                <CardContent className="pt-6">
                <div className="space-y-6">
                    <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" name="title" placeholder="Enter the article title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                        id="excerpt"
                        name="excerpt"
                        placeholder="A short summary of the article"
                        rows={3}
                    />
                    {state.errors?.excerpt && <p className="text-sm font-medium text-destructive">{state.errors.excerpt[0]}</p>}
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                        id="content"
                        name="content"
                        placeholder="Write your article content here..."
                        rows={15}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="image-url">Image URL</Label>
                        <Input name="imageUrl" id="image-url" placeholder="https://placehold.co/600x400.png" />
                        {state.errors?.imageUrl && <p className="text-sm font-medium text-destructive">{state.errors.imageUrl[0]}</p>}
                    </div>
                </div>
                </CardContent>
            </Card>
        </div>
        <div className='lg:sticky top-24'>
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
