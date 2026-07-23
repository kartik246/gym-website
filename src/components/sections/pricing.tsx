"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

const plans = [
  {
    name: "Basic",
    price: "1,499",
    description: "Perfect for casual gym-goers.",
    features: ["Access to gym floor", "Standard locker room", "Free Wi-Fi", "1 Guest pass/month"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "2,999",
    description: "Our most popular membership plan.",
    features: [
      "24/7 Access",
      "Unlimited group classes",
      "Complimentary towel service",
      "Monthly progress check-in",
      "Personal trainer consultation",
    ],
    highlight: true,
  },
  {
    name: "Elite",
    price: "4,999",
    description: "The ultimate training experience.",
    features: [
      "All Pro features",
      "Private spa access",
      "Custom nutrition plan",
      "1-on-1 personal training (4/mo)",
      "Priority class booking",
    ],
    highlight: false,
  },
];

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section className="py-24 bg-secondary/50" id="pricing">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Membership</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">Simple Pricing</h3>
          <p className="text-muted-foreground mt-4 max-w-[600px]">
            Choose the plan that fits your goals. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`flex flex-col relative ${
                plan.highlight ? "border-primary scale-105 z-10 shadow-[0_0_30px_rgba(204,255,0,0.15)]" : "border-muted"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-black uppercase px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl uppercase tracking-tighter">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-black text-white">₹{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="mr-3 h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full text-black font-black uppercase tracking-wider" 
                  variant={plan.highlight ? "primary" : "outline"}
                  onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                >
                  Choose {plan.name} Plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
