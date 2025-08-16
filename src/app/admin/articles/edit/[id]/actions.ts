
'use server';

import { updateArticle } from '@/services/articles';
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

export async function updateExistingArticle(id: string, prevState: State, formData: FormData) {
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
        await updateArticle(id, validatedFields.data);
    } catch (e) {
        return { message: 'Database Error: Failed to update article.' , errors: null};
    }

    revalidatePath('/admin/articles');
    revalidatePath(`/admin/articles/edit/${id}`);
    revalidatePath(`/article/${id}`);
    redirect('/admin/articles');
}
