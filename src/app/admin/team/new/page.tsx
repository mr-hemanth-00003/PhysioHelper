
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useTransition } from 'react';
import { createNewTeamMember } from './actions';
import { useToast } from '@/hooks/use-toast';
import { SubmitButton } from '@/components/submit-button';
import { useRouter } from 'next/navigation';

export default function NewTeamMemberPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
        const result = await createNewTeamMember(formData);

        if (result?.errors) {
             const errorMessages = Object.values(result.errors).flat().join(' ');
             toast({
                title: 'Validation Error',
                description: errorMessages || result.message,
                variant: 'destructive'
            });
        } else if (result?.message) {
             toast({
                title: 'Error',
                description: result.message,
                variant: 'destructive'
            });
        } else {
             toast({
                title: 'Success!',
                description: 'New team member added successfully.',
            });
            // The action will handle the redirect, but we could also do it here.
            // router.push('/admin/team');
        }
    });
  };

  return (
    <form action={handleSubmit}>
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
            <h1 className="text-3xl font-bold">New Team Member</h1>
            <p className="text-muted-foreground">
            Fill out the form below to add a new member to the team.
            </p>
        </div>
        <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
                <Link href="/admin/team">Cancel</Link>
            </Button>
            <SubmitButton pendingLabel='Adding...' label='Add Member' isPending={isPending} />
        </div>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Member Details</CardTitle>
            <CardDescription>Provide the name, role, and avatar for the new team member.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" placeholder="e.g. Dr. Jane Smith" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" placeholder="e.g. Lead Physiotherapist" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar URL</Label>
                    <Input id="avatar" name="avatar" placeholder="https://placehold.co/100x100.png" />
                </div>
            </div>
        </CardContent>
      </Card>
    </form>
  );
}
