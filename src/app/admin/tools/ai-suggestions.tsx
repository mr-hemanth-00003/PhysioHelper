
'use client';

import { useActionState, useEffect, useTransition } from 'react';
import { useFormStatus } from 'react-dom';
import { handleEnhanceArticle, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const initialState: FormState = {
  message: '',
};

function EnhanceButton({ onClick, disabled }: { onClick: () => void, disabled: boolean}) {
  return (
    <Button type="button" onClick={onClick} disabled={disabled} size="lg" className="w-full">
      {disabled ? 'Enhancing...' : 'Enhance with AI'}
      <Wand2 className="ml-2 h-4 w-4" />
    </Button>
  );
}

interface AiSuggestionsProps {
    title: string;
    content: string;
    onSuggestion: (suggestions: { suggestedTitle?: string, suggestedContent?: string}) => void;
    showForm?: boolean;
    onTitleChange?: (title: string) => void;
    onContentChange?: (content: string) => void;
}

export function AiSuggestions({ title, content, onSuggestion, showForm = false, onTitleChange, onContentChange }: AiSuggestionsProps) {
  const [state, setState] = useActionState(handleEnhanceArticle, initialState);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.message.includes('success') ? 'Success!' : 'Uh oh!',
        description: state.message,
        variant: state.errors || state.message.includes('error') ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);

  const handleEnhanceClick = () => {
    startTransition(async () => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        setState(formData);
    })
  }

  const handleCopyToTitle = () => {
    if (state.suggestedTitle) {
      onSuggestion({ suggestedTitle: state.suggestedTitle });
      toast({ title: 'Success!', description: 'Suggested title copied.' });
    }
  }

  const handleCopyToContent = () => {
    if (state.suggestedContent) {
      onSuggestion({ suggestedContent: state.suggestedContent });
      toast({ title: 'Success!', description: 'Suggested content copied.' });
    }
  }

  const formContent = (
      <div className="space-y-6">
        <div className="space-y-2">
            <Label htmlFor="ai-title" className="font-semibold">Title</Label>
            <Input
            id="ai-title"
            name="title"
            value={title}
            onChange={(e) => onTitleChange?.(e.target.value)}
            placeholder="Enter your article title"
            />
            {state.errors?.title && <p className="text-sm font-medium text-destructive">{state.errors.title[0]}</p>}
        </div>
        <div className="space-y-2">
            <Label htmlFor="ai-content" className="font-semibold">Content</Label>
            <Textarea
            id="ai-content"
            name="content"
            value={content}
            onChange={(e) => onContentChange?.(e.target.value)}
            placeholder="Paste your article content here"
            rows={15}
            />
            {state.errors?.content && <p className="text-sm font-medium text-destructive">{state.errors.content[0]}</p>}
        </div>
        <EnhanceButton onClick={handleEnhanceClick} disabled={isPending} />
    </div>
  )

  const suggestionsContent = (
     <div className="space-y-6">
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
    </div>
  )

  if (showForm) {
      return (
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
                    {formContent}
                </CardContent>
            </Card>
            <div className="lg:sticky top-24">
                <Card className="border-primary/50">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">AI Suggestions</CardTitle>
                    <CardDescription>Here are the AI-powered improvements for your article.</CardDescription>
                </CardHeader>
                <CardContent>
                    {suggestionsContent}
                </CardContent>
                </Card>
            </div>
        </div>
      )
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-primary" />
                AI Content Tools
            </CardTitle>
            <CardDescription>Enhance your article with AI suggestions.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                <EnhanceButton onClick={handleEnhanceClick} disabled={isPending} />
                <div className="pt-6">
                    {suggestionsContent}
                </div>
            </div>
        </CardContent>
    </Card>
  )
}
