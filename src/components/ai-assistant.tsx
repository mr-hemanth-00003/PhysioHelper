
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
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute bottom-[calc(100%+1rem)] right-0"
            >
              <Card className="w-[320px] sm:w-[380px] md:w-[420px] h-[500px] sm:h-[550px] md:h-[600px] shadow-2xl rounded-3xl flex flex-col glass border-border/50 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border/20 p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-enhanced">
                        <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="font-headline text-lg sm:text-xl text-foreground">
                          Physio Assistant
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-xs sm:text-sm">
                          AI-powered physiotherapy guidance
                        </CardDescription>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                      className="hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 h-8 w-8 sm:h-10 sm:w-10"
                    >
                      <X className="h-4 w-4 sm:h-5 sm:w-5" />
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
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full shadow-2xl relative overflow-hidden group transition-all duration-500 hover:scale-110"
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
                    <X className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-foreground" />
                  ) : (
                    <div className="relative">
                      <Image 
                        src="/favicon.ico" 
                        alt="AI Assistant"
                        width={24}
                        height={24}
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain"
                      />
                      <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full animate-pulse"></div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="bg-foreground text-background text-xs sm:text-sm">
            <p>Ask me anything about physiotherapy!</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
