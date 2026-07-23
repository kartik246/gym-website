"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Flame, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BmiCalculator() {
  const [height, setHeight] = useState<number>(175);
  const [weight, setWeight] = useState<number>(72);
  const [age, setAge] = useState<number>(25);
  const [gender, setGender] = useState<"male" | "female">("male");
  const [goal, setGoal] = useState<"loss" | "gain" | "fitness">("gain");

  // Calculate BMI
  const heightMeters = height / 100;
  const bmi = weight > 0 && heightMeters > 0 ? (weight / (heightMeters * heightMeters)).toFixed(1) : "0.0";
  const bmiNum = parseFloat(bmi);

  let category = "Normal";
  let catColor = "text-primary";
  if (bmiNum < 18.5) {
    category = "Underweight";
    catColor = "text-blue-400";
  } else if (bmiNum >= 18.5 && bmiNum < 25) {
    category = "Normal & Fit";
    catColor = "text-primary";
  } else if (bmiNum >= 25 && bmiNum < 30) {
    category = "Overweight";
    catColor = "text-amber-400";
  } else if (bmiNum >= 30) {
    category = "Obese";
    catColor = "text-red-500";
  }

  // Estimated BMR / Calories
  const bmr = gender === "male" 
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;
  const maintenance = Math.round(bmr * 1.55);
  
  let targetCalories = maintenance;
  if (goal === "loss") targetCalories = Math.round(maintenance - 400);
  if (goal === "gain") targetCalories = Math.round(maintenance + 400);

  return (
    <section className="py-24 bg-gradient-to-b from-black via-secondary/40 to-black relative" id="bmi-calc">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
            <Calculator className="h-4 w-4" /> Personal Metrics
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight">
            BMI &amp; Calorie <span className="text-primary italic">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[600px]">
            Input your metrics to get instant personalized fitness targets designed for your transformation goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Input Controls */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-card border border-muted p-6 md:p-8 rounded-2xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`flex-1 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all border ${
                    gender === "male"
                      ? "bg-primary text-black border-primary font-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "bg-secondary text-muted-foreground border-muted hover:text-white"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`flex-1 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition-all border ${
                    gender === "female"
                      ? "bg-primary text-black border-primary font-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                      : "bg-secondary text-muted-foreground border-muted hover:text-white"
                  }`}
                >
                  Female
                </button>
              </div>

              {/* Sliders */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider">Height</span>
                  <span className="text-primary font-black text-base">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full accent-primary bg-secondary h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider">Weight</span>
                  <span className="text-primary font-black text-base">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-primary bg-secondary h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground font-medium uppercase tracking-wider">Age</span>
                  <span className="text-primary font-black text-base">{age} yrs</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-primary bg-secondary h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Fitness Goal Selection */}
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground block mb-3">
                  Fitness Target Goal
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setGoal("loss")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                      goal === "loss"
                        ? "bg-primary/20 text-primary border-primary"
                        : "bg-secondary text-muted-foreground border-muted hover:border-primary/40"
                    }`}
                  >
                    Fat Loss
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal("gain")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                      goal === "gain"
                        ? "bg-primary/20 text-primary border-primary"
                        : "bg-secondary text-muted-foreground border-muted hover:border-primary/40"
                    }`}
                  >
                    Muscle Gain
                  </button>
                  <button
                    type="button"
                    onClick={() => setGoal("fitness")}
                    className={`py-3 px-2 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all ${
                      goal === "fitness"
                        ? "bg-primary/20 text-primary border-primary"
                        : "bg-secondary text-muted-foreground border-muted hover:border-primary/40"
                    }`}
                  >
                    Endurance
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Summary Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-secondary via-black to-card border border-primary/30 p-6 md:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <Trophy className="h-40 w-40 text-primary" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                Your Calculated Result
              </span>

              <div className="mt-8 mb-6">
                <div className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Body Mass Index</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-6xl font-black text-white">{bmi}</span>
                  <span className={`text-lg font-black uppercase ${catColor}`}>{category}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-muted mb-6">
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5 text-primary" /> Daily Target
                  </div>
                  <div className="text-2xl font-black text-white mt-1">{targetCalories} <span className="text-xs font-normal text-muted-foreground">kcal</span></div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold">BMR Base</div>
                  <div className="text-2xl font-black text-white mt-1">{Math.round(bmr)} <span className="text-xs font-normal text-muted-foreground">kcal</span></div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {goal === "gain" 
                  ? "Recommended: Heavy Lifting & Pro Membership plan with high-protein nutritional guidance."
                  : goal === "loss"
                  ? "Recommended: HIIT Blast & Cardio Conditioning with calorie deficit coaching."
                  : "Recommended: Hybrid Strength & Functional Conditioning for peak endurance."}
              </p>
            </div>

            <Button className="w-full mt-8 group text-black font-black uppercase tracking-wider" size="lg">
              Get Custom Training Plan
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
