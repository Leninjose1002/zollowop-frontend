// // src/pages/About.js
// import React from "react";
// // import Whyus from "../components/Whyus";
// import { motion } from "framer-motion";
// import AboutCta from "../components/AboutCta";
// import Cards from "../components/Cards";
// import ExitIntentPopup from "../components/ExitIntentPopup";
// import Handycleaning from "../components/Handycleaning";
// import PrimaryButton from "../components/PrimaryButton";
// import { useNavigate } from 'react-router-dom';


// const About = () => {
//     const navigate = useNavigate();
  
//   return (
//     <div className="bg-light">
//       <ExitIntentPopup />

//       {/* About Section */}
//       <div className="flex flex-wrap items-center py-14 px-6">
//         {/* Left Images */}
//         <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//           <div className="flex flex-wrap justify-center lg:justify-start">
//             <motion.div
//               className="w-1/2 px-2 hidden lg:block"
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="rounded-2xl overflow-hidden">
//                 <img
//                   src="https://i.pinimg.com/736x/0f/2b/ce/0f2bcec1c5a8786dde181af44f50efa2.jpg"
//                   alt="Child on Carpet"
//                   className="w-full h-auto object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             </motion.div>
//             <motion.div
//               className="w-1/2 px-2 hidden lg:block"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               <div className="rounded-2xl overflow-hidden relative border-8 border-white lg:left-[-50px] lg:mt-[50px]">
//                 <img
//                   src="https://i.pinimg.com/736x/bd/f5/da/bdf5da4c4682affb69628d4333bd86cf.jpg"
//                   alt="Cleaning Lady"
//                   className="w-full h-auto object-cover"
//                   loading="lazy"
//                 />
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Right Text */}
//         <div className="lg:w-1/2 w-full px-5 text-center lg:text-left">
//          <h2 className="text-3xl font-semibold text-accent italic font-heading mt-5">
//   About Us
// </h2>

// <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-poppins mb-4 bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text">
//   We Can Make Your Place Sparkle
// </h2>


//           <p className="text-gray-600 leading-6 font-sans text-sm">
//             At Zollowup Services, we are dedicated to providing top-quality home
//             and business services that bring convenience and reliability to your
//             doorstep. From experienced maids and professional cleaners to skilled
//             plumbers and electricians, we ensure every service is delivered with excellence and trust.
//           </p>
//           <p className="text-gray-600 mb-6 leading-6 font-sans text-sm">
//             With a commitment to quality, affordability, and customer satisfaction,
//             we simplify home management by connecting you with verified professionals.
//             Whether you need routine cleaning, emergency repairs, or specialized care,
//             we’ve got you covered with on-demand, hassle-free booking.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans items-start text-sm">
//             <ul className="space-y-1">
//               <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> House Cleaning Service</li>
//               <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Housekeeping</li>
//               <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Commercial Cleaning</li>
//             </ul>
//             <ul className="space-y-1">
//               <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> Satisfaction Guaranteed</li>
//               <li className="text-gray-800 flex items-center justify-center sm:justify-start"><span className="text-accent mr-2">-</span> All Equipment Provided</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Who We Are Section */}
//       <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-5xl mb-5 mx-auto">
//         <h2 className="text-3xl font-bold text-primary mb-6 text-center font-heading">
//           Who We Are – <span className="font-bold font-poppins mb-4 bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text" > Your Trusted Home Service Experts</span>
//         </h2>
//         <p className="text-gray-700 mb-6 leading-relaxed text-center font-sans">
//           We are a team of service professionals and tech innovators who believe
//           in simplifying home management. With a rigorous vetting process,
//           real-time scheduling, and customer-first approach, we ensure that you
//           get the best service providers for your needs. Whether it’s a quick
//           fix, a deep clean, or elderly care, we connect you with trained
//           experts who prioritize your comfort and satisfaction. Life gets busy,
//           and finding reliable, professional, and affordable home services can
//           be challenging. That’s where we come in <b>Zollowup</b> was created to
//           provide a seamless, all-in-one solution for every household service
//           you may need. We focus on:
//         </p>
//         <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto text-gray-800">
//           <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Verified & Skilled Professionals</li>
//           <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Easy Online Booking & Instant Support</li>
//           <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Affordable, Transparent Pricing</li>
//           <li className="flex items-center"><span className="text-accent mr-3">&#10003;</span> Reliable Services at Your Convenience</li>
//         </ul>
//         <div className="text-center">
//             <PrimaryButton label="Book Now Service" onClick={() => navigate('/contact')} />

// </div>

//       </div>

//       <Cards />
//       {/* <Whyus /> */}
//       <Handycleaning />

//       <AboutCta />
//     </div>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import AboutCta from "../components/AboutCta";
import WhyChooseZollowup from "../components/WhyChooseZollowup";
import Cards from "../components/Cards";
import ExitIntentPopup from "../components/ExitIntentPopup";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <ExitIntentPopup />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=320&fit=crop"
                    alt="Professional Cleaning Service"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg overflow-hidden shadow-lg h-64 sm:h-80 mt-8"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531746790731-6c087fecd65b?w=400&h=320&fit=crop"
                    alt="Home Services"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-primary-600">ZollowUp</span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary-600 mb-6">
                We Make Your Home Management Simple
              </h2>

              <p className="text-gray-700 leading-8 mb-6 text-lg">
                At ZollowUp, we believe that finding reliable, professional help for your home shouldn't be complicated. We connect you with verified, skilled professionals who care about doing excellent work.
              </p>

              <p className="text-gray-700 leading-8 mb-8 text-lg">
                From cleaning and housekeeping to nursing care, electricians, plumbers, and more—we've got every service your home needs, all in one trusted platform. With transparent pricing, easy booking, and 24/7 support, we make home management effortless.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <PrimaryButton label="Book a Service" onClick={() => navigate('/services')} />
                <button
                  onClick={() => navigate('/contact')}
                  className="px-6 py-3 border-2 border-primary-500 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition"
                >
                  Get in Touch
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-6 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Story</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Stat 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">10,000+</h3>
              <p className="text-gray-700 font-semibold">Happy Customers</p>
              <p className="text-gray-600 text-sm mt-2">Trusted us with their home care</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">8+</h3>
              <p className="text-gray-700 font-semibold">Service Categories</p>
              <p className="text-gray-600 text-sm mt-2">All your home service needs</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg text-center"
            >
              <h3 className="text-4xl font-bold text-primary-600 mb-2">24/7</h3>
              <p className="text-gray-700 font-semibold">Customer Support</p>
              <p className="text-gray-600 text-sm mt-2">Always here when you need us</p>
            </motion.div>
          </div>

          <p className="text-gray-700 leading-8 text-center text-lg mb-8">
            ZollowUp was born from a simple idea: <b>finding reliable home services shouldn't be stressful.</b> We saw families struggling to find trustworthy professionals, dealing with unreliable workers, and overpaying for basic services. So we built ZollowUp—a platform that brings verified, professional service providers directly to you.
          </p>

          <p className="text-gray-700 leading-8 text-center text-lg">
            Today, we're proud to serve thousands of families across India, connecting them with professionals they can trust for cleaning, nursing care, repairs, and everything else their homes need.
          </p>
        </div>
      </div>

      {/* Mission & Vision - Cards */}
      <Cards />

      {/* Why Choose ZollowUp - All Services */}
      <WhyChooseZollowup />

      {/* Call to Action */}
      <AboutCta />
    </div>
  );
};

export default About;
