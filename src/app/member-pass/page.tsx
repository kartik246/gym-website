"use client";

import { useState, useEffect } from "react";
import { QrCode, Scan, CheckCircle2, ShieldAlert, Dumbbell, User, Sparkles, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MemberPassPage() {
  const [memberName, setMemberName] = useState("Vikram Sharma");
  const [passId, setPassId] = useState("TIF-8849-2026");
  const [planType, setPlanType] = useState("Pro Membership (24/7 Access)");
  const [scanStatus, setScanStatus] = useState<"idle" | "scanning" | "success" | "denied">("idle");
  const [lastCheckinTime, setLastCheckinTime] = useState<string | null>(null);

  useEffect(() => {
    const savedName = localStorage.getItem("tif_member_name");
    if (savedName) setMemberName(savedName);
  }, []);

  const handleSimulateScan = () => {
    setScanStatus("scanning");
    setTimeout(() => {
      const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastCheckinTime(now);
      setScanStatus("success");

      // Save checkin log to localStorage for Owner Dashboard
      const logs = JSON.parse(localStorage.getItem("tif_checkin_logs") || "[]");
      const newEntry = {
        id: Date.now(),
        memberName: memberName,
        passId: passId,
        planType: planType,
        time: now,
        status: "APPROVED",
        location: "Rajouri Garden Gate 1",
      };
      localStorage.setItem("tif_checkin_logs", JSON.stringify([newEntry, ...logs.slice(0, 19)]));
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Member Mobile Access Digital QR System
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            Digital QR Access Pass
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Scan your unique QR code at the turnstile for automated 24/7 entry into Team Iron Fit Gym.
          </p>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Digital Pass Card */}
            <div className="md:col-span-6 bg-gradient-to-br from-secondary via-card to-black border-2 border-primary/40 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_50px_rgba(204,255,0,0.12)]">
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <Dumbbell className="h-60 w-60 text-primary" />
              </div>

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-muted/80 pb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl border border-primary/50 bg-black p-0.5">
                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tighter text-lg text-white">Team Iron<span className="text-primary">Fit</span></h3>
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest block">Digital Entry Badge</span>
                  </div>
                </div>

                <span className="px-3 py-1 bg-primary text-black font-black text-[11px] uppercase tracking-wider rounded-full shadow-md">
                  Active
                </span>
              </div>

              {/* QR Code Center Box */}
              <div className="my-8 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border-4 border-primary shadow-xl">
                <div className="relative p-2 bg-white rounded-lg">
                  {/* SVG Mock QR Code */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-48 h-48 text-black">
                    <path fill="currentColor" d="M10,10 h60 v60 h-60 z M25,25 h30 v30 h-30 z M130,10 h60 v60 h-60 z M145,25 h30 v30 h-30 z M10,130 h60 v60 h-60 z M25,145 h30 v30 h-30 z M90,10 h20 v30 h-20 z M90,60 h20 v20 h-20 z M10,90 h30 v20 h-30 z M50,90 h20 v40 h-20 z M90,90 h40 v40 h-40 z M140,90 h50 v20 h-50 z M150,130 h40 v20 h-40 z M100,140 h30 v50 h-30 z M140,160 h50 v30 h-50 z" />
                  </svg>
                </div>
                <span className="text-xs font-mono font-bold text-black tracking-widest mt-3">{passId}</span>
              </div>

              {/* Pass Footer */}
              <div className="space-y-2 pt-4 border-t border-muted/80 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase font-bold">Member Name</span>
                  <span className="font-bold text-white text-sm">{memberName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase font-bold">Access Tier</span>
                  <span className="font-bold text-primary">{planType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground uppercase font-bold">Facility Location</span>
                  <span className="text-white">Rajouri Garden, New Delhi</span>
                </div>
              </div>
            </div>

            {/* Turnstile Scanner Simulator */}
            <div className="md:col-span-6 bg-card border border-muted p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Scan className="h-5 w-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">Turnstile Entry Scanner</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">Gate Entry Simulator</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Test your mobile QR scanner entry. Upon scanning, access is authorized and Owner <strong className="text-white">Sumit Khatri</strong> receives an instant entry notification log.
                </p>

                <div className="mt-8 p-6 bg-secondary/80 border border-muted rounded-2xl text-center space-y-4">
                  {scanStatus === "idle" && (
                    <div className="py-6 space-y-3">
                      <QrCode className="h-14 w-14 text-primary mx-auto animate-pulse" />
                      <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Ready to Scan QR Pass</p>
                    </div>
                  )}

                  {scanStatus === "scanning" && (
                    <div className="py-6 space-y-3">
                      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                      <p className="text-xs text-primary uppercase font-black tracking-widest">Validating QR Access Token...</p>
                    </div>
                  )}

                  {scanStatus === "success" && (
                    <div className="py-6 space-y-3 animate-in zoom-in duration-300">
                      <div className="w-14 h-14 bg-primary/20 text-primary border border-primary rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-black bg-primary px-3 py-1 rounded-full">
                        ENTRY ACCESS GRANTED
                      </span>
                      <h4 className="text-lg font-black text-white">Welcome, {memberName}!</h4>
                      <p className="text-xs text-muted-foreground">Checked in at {lastCheckinTime} • Notification sent to Owner Sumit Khatri.</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-muted">
                <Button 
                  onClick={handleSimulateScan}
                  disabled={scanStatus === "scanning"}
                  className="w-full text-black font-black uppercase tracking-wider h-14 text-sm"
                >
                  <Scan className="mr-2 h-5 w-5" /> Simulate QR Scanner Check-in
                </Button>

                <div className="flex justify-between items-center text-xs">
                  <Link href="/owner-dashboard" className="text-primary hover:underline font-bold flex items-center gap-1">
                    View Owner Dashboard <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <span className="text-muted-foreground">Digital Pass Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
