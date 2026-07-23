import Link from "next/link";
import { Dumbbell, Globe, MessageSquare, Info, Share2, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-muted pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
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
              <li><Link href="#trainers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Coaches</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Membership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Coaches &amp; Programs</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><strong className="text-white">Sumit Khatri:</strong> Heavy Lifting Lead</li>
              <li><strong className="text-white">Kartik Chhabra:</strong> Cardio &amp; HIIT Lead</li>
              <li><strong className="text-white">Marcus Vance:</strong> Combat &amp; Boxing</li>
              <li><span className="text-primary font-bold">24/7 Access Included</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact &amp; Location</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-1" />
                <span>Rajouri Garden, New Delhi, 110018</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+918383967686" className="hover:text-primary transition-colors font-bold text-white">+91 83839 67686</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info@powergym.com</span>
              </div>
            </div>
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
