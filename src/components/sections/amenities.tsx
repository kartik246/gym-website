"use client";

import { Dumbbell, Flame, Trophy, Zap, HeartPulse, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Heavy Dumbbells & Free Weights",
    subtitle: "Pairs up to 40kg+ & Interlocking Rubber Mats",
    description: "Solid rubber-coated dumbbells, Olympic curl bars, adjustable incline & flat benches on heavy shock-absorbing tiles.",
    image: "/images/gym/gym_real_7.jpg",
    badge: "Free Weights",
    icon: Dumbbell,
  },
  {
    title: "Olympic Squat Rack & 45° Leg Press",
    subtitle: "Powerlifting & Heavy Legs",
    description: "Heavy barbell power racks, Olympic bar, 45-degree plate-loaded leg press, and seated leg extension / curl machines.",
    image: "/images/gym/gym_real_27.jpg",
    badge: "Strength",
    icon: Trophy,
  },
  {
    title: "Commercial Power Cardio Arena",
    subtitle: "Heavy-Duty Treadmills & Curve Mill",
    description: "Commercial multi-speed Power treadmills with incline controls and curved non-motorized HIIT manual runners.",
    image: "/images/gym/gym_real_4.jpg",
    badge: "Cardio",
    icon: Flame,
  },
  {
    title: "Plate-Loaded Muscle Arena",
    subtitle: "FitLine & Heavy Isolation Racks",
    description: "Heavy plate-loaded chest press, seated row, lat pulldowns, and Olympic plate stacks for targeted hypertrophy.",
    image: "/images/gym/gym_real_25.jpg",
    badge: "Hypertrophy",
    icon: Zap,
  },
  {
    title: "Smith Machine & Cable Zone",
    subtitle: "NORTUS Precision Racks & Benches",
    description: "NORTUS linear-bearing Smith machine, cable crossovers with multi-grip chin-up bars, and ab workout benches.",
    image: "/images/gym/gym_real_26.jpg",
    badge: "Isolation",
    icon: HeartPulse,
  },
  {
    title: "Dedicated Spin Cycling Studio",
    subtitle: "High-Cadence Flywheel Spin Bikes",
    description: "Line of precision flywheel spin bikes for cardio endurance, along with on-site certified sports supplements store.",
    image: "/images/gym/gym_real_11.jpg",
    badge: "Endurance",
    icon: Clock,
  },
];

export function Amenities() {
  return (
    <section className="py-24 bg-black relative" id="amenities">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Real Facility Tour
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Authentic <span className="text-primary italic">Iron &amp; Equipment</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[640px]">
            Equipped with NORTUS &amp; FitLine plate-loaded machines, Olympic racks, commercial treadmills, and heavy free weights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-muted hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-56 w-full overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-black/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 bg-primary text-black font-black text-xs uppercase px-3 py-1 rounded-full shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{item.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
