import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error('Failed to load orders:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const filteredOrders = filter === 'all' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Your Order History</h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <label htmlFor="statusFilter" className="mr-2 text-sm font-medium text-gray-700">Filter:</label>
        <select
          id="statusFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
        >
          <option value="all">All</option>
          <option value="placed">Placed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="border rounded-xl shadow-sm p-4 hover:shadow-md transition relative"
            >
              <div className="flex justify-between items-start">
                <div>
                  <Link
                    to={`/product/${order._id}`}
                    className="text-blue-700 font-semibold text-lg hover:underline"
                  >
                    {order.product}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">• {order.product} × 1 — ₹{order.amount}</p>
                  <p className="text-green-700 font-bold mt-1">Total: ₹{order.amount}</p>

                  {/* Status badge */}
                  <div className="mt-2">
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full
                        ${
                          order.status === 'completed'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700'
                            : order.status === 'cancelled'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      Status: {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Placed on {new Date(order.date).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
