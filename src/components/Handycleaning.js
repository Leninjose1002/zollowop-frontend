import React from "react";
// import { Link } from 'react-router-dom';
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from 'react-router-dom';


const Handycleaning = () => {
      const navigate = useNavigate();
  
  return (
    <div className="bg-light p-8 rounded-2xl shadow-md w-full max-w-5xl mx-auto mb-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-poppins mb-6 bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
  Why Book
   <span className="text-accent"> House Maid Services </span>
   through Zollowup?
</h2>


      <p className="text-gray-700 text-center font-sans leading-relaxed mb-8">
        If you’re in need of home cleaning, apartment cleaning, or a maid service,
        we’re simply the best, most convenient way to find a service referral. We
        know you want a well-priced cleaning while still having the confidence
        that your cleaning will be thorough and professional. Zollowup connects you
        to cleaners who offer just that — with seamless scheduling and recurring
        bookings handled automatically.
      </p>

      <ul className="space-y-4 mb-8 text-sm sm:text-base font-sans">
        <li className="flex items-start text-gray-800">
          <span className="text-green-600 mr-3 mt-1">&#10003;</span>
          <a href="#" className="text-blue-600 hover:underline">
            Vetted and screened professionals.
          </a>
        </li>
        <li className="flex items-start text-gray-800">
          <span className="text-green-600 mr-3 mt-1">&#10003;</span>
          <a href="#" className="text-blue-600 hover:underline">
            Backed by the Zollowup Satisfaction Guarantee.
          </a>
        </li>
        <li className="flex items-start text-gray-800">
          <span className="text-green-600 mr-3 mt-1">&#10003;</span>
          Friendly 24/7 customer service
        </li>
        <li className="flex items-start text-gray-800">
          <span className="text-green-600 mr-3 mt-1">&#10003;</span>
          Affordable, upfront pricing
        </li>
      </ul>

      <div className="text-center">
          
                    <PrimaryButton label="Get Started" onClick={() => navigate('/services')} />

      
      </div>
    </div>
  );
};

export default Handycleaning;
