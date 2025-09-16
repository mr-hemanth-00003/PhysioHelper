'use client'
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { DrugSearch } from '@/components/drug-search';
import { commonDrugs, drugCategories, commonConditions } from '@/lib/drug-database';

export default function DrugSearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <DrugSearch 
          drugs={commonDrugs}
          categories={drugCategories}
          conditions={commonConditions}
        />
      </main>
      <Footer />
    </div>
  );
}