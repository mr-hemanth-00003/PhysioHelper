
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { updateSiteSettings } from '@/services/settings';

const FormSchema = z.object({
    siteTitle: z.string().min(1, 'Site Title is required'),
    siteDescription: z.string().min(1, 'Site Description is required'),
    keywords: z.string().min(1, 'Keywords are required'),
    contactEmail: z.string().email('Must be a valid email'),
    contactPhone: z.string().min(1, 'Phone number is required'),
    officeAddress: z.string().min(1, 'Office address is required'),
});

export type State = {
    errors?: {
        siteTitle?: string[];
        siteDescription?: string[];
        keywords?: string[];
        contactEmail?: string[];
        contactPhone?: string[];
        officeAddress?: string[];
    } | null;
    message: string;
}

export async function updateSiteSettingsAction(prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        siteTitle: formData.get('siteTitle'),
        siteDescription: formData.get('siteDescription'),
        keywords: formData.get('keywords'),
        contactEmail: formData.get('contactEmail'),
        contactPhone: formData.get('contactPhone'),
        officeAddress: formData.get('officeAddress'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your inputs.',
        }
    }

    try {
        await updateSiteSettings(validatedFields.data);
    } catch (e) {
        return { message: 'Database Error: Failed to update settings.' , errors: null};
    }

    revalidatePath('/admin/settings');
    revalidatePath('/contact');
    revalidatePath('/about');
    revalidatePath('/');
    
    return { message: 'Success! Settings have been updated.', errors: null };
}
