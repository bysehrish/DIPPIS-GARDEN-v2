import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Plus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export function Products() {
  const { addToCart } = useCart();

  return (
    <div className="bg-transparent min-h-screen py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/5 to-[#ffcd00]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">Our Sauce <span className="text-[#ff4e00]">Collection</span></h1>
          <p className="text-lg text-white/70 font-light">
            From the bold heat of our Chili Garlic to the creamy perfection of our Mayo, 
            explore our complete range of premium sauces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col group hover:bg-white/10 hover:border-[#ff4e00]/50 transition-colors"
            >
              <div className="h-72 overflow-hidden relative rounded-xl bg-black/40 border border-white/5">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              
              <div className="pt-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">{product.name}</h3>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest block mt-1">
                      {product.category}
                    </span>
                  </div>
                  <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00]">Rs. {(product.price * 100).toFixed(0)}</span>
                </div>
                
                <p className="text-white/60 text-sm font-light mb-6 flex-grow">{product.description}</p>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-[#ff4e00] text-white py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-colors"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
