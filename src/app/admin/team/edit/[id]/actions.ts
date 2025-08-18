
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

export async function updateExistingTeamMember(id: string, formData: FormData) {
    const data = {
        name: formData.get('name'),
        role: formData.get('role'),
        avatar: formData.get('avatar'),
    };

    const validatedFields = FormSchema.safeParse(data);
    
    if (!validatedFields.success) {
        console.error(validatedFields.error.flatten().fieldErrors);
        throw new Error(`Validation failed`);
    }

    try {
        await updateTeamMember(id, validatedFields.data);
    } catch (e) {
        const errorMessage = e instanceof Error ? e.message : 'Database Error: Failed to update team member.';
        throw new Error(errorMessage);
    }

    revalidatePath('/admin/team');
    revalidatePath(`/admin/team/edit/${id}`);
    revalidatePath(`/about`);
    redirect('/admin/team');
}
