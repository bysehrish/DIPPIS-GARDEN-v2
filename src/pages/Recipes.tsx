import React from 'react';
import { motion } from 'motion/react';
import { Clock, ChefHat } from 'lucide-react';
import { recipes } from '../data/recipes';

export function Recipes() {
  return (
    <div className="bg-[#0F0A08] min-h-screen text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic tracking-tighter uppercase mb-4">
              Our <span className="text-[#ffcd00]">Culinary</span> Canvas
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
              Discover inspiring recipes crafted with Dippis Garden premium sauces. Elevate your home cooking with our signature flavors.
            </p>
          </motion.div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#1A0F0A] rounded-2xl overflow-hidden border border-white/5 hover:border-[#ff4e00]/30 transition-colors shadow-lg flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F0A] to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-[#ff4e00] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {recipe.sauceUsed}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ffcd00] transition-colors">{recipe.title}</h3>
                <p className="text-white/60 mb-6 flex-1 text-sm leading-relaxed">
                  {recipe.description}
                </p>
                
                <div className="flex items-center gap-6 border-t border-white/10 pt-4 mt-auto">
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <Clock className="w-4 h-4 text-[#ffcd00]" />
                    <span>{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/50 text-sm">
                    <ChefHat className="w-4 h-4 text-[#ffcd00]" />
                    <span>Beginner Friendly</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
