/**
 * @fileOverview Types for the chat-flow.
 */

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
