"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, MapPin, ExternalLink, X, Maximize2, Sparkles, CheckCircle2 } from "lucide-react";

interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  category: "Iron" | "Cardio" | "Community" | "Facility";
  desc: string;
  isHero?: boolean;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    src: "/images/gym/main_1.jpg",
    title: "Main Gym Workout Floor",
    category: "Facility",
    desc: "Spacious main workout arena with dumbbells, power racks, and workout stations.",
    isHero: true,
  },
  {
    id: 2,
    src: "/images/gym/main_2.jpg",
    title: "Heavy Iron & Machine Arena",
    category: "Iron",
    desc: "Plate-loaded machines, Olympic benches, and cable crossover workout floor.",
    isHero: true,
  },
  {
    id: 3,
    src: "/images/gym/main_3.jpg",
    title: "Complete Strength Arena",
    category: "Iron",
    desc: "Extensive selection of commercial strength and muscle-building equipment.",
  },
  {
    id: 4,
    src: "/images/gym/entry.jpg",
    title: "Facility Entrance & Welcome Arena",
    category: "Facility",
    desc: "Entrance of Team Iron Fit Gym, basement GN4 Shivaji Enclave Extension.",
  },
  {
    id: 5,
    src: "/images/gym/gym_real_1.jpg",
    title: "Heavy Dumbbells & Free Weights",
    category: "Iron",
    desc: "Pairs of solid rubber-coated dumbbells up to 40kg+ with rubber matting.",
  },
  {
    id: 6,
    src: "/images/gym/gym_real_4.jpg",
    title: "Commercial Power Cardio Arena",
    category: "Cardio",
    desc: "Heavy-duty commercial running treadmills and curved manual runners.",
  },
  {
    id: 7,
    src: "/images/gym/gym_real_5.jpg",
    title: "Machine & Equipment Circuit",
    category: "Iron",
    desc: "High quality isolation and compound workout machines on the gym floor.",
  },
  {
    id: 8,
    src: "/images/gym/gym_real_11.jpg",
    title: "High-Cadence Spin Cycling Fleet",
    category: "Cardio",
    desc: "Precision flywheel spin bikes with adjustable resistance for HIIT.",
  },
  {
    id: 9,
    src: "/images/gym/gym_real_22.jpg",
    title: "Plate-Loaded Muscle Stations",
    category: "Iron",
    desc: "Precision machines engineered for smooth, safe, heavy lifting.",
  },
  {
    id: 10,
    src: "/images/gym/gym_real_24.jpg",
    title: "Heavy Leg Press & Squat Station",
    category: "Iron",
    desc: "Commercial 45-degree heavy leg press and power rack stations.",
  },
  {
    id: 11,
    src: "/images/gym/gym_real_25.jpg",
    title: "FitLine Strength & Isolation Zone",
    category: "Iron",
    desc: "Targeted lat pulldown, chest press, and row machines.",
  },
  {
    id: 12,
    src: "/images/gym/gym_real_26.jpg",
    title: "NORTUS Smith Machine & Cable Arena",
    category: "Iron",
    desc: "Heavy linear-bearing Smith machine and cable towers.",
  },
  {
    id: 13,
    src: "/images/gym/gym_real_27.jpg",
    title: "Olympic Barbell Squat Rack",
    category: "Iron",
    desc: "Barbell power cages for deadlifts, squats, and overhead presses.",
  },
  {
    id: 14,
    src: "/images/gym/gym_real_28.jpg",
    title: "Training Floor View",
    category: "Facility",
    desc: "Well-lit and ventilated gym floor designed for serious lifting.",
  },
  {
    id: 15,
    src: "/images/gym/gym_real_29.webp",
    title: "In-House Sports Nutrition Counter",
    category: "Facility",
    desc: "100% genuine certified whey proteins, pre-workouts, and BCAAs.",
  },
  {
    id: 16,
    src: "/images/gym/official_logo.jpg",
    title: "Team Iron Fit Official Crest",
    category: "Facility",
    desc: "Official gym brand logo and identity badge.",
  },
];

const categories = ["All", "Iron", "Cardio", "Community", "Facility"];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const filteredPhotos = galleryPhotos.filter(
    (photo) => selectedCategory === "All" || photo.category === selectedCategory
  );

  return (
    <section className="py-24 bg-secondary/30 relative border-t border-muted" id="gallery">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-3 flex items-center gap-2">
              <Camera className="h-4 w-4" /> 100% Real Facility Photography
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
              Inside <span className="text-primary italic">Team Iron Fit</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-[620px] text-sm md:text-base">
              Actual photos taken directly inside our GN4 Basement gym in Shivaji Enclave Extension. No stock imagery — see the real iron, machines, and member atmosphere.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary border border-muted hover:border-primary/50 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" /> View on Google Maps <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  : "bg-card text-muted-foreground hover:text-white border border-muted"
              }`}
            >
              {cat === "Iron" ? "Heavy Iron & Machines" : cat === "Cardio" ? "Cardio & Spin" : cat}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                onClick={() => setActivePhoto(photo)}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer border border-muted hover:border-primary/60 transition-all duration-300 bg-card shadow-lg ${
                  photo.isHero ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <div className={`w-full overflow-hidden ${photo.isHero ? "h-80 sm:h-[460px]" : "h-64"}`}>
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-wider text-primary">
                  <CheckCircle2 className="h-3 w-3 text-primary" /> Real Photo
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 bg-primary text-black rounded-full shadow-lg">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                    {photo.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight group-hover:text-primary transition-colors">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activePhoto && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setActivePhoto(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-card border border-primary/40 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActivePhoto(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 bg-black/70 hover:bg-black text-white rounded-full transition-colors border border-white/20"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="max-h-[70vh] w-auto max-w-full object-contain"
                  />
                </div>

                <div className="p-6 bg-secondary/90 border-t border-muted flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-widest text-black bg-primary px-2.5 py-0.5 rounded">
                        {activePhoto.category}
                      </span>
                      <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" /> Team Iron Fit Gym, Shivaji Enclave
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight">
                      {activePhoto.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                      {activePhoto.desc}
                    </p>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-black font-black uppercase text-xs tracking-wider rounded-xl hover:bg-primary/90 transition-all shrink-0"
                  >
                    View on Maps <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
