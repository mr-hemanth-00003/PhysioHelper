
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Dumbbell, HeartPulse, MoveRight } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Exercise Library",
      description: "A comprehensive library of exercises with video demonstrations to help you perform movements safely and effectively.",
      icon: Dumbbell,
      href: "#"
    },
    {
      title: "Nutrition Guides",
      description: "Downloadable guides and meal plans designed by registered dietitians to support your recovery and wellness goals.",
      icon: BookOpen,
      href: "#"
    },
    {
      title: "Wellness Tools",
      description: "Interactive tools to track your progress, assess your pain levels, and stay motivated on your journey to a healthier life.",
      icon: HeartPulse,
      href: "#"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Resources</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Your hub for valuable tools, guides, and information to support your physiotherapy journey and enhance your well-being.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
            <div className="container max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => (
                       <Card key={resource.title} className="flex flex-col">
                         <CardHeader className="items-center text-center">
                            <div className="p-4 bg-primary/10 rounded-full mb-4">
                                <resource.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">{resource.title}</CardTitle>
                         </CardHeader>
                         <CardContent className="flex-grow text-center">
                           <p className="text-muted-foreground">{resource.description}</p>
                         </CardContent>
                          <div className="p-6 pt-0 text-center">
                             <Button asChild variant="outline">
                                <Link href={resource.href}>
                                    Learn More <MoveRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                          </div>
                       </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
