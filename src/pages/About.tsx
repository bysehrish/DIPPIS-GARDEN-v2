import React from 'react';
import { Leaf, Award, Users } from 'lucide-react';
import { motion } from 'motion/react';
import founderImg from '../assets/images/cheff.png';

export function About() {
  return (
    <div className="bg-transparent min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 border-b border-white/10 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff4e00]/20 to-[#ffcd00]/10"></div>
        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              Who We Are
            </h1>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] font-black italic tracking-tighter mb-8 uppercase">
              Real Ingredients. Real Flavor.
            </p>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Dippis Garden is a new-age sauce brand with a big purpose — to add real flavor to everyday meals. 
              We're a team of food lovers, dreamers, and doers who believe that great taste starts with real ingredients and honest recipes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#ff4e00]/20 rounded-[3rem] transform -rotate-3 scale-105 border border-[#ff4e00]/30"></div>
            <img 
              src={founderImg} 
              alt="Syed Sheraz Mehboob - Founder & CEO" 
              className="relative z-10 rounded-[3rem] shadow-2xl shadow-[#ff4e00]/20 w-full h-[600px] object-cover object-top hover:scale-[1.02] transition-all duration-700"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Meet Our Founder & CEO</h2>
            <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] font-bold tracking-widest uppercase mb-8">Syed Sheraz Mehboob</h3>
            
            <blockquote className="text-2xl font-light text-white/90 italic leading-relaxed mb-8 border-l-4 border-[#ff4e00] pl-6">
              "Great food deserves great flavor. Our goal is simple—to create products that people trust, enjoy, and proudly share with their families."
            </blockquote>
            
            <p className="text-white/60 font-light leading-relaxed mb-6">
              At Dippis Garden, every bottle represents our commitment to quality, innovation, and customer satisfaction. This is only the beginning of our journey, and we look forward to becoming a part of every memorable meal.
            </p>
          </div>
        </div>
      </section>

      {/* Moments to Cherish Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Moments to Cherish</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
              We believe food is the best way to bring people together. Whether it's a family dinner or hanging out with friends, Dippis Garden is there to make the moment memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(255,78,0,0.15)] border-2 border-white/10"
            >
              <img 
                src={new URL('../assets/images/spicy_pasta_recipe_1784634632792.jpg', import.meta.url).href} 
                alt="Chili Garlic Sauce with Pasta" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2 italic">Spicy Pasta Nights</h3>
                  <p className="text-white/80 font-medium">Elevate your pasta with our bold Chili Garlic Sauce.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(255,78,0,0.15)] border-2 border-white/10"
            >
              <img 
                src={new URL('../assets/images/cinematic_sandwich_mayo_1784639827452.jpg', import.meta.url).href} 
                alt="Mayo Garlic with Sandwiches" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2 italic">Rich & Creamy Sandwiches</h3>
                  <p className="text-white/80 font-medium">The perfect spread for your daily meals.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(255,78,0,0.15)] border-2 border-white/10"
            >
              <img 
                src={new URL('../assets/images/pakistani_friends_feast_1784640137554.jpg', import.meta.url).href} 
                alt="Friends enjoying a feast with Dippis Garden sauces" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2 italic">Weekend Feasts</h3>
                  <p className="text-white/80 font-medium">Making every gathering more flavorful.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-[0_0_30px_rgba(255,78,0,0.15)] border-2 border-white/10"
            >
              <img 
                src={new URL('../assets/images/pakistani_family_party_1784640161751.jpg', import.meta.url).href} 
                alt="Family burger party with sauces" 
                className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-3xl font-black uppercase text-white mb-2 italic">Family Parties</h3>
                  <p className="text-white/80 font-medium">Joyful moments with the perfect taste.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff4e00]/20 text-[#ff4e00] rounded-2xl flex items-center justify-center mb-6 border border-[#ff4e00]/30 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Quality First</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We never compromise on the ingredients or the standards behind every product. Excellence is our baseline.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff4e00]/20 text-[#ff4e00] rounded-2xl flex items-center justify-center mb-6 border border-[#ff4e00]/30 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Innovation</h3>
              <p className="text-white/60 font-light leading-relaxed">
                We continuously create new flavors to meet the changing tastes of our customers, bringing exciting twists to classics.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#ff4e00]/20 text-[#ff4e00] rounded-2xl flex items-center justify-center mb-6 border border-[#ff4e00]/30 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-4">Customer Focus</h3>
              <p className="text-white/60 font-light leading-relaxed">
                Our customers inspire every decision we make. Honesty, transparency, and trust guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
