import React, { useState } from "react";
import GenericServiceForm from "./GenericServiceForm";
import { FaTools } from "react-icons/fa";

const OtherServices = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-20 text-center">
        <div className="flex justify-center mb-4">
          <FaTools className="text-5xl text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-blue-800 mb-3 tracking-tight">
          Book a Professional Service
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-lg">
          Need a driver, welder, car mechanic, or another expert? We’ve got you covered — just fill in a few details and we’ll handle the rest.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
        >
          Book Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 transition"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Service Booking Form</h2>
            <GenericServiceForm closeModal={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default OtherServices;
