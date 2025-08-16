import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogSection } from "@/components/blog-section";
import { articles, categories } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-card">
          <div className="container max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 font-headline">
                  Your Guide to a Healthier, Pain-Free Life.
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Explore expert advice, recovery strategies, and wellness tips from certified physiotherapists.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg">
                    <Link href="#articles">Browse Articles</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/enhance-article">AI Article Tool</Link>
                  </Button>
                </div>
              </div>
              {featuredArticle && (
                <Link href="#" className="group">
                  <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border">
                    <div className="relative h-64 w-full">
                      <Image
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                        data-ai-hint={featuredArticle.imageHint}
                      />
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-primary font-semibold mb-2">Featured Article</p>
                      <CardTitle className="text-2xl font-bold">{featuredArticle.title}</CardTitle>
                      <p className="mt-2 text-muted-foreground line-clamp-2">{featuredArticle.excerpt}</p>
                      <div className="flex items-center gap-2 mt-4 font-semibold text-primary">
                        Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )}
            </div>
          </div>
        </section>

        <section id="articles" className="py-12 md:py-24 lg:py-32">
          <div className="container max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Latest Articles</h2>
              <p className="text-lg text-muted-foreground mt-2">
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
