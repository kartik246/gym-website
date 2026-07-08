import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dumbbell, Users, Trophy, Zap, HeartPulse, Clock } from "lucide-react";

const amenities = [
  {
    title: "Elite Equipment",
    description: "Train with the best. We feature Hammer Strength, Eleiko, and Life Fitness.",
    icon: Dumbbell,
  },
  {
    title: "Expert Coaches",
    description: "Certified trainers dedicated to pushing you beyond your potential.",
    icon: Users,
  },
  {
    title: "Pro Programs",
    description: "Tailored workout plans designed for your specific fitness goals.",
    icon: Trophy,
  },
  {
    title: "High Energy",
    description: "Immersive environment with premium sound and dynamic lighting.",
    icon: Zap,
  },
  {
    title: "Wellness Spa",
    description: "Recovery is key. Access our sauna, cold plunge, and massage therapy.",
    icon: HeartPulse,
  },
  {
    title: "24/7 Access",
    description: "Your schedule, your rules. The grind never stops at Power GYM.",
    icon: Clock,
  },
];

export function Amenities() {
  return (
    <section className="py-24 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">What we offer</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">World Class Facilities</h3>
          <div className="w-24 h-1 bg-primary mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <Card key={index} className="bg-secondary border-muted group hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-muted-foreground pt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
