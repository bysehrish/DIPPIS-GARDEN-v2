import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function Admin() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const ordersData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setOrders(ordersData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const orderRef = doc(db, 'orders', orderId);
      await updateDoc(orderRef, { status: newStatus });
    } catch (error) {
      console.error("Error updating order status:", error);
      alert("Failed to update status");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      case 'dispatched': return 'bg-blue-500/20 text-blue-500 border-blue-500/50';
      case 'completed': return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'cancelled': return 'bg-red-500/20 text-red-500 border-red-500/50';
      default: return 'bg-white/10 text-white border-white/20';
    }
  };

  return (
    <div className="bg-transparent min-h-screen py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff4e00]/5 to-[#ffcd00]/5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-10">Admin <span className="text-[#ff4e00]">Dashboard</span></h1>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-[#ff4e00] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center text-white/50 py-20 bg-white/5 rounded-3xl border border-white/10">
            <p className="text-xl font-bold uppercase tracking-widest">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 flex flex-col md:flex-row gap-8">
                
                <div className="md:w-1/3 space-y-4">
                  <div>
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Customer</h3>
                    <p className="text-white font-bold">{order.customerName}</p>
                    <p className="text-white/70 text-sm">{order.customerPhone}</p>
                  </div>
                  <div>
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Delivery Address</h3>
                    <p className="text-white/70 text-sm">{order.customerAddress}</p>
                  </div>
                  <div>
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Payment Method</h3>
                    <p className="text-white/70 text-sm uppercase">{order.paymentMethod?.replace(/_/g, ' ')}</p>
                  </div>
                </div>

                <div className="md:w-1/3">
                  <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">Order Items</h3>
                  <ul className="space-y-3">
                    {order.items?.map((item: any, index: number) => (
                      <li key={index} className="flex justify-between text-sm">
                        <span className="text-white">{item.quantity}x {item.name}</span>
                        <span className="text-[#ffcd00] font-bold">Rs. {(item.price * item.quantity * 100).toFixed(0)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                    <span className="text-white font-bold uppercase tracking-widest">Total</span>
                    <span className="text-[#ffcd00] font-black text-xl">Rs. {order.total.toFixed(0)}</span>
                  </div>
                </div>

                <div className="md:w-1/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2">Order Status</h3>
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </div>
                    <div className="mt-4 space-y-2">
                      <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Update Status To:</p>
                      <div className="flex flex-wrap gap-2">
                        {['pending', 'dispatched', 'completed', 'cancelled'].map((status) => (
                          <button
                            key={status}
                            disabled={order.status === status}
                            onClick={() => updateOrderStatus(order.id, status)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                              order.status === status 
                                ? 'bg-white/10 text-white/30 cursor-not-allowed border border-white/5' 
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-right">
                    <p className="text-white/40 text-xs">
                      {order.createdAt ? new Date(order.createdAt.seconds * 1000).toLocaleString() : 'Just now'}
                    </p>
                    <p className="text-white/30 text-[10px] font-mono mt-1">ID: {order.id}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
