import React from "react";
import { useCart } from "../components/CartContext";

const services = [
  {
    id: 1,
    title: "Room Cleaning",
    description: "Complete dusting, mopping, and tidying up of bedrooms and living areas.",
    image: "/images/housekeeping/Room-Cleaning.avif",
    price: "₹399",
  },
  {
    id: 2,
    title: "Bathroom Cleaning",
    description: "Deep cleaning of tiles, fixtures, and sanitization of washrooms.",
    image: "/images/housekeeping/Bathroom-Cleaning.avif",
    price: "₹299",
  },
  {
    id: 3,
    title: "Kitchen Cleaning",
    description: "Degreasing surfaces, cleaning shelves, and sanitizing kitchen appliances.",
    image: "/images/housekeeping/Kitchen-Cleaning.avif",
    price: "₹349",
  },
  {
    id: 4,
    title: "Sofa & Carpet Cleaning",
    description: "Shampooing and vacuuming sofas, carpets, and rugs for a fresh look.",
    image: "/images/housekeeping/Sofa-Carpet-Cleaning.avif",
    price: "₹499",
  },
  {
    id: 5,
    title: "Full Home Deep Cleaning",
    description: "A thorough cleaning of all rooms, furniture, fans, and surfaces.",
    image: "/images/housekeeping/Full-Home-Deep-Cleaning.avif",
    price: "₹1499",
  },
];

const Housekeeping = () => {
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();

  const getCartItem = (id) => cart.find((item) => item.id === id);

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
          Housekeeping Services
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Book our professional cleaners for a sparkling clean home.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service) => {
          const itemInCart = getCartItem(service.id);

          return (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-44 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
                <p className="text-green-600 font-semibold mt-3">{service.price} onwards</p>

                {!itemInCart ? (
                  <button
                    onClick={() => addToCart({ ...service, quantity: 1 })}
                    className="mt-4 px-4 py-2 rounded-full text-sm bg-gradient-to-r from-yellow-400 to-orange-500 hover:brightness-110 transition duration-200 text-black w-full"
                  >
                    Add to Cart
                  </button>
                ) : (
                  <div className="mt-4 flex items-center justify-between border rounded-full px-4 py-2 w-full">
                    <button
                      onClick={() =>
                        itemInCart.quantity === 1
                          ? removeFromCart(service.id)
                          : updateQuantity(service.id, itemInCart.quantity - 1)
                      }
                      className="text-lg font-bold text-gray-700 hover:text-black"
                    >
                      –
                    </button>
                    <span className="text-sm font-medium text-gray-800">
                      {itemInCart.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(service.id, itemInCart.quantity + 1)
                      }
                      className="text-lg font-bold text-gray-700 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Housekeeping;
