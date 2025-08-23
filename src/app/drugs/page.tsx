'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DrugSearch } from "@/components/drug-search";
import { comprehensiveDrugs } from '@/lib/comprehensive-drugs-v2';

export default function DrugsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DrugSearch />
      </main>
      <Footer />
    </div>
  );
}








