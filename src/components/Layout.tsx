import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-[#0f0402] relative">
      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1599380630804-d53ff9d10e08?q=80&w=2069&auto=format&fit=crop" 
          alt="Sauce background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[#0f0402]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0402]/50 via-transparent to-[#0f0402]/50"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
