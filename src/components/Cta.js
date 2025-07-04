import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from 'react-router-dom';

const Cta = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-slate-900 text-white py-16 px-6 sm:px-10 md:px-16 overflow-hidden">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/rain-water-drop-glass-smooth-plastic-surface_107791-30775.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/80 z-0 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold font-roboto leading-snug">
          Get in touch with us for the best of our Domestic services
        </h1>

        <p className="mt-4 text-lg text-gray-300 font-roboto">
          We have well-trained and highly experienced technicians who serve both residential and commercial sectors.
        </p>

        <div className="mt-8">
          <PrimaryButton label="Book Now" onClick={() => navigate('/contact')} />
        </div>
      </div>
    </div>
  );
};

export default Cta;
