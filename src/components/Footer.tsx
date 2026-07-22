import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/images/dippis_logo_enhanced_1784706689059.jpg';

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-gradient-to-r from-[#ffcd00] via-[#ffb000] to-[#ff9500] pt-16 pb-8 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 shrink-0 group mb-6">
              <img src={logoImg} alt="Dippis Gardens Logo" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply shrink-0" />
              <span className="text-xl sm:text-2xl font-bold font-serif tracking-wider text-black leading-none whitespace-nowrap">DIPPIS GARDENS</span>
            </Link>
            <p className="text-sm text-black/80 leading-relaxed font-medium">
              Real Ingredients. Garden Fresh. We bring bold flavors and authentic taste to every meal.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-black/70 hover:text-[#ff4e00] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-black/70 hover:text-[#ff4e00] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-black/70 hover:text-[#ff4e00] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-black tracking-widest uppercase text-[11px] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-black/80 hover:text-black font-bold text-sm transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-black/80 hover:text-black font-bold text-sm transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-black/80 hover:text-black font-bold text-sm transition-colors">Shop Sauces</Link></li>
              <li><Link to="/contact" className="text-black/80 hover:text-black font-bold text-sm transition-colors">Contact</Link></li>
              <li><Link to="/track" className="text-black/80 hover:text-black font-bold text-sm transition-colors">Track Order</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-black text-black tracking-widest uppercase text-[11px] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-black/80 font-medium">
                <MapPin className="w-5 h-5 text-black shrink-0" />
                <span>45 link Shujah colony<br />G T road lahore</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black/80 font-medium">
                <Phone className="w-5 h-5 text-black shrink-0" />
                <span>+92 333 4269008</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-black/80 font-medium">
                <Mail className="w-5 h-5 text-black shrink-0" />
                <span>DippisGarden@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-black text-black tracking-widest uppercase text-[11px] mb-6">Newsletter</h3>
            <p className="text-sm text-black/80 mb-4 font-medium">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black/5 border border-black/10 rounded-md px-4 py-2 text-sm text-black placeholder:text-black/40 focus:outline-none focus:ring-1 focus:ring-[#ff4e00]"
              />
              <button 
                type="button" 
                className="bg-[#ff4e00] hover:bg-black text-white rounded-md px-4 py-2 text-sm font-bold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>
        
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest font-bold">
          <p className="text-black/60">
            &copy; {new Date().getFullYear()} Dippis Gardens (PVT) Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-black/60">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
