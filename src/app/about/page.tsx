
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeartPulse, Target, Users } from "lucide-react";
import { getTeamMembers } from "@/services/team";

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/50 py-20 md:py-32">
          <div className="container max-w-7xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">About PhysioHelper</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Your trusted partner in achieving a healthier, pain-free life through expert physiotherapy guidance, wellness strategies, and injury prevention education.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
            <div className="container max-w-7xl">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://placehold.co/600x400.png" alt="Our clinic" fill className="object-cover" data-ai-hint="clinic reception" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold font-headline mb-4">Our Story</h2>
                        <p className="text-muted-foreground mb-4">
                            PhysioHelper was founded with a simple mission: to make expert physiotherapy knowledge accessible to everyone, everywhere. We believe that understanding your body is the first step towards a healthier and more active life.
                        </p>
                        <p className="text-muted-foreground">
                            Our team of certified physiotherapists, wellness coaches, and nutritionists are dedicated to providing you with reliable, evidence-based information to help you on your journey to wellness.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-secondary/50 py-20 md:py-32">
            <div className="container max-w-7xl">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Mission & Vision</h2>
                    <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
                        We are committed to empowering you with the knowledge and tools to live a better life.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 border rounded-xl bg-card shadow-sm">
                        <HeartPulse className="h-12 w-12 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Empower Health</h3>
                        <p className="text-muted-foreground">To provide accessible and reliable physiotherapy resources that empower individuals to take control of their physical health and well-being.</p>
                    </div>
                    <div className="p-8 border rounded-xl bg-card shadow-sm">
                        <Target className="h-12 w-12 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Our Vision</h3>
                        <p className="text-muted-foreground">To be the leading online resource for physiotherapy information, creating a global community dedicated to movement, health, and a pain-free life.</p>
                    </div>
                     <div className="p-8 border rounded-xl bg-card shadow-sm">
                        <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                        <h3 className="text-xl font-bold font-headline mb-2">Community Focus</h3>
                        <p className="text-muted-foreground">To build a supportive community where users can find encouragement, share experiences, and learn from experts and peers alike.</p>
                    </div>
                </div>
            </div>
        </section>

         <section className="py-20 md:py-32">
          <div className="container max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
                The experts behind our evidence-based content.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
