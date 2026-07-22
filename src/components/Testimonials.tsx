import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import imgCustomer1 from '../assets/images/pk_customer_1_1784706882815.jpg';
import imgCustomer2 from '../assets/images/pk_customer_2_1784706899259.jpg';
import imgCustomer3 from '../assets/images/pk_customer_3_1784706915560.jpg';
import imgCustomer4 from '../assets/images/pk_customer_4_1784706931698.jpg';
import imgCustomer5 from '../assets/images/pk_customer_5_1784706952038.jpg';
import imgCustomer6 from '../assets/images/pk_customer_6_1784706970911.jpg';

interface Review {
  id: number;
  name: string;
  location: string;
  role: string;
  image: string;
  rating: number;
  date: string;
  review: string;
  verified: boolean;
  favoriteSauce: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Ahmed Khan',
    location: 'Lahore, Pakistan',
    role: 'Home Chef & Food Enthusiast',
    image: imgCustomer1,
    rating: 5,
    date: '2 days ago',
    review: 'Dippis Chili Garlic Sauce is an absolute staple in our home! The balance of spice and real garlic is unmatched. It elevates every evening snack and homemade burger to restaurant level.',
    verified: true,
    favoriteSauce: 'Chili Garlic Sauce',
  },
  {
    id: 2,
    name: 'Ayesha Malik',
    location: 'Karachi, Pakistan',
    role: 'Cafe Owner & Chef',
    image: imgCustomer2,
    rating: 5,
    date: '1 week ago',
    review: 'We use Dippis Burger Sauce and Garlic Mayo in our cafe. Our customers constantly ask for extra sauce! The consistency, freshness, and pouch packaging are top-notch.',
    verified: true,
    favoriteSauce: 'Gourmet Burger Sauce',
  },
  {
    id: 3,
    name: 'Muhammad Ali',
    location: 'Islamabad, Pakistan',
    role: 'Verified Buyer',
    image: imgCustomer3,
    rating: 5,
    date: '2 weeks ago',
    review: 'The Tomato Ketchup and Garlic Sauce 1kg pouch packs are super convenient and fresh. Real, authentic ingredients make a massive difference compared to commercial brands.',
    verified: true,
    favoriteSauce: 'Tomato Ketchup Pouch',
  },
  {
    id: 4,
    name: 'Zara Ahmed',
    location: 'Rawalpindi, Pakistan',
    role: 'Food Blogger',
    image: imgCustomer4,
    rating: 5,
    date: '3 weeks ago',
    review: 'Incredible taste! The Chili Garlic Sauce and Mayo Sauce have ruined all other store-bought condiments for me. Fresh, rich texture with authentic Pakistani spice profile.',
    verified: true,
    favoriteSauce: 'Mayo Garlic Sauce',
  },
  {
    id: 5,
    name: 'Hassan Raza',
    location: 'Faisalabad, Pakistan',
    role: 'BBQ Enthusiast',
    image: imgCustomer5,
    rating: 5,
    date: '1 month ago',
    review: 'Ordered the family party pouch pack for our weekend family barbecue. Everyone loved the sauces! Leak-proof pouch packaging and lightning-fast delivery to Faisalabad.',
    verified: true,
    favoriteSauce: 'Yellow Mustard Sauce',
  },
  {
    id: 6,
    name: 'Fatima Noor',
    location: 'Multan, Pakistan',
    role: 'Verified Buyer',
    image: imgCustomer6,
    rating: 5,
    date: '1 month ago',
    review: 'Pure perfection in every drop. You can tell they use real, sun-ripened tomatoes and freshly ground spices. Dippis Gardens is definitely our family’s all-time favorite!',
    verified: true,
    favoriteSauce: 'Chili Garlic 1kg Pouch',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Group into pages of 3 items for desktop carousel
  const itemsPerPage = 3;
  const maxPage = Math.ceil(reviews.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxPage);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxPage]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + maxPage) % maxPage);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % maxPage);
  };

  const currentReviews = reviews.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 bg-gradient-to-b from-[#0F0A08] via-[#160B07] to-[#1F0E08] text-white relative overflow-hidden z-10 border-t border-white/5">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#ff4e00]/15 via-[#ffcd00]/10 to-transparent blur-[140px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#ff4e00]/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Rating Overview Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full mb-6 shadow-xl">
            <div className="flex items-center gap-1 text-[#ffcd00]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ffcd00] text-[#ffcd00]" />
              ))}
            </div>
            <span className="text-sm font-black text-white tracking-wide">4.9 / 5.0 Average Rating</span>
            <span className="text-white/40 font-light">|</span>
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">2,500+ Happy Customers</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white mb-4 leading-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] italic">Customers Say</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Thousands of families, restaurants, and food lovers trust Dippis Gardens for authentic taste and premium quality.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Cards Grid/Slide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="wait">
              {currentReviews.map((review, idx) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 hover:border-[#ff4e00]/40 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_35px_rgba(255,78,0,0.15)] group relative overflow-hidden"
                >
                  {/* Subtle top card accent line */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ff4e00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Header Row: Quote & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#ffcd00]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#ffcd00] text-[#ffcd00]" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-[#ff4e00]/30 group-hover:text-[#ff4e00]/60 transition-colors" />
                    </div>

                    {/* Review Body */}
                    <p className="text-white/85 text-sm sm:text-base font-normal leading-relaxed mb-6 italic">
                      "{review.review}"
                    </p>
                  </div>

                  {/* Customer Info Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#ff4e00]/40 shadow-md"
                        />
                        {review.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5">
                            <CheckCircle2 className="w-4 h-4 text-[#ffcd00] fill-black" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base leading-snug flex items-center gap-1.5">
                          {review.name}
                        </h4>
                        <p className="text-xs text-white/50 font-medium">
                          {review.location}
                        </p>
                      </div>
                    </div>

                    {/* Favorite Sauce Tag */}
                    <div className="hidden sm:flex flex-col items-end shrink-0">
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Loves</span>
                      <span className="text-[11px] text-[#ffcd00] font-bold tracking-tight flex items-center gap-1">
                        <Heart className="w-2.5 h-2.5 fill-[#ffcd00]" /> {review.favoriteSauce}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls & Pagination */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {[...Array(maxPage)].map((_, pageIdx) => (
                <button
                  key={pageIdx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(pageIdx);
                  }}
                  aria-label={`Go to page ${pageIdx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === pageIdx
                      ? 'w-8 h-2.5 bg-gradient-to-r from-[#ff4e00] to-[#ffcd00]'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous reviews"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#ff4e00] text-white hover:text-black border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next reviews"
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#ff4e00] text-white hover:text-black border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
