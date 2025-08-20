'use client';

import { useState, useRef, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { SendHorizonal, Bot, User, Sparkles } from 'lucide-react';
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
import { motion } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  content: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      size="icon" 
      disabled={pending}
      className="bg-gradient-to-r from-primary to-accent hover:from-primary-light hover:to-primary text-primary-foreground shadow-enhanced transition-all duration-300 hover:scale-105"
    >
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
        "Welcome! I'm your AI physiotherapy assistant. I'm here to provide helpful information about physiotherapy, exercises, wellness, and injury prevention. Remember, I'm not a doctor and cannot provide medical advice - always consult with qualified healthcare professionals for medical concerns.",
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
      <ScrollArea className="flex-1 p-6" ref={scrollAreaRef}>
        <div className="space-y-6">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={cn(
                'flex items-start gap-4',
                message.role === 'user' ? 'justify-end' : 'justify-start'
              )}
            >
              {message.role === 'model' && (
                <Avatar className="h-10 w-10 border-2 border-primary/20 ring-2 ring-primary/10">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
              
              <div
                className={cn(
                  'max-w-[80%] rounded-2xl p-4 text-sm relative',
                  message.role === 'user'
                    ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-br-none shadow-enhanced'
                    : 'bg-card/80 backdrop-blur-sm border border-border/50 rounded-bl-none'
                )}
              >
                {/* Message Content */}
                <div className="relative z-10">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm dark:prose-invert max-w-none"
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      ul: ({ children }) => <ul className="list-disc list-inside space-y-1">{children}</ul>,
                      ol: ({ children }) => <ol className="list-decimal list-inside space-y-1">{children}</ol>,
                      li: ({ children }) => <li className="text-sm">{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                      em: ({ children }) => <em className="italic">{children}</em>,
                      code: ({ children }) => (
                        <code className="bg-muted/50 px-2 py-1 rounded text-xs font-mono">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-muted/50 p-3 rounded-lg overflow-x-auto">
                          {children}
                        </pre>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
                
                {/* Message Decoration */}
                {message.role === 'model' && (
                  <div className="absolute top-2 right-2 opacity-20">
                    <Sparkles className="h-3 w-3 text-primary" />
                  </div>
                )}
              </div>
              
              {message.role === 'user' && (
                <Avatar className="h-10 w-10 border-2 border-primary/20 ring-2 ring-primary/10">
                  <AvatarFallback className="bg-gradient-to-br from-accent to-primary text-primary-foreground">
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              )}
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 justify-start"
            >
              <Avatar className="h-10 w-10 border-2 border-primary/20 ring-2 ring-primary/10">
                <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="max-w-[80%] rounded-2xl p-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-bl-none">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-primary-light rounded-full animate-bounce delay-200"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">AI is thinking...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>
      
      <div className="border-t border-border/20 p-6 bg-card/30">
        <form action={handleSendMessage} className="flex gap-3">
          <Input
            name="message"
            placeholder="Ask about physiotherapy, exercises, or wellness..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isLoading}
            autoComplete="off"
            className="flex-1 bg-card/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 placeholder:text-muted-foreground/50"
          />
          <SubmitButton />
        </form>
        
        {/* Chat Tips */}
        <div className="mt-3 text-xs text-muted-foreground text-center">
          💡 Try asking about: "back pain exercises" or "posture improvement tips"
        </div>
      </div>
    </div>
  );
}
