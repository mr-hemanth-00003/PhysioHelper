import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Poppins } from 'next/font/google';
import { AiAssistant } from '@/components/ai-assistant';
import { motion, AnimatePresence } from 'framer-motion';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'PhysioHelper - Your Guide to a Healthier Life',
  description: 'A minimal medical blog for physiotherapy, wellness, and injury prevention.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
        {children}
        <AiAssistant />
        <Toaster />
      </body>
    </html>
  );
}
