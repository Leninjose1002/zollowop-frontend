import React, { useEffect, useState } from "react";
import { getUserOrders } from "../api"; 

const OrderHistory = () => {
  // const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchOrders = async () => {
    try {
      // 🛠️ If you're using cookie-based auth, skip the token check
      const res = await getUserOrders(); // ← remove token if not needed
      setOrders(res);
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchOrders();
}, []);


  if (loading) return <p>Loading your orders...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Order History</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You haven't placed any orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-blue-600">{order.serviceType}</h3>
                <span className="text-sm text-gray-500">
                  Placed on {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    • {item.title} × {item.quantity} — ₹{item.price.replace(/[^\d]/g, "") * item.quantity}
                  </li>
                ))}
              </ul>
              <p className="mt-2 font-medium text-green-600">
                Total: ₹{order.totalAmount}
              </p>
              <p className="text-xs text-gray-500">Status: {order.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
