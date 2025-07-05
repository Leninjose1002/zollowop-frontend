import React from 'react';
import { useCart } from '../components/CartContext';

const services = [
  { id: 1, title: 'Fan Repair', price: '₹199', image: '/images/electrician/Switch-Socket-images.avif' },
  { id: 2, title: 'Switch & Socket', price: '₹99', image: '/images/electrician/Switch-Socket-images.avif' },
  { id: 3, title: 'Install Inverter', price: '₹299', image: 'images/electrician/Inverter-Installation-img.avif' },
  { id: 4, title: 'Stabilizer Repair', price: '₹249', image: '/images/electrician/Stabilizer-Repair-img.avif' },
  { id: 5, title: 'Wiring Fix', price: '₹399', image: '/images/electrician/Wiring-Fix-img.avif' },
  { id: 6, title: 'Fuse Replacement', price: '₹149', image: '/images/electrician/Fuse-Replacement-img.avif' },
  { id: 7, title: 'AC Switch Repair', price: '₹249', image: '/images/electrician/Fuse-Replacement-img.avif' },
  { id: 8, title: 'MCB Replacement', price: '₹349', image: '/images/electrician/Fuse-Replacement-img.avif' },
];

const Electrician = () => {
  const { cart, addToCart, updateQuantity } = useCart();

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-8 lg:px-16">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
          Electrician Services
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Book our professional cleaners for a sparkling clean home.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {services.map((service) => {
          const cartItem = getCartItem(service.id);
          const quantity = cartItem?.quantity || 0;

          return (
            <div
              key={service.id}
  className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
            >
              <img
                src={service.image || 'https://via.placeholder.com/400x200?text=Service'}
                alt={service.title}
                className="h-40 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className=" text-base text-gray-600">{service.title}</h3>
                  <p className="text-base text-black font-semibold">{service.price} onwards</p>
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
className="mt-4 px-4 py-2 rounded-full  bg-blue-900 text-white hover:brightness-110 text-sm transition duration-300 w-full shadow-lg"
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

export default Electrician;
  