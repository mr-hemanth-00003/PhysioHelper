
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { getTeamMembers } from '@/services/team';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { DeleteTeamMemberButton } from './delete-member-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useEffect, useState } from 'react';
import { TeamMember } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

function TeamPageSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-8 w-1/2" />
                <Skeleton className="h-4 w-3/4 mt-2" />
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>
                                <span className="sr-only">Actions</span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <TableRow key={i}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Skeleton className="h-10 w-10 rounded-full" />
                                        <Skeleton className="h-5 w-32" />
                                    </div>
                                </TableCell>
                                <TableCell><Skeleton className="h-5 w-24" /></TableCell>
                                <TableCell>
                                    <Skeleton className="h-8 w-8" />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

export default function TeamPage() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            const members = await getTeamMembers();
            setTeamMembers(members);
            setLoading(false);
        }
        fetchTeam();
    }, [])

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-muted-foreground">
            Add, edit, or remove team members.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/team/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Member
          </Link>
        </Button>
      </div>

        {loading ? <TeamPageSkeleton /> : (
            <Card>
                <CardHeader>
                <CardTitle>All Team Members</CardTitle>
                <CardDescription>A list of all team members on your website.</CardDescription>
                </CardHeader>
                <CardContent>
                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>
                        <span className="sr-only">Actions</span>
                        </TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {teamMembers.map((member) => (
                        <TableRow key={member.id}>
                        <TableCell className="font-medium">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={member.avatar} alt={member.name} />
                                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                {member.name}
                            </div>
                        </TableCell>
                        <TableCell>{member.role}</TableCell>
                        <TableCell>
                            <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem asChild>
                                    <Link href={`/admin/team/edit/${member.id}`}>Edit</Link>
                                </DropdownMenuItem>
                                <DeleteTeamMemberButton memberId={member.id} />
                            </DropdownMenuContent>
                            </DropdownMenu>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </CardContent>
            </Card>
        )}
    </div>
  );
}
