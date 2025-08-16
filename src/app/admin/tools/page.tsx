
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleEnhanceArticle, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Wand2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState: FormState = {
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full">
      {pending ? 'Enhancing...' : 'Enhance with AI'}
      <Wand2 className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default function AiToolsPage() {
  const [state, formAction] = useFormState(handleEnhanceArticle, initialState);
  const { toast } = useToast();
  
  const [title, setTitle] = useState('10 Tips for a Stronger Back');
  const [content, setContent] = useState('Back pain is a common issue. Here are some tips to help you strengthen your back muscles and prevent future injuries. 1. Do regular stretching. 2. Focus on your posture. 3. Lift heavy objects correctly. A strong core is also very important.');

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message.includes('success') ? 'Success!' : 'Uh oh!',
        description: state.message,
        variant: state.errors || state.message.includes('error') ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);

  const handleCopyToTitle = () => {
    if (state.suggestedTitle) {
      setTitle(state.suggestedTitle);
      toast({ title: 'Success!', description: 'Suggested title copied.' });
    }
  }

  const handleCopyToContent = () => {
    if (state.suggestedContent) {
      setContent(state.suggestedContent);
      toast({ title: 'Success!', description: 'Suggested content copied.' });
    }
  }

  return (
     <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Content Tools</h1>
        <p className="text-muted-foreground">
          Leverage AI to improve your content and workflow.
        </p>
      </div>
        
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-primary" />
                Article Enhancer
            </CardTitle>
            <CardDescription>Enter a title and content to get AI-powered suggestions.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="font-semibold">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter your article title"
                />
                  {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="content" className="font-semibold">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Paste your article content here"
                  rows={15}
                />
                  {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        <div className="lg:sticky top-24">
            <Card className="border-primary/50">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">AI Suggestions</CardTitle>
                <CardDescription>Here are the AI-powered improvements for your article.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {state.suggestedTitle || state.suggestedContent ? (
                <>
                    <div className="space-y-2">
                    <Label className="font-semibold">Suggested Title</Label>
                    <div className="relative">
                        <Input readOnly value={state.suggestedTitle} className="pr-12 bg-muted"/>
                        <Button title="Copy to form" variant="ghost" size="icon" className="absolute right-1 top-1 h-8 w-8" onClick={handleCopyToTitle}>
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Copy title</span>
                        </Button>
                    </div>
                    </div>
                    <div className="space-y-2">
                    <Label className="font-semibold">Suggested Content</Label>
                    <div className="relative">
                        <Textarea readOnly value={state.suggestedContent} rows={15} className="pr-12 bg-muted"/>
                        <Button title="Copy to form" variant="ghost" size="icon" className="absolute right-2 top-2 h-8 w-8" onClick={handleCopyToContent}>
                        <ArrowRight className="h-4 w-4" />
                        <span className="sr-only">Copy content</span>
                        </Button>
                    </div>
                    </div>
                </>
                ) : (
                <div className="flex flex-col items-center justify-center text-center text-muted-foreground p-8 border-2 border-dashed rounded-lg min-h-[450px]">
                    <Wand2 className="h-12 w-12 mb-4 text-primary/50" />
                    <p className="font-medium">Your suggestions will appear here.</p>
                    <p className="text-sm">Enter your article and click "Enhance with AI".</p>
                </div>
                )}
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
