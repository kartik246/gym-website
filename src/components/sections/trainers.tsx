"use client";

import { motion } from "framer-motion";
import { Dumbbell, Award, Flame, Share2, Globe, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const trainers = [
  {
    name: "Sumit Khatri",
    role: "Owner & Head Master Trainer",
    spec: "Heavy Lifting & Bodybuilding",
    exp: "12+ Yrs Experience",
    bio: "Founder, Owner & Head Coach of Team Iron Fit Gym. Master specialist in extreme strength gains, heavy barbells, deadlift PRs, and body re-composition.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
    badge: "Owner & Head Coach",
    isOwner: true,
  },
  {
    name: "Kartik Chhabra",
    role: "Fitness Specialist & Tech Director",
    spec: "Cardio & Digital Experience",
    exp: "8+ Yrs Experience",
    bio: "Dedicated fitness enthusiast and lead digital architect driving Team Iron Fit Gym's high-tech training systems and member experience.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    badge: "Fitness Specialist",
    isOwner: false,
  },
  {
    name: "Marcus Vance",
    role: "Senior Combat Coach",
    spec: "Boxing, Kickboxing & Agility",
    exp: "10+ Yrs Experience",
    bio: "Pro fighter teaching explosive boxing movement, hand-eye coordination, and core stamina under Team Iron Fit direction.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
    badge: "Senior Coach",
    isOwner: false,
  },
];

export function Trainers() {
  return (
    <section className="py-24 bg-black relative" id="trainers">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Award className="h-4 w-4" /> Leadership &amp; Coaching
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Meet The <span className="text-primary italic">Leadership</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[600px]">
            Owned and led by Master Coach <strong className="text-white">Sumit Khatri</strong>. Built for real strength and dedicated results.
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
              className={`bg-secondary/60 border hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col justify-between ${
                trainer.isOwner ? "border-primary shadow-[0_0_25px_rgba(204,255,0,0.15)]" : "border-muted"
              }`}
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
                  
                  <span className={`absolute top-4 left-4 font-black text-xs uppercase px-3 py-1 rounded-full flex items-center gap-1.5 ${
                    trainer.isOwner ? "bg-primary text-black" : "bg-black/80 text-white border border-white/20"
                  }`}>
                    {trainer.isOwner && <Crown className="h-3.5 w-3.5 fill-black" />}
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
                  {trainer.isOwner ? "Book Session with Owner" : "Book 1-on-1 Session"}
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
