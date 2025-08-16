
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { articles, categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 lg:py-40">
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
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link href="/enhance-article">AI Article Tool</Link>
                  </Button>
                </div>
              </div>
              {featuredArticle && (
                <Link href={`/article/${featuredArticle.id}`} className="group">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                    <div className="relative h-80 w-full">
                      <Image
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                        data-ai-hint={featuredArticle.imageHint}
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-6 absolute bottom-0">
                       <p className="text-sm text-white/80 font-semibold mb-2">Featured Article</p>
                      <CardTitle className="text-2xl font-bold text-white">{featuredArticle.title}</CardTitle>
                    </CardContent>
                  </Card>
                </Link>
              )}
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
            <BlogSection articles={articles} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
