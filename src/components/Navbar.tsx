import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/dippis_logo_enhanced_1784706689059.jpg';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Track Order', path: '/track' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-gradient-to-r from-[#ffcd00] via-[#ffb000] to-[#ff9500] sticky top-0 z-50 shrink-0 border-b border-black/10 shadow-md">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Brand Section */}
            <div className="flex items-center shrink-0">
              <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
                <img src={logoImg} alt="Dippis Gardens Logo" className="h-12 md:h-14 w-auto object-contain mix-blend-multiply shrink-0" />
                <span className="text-xl sm:text-2xl font-bold font-serif tracking-wider text-black leading-none whitespace-nowrap">DIPPIS GARDENS</span>
              </Link>
            </div>

            {/* Desktop Center Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-6 lg:mx-10 space-x-8 lg:space-x-9">
              {links.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-2 text-sm font-bold uppercase tracking-widest transition-colors hover:text-black whitespace-nowrap flex items-center ${
                      active ? 'text-black' : 'text-black/70'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <motion.div
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0 inset-x-0 h-[2.5px] bg-black rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop Cart Action */}
            <div className="hidden md:flex items-center shrink-0 ml-4 lg:ml-8">
              <Link to="/cart" className="relative flex items-center gap-2 bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full border border-black/10 transition-colors text-black font-bold">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">Cart {cartCount > 0 ? `(${cartCount})` : ''}</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-4">
              <Link to="/cart" className="relative p-2 text-black/70 hover:text-black transition-colors">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black/70 hover:text-black focus:outline-none transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#ffcd00] border-t border-black/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-bold uppercase tracking-widest ${
                    isActive(link.path)
                      ? 'bg-black/10 text-black'
                      : 'text-black/70 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Running Strip */}
      <div className="bg-[#0F0A08] text-[#ffcd00] py-2 overflow-hidden border-b border-white/10 relative">
        <div className="whitespace-nowrap flex animate-[slide_30s_linear_infinite]">
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="flex items-center">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8 text-xs font-bold uppercase tracking-widest shrink-0">
                🎉 10% discount on first 10 customer orders
              </span>
            ))}
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}
