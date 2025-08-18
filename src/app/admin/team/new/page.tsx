
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
import { createNewTeamMember } from './actions';
import { SubmitButton } from './submit-button';

export default function NewTeamMemberPage() {
  
  return (
    <form action={createNewTeamMember}>
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
                    <Input id="name" name="name" placeholder="e.g. Dr. Jane Smith" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" placeholder="e.g. Lead Physiotherapist" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar URL</Label>
                    <Input id="avatar" name="avatar" placeholder="https://placehold.co/100x100.png" type="url" required />
                </div>
            </div>
        </CardContent>
      </Card>
    </form>
  );
}
