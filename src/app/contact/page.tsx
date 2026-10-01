"use client";

import { MapPin, Phone, Mail, Clock, ExternalLink, Send, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen flex-col bg-black pt-20">
      <div className="bg-secondary/40 py-12 border-b border-muted">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            Visit &amp; Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mt-4">
            Rajouri Garden Location
          </h1>
          <p className="text-muted-foreground mt-3 max-w-[600px] mx-auto text-sm md:text-base">
            Visit Team Iron Fit Gym at Shivaji Enclave Extension, New Delhi or call us directly.
          </p>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details Card */}
            <div className="lg:col-span-5 space-y-8 bg-card border border-muted p-8 rounded-2xl">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Dumbbell className="h-5 w-5 text-primary" />
                  <span className="text-xs font-black uppercase tracking-widest text-primary">Gym Location</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">Team Iron Fit Gym</h3>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-xs tracking-wider mb-1">Address</strong>
                    <p className="text-muted-foreground leading-relaxed">
                      GN4, Basement Shivaji Enclave Extension,<br />
                      Near Khetarpal Nursing Home,<br />
                      Rajouri Garden, New Delhi, Delhi 110027
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mt-2 hover:underline"
                    >
                      Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-4 border-y border-muted">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <strong className="text-white block uppercase text-xs tracking-wider">Phone &amp; WhatsApp</strong>
                    <div className="flex flex-col gap-1">
                      <a href="tel:+919910416468" className="text-lg font-black text-primary hover:underline">
                        +91 99104 16468
                      </a>
                      <a href="tel:+919821811951" className="text-sm font-bold text-white hover:text-primary">
                        +91 98218 11951
                      </a>
                      <a 
                        href="https://wa.me/919910416468?text=Hi%20Team%20Iron%20Fit%20Gym%2C%20I%20want%20to%20inquire%20about%20membership" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary font-bold hover:underline mt-1"
                      >
                        💬 Chat Directly on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-xs tracking-wider">Operating Hours</strong>
                    <p className="text-muted-foreground text-xs mt-1">
                      Mon – Sat: 05:30 AM – 11:00 PM<br />
                      Sunday: 08:00 AM – 12:00 PM &amp; 04:00 PM – 08:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="lg:col-span-7 bg-secondary/40 border border-muted p-8 rounded-2xl">
              <h3 className="text-2xl font-black uppercase text-white tracking-tight mb-2">Send an Inquiry</h3>
              <p className="text-xs text-muted-foreground mb-6">Have a question for Owner Sumit Khatri? Send your message directly.</p>

              {submitted ? (
                <div className="p-6 bg-primary/10 border border-primary rounded-xl text-center space-y-3">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary text-black px-3 py-1 rounded-full">Message Sent</span>
                  <h4 className="text-xl font-bold text-white">Thank You!</h4>
                  <p className="text-xs text-muted-foreground">Owner Sumit Khatri will contact you at {formData.phone || "your number"}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99104 16468"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">Message / Inquiry *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Ask about personal training with Sumit Khatri, timing, or membership offer..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black border border-muted rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <Button type="submit" className="w-full text-black font-black uppercase tracking-wider h-12">
                    <Send className="mr-2 h-4 w-4" /> Send Inquiry to Owner
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
