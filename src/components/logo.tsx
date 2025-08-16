import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/favicon.ico" alt="PhysioHelper Logo" width="36" height="36" />
      <span className="text-2xl font-bold font-headline text-foreground">PhysioHelper</span>
    </div>
  );
}
