"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Download, X, CheckCircle2, QrCode, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not dismissed in session
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem("tif_app_popup_dismissed");
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("tif_app_popup_dismissed", "true");
  };

  const handleStartDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          setDownloadComplete(true);

          // Create dynamic simulated APK download file
          const element = document.createElement("a");
          const file = new Blob([
            "Team Iron Fit Gym Official Android APK Package\nVersion: 2.4.0\nPackage: com.teamironfit.gym\nLocation: Rajouri Garden, New Delhi"
          ], { type: "application/vnd.android.package-archive" });
          element.href = URL.createObjectURL(file);
          element.download = "TeamIronFitGym_v2.4.apk";
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);

          return 100;
        }
        return prev + 25;
      });
    }, 300);
  };

  return (
    <>
      {/* Floating Trigger Badge on Screen Bottom Left */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-primary text-black font-black uppercase text-xs tracking-wider rounded-full shadow-[0_0_25px_rgba(204,255,0,0.4)] hover:scale-105 active:scale-95 transition-all"
      >
        <Smartphone className="h-4 w-4" /> Download App (APK)
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-card border-2 border-primary/40 w-full max-w-md rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(204,255,0,0.2)] relative p-6 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6">
                {/* Header Icon */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 p-2 shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                    <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      Official Mobile App
                    </span>
                    <h3 className="text-xl font-black uppercase text-white tracking-tight mt-1">
                      Team Iron<span className="text-primary">Fit</span> APK
                    </h3>
                    <p className="text-xs text-muted-foreground">Version 2.4.0 • Android &amp; iOS</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 py-3 border-y border-muted text-xs">
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Instant 24/7 Turnstile QR Code Access</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Live Class Booking &amp; Instructor Chat</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white font-medium">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span>Owner Notifications &amp; Daily Workout Logs</span>
                  </div>
                </div>

                {/* Download State */}
                {downloadComplete ? (
                  <div className="p-4 bg-primary/10 border border-primary rounded-2xl text-center space-y-2">
                    <div className="w-10 h-10 bg-primary text-black rounded-full flex items-center justify-center mx-auto font-black">
                      ✓
                    </div>
                    <h4 className="text-sm font-black uppercase text-white">APK Downloaded Successfully!</h4>
                    <p className="text-[11px] text-muted-foreground">
                      Open <strong className="text-primary">TeamIronFitGym_v2.4.apk</strong> in your files to install. Allow "Install from unknown sources".
                    </p>
                    <Button onClick={handleDismiss} className="w-full mt-2 text-black font-black uppercase text-xs">
                      Got It &amp; Close
                    </Button>
                  </div>
                ) : isDownloading ? (
                  <div className="space-y-2 text-center py-2">
                    <div className="flex justify-between text-xs text-muted-foreground font-bold">
                      <span>Downloading TeamIronFitGym_v2.4.apk...</span>
                      <span className="text-primary">{downloadProgress}%</span>
                    </div>
                    <div className="w-full bg-secondary h-3 rounded-full overflow-hidden border border-muted">
                      <div 
                        className="bg-primary h-full transition-all duration-300 shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                        style={{ width: `${downloadProgress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button
                      onClick={handleStartDownload}
                      className="w-full text-black font-black uppercase tracking-wider h-13 text-sm shadow-xl"
                    >
                      <Download className="mr-2 h-5 w-5" /> Download App (Direct APK)
                    </Button>

                    <div className="flex justify-between items-center text-[11px] text-muted-foreground font-semibold px-1">
                      <span>File size: 14.8 MB</span>
                      <span>Safe &amp; Verified</span>
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
