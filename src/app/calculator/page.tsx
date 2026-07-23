import { BmiCalculator } from "@/components/sections/bmi-calculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fitness & BMI Calculator | Team Iron Fit Gym Rajouri Garden",
  description: "Calculate your Body Mass Index (BMI), BMR base, and daily target calorie intake for Fat Loss or Muscle Gain.",
};

export default function CalculatorPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Body Transformation Metrics
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            BMI &amp; Calorie Calculator
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Get instant personalized calorie targets tailored for your bodybuilding and fitness goals.
          </p>
        </div>
      </div>
      <BmiCalculator />
    </main>
  );
}
