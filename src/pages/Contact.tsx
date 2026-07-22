import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-transparent min-h-screen py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/5 to-[#ffcd00]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-6">Let's <span className="text-[#ff4e00]">Connect</span></h1>
          <p className="text-lg text-white/70 font-light">
            Have a question about our sauces? Want to stock Dippis Garden in your store? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 bg-black/40 text-white p-10 flex flex-col justify-between border-r border-white/10">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full shrink-0 border border-white/10">
                    <Phone className="w-6 h-6 text-[#ff4e00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-1">Phone</h3>
                    <p className="text-white font-medium">+92 333 4269008</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full shrink-0 border border-white/10">
                    <Mail className="w-6 h-6 text-[#ff4e00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-1">Email</h3>
                    <p className="text-white font-medium">DippisGarden@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 p-3 rounded-full shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6 text-[#ff4e00]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-white/70 mb-1">Office</h3>
                    <p className="text-white/90 font-light leading-relaxed">
                      45 link Shujah colony<br />
                      G T road lahore
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-[11px] text-white/50 uppercase tracking-widest leading-relaxed">
                <strong className="text-white">Operating Hours:</strong><br />
                Mon - Fri: 9:00 AM - 6:00 PM<br />
                Sat: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#ff4e00] focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#ff4e00] focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#ff4e00] focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-[#1a0805] border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-[#ff4e00] focus:border-transparent transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Wholesale / Stockist</option>
                  <option>Product Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-white/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-[#ff4e00] focus:border-transparent transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black font-black uppercase tracking-wider rounded-full transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)] flex items-center justify-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
