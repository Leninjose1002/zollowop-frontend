import React from 'react';
import { useCart } from '../components/CartContext';

const services = [
  {
    id: 1,
    title: 'Fan Repair',
    price: '₹199',
    image: '/images/electrician/Switch-Socket-images.avif',
  },
  {
    id: 2,
    title: 'Switch & Socket',
    price: '₹99',
    image: '/images/electrician/Switch-Socket-images.avif',
  },
  {
    id: 3,
    title: 'Install Inverter',
    price: '₹299',
    image: 'images/electrician/Inverter-Installation-img.avif',
  },
  {
    id: 4,
    title: 'Stabilizer Repair',
    price: '₹249',
    image: '/images/electrician/Stabilizer-Repair-img.avif',
  },
  {
    id: 5,
    title: 'Wiring Fix',
    price: '₹399',
    image: '/images/electrician/Wiring-Fix-img.avif',
  },
  {
    id: 6,
    title: 'Fuse Replacement',
    price: '₹149',
    image: '/images/electrician/Fuse-Replacement-img.avif',
  },
  {
    id: 7,
    title: 'AC Switch Repair',
    price: '₹249',
    image: '/images/electrician/Fuse-Replacement-img.avif',
  },
  {
    id: 8,
    title: 'MCB Replacement',
    price: '₹349',
    image: '/images/electrician/Fuse-Replacement-img.avif',
  },
];

const Electrician = () => {
  const { cart, addToCart } = useCart();

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Electrician Services Pricing
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <img
              src={service.image || 'https://via.placeholder.com/400x200?text=Service'}
              alt={service.title}
              className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="text-green-600 font-semibold mt-3">{service.price} onwards</p>
              </div>
              {isInCart(service.id) ? (
                <button
                  disabled
                  className="mt-6 bg-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm cursor-not-allowed"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={() => addToCart({ ...service, quantity: 1 })}
                  className="mt-6  px-4 py-2 rounded-full text-sm bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-yellow-600 text-black transition duration-200"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electrician;
