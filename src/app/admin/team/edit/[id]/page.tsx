
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
import type { TeamMember } from '@/lib/types';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { getTeamMember } from '@/services/team';
import { Skeleton } from '@/components/ui/skeleton';
import { updateExistingTeamMember } from './actions';
import { SubmitButton } from './submit-button';

const initialState = undefined;

export default function EditTeamMemberPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const { toast } = useToast();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  
  const updateTeamMemberWithId = updateExistingTeamMember.bind(null, id);
  const [state, formAction] = useFormState(updateTeamMemberWithId, initialState);
  

  useEffect(() => {
      if (!id) return;
      const fetchMember = async () => {
          setLoading(true);
          const fetchedMember = await getTeamMember(id);
          if (fetchedMember) {
              setMember(fetchedMember);
          } else {
              notFound();
          }
          setLoading(false);
      }
      fetchMember();
  }, [id])

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.errors ? 'Error' : 'Success!',
        description: state.message,
        variant: state.errors ? 'destructive' : 'default',
      });
    }
  }, [state, toast]);
  
  if (loading) {
      return <EditMemberSkeleton />
  }

  if (!member) {
      return notFound();
  }


  return (
    <form action={formAction}>
      <div className="flex items-center justify-between space-y-2 mb-8">
        <div>
            <h1 className="text-3xl font-bold">Edit Team Member</h1>
            <p className="text-muted-foreground">
              Make changes to an existing team member.
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
            <CardDescription>Update the name, role, and avatar for the team member.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" defaultValue={member.name} />
                    {state?.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" defaultValue={member.role} />
                    {state?.errors?.role && <p className="text-sm font-medium text-destructive">{state.errors.role[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="avatar">Avatar URL</Label>
                    <Input id="avatar" name="avatar" defaultValue={member.avatar} />
                     {state?.errors?.avatar && <p className="text-sm font-medium text-destructive">{state.errors.avatar[0]}</p>}
                </div>
            </div>
        </CardContent>
      </Card>
    </form>
  );
}

function EditMemberSkeleton() {
    return (
        <div className="space-y-8">
            <div>
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </div>
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/2 mt-2" />
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-16" />
                        <Skeleton className="h-10 w-full" />
                    </div>
                </CardContent>
            </Card>
            <div className="flex justify-end gap-2">
                 <Skeleton className="h-10 w-24" />
                 <Skeleton className="h-10 w-32" />
            </div>
        </div>
    )
}
