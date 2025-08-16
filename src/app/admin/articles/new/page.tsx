
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
import { categories } from '@/lib/types';
import Link from 'next/link';
import { useFormState } from 'react-dom';
import { createNewArticle } from './actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { SubmitButton } from './submit-button';

const initialState = {
    message: "",
    errors: null,
}

export default function NewArticlePage() {
  const [state, formAction] = useFormState(createNewArticle, initialState);
  const { toast } = useToast();

  useEffect(() => {
      if (state.message) {
          toast({
              title: state.message.includes("Success") ? "Success!" : "Uh oh!",
              description: state.message,
              variant: state.errors ? "destructive" : "default"
          });
      }
  }, [state, toast]);


  return (
    <form action={formAction} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">New Article</h1>
        <p className="text-muted-foreground">
          Fill out the form below to create a new blog post.
        </p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Enter the article title" />
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
              />
               {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select name="category">
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
                    <Input name="imageUrl" id="image-url" placeholder="https://placehold.co/600x400.png" />
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

