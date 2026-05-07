import Link from "next/link";
import { Camera, Link as LinkIcon, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-white/70 pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-3xl tracking-widest uppercase text-white group-hover:text-luxury-gold transition-colors duration-300">
              Ishrat's
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-sans mt-1">
              Hair & Skin Studio
            </span>
          </Link>
          <p className="font-sans text-sm leading-relaxed max-w-xs">
            Where luxury meets artistry. Experience the finest in hair styling, skincare, and bridal transformations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-6">Explore</h4>
          <ul className="space-y-4 font-sans text-sm">
            <li><Link href="#about" className="hover:text-luxury-gold transition-colors">About Us</Link></li>
            <li><Link href="#services" className="hover:text-luxury-gold transition-colors">Our Services</Link></li>
            <li><Link href="#gallery" className="hover:text-luxury-gold transition-colors">Portfolio</Link></li>
            <li><Link href="#stylists" className="hover:text-luxury-gold transition-colors">The Team</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-6">Contact</h4>
          <ul className="space-y-4 font-sans text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-luxury-gold shrink-0 mt-0.5" />
              <span>1/2 Lord Sinha Road, Elgin,<br/>Kolkata, West Bengal 700071</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-luxury-gold shrink-0" />
              <div className="flex flex-col">
                <span>+91 9831196890</span>
                <span>033 4600 5825</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-luxury-gold shrink-0" />
              <span>info@ishratstudio.com</span>
            </li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="font-sans text-sm tracking-widest uppercase text-white mb-6">Connect</h4>
          <div className="flex gap-4 mb-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300">
              <Camera size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold hover:text-white transition-all duration-300">
              <LinkIcon size={18} />
            </a>
          </div>
          <p className="font-sans text-xs mb-3">Subscribe to our newsletter</p>
          <div className="flex border-b border-white/30 pb-2">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none w-full text-sm font-sans text-white placeholder-white/40" />
            <button className="text-luxury-gold uppercase text-xs tracking-widest hover:text-white transition-colors">Join</button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
        <p>&copy; {new Date().getFullYear()} Ishrat's Hair And Skin Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
