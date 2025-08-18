
'use server';

import { z } from 'zod';
import { enhanceArticleContent, type EnhanceArticleContentInput } from '@/ai/flows/enhance-article-content';

const schema = z.object({
  title: z.string().min(5, { message: 'Title must be at least 5 characters.' }).max(100, {message: 'Title must be 100 characters or less.'}),
  content: z.string().min(20, { message: 'Content must be at least 20 characters.' }),
});

export type FormState = {
  suggestedTitle?: string;
  suggestedContent?: string;
  message: string;
  errors?: {
    title?: string[];
    content?: string[];
  };
} | null;

export async function handleEnhanceArticle(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = schema.safeParse({
    title: formData.get('title'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check your inputs.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  try {
    const input: EnhanceArticleContentInput = {
      title: validatedFields.data.title,
      content: validatedFields.data.content,
    };

    const result = await enhanceArticleContent(input);

    if (!result.suggestedTitle || !result.suggestedContent) {
        return { message: 'The AI could not generate suggestions. Please try modifying your input.' };
    }

    return {
      message: 'Suggestions generated successfully.',
      suggestedTitle: result.suggestedTitle,
      suggestedContent: result.suggestedContent,
      errors: null
    };
  } catch (error) {
    console.error(error);
    return { message: 'An error occurred while generating suggestions.' };
  }
}
