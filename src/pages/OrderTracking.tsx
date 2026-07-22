import React, { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { Search, Package, Truck, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    setLoading(true);
    setError('');
    setSearched(true);
    setOrder(null);

    try {
      const orderRef = doc(db, 'orders', orderId.trim());
      const orderSnap = await getDoc(orderRef);

      if (orderSnap.exists()) {
        setOrder({ id: orderSnap.id, ...orderSnap.data() });
      } else {
        setError('Order not found. Please check the order ID and try again.');
      }
    } catch (err) {
      console.error("Error fetching order:", err);
      setError('An error occurred while tracking the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'pending':
        return { icon: Package, color: 'text-yellow-500', text: 'Pending', description: 'Your order has been received and is being prepared.' };
      case 'dispatched':
        return { icon: Truck, color: 'text-blue-500', text: 'Dispatched', description: 'Your order is on the way!' };
      case 'completed':
        return { icon: CheckCircle, color: 'text-green-500', text: 'Completed', description: 'Your order has been delivered successfully.' };
      case 'cancelled':
        return { icon: XCircle, color: 'text-red-500', text: 'Cancelled', description: 'Your order has been cancelled.' };
      default:
        return { icon: Package, color: 'text-white/50', text: 'Unknown', description: 'Status unknown.' };
    }
  };

  return (
    <div className="bg-[#0f0402] min-h-screen py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/5 to-[#ffcd00]/5 pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">
            Track <span className="text-[#ff4e00]">Your Order</span>
          </h1>
          <p className="text-white/70 font-light">Enter your order ID below to see the current status of your delivery.</p>
        </div>

        <form onSubmit={handleTrack} className="mb-12">
          <div className="relative flex items-center max-w-xl mx-auto">
            <Search className="absolute left-4 w-6 h-6 text-white/40" />
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter Order ID (e.g., a1b2c3d4...)"
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-32 text-white placeholder:text-white/40 focus:outline-none focus:border-[#ff4e00] transition-colors"
              required
            />
            <button
              type="submit"
              disabled={loading || !orderId.trim()}
              className="absolute right-2 top-2 bottom-2 bg-gradient-to-r from-[#ff4e00] to-[#ffcd00] hover:scale-105 text-black px-6 rounded-full font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
              ) : (
                'Track'
              )}
            </button>
          </div>
        </form>

        {searched && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto"
          >
            {error ? (
              <div className="text-center py-8">
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <p className="text-red-400 font-bold uppercase tracking-widest">{error}</p>
              </div>
            ) : order ? (
              <div>
                <div className="text-center mb-8 pb-8 border-b border-white/10">
                  <h2 className="text-white/50 text-sm font-bold uppercase tracking-widest mb-2">Order ID</h2>
                  <p className="text-white font-mono">{order.id}</p>
                </div>

                {(() => {
                  const statusInfo = getStatusDetails(order.status);
                  const StatusIcon = statusInfo.icon;
                  return (
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]`}>
                        <StatusIcon className={`w-12 h-12 ${statusInfo.color}`} />
                      </div>
                      <h3 className={`text-3xl font-black uppercase tracking-widest mb-2 ${statusInfo.color}`}>
                        {statusInfo.text}
                      </h3>
                      <p className="text-white/70 font-light">{statusInfo.description}</p>
                    </div>
                  );
                })()}

                <div className="bg-black/30 rounded-2xl p-6 mt-8">
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Order Summary</h3>
                  <ul className="space-y-3 mb-4 border-b border-white/10 pb-4">
                    {order.items?.map((item: any, index: number) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-white/80">{item.quantity}x {item.name}</span>
                        <span className="text-white font-bold">Rs. {(item.price * item.quantity * 100).toFixed(0)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold uppercase tracking-widest">Total</span>
                    <span className="text-[#ffcd00] font-black text-xl">Rs. {order.total.toFixed(0)}</span>
                  </div>
                </div>
              </div>
            ) : null}
          </motion.div>
        )}
      </div>
    </div>
  );
}
