"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Amenities } from "@/components/sections/amenities";
import { ClassSchedule } from "@/components/sections/class-schedule";
import { BmiCalculator } from "@/components/sections/bmi-calculator";
import { Trainers } from "@/components/sections/trainers";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { MembershipModal } from "@/components/modals/membership-modal";
import { TrailerModal } from "@/components/modals/trailer-modal";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupPlan, setSignupPlan] = useState("Pro");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openSignupWithPlan = (plan: string = "Pro") => {
    setSignupPlan(plan);
    setIsSignupOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero 
        onOpenSignup={() => openSignupWithPlan("Pro")} 
        onOpenTrailer={() => setIsTrailerOpen(true)} 
      />
      <Amenities />
      <ClassSchedule />
      <BmiCalculator />
      <Trainers />
      <Testimonials />
      <Pricing onSelectPlan={(plan) => openSignupWithPlan(plan)} />

      {/* High-Impact Membership CTA Banner */}
      <section className="py-24 bg-primary text-black relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-widest bg-black text-primary px-4 py-1.5 rounded-full mb-6">
            Limited Time Transformation Offer
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Ready To Push Your Limits?
          </h2>
          <p className="max-w-[620px] text-black/80 text-lg md:text-xl mb-10 font-medium leading-relaxed">
            Join Power GYM today and get your first month for only <span className="font-black text-black underline">₹99</span>. Includes 1-on-1 trainer consultation &amp; access to all 50+ weekly classes.
          </p>
          <button 
            onClick={() => openSignupWithPlan("Pro")}
            className="h-16 px-12 bg-black text-primary font-black text-base uppercase tracking-widest hover:bg-black/90 transition-all rounded-xl active:scale-95 shadow-2xl"
          >
            Claim Your ₹99 Offer Now
          </button>
        </div>
      </section>

      {/* Interactive Modals */}
      <MembershipModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        defaultPlan={signupPlan} 
      />

      <TrailerModal 
        isOpen={isTrailerOpen} 
        onClose={() => setIsTrailerOpen(false)} 
      />
    </main>
  );
}
