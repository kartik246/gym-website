import { ClassSchedule } from "@/components/sections/class-schedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Class Schedule & Timetable | Team Iron Fit Gym Rajouri Garden",
  description: "View daily class timetable for Heavy Lifting, Dumbbell HIIT, Zen Yoga, and Power Boxing at Team Iron Fit Gym.",
};

export default function SchedulePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Daily Workout Timetable
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            Class Schedule &amp; Passes
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Book your session pass with expert instructors led by Owner &amp; Head Master Trainer Sumit Khatri.
          </p>
        </div>
      </div>
      <ClassSchedule />
    </main>
  );
}
