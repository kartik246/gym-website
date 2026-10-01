"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Check, MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

interface PricingProps {
  onSelectPlan?: (planName: string) => void;
}

const plans = [
  {
    name: "Monthly General Pass",
    badge: "Flexible Routine",
    priceLabel: "Custom Rate",
    priceSubtext: "Inquire for current monthly rate",
    description: "Ideal for short-term routines, trial periods & monthly fitness training.",
    features: [
      "Full floor access (Heavy Iron, Cardio & Crossfit)",
      "Olympic barbells, dumbbells & plate-loaded machines",
      "Spin cycling bikes & warm-up zone access",
      "Standard lockers & purified drinking water",
      "General floor trainer form guidance",
    ],
    highlight: false,
    whatsappMsg: "Hi Sumit ji, I want to know the current monthly membership fee and details for Team Iron Fit Gym.",
  },
  {
    name: "3 to 6-Month Transformation",
    badge: "Most Popular & Recommended",
    priceLabel: "Seasonal Offer",
    priceSubtext: "Special package discount available",
    description: "Our most chosen dedicated fitness, fat loss & body recomposition package.",
    features: [
      "Unlimited workout access 7 days a week",
      "Personalized natural diet & nutrition chart",
      "Posture, mobility & heavy lifting form correction",
      "1-on-1 consultation with Coach Sumit Khatri",
      "Free workout guidance & progress tracking",
    ],
    highlight: true,
    whatsappMsg: "Hi Sumit ji, I am interested in the 3-Month / 6-Month Transformation Plan at Team Iron Fit Gym. Please share the current offer.",
  },
  {
    name: "Annual Pro & 1-on-1 PT",
    badge: "Maximum Value",
    priceLabel: "Best Value Deal",
    priceSubtext: "Inquire for customized PT package",
    description: "Full year elite dedication or personalized 1-on-1 training with senior coaches.",
    features: [
      "Full 12-month unlimited gym floor access",
      "Dedicated personal locker allocated",
      "1-on-1 Personal Training & Custom Splits with Sumit Khatri",
      "Periodic diet, workout splits & recovery cycle updates",
      "Special member discounts on in-house certified supplements",
    ],
    highlight: false,
    whatsappMsg: "Hi Sumit ji, I am interested in the Annual Pro Plan & Personal Training at Team Iron Fit Gym. Please share the details.",
  },
];

export function Pricing({ onSelectPlan }: PricingProps) {
  const defaultWhatsApp = "https://wa.me/919910416468?text=" + encodeURIComponent("Hi Sumit ji, I want to know about current membership plans and offers at Team Iron Fit Gym.");

  return (
    <section className="py-24 bg-secondary/50" id="pricing">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
            Transparent &amp; Flexible Memberships
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Plans &amp; Packages
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[680px] text-sm md:text-base leading-relaxed">
            Gym membership rates change regularly with active seasonal offers, student discounts, and customized training goals. Connect directly with Owner &amp; Head Coach <strong className="text-white">Sumit Khatri</strong> via WhatsApp, phone, or in person for today&apos;s best customized rate.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const planWhatsAppUrl = `https://wa.me/919910416468?text=${encodeURIComponent(plan.whatsappMsg)}`;

            return (
              <Card 
                key={plan.name} 
                className={`flex flex-col relative transition-all duration-300 ${
                  plan.highlight 
                    ? "border-primary scale-105 z-10 shadow-[0_0_35px_rgba(204,255,0,0.18)] bg-card" 
                    : "border-muted bg-card/80 hover:border-primary/40"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black text-xs font-black uppercase px-4 py-1 rounded-full shadow-lg flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </div>
                )}
                
                <CardHeader className="text-center pt-8">
                  {!plan.highlight && (
                    <span className="text-[11px] font-bold uppercase tracking-widest text-primary mb-1">
                      {plan.badge}
                    </span>
                  )}
                  <CardTitle className="text-2xl uppercase tracking-tighter text-white">{plan.name}</CardTitle>
                  <CardDescription className="text-xs mt-2 text-muted-foreground">{plan.description}</CardDescription>
                  
                  <div className="mt-5 p-3 rounded-xl bg-secondary/80 border border-muted/60">
                    <div className="text-2xl font-black text-primary tracking-tight">{plan.priceLabel}</div>
                    <span className="text-[11px] text-muted-foreground block mt-0.5">{plan.priceSubtext}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pt-2">
                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Check className="mr-3 h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-xs md:text-sm leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="flex flex-col gap-2 pt-4 border-t border-muted/50">
                  <a
                    href={planWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Inquire on WhatsApp
                  </a>

                  <div className="grid grid-cols-2 gap-2 w-full">
                    <a
                      href="tel:+919910416468"
                      className="inline-flex items-center justify-center gap-1.5 h-10 px-3 rounded-xl border border-muted hover:border-primary/50 text-white font-bold text-xs uppercase transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      Call Sumit
                    </a>

                    <Button 
                      variant="outline"
                      className="h-10 text-xs font-bold uppercase tracking-wider border-muted hover:border-primary"
                      onClick={() => onSelectPlan && onSelectPlan(plan.name)}
                    >
                      Request Call
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Direct Contact Card with Sumit Khatri */}
        <div className="bg-gradient-to-r from-secondary via-secondary/90 to-card border border-primary/30 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-primary shrink-0 shadow-lg bg-black flex items-center justify-center p-1">
                <Image
                  src="/images/gym/official_logo.jpg"
                  alt="Team Iron Fit Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                  Owner &amp; Head Coach
                </span>
                <h3 className="text-2xl font-black uppercase text-white mt-2">Sumit Khatri</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Available directly on call, WhatsApp, or at the gym reception for personalized fees, student offers &amp; training packages.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* WhatsApp Referral */}
              <a
                href={defaultWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-muted hover:border-[#25D366] transition-all group hover:scale-[1.02] shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-3 group-hover:bg-[#25D366] group-hover:text-black transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-white">Chat on WhatsApp</span>
                <span className="text-[11px] text-muted-foreground mt-1">+91 99104 16468</span>
                <span className="text-[10px] text-[#25D366] font-bold mt-2">Instant Pricing &amp; Offers →</span>
              </a>

              {/* Direct Call Referral */}
              <a
                href="tel:+919910416468"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-muted hover:border-primary transition-all group hover:scale-[1.02] shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-black transition-colors">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-white">Call Sumit Directly</span>
                <span className="text-[11px] text-muted-foreground mt-1">+91 99104 16468</span>
                <span className="text-[10px] text-primary font-bold mt-2">Speak directly with Coach →</span>
              </a>

              {/* In-Person Visit */}
              <a
                href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-card border border-muted hover:border-white transition-all group hover:scale-[1.02] shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-3 group-hover:bg-white group-hover:text-black transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider text-white">Mil Kar Baat Karein</span>
                <span className="text-[11px] text-muted-foreground mt-1">Shivaji Enclave, Rajouri Garden</span>
                <span className="text-[10px] text-white/80 font-bold mt-2">View on Google Maps →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
