"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, User, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const classes = [
  {
    id: 1,
    name: "Heavy Lifting",
    instructor: "Alex 'The Tank' Rivera",
    time: "08:00 AM - 09:30 AM",
    category: "Strength",
    difficulty: "Advanced",
  },
  {
    id: 2,
    name: "HIIT Blast",
    instructor: "Sarah Jenkins",
    time: "10:00 AM - 11:00 AM",
    category: "Cardio",
    difficulty: "Intermediate",
  },
  {
    id: 3,
    name: "Zen Yoga",
    instructor: "Elena Vance",
    time: "05:00 PM - 06:00 PM",
    category: "Wellness",
    difficulty: "All Levels",
  },
  {
    id: 4,
    name: "Power Boxing",
    instructor: "Mike Tyson Jr.",
    time: "06:30 PM - 07:30 PM",
    category: "Cardio",
    difficulty: "Intermediate",
  },
  {
    id: 5,
    name: "Body Rebuild",
    instructor: "David Goggins Clone",
    time: "05:00 AM - 07:00 AM",
    category: "Strength",
    difficulty: "Elite",
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
    <section className="py-24 bg-black" id="schedule">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Timetable</h2>
            <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">Class Schedule</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
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
                <Card className="bg-secondary border-muted flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground uppercase font-bold">
                        {item.difficulty}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-2 h-4 w-4 text-primary" />
                        {item.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-2 h-4 w-4 text-primary" />
                        Instructor: {item.instructor}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant={bookedClasses.includes(item.id) ? "outline" : "primary"}
                      onClick={() => toggleBooking(item.id)}
                    >
                      {bookedClasses.includes(item.id) ? (
                        <>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Booked
                        </>
                      ) : (
                        "Book Class"
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
