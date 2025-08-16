
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useActionState, useEffect, useState, useTransition } from "react";
import { updateSiteSettingsAction } from "./actions";
import { getSiteSettings } from "@/services/settings";
import type { SiteSettings } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  message: "",
  errors: null,
};

function SubmitButton() {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();

    const handleClick = () => {
        startTransition(() => {
             toast({
                title: "Settings Saved!",
                description: "Your changes have been saved successfully.",
            });
        });
    };
    
    return (
         <Button type="submit" disabled={isPending} onClick={handleClick}>
            {isPending ? "Saving..." : "Save SEO Settings"}
        </Button>
    )
}


export default function SettingsPage() {
    const [state, formAction] = useActionState(updateSiteSettingsAction, initialState);
    const { toast } = useToast();
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            setLoading(true);
            const fetchedSettings = await getSiteSettings();
            setSettings(fetchedSettings);
            setLoading(false);
        }
        fetchSettings();
    }, []);

    useEffect(() => {
        if (state.message) {
            toast({
                title: state.message.includes("Success") ? "Success!" : "Uh oh!",
                description: state.message,
                variant: state.errors ? "destructive" : "default"
            });
        }
    }, [state, toast]);

    if (loading || !settings) {
        return <SettingsSkeleton />
    }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your site-wide settings and preferences.
        </p>
      </div>

      <form action={formAction}>
        <Card className="mb-8">
            <CardHeader>
            <CardTitle>Site & SEO Configuration</CardTitle>
            <CardDescription>
                Manage the primary SEO and contact settings for your website.
            </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                <Label htmlFor="site-title">Site Title</Label>
                <Input id="site-title" name="siteTitle" defaultValue={settings.siteTitle} />
                {state.errors?.siteTitle && <p className="text-sm font-medium text-destructive">{state.errors.siteTitle[0]}</p>}
                </div>
                <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Input id="site-description" name="siteDescription" defaultValue={settings.siteDescription} />
                 {state.errors?.siteDescription && <p className="text-sm font-medium text-destructive">{state.errors.siteDescription[0]}</p>}
                </div>
                <div className="space-y-2">
                <Label htmlFor="site-keywords">Keywords</Label>
                <Input id="site-keywords" name="keywords" defaultValue={settings.keywords} />
                 {state.errors?.keywords && <p className="text-sm font-medium text-destructive">{state.errors.keywords[0]}</p>}
                </div>
                 <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" name="contactEmail" defaultValue={settings.contactEmail} />
                 {state.errors?.contactEmail && <p className="text-sm font-medium text-destructive">{state.errors.contactEmail[0]}</p>}
                </div>
                 <div className="space-y-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" name="contactPhone" defaultValue={settings.contactPhone} />
                 {state.errors?.contactPhone && <p className="text-sm font-medium text-destructive">{state.errors.contactPhone[0]}</p>}
                </div>
                 <div className="space-y-2">
                <Label htmlFor="office-address">Office Address</Label>
                <Textarea id="office-address" name="officeAddress" defaultValue={settings.officeAddress} rows={3} />
                 {state.errors?.officeAddress && <p className="text-sm font-medium text-destructive">{state.errors.officeAddress[0]}</p>}
                </div>
                <Button type="submit">Save Settings</Button>
            </CardContent>
        </Card>
    </form>


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


function SettingsSkeleton() {
    return (
        <div className="space-y-8">
            <div>
                <Skeleton className="h-10 w-1/3" />
                <Skeleton className="h-4 w-1/2 mt-2" />
            </div>

            <Card>
                <CardHeader>
                    <Skeleton className="h-8 w-1/4" />
                    <Skeleton className="h-4 w-3/4 mt-2" />
                </CardHeader>
                <CardContent className="space-y-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="h-4 w-16" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                    ))}
                    <Skeleton className="h-10 w-32" />
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                     <Skeleton className="h-8 w-1/4" />
                    <Skeleton className="h-4 w-3/4 mt-2" />
                </CardHeader>
                <CardContent>
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-6 w-11 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-4 w-48" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
