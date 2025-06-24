// src/pages/Housekeeping.js
import React, { useState } from "react";
import HousekeepingRequirementForm from "./HousekeepingRequirementForm";

const services = [
  {
    title: "Room Cleaning",
    description: "Complete dusting, mopping, and tidying up of bedrooms and living areas.",
    image: "https://images.unsplash.com/photo-1581579185169-bfcbf0b02d1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Bathroom Cleaning",
    description: "Deep cleaning of tiles, fixtures, and sanitization of washrooms.",
    image: "https://images.unsplash.com/photo-1616627781315-8133c19f13fc?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kitchen Cleaning",
    description: "Degreasing surfaces, cleaning shelves, and sanitizing kitchen appliances.",
    image: "https://images.unsplash.com/photo-1590080876650-4d3f610c848b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sofa & Carpet Cleaning",
    description: "Shampooing and vacuuming sofas, carpets, and rugs for a fresh look.",
    image: "https://images.unsplash.com/photo-1616627452412-0a2ba9d3e0f9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Home Deep Cleaning",
    description: "A thorough cleaning of all rooms, furniture, fans, and surfaces.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
];

const Housekeeping = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  return (
    <div className="p-6 md:p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600">Housekeeping Services</h1>
        <p className="text-gray-600 mt-2">Book our professional cleaners for a sparkling clean home.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <button
                onClick={() => handleBookNow(service)}
                className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Book: {selectedService?.title}
            </h2>
            <HousekeepingRequirementForm service={selectedService?.title} onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Housekeeping;
