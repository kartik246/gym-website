"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Trophy, Flame, Star, MapPin } from "lucide-react";

interface HeroProps {
  onOpenSignup: () => void;
  onOpenTrailer: () => void;
}

export function Hero({ onOpenSignup, onOpenTrailer }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black pt-28 pb-12">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/gym/main_1.jpg"
          alt="Team Iron Fit Gym Floor Interior"
          className="w-full h-full object-cover opacity-35 scale-105 filter brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.25, 1],
          rotate: [0, 90, 0],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary rounded-full blur-[150px] z-0 pointer-events-none"
      />

      <div className="container relative z-10 px-4 md:px-6 mx-auto flex flex-col items-center text-center my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-black tracking-widest uppercase bg-primary text-black rounded-full shadow-[0_0_20px_rgba(204,255,0,0.4)]">
            🔥 Team Iron Fit Gym &amp; Supplements
          </span>
          <a 
            href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-secondary hover:bg-secondary/80 text-white rounded-full border border-muted transition-colors"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" /> Shivaji Enclave, Rajouri Garden, New Delhi
          </a>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]"
        >
          Push Your <span className="text-primary italic">Limits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl mb-10 leading-relaxed font-medium"
        >
          Welcome to <strong className="text-white">Team Iron Fit Gym</strong> in Shivaji Enclave, Rajouri Garden. Real iron, heavy dumbbells up to 40kg, commercial cardio, and genuine results led by Owner &amp; Champion Coach <strong className="text-primary">Sumit Khatri</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="group text-black font-black uppercase tracking-wider h-14 px-8" onClick={onOpenSignup}>
            Join Team Iron Fit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <a href="#gallery">
            <Button size="lg" variant="outline" className="h-14 px-8 border-muted text-white hover:border-primary w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5 fill-primary text-primary" />
              View Real Gym Photos
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Key Performance Stats Bar */}
      <div className="container relative z-10 px-4 md:px-6 mx-auto mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-secondary/80 border border-muted/80 backdrop-blur-md rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3 p-2">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-black text-white">1,200+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Local Members</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-black text-white">Sumit Khatri</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Champion Head Coach</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Flame className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-black text-white">40 kg+</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Heavy Free Iron</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Star className="h-6 w-6 fill-primary" />
            </div>
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-black text-white">4.9 ★</div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Google Maps (100+)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
