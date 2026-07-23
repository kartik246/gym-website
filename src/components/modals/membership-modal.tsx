"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Dumbbell, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function MembershipModal({ isOpen, onClose, defaultPlan = "Pro" }: MembershipModalProps) {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ptAddon: false,
    lockerAddon: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const plansData: Record<string, { price: string; desc: string }> = {
    Basic: { price: "1,499", desc: "Access to gym floor & standard lockers" },
    Pro: { price: "2,999", desc: "24/7 Access + Unlimited Group Classes" },
    Elite: { price: "4,999", desc: "All Pro Features + Spa & 4x Personal Training" },
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsSuccess(true);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSuccess(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-card border border-primary/30 w-full max-w-lg rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.15)] relative"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white transition-colors z-10"
          >
            <X className="h-5 w-5" />
          </button>

          {isSuccess ? (
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 bg-primary/20 text-primary border border-primary rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Registration Complete
                </span>
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mt-4">
                  Welcome to Team Iron Fit!
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Your pass for the <span className="text-primary font-bold">{selectedPlan} Plan</span> has been generated. Confirmation sent to {formData.email || "your email"}.
                </p>
              </div>

              <div className="p-4 bg-secondary rounded-xl text-xs space-y-2 text-left border border-muted">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member:</span>
                  <span className="font-bold text-white">{formData.name || "New Member"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Plan Selected:</span>
                  <span className="font-bold text-primary">₹{plansData[selectedPlan]?.price} / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-bold text-white">Shivaji Enclave, Rajouri Garden</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pass Code:</span>
                  <span className="font-mono font-bold text-white">TIF-2026-X88</span>
                </div>
              </div>

              <Button className="w-full text-black font-black uppercase tracking-wider" onClick={resetAndClose}>
                Done &amp; Close Pass
              </Button>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              {/* Header */}
              <div className="p-6 bg-secondary/80 border-b border-muted">
                <div className="flex items-center gap-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">
                    Step {step} of 2 — Team Iron Fit Pass
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight mt-1">
                  {step === 1 ? "Choose Your Plan" : "Member Information"}
                </h3>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {step === 1 ? (
                  <div className="space-y-4">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block">
                      Select Membership Tier
                    </label>
                    {Object.entries(plansData).map(([planName, details]) => (
                      <div
                        key={planName}
                        onClick={() => setSelectedPlan(planName)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          selectedPlan === planName
                            ? "bg-primary/10 border-primary text-white shadow-[0_0_15px_rgba(204,255,0,0.1)]"
                            : "bg-secondary/40 border-muted text-muted-foreground hover:border-primary/40"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-black uppercase tracking-tight text-base text-white">
                              {planName} Plan
                            </span>
                            {planName === "Pro" && (
                              <span className="text-[10px] font-black uppercase tracking-wider bg-primary text-black px-2 py-0.5 rounded">
                                Recommended
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{details.desc}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-black text-primary">₹{details.price}</span>
                          <span className="text-[10px] block text-muted-foreground">/mo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 83839 67686"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-secondary border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                      />
                    </div>

                    {/* Add-ons */}
                    <div className="pt-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                        Optional Add-ons
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-secondary rounded-xl cursor-pointer border border-muted hover:border-primary/40 mb-2">
                        <input
                          type="checkbox"
                          checked={formData.ptAddon}
                          onChange={(e) => setFormData({ ...formData, ptAddon: e.target.checked })}
                          className="accent-primary h-4 w-4"
                        />
                        <span className="text-xs font-medium text-white">
                          Personal Trainer (Sumit / Kartik) (+₹499)
                        </span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-secondary rounded-xl cursor-pointer border border-muted hover:border-primary/40">
                        <input
                          type="checkbox"
                          checked={formData.lockerAddon}
                          onChange={(e) => setFormData({ ...formData, lockerAddon: e.target.checked })}
                          className="accent-primary h-4 w-4"
                        />
                        <span className="text-xs font-medium text-white">
                          Dedicated VIP Locker (+₹299/mo)
                        </span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 bg-secondary/40 border-t border-muted flex items-center justify-between">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-white"
                  >
                    ← Back
                  </button>
                )}
                <Button className="ml-auto text-black font-black uppercase tracking-wider">
                  {step === 1 ? "Continue to Details →" : "Confirm & Claim Membership"}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
