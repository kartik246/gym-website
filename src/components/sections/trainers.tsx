"use client";

import { motion } from "framer-motion";
import { Dumbbell, Award, Flame, Share2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainers = [
  {
    name: "Sumit Khatri",
    role: "Head Heavy Lifting & Power Coach",
    spec: "Heavy Lifting & Powerlifting",
    exp: "12+ Yrs Experience",
    bio: "Olympic-level heavy lifting master specializing in extreme strength gains, heavy barbells, deadlift PRs, and muscle hypertrophy.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    badge: "Heavy Lifting Master",
  },
  {
    name: "Kartik Chhabra",
    role: "Lead Cardio & Functional HIIT Coach",
    spec: "Cardio, HIIT & Fat Burn",
    exp: "10+ Yrs Experience",
    bio: "Certified sports conditioning expert specializing in high-octane cardio, fat burn, stamina, VO2 Max, and metabolic agility.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    badge: "Cardio Lead",
  },
  {
    name: "Marcus Vance",
    role: "Combat & Boxing Coach",
    spec: "Boxing, Kickboxing & Agility",
    exp: "10+ Yrs Experience",
    bio: "Pro Golden Gloves champion teaching explosive movement, hand-eye coordination, and core stamina.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    badge: "Pro Fighter",
  },
];

export function Trainers() {
  return (
    <section className="py-24 bg-black relative" id="trainers">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Award className="h-4 w-4" /> World-Class Coaching
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Meet The <span className="text-primary italic">Coaches</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[600px]">
            Trained by champions, built for results. Work 1-on-1 with industry elite who push you beyond limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-secondary/60 border border-muted hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-72 w-full overflow-hidden bg-muted">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-primary text-black font-black text-xs uppercase px-3 py-1 rounded-full">
                    {trainer.badge}
                  </span>
                </div>

                {/* Trainer Info */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                      {trainer.name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mt-1">
                      {trainer.role}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-semibold py-2 border-y border-muted/50">
                    <span className="flex items-center gap-1">
                      <Dumbbell className="h-3.5 w-3.5 text-primary" /> {trainer.spec}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5 text-primary" /> {trainer.exp}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {trainer.bio}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <Button className="w-full text-xs font-black uppercase tracking-wider text-black" size="sm">
                  Book 1-on-1 Session
                </Button>
                <div className="flex gap-2 text-muted-foreground">
                  <button className="p-2 hover:text-primary transition-colors" aria-label="Share">
                    <Share2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:text-primary transition-colors" aria-label="Website">
                    <Globe className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
