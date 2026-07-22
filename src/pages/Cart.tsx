import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, CheckCircle, Copy } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleCheckout = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!customerName || !customerAddress || !customerPhone) {
      setError("Please fill in all delivery details.");
      return;
    }

    setIsCheckingOut(true);
    setError(null);
    setOrderId(null);

    try {
      // Create order document in Firestore
      const orderData = {
        items: cartItems.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        total: cartTotal * 100, // Total in Rs
        status: 'pending',
        createdAt: serverTimestamp(),
        customerName,
        customerAddress,
        customerPhone,
        paymentMethod: 'cash_on_delivery'
      };
      
      const docRef = await addDoc(collection(db, 'orders'), orderData);
      setOrderId(docRef.id);
      setIsSuccess(true);
      clearCart();
    } catch (err) {
      console.error("Error creating order: ", err);
      setError("Failed to place the order. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-transparent px-4">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]"
        >
          <CheckCircle className="w-12 h-12" />
        </motion.div>
        <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-4 text-center">Order Successful!</h2>
        <p className="text-white/60 font-light mb-6 text-center max-w-md text-lg">
          Thank you for your purchase. Your delicious sauces will be on their way soon!
        </p>
        
        {orderId && (
          <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-2xl text-center max-w-md w-full">
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Your Order Number</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl font-mono text-white font-bold">{orderId}</span>
              <button 
                onClick={() => navigator.clipboard.writeText(orderId)}
                className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                title="Copy Order ID"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[#ffcd00]/80 text-xs mt-3 italic">Save this number to track your order.</p>
          </div>
        )}

        <div className="flex gap-4">
          <Link 
            to="/track"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-black uppercase tracking-wider transition-all border border-white/10"
          >
            Track Order
          </Link>
          <Link 
            to="/products"
            onClick={() => setIsSuccess(false)}
            className="bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black px-8 py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)]"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-transparent px-4">
        <div className="w-24 h-24 bg-white/5 text-[#ff4e00] rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-[0_0_30px_rgba(255,78,0,0.2)]">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white mb-4">Your cart is empty</h2>
        <p className="text-white/60 font-light mb-8 text-center max-w-md">
          Looks like you haven't added any of our delicious sauces to your cart yet.
        </p>
        <Link 
          to="/products"
          className="bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black px-8 py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)] inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/5 to-[#ffcd00]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-10">Your <span className="text-[#ff4e00]">Cart</span></h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              <ul className="divide-y divide-white/10">
                {cartItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 hover:bg-white/5 transition-colors"
                  >
                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
                    </div>
                    
                    <div className="flex-grow text-center sm:text-left">
                      <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-1">{item.name}</h3>
                      <p className="text-xs uppercase tracking-widest text-white/50 mb-4">{item.category}</p>
                      <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00]">Rs. {(item.price * 100).toFixed(0)}</div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center bg-white/5 rounded-full border border-white/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-white/50 hover:text-white transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-bold text-white">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-white/50 hover:text-white transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white/5 rounded-3xl border border-white/10 p-8 sticky top-24">
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-white/70 font-light text-sm uppercase tracking-widest">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-white">Rs. {(cartTotal * 100).toFixed(0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-white">Calculated at checkout</span>
                </div>
              </div>
              
              <form onSubmit={handleCheckout}>
                <div className="space-y-4 mb-6">
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2 mb-4">Delivery Details</h3>
                  <div>
                    <label className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4e00] transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4e00] transition-colors"
                      placeholder="0300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Delivery Address</label>
                    <textarea 
                      required
                      rows={3}
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ff4e00] transition-colors resize-none"
                      placeholder="123 Main Street, City"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <label className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-2">Payment Method</label>
                    <div className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white font-medium flex items-center justify-between opacity-80 cursor-not-allowed">
                      <span>Cash on Delivery</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold uppercase tracking-widest text-white">Total</span>
                    <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff4e00] to-[#ffcd00]">Rs. {(cartTotal * 100).toFixed(0)}</span>
                  </div>
                  <p className="text-xs text-white/40 font-light mt-2">Taxes included if applicable.</p>
                </div>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm font-medium text-center">
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isCheckingOut}
                  className="w-full bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black py-4 rounded-full font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,78,0,0.4)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    'Place Order (COD)'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
