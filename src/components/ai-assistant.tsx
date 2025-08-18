
'use client';

import { Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function AiAssistant() {
    // This is a placeholder for now. 
    // We can add functionality later to open a chat modal.
    const handleClick = () => {
        alert("AI Assistant coming soon!");
    }

  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button 
                    size="icon" 
                    className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-2xl"
                    onClick={handleClick}
                >
                    <Bot className="h-7 w-7" />
                    <span className="sr-only">AI Assistant</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
                <p>AI Assistant</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
}
