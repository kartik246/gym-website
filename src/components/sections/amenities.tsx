"use client";

import { Dumbbell, Flame, Trophy, Zap, HeartPulse, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const amenities = [
  {
    title: "Dumbbells & Free Weights",
    subtitle: "5kg – 75kg Heavy Rack",
    description: "Solid rubber-coated dumbbells, hex dumbbells, kettlebells, and heavy-duty adjustable benches.",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    badge: "Equipment",
    icon: Dumbbell,
  },
  {
    title: "Olympic Power Racks",
    subtitle: "Eleiko & Hammer Strength",
    description: "Professional power cages, deadlift platforms, bumper plates, and competition Olympic bars.",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80",
    badge: "Bodybuilding",
    icon: Trophy,
  },
  {
    title: "Pro Cardio Arena",
    subtitle: "Interactive Performance Floor",
    description: "High-tech treadmills, StairMasters, Assault AirBikes, and Concept2 rowing machines with heart monitors.",
    image: "https://images.unsplash.com/photo-1576678927484-cc909957088c?auto=format&fit=crop&w=800&q=80",
    badge: "Conditioning",
    icon: Flame,
  },
  {
    title: "Bodybuilding Cable Zone",
    subtitle: "Isolation Machines",
    description: "8-stack cable crossovers, lat pulldowns, seated rows, leg presses, and hack squats for maximum hypertrophy.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    badge: "Hypertrophy",
    icon: Zap,
  },
  {
    title: "Recovery & Spa Lounge",
    subtitle: "Infrared Sauna & Plunge",
    description: "Post-workout recovery zone featuring infrared sauna, cold plunge tubs, and perc-massage therapy tools.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    badge: "Wellness",
    icon: HeartPulse,
  },
  {
    title: "Combat & Turf Arena",
    subtitle: "Heavy Bags & Sled Track",
    description: "40m artificial turf track, heavy punching bags, battle ropes, and plyometric boxes for explosive power.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
    badge: "Functional",
    icon: Clock,
  },
];

export function Amenities() {
  return (
    <section className="py-24 bg-black relative" id="amenities">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> 15,000 SQ FT Facility
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            World-Class <span className="text-primary italic">Equipment &amp; Arenas</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[640px]">
            Equipped with top-tier heavy iron, dumbbells, cables, and recovery suites for bodybuilders and athletes.
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
