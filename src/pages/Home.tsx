import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Heart, Star, Quote, PlayCircle, ShoppingBag, Award, ThumbsUp, MapPin, Utensils, Building, Coffee } from 'lucide-react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import heroCinematicImg from '../assets/images/regenerated_image_1784703950877.png';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] bg-gradient-to-b from-[#0F0A08] via-[#1A0F0A] to-[#22120C] text-white flex flex-col justify-center items-center overflow-hidden">
        {/* Background Elements */}
      
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent z-0"></div>
        {/* Glows */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] blur-[150px] rounded-full opacity-20 z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex flex-col justify-center pt-8 pb-4 lg:py-0"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter leading-none mb-4 md:mb-6 uppercase">
                Crafted With <br className="hidden md:block" />
                <span className="text-[#ff4e00] drop-shadow-[0_0_20px_rgba(255,78,0,0.6)]">Passion</span>
                <br />
                Packed With <br className="hidden md:block" />
                <span className="text-[#ffcd00] drop-shadow-[0_0_20px_rgba(255,205,0,0.4)]">Flavor</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Experience the authentic taste of Lahore. <br className="hidden md:block" />
                Made with the freshest ingredients to <br className="hidden md:block" />
                elevate your everyday meals.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-8 md:mb-10">
                <Link to="/products" className="bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)] flex items-center gap-2 text-sm md:text-base">
                  <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" /> Shop Our Sauces <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
                <Link to="/about" className="bg-transparent hover:bg-gradient-to-r hover:from-[#ff4e00] hover:to-[#ffcd00] hover:scale-105 hover:text-black hover:border-transparent hover:shadow-[0_0_20px_rgba(255,78,0,0.4)] backdrop-blur-sm text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2 text-sm md:text-base group">
                  <PlayCircle className="w-4 h-4 md:w-5 md:h-5 group-hover:text-black" /> View Our Story
                </Link>
              </div>


            </motion.div>

            {/* Right Column: Hero Product Collection */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full flex items-center justify-center mt-10 lg:mt-0"
            >
              {/* Floating Ingredients */}
              <motion.div
               initial={{ opacity: 0, scale: 0, rotate: -45 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.5 }}
               className="absolute top-[10%] left-[5%] lg:top-[15%] lg:-left-[5%] z-50 pointer-events-none"
              >
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl lg:text-6xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                >
                  🌶️
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: 45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.5 }}
                className="absolute bottom-[10%] left-[5%] lg:bottom-[15%] lg:-left-[5%] z-50 pointer-events-none"
              >
                <motion.div 
                  animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="text-4xl lg:text-6xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                >
                  🧄
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.0, type: "spring", bounce: 0.5 }}
                className="absolute top-[15%] right-[5%] lg:top-[20%] lg:-right-[5%] z-50 pointer-events-none"
              >
                <motion.div 
                  animate={{ y: [0, -20, 0], rotate: [0, 20, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="text-4xl lg:text-6xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              >
                  🍅
                </motion.div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.5 }}
              className="absolute bottom-[15%] right-[5%] lg:bottom-[20%] lg:-right-[5%] z-50 pointer-events-none"
              >
             <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="text-4xl lg:text-6xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
              >
                🌿
              </motion.div>
            </motion.div>

          {/* Product Bottles Collection Image */}
          <div className="relative w-full max-w-full lg:w-[115%] lg:-ml-[15%] xl:-ml-[20%] flex items-center justify-center z-30 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full rounded-2xl lg:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(255,78,0,0.2)] border-2 border-white/10 group pointer-events-auto"
            >
              <img src={heroCinematicImg} alt="Dippis Garden Premium Sauces" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 mix-blend-overlay"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-[#22120C] to-[#0F0A08] relative z-10">
        {/* Glows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#ff4e00]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Our Signature Range</h2>
            <p className="text-white/70 text-lg font-medium">Discover the perfect companion for your burgers, fries, and everyday meals.</p>
          </div>
         
          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
               className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 shadow-2xl flex flex-col justify-between transition transform text-white border border-white/5 hover:border-white/20"
              >
                <div className="h-64 overflow-hidden relative rounded-xl mb-4 border border-black/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-[#ff4e00] backdrop-blur-md text-white border border-[#ff4e00]/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight text-white">{product.name}</h3>
                  <p className="text-xs text-white/60 mb-4 line-clamp-2 font-medium">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-white">Rs. {(product.price * 100).toFixed(0)}</span>
                    <Link 
                      to={`/products`}
                      className="bg-[#ff4e00] text-white hover:bg-[#ffcd00] hover:text-black px-4 py-2 rounded-full font-bold uppercase tracking-wider text-xs transition-colors shadow-[0_0_15px_rgba(255,78,0,0.3)]"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#ff4e00] font-black uppercase tracking-widest hover:text-black transition-colors">
              Explore All Sauces <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews / Testimonials Section */}
      <Testimonials />

      {/* Banner Section */}
      <section className="py-32 relative overflow-hidden bg-[#0F0A08]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4e00]/20 to-[#ffcd00]/10"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-8 drop-shadow-2xl">
            CRAFTED FOR<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] italic filter drop-shadow-[0_0_20px_rgba(255,78,0,0.5)]">EVERY MEAL</span>
          </h2>
          <p className="text-white/70 font-light text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether it's a family barbecue, a quick snack, or a gourmet burger, our sauces are designed to bring out the best in your food.
          </p>
          <Link to="/about" className="inline-block bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] text-black px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)]">
            Discover Our Story
          </Link>
        </div>
      </section>
    </div>
  );
}
