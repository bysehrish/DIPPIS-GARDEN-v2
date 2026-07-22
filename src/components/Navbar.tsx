import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4">
            {/* Brand Section - Positioned on the left */}
            <div className="flex items-center min-w-0 shrink">
              <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 group min-w-0">
                <img
                  src={logoImg}
                  alt="Dippis Gardens Logo"
                  className="h-9 sm:h-11 md:h-14 w-auto object-contain mix-blend-multiply shrink-0 transition-transform group-hover:scale-105"
                />
                <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-serif tracking-wider text-black leading-none whitespace-nowrap truncate">
                  DIPPIS GARDENS
                </span>
              </Link>
            </div>

            {/* Desktop Navigation - Positioned on the opposite side with consistent spacing */}
            <div className="hidden lg:flex items-center justify-end flex-1 ml-6 xl:ml-12 space-x-5 lg:space-x-6 xl:space-x-8">
              {links.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`relative py-2 text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors hover:text-black whitespace-nowrap flex items-center ${
                      active ? 'text-black' : 'text-black/75'
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

              {/* Desktop Cart Action */}
              <div className="flex items-center shrink-0 ml-2 xl:ml-4">
                <Link
                  to="/cart"
                  className="relative flex items-center gap-2 bg-black/5 hover:bg-black/10 px-4 py-2 rounded-full border border-black/10 transition-colors text-black font-bold"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="text-xs lg:text-sm whitespace-nowrap">
                    Cart {cartCount > 0 ? `(${cartCount})` : ''}
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex lg:hidden items-center space-x-1.5 sm:space-x-3 shrink-0">
              <Link
                to="/cart"
                className="relative p-1.5 sm:p-2 text-black/80 hover:text-black transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] sm:text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1.5 sm:p-2 text-black/80 hover:text-black focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#ffcd00] border-t border-black/10 overflow-hidden"
            >
              <div className="px-4 sm:px-6 pt-3 pb-6 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm sm:text-base font-bold uppercase tracking-widest transition-colors ${
                      isActive(link.path)
                        ? 'bg-black/10 text-black'
                        : 'text-black/80 hover:bg-black/5 hover:text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Announcement Strip */}
        <div className="bg-[#0F0A08] text-[#ffcd00] py-2 overflow-hidden border-b border-white/10 relative w-full max-w-full">
          <div className="whitespace-nowrap flex animate-[slide_30s_linear_infinite]">
            <style>{`
              @keyframes slide {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
            <div className="flex items-center">
              {[...Array(10)].map((_, i) => (
                <span key={i} className="mx-6 sm:mx-8 text-[11px] sm:text-xs font-bold uppercase tracking-widest shrink-0">
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
