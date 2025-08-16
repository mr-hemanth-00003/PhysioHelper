
'use client';

import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { articles, categories } from '@/lib/mock-data';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useRouter, notFound } from 'next/navigation';

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const { toast } = useToast();
  const router = useRouter();

  const article = articles.find((a) => a.id === params.id);

  if (!article) {
    notFound();
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: 'Article Updated!',
      description: 'Your changes have been saved successfully.',
    });
    router.push('/admin/articles');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Article</h1>
        <p className="text-muted-foreground">
          Make changes to your existing blog post.
        </p>
      </div>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" defaultValue={article.title} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                defaultValue={article.excerpt}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                rows={15}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select defaultValue={article.category}>
                    <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                    {categories.filter(c => c !== "All").map((category) => (
                        <SelectItem key={category} value={category}>
                        {category}
                        </SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="image-url">Image URL</Label>
                    <Input id="image-url" defaultValue={article.imageUrl} />
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link href="/admin/articles">Cancel</Link>
        </Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}
