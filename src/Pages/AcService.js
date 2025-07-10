import React from 'react';
import { useCart } from '../components/CartContext';

// List of AC services modeled after UrbanCompany offerings
const acServices = [
  { id: 'ac-1', title: 'AC Preventive Maintenance', price: '₹899', image: '/images/ac/preventive-maintenance.jpg' },
  { id: 'ac-2', title: 'AC Split Service (1 Ton)', price: '₹799', image: '/images/ac/split-service-1-ton.jpg' },
  { id: 'ac-3', title: 'AC Split Service (1.5 Ton)', price: '₹899', image: '/images/ac/split-service-1-5-ton.jpg' },
  { id: 'ac-4', title: 'AC Split Service (2 Ton)', price: '₹999', image: '/images/ac/split-service-2-ton.jpg' },
  { id: 'ac-5', title: 'AC Window Service', price: '₹749', image: '/images/ac/window-service.jpg' },
  { id: 'ac-6', title: 'AC Chemical Wash (Split)', price: '₹1,299', image: '/images/ac/chemical-wash-split.jpg' },
  { id: 'ac-7', title: 'AC Chemical Wash (Window)', price: '₹1,099', image: '/images/ac/chemical-wash-window.jpg' },
  { id: 'ac-8', title: 'AC Gas Refilling', price: '₹1,499', image: '/images/ac/gas-refill.jpg' },
  { id: 'ac-9', title: 'AC Compressor Repair', price: '₹2,499', image: '/images/ac/compressor-repair.jpg' },
];

const AcService = () => {
  const { cart, addToCart, updateQuantity } = useCart();
  const getCartItem = (id) => cart.find(item => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
          AC Services
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Choose from our comprehensive AC care and repair services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {acServices.map(service => {
          const cartItem = getCartItem(service.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-lg hover:border-blue-500"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />

              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base text-gray-800 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-base text-black mt-1">
                    {service.price} onwards
                  </p>
                </div>

                {cartItem ? (
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      onClick={() => updateQuantity(service.id, quantity - 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
                    >
                      –
                    </button>
                    <span className="text-base font-medium">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(service.id, quantity + 1)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart({ ...service, quantity: 1 })}
                    className="mt-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:brightness-110 text-sm transition duration-300 w-full shadow-lg"
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

export default AcService;
