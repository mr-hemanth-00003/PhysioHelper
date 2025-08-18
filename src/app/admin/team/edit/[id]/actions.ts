
'use server';

import { updateTeamMember } from '@/services/team';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    role: z.string().min(1, 'Role is required'),
    avatar: z.string().url('Avatar must be a valid URL'),
});

export type State = {
    message: string;
} | undefined;

export async function updateExistingTeamMember(id: string, formData: FormData): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        role: formData.get('role'),
        avatar: formData.get('avatar'),
    });
    
    if (!validatedFields.success) {
        // Consolidate all error messages into a single string.
        const errorMessages = validatedFields.error.flatten().fieldErrors;
        const allErrors = Object.values(errorMessages).flat().join(', ');
        return {
            message: `Validation failed: ${allErrors}`,
        }
    }

    try {
        await updateTeamMember(id, validatedFields.data);
    } catch (e) {
        return { message: 'Database Error: Failed to update team member.' };
    }

    revalidatePath('/admin/team');
    revalidatePath(`/admin/team/edit/${id}`);
    revalidatePath(`/about`);
    redirect('/admin/team');
}
