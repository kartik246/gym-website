"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { Amenities } from "@/components/sections/amenities";
import { Gallery } from "@/components/sections/gallery";
import { ClassSchedule } from "@/components/sections/class-schedule";
import { BmiCalculator } from "@/components/sections/bmi-calculator";
import { Trainers } from "@/components/sections/trainers";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { MembershipModal } from "@/components/modals/membership-modal";
import { TrailerModal } from "@/components/modals/trailer-modal";
import { MessageCircle, Phone, MapPin } from "lucide-react";

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupPlan, setSignupPlan] = useState("3 to 6-Month Transformation");
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const openSignupWithPlan = (plan: string = "3 to 6-Month Transformation") => {
    setSignupPlan(plan);
    setIsSignupOpen(true);
  };

  const whatsappUrl = "https://wa.me/919910416468?text=" + encodeURIComponent("Hi Sumit ji, I want to know about current membership plans and offers at Team Iron Fit Gym.");

  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero 
        onOpenSignup={() => openSignupWithPlan("3 to 6-Month Transformation")} 
        onOpenTrailer={() => setIsTrailerOpen(true)} 
      />
      <Amenities />
      <Gallery />
      <ClassSchedule />
      <BmiCalculator />
      <Trainers />
      <Testimonials />
      <Pricing onSelectPlan={(plan) => openSignupWithPlan(plan)} />

      {/* High-Impact Membership Referral CTA Banner */}
      <section className="py-24 bg-primary text-black relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-xs font-black uppercase tracking-widest bg-black text-primary px-4 py-1.5 rounded-full mb-6">
            Direct Owner Referral &amp; Consultation
          </span>
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
            Ready To Start Your Transformation?
          </h2>
          <p className="max-w-[680px] text-black/90 text-lg md:text-xl mb-10 font-semibold leading-relaxed">
            Membership rates &amp; discount packages change regularly. Contact Owner &amp; Head Coach <strong className="text-black underline">Sumit Khatri</strong> directly on WhatsApp, Call, or visit the gym in person to get today&apos;s best customized rate.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl justify-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-14 px-8 bg-black text-primary hover:bg-black/90 transition-all rounded-xl active:scale-95 shadow-2xl flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wider"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            <a 
              href="tel:+919910416468"
              className="w-full sm:w-auto h-14 px-8 bg-black/10 hover:bg-black/20 border-2 border-black text-black transition-all rounded-xl active:scale-95 flex items-center justify-center gap-2 font-black text-sm uppercase tracking-wider"
            >
              <Phone className="h-5 w-5" />
              Call Sumit (+91 99104 16468)
            </a>

            <a 
              href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto h-14 px-6 bg-transparent hover:bg-black/10 text-black transition-all rounded-xl flex items-center justify-center gap-1.5 font-bold text-xs uppercase tracking-wider"
            >
              <MapPin className="h-4 w-4" />
              Visit Gym
            </a>
          </div>
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
