// import React from "react";

// import PrimaryButton from "../components/PrimaryButton";
// import { useNavigate } from 'react-router-dom';



// const AboutCta = () => {
//     const navigate = useNavigate();

//   return (
//     <div className="relative bg-blue-900 text-white text-center py-20 px-4 sm:px-8 overflow-hidden">
//       {/* Background Image with overlay */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://tidytheme.xyz/blackgallery/tidid/html/images/video_bg.jpg"
//           alt="Background"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
//           We help make your place sparkle
//         </h1>
//         <p className="text-lg sm:text-xl mb-6 font-sans">
//           We're here to help manage your home services with care and convenience.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 font-sans">
//           <span className="text-xl font-semibold">📞 +91 9267987940</span>

//           <span className="hidden sm:inline-block text-white">|</span>

//           <PrimaryButton label="Contact Us" onClick={() => navigate('/contact')} />

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutCta;

import React from "react";
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const AboutCta = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 sm:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Simplify Your Home?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-primary-100 mb-8 leading-relaxed">
            Join thousands of families who trust ZollowUp for their home services. Book your first service today and experience the difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
            {/* Primary CTA */}
            <button
              onClick={() => navigate('/services')}
              className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
            >
              Browse Services
              <ArrowRight size={20} />
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition"
            >
              Contact Us
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-100 border-t border-primary-500 pt-8">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="font-semibold">+91 9218028500</span>
            </div>
            <span className="hidden sm:inline text-white">•</span>
            <span>Available 9:30 AM - 7:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
