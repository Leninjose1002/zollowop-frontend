// src/pages/Nursing.js
import React, { useState } from "react";
import NurseRequirementForm from "./NurseRequirementForm";

const services = [
  {
    title: "Elderly Care",
    description: "Daily support and companionship for senior citizens with mobility or health challenges.",
    image: "/images/nursing/elderly-care-img.avif",
  },
  {
    title: "Post-Surgical Care",
    description: "Professional nursing to help patients recover safely at home after surgery.",
    image: "/images/nursing/Post-Surgical-Care.avif",
  },
  {
    title: "ICU Care at Home",
    description: "ICU-trained nurses to manage critical care patients with ventilators and monitoring equipment.",
    image: "/images/nursing/ICU-Care.avif",
  },
  {
    title: "Baby & Mother Care",
    description: "Trained caregivers to support new mothers and ensure newborn hygiene and feeding.",
    image: "/images/nursing/Baby-Mother-Care.avif",
  },
  {
    title: "Injections & IV Drips",
    description: "On-call nurses for injections, IV fluids, and quick medical procedures at home.",
    image: "/images/nursing/Injections-IV-Drips-img.avif",
  },
  {
    title: "Palliative Care",
    description: "Compassionate nursing for terminally ill patients focusing on comfort and quality of life.",
    image: "/images/nursing/Palliative-Care-img.avif",
  },
  {
    title: "Bedridden Care",
    description: "24x7 care for patients who are completely immobile, including hygiene and sore prevention.",
    image: "/images/nursing/Bedridden-Care-img.jpg",
  },
  {
    title: "Night Nursing",
    description: "Professional nursing services available overnight for patient monitoring and care.",
    image: "/images/nursing/Post-Surgical-Care.avif",
  },
];

const Nursing = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleBookNow = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  return (
    <div className="px-4 py-8 sm:px-6 md:px-10">
      <div className="text-center mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
          Medical Services We Provide
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Choose the care you need, and we’ll bring it to your doorstep.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
  className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
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
              <button
                onClick={() => handleBookNow(service)}
className="mt-4 px-4 py-2 rounded-full bg-blue-900  text-white text-sm transition duration-300 w-full shadow-md"
              > 
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Nurse Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Book: {selectedService?.title}
            </h2>
            <NurseRequirementForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nursing;
