
'use client'
 
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button';
 
export function SubmitButton({ pendingLabel = 'Saving...', label = 'Save Changes' }: { pendingLabel?: string, label?: string}) {
  const { pending } = useFormStatus()
 
  return (
    <Button type="submit" aria-disabled={pending}>
      {pending ? pendingLabel : label}
    </Button>
  )
}
