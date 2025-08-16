'use server';

/**
 * @fileOverview A flow to enhance blog article content using AI suggestions.
 *
 * - enhanceArticleContent - A function that enhances article title and content.
 * - EnhanceArticleContentInput - The input type for the enhanceArticleContent function.
 * - EnhanceArticleContentOutput - The return type for the enhanceArticleContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceArticleContentInputSchema = z.object({
  title: z.string().describe('The current title of the article.'),
  content: z.string().describe('The current content of the article.'),
});
export type EnhanceArticleContentInput = z.infer<
  typeof EnhanceArticleContentInputSchema
>;

const EnhanceArticleContentOutputSchema = z.object({
  suggestedTitle: z.string().describe('The AI-suggested improved title.'),
  suggestedContent: z.string().describe('The AI-suggested improved content.'),
});
export type EnhanceArticleContentOutput = z.infer<
  typeof EnhanceArticleContentOutputSchema
>;

export async function enhanceArticleContent(
  input: EnhanceArticleContentInput
): Promise<EnhanceArticleContentOutput> {
  return enhanceArticleContentFlow(input);
}

const enhanceArticleContentPrompt = ai.definePrompt({
  name: 'enhanceArticleContentPrompt',
  input: {schema: EnhanceArticleContentInputSchema},
  output: {schema: EnhanceArticleContentOutputSchema},
  prompt: `You are an AI assistant helping content creators improve their blog articles.

  Based on the current title and content provided, suggest improvements to both.

  Current Title: {{{title}}}
  Current Content: {{{content}}}

  Provide a new suggested title and content that is more engaging and of higher quality.
  Do not respond conversationally, only provide the new title and content.
  Make sure the suggested title is SEO friendly.
`,
});

const enhanceArticleContentFlow = ai.defineFlow(
  {
    name: 'enhanceArticleContentFlow',
    inputSchema: EnhanceArticleContentInputSchema,
    outputSchema: EnhanceArticleContentOutputSchema,
  },
  async input => {
    const {output} = await enhanceArticleContentPrompt(input);
    return output!;
  }
);
