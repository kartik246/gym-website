import { Amenities } from "@/components/sections/amenities";
import { Gallery } from "@/components/sections/gallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Gym Photos & Equipment | Team Iron Fit Gym Rajouri Garden",
  description: "Explore authentic photos of Team Iron Fit Gym at Shivaji Enclave, featuring heavy dumbbells up to 40kg+, NORTUS Smith machines, 45° leg press, cardio treadmills, and spin bikes.",
};

export default function AmenitiesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Iron Zone &amp; Facilities
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            State-Of-The-Art Equipment
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Equipped for bodybuilders, athletes, and fitness enthusiasts at Shivaji Enclave, Rajouri Garden.
          </p>
        </div>
      </div>
      <Amenities />
      <Gallery />
    </main>
  );
}
