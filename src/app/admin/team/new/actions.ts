
'use server';

import { createTeamMember } from '@/services/team';
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const FormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    role: z.string().min(1, 'Role is required'),
    avatar: z.string().url('Avatar must be a valid URL'),
});


export type State = {
    message: string;
} | undefined;

export async function createNewTeamMember(formData: FormData): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        role: formData.get('role'),
        avatar: formData.get('avatar'),
    });
    
    if (!validatedFields.success) {
        const errorMessages = validatedFields.error.flatten().fieldErrors;
        const allErrors = Object.values(errorMessages).flat().join(', ');
        return {
            message: `Validation failed: ${allErrors}`,
        }
    }

    try {
        await createTeamMember(validatedFields.data);

    } catch (e) {
        return { message: 'Database Error: Failed to create team member.' };
    }

    revalidatePath('/admin/team');
    revalidatePath('/about');
    redirect('/admin/team');
}
