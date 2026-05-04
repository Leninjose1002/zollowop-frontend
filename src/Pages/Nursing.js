// // src/pages/Nursing.js
// import React, { useState } from "react";
// import NurseRequirementForm from "./NurseRequirementForm";

// const services = [
//   {
//     title: "Elderly Care",
//     description: "Daily support and companionship for senior citizens with mobility or health challenges.",
//     image: "/images/nursing/elderly-care-img.avif",
//   },
//   {
//     title: "Post-Surgical Care",
//     description: "Professional nursing to help patients recover safely at home after surgery.",
//     image: "/images/nursing/Post-Surgical-Care.avif",
//   },
//   {
//     title: "ICU Care at Home",
//     description: "ICU-trained nurses to manage critical care patients with ventilators and monitoring equipment.",
//     image: "/images/nursing/ICU-Care.avif",
//   },
//   {
//     title: "Baby & Mother Care",
//     description: "Trained caregivers to support new mothers and ensure newborn hygiene and feeding.",
//     image: "/images/nursing/Baby-Mother-Care.avif",
//   },
//   {
//     title: "Injections & IV Drips",
//     description: "On-call nurses for injections, IV fluids, and quick medical procedures at home.",
//     image: "/images/nursing/Injections-IV-Drips-img.avif",
//   },
//   {
//     title: "Palliative Care",
//     description: "Compassionate nursing for terminally ill patients focusing on comfort and quality of life.",
//     image: "/images/nursing/Palliative-Care-img.avif",
//   },
//   {
//     title: "Bedridden Care",
//     description: "24x7 care for patients who are completely immobile, including hygiene and sore prevention.",
//     image: "/images/nursing/Bedridden-Care-img.jpg",
//   },
//   {
//     title: "Night Nursing",
//     description: "Professional nursing services available overnight for patient monitoring and care.",
//     image: "/images/nursing/Post-Surgical-Care.avif",
//   },
// ];

// const Nursing = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const handleBookNow = (service) => {
//     setSelectedService(service);
//     setShowForm(true);
//   };

//   return (
//     <div className="px-4 py-8 sm:px-6 md:px-10">
//       <div className="text-center mb-10">
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-600">
//           Medical Services We Provide
//         </h1>
//         <p className="text-gray-600 mt-2 text-sm sm:text-base">
//           Choose the care you need, and we’ll bring it to your doorstep.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
//         {services.map((service, index) => (
//           <div
//             key={index}
//   className="bg-white rounded-2xl shadow-md border transition-all duration-300 flex flex-col overflow-hidden hover:shadow-md hover:border-blue-500"
//           >
//             <img
//               src={service.image}
//               alt={service.title}
//               className="h-44 w-full object-cover transform hover:scale-105 transition-transform duration-300"
//             />
//             <div className="p-4 flex flex-col justify-between flex-grow">
//               <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
//                 {service.title}
//               </h2>
//               <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
//               <button
//                 onClick={() => handleBookNow(service)}
// className="mt-4 px-4 py-2 rounded-full bg-blue-900  text-white text-sm transition duration-300 w-full shadow-md"
//               > 
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal with Nurse Form */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-xl p-6 w-full max-w-2xl relative max-h-[90vh] overflow-y-auto">
//             <button
//               onClick={() => setShowForm(false)}
//               className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold text-blue-500 mb-4">
//               Book: {selectedService?.title}
//             </h2>
//             <NurseRequirementForm onClose={() => setShowForm(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Nursing;

import React from "react";
import { motion } from "framer-motion";
import { Star, Zap, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

const Nursing = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const services = [
    { id: 'nursing-1', title: 'Elderly Care', price: '₹2,500', image: 'https://images.unsplash.com/photo-1576091160550-112173f7f9db?w=400&h=400&fit=crop', rating: 4.9, reviews: 567, badge: "Popular" },
    { id: 'nursing-2', title: 'Post-Surgical Care', price: '₹2,500', image: 'https://images.unsplash.com/photo-1631217314830-4e5b92bbf02e?w=400&h=400&fit=crop', rating: 4.8, reviews: 445, badge: "Top Rated" },
    { id: 'nursing-3', title: 'ICU Care at Home', price: '₹5,000', image: 'https://images.unsplash.com/photo-1576091160515-86ae36807176?w=400&h=400&fit=crop', rating: 4.9, reviews: 334, badge: "Premium" },
    { id: 'nursing-4', title: 'Baby & Mother Care', price: '₹2,000', image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=400&fit=crop', rating: 4.8, reviews: 512, badge: "Quality" },
    { id: 'nursing-5', title: 'Injections & IV Drips', price: '₹1,500', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop', rating: 4.7, reviews: 289, badge: "Fast" },
    { id: 'nursing-6', title: 'Palliative Care', price: '₹3,000', image: 'https://images.unsplash.com/photo-1631217314830-4e5b92bbf02e?w=400&h=400&fit=crop', rating: 4.8, reviews: 198, badge: "Compassionate" },
    { id: 'nursing-7', title: 'Bedridden Care', price: '₹2,500', image: 'https://images.unsplash.com/photo-1576091160550-112173f7f9db?w=400&h=400&fit=crop', rating: 4.9, reviews: 423, badge: "Professional" },
    { id: 'nursing-8', title: 'Night Nursing', price: '₹3,000', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=400&fit=crop', rating: 4.8, reviews: 267, badge: "Reliable" },
  ];

  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Certified Nurses",
      description: "Qualified, experienced healthcare professionals",
    },
    {
      icon: <BarChart3 className="text-primary-600" size={32} />,
      title: "24/7 Available",
      description: "Round-the-clock nursing care when you need it",
    },
    {
      icon: <Shield className="text-primary-600" size={32} />,
      title: "Medical Support",
      description: "Professional medical care in the comfort of your home",
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
              Professional <span className="text-primary-600">Nursing Care</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert nurses for home healthcare. Medical support for elderly care, post-surgery recovery, and specialized nursing needs.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="text-primary-600" fill="currentColor" />
                <span className="font-bold text-gray-900">4.9 Rating</span>
              </div>
              <div className="text-gray-900 font-bold">12,000+ Patients</div>
              <div className="text-gray-900 font-bold">24/7 Available</div>
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
            Our <span className="text-primary-600">Services</span> (8 Options)
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

      {/* SERVICE DETAILS SECTION */}
      <section className="py-20 px-6 sm:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our <span className="text-primary-600">Nursing Services?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Trained Professionals</h3>
              <p className="text-gray-600">
                All our nurses are certified and trained in their respective specialties. Background-checked and experienced.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Personalized Care</h3>
              <p className="text-gray-600">
                Customized nursing plans based on individual patient needs. Compassionate and attentive care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Available 24/7</h3>
              <p className="text-gray-600">
                Round-the-clock availability for day, night, or live-in nursing services as per your requirement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-primary-600"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Hygiene & Safety</h3>
              <p className="text-gray-600">
                Strict hygiene protocols and safety standards. Medical equipment properly sanitized and maintained.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-12 text-center text-white my-12 mx-6 sm:mx-8">
        <h2 className="text-3xl font-bold mb-4">Special Medical Needs?</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Require specialized nursing care not listed? Contact us for personalized nursing packages and custom requirements.
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
            Medical Emergency?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Need urgent nursing support? Call us immediately for emergency home healthcare services.
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
              Join as Nurse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nursing;
