

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { Button } from "@/components/ui/button";
import { MoveRight, Bot, Sparkles, BrainCircuit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/services/articles";

export default async function Home() {
  const latestArticles = await getArticles({ limit: 3 });

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
                    <Link href="/articles">
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

        <section className="py-20 md:py-32 bg-background">
          <div className="container max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                        src="https://placehold.co/600x400.png" 
                        alt="AI assisting with physiotherapy" 
                        fill 
                        className="object-cover"
                        data-ai-hint="AI physiotherapy" 
                    />
                </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">AI-Powered Physiotherapy Guidance</h2>
                <p className="text-muted-foreground mb-8">
                    Leverage the power of artificial intelligence to get personalized insights and enhance your recovery journey. Our AI assistant helps you understand your body better and provides suggestions to improve your well-being.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Personalized Content</h4>
                      <p className="text-sm text-muted-foreground">Get article suggestions and content tailored to your needs and interests.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <BrainCircuit className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Intelligent Assistance</h4>
                      <p className="text-sm text-muted-foreground">Our AI tools help content creators enhance articles, ensuring the highest quality information.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                     <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Smarter Search</h4>
                      <p className="text-sm text-muted-foreground">Find the exact information you need with our AI-enhanced search capabilities.</p>
                    </div>
                  </li>
                </ul>
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
            <BlogSection allArticles={latestArticles} />
             <div className="text-center mt-16">
                <Button asChild size="lg" variant="outline">
                    <Link href="/articles">
                        View All Articles <MoveRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
