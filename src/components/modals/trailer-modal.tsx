"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Volume2, Flame } from "lucide-react";

interface TrailerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrailerModal({ isOpen, onClose }: TrailerModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-secondary border border-primary/40 w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(204,255,0,0.2)] relative"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white bg-black/60 hover:bg-black rounded-full transition-colors z-20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            {/* Embedded High-Energy Workout Trailer Video */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/eaRQF-7hhmo?autoplay=1&mute=0&controls=1&rel=0"
              title="Team Iron Fit Gym Official Facility Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-6 bg-card flex flex-col md:flex-row items-center justify-between gap-4 border-t border-muted">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Official Facility Video
                </span>
              </div>
              <h3 className="text-xl font-black uppercase text-white tracking-tight mt-1">
                Push Your Limits — Experience Team Iron Fit Gym
              </h3>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-primary text-black font-black uppercase text-xs tracking-wider rounded-xl hover:bg-primary/90 transition-all"
            >
              Start Free Trial Now
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
