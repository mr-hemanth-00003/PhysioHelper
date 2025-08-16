
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getArticles } from '@/services/articles';
import { ArrowUpRight, PlusCircle, FileText, Newspaper, Wand2, Eye } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const articles = await getArticles({ limit: 5 });
  const totalArticles = (await getArticles()).length;
  // Dummy data for example
  const totalViews = '25.6k';

  const quickLinks = [
      { href: '/admin/articles/new', label: 'Create New Article', icon: PlusCircle },
      { href: '/admin/articles', label: 'Manage All Articles', icon: Newspaper },
      { href: '/enhance-article', label: 'AI Article Enhancer', icon: Wand2 },
      { href: '/', label: 'View Public Site', icon: Eye },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">A quick overview of your website.</p>
        </div>
        <Button asChild>
          <Link href="/admin/articles/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalArticles}</div>
            <p className="text-xs text-muted-foreground">
              Based on your Firestore database.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalViews}</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month (dummy data)
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
            <CardHeader>
            <CardTitle>Recent Articles</CardTitle>
            <CardDescription>
                Here are the most recent articles from your blog.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                {articles.map((article) => (
                <div key={article.id} className="flex items-center justify-between">
                    <div>
                    <h3 className="font-semibold">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        By {article.author.name} on {new Date(article.date).toLocaleDateString()}
                    </p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/articles/edit/${article.id}`}>Edit</Link>
                    </Button>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>
                    Navigate to common admin tasks quickly.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="group flex items-center gap-3 rounded-md bg-secondary p-4 text-secondary-foreground transition-colors hover:bg-secondary/90">
                        <link.icon className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
                        <span className="font-medium">{link.label}</span>
                    </Link>
                ))}
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
