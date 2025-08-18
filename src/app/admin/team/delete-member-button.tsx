
'use client';

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { deleteTeamMember } from "@/services/team";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function DeleteTeamMemberButton({ memberId }: { memberId: string }) {
    const { toast } = useToast();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleClick = async () => {
        if (confirm("Are you sure you want to delete this team member?")) {
            startTransition(async () => {
                try {
                    await deleteTeamMember(memberId);
                    toast({
                        title: "Team Member Deleted",
                        description: "The team member has been successfully deleted.",
                    });
                    router.refresh();
                } catch (error) {
                     toast({
                        title: "Error",
                        description: "Failed to delete the team member.",
                        variant: "destructive"
                    });
                }
            });
        }
    };

    return (
        <DropdownMenuItem onClick={handleClick} disabled={isPending} className="text-destructive">
            {isPending ? "Deleting..." : "Delete"}
        </DropdownMenuItem>
    );
}
