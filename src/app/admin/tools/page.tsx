
'use client';

import { useState } from 'react';
import { AiSuggestions } from './ai-suggestions';

export default function AiToolsPage() {
  const [title, setTitle] = useState('10 Tips for a Stronger Back');
  const [content, setContent] = useState('Back pain is a common issue. Here are some tips to help you strengthen your back muscles and prevent future injuries. 1. Do regular stretching. 2. Focus on your posture. 3. Lift heavy objects correctly. A strong core is also very important.');

  return (
     <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Content Tools</h1>
        <p className="text-muted-foreground">
          Leverage AI to improve your content and workflow.
        </p>
      </div>
        
       <AiSuggestions 
          title={title}
          content={content}
          onSuggestion={({suggestedTitle, suggestedContent}) => {
              if (suggestedTitle) setTitle(suggestedTitle);
              if (suggestedContent) setContent(suggestedContent);
          }}
          showForm={true}
          onTitleChange={setTitle}
          onContentChange={setContent}
        />
    </div>
  );
}
