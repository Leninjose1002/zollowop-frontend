// import React, { useState } from "react";
// import ChefRequirementForm from "./ChefRequirementForm";

// const Chef = () => {
//   const [showModal, setShowModal] = useState(false);
//   const closeModal = () => setShowModal(false);

//   return (
//     <>
//       <div className="bg-white py-12 px-4 sm:px-6 md:px-20">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
//           {/* Text Section */}
//           <div className="text-center lg:text-left flex-1">
//             <h1 className="text-2xl sm:text-3xl font-bold text-white">
//               <span className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110 px-3 py-1 rounded-md inline-block">
//                 Chefs at Home – When You Need Them Most
//               </span>
//             </h1>
//             <p className="text-base sm:text-lg text-black mt-4 sm:mt-6">
//               From birthday parties to pujas we have  happy customers in each city.
//             </p>
//             <button
//               onClick={() => setShowModal(true)}
//               className="mt-5 sm:mt-6  bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110 text-sm font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow-md hover:shadow-lg transition"
//             >
//               Book Now
//             </button>
//           </div>

//           {/* Images Section */}
//           <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 flex-1">
//             <img
//               src="https://img.freepik.com/premium-vector/curry-dishes_78118-131.jpg"
//               alt="Chef 1"
//               className="w-28 sm:w-36 md:w-44 object-contain"
//             />
//             <img
//               src="https://img.freepik.com/premium-vector/drawing-chef-cooking-with-spoon-sauce_1087929-12556.jpg"
//               alt="Chef 2"
//               className="w-28 sm:w-36 md:w-44 object-contain"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white w-full max-w-2xl rounded-lg p-4 sm:p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
//             >
//               &times;
//             </button>
//             <ChefRequirementForm closeModal={closeModal} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chef;

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Chef = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const services = [
    { id: 'chef-1', title: 'Home Chef (Hourly)', price: '₹800/hr', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', rating: 4.9, reviews: 512, badge: "Popular" },
    { id: 'chef-2', title: 'Daily Meal Prep', price: '₹2,500/day', image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop', rating: 4.8, reviews: 389, badge: "Top Rated" },
    { id: 'chef-3', title: 'Party Catering (25 pax)', price: '₹5,000', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561537?w=400&h=400&fit=crop', rating: 4.9, reviews: 234, badge: "Premium" },
    { id: 'chef-4', title: 'Party Catering (50 pax)', price: '₹8,000', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561537?w=400&h=400&fit=crop', rating: 4.9, reviews: 267, badge: "Premium" },
    { id: 'chef-5', title: 'Wedding Catering', price: '₹15,000+', image: 'https://images.unsplash.com/photo-1535328039512-e19e1b38b16c?w=400&h=400&fit=crop', rating: 4.9, reviews: 334, badge: "Premium" },
    { id: 'chef-6', title: 'Italian Cuisine Chef', price: '₹1,200/hr', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', rating: 4.8, reviews: 198, badge: "Specialized" },
    { id: 'chef-7', title: 'Continental Chef', price: '₹1,200/hr', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', rating: 4.8, reviews: 176, badge: "Specialized" },
    { id: 'chef-8', title: 'Indian Cuisine Chef', price: '₹900/hr', image: 'https://images.unsplash.com/photo-1565636192335-14efbe92bff5?w=400&h=400&fit=crop', rating: 4.9, reviews: 445, badge: "Popular" },
    { id: 'chef-9', title: 'Dietary-Specific Meals', price: '₹3,000/day', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop', rating: 4.8, reviews: 245, badge: "Healthy" },
    { id: 'chef-10', title: 'Asian Fusion Chef', price: '₹1,100/hr', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop', rating: 4.7, reviews: 167, badge: "Trending" },
    { id: 'chef-11', title: 'Dessert & Pastry Chef', price: '₹1,000/hr', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop', rating: 4.9, reviews: 289, badge: "Specialty" },
    { id: 'chef-12', title: 'Corporate Event Catering', price: '₹10,000+', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561537?w=400&h=400&fit=crop', rating: 4.8, reviews: 201, badge: "Premium" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Expert Chefs",
      description: "Professional trained chefs with years of culinary experience",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "Quality Ingredients",
      description: "Fresh, premium quality ingredients sourced daily",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Hygiene Certified",
      description: "Food safety and hygiene certified professionals",
    },
  ];

  const handleAddToCart = (service) => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      image: service.image,
      quantity: 1,
    });
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-primary-600">Professional Chefs</span> at Your Home
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From birthday parties to weddings, pujas to corporate events. Expert chefs for every occasion. Fresh meals, delicious food, memorable celebrations.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.9 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">50,000+ Events</div>
              <div className="text-gray-900 font-bold">Same-Day Available</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Services</span> (12 Options)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-200 transition transform hover:scale-105 flex flex-col"
              >
                {/* Image */}
                <div className="w-full h-40 overflow-hidden bg-gray-200 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2">
                      {service.title}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star size={12} fill="#059669" className="text-primary-600" />
                        <span className="font-bold text-gray-900 text-xs">
                          {service.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-600">
                        ({service.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mb-3">
                      <p className="text-xs text-gray-600">Starting from</p>
                      <p className="text-lg font-bold text-primary-600">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(service)}
                    className="w-full py-2 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition text-xs"
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-primary-600">Specialties</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎉 Event Catering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Birthday parties</li>
                <li>✓ Weddings & receptions</li>
                <li>✓ Corporate events</li>
                <li>✓ Puja & religious events</li>
                <li>✓ Family gatherings</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍽️ Cuisine Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Indian cuisine</li>
                <li>✓ Continental</li>
                <li>✓ Italian</li>
                <li>✓ Asian fusion</li>
                <li>✓ Dietary-specific</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Service Types</h3>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Hourly home chef</li>
                <li>✓ Daily meal prep</li>
                <li>✓ Event catering</li>
                <li>✓ Dessert & pastry</li>
                <li>✓ Menu planning</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our <span className="text-primary-600">Chefs?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Professionally Trained</h3>
              <p className="text-gray-600">
                All our chefs are professionally trained with certifications. Years of experience in various cuisines and event catering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Flexible Options</h3>
              <p className="text-gray-600">
                Choose from hourly services, daily meal prep, or comprehensive event catering. Customized menus for your needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Fresh Ingredients</h3>
              <p className="text-gray-600">
                Premium quality ingredients sourced daily. Farm-fresh vegetables, quality meats, and organic products when requested.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Hygiene Standards</h3>
              <p className="text-gray-600">
                Strict food safety and hygiene protocols. Certified professionals ensuring clean kitchen practices and safe food handling.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Event Catering <span className="text-primary-600">Includes</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Professional chef at your venue",
              "Customized menu planning",
              "Quality ingredient sourcing",
              "Meal preparation & cooking",
              "Plating & presentation",
              "On-site kitchen coordination",
              "Food serving setup",
              "Cleanup & dishwashing",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-center gap-3 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">✓</span>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
        <h2 className="text-3xl font-bold mb-4">Planning a Special Event?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Need a custom menu or special arrangements? Contact us for personalized chef services and event catering packages.
        </p>
        <button 
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>

      {/* EMERGENCY CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 py-20 px-6 sm:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need a Chef Today?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book a professional chef for your next meal or event. Same-day available for urgent bookings and special occasions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = "tel:+919218028500"}
              className="px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Call Now
            </button>
            <button
              onClick={() => navigate("/employee-form")}
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-600 transition"
            >
              Join as Chef
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chef;
