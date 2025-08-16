
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { getArticles } from "@/services/articles";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">All Articles</h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Explore our comprehensive library of articles on physiotherapy, wellness, and injury prevention.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <BlogCard key={article.id} article={article} />
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
