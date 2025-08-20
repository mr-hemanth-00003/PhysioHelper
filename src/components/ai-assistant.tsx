
'use client';

import { useState } from 'react';
import { Bot, X, Sparkles, Brain } from 'lucide-react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from './ui/card';
import { AiChat } from './ai-chat';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-[calc(100%+1rem)] right-0"
            >
              <Card className="w-[420px] h-[600px] shadow-2xl rounded-3xl flex flex-col glass border-border/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-enhanced">
                        <Brain className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-xl text-foreground">
                          Physio Assistant
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          AI-powered physiotherapy guidance
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-0 bg-card/50">
                  <AiChat />
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-16 w-16 rounded-full shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-110"
              onClick={() => setIsOpen(prev => !prev)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary-light opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin"></div>
              
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="relative z-10"
                >
                  {isOpen ? (
                    <X className="h-8 w-8 text-primary-foreground" />
                  ) : (
                    <div className="relative">
                      <Image 
                        src="/favicon.ico" 
                        alt="Physio Assistant" 
                        width="32" 
                        height="32"
                        className="filter brightness-0 invert"
                      />
                      {/* AI Status Indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-primary-foreground"></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              <span className="sr-only">Toggle AI Assistant</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="glass border-border/50">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="font-medium">Physio Assistant</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
