
'use server';

import { createArticle } from '@/services/articles';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    excerpt: z.string().min(1, 'Excerpt is required'),
    content: z.string().min(1, 'Content is required'),
    imageUrl: z.string().url('Must be a valid URL'),
});


export type State = {
    errors?: {
        title?: string[];
        excerpt?: string[];
        content?: string[];
        imageUrl?: string[];
    } | null;
    message: string;
}

export async function createNewArticle(prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        title: formData.get('title'),
        excerpt: formData.get('excerpt'),
        content: formData.get('content'),
        imageUrl: formData.get('imageUrl'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your inputs.',
        }
    }

    try {
        await createArticle({
            ...validatedFields.data,
            imageHint: 'custom image', // default hint
            featured: false, // default
        });

    } catch (e) {
        return { message: 'Database Error: Failed to create article.' , errors: null};
    }

    revalidatePath('/admin/articles');
    redirect('/admin/articles');
}
