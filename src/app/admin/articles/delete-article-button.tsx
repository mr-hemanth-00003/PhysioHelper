
'use client';

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { deleteArticle } from "@/services/articles";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function DeleteArticleButton({ articleId }: { articleId: string }) {
    const { toast } = useToast();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleClick = async () => {
        if (confirm("Are you sure you want to delete this article?")) {
            startTransition(async () => {
                try {
                    await deleteArticle(articleId);
                    toast({
                        title: "Article Deleted",
                        description: "The article has been successfully deleted.",
                    });
                    router.refresh();
                } catch (error) {
                     toast({
                        title: "Error",
                        description: "Failed to delete the article.",
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
