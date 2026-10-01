"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, User, CheckCircle2, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const classes = [
  {
    id: 1,
    name: "Olympic Barbells & Power Squat",
    instructor: "Sumit Khatri",
    time: "06:30 AM - 08:00 AM",
    category: "Strength",
    difficulty: "Advanced",
    image: "/images/gym/gym_real_27.jpg",
  },
  {
    id: 2,
    name: "Cardio & High-Incline HIIT",
    instructor: "Sumit Khatri",
    time: "08:30 AM - 09:30 AM",
    category: "Cardio",
    difficulty: "Intermediate",
    image: "/images/gym/gym_real_4.jpg",
  },
  {
    id: 3,
    name: "Posture, Form & Mobility Clinic",
    instructor: "Sumit Khatri",
    time: "05:00 PM - 06:00 PM",
    category: "Wellness",
    difficulty: "All Levels",
    image: "/images/gym/gym_real_5.jpg",
  },
  {
    id: 4,
    name: "Spin Cycling Cadence Blast",
    instructor: "Sumit Khatri",
    time: "06:30 PM - 07:30 PM",
    category: "Cardio",
    difficulty: "Intermediate",
    image: "/images/gym/gym_real_11.jpg",
  },
  {
    id: 5,
    name: "FitLine Plate-Loaded Hypertrophy",
    instructor: "Sumit Khatri",
    time: "07:30 PM - 09:00 PM",
    category: "Strength",
    difficulty: "Elite",
    image: "/images/gym/gym_real_25.jpg",
  },
  {
    id: 6,
    name: "Heavy Dumbbells & Arm Conditioning",
    instructor: "Sumit Khatri",
    time: "09:00 PM - 10:00 PM",
    category: "Strength",
    difficulty: "Advanced",
    image: "/images/gym/gym_real_1.jpg",
  },
];

const categories = ["All", "Strength", "Cardio", "Wellness"];

export function ClassSchedule() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [bookedClasses, setBookedClasses] = useState<number[]>([]);

  const filteredClasses = classes.filter(
    (c) => activeCategory === "All" || c.category === activeCategory
  );

  const toggleBooking = (id: number) => {
    if (bookedClasses.includes(id)) {
      setBookedClasses(bookedClasses.filter((bid) => bid !== id));
    } else {
      setBookedClasses([...bookedClasses, id]);
    }
  };

  return (
    <section className="py-24 bg-secondary/30" id="schedule">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
              <Flame className="h-4 w-4" /> Timetable
            </span>
            <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">Class Schedule</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full text-xs font-black uppercase tracking-wider"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="bg-card border-muted hover:border-primary/50 transition-all flex flex-col h-full overflow-hidden group">
                  {/* Thumbnail Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="text-xs font-black uppercase tracking-widest text-black bg-primary px-2.5 py-1 rounded">
                        {item.category}
                      </span>
                    </div>

                    <span className="absolute top-3 right-3 text-xs text-white bg-black/70 backdrop-blur-md uppercase font-bold px-2.5 py-1 rounded border border-white/10">
                      {item.difficulty}
                    </span>
                  </div>

                  <CardHeader className="pt-4">
                    <CardTitle className="text-xl font-black uppercase tracking-tight text-white group-hover:text-primary transition-colors">
                      {item.name}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow space-y-2 pt-0">
                    <div className="flex items-center text-xs text-muted-foreground font-semibold">
                      <Clock className="mr-2 h-4 w-4 text-primary shrink-0" />
                      {item.time}
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground font-semibold">
                      <User className="mr-2 h-4 w-4 text-primary shrink-0" />
                      Instructor: <span className="text-white ml-1 font-bold">{item.instructor}</span>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-2">
                    <Button 
                      className="w-full text-xs font-black uppercase tracking-wider text-black" 
                      variant={bookedClasses.includes(item.id) ? "outline" : "primary"}
                      onClick={() => toggleBooking(item.id)}
                    >
                      {bookedClasses.includes(item.id) ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                          <span className="text-white">Class Booked</span>
                        </>
                      ) : (
                        "Book Class Pass"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
