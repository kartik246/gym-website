import Link from "next/link";
import { Dumbbell, Globe, MessageSquare, Info, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-muted pt-16 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Dumbbell className="h-6 w-6 text-primary" />
              <span className="text-xl font-black uppercase tracking-tighter text-white">
                Power<span className="text-primary">Gym</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join the elite. Our mission is to provide the ultimate environment for physical and mental transformation. 
              Push your boundaries with us.
            </p>
            <div className="flex gap-4 pt-2">
              <Globe className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <MessageSquare className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Info className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Share2 className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#amenities" className="text-sm text-muted-foreground hover:text-primary transition-colors">Amenities</Link></li>
              <li><Link href="#schedule" className="text-sm text-muted-foreground hover:text-primary transition-colors">Class Schedule</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Membership</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Personal Training</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Location</h4>
            <p className="text-sm text-muted-foreground mb-4">
              123 Iron Street, Muscle Beach<br />
              Los Angeles, CA 90210
            </p>
            <p className="text-sm text-muted-foreground">
              Email: info@powergym.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Power Gym. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground font-semibold text-primary">made by Kartik Chhabra</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
