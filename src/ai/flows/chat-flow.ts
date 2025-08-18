'use server';
/**
 * @fileOverview A flow for a conversational AI physiotherapy assistant.
 *
 * - chatWithAssistant - A function that handles the conversation.
 */

import { ai } from '@/ai/genkit';
import {
  ChatWithAssistantInputSchema,
  ChatWithAssistantOutputSchema,
  type ChatWithAssistantInput,
  type ChatWithAssistantOutput,
} from './chat-flow.types';

export async function chatWithAssistant(
  input: ChatWithAssistantInput
): Promise<ChatWithAssistantOutput> {
  return chatAssistantFlow(input);
}

const chatPrompt = ai.definePrompt({
  name: 'chatAssistantPrompt',
  input: { schema: ChatWithAssistantInputSchema },
  output: { schema: ChatWithAssistantOutputSchema },
  system: `You are a friendly and knowledgeable AI assistant for PhysioHelper, a physiotherapy and wellness blog.
Your goal is to provide helpful, safe, and supportive information related to physiotherapy, exercises, wellness, and injury prevention.
You are not a doctor and cannot provide medical advice. Always remind the user to consult with a qualified healthcare professional for any medical concerns, diagnosis, or treatment.
Keep your responses concise and easy to understand.
`,
  prompt: `Answer the user's query based on the following history.

{{#each history}}
{{#if (eq this.role "user")}}
User: {{{this.content}}}
{{else}}
Assistant: {{{this.content}}}
{{/if}}
{{/each}}
`,
});

const chatAssistantFlow = ai.defineFlow(
  {
    name: 'chatAssistantFlow',
    inputSchema: ChatWithAssistantInputSchema,
    outputSchema: ChatWithAssistantOutputSchema,
  },
  async input => {
    const llmResponse = await chatPrompt(input);
    const output = llmResponse.output();
    if (!output) {
      return {
        response:
          "I'm sorry, I couldn't generate a response. Please try again.",
      };
    }
    return output;
  }
);
