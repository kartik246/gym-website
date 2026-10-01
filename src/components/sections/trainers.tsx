"use client";

import { motion } from "framer-motion";
import { Dumbbell, Award, Flame, Crown, MessageCircle, Phone, MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";

export function Trainers() {
  const whatsappUrl = "https://wa.me/919910416468?text=" + encodeURIComponent("Hello Coach Sumit, I would like to book a 1-on-1 consultation and training session at Team Iron Fit Gym.");

  const pillars = [
    {
      icon: Dumbbell,
      title: "1-on-1 Form & Posture Correction",
      desc: "Direct personal supervision on heavy compound lifts, squats, deadlifts, and cable biomechanics to ensure maximum hypertrophy without injuries.",
    },
    {
      icon: Flame,
      title: "Custom Natural Nutrition & Diets",
      desc: "Tailored daily meal and macro splits designed for your specific body composition and schedule — 100% natural without aggressive product selling.",
    },
    {
      icon: Award,
      title: "12+ Years Championship Coaching",
      desc: "Champion of title-winning bodybuilding and powerlifting techniques, dedicated to drug-free muscle growth, fat loss, and strength PRs.",
    },
    {
      icon: HeartHandshake,
      title: "Direct Owner Accountability",
      desc: "Sumit Khatri personally manages the training floor from morning to night. No intermediate or rotating trainers — work directly with the gym owner.",
    },
  ];

  return (
    <section className="py-24 bg-black relative" id="trainers">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Award className="h-4 w-4" /> Personal Mentorship &amp; Leadership
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Meet Your <span className="text-primary italic">Head Coach</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[650px] text-sm md:text-base leading-relaxed">
            At Team Iron Fit Gym, there are no rotating or temporary trainers. Founder &amp; Champion Coach <strong className="text-white">Sumit Khatri</strong> personally leads and manages the entire facility and trains every member directly.
          </p>
        </div>

        {/* Coach Spotlight Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-secondary via-card to-black border-2 border-primary/40 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(204,255,0,0.12)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Crown className="h-72 w-72 text-primary" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Official Emblem & Coach Title */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-6 bg-secondary/60 rounded-2xl border border-muted/80">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-primary p-2 bg-black shadow-[0_0_30px_rgba(204,255,0,0.25)] mb-4">
                <Image
                  src="/images/gym/official_logo.jpg"
                  alt="Team Iron Fit Official Crest"
                  fill
                  className="object-contain p-2"
                />
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary text-black font-black text-xs uppercase tracking-wider rounded-full shadow-md mb-2">
                <Crown className="h-3.5 w-3.5 fill-black" /> Sole Owner &amp; Head Coach
              </span>

              <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                Sumit Khatri
              </h3>
              
              <p className="text-xs font-bold uppercase tracking-widest text-primary mt-1">
                Founder • Master Strength Coach
              </p>

              <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground font-semibold py-3 my-3 border-y border-muted/60 w-full">
                <span>12+ Yrs Experience</span>
                <span>•</span>
                <span>Champion Mentor</span>
                <span>•</span>
                <span>Delhi, India</span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Personally guiding athletes, beginners, and fitness enthusiasts at GN4 Basement, Shivaji Enclave Extension, Rajouri Garden.
              </p>

              <div className="w-full space-y-2 pt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 bg-[#25D366] hover:bg-[#20ba59] text-black font-black text-xs uppercase tracking-wider rounded-xl transition-colors shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" /> Chat with Sumit on WhatsApp
                </a>

                <a
                  href="tel:+919910416468"
                  className="w-full inline-flex items-center justify-center gap-2 h-10 border border-muted hover:border-primary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-primary" /> Call +91 99104 16468
                </a>
              </div>
            </div>

            {/* Right: 4 Core Pillars of 1-on-1 Mentorship */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Dedicated Gym Floor Supervision
                </span>
                <h4 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mt-3">
                  Why Members Train Directly with Sumit Khatri
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed">
                  Unlike commercial commercial gyms with junior staff, Coach Sumit personally attends to every individual on the gym floor — ensuring proper lifting posture, correct weight progression, and drug-free body transformations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {pillars.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-secondary/50 border border-muted/80 hover:border-primary/50 transition-all space-y-2 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <h5 className="text-sm font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-10">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-xs text-white font-medium">
                    Meet Sumit Khatri at the gym today for a free floor tour and form assessment.
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-black font-black text-xs uppercase tracking-wider rounded-xl hover:bg-primary/90 transition-all shrink-0 shadow-md"
                >
                  <MapPin className="h-3.5 w-3.5" /> Visit in Person
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
