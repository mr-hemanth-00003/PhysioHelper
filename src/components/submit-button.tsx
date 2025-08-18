
'use client'
 
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button';
 
export function SubmitButton({ 
  pendingLabel = 'Saving...', 
  label = 'Save Changes',
  isPending // Optional prop to manually control pending state from a useTransition
} : { 
  pendingLabel?: string, 
  label?: string,
  isPending?: boolean 
}) {
  const { pending } = useFormStatus();
  const trulyPending = isPending !== undefined ? isPending : pending;
 
  return (
    <Button type="submit" aria-disabled={trulyPending}>
      {trulyPending ? pendingLabel : label}
    </Button>
  )
}
