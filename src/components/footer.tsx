import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              PhysioHelper provides expert insights and practical advice for a healthier, pain-free life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Explore</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Articles</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link>
              <Link href="/enhance-article" className="text-sm text-muted-foreground hover:text-foreground">AI Enhancer</Link>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Legal</h4>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Use</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PhysioHelper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
