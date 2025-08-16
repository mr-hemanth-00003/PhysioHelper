
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
    const { toast } = useToast();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        toast({
            title: "Settings Saved!",
            description: "Your changes have been saved successfully.",
        });
    }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your site-wide settings and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SEO Configuration</CardTitle>
          <CardDescription>
            Manage the primary SEO settings for your website.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="site-title">Site Title</Label>
              <Input id="site-title" defaultValue="PhysioHelper - Your Guide to a Healthier Life" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="site-description">Site Description</Label>
              <Input id="site-description" defaultValue="A minimal medical blog for physiotherapy, wellness, and injury prevention." />
            </div>
             <div className="space-y-2">
              <Label htmlFor="site-keywords">Keywords</Label>
              <Input id="site-keywords" defaultValue="physiotherapy, wellness, injury prevention, health, fitness" />
            </div>
            <Button type="submit">Save SEO Settings</Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Maintenance Mode</CardTitle>
          <CardDescription>
            Temporarily disable your public-facing website for maintenance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Switch id="maintenance-mode" />
            <Label htmlFor="maintenance-mode" className="flex flex-col space-y-1">
              <span>Enable Maintenance Mode</span>
              <span className="font-normal leading-snug text-muted-foreground">
                When enabled, visitors will see a maintenance page.
              </span>
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
