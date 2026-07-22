import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/images/dippis_logo_enhanced_1784706689059.jpg';

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-gradient-to-r from-[#ffcd00] via-[#ffb000] to-[#ff9500] pt-16 pb-8 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-start mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col space-y-4 lg:col-span-4">
            {/* Header row aligned with other column titles */}
            <div className="h-8 flex items-center">
              <Link to="/" className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0 group">
                <img
                  src={logoImg}
                  alt="Dippis Gardens Logo"
                  className="h-10 sm:h-11 xl:h-12 w-auto object-contain mix-blend-multiply shrink-0 transition-transform group-hover:scale-105"
                />
                <span className="text-lg sm:text-xl xl:text-2xl font-bold font-serif tracking-wider text-black leading-none whitespace-nowrap">
                  DIPPIS GARDENS
                </span>
              </Link>
            </div>
            
            <p className="text-sm text-black/80 leading-relaxed font-medium pt-1 max-w-sm">
              Real Ingredients. Garden Fresh. We bring bold flavors and authentic taste to every meal.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-black/80 hover:text-[#ff4e00] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-black/80 hover:text-[#ff4e00] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 border border-black/10 flex items-center justify-center text-black/80 hover:text-[#ff4e00] transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-4 lg:col-span-2">
            <div className="h-8 flex items-center">
              <h3 className="font-black text-black tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-2.5 pt-1">
              <li>
                <Link to="/" className="text-black/80 hover:text-black font-bold text-sm transition-colors block py-0.5 whitespace-nowrap">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-black/80 hover:text-black font-bold text-sm transition-colors block py-0.5 whitespace-nowrap">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-black/80 hover:text-black font-bold text-sm transition-colors block py-0.5 whitespace-nowrap">
                  Shop Sauces
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black/80 hover:text-black font-bold text-sm transition-colors block py-0.5 whitespace-nowrap">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-black/80 hover:text-black font-bold text-sm transition-colors block py-0.5 whitespace-nowrap">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="h-8 flex items-center">
              <h3 className="font-black text-black tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">
                Contact Us
              </h3>
            </div>
            <ul className="space-y-3.5 pt-1">
              <li className="flex items-start gap-3 text-sm text-black/80 font-medium">
                <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <span>45 link Shujah colony<br />G T road lahore</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black/80 font-medium">
                <Phone className="w-5 h-5 text-black shrink-0" />
                <span className="whitespace-nowrap">+92 333 4269008</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black/80 font-medium">
                <Mail className="w-5 h-5 text-black shrink-0" />
                <span className="break-all sm:break-normal whitespace-nowrap">DippisGarden@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="h-8 flex items-center">
              <h3 className="font-black text-black tracking-widest uppercase text-xs sm:text-sm whitespace-nowrap">
                Newsletter
              </h3>
            </div>
            <div className="pt-1 space-y-3">
              <p className="text-sm text-black/80 font-medium leading-relaxed">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-black/5 border border-black/10 rounded-md px-4 py-2 text-sm text-black placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-[#ff4e00] w-full"
                />
                <button 
                  type="submit" 
                  className="bg-[#ff4e00] hover:bg-black text-white rounded-md px-4 py-2 text-sm font-bold transition-colors w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-bold">
          <p className="text-black/70 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Dippis Gardens (PVT) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-black/70">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
