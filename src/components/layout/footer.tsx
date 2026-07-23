import Link from "next/link";
import { Globe, MessageSquare, Info, Share2, MapPin, Phone, Mail, ExternalLink, Crown } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-muted pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden border border-primary/50 bg-black p-0.5 shadow-[0_0_15px_rgba(204,255,0,0.2)]">
                <img 
                  src="/logo.svg" 
                  alt="Team Iron Fit Gym Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-white">
                Team Iron<span className="text-primary">Fit</span> Gym
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              New Delhi's premier bodybuilding &amp; fitness destination. Owned and led by Master Coach Sumit Khatri.
            </p>
            <div className="flex gap-4 pt-2">
              <Globe className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <MessageSquare className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Info className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Share2 className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="#amenities" className="text-sm text-muted-foreground hover:text-primary transition-colors">Amenities &amp; Iron Zone</Link></li>
              <li><Link href="#schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">Class Timetable</Link></li>
              <li><Link href="#trainers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Leadership &amp; Owner</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Membership Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Owner &amp; Leadership</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5"><Crown className="h-4 w-4 text-primary shrink-0" /><strong className="text-white">Sumit Khatri:</strong> Owner &amp; Head Trainer</li>
              <li><span className="text-primary font-bold">24/7 Gym Access Available</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact &amp; Location</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>
                  GN4, Basement Shivaji Enclave Extension, Near Khetarpal Nursing Home, Rajouri Garden, New Delhi, 110027
                </span>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.app.goo.gl/8pCV18VA9aVFsdoC9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                >
                  Open in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-muted/50">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+918383967686" className="hover:text-primary transition-colors font-bold text-white">+91 83839 67686</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@teamironfit.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Team Iron Fit Gym. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground font-semibold text-primary">Website Designed &amp; Developed by Kartik Chhabra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
