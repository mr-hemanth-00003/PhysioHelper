import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-3" {...props}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <rect width="36" height="36" rx="8" fill="currentColor" />
        <path
          d="M18 11V25"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 18H25"
          stroke="hsl(var(--primary-foreground))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-bold font-headline text-foreground">PhysioHelper</span>
    </div>
  );
}
