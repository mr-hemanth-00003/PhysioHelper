
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
    errors?: {
        name?: string[];
        role?: string[];
        avatar?: string[];
    } | null;
    message?: string | null;
};

export async function updateExistingTeamMember(id: string, prevState: State, formData: FormData): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        role: formData.get('role'),
        avatar: formData.get('avatar'),
    });
    
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Validation failed. Please check your inputs.',
        };
    }

    try {
        await updateTeamMember(id, validatedFields.data);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Database Error: Failed to update team member.';
        return { message: errorMessage };
    }

    revalidatePath('/admin/team');
    revalidatePath(`/admin/team/edit/${id}`);
    revalidatePath(`/about`);
    redirect('/admin/team');
}
