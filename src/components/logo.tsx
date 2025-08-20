import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/favicon.ico" alt="PhysioHelper Logo" width="32" height="32" className="rounded-lg" />
    </div>
  );
}
