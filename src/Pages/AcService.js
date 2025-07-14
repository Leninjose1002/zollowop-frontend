import React from 'react';
import { useCart } from '../components/CartContext';

// List of AC services modeled after UrbanCompany offerings
const acServices = [
  { id: 'ac-1', title: 'Foam Jet Service', price: '₹1000', image: '/images/ac-service/Ac-Foam-JET.WEBP' },
  { id: 'ac-2', title: 'AC Split Service (1 Ton)', price: '₹799', image: '/images/ac-service/AC-Split-Service-(1 Ton).jpg' },
  { id: 'ac-3', title: 'AC Split Service (1.5 Ton)', price: '₹899', image: '/images/ac-service/AC-Split-Service-(1.5 Ton).jpg' },
  { id: 'ac-5', title: 'AC Window Service', price: '₹749', image: '/images/ac-service/AC Window Service.jpg' },
  { id: 'ac-6', title: 'AC less / no cooling repair', price: '₹500', image: '/images/ac-service/AC-less-no-cooling-repair.jpg' },
  { id: 'ac-7', title: 'AC power issue repair', price: '₹500', image: '/images/ac-service/AC-power-issue-repair.jpg' },
  { id: 'ac-8', title: 'AC noise/smell repair', price: '₹1000', image: '/images/ac-service/AC-noise-smell-repair.jpg' },
  { id: 'ac-9', title: 'AC water leakage repair', price: '₹500', image: '/images/ac-service/AC-watee-leakage-repair.jpg' },
  { id: 'ac-10', title: 'Gas refill and check-up ', price: '₹500', image: '/images/ac-service/Gas-refill-and-check-up.jpg' },
  { id: 'ac-12', title: 'Split AC installation ', price: '₹1200', image: '/images/ac-service/Split-AC-installation.jpg' },
  { id: 'ac-13', title: 'Window AC installation', price: '₹1200', image: '/images/ac-service/Window-AC-installation.jpg' },
  { id: 'ac-14', title: 'Split AC uninstallation', price: '₹850', image: '/images/ac-service/Split-AC-uninstallation.jpg' },
  { id: 'ac-15', title: 'Window AC uninstallation ', price: '₹850', image: '/images/ac-service/Window-AC-uninstallation.jpg' },


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
