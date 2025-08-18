'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { SendHorizonal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Skeleton } from './ui/skeleton';
import { cn } from '@/lib/utils';
import { chatWithAssistant } from '@/ai/flows/chat-flow';
import { type ChatWithAssistantInput } from '@/ai/flows/chat-flow.types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface Message {
  role: 'user' | 'model';
  content: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      <SendHorizonal className="h-5 w-5" />
      <span className="sr-only">Send message</span>
    </Button>
  );
}

export function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content:
        'Hello! I am your AI assistant from PhysioHelper. How can I help you today? Please remember, I cannot provide medical advice.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (formData: FormData) => {
    const userInput = formData.get('message') as string;
    if (!userInput.trim() || isLoading) return;

    setInput('');
    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: userInput },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const input: ChatWithAssistantInput = {
        history: newMessages,
      };
      const result = await chatWithAssistant(input);
      setMessages(prev => [...prev, { role: 'model', content: result.response }]);
    } catch (error) {
      console.error('Error with AI chat:', error);
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          content:
            "I'm sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={cn(
                'flex items-start gap-3',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'model' && (
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  'max-w-[80%] rounded-2xl p-3 text-sm',
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground rounded-br-none'
                    : 'bg-muted rounded-bl-none'
                )}
              >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm dark:prose-invert"
                >
                    {message.content}
                </ReactMarkdown>
              </div>
              {message.role === 'user' && (
                <Avatar className="h-8 w-8 border">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start">
              <Avatar className="h-8 w-8 border">
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="max-w-[80%] rounded-2xl p-3 text-sm bg-muted rounded-bl-none space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="border-t p-4">
        <form action={handleSendMessage} className="flex gap-2">
          <Input
            name="message"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isLoading}
            autoComplete="off"
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
