"use client";

import { motion } from "framer-motion";
import { Star, Quote, TrendingUp, CheckCircle2, ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Devakshi Mehra",
    role: "Regular Member • Shivaji Enclave",
    avatar: "/images/avatars/devakshi_mehra.jpg",
    tag: "Safe & Supportive for Women",
    quote: "Best workout place for girls as it has a very good and safe environment. Good crowd. All trainers are very kind, supportive and encouraging as they all ensure you achieve the best of your abilities. Must join Iron Fit Gym!",
    source: "Google Maps Review",
    rating: 5,
  },
  {
    name: "G Singh Bhamra",
    role: "Visiting Athlete • UK Powerlifter",
    avatar: "/images/avatars/singh_bhamra.jpg",
    tag: "Hardcore Powerlifting & Heavy Iron",
    quote: "I've been training for over 20 years in the UK. When I visit India, it was a concern to find a hardcore gym with heavy weights for powerlifting. Team Iron Fit gym accommodated with excellent equipment, clean gym, customer service, and great atmosphere. My wife trained with me too. This is my go-to gym and will 100% visit again.",
    source: "Google Maps Review",
    rating: 5,
  },
  {
    name: "Sumit Anand",
    role: "PT Client • 6 Months",
    avatar: "/images/avatars/sumit_anand.jpg",
    tag: "Posture Correction & Guidance",
    quote: "The best thing about this gym is it has good space and glooming interior. A great variety of machines for weight training and cardiovascular activities. Was there for 6 months, taken guidance from Head Coach Sumit (such a humble guy) — he helped me in correcting my form and posture with in-depth knowledge about diets. Highly recommended!",
    source: "Google Maps Review",
    rating: 5,
  },
  {
    name: "Vivek Kumar",
    role: "Transformation Client",
    avatar: "/images/avatars/vivek_kumar.jpg",
    tag: "Natural Body Re-composition",
    quote: "Nice place, great vibe. Head Coach Sumit is very humble and has deep knowledge — champion of global titles. Took PT for 6 months without any drugs or push selling of products. He made me look better with dedicated diet and focused training. 100% personal attention on floor.",
    source: "Google Maps Review",
    rating: 5,
  },
  {
    name: "Kusum Jha",
    role: "Member • Personal Training",
    avatar: "/images/avatars/kusum_jha.jpg",
    tag: "Dedicated Results & Form",
    quote: "I can't say enough good things about Team Iron Fit! Clean, well-equipped, and welcoming atmosphere. A huge shoutout to Coach Sumit Khatri who has been instrumental in my fitness journey with personalized training plans and ensuring proper form.",
    source: "Google Maps Review",
    rating: 5,
  },
  {
    name: "Vinay Sora",
    role: "Strength & Competition Lifter",
    avatar: "/images/avatars/vinay_sora.jpg",
    tag: "Top-Tier Machines & Vibe",
    quote: "Good experience with the machines — all are in very good condition and spacious. Great gym to achieve your fitness goals and for competition level. Coach Sumit Khatri is very friendly and always ready to help with great fitness knowledge.",
    source: "Google Maps Review",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/40 relative border-y border-muted" id="results">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" /> 100% Real Member Feedback
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            Verified <span className="text-primary italic">Reviews</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[620px]">
            Real reviews directly from Google Maps and Magicpin by local Rajouri Garden residents and international lifters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-card border border-muted p-7 rounded-2xl flex flex-col justify-between relative group hover:border-primary/40 transition-colors shadow-lg"
            >
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/30 transition-colors">
                <Quote className="h-10 w-10" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-primary">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full border border-muted">
                    <CheckCircle2 className="h-3 w-3 text-primary" /> Verified
                  </span>
                </div>

                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-black uppercase tracking-wider rounded-full mb-4">
                  {item.tag}
                </span>

                <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-muted flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-primary/50 bg-secondary shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if avatar fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <h4 className="font-black text-white text-sm uppercase tracking-tight truncate">{item.name}</h4>
                  <p className="text-[11px] text-muted-foreground truncate">{item.role}</p>
                </div>

                <a
                  href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-white transition-colors"
                  title="View on Google Maps"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
