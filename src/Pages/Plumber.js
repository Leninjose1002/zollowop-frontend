// src/pages/Plumber.js
import React from 'react';
import { useCart } from '../components/CartContext';

const services = [
  { id: 1, title: 'Bath accessory installation', price: '₹129', image: '/images/plumbing/Bath-accessory-installation.webp' },
  { id: 2, title: 'Shower installation', price: '₹159+', image: '/images/plumbing/shower-installation.webp' },
  { id: 3, title: 'Wash basin installation', price: '₹479', image: '/images/plumbing/Wash-basin-installation.webp' },
  { id: 4, title: 'Waste pipe replacement', price: '₹139', image: '/images/plumbing/waste-pipe-replacement.webp' },
  { id: 5, title: 'Sink drainage removal', price: '₹189', image: '/images/plumbing/Sink-drainage.webp' },
  { id: 6, title: 'Bathroom tile grouting', price: '₹1,500', image: '/images/plumbing/Bathroom-tile.webp' },
  { id: 7, title: 'Kitchen tile grouting', price: '₹1,000', image: '/images/plumbing/kitchen-tile.webp' },
  { id: 8, title: 'Shower filter installation', price: '₹169', image: '/images/plumbing/shower-filter.webp' },
  { id: 9, title: 'Washing machine filter install', price: '₹139', image: '/images/plumbing/wm-filter.webp' },
  { id: 10, title: 'Drainage cover installation', price: '₹179', image: '/images/plumbing/drain-cover.webp' },
  { id: 11, title: 'Bathroom drainage removal', price: '₹409', image: '/images/plumbing/bath-drain.webp' },
  { id: 12, title: 'Balcony drainage removal', price: '₹299', image: '/images/plumbing/balcony-drain.webp' },
  { id: 13, title: 'Toilet seat cover replacement', price: '₹139', image: '/images/plumbing/toilet-seat.webp' },
  { id: 14, title: 'Flush tank repair (PVC)', price: '₹159', image: '/images/plumbing/flush-pvc.webp' },
  { id: 15, title: 'Flush tank repair (concealed)', price: '₹169+', image: '/images/plumbing/flush-concealed.webp' },
  { id: 16, title: 'Western toilet repair', price: '₹699', image: '/images/plumbing/western-repair.webp' },
  { id: 17, title: 'Toilet pot blockage removal', price: '₹1,299', image: '/images/plumbing/loo-blockage.webp' },
  { id: 18, title: 'Jet spray installation', price: '₹139', image: '/images/plumbing/jet-spray.webp' },
  { id: 19, title: 'Flush tank replacement', price: '₹529', image: '/images/plumbing/flush-replace.webp' },
  { id: 20, title: 'Western toilet installation', price: '₹1,499+', image: '/images/plumbing/western-install.webp' },
  { id: 21, title: 'Indian toilet installation', price: '₹1,699', image: '/images/plumbing/indian-install.webp' },
];

const Plumber = () => {
  const { cart, addToCart, updateQuantity } = useCart();

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
          Plumber Services
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          High-Quality Plumbing by Fast, Reliable, Certified Technicians


        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {services.map((s) => {
          const cartItem = getCartItem(s.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <div
              key={s.id}
  className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
            >
              <img
                src={s.image}
                alt={s.title}
                className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base  text-gray-600">{s.title}</h3>
                  <p className=" text-base text-black font-semibold">{s.price} onwards</p>
                </div>

                {cartItem ? (
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQuantity(s.id, quantity - 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
                    >
                      –
                    </button>
                    <span className="text-base font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(s.id, quantity + 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart({ ...s, quantity: 1 })}
                    className="mt-4 px-4 py-2 rounded-full  text-white bg-blue-900 text-sm transition duration-300 w-full shadow-lg"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plumber;
