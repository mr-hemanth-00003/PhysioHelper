
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
        const errorMessages = validatedFields.error.errors.map(e => e.message).join(', ');
        return {
            message: `Validation failed: ${errorMessages}`,
        }
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
