import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from "./PrimaryButton";
import { useNavigate } from "react-router-dom";



const HomePageSection = () => {
      const navigate = useNavigate();

  return (
    <section className="bg-[#F8FBFF] py-6 px-2 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side: Image */}
        <div className="max-w-md w-full mx-auto">
          <img
            src="/images/homepage/service-provider-img.png" // replace with your image path
            alt="Zollowup Service"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins mb-4">
            Your One-Stop Solution for Home Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-roboto mb-6">
            From cleaning to caregiving, Zollowup connects you with reliable, background-verified professionals right at your doorstep.
          </p>
         
          <div className="mt-6">
                     <PrimaryButton label="Explore Services" onClick={() => navigate('/services')} />

            </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
