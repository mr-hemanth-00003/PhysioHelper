
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getArticles } from '@/services/articles';
import { ArrowUpRight, PlusCircle, FileText, Newspaper, Wand2, Eye, TrendingUp, Users, Activity } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage() {
  const recentArticles = await getArticles({ limit: 5 });
  const allArticles = await getArticles();
  const totalArticles = allArticles.length;
  const totalViews = allArticles.reduce((acc, article) => acc + (article.views || 0), 0);
  
  const quickLinks = [
    { href: '/admin/articles/new', label: 'Create New Article', icon: PlusCircle, color: 'from-primary to-accent' },
    { href: '/admin/articles', label: 'Manage All Articles', icon: Newspaper, color: 'from-accent to-primary' },
    { href: '/admin/tools', label: 'AI Content Tools', icon: Wand2, color: 'from-primary-light to-primary' },
    { href: '/', label: 'View Public Site', icon: ArrowUpRight, color: 'from-primary to-accent' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold font-headline">
            <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome back! Here's what's happening with your website.
          </p>
        </div>
        <Button asChild className="btn-enhanced rounded-full px-8 py-6 text-lg font-semibold shadow-enhanced">
          <Link href="/admin/articles/new">
            <PlusCircle className="mr-2 h-5 w-5" />
            New Article
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="enhanced-card border-border/50 overflow-hidden group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary/10 to-transparent">
            <CardTitle className="text-sm font-medium text-foreground">Total Articles</CardTitle>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-enhanced group-hover:scale-110 transition-transform duration-300">
              <FileText className="h-5 w-5 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-primary mb-2">{totalArticles}</div>
            <p className="text-xs text-muted-foreground">
              Published posts in Firestore
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
              <TrendingUp className="h-3 w-3" />
              <span>+12% this month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="enhanced-card border-border/50 overflow-hidden group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-accent/10 to-transparent">
            <CardTitle className="text-sm font-medium text-foreground">Total Views</CardTitle>
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-enhanced group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-5 w-5 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-accent mb-2">{totalViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Across all published articles
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
              <TrendingUp className="h-3 w-3" />
              <span>+8% this week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="enhanced-card border-border/50 overflow-hidden group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-primary-light/10 to-transparent">
            <CardTitle className="text-sm font-medium text-foreground">AI Tools Used</CardTitle>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center shadow-enhanced group-hover:scale-110 transition-transform duration-300">
              <Wand2 className="h-5 w-5 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-primary-light mb-2">24</div>
            <p className="text-xs text-muted-foreground">
              Content enhancements this month
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-green-400">
              <Activity className="h-3 w-3" />
              <span>Active daily</span>
            </div>
          </CardContent>
        </Card>

        <Card className="enhanced-card border-border/50 overflow-hidden group">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-accent/10 to-transparent">
            <CardTitle className="text-sm font-medium text-foreground">Team Members</CardTitle>
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary-light rounded-xl flex items-center justify-center shadow-enhanced group-hover:scale-110 transition-transform duration-300">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold text-accent mb-2">8</div>
            <p className="text-xs text-muted-foreground">
              Active contributors
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-blue-400">
              <Users className="h-3 w-3" />
              <span>Growing team</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Articles */}
        <Card className="lg:col-span-2 enhanced-card border-border/50">
          <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-enhanced">
                <Newspaper className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl font-headline">Recent Articles</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Here are the most recently published articles.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentArticles.map((article, index) => (
                <div key={article.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-card/50 transition-all duration-300 group border border-border/20 hover:border-primary/30">
                  <div className="flex-1">
                    <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      By {article.author.name} on {new Date(article.date).toLocaleDateString('en-US')}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {article.views || 0} views
                      </span>
                      {article.featured && (
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="border-primary/30 text-primary hover:bg-primary/10">
                    <Link href={`/admin/articles/edit/${article.id}`}>Edit</Link>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card className="enhanced-card border-border/50">
          <CardHeader className="bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 border-b border-border/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-enhanced">
                <Wand2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-xl font-headline">Quick Actions</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Common admin tasks and shortcuts.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-3">
              {quickLinks.map((link, index) => (
                <Button 
                  key={link.href} 
                  variant="outline" 
                  className="justify-start h-auto p-4 border-border/30 hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                  asChild
                >
                  <Link href={link.href}>
                    <div className={`w-8 h-8 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      <link.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {link.label}
                      </div>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
