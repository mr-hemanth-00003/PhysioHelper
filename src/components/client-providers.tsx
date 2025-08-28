'use client';

import { UserProvider } from '@/contexts/user-context';
import { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}

