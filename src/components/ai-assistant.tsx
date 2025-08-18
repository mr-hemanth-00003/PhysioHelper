
'use client';

import { useState } from 'react';
import { Bot, X } from 'lucide-react';
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
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute bottom-[calc(100%+1rem)] right-0"
            >
              <Card className="w-[380px] h-[500px] shadow-2xl rounded-2xl flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="font-headline text-lg">
                        AI Assistant
                      </CardTitle>
                      <CardDescription>
                        Ask me anything about physiotherapy!
                      </CardDescription>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setIsOpen(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 overflow-y-auto p-0">
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
              className="h-16 w-16 rounded-full shadow-2xl"
              onClick={() => setIsOpen(prev => !prev)}
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {isOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Bot className="h-8 w-8" />
                  )}
                </motion.div>
              </AnimatePresence>
              <span className="sr-only">Toggle AI Assistant</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>AI Assistant</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
