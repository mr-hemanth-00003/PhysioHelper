
'use client'
 
import { Button } from '@/components/ui/button';
 
export function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button type="submit" aria-disabled={isPending} disabled={isPending}>
      {isPending ? "Adding..." : "Add Member"}
    </Button>
  )
}
