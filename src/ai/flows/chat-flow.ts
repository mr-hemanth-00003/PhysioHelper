'use server';
/**
 * @fileOverview A flow for a conversational AI physiotherapy assistant.
 *
 * - chatWithAssistant - A function that handles the conversation.
 * - ChatWithAssistantInput - The input type for the chatWithAssistant function.
 * - ChatWithAssistantOutput - The return type for the chatWithAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const ChatWithAssistantInputSchema = z.object({
  history: z.array(MessageSchema).describe('The conversation history.'),
});
export type ChatWithAssistantInput = z.infer<
  typeof ChatWithAssistantInputSchema
>;

export const ChatWithAssistantOutputSchema = z.object({
  response: z.string().describe("The AI assistant's response."),
});
export type ChatWithAssistantOutput = z.infer<
  typeof ChatWithAssistantOutputSchema
>;

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
{{#if (eq role "user")}}
User: {{{content}}}
{{else}}
Assistant: {{{content}}}
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
