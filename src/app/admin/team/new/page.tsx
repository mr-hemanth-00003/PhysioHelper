
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
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { createNewTeamMember } from './actions';
import { useToast } from '@/hooks/use-toast';
import { SubmitButton } from './submit-button';

const initialState = undefined;

export default function NewTeamMemberPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(createNewTeamMember, initialState);

  useEffect(() => {
    if (state?.message) {
      toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
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
            <SubmitButton />
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
                    {state?.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" placeholder="e.g. Lead Physiotherapist" />
                    {state?.errors?.role && <p className="text-sm font-medium text-destructive">{state.errors.role[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar URL</Label>
                    <Input id="avatar" name="avatar" placeholder="https://placehold.co/100x100.png" />
                    {state?.errors?.avatar && <p className="text-sm font-medium text-destructive">{state.errors.avatar[0]}</p>}
                </div>
            </div>
        </CardContent>
      </Card>
    </form>
  );
}
