

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/services/articles";

export default async function Home() {
  const articles = await getArticles();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="min-h-screen flex items-center justify-center -mt-20">
          <div className="container max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 font-headline">
                  Your Guide to a Healthier, Pain-Free Life.
                </h1>
                <p className="text-lg text-muted-foreground mb-10 max-w-lg">
                  Explore expert advice, recovery strategies, and wellness tips from certified physiotherapists.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="#articles">
                      Browse Articles <MoveRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                    src="https://placehold.co/600x600.png" 
                    alt="3D Anatomical Model" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="3D anatomical model" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        <section id="articles" className="py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Articles</h2>
              <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
                Discover the latest in physiotherapy and wellness.
              </p>
            </div>
            <BlogSection allArticles={articles} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
