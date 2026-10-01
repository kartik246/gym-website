"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X, CheckCircle2, QrCode, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios" | "other">("android");
  const [activeTab, setActiveTab] = useState<"android" | "ios">("android");

  useEffect(() => {
    // Detect device OS
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || "";
      if (/iPad|iPhone|iPod/.test(ua)) {
        setPlatform("ios");
        setActiveTab("ios");
      } else if (/Android/.test(ua)) {
        setPlatform("android");
        setActiveTab("android");
      }

      // Check if already in standalone PWA mode
      const isStandalone = 
        window.matchMedia("(display-mode: standalone)").matches || 
        ("standalone" in window.navigator && Boolean((window.navigator as unknown as { standalone: boolean }).standalone));
      
      if (isStandalone) {
        setIsInstalled(true);
      }
    }

    // Capture beforeinstallprompt event for Chromium browsers
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    // Auto open popup after 2.5 seconds if not dismissed during current session
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("tif_pwa_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("tif_pwa_popup_dismissed", "true");
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt();
        const choice = await deferredPrompt.userChoice;
        if (choice.outcome === "accepted") {
          setIsInstalled(true);
        }
        setDeferredPrompt(null);
      } catch (err) {
        console.error("Install prompt error:", err);
      }
    } else {
      setActiveTab(platform === "ios" ? "ios" : "android");
    }
  };

  return (
    <>
      {/* Floating Trigger Badge on Screen Bottom Left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-primary text-black font-black uppercase text-xs tracking-wider rounded-full shadow-[0_0_25px_rgba(204,255,0,0.45)] hover:scale-105 active:scale-95 transition-all border border-black/10"
      >
        <Smartphone className="h-4 w-4" /> Add App to Screen
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-card border-2 border-primary/40 w-full max-w-md rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(204,255,0,0.2)] relative p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-5">
                {/* Header Icon */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary shrink-0 p-1 bg-black shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                    <Image 
                      src="/logo.jpg" 
                      alt="Team Iron Fit Logo" 
                      fill 
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 flex items-center gap-1 w-fit">
                      <Sparkles className="h-3 w-3" />
                      Official Web App (PWA)
                    </span>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight mt-1">
                      Team Iron<span className="text-primary">Fit</span>
                    </h3>
                    <p className="text-xs text-muted-foreground">Add to Phone Home Screen • No APK Needed</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 py-3 border-y border-muted text-xs">
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Works like an App directly from your Home Screen</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Instant Member QR Pass &amp; Gym Entry</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>0 MB storage, safe &amp; no unknown APK download warnings</span>
                  </div>
                </div>

                {/* Action & Instructions */}
                {isInstalled ? (
                  <div className="p-4 bg-primary/10 border border-primary rounded-2xl text-center space-y-3">
                    <div className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center mx-auto font-black text-lg">
                      ✓
                    </div>
                    <h4 className="text-sm font-black uppercase text-white">App Ready on Your Screen!</h4>
                    <p className="text-xs text-muted-foreground">
                      Team Iron Fit is saved on your device. You can open it anytime from your phone&apos;s home screen.
                    </p>
                    <Link
                      href="/member-pass"
                      onClick={handleDismiss}
                      className="w-full inline-flex items-center justify-center gap-2 h-11 bg-primary text-black font-black uppercase text-xs rounded-xl tracking-wider"
                    >
                      <QrCode className="h-4 w-4" /> View Member Digital Pass
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Primary Trigger / Install Button */}
                    {deferredPrompt ? (
                      <Button
                        onClick={handleInstallClick}
                        className="w-full text-black font-black uppercase tracking-wider h-13 text-sm shadow-xl bg-primary hover:bg-primary/90 active:scale-98"
                      >
                        <Smartphone className="mr-2 h-5 w-5" /> 1-Click Install to Phone
                      </Button>
                    ) : null}

                    {/* Step-by-Step Visual Instruction Box */}
                    <div className="bg-secondary/70 border border-muted/80 rounded-2xl p-4">
                      {/* Tabs */}
                      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-muted/60">
                        <button
                          onClick={() => setActiveTab("android")}
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg transition-colors ${
                            activeTab === "android"
                              ? "bg-primary text-black"
                              : "text-muted-foreground hover:text-white"
                          }`}
                        >
                          Android (Chrome)
                        </button>
                        <button
                          onClick={() => setActiveTab("ios")}
                          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg transition-colors ${
                            activeTab === "ios"
                              ? "bg-primary text-black"
                              : "text-muted-foreground hover:text-white"
                          }`}
                        >
                          iPhone (Safari)
                        </button>
                      </div>

                      {activeTab === "android" ? (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2 text-white">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                            <span>Chrome me upar right side <strong>3 dots (⋮)</strong> par tap karein.</span>
                          </div>
                          <div className="flex items-start gap-2 text-white">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                            <span>Menu se <strong>&quot;Install app&quot;</strong> ya <strong>&quot;Add to Home screen&quot;</strong> select karein.</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-xs">
                          <div className="flex items-start gap-2 text-white">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
                            <span>Safari me niche <strong>Share icon (⬆️)</strong> par tap karein.</span>
                          </div>
                          <div className="flex items-start gap-2 text-white">
                            <span className="w-5 h-5 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
                            <span>Niche scroll karke <strong>&quot;Add to Home Screen&quot; (➕)</strong> par tap karein.</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Member Pass Quick Link */}
                    <div className="flex items-center justify-between pt-1">
                      <Link
                        href="/member-pass"
                        onClick={handleDismiss}
                        className="text-xs text-primary hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <QrCode className="h-3.5 w-3.5" /> View Member QR Pass Directly
                      </Link>

                      <button
                        onClick={handleDismiss}
                        className="text-xs text-muted-foreground hover:text-white font-medium"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
