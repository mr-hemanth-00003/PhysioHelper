
import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 md:col-span-2">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-md">
              PhysioHelper provides expert insights and practical advice for a healthier, pain-free life. Your trusted resource for physiotherapy, wellness, and injury prevention.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold font-headline">Explore</h4>
            <Link href="/#articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Articles</Link>
            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/enhance-article" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Enhancer</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold font-headline">Legal</h4>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} PhysioHelper. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
