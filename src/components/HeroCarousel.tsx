import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(4); // Start with Smoky Burger
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const numProducts = products.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current + 1) % numProducts);
  }, [numProducts]);

  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current - 1 + numProducts) % numProducts);
  }, [numProducts]);

  useEffect(() => {
    if (!isHovered && !isDragging) {
      timerRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, isDragging, nextSlide]);

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + numProducts) % numProducts;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === - (numProducts - 1)) return 'right';
    if (diff === 2 || diff === - (numProducts - 2)) return 'rightHidden';
    if (diff === numProducts - 1 || diff === -1) return 'left';
    if (diff === numProducts - 2 || diff === -2) return 'leftHidden';
    return 'hidden';
  };

  const variants = {
    center: {
      x: 0,
      y: [0, -4, 0],
      scale: 1.2,
      opacity: 1,
      filter: 'blur(0px) brightness(100%)',
      zIndex: 50,
      transition: {
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    left: {
      x: '-90%',
      y: 0,
      scale: 0.85,
      opacity: 0.6,
      filter: 'blur(2px) brightness(40%)',
      zIndex: 40,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    right: {
      x: '90%',
      y: 0,
      scale: 0.85,
      opacity: 0.6,
      filter: 'blur(2px) brightness(40%)',
      zIndex: 40,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    leftHidden: {
      x: '-160%',
      y: 0,
      scale: 0.6,
      opacity: 0,
      filter: 'blur(6px) brightness(20%)',
      zIndex: 30,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    rightHidden: {
      x: '160%',
      y: 0,
      scale: 0.6,
      opacity: 0,
      filter: 'blur(6px) brightness(20%)',
      zIndex: 30,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    hidden: {
      x: 0,
      y: 0,
      scale: 0.6,
      opacity: 0,
      filter: 'blur(10px) brightness(0%)',
      zIndex: 10,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-visible touch-pan-y"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Golden Spotlights */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#F4B400] to-[#ff4e00] blur-[100px]"
        />
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center mt-12 md:mt-24">
        {products.map((product, index) => {
          const position = getPosition(index);
          const isCenter = position === 'center';
          
          return (
            <motion.div
              key={product.id}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-center"
              initial={false}
              animate={position}
              variants={variants}
              onClick={() => {
                 if (position === 'left') prevSlide();
                 if (position === 'right') nextSlide();
              }}
              style={{
                width: 'clamp(120px, 18vw, 180px)',
                height: 'clamp(220px, 30vw, 340px)',
                marginLeft: 'calc(-1 * clamp(120px, 18vw, 180px) / 2)',
                marginTop: 'calc(-1 * clamp(220px, 30vw, 340px) / 2)'
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, { offset, velocity }) => {
                setIsDragging(false);
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  nextSlide();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevSlide();
                }
              }}
            >
              {/* Bottle Container with Glassmorphism */}
              <div className={`relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isCenter ? 'shadow-[0_0_50px_rgba(244,180,0,0.5)] border-2 border-[#F4B400]/50 bg-black/10' : 'shadow-xl border border-white/5 bg-black/40'}`}>
                {/* Background for glassmorphism */}
                <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
                
                {/* Image */}
                <img 
                  src={product.image} 
                  alt={product.name} 
                 className="w-full h-full object-cover object-center relative z-10"
                  draggable={false}
                />
                
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-20 pointer-events-none"></div>
              </div>
              
              {/* Shadow underneath */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-black/80 blur-xl rounded-full z-0 transition-opacity duration-300" style={{ opacity: isCenter ? 1 : 0.4 }}></div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:-mx-8 pointer-events-none z-50">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#170A05]/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F4B400] hover:border-[#F4B400]/50 transition-all pointer-events-auto shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#170A05]/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/50 hover:text-[#F4B400] hover:border-[#F4B400]/50 transition-all pointer-events-auto shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute -bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-4 z-50">
        {products.map((product, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`transition-all duration-300 rounded-lg overflow-hidden border-2 flex items-center justify-center ${
              activeIndex === idx 
                ? 'border-[#F4B400] scale-110 shadow-[0_0_15px_rgba(244,180,0,0.5)] bg-black/60' 
                : 'border-white/10 opacity-50 hover:opacity-100 bg-black/30'
            } w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16`}
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-contain p-1" draggable={false} />
          </button>
        ))}
      </div>
    </div>
  );
}
