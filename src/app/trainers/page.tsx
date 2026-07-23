import { Trainers } from "@/components/sections/trainers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Owner & Master Coaches | Team Iron Fit Gym Rajouri Garden",
  description: "Meet Owner & Head Master Trainer Sumit Khatri and the leadership team at Team Iron Fit Gym, Rajouri Garden.",
};

export default function TrainersPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Leadership &amp; Master Coaching
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            Meet Owner Sumit Khatri
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Work 1-on-1 with Owner &amp; Head Master Trainer Sumit Khatri for extreme strength gains and body re-composition.
          </p>
        </div>
      </div>
      <Trainers />
    </main>
  );
}
