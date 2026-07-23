"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Kapoor",
    role: "Member for 1.5 Years",
    tag: "Lost 22 kg & Built Muscle",
    quote: "Power GYM completely reprogrammed my mindset. The trainers don't let you quit, and the high-octane community environment pushes you past what you thought was possible.",
    stats: "-22 kg Fat / +6 kg Muscle",
    rating: 5,
  },
  {
    name: "Ananya Deshmukh",
    role: "Pro Member — 8 Months",
    tag: "Marathon & Endurance Goal",
    quote: "The HIIT conditioning and personalized nutrition planning gave me the stamina to complete my first ultra-marathon in under 4 hours. Absolute game changer!",
    stats: "+40% VO2 Max Stamina",
    rating: 5,
  },
  {
    name: "Vikram Malhotra",
    role: "Elite Member — 2 Years",
    tag: "Powerlifting PR Champion",
    quote: "State-of-the-art heavy lifting gear, deadlift platforms, and world-class strength coaching. My deadlift PR went from 140kg to 230kg within a single year.",
    stats: "+90 kg Deadlift PR",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/40 relative border-y border-muted" id="results">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> Real Member Results
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Proven <span className="text-primary italic">Transformations</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[600px]">
            Don't take our word for it — see how dedicated effort and expert guidance transform lives every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="bg-card border border-muted p-8 rounded-2xl flex flex-col justify-between relative group hover:border-primary/40 transition-colors"
            >
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote className="h-10 w-10" />
              </div>

              <div>
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-black uppercase tracking-wider rounded-full mb-4">
                  {item.tag}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-muted flex items-center justify-between">
                <div>
                  <h4 className="font-black text-white text-base uppercase tracking-tight">{item.name}</h4>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-primary bg-secondary px-2.5 py-1 rounded border border-primary/20">
                    {item.stats}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
