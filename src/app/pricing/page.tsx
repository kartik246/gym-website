"use client";

import { Pricing } from "@/components/sections/pricing";
import { MembershipModal } from "@/components/modals/membership-modal";
import { useState } from "react";

export default function PricingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Pro");

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Simple Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            Membership Plans
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            No hidden fees. Select your plan to claim your digital QR access pass for Team Iron Fit Gym.
          </p>
        </div>
      </div>

      <Pricing onSelectPlan={handleSelectPlan} />

      <MembershipModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        defaultPlan={selectedPlan} 
      />
    </main>
  );
}
