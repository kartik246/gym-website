import { Hero } from "@/components/sections/hero";
import { Amenities } from "@/components/sections/amenities";
import { ClassSchedule } from "@/components/sections/class-schedule";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Amenities />
      <ClassSchedule />
      <Pricing />
      
      {/* Membership CTA Section */}
      <section className="py-24 bg-primary text-black">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            Ready to Transform?
          </h2>
          <p className="max-w-[600px] text-black/80 text-lg md:text-xl mb-10 font-medium">
            Join Power GYM today and get your first month for only ₹99. Limited time offer for new members.
          </p>
          <button className="h-16 px-12 bg-black text-white font-black uppercase tracking-widest hover:bg-black/90 transition-all rounded-md active:scale-95 shadow-lg">
            Claim Your Offer
          </button>
        </div>
      </section>
    </main>
  );
}
