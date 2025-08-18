
'use client';

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from 'lucide-react';
import { getSiteSettings } from "@/services/settings";
import { useEffect, useState } from "react";
import { SiteSettings } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSettings() {
      const siteSettings = await getSiteSettings();
      setSettings(siteSettings);
      setLoading(false);
    }
    fetchSettings();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
            <div className="container max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
                            <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="font-semibold">Full Name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="font-semibold">Email</Label>
                                    <Input id="email" type="email" placeholder="john@example.com" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="subject" className="font-semibold">Subject</Label>
                                    <Input id="subject" placeholder="Question about an article" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="font-semibold">Message</Label>
                                    <Textarea id="message" placeholder="Your message..." rows={6} />
                                </div>
                                <Button size="lg" className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                       {loading ? (
                         <>
                            <div className="space-y-2"><Skeleton className="h-6 w-24" /><Skeleton className="h-4 w-32" /></div>
                            <div className="space-y-2"><Skeleton className="h-6 w-24" /><Skeleton className="h-4 w-32" /></div>
                            <div className="space-y-2"><Skeleton className="h-6 w-24" /><Skeleton className="h-4 w-32" /></div>
                         </>
                       ) : settings && (
                        <>
                         <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground p-4 rounded-full">
                                <Mail className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">Email</h3>
                                <p className="text-muted-foreground">General Inquiries</p>
                                <a href={`mailto:${settings.contactEmail}`} className="text-lg font-semibold text-primary hover:underline">{settings.contactEmail}</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground p-4 rounded-full">
                                <Phone className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">Phone</h3>
                                <p className="text-muted-foreground">Mon-Fri from 9am to 5pm</p>
                                <a href={`tel:${settings.contactPhone}`} className="text-lg font-semibold text-primary hover:underline">{settings.contactPhone}</a>
                            </div>
                        </div>
                         <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground p-4 rounded-full">
                                <MapPin className="h-6 w-6"/>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-headline">Office</h3>
                                <p className="text-muted-foreground">Come say hello</p>
                                <p className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: settings.officeAddress.replace(/\n/g, '<br>') }} />
                            </div>
                        </div>
                        </>
                       )}
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
